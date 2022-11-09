/* ------------------------------------------------------------------------- *
 *  Proofscape Browser Extension                                             *
 *                                                                           *
 *  Copyright (c) 2020-2022 Proofscape contributors                          *
 *                                                                           *
 *  Licensed under the Apache License, Version 2.0 (the "License");          *
 *  you may not use this file except in compliance with the License.         *
 *  You may obtain a copy of the License at                                  *
 *                                                                           *
 *      http://www.apache.org/licenses/LICENSE-2.0                           *
 *                                                                           *
 *  Unless required by applicable law or agreed to in writing, software      *
 *  distributed under the License is distributed on an "AS IS" BASIS,        *
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 *  See the License for the specific language governing permissions and      *
 *  limitations under the License.                                           *
 * ------------------------------------------------------------------------- */

const browser = require("webextension-polyfill");

import {getByteArray, setByteArray} from "./cache";
import { LackingHostPermissionError } from "browser-peers/src/errors";
import { fetchPdf } from "./util";

/*
 * This is an abstract class, representing the general pattern of fetching PDFs,
 * storing them in the cache, and retrieving them from the cache. It is not meant
 * to be used directly, but subclassed.
 *
 * The abstract methods that MUST be overridden by usable subclasses are clearly
 * set off at the end of the class declaration. Other methods MAY be overridden
 * as needed.
 */
class AbstractDownloadMgr {

    constructor() {
        /* Writing to storage is very slow in Firefox, and not exactly fast in Chrome either.
         * In our tests on a 2019 MacBook Pro, Chrome wrote at about 0.6s per MB, and Firefox
         * at about 2.7s per MB! See our `test_exts` repo for more details.
         *
         * So, since a 10MB PDF could take half a minute to be recorded in storage, we need
         * a place for its byte array to live in case it is requested during that time. This
         * is that place:
         */
        this.pendingPdfByteArrays = new Map();

        /* Subclasses should decide whether they want to do delayed storage, probably based
         * on constructor options.
         */
        this.doDelayedStorage = false;
    }

