/* ------------------------------------------------------------------------- *
 *  Proofscape Integrated Study Environment (PISE)                           *
 *                                                                           *
 *  Copyright (c) 2018-2022 Proofscape contributors                          *
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

// Generate the software table rows for the "About" dialog.
// Invoked by Webpack as a loader, replacing the contents of the
// `pbeAboutDialogContents.js` module.

const path = require('path');
const fsPromises = require('fs').promises;


function makeRow({projName, projURL, version, licName, licURL}) {
    return `
    <!-- ${projName} -->
    <tr><td><a target="_blank"
    href="${projURL}">
    ${projName}
    </a><span class="vers" data-proj-name="${projName}">
    ${version}
    </span></td>
    <td><a target="_blank"
    href="${licURL}">
    ${licName}
    </a></td></tr>
    `;
}

/* Pass package-lock.json. Get array of recursive production dependencies, by name.
 */
function listDeps(plj) {
    const packages = plj.packages;
    const allDeps = [];
    let deps = packages[""].dependencies;
    const queue = [deps];
    while (queue.length) {
        deps = queue.shift();
        for (let name in deps) {
            if (deps.hasOwnProperty(name)) {
                if (!allDeps.includes(name)) {
                    allDeps.push(name);
                    let nextDeps = packages[`node_modules/${name}`]?.dependencies || {};
                    queue.push(nextDeps);
                }
            }
        }
    }
    return allDeps;
}

function normalizeRepoUrl(url) {
    // Ensure https is the protocol
    const i0 = url.indexOf(":")
    url = 'https' + url.slice(i0);
    // Don't want to end with a '/' or with '.git'
    if (url.slice(-1) === '/') {
        url = url.slice(0, -1);
    }
    if (url.slice(-4) === '.git') {
        url = url.slice(0, -4);
    }
    return url
}

/* Search a package directory for the name of its license file.
 * Return the name, or `null` if it couldn't be found.
 */
function findLicenseFilename(projName) {
    const dir = `node_modules/${projName}`;
    const options = ["LICENSE", "LICENCE", "COPYING"];
    return fsPromises.readdir(dir).then(files => {
        for (let file of files) {
            const p = file.split('.');
            if ([1, 2].includes(p.length) && options.includes(p[0].toUpperCase())) {
                return file;
            }
        }
        return null;
    });
}

const GITHUB_REPO_URL = /[^:]+:\/\/github.com\/[^\/]+\/[^\/]+\/?$/;

class JsPackage {

    constructor({name, version, license}) {
        this.name = name;
        this.version = version;
        this.license = license;

        this.gh_url = null;
        this.license_url = null;
        /* `this.v` controls how we generate a ref, for use in the license URL.
         *   null: use 'master'
         *   false: use this.version
         *   true: use v${this.version}
         *   any other value is used as given (e.g. 'main')
         */
        this.v = false;
        this.license_filename = null;
    }

    async findLicenseFilename() {
        this.license_filename = await findLicenseFilename(this.name);
    }

    lookForGhUrlInPackageInfo(info) {
        let gh_url = null;
        let repo_url = null;
        let hp_url = null;
        const repoInfo = info.repository || {};
        if (typeof repoInfo === 'string' || repoInfo instanceof String) {
            repo_url = repoInfo;
        } else {
            repo_url = repoInfo.url || '';
        }
        if (GITHUB_REPO_URL.test(repo_url)) {
            gh_url = repo_url;
        }
        if (!gh_url) {
            hp_url = info.homepage || '';
            if (GITHUB_REPO_URL.test(hp_url)) {
                gh_url = hp_url;
            }
        }
        if (gh_url) {
            this.gh_url = normalizeRepoUrl(gh_url);
        }
    }

    acceptManualInfo(info) {
        if ('license_name' in info) {
            this.license = info.license_name;
        }
        for (let field of ['gh_url', 'license_url', 'v']) {
            if (field in info) {
                this[field] = info[field];
            }
        }
    }

    get projName() { return this.name; }

    get projURL() {
        return this.gh_url;
    }

    get licName() { return this.license; }

    get licURL() {
        if (this.license_url) {
            return this.license_url;
        }
        const filename = this.license_filename;
        if (filename === null) {
            return "#";
        }
        const v = this.v;
        const ref = v === null ? 'master' :
                    v === true ? `v${this.version}` :
                    v === false ? this.version : v;
        return `${this.gh_url}/blob/${ref}/${filename}`;
    }

}

const MANUAL_PKG_INFO = {
    'popper.js': {
        'license_url': 'https://github.com/floating-ui/floating-ui/blob/v1.16.1/LICENSE.md',
    },
};

module.exports = async function loader(source) {
    const pjPath = path.resolve('package.json');
    const pljPath = path.resolve('package-lock.json');
    this.addDependency(pjPath);
    this.addDependency(pljPath);
    const pj = require(pjPath);
    const plj = require(pljPath);

    let js = "export const softwareTableRows = `\n";

    const ownProjURL = normalizeRepoUrl(pj.repository.url);
    js += makeRow({
        projName: pj.name,
        projURL: ownProjURL,
        version: pj.version,
        licName: pj.license,
        licURL: `${ownProjURL}/blob/v${pj.version}/LICENSE`,
    });

    const allDeps = listDeps(plj);
    for (let projName of allDeps) {
        const pkgPath = path.resolve(`node_modules/${projName}/package.json`);
        this.addDependency(pkgPath);

        const pkgInfo = require(pkgPath);
        const manualInfo = MANUAL_PKG_INFO[projName];

        const pkg = new JsPackage(pkgInfo);
        pkg.lookForGhUrlInPackageInfo(pkgInfo);
        if (manualInfo) {
            pkg.acceptManualInfo(manualInfo);
        }
        await pkg.findLicenseFilename();

        js += makeRow(pkg);
    }

    js += "`;\n";
    return js;
}
