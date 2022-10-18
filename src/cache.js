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

/*
 * We implement a dedicated on-disk cache for PDFs, using the `storage` API.
 *
 * We employ a multi-part design, where the actual PDF byte arrays are stored
 * separately from what we call the "cache index," the latter including all the
 * information _about_ the PDFs, like last access time, user-supplied comments,
 * etc.
 *
 * This allows the index to be kept in memory since it is small, while
 * the (potentially very large) PDF byte arrays reside on disk.
 *
 * Rationale:
 * One or two PDFs cached in memory might be fine, but that is already implemented
 * by the `PdfManager` class in the Proofscape ISE app. This browser extension cache,
 * on the other hand, is expected to be on the order of 100 MB in size (or even larger),
 * and is intended for long-term storage. To simply load all of that into memory could
 * represent a significant impact on the web browser's memory profile, and that is not
 * something that should just "happen" without the user's knowledge.
 */

const browser = require("webextension-polyfill");
const LRU = require("lru-cache");

import { nowStampLex } from "./util";

const CACHE_INDEX_NAME = 'cache:index';
const CACHE_BYTES_PREFIX = 'cache:bytes:';
const CACHE_INITIAL_MAX_MB = 100;


/*
 * Restore the CacheIndex from its representation in storage. This is how it is
 * preserved across browser restarts. If starting up for the first time ever, we
 * get an empty cache with the default capacity.
 *
 * @return: promise that resolves with a CacheIndex instance.
 */
function restoreCacheIndexFromStorage() {
    return browser.storage.local.get(CACHE_INDEX_NAME).then(items => {
        const info = items[CACHE_INDEX_NAME] || {};
        return loadCacheIndex(info);
    });
}

/*
 * Reconstruct a `CacheIndex` instance from an object of the kind returned
 * by `CacheIndex.dump()`, except that all fields are optional.
 *
 * If `maxMB` is omitted, we use the default value.
 * If `lruDump` is omitted, the cache starts out empty.
 *
 * @return: CacheIndex instance.
 */
function loadCacheIndex(dump) {
    const cache = new CacheIndex(dump.maxMB || CACHE_INITIAL_MAX_MB);
    if (dump.hasOwnProperty('lruDump')) {
        cache.lru.load(dump.lruDump);
    }
    return cache;
}

/*
 * A class to represent all the cache index information.
 *
 * At its core, this class uses an LRU cache (`this.lru`) as implemented by the `lru-cache` npm package.
 * See <https://www.npmjs.com/package/lru-cache>.
 * This is the component that actually decides which PDFs are most/least recently used, and tells us when
 * it is time to drop an entry.
 *
 * The LRU cache is implemented like a Map (keys & values), and in `this.lru` we use PDF URLs (<string>) as
 * keys, while values are objects of the form:
 * {
 *   url: <string> the URL of the PDF,
 *   size: <int> the size of the PDF in bytes,
 *   mtime: <string> timestamp at time of initial storage,
 *   atime: <string> timestamp at time of most recent access,
 *   comment: <string> optional place for user to record notes (e.g. title and author of PDF)
 * }
 *
 * Meanwhile, in `this.maxMB` we keep the capacity of the cache.
 * This class also provides various convenience methods.
 *
 * Theoretically an LRU cache instance alone _could_ have been sufficient, but this seemed inadvisable
 * since the capacity of the LRU cache is _not_ currently a part of its API. It could be read, but that
 * would be a hack, and would commit us to compatibility testing even on minor version updates.
 * Plus our class's convenience methods are, well, convenient.
 */
class CacheIndex {