    /* Get a PDF. This is the main method users are meant to call.
     *
     * We check whether the PDF is already present in the cache. If so, we return it from there.
     * Otherwise we attempt to fetch it from the Internet, cache it, and return it. There's also
     * the in-between case, where we've fetched it but are still waiting to complete
     * the slow operation of writing it to storage, during which time we return the byte array from memory.
     *
     * @param url {string} the URL of the desired PDF
     * @param asPlainArray {bool} set true if you want the byte array as a plain Array;
     *   otherwise it will be a Uint8Array.
     * @return promise that resolves with object of the form: {
     *   url: <string> the URL of the PDF
     *   bytes: <Uint8Array|Array> the bytes of the PDF
     *   size: <int> the size of the PDF in bytes
     *   fromMemory: <bool> true if the PDF was still in the download manager's memory.
     *       This means it had been fetched, but not yet committed to storage.
     *   fromCache: <bool> true if the PDF was retrieved from storage.
     *   comment: <string> if retrieved from cache, the comment text for this entry (else undefined)
     *   tooBigForCache: <bool> true if the PDF was fetched and turned out to be too big for the cache,
     *     i.e. larger than the cache's current capacity setting, and therefore will _not_ be cached.
     *     This is useful so that the app can warn the user that the PDF will have to be downloaded
     *     every time unless the capacity is increased.
     * }
     */
    async getPdf({ url, asPlainArray = false }) {
        const info = await this.accessPdfCacheInfo({url:url});
        const havePendingArray = this.pendingPdfByteArrays.has(url);
        if (info) {
            if (info.stored) {
                // The cache says we already have this PDF.
                if (havePendingArray) {
                    // Oops, the byte array is actually no longer pending; time for some late clean up.
                    // This case can arise if the PDF was downloaded on the CS side, but the CS failed to
                    // receive the message from the BGS that the array had been stored.
                    // That can happen in Firefox (Dev Edition, v107.0b9 at time of testing)
                    // because it seems that if the user manually closes the extension's options page during the
                    // download process (which is quite likely if the options page was opened in order for the user
                    // to grant download permission), this causes Ports to be forcibly disconnected, in particular that
                    // Port on which the call to `mgr.storePdfBytes()` down in our `downloadPdf()` method is awaiting
                    // notice of completed array storage.
                    console.debug(`Storage of PDF array ${url} was completed earlier. Deleting from pending map now.`);
                    this.pendingPdfByteArrays.delete(url);
                }
                const plainArray = await this.readPdfBytes({url: url});
                // In testing, it was witnessed one time that the cache said we had a PDF, and yet
                // the byte array turned out to be undefined. It happened during early efforts to switch
                // to Manifest V3, and I have not been able to reproduce the error. Still, we take
                // this moment to check whether we actually have data. If not, we just let the
                // download happen again (and it will overwrite the existing array).
                if (plainArray?.length) {
                    console.debug(`Found PDF bytes for "${url}" in cache.`);
                    return {
                        url: url,
                        bytes: asPlainArray ? plainArray : new Uint8Array(plainArray),
                        size: plainArray.length,
                        fromCache: true,
                        comment: info.comment,
                    };
                }
                console.debug(`Found no PDF bytes for "${url}", said to be present in the cache.`);
            } else if (havePendingArray) {
                // The PDF has already been fetched, but the byte array hasn't been
                // recorded in storage yet, and is still held in memory.
                const byteArray = this.pendingPdfByteArrays.get(url);
                console.debug(`Found PDF bytes for "${url}" still pending storage.`);
                return {
                    url: url,
                    bytes: asPlainArray ? Array.from(byteArray) : byteArray,
                    size: byteArray.length,
                    fromMemory: true,
                };
            }
        }
        // The PDF is neither in the cache, nor among the pending arrays. We must download it.
        return this.downloadPdf({url: url, asPlainArray: asPlainArray});
    }

    downloadPdf({ url, asPlainArray = false }) {
        const mgr = this;
        return this.checkHostPermission({url: url, doThrow: true}).then(() => {
            console.debug(`Initiating fetch for PDF ${url}.`);
            return mgr.fetchPdf({url: url}).then(byteArray => {
                const size = byteArray.length;
                return mgr.addNewPdfCacheInfo({url:url, size:size}).then(accepted => {
                    if (accepted) {
                        console.debug(`Queuing PDF array ${url} for storage.`);
                        mgr.pendingPdfByteArrays.set(url, byteArray);
                        mgr.storePdfBytes({ url: url, bytes: Array.from(byteArray), delayed: mgr.doDelayedStorage }).then(() => {
                            mgr.pendingPdfByteArrays.delete(url);
                        });
                    } else {
                        console.debug(`PDF array ${url} was rejected, and will not be stored.`);
                    }
                    return {
                        url: url,
                        bytes: asPlainArray ? Array.from(byteArray) : byteArray,
                        size: byteArray.length,
                        tooBigForCache: !accepted,
                    };
                });
            });
        });
    }

    /* Check whether we have host permission for a given URL.
     *
     * @param url {string} the URL in question,
     * @param doThrow {bool} set true if you want this handler to throw an error in case
     *     the named host permission is lacking
     * @return: promise that resolves with boolean
     */
    checkHostPermission({ url, doThrow = true }) {
        const required_host_permission = { origins: [url] };
        return browser.permissions.contains(required_host_permission).then(able => {
            if (doThrow && !able) {
                const e = new LackingHostPermissionError({url: url});
                throw new Error(e.serialize());
            }
            return able;
        });
    }

    fetchPdf({ url }) {
        return fetchPdf(url);
    }

    // ------------------------------------------------------
    // Abstract methods. Usable subclasses MUST override.

