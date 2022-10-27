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
const $ = require('jquery');
import 'bootstrap/js/dist/modal';
import '../pfsc-darkly/pfsc-darkly.scss';
import './options.css';
import { softwareTableRows } from "./pbeAboutDialogContents";
import { CsBgsPeer } from "browser-peers/src/csbgspeer";

const PERMISSIONS_HOST_LIST_NAME = 'permissions:hosts';
const peer = new CsBgsPeer(`pbeOptionsPeer-@(${(new Date()).toISOString()})-${Math.random()}`);
const bgPeerName = 'pfscBgPeer';
let cacheIndexProxy;
const elts = {};
const pbe_version_number = PBE_VERSION;
const PBE_CS_ID = 'pbe-content-script';
const DOWNLOAD_ACTION_DESCRIP = "Allow the extension to download PDFs from URLs matching the pattern:";
const ACTIVATE_ACTION_DESCRIP = (
    "Do you want to activate the Proofscape browser extension to work with PISE when it runs under the following URL pattern?" +
    " You should not do this unless you trust the operators of this site."
);
const EXAMPLE_URL_PATTERN = "*://example.com/*";

// ---------------------------------------------------------------------------
/* Confirmations
 *
 * Add a boolean property to the `confirmations` object for each question for which
 * we might ask confirmation (such as removing a PDF from the cache). This represents
 * whether we should ask for confirmation, or just let the action go ahead without.
 */

const confirmations = {};
confirmations.removeItemFromCache = true;
confirmations.revokeActivation = true;
confirmations.revokePermission = true;

/* Temporarily turn off confirmation for a particular question.
 *
 * @param confirmationName {string} the name of the `confirmations` property that represents
 *   the question.
 * @param duration {int} number of miliseconds for which confirmation should be deactivated.
 */
function chillConfirmation(confirmationName, duration = 60000) {
    confirmations[confirmationName] = false;
    setTimeout(function() {
        confirmations[confirmationName] = true;
    }, duration);
}
// ---------------------------------------------------------------------------


function asMB(bytes) {
    const mb = bytes/1048576;
    return mb.toFixed(2);
}

// As percent
function asPct(x) {
    const p = Math.round(100 * x);
    return Math.max( Math.min(p, 100), 0 );
}

/* "nTT" = "nice Table Time"
 * Transform an ISO format timestamp into a nicely-formatted time expression
 * for use in the cache table.
 */
function nTT(isoTime) {
    const p = (new Date(isoTime).toString()).split(' ');
    const day = p.slice(0, 4).join(' ');
    const time = p[4];
    const dayDiv = makeDocElt({type: 'div', textContents: day});
    const timeDiv = makeDocElt({type: 'div', textContents: time});
    const container = makeDocElt({type: 'div'});
    container.appendChild(dayDiv);
    container.appendChild(timeDiv);
    return container;
}

/* Show a confirmation dialog.
 *
 * @param body {string} the HTML you want to display in the body of the dialog box.
 * @param name {string} the name of this confirmation. Should be a property of the global `confirmations`.
 * @param activate {function} optional function to be called after the body HTML has been set.
 *   The idea is that you might use this to activate input elements in the body. The function is
 *   passed one argument, being the jQuery selection of the modal body element.
 * @param title {string} optional title for the box. Defaults to "Confirm".
 * @param cancelText {string} optional text for the cancel button. Defaults ot "Cancel".
 * @param okText {string} optional text for the ok button. Defaults to "OK".
 * @param addChillBox {bool} add to the given `body` a `<p>` element with the usual checkbox
 *   offering to "stop asking this for a minute".
 * @param force {bool} set true to force this dialog to appear; otherwise it appears only if
 *   this confirmation name is not currently chilled.
 *
 * @return: promise that resolves with boolean: true if user clicked the ok button -- i.e.
 *   if they confirmed -- false otherwise. The false case includes the user closing the
 *   dialog (via "X") or clicking on the background behind the box.
 */
