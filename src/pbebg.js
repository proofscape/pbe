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
import { restoreCacheIndexFromStorage } from "./cache";
import { readConfigVar, setConfigVar } from "./config";
import { clearEverything, getEverything } from "./util"
import { BgsDownloadMgr } from "./downloadmgr";
import { CsBgsPeer } from "browser-peers/src/csbgspeer";


export class PbeBackground {
    
    constructor() {
        this.constructionTime = (new Date()).toLocaleTimeString();
        console.debug(`PbeBackground was constructed ${this.constructionTime}`);

        this.optionsPageInfo = {};
        this.browserInfo = {};
        this.messageHandlers = new Map();
        this.bgPeer = null;
        this.cacheIndex = null;
        this.bgDlm = null;

        // Useful during development:
        this.clearEverything = clearEverything;
        this.getEverything = getEverything;
    }

    /*
     * The options page can use this method to consume one-time-use data
     * that we recorded for it in our `optionsPageInfo` object.
     */
    consumeOptionsPageInfo({propertyName}) {
        const data = this.optionsPageInfo[propertyName];
        delete this.optionsPageInfo[propertyName];
        return data;
    }

    startup() {
        const self = this;

        // Try to determine which browser we're in.
        try {
            browser.runtime.getBrowserInfo().then(info => {
                this.browserInfo.name = info.name;
            });
        } catch (e) {
            /* Disappointingly, `browser.runtime.getBrowserInfo` isn't even defined in
             * Chrome, and the polyfill library doesn't define it either. So the
             * very fact that the function fails to exist already tells us we're not in
             * Firefox -- and, for us, that means we're in Chrome. */
            this.browserInfo.name = 'Chrome';
        }

        // Set up the browser action
        const browserAction = this.isChrome() ? browser.action : browser.browserAction;
        browserAction.onClicked.addListener((tab) => {
            //console.debug(tab);
            self.requestActivation(tab);
        });

        // Initialize the background peer. Will complete setting it up later.
        this.bgPeer = new CsBgsPeer('pfscBgPeer');


        // The cache index is restored from storage once at startup time.
        restoreCacheIndexFromStorage().then(cacheIndex => {
            self.cacheIndex = cacheIndex;
            // Now we can also finish setting up the background server.
            self.bgDlm = new BgsDownloadMgr(cacheIndex, {doDelayedStorage: true});
            self.bgPeer.addHandler('cacheIndex', self.cacheIndex);
            self.bgPeer.addHandler('dlm', self.bgDlm);
            self.bgPeer.setReady();
        });

        // Listen to requests from content scripts via `browser.runtime.sendMessage`.
        browser.runtime.onMessage.addListener((msg, sender) => {
            const handler = self.messageHandlers.get(msg.type);
            if (!handler) {
                throw new Error(`Background script has no handler for message type: ${msg.type}`);
            }
            const result = handler(msg);
            /* To return an asynchronous response from browser.runtime.onMessage, you must
             * return a Promise.
             * See <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage>
             */
            return Promise.resolve(result);
        });

        // Add handlers both as messageHandlers for runtime.onMessage, and to the bg peer.
        this.setupBgHandlers();

        // Show the options page with "Getting Started" dialog, for an "onboarding" page.
        // See https://extensionworkshop.com/documentation/develop/onboard-upboard-offboard-users/
        browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
            //if (temporary) return; // skip during development
            switch (reason) {
                case "install":
                {
                    self.showOnboarding();
                }
                    break;
                // add code here for upboarding / offboarding
            }
        });
    }

    /*
     * Set up those handlers _that can be set synchronously_. Anything -- e.g. `this.cacheIndex` -- that
     * must first be loaded must (of course) be set as handler only afterward! Be careful!
     */
    setupBgHandlers() {
        this.messageHandlers
            .set('requestHostPermission', this.requestHostPermission.bind(this))
            .set('openOptionsPage', this.openOptionsPage.bind(this))
        ;
        this.bgPeer
            .addHandler('getBrowserName', this.getBrowserName.bind(this))
            .addHandler('consumeOptionsPageInfo', this.consumeOptionsPageInfo.bind(this))
            .addHandler('readConfigVar', this.readConfigVar.bind(this))
            .addHandler('setConfigVar', this.setConfigVar.bind(this))
        ;
    }

    /* Open the options page with an immediate dialog asking the user to grant
     * host permissions for a given URL.
     *
     * @param msg: {
     *   type: "requestHostPermission",
     *   url: {string} the URL for which host permission is needed
     * }
     * @return: nothing
     */
    requestHostPermission(msg) {
        this.optionsPageInfo.requestHostPermission = msg.url;
        this.openOptionsPage();
    }

    /* Open the options page, with a flag indicating that activation has been
     * requested for the active tab.
     *
     * "Activation" means (a) requesting host permission for the URL if we don't
     * have it yet, and (b) registering our content script to load on pages matching
     * the pattern.
     *
     * In all cases, the options page will open. If we are already activated at
     * the given URL, nothing more happens. If not, we open a dialog asking the user
     * to grant host permission, and then we activate, if granted.
     *
     * @param tab: the active tab
     * @return: nothing
     */
    requestActivation(tab) {
        //console.debug('browser action on :', tab);
        this.optionsPageInfo.requestActivation = tab;
        this.openOptionsPage();
    }

    showOnboarding() {
        this.optionsPageInfo.showOnboarding = true;
        this.openOptionsPage();
    }

    openOptionsPage() {
        console.debug(`Opening options page from PbeBackground constructed at ${this.constructionTime}`);
        browser.runtime.openOptionsPage();
    }

    getBrowserName() {
        return this.browserInfo.name;
    }

    isChrome() {
        return this.browserInfo.name === 'Chrome';
    }

    readConfigVar({name}) {
        return readConfigVar(name, this.browserInfo.name);
    }

    setConfigVar({name, value}) {
        return setConfigVar(name, value, this.browserInfo.name);
    }
    
}
