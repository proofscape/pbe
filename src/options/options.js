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
import { softwareTableRows } from "./about";
import { CsBgsPeer } from "browser-peers/src/csbgspeer";

const PERMISSIONS_HOST_LIST_NAME = 'permissions:hosts';
const peer = new CsBgsPeer(`pbeOptionsPeer-@(${(new Date()).toISOString()})-${Math.random()}`);
const bgPeerName = 'pfscBgPeer';
let cacheIndexProxy;
const elts = {};
const fixedPermissions = browser.runtime.getManifest().permissions;
const pbe_version_number = PBE_VERSION;

// ---------------------------------------------------------------------------
/* Confirmations
 *
 * Add a boolean property to the `confirmations` object for each question for which
 * we might ask confirmation (such as removing a PDF from the cache). This represents
 * whether we should ask for confirmation, or just let the action go ahead without.
 */

const confirmations = {};
confirmations.removeItemFromCache = true;
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
    buildAndPopulatePermissionsTable();
    populateAdvancedConfig();
    handleNewPermissionRequest();
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
        showPermissionsModal(urlPattern);
    }
}

function showPermissionsModal(urlPattern) {
    $('#permissionsModal .modal-body input').val(urlPattern);
    $('#permissionsModal').modal();
}

function buildAndPopulatePermissionsTable() {
    browser.permissions.getAll().then(result => {
        let origins = result.origins || [];
        //console.log(origins);

        function selectIntroText(selected) {
            const types = ['no', 'multi', 'all'];
            for (let type of types) {
                const span = $(`#${type}UrlIntroText`);
                if (type === selected) {
                    span.removeClass('hidden');
                } else {
                    span.addClass('hidden');
                }
            }
        }

        function buildTable() {
            const rows = [];
            for (let pattern of origins) {
                let entries = [
                    makeDocElt({
                        type: 'code',
                        textContents: pattern,
                    })
                ];
                if (!fixedPermissions.includes(pattern)) {
                    const tcan = makeTrashCanImage("Revoke permission");
                    entries.push(tcan);
                }
                rows.push(makeTableRow(entries));
            }
            replaceTableRows(elts.permissions_table_body, rows);

            // Activate input elements. We do it inside of a timeout so the elements have a chance to
            // be added to the DOM first.
            setTimeout(function() {
                // Trashcans:
                elts.permissions_table_body.querySelectorAll('img.trash').forEach(elt => {
                    elt.addEventListener('click', event => {
                        const pattern = elt.parentNode.parentNode.firstChild.innerText;
                        getConfirmation({
                            body: `<p>Revoke download permission for ${pattern}?</p>`,
                            name: "revokePermission",
                            title: "Confirm revocation",
                            addChillBox: true,
                        }).then(confirmed => {
                            if (confirmed) {
                                browser.permissions.remove({
                                    origins: [pattern]
                                }).then(removed => {
                                    loadPage();
                                });
                            }
                        });
                    });
                });
            }, 0);
        }

        if (origins.includes("<all_urls>")) {
            selectIntroText('all');
            $('#addNewPermissionRow').addClass('hidden');
            $('#permissionsTable').addClass('hidden');
        } else {
            $('#addNewPermissionRow').removeClass('hidden');
            $('#permissionsTable').removeClass('hidden');
            if (origins.length === 0) {
                selectIntroText('no');
            } else {
                selectIntroText('multi');
            }
        }

        buildTable();

    });
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

async function handleAllowAllCheckboxChange(event) {
    /* For now we're disabling this option. Math PDFs tend to come from just a handful of domains.
     * There's really no motivation to allow all URLs.
     */
    console.log('Allow All URLs option is currently disabled.');
    return;

    const doAllow = event.target.checked
    //console.log('allow all URLs: ', doAllow);
    const req = {
        origins: ["<all_urls>"]
    };
    const browserIsChrome = await isChrome();
    if (doAllow) {
        /* If we're in Chrome, then we want to first save the host list, so that it can
         * be restored later, in case we want to remove the "<all_urls>" permission.
         * In Firefox, this is neither necessary nor possible: it is not necessary because
         * Firefox treats "<all_urls>" as a single pattern to be removed (it doesn't remove all
         * other permissions along with it); it is not possible because in Firefox we lose
         * user-action-ness if we have to wait for a promise to resolve (not so in Chrome).
         * (One alternative design to remove the need here for a promise might be to store the
         * host list every time it is updated instead of now.) */
        const firstStep = browserIsChrome ?
            storeHostList().then(() => browser.permissions.request(req)) :
            browser.permissions.request(req);
        firstStep.then(changed => {
            if (changed) {
                loadPage();
            } else {
                event.target.checked = !doAllow;
            }
        });
    } else {
        browser.permissions.remove(req).then(changed => {
            if (changed) {
                /* Again, if we're in Chrome then we want to now try to restore the former
                 * host permissions. Like the step described above, in Firefox this is not
                 * necessary, and not possible without showing a dialog and getting another
                 * user click. Such a dialog might be desirable even in Chrome, just to explain
                 * to the user what's going on. In particular it would be good to let them know
                 * this is their one chance to do this. Anyway, for now I skip it. */
                if (browserIsChrome) {
                    restoreHostListFromStorage().then(loadPage);
                } else {
                    loadPage();
                }
            } else {
                event.target.checked = !doAllow;
            }
        });
    }
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

function startup() {
    peer.openConnection(bgPeerName);
    cacheIndexProxy = new CacheIndexProxy(peer, bgPeerName);

    // Grab elements
    elts.max_cache_mb = document.querySelector('#max_cache_mb');
    elts.cur_cache_mb = document.querySelector('#cur_cache_mb');
    elts.cur_cache_pct = document.querySelector('#cur_cache_pct');
    elts.msg_box = document.querySelector('#msg_box');
    elts.cache_table_body = document.querySelector('#cache_table_body');
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
    $('#permissionsModal .btn-primary').on('click', event => {
        const urlPattern = $('#permissionsModal .modal-body input').val();
        console.log('requesting permissions for: ', urlPattern);
        $('#permissionsModal').modal('hide');
        browser.permissions.request({
            origins: [urlPattern]
        }).then(granted => {
            if (granted) {
                loadPage();
            }
        });
    });
    $('#permissionsModal .modal-body input').on('keypress', event => {
        if (event.key === "Enter") {
            $('#permissionsModal .btn-primary').click();
        }
    });

    // "Add permission" button:
    $('#addNewPermissionButton').on('click', event => {
        showPermissionsModal("*://example.com/*");
    });

    // "Allow all URLs" checkbox:
    $('#allowAllUrlCheckbox input').on('change', handleAllowAllCheckboxChange);

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