function getConfirmation({
    body,
    name,
    activate = undefined,
    title = "Confirm",
    cancelText = "Cancel",
    okText = "OK",
    addChillBox = false,
    force = false,
}) {
    if (!force && !confirmations[name]) {
        return Promise.resolve(true);
    }
    const gcm = $('#genericConfirmModal');
    gcm.find('.modal-title').html(title);
    let chillBox;
    if (addChillBox) {
        body += `<p><label class="cb smaller"><input class="chillbox" type="checkbox"> Stop asking this for a minute.</label></p>`;
    }
    const modalBodyElt = gcm.find('.modal-body');
    modalBodyElt.html(body);
    chillBox = modalBodyElt.find('input.chillbox')[0];
    if (activate) {
        activate(modalBodyElt);
    }
    gcm.find('.btn-secondary').html(cancelText);
    const okButton = gcm.find('.btn-primary');
    okButton.html(okText);
    return new Promise(resolve => {
        let confirmed = false;
        okButton.on('click', function() {
            confirmed = true;
            gcm.modal('hide');
        });
        gcm.on('hide.bs.modal', function() {
            if (chillBox && chillBox.checked) {
                chillConfirmation(name);
            }
            okButton.off('click');
            gcm.off('hide.bs.modal');
            resolve(confirmed);
        });
        gcm.modal();
    });
}

/* Alter the cache table row for each of a given set of URLs appropriately, to
 * indicate that that row is in the process of deletion. This means (a) turn
 * the trashcan icon into a spinner, and (b) deactivate the click handler on that
 * element.
 *
 * @param urls {Set} the set of URLs whose rows are to be altered.
 */
function markUrlRowsAsDeleting(urls) {
    $(elts.cache_table_body).find('tr').each(function() {
        const tr = $(this);
        const entries = tr.find('td');
        if (entries[0] && urls.has(entries[0].innerText)) {
            const trash = tr.find('img.trash');
            trash.attr('src', 'loading-icon.gif');
            trash.off('click');
        }
    });
}


class CacheIndexProxy {

    constructor(peer, bgPeerName) {
        this.peer = peer;
        this.bgPeerName = bgPeerName;
    }

    async ready() {
        await this.peer.checkReady(this.bgPeerName);
    }

    async previewNewMaxMB(num_mb) {
        await this.ready();
        return this.peer.makeRequest(this.bgPeerName, 'cacheIndex.previewNewMaxMB', {num_mb});
    }

    async setComment(url, comment) {
        await this.ready();
        return this.peer.makeRequest(this.bgPeerName, 'cacheIndex.setComment', {url, comment});
    }

    async removePdfs(urls) {
        await this.ready();
        return this.peer.makeRequest(this.bgPeerName, 'cacheIndex.removePdfs', {urls});
    }

    async getCacheInfo() {
        await this.ready();
        return this.peer.makeRequest(this.bgPeerName, 'cacheIndex.getCacheInfo', {});
    }

    async setMaxMB(num_mb) {
        await this.ready();
        return this.peer.makeRequest(this.bgPeerName, 'cacheIndex.setMaxMB', {num_mb});
    }

}


/*
 * Set the max size of the cache in megabytes.
 */
async function setMaxCacheMB(num_mb) {
    const toBePurged = await cacheIndexProxy.previewNewMaxMB(num_mb);
    if (toBePurged.size > 0) {
        // Get confirmation before proceeding.
        let h = 'The following records will be purged:\n';
        h += `<ul><li class="purgedURL">${Array.from(toBePurged).join('</li>\n<li class="purgedURL">')}</li></ul>`;
        $('#resizeModal .modal-body').html(h);
        $('#resizeModal').modal();
    } else {
        doResize().then(() => {
            loadPage();
        });
    }
}

function displayCurCacheSize(cacheInfo) {
    elts.cur_cache_mb.innerText = asMB(cacheInfo.currentSize);
    elts.cur_cache_pct.innerText = asPct(cacheInfo.currentSize/cacheInfo.maxSize);
    return cacheInfo;
}

function flashMessage(msg) {
    const box = elts.msg_box;
    while (box.firstChild) {
        box.removeChild(box.lastChild);
    }

    const msg_elt = document.createElement('div');
    msg_elt.classList.add('msg_flash');
    msg_elt.appendChild(document.createTextNode(msg));
    box.appendChild(msg_elt);

    setTimeout(function() {
        msg_elt.style.opacity = '0';
        setTimeout(function() {
            msg_elt.remove();
        }, 2000);
    }, 500);
}

