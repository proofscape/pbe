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
 * This module can be used to set "Access-Control-Allow-Origin: *" headers, which
 * allows us to do cross-origin fetch for PDFs from anywhere (PS, CS, BGS) in both browsers.
 *
 * For now we are not using this module, but keep it in the repo for possible future use.
 *
 * If we do decide to reinstate the ACAO header solution using this module, it should
 * not be hard to do. These instructions were correct and complete at time of
 * writing (15 Oct 2020). They may need to be updated w.r.t. changes made in the meantime.
 *
 * (1) Add:
 *     "webRequest",
 *     "webRequestBlocking",
 * back into the permissions in our manifest.
 *
 * (2) Import the `setupCorbWorkaround` function from this module into your
 * background script, and invoke it at startup.
 *
 * (3) Be aware that this module updates its filtering as host permissions are
 * added or removed, so you should not have to worry about that. You must however
 * review the `KNOWN_PATH_PATTERNS` map defined below, and either make a plan to
 * maintain it for your use case, or else remove it from the design.
 *
 * (4) The rest is up to you. You should now be able to do COF from any level: page
 * scripts, content scripts, or background scripts.
 */

const browser = require("webextension-polyfill");

/*
 * Set the "Access-Control-Allow-Origin: *" header on an HTTP response, but
 * only if it appears to be a PDF, based on presence of `Content-Type: application/pdf` header.
 */
function setAcaoStarOnPdfs(response) {
    let looksLikePdf = false;
    for (let header of response.responseHeaders) {
        if (
            header.name.toLowerCase() === 'content-type' &&
            header.value.toLowerCase() === 'application/pdf'
        ) {
            looksLikePdf = true;
            break;
        }
    }
    if (looksLikePdf) {
        const acao_name = 'Access-Control-Allow-Origin';
        let done = false;
        // If the ACAO header is already present, set its value to "*".
        for (let header of response.responseHeaders) {
            if (header.name.toLowerCase() === acao_name.toLowerCase()) {
                header.value = "*";
                done = true;
                break;
            }
        }
        // Otherwise add the header altogether.
        if (!done) {
            response.responseHeaders.push({
                name: acao_name,
                value: "*"
            });
        }
    }
    return {
        responseHeaders: response.responseHeaders
    };
}

/*
 * We use this to restrict our activity on sites where we know the URL patterns for PDFs.
 */
const KNOWN_PATH_PATTERNS = new Map()
    .set("*://arxiv.org/*", "*://arxiv.org/pdf/*.pdf")
    .set("*://digizeitschriften.de/*", "*://digizeitschriften.de/download/*.pdf")
;

/*
 * Set up the listener that will set the ACAO header on all matching HTTP responses.
 *
 * To match, a response must (a) come from a matching URL pattern,
 * and (b) have the `Content-Type: application/pdf` header.
 *
 * The set of matching URL patterns is based on the extension's current set of host permissions.
 *
 * return: promise that resolves (void) when the listener has been set.
 */
function setupHeaderModifier() {
    return browser.permissions.getAll().then(result => {
        const origins = result.origins || [];
        let urls = null;
        if (origins.includes("<all_urls>")) {
            urls = ["<all_urls>"];
        } else {
            urls = origins.map(p => KNOWN_PATH_PATTERNS.get(p) || p);
        }
        const filter = {urls: urls};
        // Clean slate:
        browser.webRequest.onHeadersReceived.removeListener(setAcaoStarOnPdfs);
        /*
         * We want to listen to the headers received event so that we can alter response headers.
         * See <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest>.
         *
         * Chrome requires that you add "extraHeaders" to your `extraInfoSpec` if you need a chance to
         * modify headers before CORB can block the response (as we do).
         * See: <https://developer.chrome.com/extensions/webRequest>
         *
         * Unfortunately, Firefox actually throws an error if you supply "extraHeaders" (why can't it
         * just gracefully ignore it?), so we need a try-catch here.
         */
        try {
            browser.webRequest.onHeadersReceived.addListener(setAcaoStarOnPdfs, filter,
                ["blocking", "responseHeaders", "extraHeaders"]
            );
        } catch (error) {
            browser.webRequest.onHeadersReceived.addListener(setAcaoStarOnPdfs, filter,
                ["blocking", "responseHeaders"]
            );
        }

        /*
         * Note: While the modified response headers show up in the Chrome devtools,
         * they are _not_ visible in the Firefox devtools. Instead, if you want to see
         * the modified headers in Firefox, it seems you have to listen to the
         * `onResponseStarted` event. There is a note to this effect at the end of
         * the introductory text on [this MDN docs page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived).
         * It says:
         *   "If you want to see the headers that are processed by the system,
         *    without the risk that another extension will alter them, use
         *    webRequest.onResponseStarted, although you can't modify headers
         *    on this event."
         * The code snippet below will suffice. You can see the modified headers
         * in the console of the background page.
         */
        //browser.webRequest.onResponseStarted.addListener(console.log, filter, ["responseHeaders"]);
    });
}

function setupCorbWorkaround() {
    // Perform initial setup based on initial host permissions.
    setupHeaderModifier();
    // Ensure that the setup is redone any time our set of host permissions changes.
    browser.permissions.onAdded.addListener(newPermissions => {
        setupHeaderModifier();
    });
    browser.permissions.onRemoved.addListener(removedPermissions => {
        setupHeaderModifier();
    });
}

export { setupCorbWorkaround };