    /*
     * maxMB: the desired capacity of the cache, in megabytes.
     */
    constructor(maxMB) {
        this.maxMB = maxMB;
        /* Note: Do NOT set `updateAgeOnGet`. Reading the documentation for the LRU class (see link above), you
         * might think setting this option would be "on the safe side" in your goal to make a cache where elements
         * never expire. This is completely wrong. In fact it makes it so that if you ever `get` an element of the
         * cache, and then dump and reload from dump, then that element will be guaranteed to be rejected from the
         * restored cache. I.e. during reload it will be viewed as expired.
         *
         * The way to have elements that never expire is simply to `set` them with `maxAge` (i.e. the third argument
         * to `set`) equal to `0`. Or don't pass a `maxAge` argument at all when adding elements to the cache. (But
         * setting `0` makes your intention explicit, which is good.) Also don't set a `maxAge` when constructing
         * the LRU instance itself.
         *
         * If you are having an issue, examine the cache dump array. The `e` attribute of each entry should be `0`.
         * If it is a positive number, that entry has an expiration date.
         */
        this.lru = new LRU({
            max: maxMB * 1048576,
            length: (value, key) => value.size,
            dispose: this.dispose.bind(this),
        });
    }

    /*
     * Return a serializable object from which the same CacheIndex can be reconstructed.
     */
    dump() {
        const lruDump = this.lru.dump();
        //console.log('lruDump', lruDump);
        return {
            maxMB: this.maxMB,
            lruDump: lruDump,
        };
    }

    /*
     * Respond to the fact that a PDF is being dropped from our LRU instance.
     *
     * param url: the URL of the dropped PDF.
     */
    dispose(url) {
        /* We need to determine whether we are actually ejecting this PDF, or whether
         * it is simply "falling through," i.e. being rejected outright because it is too
         * big for the cache. In the former case, the URL will still at this time be a
         * key in the cache; in the latter case, it has never been a key at all.
         */
        if (!this.lru.has(url)) {
            // It's a "fall-through". Nothing to do.
            return;
        }
        // It's an actual ejection, so we do need to purge a byte array from storage.
        removeByteArray(url);
    }

    // ------------------------------------------------------------------------
    // API

    /*
     * Record this index in storage. This allows us to restore it after a
     * browser restart. It should be committed after every update.
     *
     * return: promise that resolves when the info has been committed to storage.
     */
    commit() {
        return browser.storage.local.set({
            [CACHE_INDEX_NAME]: this.dump()
        });
    }

    /*
     * Add a PDF to the index.
     *
     * param url {string} the URL of the PDF
     * param size {int} the length of the PDF byte array
     *
     * return: boolean saying whether the PDF was actually accepted (true), or
     *   was rejected for being larger than the cache capacity.
     */
    addPdf(url, size) {
        const now = nowStampLex();
        this.lru.set(url, {
            url: url,
            size: size,
            mtime: now,
            atime: now,
            comment: ''
        }, 0);
        const accepted = this.lru.has(url);
        if (accepted) {
            this.commit();
        }
        return accepted;
    }

    /*
     * Remove one or more PDFs from the cache.
     *
     * param urls: iterable of URLs to be removed.
     * return: promise that resolves when the operation is complete.
     */
    removePdfs({urls}) {
        const tasks = [];
        for (let url of urls) {
            this.lru.del(url);
            tasks.push(removeByteArray(url));
        }
        tasks.push(this.commit());
        return Promise.all(tasks);
    }

    /*
     * Set the comment text for a given URL.
     * Do _not_ update its "recentness".
     *
     * param url: the URL for which the comment is to be set
     * param comment: the desired comment
     * return: promise that resolves when the operation is complete.
     */
    setComment({url, comment}) {
        this.lru.peek(url).comment = comment;
        return this.commit();
    }

    /*
     * Access the info for a given URL.
     * This access updates the entry's "recentness" in the LRU cache as well as the
     * `atime` property of the info object.
     *
     * @param url: {string} the URL of the desired info
     * @return: the corresponding info object if present in the cache; else undefined
     */
    access(url) {
        // Calling `get` on the LRU cache updates the entry's recentness if present;
        // else returns undefined.
        const info = this.lru.get(url);
        if (info) {
            info.atime = nowStampLex();
            this.commit();
        }
        return info;
    }