/* Set attributes on a document element.
 *
 * elt: document element
 * attrs: array of pairs [attr_name, attr_value]
 */
function setAttrsOnElement(elt, attrs) {
    for (let [name, value] of attrs) {
        elt.setAttribute(name, value);
    }
}

/* Make a document element of a given type, with an
 * array of classes, and a set of attributes (array of pairs).
 * Optionally, append a text child.
 *
 * type: required
 * classes, attrs, textContents: optional
 */
function makeDocElt({type, classes, attrs, textContents}) {
    const elt = document.createElement(type);
    if (classes) {
        elt.classList.add(...classes);
    }
    if (attrs) {
        setAttrsOnElement(elt, attrs);
    }
    if (textContents) {
        elt.appendChild(document.createTextNode(textContents));
    }
    return elt;
}

function makeTrashCanImage(title) {
    return makeDocElt({
        type: 'img',
        classes: ['trash'],
        attrs: [
            ['title', title],
            ['height', '32px'],
            ['width', '32px'],
            ['src', 'trashcan.png'],
        ]
    });
}

/* Make a <tr>
 *
 * entries: array of things you want in the <td>'s of the row.
 *   May be doc elements, or strings.
 */
function makeTableRow(entries) {
    const tr = document.createElement('tr');
    for (let e of entries) {
        const td = document.createElement('td');
        if (typeof e === 'string' || e instanceof String) {
            e = document.createTextNode(e);
        }
        td.appendChild(e);
        tr.appendChild(td);
    }
    return tr;
}

/* Replace the contents of a table body with a given array of table rows.
 *
 * tbody: the tbody element
 * rows: array of tr elements
 */
function replaceTableRows(tbody, rows) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.lastChild);
    }
    for (let row of rows) {
        tbody.appendChild(row);
    }
}

function buildAndPopulateCacheTable(cacheInfo) {

    // Build table:
    const rows = [];
    for (let info of cacheInfo.history) {
        let entries = [
            info.url,
            String(asMB(info.size)),
            nTT(info.atime),
            nTT(info.mtime),
            makeDocElt({
                type: 'input',
                classes: ['comment'],
                attrs: [
                    ['type', 'text'],
                    ['size', 36],
                    ['value', info.comment],
                ]
            }),
            makeTrashCanImage("Delete from cache"),
        ];
        rows.push(makeTableRow(entries));
    }
    replaceTableRows(elts.cache_table_body, rows);

    if (rows.length === 0) {
        $('#cacheContents').addClass('hidden');
    } else {
        $('#cacheContents').removeClass('hidden');
    }

    // Activate input elements. We do it inside of a timeout so the elements have a chance to
    // be added to the DOM first.
    setTimeout(function() {
        // Comment boxes:
        elts.cache_table_body.querySelectorAll('input.comment').forEach(elt => {
            //console.log(elt);
            elt.addEventListener('change', event => {
                const comment = elt.value;
                const url = elt.parentNode.parentNode.firstChild.innerText;
                //console.log(url, comment);
                cacheIndexProxy.setComment(url, comment).then(() => {
                    flashMessage('Saved');
                });
            });
            elt.addEventListener('keypress', event => {
                if (event.code === "Enter") {
                    event.target.blur();
                }
            });
        });

        // Trashcans:
        elts.cache_table_body.querySelectorAll('img.trash').forEach(elt => {
            //console.log(elt);
            $(elt).on('click', event => {
                const url = elt.parentNode.parentNode.firstChild.innerText;
                getConfirmation({
                    body: `<p>Remove PDF ${url} from the cache?</p>`,
                    name: "removeItemFromCache",
                    title: "Confirm removal",
                    addChillBox: true,
                }).then(confirmed => {
                    if (confirmed) {
                        markUrlRowsAsDeleting(new Set([url]));
                        cacheIndexProxy.removePdfs([url]).then(function () {
                            loadPage();
                        });
                    }
                });
            });
        });
    }, 0);

    return cacheInfo;
}

