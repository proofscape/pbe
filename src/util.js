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

import {
    FetchResolvedNotOkError,
    FetchWrongContentTypeError,
} from "browser-peers/src/errors";

/*
 * Fetch a PDF and return its Uint8Array.
 * Throw an error if the HTTP response does not come back `ok` or if we do not
 * get a Content-Type header equal to "application/pdf".
 */
function fetchPdf(url) {
    return fetch(url).then(resp => {
        if (!resp.ok) {
            const e = new FetchResolvedNotOkError(resp);
            throw new Error(e.serialize());
        } else if (resp.headers.get('Content-Type') !== 'application/pdf') {
            const e = new FetchWrongContentTypeError(resp);
            throw new Error(e.serialize());
        } else {
            return resp.arrayBuffer().then(buffer => new Uint8Array(buffer));
        }
    });
}

/*
 * Return a string representing the current time, in a format such that
 * lexicographic comparison of strings reproduces the temporal ordering.
 */
function nowStampLex() {
    return new Date().toISOString();
}

/*
 * Delete absolutely everything out of this extension's local storage.
 * Occasionally useful during development.
 */
function clearEverything() {
    browser.storage.local.clear();
}

/*
 * Retrieve absolutely everything from this extension's local storage.
 * Could be useful in case your index became corrupted, or you just
 * wanted to _check_ that it was still tracking properly?
 * I mainly write the function in order to record the way this is
 * achieved (i.e. `get(null)`).
 * It is documented [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get)
 * but it is a somewhat subtle point. Also useful during development.
 */
function getEverything() {
    return browser.storage.local.get(null);
}

export {
    fetchPdf,
    nowStampLex,
    clearEverything,
    getEverything,
};