    /*
     * Get a preview of what would happen if a new capacity were set for the cache.
     *
     * param num_mb: the proposed number of MB for the new capacity.
     * return: Set of URLs that would be purged if that setting were made.
     */
    previewNewMaxMB({num_mb}) {
        const dummyLRU = new LRU({
            max: num_mb * 1048576,
            length: (value, key) => value.size,
        });
        const dump = this.lru.dump();
        dummyLRU.load(dump);
        const currentUrlSet = new Set(this.lru.keys());
        // The keys in the dummy cache are those that would be retained.
        const retainedUrlArray = dummyLRU.keys();
        for (let url of retainedUrlArray) {
            currentUrlSet.delete(url);
        }
        // By deleting the URLs that would be retained, we are left with
        // those that would be purged.
        return currentUrlSet;
    }

    /*
     * Set the max size of the cache in megabytes.
     * It may be advisable to check the results first; see `previewNewMaxMB`.
     *
     * param num_mb: the desired number of MB for the max size.
     * return: promise that resolves when the operation is complete.
     */
    setMaxMB({num_mb}) {
        const urlsToBePurged = this.previewNewMaxMB({num_mb});
        const thisIndex = this;
        return this.removePdfs({urls: urlsToBePurged}).then(() => {
            thisIndex.maxMB = num_mb;
            const dump = thisIndex.dump();
            const dummyIndex = loadCacheIndex(dump);
            thisIndex.lru = dummyIndex.lru;
            return thisIndex.commit();
        });
    }

    /*
     * Return info about the cache.
     *
     * The format of the cache info is:
     * {
     *   currentSize: <int> current size of the cache in bytes
     *   maxSize: <int> the maximum allowed size of the cache in bytes
     *   history: <Array[Object]> array of infos about the stored PDFs, ordered by access time,
     *            from most recent to least recent
     * }
     *
     * The format of each PDF info in the history array is:
     * {
     *   url: <string> the URL of the PDF,
     *   size: <int> the size of the PDF in bytes,
     *   mtime: <string> timestamp at time of initial storage,
     *   atime: <string> timestamp at time of most recent access,
     *   comment: <string> optional place for user to record notes (e.g. title and author of PDF)
     * }
     *
     * All info is returned "by value" (not "by reference") and consumers may alter with impunity.
     */
    getCacheInfo() {
        return {
            currentSize: this.lru.length,
            maxSize: this.maxMB * 1048576,
            history: this.lru.values(),
        };
    }

}

// ---------------------------------------------------------------------------
// CRUD actions for PDF byte arrays

/*
 * Retrieve a PDF byte array which you know is present (throws
 * uncaught exception if not present).
 *
 * param url: the URL of the desired PDF
 * return: promise that resolves with the desired byte array (as plain Array)
 */
function getByteArray(url) {
    const arrayKey = CACHE_BYTES_PREFIX + url;
    return browser.storage.local.get(arrayKey).then(items => items[arrayKey]);
}

/*
 * Set the byte array for a URL.
 *
 * param url: the URL whose byte array is being set.
 * param byteArray: the byte array to be recorded. May be a Uint8Array or a plain Array of ints.
 * return: promise that resolves when the operation is complete.
 */
function setByteArray(url, byteArray) {
    const plainArray = (byteArray instanceof Uint8Array) ? Array.from(byteArray) : byteArray;
    const arrayKey = CACHE_BYTES_PREFIX + url;
    return browser.storage.local.set({
        [arrayKey]: plainArray
    });
}

/*
 * Remove the byte array for a URL.
 *
 * param url: the URL whose byte array is to be removed.
 * return: promise that resolves when the operation is complete.
 */
function removeByteArray(url) {
    const arrayKey = CACHE_BYTES_PREFIX + url;
    return browser.storage.local.remove(arrayKey);
}

// ---------------------------------------------------------------------------

export {
    restoreCacheIndexFromStorage,
    getByteArray,
    setByteArray,
    removeByteArray,
};