async function loadPage() {
    const cacheInfo = await cacheIndexProxy.getCacheInfo();
    elts.max_cache_mb.value = cacheInfo.maxSize/1048576;
    displayCurCacheSize(cacheInfo);
    buildAndPopulateCacheTable(cacheInfo);
    buildAndPopulateActivationsTable();
    buildAndPopulatePermissionsTable();
    populateAdvancedConfig();
    await handleNewActivationRequest();
    await handleNewPermissionRequest();
    await showOnboarding();
}

async function doResize() {
    const num_mb = +elts.max_cache_mb.value;
    await cacheIndexProxy.setMaxMB(num_mb);
    flashMessage('Saved');
    return num_mb;
}

function resetResizeConfirmButton() {
    const button = $('#resizeModal .btn-primary');
    button.prop('disabled', false);
    button.html('Resize and purge');
}

async function handleNewPermissionRequest() {
    await peer.checkReady(bgPeerName);
    const newUrl = await peer.makeRequest(bgPeerName, 'consumeOptionsPageInfo', {
        propertyName: 'requestHostPermission',
    });
    if (newUrl) {
        /* Note: we cannot just make the permissions request directly; it must be triggered by a _user action_
         * occurring within one of the extension's own pages (not an ordinary web page).
         * See <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/request>.
         * Therefore we show a dialog box, so the user has a button to click. */
        const urlObject = new URL(newUrl);
        const hostname = urlObject.hostname;
        const urlPattern = `*://${hostname}/*`;
        showPermissionsModal({
            urlPattern: urlPattern,
            actionDescrip: DOWNLOAD_ACTION_DESCRIP,
            doActivate: "no",
        });
    }
}

async function handleNewActivationRequest() {
    await peer.checkReady(bgPeerName);
    const tab = await peer.makeRequest(bgPeerName, 'consumeOptionsPageInfo', {
        propertyName: 'requestActivation',
    });
    console.debug('options page received tab for activation:', tab);
    const newUrl = tab?.url;
    if (newUrl) {
        // Ignore "special" pages.
        // In Firefox, special pages start with "about:" or "moz-extension:".
        if (newUrl.startsWith("about:") || newUrl.startsWith("moz-extension:")) {
            return;
        }
        // In Chrome, special pages start with "chrome:" or "chrome-extension:".
        if (newUrl.startsWith("chrome:") || newUrl.startsWith("chrome-extension:")) {
            return;
        }

        const urlObject = new URL(newUrl);
        let urlPattern = `*://${urlObject.hostname}${urlObject.pathname}`;
        if (!urlPattern.endsWith('/')) {
            urlPattern += '/';
        }
        urlPattern += '*';

        const existingMatches = await getRegisteredMatchesForContentScript();
        // If the pattern is already registered, then we don't do anything.
        // If not, then we ask for the host permission, and register if granted.
        if (!existingMatches.includes(urlPattern)) {
            showPermissionsModal({
                urlPattern: urlPattern,
                actionDescrip: ACTIVATE_ACTION_DESCRIP,
                doActivate: tab.id,
            });
        }
    }
}

async function showOnboarding() {
    const doShow = await peer.makeRequest(bgPeerName, 'consumeOptionsPageInfo', {
        propertyName: 'showOnboarding',
    });
    if (doShow) {
        $('#gettingStartedModal').modal();
    }
}

/* Show the permissions modal.
 *
 * urlPattern: string giving the desired URL pattern for host permission
 * actionDescrip: string with text telling the user what this permission is for
 * doActivate: string or int with the possible values:
 *   "no": we just want host permission, do not want to activate here
 *   "yes": we want host permission, and also want to activate here
 *   int or base-10 rep: we want host permission, and want to activate, and want to
 *     inject the CS in the tab of this ID
 *   In fact any string that is neither "yes" nor a valid base-10 integer means "no".
 */
function showPermissionsModal({urlPattern, actionDescrip, doActivate}) {
    actionDescrip = actionDescrip || 'Grant host permission for URLs matching the pattern:';
    $('#permissionsModal .action-description').text(actionDescrip);
    $('#permissionsModal .modal-body input[name="pattern"]').val(urlPattern);
    $('#permissionsModal .modal-body input[name="activate"]').val(doActivate);
    $('#permissionsModal').modal();
}

