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

const webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path_resolver = require('path');

module.exports = env => {
    const args = env || {};
    const minmode = !!args.min;
    const chrome = !!args.chr;

    return {
        entry: {
            'background': './src/background.js',
            'content': './src/content.js',
            'options': './src/options/options.js',
        },
        output: {
            path: path_resolver.resolve(
                __dirname,
                chrome ?
                    minmode ? 'min-dist-chrome' : 'dist-chrome' :
                    minmode ? 'min-dist-mozilla' : 'dist-mozilla'
            ),
            filename: pathData => {
                return pathData.chunk.name === 'options' ? '[name]/[name].js' : '[name].js';
            },
        },
        mode: minmode ? 'production' : 'development',
        // According to [this](https://github.com/webpack/webpack/issues/4899#issuecomment-609737316),
        // setting `devtool: 'source-map'` is the way to prevent `eval` in the packed JS.
        // We can't have `eval`, since it is not allowed in browser extensions.
        // I'm using 'inline-source-map' instead because plain 'source-map' won't seem to show up in Chrome devtools.
        devtool: minmode ? false: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                },
                {
                    // See <https://v4.webpack.js.org/loaders/sass-loader/>
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                PBE_VERSION: JSON.stringify(process.env.npm_package_version),
            }),
            new CopyWebpackPlugin({
                patterns: [
                    // The copy plugin does its thing _before_ packed JS is emitted. This
                    // is good, since it means we can start by copying the whole `options` dir, and then
                    // the `.js` file will be overwritten by the packed version, just as we want.
                    {
                        context: "src",
                        from: "options",
                        to: "options"
                    },
                    {
                        context: "src",
                        from: "button",
                        to: "button"
                    },
                    {
                        context: "src",
                        from: chrome ? "manifest.v3.json" : "manifest.v2.json",
                        to: "manifest.json",
                        transform: (content, path) => {
                            const manifest = JSON.parse(content.toString());
                            // Add version number from package.json to manifest.json, so we don't have to repeat ourselves.
                            manifest.version = require("./package.json").version;
                            return JSON.stringify(manifest, null, 2);
                        },
                    },
                ]
            }),
        ],
        performance: {
            hints: false
        },
    };
};
