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

const EXT_CONFIG_NAME = 'ext_config';


/* Current Config Vars
 *
 * readStorageInBg {bool} Setting for the CsDownloadMgr.
 *   Reading storage in CS is faster in both browsers, but in Firefox it causes the main thread
 *   to block.
 *
 * fetchInBg {bool} Setting for the CsDownloadMgr.
 *   In Chromium this can only be true, since Chromium only allows cross-origin fetch in the BGS.
 *   In Firefox we set it false by default, since Firefox allows COF at CS, and this speeds
 *   things up.
 *
 * doDelayedStorage {bool} Setting for the CsDownloadMgr.
 *   This improves performance in both Firefox and Chromium. I keep it as a setting, but currently
 *   see no reason why you'd ever turn it off in either browser. It means a fetched PDF will open
 *   in the viewer before the BGS starts working on storing it. Otherwise the viewer is blank until
 *   after the PDF is stored, and the user spends several completely unnecessary seconds of waiting
 *   for the PDF to appear visually.
 *
 */

function storeConfig(config) {
    return browser.storage.local.set({
        [EXT_CONFIG_NAME]: config
    })
}

/* Restore the PBE configuration object from storage.
 *
 * @param browserName {string} The name of the browser we're in. This is used in
 *    case we need to set default values, which happens on first-ever load, when
 *    there is no prior data in storage.
 * @return promise that resolves with object in which key: value pairs are the
 *    current config values.
 */
export function restorePbeConfigFromStorage(browserName) {
    return browser.storage.local.get(EXT_CONFIG_NAME).then(items => {
        return items[EXT_CONFIG_NAME] || makeDefaultConfigSettings(browserName);
    });
}

function makeDefaultConfigSettings(browserName) {
    const isFirefox = (browserName === "Firefox");
    const config = {};
    config.readStorageInBg = true;
    config.fetchInBg = !isFirefox;
    config.doDelayedStorage = true;
    return config;
}

/* Read the value of a single config var.
 *
 * @param name {string} The name of the config var whose value you want to read.
 * @param browserName {string} The name of the browser we're in. This is
 *   required so that default values can be set if necessary.
 * @return promise that resolves with the value of the config var.
 */
export async function readConfigVar(name, browserName) {
    const config = await restorePbeConfigFromStorage(browserName);
    console.debug('reading config var', name, browserName, config);
    return config[name];
}

/* Set the value of a single config var.
 *
 * @param name {string} The name of the config var whose value you want to set.
 * @param value {serializable} The value you want to set.
 * @param browserName {string} The name of the browser we're in. This is
 *   required so that we can first read the current config.
 * @return promise that resolves after the value has been set.
 */
export async function setConfigVar(name, value, browserName) {
    const config = await restorePbeConfigFromStorage(browserName);
    config[name] = value;
    return storeConfig(config);
}