async function buildAndPopulateActivationsTable() {
    const existingMatches = await getRegisteredMatchesForContentScript();
    return buildAndPopulatePatternsTable({
        patterns: existingMatches,
        introGroupId: 'activationsIntro',
        thingRevoked: 'activation',
        tbodyElt: elts.activations_table_body,
        confirmationName: "revokeActivation",
        revokeFunction: removeMatchPatternForContentScript,
    });
}

async function buildAndPopulatePermissionsTable() {
    const perms = await browser.permissions.getAll();
    const origins = perms.origins || [];
    return buildAndPopulatePatternsTable({
        patterns: origins,
        introGroupId: 'hostPermIntro',
        thingRevoked: 'permission',
        tbodyElt: elts.permissions_table_body,
        confirmationName: "revokePermission",
        revokeFunction: async pattern => {
            await browser.permissions.remove({
                origins: [pattern]
            });
            await removeMatchPatternForContentScript(pattern);
        },
    });
}

async function buildAndPopulatePatternsTable(
    {patterns, introGroupId, thingRevoked, tbodyElt, confirmationName, revokeFunction}
    ) {

    function selectIntroText() {
        const selected = patterns.length === 0 ? 'no' : 'multi';
        const types = ['no', 'multi'];
        for (let type of types) {
            const span = $(`#${introGroupId} .${type}UrlIntroText`);
            if (type === selected) {
                span.removeClass('hidden');
            } else {
                span.addClass('hidden');
            }
        }
    }

    function buildTable() {
        const rows = [];
        for (let pattern of patterns) {
            let entries = [
                makeDocElt({
                    type: 'code',
                    textContents: pattern,
                })
            ];
            const tcan = makeTrashCanImage(`Revoke ${thingRevoked}`);
            entries.push(tcan);
            rows.push(makeTableRow(entries));
        }
        replaceTableRows(tbodyElt, rows);

        // Activate input elements. We do it inside of a timeout so the elements have a chance to
        // be added to the DOM first.
        setTimeout(function() {
            // Trashcans:
            tbodyElt.querySelectorAll('img.trash').forEach(elt => {
                elt.addEventListener('click', async event => {
                    const pattern = elt.parentNode.parentNode.firstChild.innerText;
                    const confirmed = await getConfirmation({
                        body: `<p>Revoke ${thingRevoked} for ${pattern}?</p>`,
                        name: confirmationName,
                        title: "Confirm revocation",
                        addChillBox: true,
                    });
                    if (confirmed) {
                        await revokeFunction(pattern);
                        await loadPage();
                    }
                });
            });
        }, 0);
    }

    selectIntroText();
    buildTable();
}

/* Store current list of host permission strings in storage.
 *
 * In Firefox, if you remove the "<all_urls>" host permission, then your list of
 * active host permissions simply goes back to what it was before you ever added
 * "<all_urls>"; this is great, and is the behavior we would prefer. However, in
 * Chrome, removing "<all_urls>" actually removes all the old host permissions you
 * had before. So to work with Chrome we need to save the prior list in storage.
 *
 * return: promise that resolves when the array of host strings has been recorded.
 */
function storeHostList() {
    return browser.permissions.getAll().then(result => {
        const hosts = result.origins || [];
        return browser.storage.local.set({
            [PERMISSIONS_HOST_LIST_NAME]: hosts
        });
    });
}

/* Restore list of host permissions from storage.
 * See `storeHostList()` function.
 *
 * return: promise that resolves with a boolean saying whether the permissions
 *   were reinstated or not.
 */
function restoreHostListFromStorage() {
    return browser.storage.local.get(PERMISSIONS_HOST_LIST_NAME).then(items => {
        const hosts = items[PERMISSIONS_HOST_LIST_NAME] || [];
        return browser.permissions.request({
            origins: hosts
        });
    });
}