    /* Access the cache info (if any) for a PDF.
     * If present, the recentness and access time for the entry are updated.
     *
     * @param url {string} the URL of the PDF of interest
     * @return: promise that resolves with the desired cache info, or undefined if not present
     */
    accessPdfCacheInfo({ url }) {
        return Promise.resolve(undefined);
    }

    /* Add a new cache entry for a PDF.
     *
     * @param url: {string} the URL of the PDF,
     * @param size: {int} the length of the PDF byte array
     *
     * @return: promise that resolves with boolean saying whether the entry was accepted (true)
     *   or rejected for being too "large" according to msg.size.
     */
    addNewPdfCacheInfo({ url, size }) {
        return Promise.resolve(true);
    }

    /* Read a PDF byte array from storage.
     *
     * @param url {string} the URL of the PDF
     *
     * @return promise that resolves with the byte array (as plain Array)
     */
    readPdfBytes({ url }) {
        return Promise.resolve([]);
    }

    /* Store a PDF byte array.
     *
     * @param url: {string} the URL of the PDF
     * @param bytes: {Array[int]} the byte array of the PDF
     * @param delayed: {bool} Set true in order to do delayed storage. In this case,
     *   behavior depends on whether `bytes` is defined or not. If defined, we simply
     *   stash the byte array in a Map under its URL; if undefined, we retrieve the array
     *   from said Map, and finally do actually store it.
     *
     * @return promise that resolves when the operation is complete
     */
    storePdfBytes({ url, bytes, delayed }) {
        return Promise.resolve();
    }

}

// ------------------------------------------------------------------------

/*
 * This is a download manager intended for use at the background script level.
 *
 * This reflects our decision to let the BGS manage the singleton instance of
 * our CacheIndex class. This makes sense, since we want the CacheIndex to live
 * in memory for the duration of the browser's runtime, and in the BGS where it
 * is accessible to each CS running in each browser tab.
 *
 * The manager is constructed with a reference to the CacheIndex, and uses it
 * directly.
 */
export class BgsDownloadMgr extends AbstractDownloadMgr {

    /*
     * @param cacheIndex {CacheIndex} an instance of the CacheIndex class defined
     *   in our cache.js module, representing the current contents of our PDF cache.
     * @param options {
     *   doDelayedStorage {bool} false means store immediately after fetch; true means
     *      wait until `storePdfBytes` is called again with matching URL and undefined bytes.
     * }
     */
    constructor(cacheIndex, {
        doDelayedStorage = true,
    }) {
        super();
        this.cacheIndex = cacheIndex;
        this.delayedBytes = new Map();
        this.doDelayedStorage = doDelayedStorage;
    }

    accessPdfCacheInfo({ url }) {
        return Promise.resolve(this.cacheIndex.access(url));
    }

    addNewPdfCacheInfo({ url, size }) {
        return Promise.resolve(this.cacheIndex.addPdf(url, size));
    }

    storePdfBytes({ url, bytes, delayed }) {
        if (delayed) {
            if (bytes) {
                // You said "delayed" and you provided bytes. This means you want to stash
                // them now, to be stored later.
                console.debug('stashing PDF for delayed storage');
                this.delayedBytes.set(url, bytes);
                return Promise.resolve();
            } else if (this.delayedBytes.has(url)) {
                // You said "delayed", and you didn't provide bytes, but we found stashed bytes
                // under the given URL. This means it's time to complete this delayed storage.
                console.debug('retrieving PDF for delayed storage');
                bytes = this.delayedBytes.get(url);
                this.delayedBytes.delete(url);
            } else {
                // You said "delayed", and you didn't provide bytes, and we didn't find any stashed
                // bytes either. This just means the delayed storage was already completed earlier,
                // and we have nothing to do.
                return Promise.resolve();
            }
        }
        console.debug(new Date(), 'storing PDF...');
        return setByteArray(url, bytes, this.cacheIndex).then(() => {
            console.debug(new Date(), 'finished storing PDF');
        });
    }

    readPdfBytes({ url }) {
        return getByteArray(url);
    }

}