function populateAdvancedConfig() {
    peer.checkReady(bgPeerName).then(() => {
        peer.makeRequest(bgPeerName, 'readConfigVar', {name: 'readStorageInBg'}).then(readStorageInBg => {
            $('#foregroundLoadCheckbox input').prop('checked', !readStorageInBg);
        });
    });
}

function isChrome() {
    return peer.checkReady(bgPeerName).then(() => {
        return peer.makeRequest(bgPeerName, 'getBrowserName', {}).then(name => {
            return name === 'Chrome';
        });
    });
}

function getRegisteredMatchesForContentScript() {
    return browser.scripting.getRegisteredContentScripts().then(result => {
        console.debug('registered CSes:', result);
        if (result.length === 0) {
            return [];
        }
        // This extension will only ever register one script, so, if there are any,
        // the first (and only) one is the one we want.
        const info = result[0];
        return info.matches;
    });
}

/* Set a URL match pattern, so that our content script will be injected any time
 * a page matching that pattern is loaded.
 *
 * If the pattern is already set, nothing changes.
 *
 * This method provides an abstraction, so that the caller need not worry about
 * registering versus updating the record for the content script.
 *
 * Returns a promise that rejects if there was a problem, or resolves with the
 * return value of `browser.scripting.getRegisteredContentScripts()`, i.e. the
 * list of registered content scripts for this extension _after_ making the
 * requested change.
 */
async function addMatchPatternForContentScript(pattern) {
    const existingMatches = await getRegisteredMatchesForContentScript();
    console.debug('existingMatches:', existingMatches);
    let p = Promise.resolve();
    if (existingMatches.length === 0) {
        // Must make initial registration.
        const pbeContentScript = {
            id: PBE_CS_ID,
            js: ["/content.js"],
            matches: [pattern],
        };
        p = browser.scripting.registerContentScripts([pbeContentScript]);
    } else if (existingMatches.includes(pattern)) {
        // Nothing to do. The desired pattern is already registered.
    } else {
        // Must update existing registration.
        const pbeContentScript = {
            id: PBE_CS_ID,
            matches: existingMatches.concat([pattern]),
        };
        p = browser.scripting.updateContentScripts([pbeContentScript]);
    }
    return p.then(() => browser.scripting.getRegisteredContentScripts());
}

/* Remove a URL match pattern, so that our content script will NOT be injected
 * when pages matching that pattern are loaded.
 *
 * If the pattern already is absent, nothing changes.
 *
 * This method provides an abstraction, so that the caller need not worry about
 * un-registering versus updating the record for the content script.
 *
 * Returns a promise that rejects if there was a problem, or resolves with the
 * return value of `browser.scripting.getRegisteredContentScripts()`, i.e. the
 * list of registered content scripts for this extension _after_ making the
 * requested change.
 */
async function removeMatchPatternForContentScript(pattern) {
    const existingMatches = await getRegisteredMatchesForContentScript();
    console.debug('existingMatches:', existingMatches);
    let p = Promise.resolve();
    if (!existingMatches.includes(pattern)) {
        // Nothing to do. The pattern to be removed is already absent.
    } else if (existingMatches.length === 1) {
        // The pattern to be removed is the last one, so it is time to
        // unregister the content script completely.
        p = browser.scripting.unregisterContentScripts({
            ids: [PBE_CS_ID],
        });
    } else {
        // Must update existing registration.
        const pbeContentScript = {
            id: PBE_CS_ID,
            matches: existingMatches.filter(x => x !== pattern),
        };
        p = browser.scripting.updateContentScripts([pbeContentScript]);
    }
    return p.then(() => browser.scripting.getRegisteredContentScripts());
}

function startup() {
    peer.openConnection(bgPeerName);
    cacheIndexProxy = new CacheIndexProxy(peer, bgPeerName);

    // Grab elements
    elts.max_cache_mb = document.querySelector('#max_cache_mb');
    elts.cur_cache_mb = document.querySelector('#cur_cache_mb');
    elts.cur_cache_pct = document.querySelector('#cur_cache_pct');
    elts.msg_box = document.querySelector('#msg_box');
    elts.cache_table_body = document.querySelector('#cache_table_body');
    elts.activations_table_body = document.querySelector('#activations_table_body');
    elts.permissions_table_body = document.querySelector('#permissions_table_body');

    // Activate input elements
    // Max MB box:
    elts.max_cache_mb.addEventListener('change', event => {
        //console.log(event, event.target.value);
        const new_value = +event.target.value;
        //console.log(new_value);
        setMaxCacheMB(new_value);
    });
    elts.max_cache_mb.addEventListener('keypress', event => {
        if (event.code === "Enter") {
            event.target.blur();
        }
    });

    // The "resize" modal:
    resetResizeConfirmButton();
    $('#resizeModal .btn-primary').on('click', event => {
        $('#resizeModal .btn-secondary').prop('disabled', true);
        const button = $('#resizeModal .btn-primary');
        button.prop('disabled', true);
        button.html(`<div class="spinner-border" role="status">
                      <span class="sr-only">Updating...</span>
                    </div>`);
        const urls = new Set();
        $('#resizeModal .modal-body .purgedURL').each(function() {
            urls.add($(this).text());
        });
        markUrlRowsAsDeleting(urls);
        doResize().then(() => {
            $('#resizeModal').modal('hide');
            resetResizeConfirmButton();
        });
    });
    $('#resizeModal').on('hide.bs.modal', function (e) {
        loadPage();
    })

    // The "permissions" modal:
    $('#permissionsModal .btn-primary').on('click', async event => {
        const urlPattern = $('#permissionsModal .modal-body input[name="pattern"]').val();

        const activate = $('#permissionsModal .modal-body input[name="activate"]').val();
        const tabId = +activate;
        const doInject = !isNaN(tabId);
        const doActivate = doInject ? true : (activate === "yes");

        console.debug('requesting permissions for: ', urlPattern);
        $('#permissionsModal').modal('hide');
        const granted = await browser.permissions.request({
            origins: [urlPattern]
        });
        if (granted) {
            if (doActivate) {
                const regResult = await addMatchPatternForContentScript(urlPattern);
                console.debug('registration result:', regResult);
                if (doInject) {
                    browser.scripting.executeScript({
                        target: {tabId: tabId},
                        files: ["/content.js"]
                    }).then(console.debug).catch(console.debug);
                }
            }
            await loadPage();
        }
    });
    $('#permissionsModal .modal-body input').on('keypress', event => {
        if (event.key === "Enter") {
            $('#permissionsModal .btn-primary').click();
        }
    });

    // "Add activation" button:
    $('#addNewActivationButton').on('click', event => {
        showPermissionsModal({
            urlPattern: EXAMPLE_URL_PATTERN,
            actionDescrip: ACTIVATE_ACTION_DESCRIP,
            doActivate: "yes",
        });
    });

    // "Add permission" button:
    $('#addNewPermissionButton').on('click', event => {
        showPermissionsModal({
            urlPattern: EXAMPLE_URL_PATTERN,
            actionDescrip: DOWNLOAD_ACTION_DESCRIP,
            doActivate: "no",
        });
    });

    // "Load PDFs in foreground" checkbox:
    $('#foregroundLoadCheckbox input').on('change', event => {
        const doForegroundLoad = event.target.checked;
        const readStorageInBg = !doForegroundLoad;
        //console.log('Do foreground load: ', doForegroundLoad);
        peer.checkReady(bgPeerName).then(() => {
            peer.makeRequest(bgPeerName, 'setConfigVar', {
                key: 'readStorageInBg',
                value: readStorageInBg,
            });
        });
    });

    // "Getting Started" dialog:
    $('#gettingStartedLink').on('click', event => {
        $('#gettingStartedModal').modal();
    });

    // "About PBE" dialog:
    $('.pbe-software-table tbody').html(softwareTableRows);
    $('.pbe-version span').html(pbe_version_number);
    $('#aboutDialogLink').on('click', event => {
        $('#aboutPBE').modal();
    });

    // Load data now...
    loadPage();
    // and reload on visibility change.
    // (Reloading on window focus change doesn't seem to work in Chrome: user selects tab, but
    // window doesn't gain focus until user clicks within the window.)
    document.addEventListener("visibilitychange", function(){
        loadPage();
    }, false);
}

startup();