// ------------------------------------------------------------------------

/*
 * This is a download manager intended for use at the content script level.
 *
 * Here you have options about where cache reads should take place (CS or BGS),
 * and, on Firefox, where fetch should take place, again CS or BGS. On Chrome,
 * fetch is only allowed in BGS.
 */
export class CsDownloadMgr extends AbstractDownloadMgr {

    /*
     * @param csPeer {CsBgsPeer} CS-side peer for connecting to BGS.
     * @param bgPeerName {string} the name of the BGS-side peer to which we will make requests.
     * @param bgDlmName {string} the name under which the BG's DownloadManager is registered
     *   as a handler in the BGS-side peer.
     */
    constructor(csPeer, bgPeerName, bgDlmName) {
        super();
        this.csPeer = csPeer;
        this.bgPeerName = bgPeerName;
        this.bgDlmName = bgDlmName;
        this.queryBg = this.csPeer.makeRequest.bind(this.csPeer);
    }

    checkConfigValue(name) {
        return this.queryBg(this.bgPeerName, 'readConfigVar', {name});
    }

    /* Convenience method for passing a request (via our `ClientForBgServer` instance) to
     * the background download manager, i.e. the `BgsDownloadMgr` instantiated in our BGS.
     *
     * @param methodName {string} the name of the method in the `BgsDownloadMgr` class you
     *   wish to call.
     * @param args {obj} the arguments object the method expects.
     * @return: the return value of the method called, forwarded across the Port link between
     *   CS and BGS. Be sure to request only return values that are JSON serializable!
     */
    useBgDlm(methodName, args) {
        return this.queryBg(this.bgPeerName, `${this.bgDlmName}.${methodName}`, args);
    }

    accessPdfCacheInfo(args) {
        // The BGS owns the singleton CacheIndex instance, so we defer.
        return this.useBgDlm('accessPdfCacheInfo', args);
    }

    addNewPdfCacheInfo(args) {
        // The BGS owns the singleton CacheIndex instance, so we defer.
        return this.useBgDlm('addNewPdfCacheInfo', args);
    }

    checkHostPermission(args) {
        // We're not allowed to work with `browser.permissions` in CS, so defer to BGS for this.
        return this.useBgDlm('checkHostPermission', args);
    }

    readPdfBytes({ url }) {
        return this.checkConfigValue('readStorageInBg').then(readStorageInBg => {
            return readStorageInBg ?
                this.useBgDlm('readPdfBytes', {url: url}) :
                getByteArray(url);
        });
    }

    downloadPdf({url, asPlainArray = false}) {
        return this.checkConfigValue('fetchInBg').then(fetchInBg => {
            return fetchInBg ?
                // If we're fetching in the background, then we actually want to defer to the BG dlm's
                // full `getPdf` method (not just its `downloadPdf` method), since we want the chance to
                // hit the `fromMemory` case. Also we must request the byte array as plain array, and then
                // convert it into a Uint8Array ourselves.
                this.useBgDlm('getPdf', {url: url, asPlainArray: true}).then(info => {
                    info.bytes = new Uint8Array(info.bytes);
                    return info;
                }) :
                // If we're fetching in foreground, just follow the standard procedure.
                super.downloadPdf({url: url});
        });
    }

    storePdfBytes(args) {
        // Writing to storage from CS blocks the main thread, and the spinner freezes,
        // so we ask the BGS to do it. In Firefox (where this matters, since we're allowed to fetch in CS),
        // writing to storage is VERY slow, but sending a PDF to BGS over Port is much faster (by a factor
        // of about 4.3 to 5.0 in my tests in FirefoxDE 82.0b7 on a 2019 MacBook Pro).
        console.debug('CS download mgr deferring to BGS');
        return this.useBgDlm('storePdfBytes', args);
    }

    completeDelayedPdfStorage({ url }) {
        return this.storePdfBytes({url: url, delayed: true});
    }

}
