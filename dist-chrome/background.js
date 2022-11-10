/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/browser-peers/node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/browser-peers/node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \************************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.6.0 - Mon Dec 23 2019 12:32:53 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./node_modules/browser-peers/src/csbgspeer.js":
/*!*****************************************************!*\
  !*** ./node_modules/browser-peers/src/csbgspeer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsBgsPeer": () => (/* binding */ CsBgsPeer),
/* harmony export */   "CsBgsPortClient": () => (/* binding */ CsBgsPortClient)
/* harmony export */ });
/* harmony import */ var _peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peer */ "./node_modules/browser-peers/src/peer.js");
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */

const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/browser-peers/node_modules/webextension-polyfill/dist/browser-polyfill.js");



/*
 * This peer class supports symmetrical communication between content
 * scripts (CS) and background scripts (BGS) in a browser extension, via use
 * of the browser.runtime.Port class.
 *
 * Communication is symmetrical in the usual way (either side can initiate a
 * request, and receive a promise that resolves with a response from the other side).
 *
 * Establishing connections however is asymmetrical: the peer on the CS side must
 * open the connection. This is because to go in the other direction would require
 * use of `browser.tabs`, and we are trying to keep things simple and avoid that.
 */
class CsBgsPeer extends _peer__WEBPACK_IMPORTED_MODULE_0__.Peer {

    /*
     * @param name {string} MUST NOT contain the `#` character. Otherwise should
     *   be any unique name with which to tell this peer apart from all others.
     */
    constructor(name) {
        super(name);
        console.debug(`CsBgsPeer "${name}" was constructed ${this.constructionTime}`);
        this.portsByPeerName = new Map();
        browser.runtime.onConnect.addListener(this.acceptConnection.bind(this));
    }

    // ------------------------------------------------------------------------
    // Connections

    /* Open a connection with another peer.
     *
     * This method can only be called on peers living on the CS side, since it
     * uses `browser.runtime.connect`.
     *
     * @param peerName {string} the name of the peer to which we wish to connect.
     */
    openConnection(peerName) {
        /* In order for peer P to connect to peer Q, P must be on the CS side, and must
        * call `browser.runtime.connect`, passing as name of the port a string of the
        * form `${nameOfP}#${nameOfQ}`. */
        const portName = `${this.name}#${peerName}`;
        const port = browser.runtime.connect({name: portName});
        this.savePortAndListen(peerName, port);
    }

    acceptConnection(port) {
        if (port.name) {
            const [peerName, myName] = port.name.split("#");
            if (myName === this.name) {
                console.debug(`Conn from "${peerName}" accepted by CsBgsPeer ${this.name} constructed at ${this.constructionTime}`);
                this.savePortAndListen(peerName, port);
            }
        }
    }

    savePortAndListen(peerName, port) {
        this.portsByPeerName.set(peerName, port);
        port.onMessage.addListener(this.handleMessage.bind(this));
        // In both Chrome and Firefox, the disconnect event will in particular be fired
        // for a CS-side port if and when the tab in which it lives closes. So this
        // listener provides a bookkeeping solution for closing tabs.
        port.onDisconnect.addListener(() => {
            console.debug(`Port from ${this.name} to "${peerName}" disconnected`);
            this.portsByPeerName.delete(peerName);
        });
    }

    // ------------------------------------------------------------------------
    // Override abstract base class methods

    getAllPeerNames() {
        return Array.from(this.portsByPeerName.keys());
    }

    postMessageAsPeer(peerName, wrapper) {
        /* Starting with "Manifest V3", background pages are non-persistent, and run instead as
           service workers. It seems (in Chrome 102.0.5005.115 at least) that these workers will
           be stopped by force after abt 5 min of inactivity, even if you have an open Port.
           Therefore we now begin by attempting to reopen a connection if it seems to have been closed.
         */
        if (!this.portsByPeerName.has(peerName)) {
            this.openConnection(peerName);
            console.debug(`CsBgsPeer re-opened port to ${peerName}`);
        }
        const port = this.portsByPeerName.get(peerName);
        if (!port) {
            throw `Could not open port to ${peerName}`;
        }
        try {
            port.postMessage(wrapper);
        } catch (e) {
            /* Just in case the port was somehow disconnected but our bookkeeping efforts failed to
             * note it, we want to gracefully remove the port from our records now.
             * Last I checked (Chrome 85.0.4183.121 and Firefox Developer Edition 82.0b7),
             * Chrome says, "Attempting to use a disconnected port object",
             * while Firefox says, "Attempt to postMessage on disconnected port".
             */
            if (e.message && e.message.indexOf('disconnected port') >= 0) {
                console.log(`Caught disconnected port "${port.name}"`);
                const [name1, name2] = port.name.split("#");
                // One name should be that of our peer, one our own.
                // We can safely attempt to delete both from our mapping.
                this.portsByPeerName.delete(name1);
                this.portsByPeerName.delete(name2);
            } else {
                throw e;
            }
        }
    }

}


/*
 * This is a client class, which is meant to be instantiated in a content script,
 * and make requests of a CsBgsPeer, using a fresh port for each request, and
 * throwing each port away as soon as its response comes back.
 *
 * It is reasonable to ask what is the purpose of such a class, when we usually
 * say the purpose of ports is to maintain long-lived connections for multiple
 * requests and responses. However, in fact there is another reason to use ports,
 * and this is that they are the _fastest_ way to send data between CS and BGS,
 * which can be important when sending large byte arrays.
 *
 * Why then should the ports be used only for a single request, before throwing
 * them away? This is in order to support browser extensions under Manifest V3,
 * where the BGS can be terminated at any time (currently, Chrome seems to terminate
 * the BGS after 5 minutes of inactivity, even if there are open ports). The BGS is
 * started anew in response to events on which it has registered listeners. This
 * means a client that tried to reuse a port would always be in danger of using
 * a stale port, whose recipient had vanished. Tests have shown it is no use trying
 * to monitor disconnect events either; we repeatedly found that no such event
 * was received on the CS side, when the BGS was forcibly closed by the browser.
 */
class CsBgsPortClient extends _peer__WEBPACK_IMPORTED_MODULE_0__.Peer {

    constructor(name) {
        super(name);
        console.debug(`CsBgsPortClient "${name}" was constructed ${this.constructionTime}`);
    }

    fromAddress() {
        return `${this.name}-${this.nextSeqNum}`;
    }

    openConnection(peerName) {
        const portName = `${this.fromAddress()}#${peerName}`;
        const port = browser.runtime.connect({name: portName});
        port.onMessage.addListener(wrapper => {
            console.assert(wrapper.type === 'response', 'A CsBgsPortClient should never receive requests.');
            port.disconnect();
            this.handleMessage(wrapper);
        });
        return port;
    }

    postMessageAsPeer(peerName, wrapper) {
        const port = this.openConnection(peerName);
        if (!port) {
            throw `Could not open port to ${peerName}`;
        }
        port.postMessage(wrapper);
    }

}


/***/ }),

/***/ "./node_modules/browser-peers/src/errors.js":
/*!**************************************************!*\
  !*** ./node_modules/browser-peers/src/errors.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionUnavailableError": () => (/* binding */ ExtensionUnavailableError),
/* harmony export */   "FetchRejectedError": () => (/* binding */ FetchRejectedError),
/* harmony export */   "FetchResolvedNotOkError": () => (/* binding */ FetchResolvedNotOkError),
/* harmony export */   "FetchWrongContentTypeError": () => (/* binding */ FetchWrongContentTypeError),
/* harmony export */   "LackingHostPermissionError": () => (/* binding */ LackingHostPermissionError),
/* harmony export */   "NoGroupError": () => (/* binding */ NoGroupError),
/* harmony export */   "UnknownPeerError": () => (/* binding */ UnknownPeerError),
/* harmony export */   "reconstituteError": () => (/* binding */ reconstituteError)
/* harmony export */ });
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */

/*
 * Here we define special error classes that are designed to be serializable.
 * This is so that they can be communicated via various messaging systems,
 * and then reconstructed on the other side.
 *
 * All error classes defined here MUST:
 *
 *   * have a constructor that accepts an object
 *
 *   * define `this.name` equal to their own class name (as string!)
 *
 *   * be registered in `KNOWN_ERROR_CLASSES` (see below) under their class name
 *
 *   * have a `serialize()` method that returns the JSON.stringify of an
 *     object that:
 *       - can be passed to the class's constructor, and
 *       - includes `_error_class_name: this.name`
 *
 */

// ---------------------------------------------------------------------------
// Special error classes

/*
 * This error class represents cases in which we are trying to do something
 * that involves belonging to a group, but we do not (yet) belong to one.
 */
class NoGroupError extends Error {

    constructor({ message }) {
        super(message);
        this.name = "NoGroupError";
    }

    serialize() {
        return JSON.stringify({
            _error_class_name: this.name,
            message: this.message,
        });
    }

}

/*
 * This error class is intended to represent cases in which the extension has
 * become unavailable. Usually (actually the only case I'm currently aware of)
 * this is because the extension was uninstalled after that page was loaded.
 */
class ExtensionUnavailableError extends Error {

    constructor({ message }) {
        super(message);
        this.name = "ExtensionUnavailableError";
    }

    serialize() {
        return JSON.stringify({
            _error_class_name: this.name,
            message: this.message,
        });
    }

}

/* Represents cases in which a Peer is attempting to look up another
 * Peer, but cannot find it.
 */
class UnknownPeerError extends Error {

    constructor({ message }) {
        super(message);
        this.name = "UnknownPeerError";
    }

    serialize() {
        return JSON.stringify({
            _error_class_name: this.name,
            message: this.message,
        });
    }

}

/*
 * This represents cases in which the extension is lacking host permission
 * for a given URL.
 */
class LackingHostPermissionError extends Error {

    constructor({ url }) {
        super(`Extension lacks host permission for ${url}.`);
        this.name = "LackingHostPermissionError";
        this.url = url;
    }

    serialize() {
        return JSON.stringify({
            _error_class_name: this.name,
            url: this.url,
        });
    }
}

/*
 * Superclass of more specific fetch error types defined below.
 * For now, not exported, since I think users only need the more specific types.
 */
class FetchError extends Error {

    /* We record those attributes of a fetch Response object
     * (see <https://developer.mozilla.org/en-US/docs/Web/API/Response>)
     * that we think will be useful (and that we want to bother with right
     * now -- maybe more in the future).
     *
     * Note that you may pass a Response instance itself to this constructor.
     */
    constructor({ ok, status, statusText, type, url, headers, contentType }) {
        const message = `Fetch ${url} status: ${status} ${statusText}`;
        super(message);
        this.name = 'FetchError';
        this.ok = ok;
        this.status = status;
        this.statusText = statusText;
        this.type = type;
        this.url = url;
        this.contentType = contentType;
        if (headers && headers.get) {
            try {
                this.contentType = headers.get('Content-Type');
            } catch (e) {
            }
        }
    }

    serialize() {
        return JSON.stringify({
            _error_class_name: this.name,
            ok: this.ok,
            status: this.status,
            statusText: this.statusText,
            type: this.type,
            url: this.url,
            contentType: this.contentType,
        });
    }

}

/*
 * This error class is intended to represent cases in which a `fetch` promise
 * resolved, but returned a Response object whose `ok` property was `false`.
 *
 * On both Chrome and Firefox, this will be the case when we successfully
 * received a response, but it had an HTTP status outside the 200-299 range.
 */
class FetchResolvedNotOkError extends FetchError {

    constructor({ ok, status, statusText, type, url }) {
        super({ ok, status, statusText, type, url });
        this.name = 'FetchResolvedNotOkError';
    }

}

/*
 * This error class is intended to represent cases in which a `fetch` promise rejected.
 *
 * For example, on both Chrome and Firefox, this will be the case when we attempt to make a
 * cross-origin fetch, but CORS fails due to absence of Access-Control-Allow-Origin header.
 */
class FetchRejectedError extends FetchError {

    constructor({ ok, status, statusText, type, url }) {
        super({ ok, status, statusText, type, url });
        this.name = 'FetchRejectedError';
        this.message = 'Fetch rejected. ' + this.message;
    }

}

/*
 * Represents cases in which a `fetch` resolved with `ok` but with an unexpected
 * Content-Type header.
 */
class FetchWrongContentTypeError extends FetchError {

    constructor({ ok, status, statusText, type, url, headers, contentType }) {
        super({ ok, status, statusText, type, url, headers, contentType });
        this.name = 'FetchWrongContentTypeError';
        this.message = `Fetch ${url} received unexpected Content-Type: ${contentType}`;
    }

}

// ---------------------------------------------------------------------------
// Reconstitution

const KNOWN_ERROR_CLASSES = new Map()
    .set("FetchResolvedNotOkError", FetchResolvedNotOkError)
    .set("FetchRejectedError", FetchRejectedError)
    .set("NoGroupError", NoGroupError)
    .set("ExtensionUnavailableError", ExtensionUnavailableError)
    .set("LackingHostPermissionError", LackingHostPermissionError)
    .set("FetchWrongContentTypeError", FetchWrongContentTypeError)
    .set("UnknownPeerError", UnknownPeerError)
;

/* Attempt to reconstitute a special error class instance from a generic Error.
 * We look at the message of the given Error. If it appears to be the serialization
 * of one of our special error classes, then we rebuild an instance based on this.
 * Otherwise we just return the given Error.
 *
 * param error: an Error instance
 * return: the reconstituted error, or the given one.
 */
function reconstituteError(error) {
    let d = null;
    try {
        d = JSON.parse(error.message);
    } catch {}
    if (d && KNOWN_ERROR_CLASSES.has(d._error_class_name)) {
        const ClassConstructor = KNOWN_ERROR_CLASSES.get(d._error_class_name);
        return new ClassConstructor(d);
    }
    return error;
}


/***/ }),

/***/ "./node_modules/browser-peers/src/peer.js":
/*!************************************************!*\
  !*** ./node_modules/browser-peers/src/peer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Peer": () => (/* binding */ Peer)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/browser-peers/src/errors.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/browser-peers/src/util.js");
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */




/* This is the abstract base class for all of our peer classes.
 * It implements everything to do with making and handling requests and responses.
 *
 * Subclasses are responsible for establishing connections between peers,
 * and for implementing the abstract `postMessageAsPeer` method defined by this
 * base class.
 *
 */
class Peer extends _util__WEBPACK_IMPORTED_MODULE_1__.Listenable {

    /*
     * @param name {string} a unique name for this peer, to tell it apart
     *   from all others.
     */
    constructor(name) {
        super({});

        // For development and testing in settings like browser extensions under
        // Manifest V3 (where background scripts are repeatedly terminated and
        // restarted) it can be helpful to print debugging output in which we see
        // the time at which a given peer was constructed.
        this.constructionTime = (new Date()).toLocaleTimeString();

        this.name = name;
        this.handlers = new Map();
        this.nextSeqNum = 0;
        this.requestsBySeqNum = new Map();

        this.reconstituteErrors = false;

        this.readyResolve = null;
        const self = this;
        this.readyPromise = new Promise(resolve => {
            self.readyResolve = resolve;
        });

        this.builtInHandlers = new Map()
            .set('ready', this.ready.bind(this))
        ;
        for (let [name, handler] of this.builtInHandlers) {
            this._addHandler(name, handler);
        }
    }

    fromAddress() {
        return this.name;
    }

    copyMessage(msg) {
        return JSON.parse(JSON.stringify(msg));
    }

    // ------------------------------------------------------------------------
    // Message handling

    /* Subclasses should pass incoming request/response wrapper messages to this method.
     *
     * wrapper format: {
     *   type {string} 'request' or 'response'
     * }
     *
     * Furthermore, the wrapper must conform to the required format of `this.handleRequest`
     * or `this.handleResponse`, according to the value of `wrapper.type`.
     *
     */
    handleMessage(wrapper) {
        if (wrapper.type === 'request') {
            this.handleRequest(wrapper);
        } else {
            this.handleResponse(wrapper);
        }
    }

    /*
     * wrapper format: {
     *   from {string} the name of the peer that sent the message,
     *   seqNum {int} sequence number that will be used to associate response with request,
     *   handlerDescrip {string} should be a valid descriptor string pointing to a handler
     *     that has been registered with this peer,
     *   args {any} will be passed to the handler
     * }
     */
    handleRequest(wrapper) {
        const peerName = wrapper.from;
        const seqNum = wrapper.seqNum;
        const handlerDescrip = wrapper.handlerDescrip;
        const args = wrapper.args;
        let handler;
        try {
            handler = this.lookupHandler(handlerDescrip);
        } catch (e) {
            this.returnRejection(peerName, seqNum, e);
            return;
        }
        // Call the handler inside `Promise.resolve` so we can work with it asynchronously,
        // even if the handler returns synchronously.
        // We pass the whole wrapper as a second argument (which the handler may choose
        // to ignore), in case the handler needs the "meta" information (such as the peer name).
        Promise.resolve(handler(args, wrapper)).then(result => {
            this.returnResponse(peerName, seqNum, result);
        }).catch(reason => {
            reason = this.checkHandlingError(reason, wrapper);
            this.returnRejection(peerName, seqNum, reason);
        });
    }

    /*
     * @param peerName {string}
     * @param seqNum {int}
     * @param result {any}
     */
    returnResponse(peerName, seqNum, result) {
        const wrapper = {
            type: 'response',
            from: this.fromAddress(),
            seqNum: seqNum,
            result: result,
        };
        this.postMessageAsPeer(peerName, wrapper);
    }

    /*
     * @param peerName {string}
     * @param seqNum {int}
     * @param reason: {Error}
     */
    returnRejection(peerName, seqNum, reason) {
        const wrapper = {
            type: 'response',
            from: this.fromAddress(),
            seqNum: seqNum,
            rejection_reason: reason.message,
        };
        this.postMessageAsPeer(peerName, wrapper);
    }

    consumeRequestData(seqNum) {
        const data = this.requestsBySeqNum.get(seqNum);
        if (data) window.clearTimeout(data.timeoutHandle);  // fails gracefully if timeout already cleared or handle is null
        this.requestsBySeqNum.delete(seqNum);
        return data;
    }

    /*
     * wrapper format: {
     *   REQUIRED:
     *      from {string} the name of the peer that sent the message,
     *      seqNum {int} sequence number that will be used to associate response with request,
     *   EITHER/OR:
     *      result {any} if the call was successful, this is the result to be returned.
     *      rejection_reason {string} if the call failed, this is an indication of the reason.
     * }
     */
    handleResponse(wrapper) {
        const data = this.consumeRequestData(wrapper.seqNum);
        if (!data) {
            // Should only happen if request data already consumed due to timeout.
            // In that case, caller already has their answer. So just do nothing.
            return;
        }
        if (wrapper.rejection_reason) {
            let e = new Error(wrapper.rejection_reason);
            if (this.reconstituteErrors) {
                e = (0,_errors__WEBPACK_IMPORTED_MODULE_0__.reconstituteError)(e);
            }
            data.reject(e);
        } else {
            data.resolve(wrapper.result);
        }
    }

    // ------------------------------------------------------------------------
    // Readiness
    //
    //   To be clear: this means readiness to handle requests, not to accept connections.
    //   A peer instance is immediately ready to accept connections after construction.

    /* Call this when you've finished adding handlers, in order to declare that this
     * peer is ready to handle requests.
     */
    setReady() {
        this.readyResolve();
    }

    /* This is our built-in handler for the 'ready' handler description.
     *
     * It returns a promise that other peers can use to wait until this peer is ready
     * to accept connections.
     */
    ready() {
        return this.readyPromise;
    }

    /* Convenience method to check the readiness of a connected peer.
     */
    checkReady(peerName) {
        return this.makeRequest(peerName, 'ready', {}, false);
    }

    // ------------------------------------------------------------------------
    // Request handlers

    /* Add a handler function or handler object.
     *
     * Handler functions will be passed two arguments: `args` and `meta`. The first is an
     * object passed by the client and presumably containing all the arguments required by
     * the handler; the second is an object containing meta information about the request,
     * such as the name of the client (which is under `meta.from`).
     *
     * Handlers may return a value synchronously, or may return a Promise. Either is acceptable.
     *
     * You may not register a handler under a reserved name, i.e. the names of any of our
     * built-in handlers. These are defined in the constructor.
     *
     * @return: this instance, to support chaining.
     */
    addHandler(name, handler) {
        if (this.builtInHandlers.has(name)) {
            throw new Error(`Cannot register handler under reserved name: ${name}`);
        }
        this._addHandler(name, handler);
        return this;
    }

    _addHandler(name, handler) {
        this.handlers.set(name, handler);
    }

    /* Add a "built-in handler," which really means a handler such that an error
     * will be thrown if anyone tries to add a handler by the same name using the
     * usual `addHandler` method.
     *
     * If the language supported it, we would make this a protected method, i.e.
     * usable only by subclasses. So don't use it unless you should!
     */
    _addBuiltInHandler(name, handler) {
        this.builtInHandlers.set(name, handler);
        this._addHandler(name, handler);
    }

    /* Look up a handler, by its description.
     *
     * A handler description should be a string naming something that has been added as a
     * handler for this server, or an attribute thereof, recursively.
     *
     * For example, if `myFunc` is a function, then after
     *      server.addHandler('f', myFunc)
     * 'f' is a valid description.
     *
     * If `myInstance` is an instance of a class that has a `doSomething` method, then
     * after
     *      server.addHandler('foo', myInstance)
     * 'foo.doSomething' is a valid description.
     *
     * @param descrip {string} the description of the handler.
     * @return: the handler. If the description was dotted, then the returned handler function
     *   has the previous object in the chain bound as `this`.
     * @throws: Error if the description does not resolve to anything, or if it does but that
     *   thing is not a function.
     */
    lookupHandler(descrip) {
        const parts = descrip.split('.');
        let first = true;
        let handler;
        let prev;
        for (let part of parts) {
            if (first) {
                first = false;
                handler = this.handlers.get(part);
            } else if (handler) {
                prev = handler;
                handler = handler[part];
            } else {
                break;
            }
        }
        if (!handler) {
            throw new Error(`Unknown handler: ${descrip}`);
        }
        if (typeof handler !== "function") {
            throw new Error(`Handler "${descrip}" is not a function`);
        }
        if (prev) {
            handler = handler.bind(prev);
        }
        return handler;
    }

    /* If you are on the same side as a peer, you can use this method to call
     * one of its handlers directly, instead of within a request/response pair.
     */
    callHandler(handlerDescrip, args) {
        const handler = this.lookupHandler(handlerDescrip);
        return handler(args);
    }

    // ------------------------------------------------------------------------
    // Making requests

    takeNextSeqNum() {
        const n = this.nextSeqNum;
        this.nextSeqNum = n + 1;
        return n;
    }

    /* Send a request to a single peer.
     *
     * @param peerName {string} The name of the peer to which the request should be sent.
     * @param handlerDescrip {string} A description indicating the desired handler for the
     *   request on the other side.
     * @param args {obj} the arguments object to be passed to the handler on the other side.
     *
     * @param options: {
     *   doReadyCheck {bool} optional, default false. Set true if you want to precede
     *     the request with a ready check.
     *   timeout {int} optional, default 0. Set positive if you want the request to timeout
     *     after this many milliseconds. If 0 (or negative), will wait indefinitely.
     *     In case of timeout, the returned promise rejects.
     * }
     *
     * @return {Promise} promise that resolves with the response to the request, or rejects
     *   with an error.
     *
     * See also: `broadcastRequest`.
     */
    makeRequest(peerName, handlerDescrip, args, options) {
        const {
            doReadyCheck = false,
            timeout = 0,
        } = options || {};
        const seqNum = this.takeNextSeqNum();
        const wrapper = {
            type: 'request',
            from: this.fromAddress(),
            seqNum: seqNum,
            handlerDescrip: handlerDescrip,
            args: args,
        };
        const check = doReadyCheck ? this.checkReady(peerName) : Promise.resolve();
        return check.then(() => {
            return new Promise((resolve, reject) => {
                const timeoutHandle = timeout < 1 ? null : window.setTimeout(() => {
                    const data = this.consumeRequestData(seqNum);
                    if (!data) return; // Request was already handled.
                    reject(new Error('Peer request timed out.'));
                }, timeout);
                this.requestsBySeqNum.set(seqNum, {
                    resolve: resolve,
                    reject: reject,
                    timeoutHandle: timeoutHandle,
                });
                this.postMessageAsPeer(peerName, wrapper);
            });
        });
    }

    /* Broadcast a request to all connected peers (or a subset, by filtering).
     *
     * This just performs multiple requests. Particular subclasses may have more
     * efficient ways of broadcasting that they may prefer to use instead.
     *
     * @param handlerDescrip {string} A description indicating the desired handler for the
     *   request on the other side.
     * @param args {obj} the arguments object to be passed to the handler on the other side.
     *
     * @param options: {
     *   excludeSelf {bool} If true, do not send the request to self. This is relevant for
     *     some peer types that keep their own name in their set of peers; for those that
     *     do not, it can be ignored.
     *   filter {function} optional function mapping peer names to booleans. Allows to
     *     broadcast to a subset of all connected peers, namely those mapping to `true`.
     *     If `excludeSelf` is true, that exclusion happens first, and the given filter
     *     is applied to what remains.
     *   skipReadyChecks {bool} optional, default false. If false we will precede each
     *     request with a readiness check. Set true to skip.
     * }
     *
     * @return {Array[Promise]} array of the promises returned by our `makeRequest` method,
     *   one for each peer to which a request was sent.
     *
     * See also: `makeRequest`.
     *
     * Note: While in the `makeRequest` method the ready check is skipped by default, here the
     *   behavior is the opposite, and the ready checks are performed by default. It is felt that,
     *   rather than being confusing, this caters to normal usage patterns. It will be normal to
     *   be broadcasting to a collection of peers for which we are _not_ carefully maintaining state;
     *   whereas when requesting from a single peer, we are more likely to have already performed an
     *   initial (one-time) ready check ourselves.
     */
    broadcastRequest(handlerDescrip, args, options) {
        const {
            excludeSelf = false,
            filter = (() => true),
            skipReadyChecks = false
        } = options || {};
        const peerNames = this.getAllPeerNames().filter(name => (!excludeSelf) || name !== this.name).filter(filter);
        const responsePromises = [];
        for (let peerName of peerNames) {
            responsePromises.push(this.makeRequest(peerName, handlerDescrip, args, {
                doReadyCheck: !skipReadyChecks,
            }));
        }
        return responsePromises;
    }

    // ------------------------------------------------------------------------
    // Abstract methods subclasses MAY override

    /* Subclasses should override this method if they want to use this
     * base class's `broadcastRequest` method.
     *
     * @return {Array[string]} an Array of the names of all connected peers.
     */
    getAllPeerNames() {
        return [];
    }

    /* This gives a chance to examine and modify a handler error, and possibly
     * have side effects, before the error is returned.
     *
     * @param reason: Error thrown by request handler.
     * @param wrapper: the wrapper message that was being handled.
     * @return: Error instance. May be the same as the given reason, or different.
     */
    checkHandlingError(reason, wrapper) {
        return reason;
    }

    // ------------------------------------------------------------------------
    // Abstract methods subclasses MUST override

    /* This is where subclasses must use their transport-specific method of getting
     * a serializable message from one peer to another.
     *
     * Specifically, the message to be communicated here is one of the "wrapper"
     * messages we use to represent requests and responses. The intention therefore
     * is that it be delivered to the `handleMessage` method of the peer (which should
     * _not_ be overridden, but should be inherited from this base class).
     *
     * @param peerName {string} the name of a connected peer
     * @param wrapper {obj} the wrapper message to be posted to that peer. Format: {
     *   type {string} equal to either 'request' or 'response', appropriately.
     * }
     */
    postMessageAsPeer(peerName, wrapper) {
        //
    }

}


/***/ }),

/***/ "./node_modules/browser-peers/src/util.js":
/*!************************************************!*\
  !*** ./node_modules/browser-peers/src/util.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Listenable": () => (/* binding */ Listenable),
/* harmony export */   "enrichXhrParams": () => (/* binding */ enrichXhrParams),
/* harmony export */   "xhr": () => (/* binding */ xhr)
/* harmony export */ });
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */

/* Simple XMLHttpRequest utility
 *
 * param url: the url to be accessed
 * optional params object:
 *      method: "GET", "POST" etc. Defaults to "GET"
 *      query: pass an object defining key-value pairs that you want added
 *          as a query string on the end of the URL
 *      form: pass an object defining key-value pairs that you want to be
 *          sent in form-encoded format in the body of the request
 *      handleAs: 'text', 'json', or 'blob'. Defaults to 'text'
 *
 * return: promise that resolves with the response from the request
 */
function xhr(url, params) {
    if (params.query) {
        url += "?"+(new URLSearchParams(params.query)).toString();
    }
    const init = {
        method: params.method || "GET"
    };
    if (params.form) {
        init.body = new URLSearchParams(params.form);
    }
    const handleAs = params.handleAs || 'text';
    return fetch(url, init).then(resp => {
        if (!resp.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`);
        }
        if (handleAs === 'json') {
            return resp.json();
        } else if (handleAs === 'blob') {
            return resp.blob();
        } else {
            return resp.text();
        }
    });
}

/* Add extra key-value arguments to an XHR.
 *
 * @param givenParams: a `params` arg which would have been passed to the
 *   `xhr` function defined in this module.
 * @param extraPairs: an object defining extra key-value args that you want to
 *   add to the request.
 * @return: a _new_ params object. The given one is not modified.
 *   The extra pairs are placed in `params.query` if `query` was defined in the
 *   givenParams, else in `params.form` if that was defined. If neither was defined,
 *   then we define `params.query` and put the extra pairs in there.
 */
function enrichXhrParams(givenParams, extraPairs) {
    const params = {};
    Object.assign(params, givenParams || {});
    if (params.query) {
        Object.assign(params.query, extraPairs);
    } else if (params.form) {
        Object.assign(params.form, extraPairs);
    } else {
        params.query = {};
        Object.assign(params.query, extraPairs);
    }
    return params;
}

class Listenable {

    constructor(listeners) {
        this.listeners = listeners;
    }

    on(eventType, callback) {
        const cbs = this.listeners[eventType] || [];
        cbs.push(callback);
        this.listeners[eventType] = cbs;
    }

    off(eventType, callback) {
        const cbs = this.listeners[eventType] || [];
        const i0 = cbs.indexOf(callback);
        if (i0 >= 0) {
            cbs.splice(i0, 1);
            this.listeners[eventType] = cbs;
        }
    }

    dispatch(event) {
        /* Subtle point: In general, we are always careful not to modify an
         * iterable while we are in the process of iterating over it. Here, we don't
         * know whether a callback might `off` itself as a part of its process,
         * thereby modifying our array of listeners while we are iterating over it!
         * Therefore, to be safe, we have to iterate over a _copy_ of our array of
         * registered listeners. */
        const cbs = (this.listeners[event.type] || []).slice();
        for (let cb of cbs) {
            cb(event);
        }
    }

}

/***/ }),

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.10.0 - Fri Aug 12 2022 19:42:44 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!globalThis.chrome?.runtime?.id) {
    throw new Error("This script should only be loaded in a browser extension.");
  }

  if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received."; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      });

      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */


        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {}
          /* wrappers */
          , {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    }; // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ }),

/***/ "./src/cache.js":
/*!**********************!*\
  !*** ./src/cache.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getByteArray": () => (/* binding */ getByteArray),
/* harmony export */   "removeByteArray": () => (/* binding */ removeByteArray),
/* harmony export */   "restoreCacheIndexFromStorage": () => (/* binding */ restoreCacheIndexFromStorage),
/* harmony export */   "setByteArray": () => (/* binding */ setByteArray)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
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

const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
const LRU = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");



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
 *   stored: <bool> starts out false; goes to true after the full byte array has been stored,
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
        const now = (0,_util__WEBPACK_IMPORTED_MODULE_0__.nowStampLex)();
        this.lru.set(url, {
            url: url,
            size: size,
            mtime: now,
            atime: now,
            stored: false,
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
            info.atime = (0,_util__WEBPACK_IMPORTED_MODULE_0__.nowStampLex)();
            this.commit();
        }
        return info;
    }

    /*
     * Record the fact that the byte array for a given URL has been stored.
     *
     * @param url: {string} the URL of the PDF whose bytes have been stored
     * @return: the corresponding info object if present in the cache; else undefined
     */
    noteArrayStored(url) {
        const info = this.lru.get(url);
        if (info) {
            info.stored = true;
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
     *   stored: <bool> starts out false; goes to true after the full byte array has been stored,
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
 * param cacheIndex: a CacheIndex instance in which the fact of byte array storage should be noted.
 * return: promise that resolves when the operation is complete.
 */
function setByteArray(url, byteArray, cacheIndex) {
    const plainArray = (byteArray instanceof Uint8Array) ? Array.from(byteArray) : byteArray;
    const arrayKey = CACHE_BYTES_PREFIX + url;
    return browser.storage.local.set({
        [arrayKey]: plainArray
    }).then(r => {
        cacheIndex.noteArrayStored(url);
        return r;
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




/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readConfigVar": () => (/* binding */ readConfigVar),
/* harmony export */   "restorePbeConfigFromStorage": () => (/* binding */ restorePbeConfigFromStorage),
/* harmony export */   "setConfigVar": () => (/* binding */ setConfigVar)
/* harmony export */ });
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

const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");

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
function restorePbeConfigFromStorage(browserName) {
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
async function readConfigVar(name, browserName) {
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
async function setConfigVar(name, value, browserName) {
    const config = await restorePbeConfigFromStorage(browserName);
    config[name] = value;
    return storeConfig(config);
}


/***/ }),

/***/ "./src/downloadmgr.js":
/*!****************************!*\
  !*** ./src/downloadmgr.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BgsDownloadMgr": () => (/* binding */ BgsDownloadMgr),
/* harmony export */   "CsDownloadMgr": () => (/* binding */ CsDownloadMgr)
/* harmony export */ });
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ "./src/cache.js");
/* harmony import */ var browser_peers_src_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-peers/src/errors */ "./node_modules/browser-peers/src/errors.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
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

const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");





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
                const e = new browser_peers_src_errors__WEBPACK_IMPORTED_MODULE_1__.LackingHostPermissionError({url: url});
                throw new Error(e.serialize());
            }
            return able;
        });
    }

    fetchPdf({ url }) {
        return (0,_util__WEBPACK_IMPORTED_MODULE_2__.fetchPdf)(url);
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
class BgsDownloadMgr extends AbstractDownloadMgr {

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
        return (0,_cache__WEBPACK_IMPORTED_MODULE_0__.setByteArray)(url, bytes, this.cacheIndex).then(() => {
            console.debug(new Date(), 'finished storing PDF');
        });
    }

    readPdfBytes({ url }) {
        return (0,_cache__WEBPACK_IMPORTED_MODULE_0__.getByteArray)(url);
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
class CsDownloadMgr extends AbstractDownloadMgr {

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
                (0,_cache__WEBPACK_IMPORTED_MODULE_0__.getByteArray)(url);
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


/***/ }),

/***/ "./src/pbebg.js":
/*!**********************!*\
  !*** ./src/pbebg.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PbeBackground": () => (/* binding */ PbeBackground)
/* harmony export */ });
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ "./src/cache.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _downloadmgr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./downloadmgr */ "./src/downloadmgr.js");
/* harmony import */ var browser_peers_src_csbgspeer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! browser-peers/src/csbgspeer */ "./node_modules/browser-peers/src/csbgspeer.js");
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

const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");







class PbeBackground {
    
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
        this.clearEverything = _util__WEBPACK_IMPORTED_MODULE_2__.clearEverything;
        this.getEverything = _util__WEBPACK_IMPORTED_MODULE_2__.getEverything;
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
                console.debug('Browser name (as reported)', this.browserInfo.name);
            });
        } catch (e) {
            /* Disappointingly, `browser.runtime.getBrowserInfo` isn't even defined in
             * Chrome, and the polyfill library doesn't define it either. So the
             * very fact that the function fails to exist already tells us we're not in
             * Firefox -- and, for us, that means we're in a Chromium-based browser. */
            this.browserInfo.name = 'Chromium';
            console.debug('Browser name (by default)', this.browserInfo.name);
        }

        // Set up the browser action
        // In Firefox, `browser.browserAction` is defined, and `browser.action` is not;
        // in Chromium-based browsers, the reverse is true.
        const browserAction = browser.browserAction || browser.action;
        browserAction.onClicked.addListener((tab) => {
            //console.debug(tab);
            self.requestActivation(tab);
        });

        // Initialize the background peer. Will complete setting it up later.
        this.bgPeer = new browser_peers_src_csbgspeer__WEBPACK_IMPORTED_MODULE_4__.CsBgsPeer('pfscBgPeer');


        // The cache index is restored from storage once at startup time.
        (0,_cache__WEBPACK_IMPORTED_MODULE_0__.restoreCacheIndexFromStorage)().then(cacheIndex => {
            self.cacheIndex = cacheIndex;
            // Now we can also finish setting up the background server.
            self.bgDlm = new _downloadmgr__WEBPACK_IMPORTED_MODULE_3__.BgsDownloadMgr(cacheIndex, {doDelayedStorage: true});
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

    readConfigVar({name}) {
        return (0,_config__WEBPACK_IMPORTED_MODULE_1__.readConfigVar)(name, this.browserInfo.name);
    }

    setConfigVar({name, value}) {
        return (0,_config__WEBPACK_IMPORTED_MODULE_1__.setConfigVar)(name, value, this.browserInfo.name);
    }
    
}


/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearEverything": () => (/* binding */ clearEverything),
/* harmony export */   "fetchPdf": () => (/* binding */ fetchPdf),
/* harmony export */   "getEverything": () => (/* binding */ getEverything),
/* harmony export */   "nowStampLex": () => (/* binding */ nowStampLex)
/* harmony export */ });
/* harmony import */ var browser_peers_src_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-peers/src/errors */ "./node_modules/browser-peers/src/errors.js");
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

const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");



/*
 * Fetch a PDF and return its Uint8Array.
 * Throw an error if the HTTP response does not come back `ok` or if we do not
 * get a Content-Type header equal to "application/pdf".
 */
function fetchPdf(url) {
    return fetch(url).then(resp => {
        if (!resp.ok) {
            const e = new browser_peers_src_errors__WEBPACK_IMPORTED_MODULE_0__.FetchResolvedNotOkError(resp);
            throw new Error(e.serialize());
        } else if (resp.headers.get('Content-Type') !== 'application/pdf') {
            const e = new browser_peers_src_errors__WEBPACK_IMPORTED_MODULE_0__.FetchWrongContentTypeError(resp);
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pbebg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pbebg */ "./src/pbebg.js");
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



const pbeBg = new _pbebg__WEBPACK_IMPORTED_MODULE_0__.PbeBackground();
pbeBg.startup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBZ0MsQ0FBQyxNQUFRLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUN4RCxJQUFJLEtBQUssWUFRTjtBQUNILENBQUM7QUFDRDs7QUFFQSxzQ0FBc0M7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3U0FBd1M7QUFDeFM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEdBQUc7QUFDcEIsbUJBQW1CLFNBQVM7QUFDNUI7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsa0JBQWtCO0FBQ2xCLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDN1VBO0FBQ0EsTUFBTSxJQUEwQztBQUNoRCxJQUFJLGlDQUFnQyxDQUFDLE1BQVEsQ0FBQyxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQ3hELElBQUksS0FBSyxZQVFOO0FBQ0gsQ0FBQztBQUNEOztBQUVBLHNDQUFzQzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0hBQXdIO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0Es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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7O0FBRXhDLGtCQUFrQixpREFBYTtBQUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wZWVycy9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGVlcnMvc3JjL2NzYmdzcGVlci5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGVlcnMvc3JjL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGVlcnMvc3JjL3BlZXIuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9ub2RlX21vZHVsZXMvbHJ1LWNhY2hlL2luZGV4LmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vbm9kZV9tb2R1bGVzL3lhbGxpc3QvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy95YWxsaXN0L3lhbGxpc3QuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL3NyYy9jYWNoZS5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vc3JjL2Rvd25sb2FkbWdyLmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9zcmMvcGJlYmcuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC42LjAgLSBNb24gRGVjIDIzIDIwMTkgMTI6MzI6NTMgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKHR5cGVvZiBicm93c2VyID09PSBcInVuZGVmaW5lZFwiIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihicm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuICAgIGNvbnN0IFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORyA9IFwiUmV0dXJuaW5nIGEgUHJvbWlzZSBpcyB0aGUgcHJlZmVycmVkIHdheSB0byBzZW5kIGEgcmVwbHkgZnJvbSBhbiBvbk1lc3NhZ2Uvb25NZXNzYWdlRXh0ZXJuYWwgbGlzdGVuZXIsIGFzIHRoZSBzZW5kUmVzcG9uc2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIHNwZWNzIChTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvcnVudGltZS9vbk1lc3NhZ2UpXCI7IC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAgIC8vIG9wdGltaXphdGlvbiBmb3IgRmlyZWZveC4gU2luY2UgU3BpZGVybW9ua2V5IGRvZXMgbm90IGZ1bGx5IHBhcnNlIHRoZVxuICAgIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAgIC8vIGluIEZpcmVmb3ggbmVhcmx5IGZvciBmcmVlLlxuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdGlvblxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG11c3QgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4QXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWF4UmVzb2x2ZWRBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGNyZWF0ZWQgYnkgdGhlIHdyYXBwZWQgYXN5bmMgZnVuY3Rpb24uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pOyAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxuXG5cbiAgICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HLCBuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgICAgICAgICAgICAgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTsgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cblxuXG4gICAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gcHJvbWlzZSA9PiB7XG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB2YWx1ZS5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIC8vIFNlbmQgYSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpZiB0aGUgcmVqZWN0ZWQgdmFsdWVcbiAgICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07IC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXG5cblxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH0gLy8gTGV0IENocm9tZSBrbm93IHRoYXQgdGhlIGxpc3RlbmVyIGlzIHJlcGx5aW5nLlxuXG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjayA9ICh7XG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgcmVzb2x2ZVxuICAgICAgfSwgcmVwbHkpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHRvIHVuZGVmaW5lZCBhcyBpbiBGaXJlZm94LlxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgY2hyb21lICE9IFwib2JqZWN0XCIgfHwgIWNocm9tZSB8fCAhY2hyb21lLnJ1bnRpbWUgfHwgIWNocm9tZS5ydW50aW1lLmlkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gICAgfSAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBicm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCIvKiEgYnJvd3Nlci1wZWVycyB2MC4xLjAgfCBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMiBTdGV2ZSBLaWVmZmVyIHwgTUlUIGxpY2Vuc2UgKi9cbi8qIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVQgKi9cblxuY29uc3QgYnJvd3NlciA9IHJlcXVpcmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIik7XG5cbmltcG9ydCB7IFBlZXIgfSBmcm9tIFwiLi9wZWVyXCI7XG5cbi8qXG4gKiBUaGlzIHBlZXIgY2xhc3Mgc3VwcG9ydHMgc3ltbWV0cmljYWwgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGNvbnRlbnRcbiAqIHNjcmlwdHMgKENTKSBhbmQgYmFja2dyb3VuZCBzY3JpcHRzIChCR1MpIGluIGEgYnJvd3NlciBleHRlbnNpb24sIHZpYSB1c2VcbiAqIG9mIHRoZSBicm93c2VyLnJ1bnRpbWUuUG9ydCBjbGFzcy5cbiAqXG4gKiBDb21tdW5pY2F0aW9uIGlzIHN5bW1ldHJpY2FsIGluIHRoZSB1c3VhbCB3YXkgKGVpdGhlciBzaWRlIGNhbiBpbml0aWF0ZSBhXG4gKiByZXF1ZXN0LCBhbmQgcmVjZWl2ZSBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgcmVzcG9uc2UgZnJvbSB0aGUgb3RoZXIgc2lkZSkuXG4gKlxuICogRXN0YWJsaXNoaW5nIGNvbm5lY3Rpb25zIGhvd2V2ZXIgaXMgYXN5bW1ldHJpY2FsOiB0aGUgcGVlciBvbiB0aGUgQ1Mgc2lkZSBtdXN0XG4gKiBvcGVuIHRoZSBjb25uZWN0aW9uLiBUaGlzIGlzIGJlY2F1c2UgdG8gZ28gaW4gdGhlIG90aGVyIGRpcmVjdGlvbiB3b3VsZCByZXF1aXJlXG4gKiB1c2Ugb2YgYGJyb3dzZXIudGFic2AsIGFuZCB3ZSBhcmUgdHJ5aW5nIHRvIGtlZXAgdGhpbmdzIHNpbXBsZSBhbmQgYXZvaWQgdGhhdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENzQmdzUGVlciBleHRlbmRzIFBlZXIge1xuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBNVVNUIE5PVCBjb250YWluIHRoZSBgI2AgY2hhcmFjdGVyLiBPdGhlcndpc2Ugc2hvdWxkXG4gICAgICogICBiZSBhbnkgdW5pcXVlIG5hbWUgd2l0aCB3aGljaCB0byB0ZWxsIHRoaXMgcGVlciBhcGFydCBmcm9tIGFsbCBvdGhlcnMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgQ3NCZ3NQZWVyIFwiJHtuYW1lfVwiIHdhcyBjb25zdHJ1Y3RlZCAke3RoaXMuY29uc3RydWN0aW9uVGltZX1gKTtcbiAgICAgICAgdGhpcy5wb3J0c0J5UGVlck5hbWUgPSBuZXcgTWFwKCk7XG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIodGhpcy5hY2NlcHRDb25uZWN0aW9uLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbm5lY3Rpb25zXG5cbiAgICAvKiBPcGVuIGEgY29ubmVjdGlvbiB3aXRoIGFub3RoZXIgcGVlci5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiBwZWVycyBsaXZpbmcgb24gdGhlIENTIHNpZGUsIHNpbmNlIGl0XG4gICAgICogdXNlcyBgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3RgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBlZXJOYW1lIHtzdHJpbmd9IHRoZSBuYW1lIG9mIHRoZSBwZWVyIHRvIHdoaWNoIHdlIHdpc2ggdG8gY29ubmVjdC5cbiAgICAgKi9cbiAgICBvcGVuQ29ubmVjdGlvbihwZWVyTmFtZSkge1xuICAgICAgICAvKiBJbiBvcmRlciBmb3IgcGVlciBQIHRvIGNvbm5lY3QgdG8gcGVlciBRLCBQIG11c3QgYmUgb24gdGhlIENTIHNpZGUsIGFuZCBtdXN0XG4gICAgICAgICogY2FsbCBgYnJvd3Nlci5ydW50aW1lLmNvbm5lY3RgLCBwYXNzaW5nIGFzIG5hbWUgb2YgdGhlIHBvcnQgYSBzdHJpbmcgb2YgdGhlXG4gICAgICAgICogZm9ybSBgJHtuYW1lT2ZQfSMke25hbWVPZlF9YC4gKi9cbiAgICAgICAgY29uc3QgcG9ydE5hbWUgPSBgJHt0aGlzLm5hbWV9IyR7cGVlck5hbWV9YDtcbiAgICAgICAgY29uc3QgcG9ydCA9IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHtuYW1lOiBwb3J0TmFtZX0pO1xuICAgICAgICB0aGlzLnNhdmVQb3J0QW5kTGlzdGVuKHBlZXJOYW1lLCBwb3J0KTtcbiAgICB9XG5cbiAgICBhY2NlcHRDb25uZWN0aW9uKHBvcnQpIHtcbiAgICAgICAgaWYgKHBvcnQubmFtZSkge1xuICAgICAgICAgICAgY29uc3QgW3BlZXJOYW1lLCBteU5hbWVdID0gcG9ydC5uYW1lLnNwbGl0KFwiI1wiKTtcbiAgICAgICAgICAgIGlmIChteU5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYENvbm4gZnJvbSBcIiR7cGVlck5hbWV9XCIgYWNjZXB0ZWQgYnkgQ3NCZ3NQZWVyICR7dGhpcy5uYW1lfSBjb25zdHJ1Y3RlZCBhdCAke3RoaXMuY29uc3RydWN0aW9uVGltZX1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVQb3J0QW5kTGlzdGVuKHBlZXJOYW1lLCBwb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVQb3J0QW5kTGlzdGVuKHBlZXJOYW1lLCBwb3J0KSB7XG4gICAgICAgIHRoaXMucG9ydHNCeVBlZXJOYW1lLnNldChwZWVyTmFtZSwgcG9ydCk7XG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlTWVzc2FnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gSW4gYm90aCBDaHJvbWUgYW5kIEZpcmVmb3gsIHRoZSBkaXNjb25uZWN0IGV2ZW50IHdpbGwgaW4gcGFydGljdWxhciBiZSBmaXJlZFxuICAgICAgICAvLyBmb3IgYSBDUy1zaWRlIHBvcnQgaWYgYW5kIHdoZW4gdGhlIHRhYiBpbiB3aGljaCBpdCBsaXZlcyBjbG9zZXMuIFNvIHRoaXNcbiAgICAgICAgLy8gbGlzdGVuZXIgcHJvdmlkZXMgYSBib29ra2VlcGluZyBzb2x1dGlvbiBmb3IgY2xvc2luZyB0YWJzLlxuICAgICAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBQb3J0IGZyb20gJHt0aGlzLm5hbWV9IHRvIFwiJHtwZWVyTmFtZX1cIiBkaXNjb25uZWN0ZWRgKTtcbiAgICAgICAgICAgIHRoaXMucG9ydHNCeVBlZXJOYW1lLmRlbGV0ZShwZWVyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE92ZXJyaWRlIGFic3RyYWN0IGJhc2UgY2xhc3MgbWV0aG9kc1xuXG4gICAgZ2V0QWxsUGVlck5hbWVzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnBvcnRzQnlQZWVyTmFtZS5rZXlzKCkpO1xuICAgIH1cblxuICAgIHBvc3RNZXNzYWdlQXNQZWVyKHBlZXJOYW1lLCB3cmFwcGVyKSB7XG4gICAgICAgIC8qIFN0YXJ0aW5nIHdpdGggXCJNYW5pZmVzdCBWM1wiLCBiYWNrZ3JvdW5kIHBhZ2VzIGFyZSBub24tcGVyc2lzdGVudCwgYW5kIHJ1biBpbnN0ZWFkIGFzXG4gICAgICAgICAgIHNlcnZpY2Ugd29ya2Vycy4gSXQgc2VlbXMgKGluIENocm9tZSAxMDIuMC41MDA1LjExNSBhdCBsZWFzdCkgdGhhdCB0aGVzZSB3b3JrZXJzIHdpbGxcbiAgICAgICAgICAgYmUgc3RvcHBlZCBieSBmb3JjZSBhZnRlciBhYnQgNSBtaW4gb2YgaW5hY3Rpdml0eSwgZXZlbiBpZiB5b3UgaGF2ZSBhbiBvcGVuIFBvcnQuXG4gICAgICAgICAgIFRoZXJlZm9yZSB3ZSBub3cgYmVnaW4gYnkgYXR0ZW1wdGluZyB0byByZW9wZW4gYSBjb25uZWN0aW9uIGlmIGl0IHNlZW1zIHRvIGhhdmUgYmVlbiBjbG9zZWQuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoIXRoaXMucG9ydHNCeVBlZXJOYW1lLmhhcyhwZWVyTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkNvbm5lY3Rpb24ocGVlck5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgQ3NCZ3NQZWVyIHJlLW9wZW5lZCBwb3J0IHRvICR7cGVlck5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9ydCA9IHRoaXMucG9ydHNCeVBlZXJOYW1lLmdldChwZWVyTmFtZSk7XG4gICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBvcGVuIHBvcnQgdG8gJHtwZWVyTmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHdyYXBwZXIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvKiBKdXN0IGluIGNhc2UgdGhlIHBvcnQgd2FzIHNvbWVob3cgZGlzY29ubmVjdGVkIGJ1dCBvdXIgYm9va2tlZXBpbmcgZWZmb3J0cyBmYWlsZWQgdG9cbiAgICAgICAgICAgICAqIG5vdGUgaXQsIHdlIHdhbnQgdG8gZ3JhY2VmdWxseSByZW1vdmUgdGhlIHBvcnQgZnJvbSBvdXIgcmVjb3JkcyBub3cuXG4gICAgICAgICAgICAgKiBMYXN0IEkgY2hlY2tlZCAoQ2hyb21lIDg1LjAuNDE4My4xMjEgYW5kIEZpcmVmb3ggRGV2ZWxvcGVyIEVkaXRpb24gODIuMGI3KSxcbiAgICAgICAgICAgICAqIENocm9tZSBzYXlzLCBcIkF0dGVtcHRpbmcgdG8gdXNlIGEgZGlzY29ubmVjdGVkIHBvcnQgb2JqZWN0XCIsXG4gICAgICAgICAgICAgKiB3aGlsZSBGaXJlZm94IHNheXMsIFwiQXR0ZW1wdCB0byBwb3N0TWVzc2FnZSBvbiBkaXNjb25uZWN0ZWQgcG9ydFwiLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoZS5tZXNzYWdlICYmIGUubWVzc2FnZS5pbmRleE9mKCdkaXNjb25uZWN0ZWQgcG9ydCcpID49IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ2F1Z2h0IGRpc2Nvbm5lY3RlZCBwb3J0IFwiJHtwb3J0Lm5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBbbmFtZTEsIG5hbWUyXSA9IHBvcnQubmFtZS5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICAgICAgLy8gT25lIG5hbWUgc2hvdWxkIGJlIHRoYXQgb2Ygb3VyIHBlZXIsIG9uZSBvdXIgb3duLlxuICAgICAgICAgICAgICAgIC8vIFdlIGNhbiBzYWZlbHkgYXR0ZW1wdCB0byBkZWxldGUgYm90aCBmcm9tIG91ciBtYXBwaW5nLlxuICAgICAgICAgICAgICAgIHRoaXMucG9ydHNCeVBlZXJOYW1lLmRlbGV0ZShuYW1lMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0c0J5UGVlck5hbWUuZGVsZXRlKG5hbWUyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbi8qXG4gKiBUaGlzIGlzIGEgY2xpZW50IGNsYXNzLCB3aGljaCBpcyBtZWFudCB0byBiZSBpbnN0YW50aWF0ZWQgaW4gYSBjb250ZW50IHNjcmlwdCxcbiAqIGFuZCBtYWtlIHJlcXVlc3RzIG9mIGEgQ3NCZ3NQZWVyLCB1c2luZyBhIGZyZXNoIHBvcnQgZm9yIGVhY2ggcmVxdWVzdCwgYW5kXG4gKiB0aHJvd2luZyBlYWNoIHBvcnQgYXdheSBhcyBzb29uIGFzIGl0cyByZXNwb25zZSBjb21lcyBiYWNrLlxuICpcbiAqIEl0IGlzIHJlYXNvbmFibGUgdG8gYXNrIHdoYXQgaXMgdGhlIHB1cnBvc2Ugb2Ygc3VjaCBhIGNsYXNzLCB3aGVuIHdlIHVzdWFsbHlcbiAqIHNheSB0aGUgcHVycG9zZSBvZiBwb3J0cyBpcyB0byBtYWludGFpbiBsb25nLWxpdmVkIGNvbm5lY3Rpb25zIGZvciBtdWx0aXBsZVxuICogcmVxdWVzdHMgYW5kIHJlc3BvbnNlcy4gSG93ZXZlciwgaW4gZmFjdCB0aGVyZSBpcyBhbm90aGVyIHJlYXNvbiB0byB1c2UgcG9ydHMsXG4gKiBhbmQgdGhpcyBpcyB0aGF0IHRoZXkgYXJlIHRoZSBfZmFzdGVzdF8gd2F5IHRvIHNlbmQgZGF0YSBiZXR3ZWVuIENTIGFuZCBCR1MsXG4gKiB3aGljaCBjYW4gYmUgaW1wb3J0YW50IHdoZW4gc2VuZGluZyBsYXJnZSBieXRlIGFycmF5cy5cbiAqXG4gKiBXaHkgdGhlbiBzaG91bGQgdGhlIHBvcnRzIGJlIHVzZWQgb25seSBmb3IgYSBzaW5nbGUgcmVxdWVzdCwgYmVmb3JlIHRocm93aW5nXG4gKiB0aGVtIGF3YXk/IFRoaXMgaXMgaW4gb3JkZXIgdG8gc3VwcG9ydCBicm93c2VyIGV4dGVuc2lvbnMgdW5kZXIgTWFuaWZlc3QgVjMsXG4gKiB3aGVyZSB0aGUgQkdTIGNhbiBiZSB0ZXJtaW5hdGVkIGF0IGFueSB0aW1lIChjdXJyZW50bHksIENocm9tZSBzZWVtcyB0byB0ZXJtaW5hdGVcbiAqIHRoZSBCR1MgYWZ0ZXIgNSBtaW51dGVzIG9mIGluYWN0aXZpdHksIGV2ZW4gaWYgdGhlcmUgYXJlIG9wZW4gcG9ydHMpLiBUaGUgQkdTIGlzXG4gKiBzdGFydGVkIGFuZXcgaW4gcmVzcG9uc2UgdG8gZXZlbnRzIG9uIHdoaWNoIGl0IGhhcyByZWdpc3RlcmVkIGxpc3RlbmVycy4gVGhpc1xuICogbWVhbnMgYSBjbGllbnQgdGhhdCB0cmllZCB0byByZXVzZSBhIHBvcnQgd291bGQgYWx3YXlzIGJlIGluIGRhbmdlciBvZiB1c2luZ1xuICogYSBzdGFsZSBwb3J0LCB3aG9zZSByZWNpcGllbnQgaGFkIHZhbmlzaGVkLiBUZXN0cyBoYXZlIHNob3duIGl0IGlzIG5vIHVzZSB0cnlpbmdcbiAqIHRvIG1vbml0b3IgZGlzY29ubmVjdCBldmVudHMgZWl0aGVyOyB3ZSByZXBlYXRlZGx5IGZvdW5kIHRoYXQgbm8gc3VjaCBldmVudFxuICogd2FzIHJlY2VpdmVkIG9uIHRoZSBDUyBzaWRlLCB3aGVuIHRoZSBCR1Mgd2FzIGZvcmNpYmx5IGNsb3NlZCBieSB0aGUgYnJvd3Nlci5cbiAqL1xuZXhwb3J0IGNsYXNzIENzQmdzUG9ydENsaWVudCBleHRlbmRzIFBlZXIge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgQ3NCZ3NQb3J0Q2xpZW50IFwiJHtuYW1lfVwiIHdhcyBjb25zdHJ1Y3RlZCAke3RoaXMuY29uc3RydWN0aW9uVGltZX1gKTtcbiAgICB9XG5cbiAgICBmcm9tQWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0tJHt0aGlzLm5leHRTZXFOdW19YDtcbiAgICB9XG5cbiAgICBvcGVuQ29ubmVjdGlvbihwZWVyTmFtZSkge1xuICAgICAgICBjb25zdCBwb3J0TmFtZSA9IGAke3RoaXMuZnJvbUFkZHJlc3MoKX0jJHtwZWVyTmFtZX1gO1xuICAgICAgICBjb25zdCBwb3J0ID0gYnJvd3Nlci5ydW50aW1lLmNvbm5lY3Qoe25hbWU6IHBvcnROYW1lfSk7XG4gICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKHdyYXBwZXIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQod3JhcHBlci50eXBlID09PSAncmVzcG9uc2UnLCAnQSBDc0Jnc1BvcnRDbGllbnQgc2hvdWxkIG5ldmVyIHJlY2VpdmUgcmVxdWVzdHMuJyk7XG4gICAgICAgICAgICBwb3J0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTWVzc2FnZSh3cmFwcGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwb3J0O1xuICAgIH1cblxuICAgIHBvc3RNZXNzYWdlQXNQZWVyKHBlZXJOYW1lLCB3cmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLm9wZW5Db25uZWN0aW9uKHBlZXJOYW1lKTtcbiAgICAgICAgaWYgKCFwb3J0KSB7XG4gICAgICAgICAgICB0aHJvdyBgQ291bGQgbm90IG9wZW4gcG9ydCB0byAke3BlZXJOYW1lfWA7XG4gICAgICAgIH1cbiAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh3cmFwcGVyKTtcbiAgICB9XG5cbn1cbiIsIi8qISBicm93c2VyLXBlZXJzIHYwLjEuMCB8IENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFN0ZXZlIEtpZWZmZXIgfCBNSVQgbGljZW5zZSAqL1xuLyogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVCAqL1xuXG4vKlxuICogSGVyZSB3ZSBkZWZpbmUgc3BlY2lhbCBlcnJvciBjbGFzc2VzIHRoYXQgYXJlIGRlc2lnbmVkIHRvIGJlIHNlcmlhbGl6YWJsZS5cbiAqIFRoaXMgaXMgc28gdGhhdCB0aGV5IGNhbiBiZSBjb21tdW5pY2F0ZWQgdmlhIHZhcmlvdXMgbWVzc2FnaW5nIHN5c3RlbXMsXG4gKiBhbmQgdGhlbiByZWNvbnN0cnVjdGVkIG9uIHRoZSBvdGhlciBzaWRlLlxuICpcbiAqIEFsbCBlcnJvciBjbGFzc2VzIGRlZmluZWQgaGVyZSBNVVNUOlxuICpcbiAqICAgKiBoYXZlIGEgY29uc3RydWN0b3IgdGhhdCBhY2NlcHRzIGFuIG9iamVjdFxuICpcbiAqICAgKiBkZWZpbmUgYHRoaXMubmFtZWAgZXF1YWwgdG8gdGhlaXIgb3duIGNsYXNzIG5hbWUgKGFzIHN0cmluZyEpXG4gKlxuICogICAqIGJlIHJlZ2lzdGVyZWQgaW4gYEtOT1dOX0VSUk9SX0NMQVNTRVNgIChzZWUgYmVsb3cpIHVuZGVyIHRoZWlyIGNsYXNzIG5hbWVcbiAqXG4gKiAgICogaGF2ZSBhIGBzZXJpYWxpemUoKWAgbWV0aG9kIHRoYXQgcmV0dXJucyB0aGUgSlNPTi5zdHJpbmdpZnkgb2YgYW5cbiAqICAgICBvYmplY3QgdGhhdDpcbiAqICAgICAgIC0gY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MncyBjb25zdHJ1Y3RvciwgYW5kXG4gKiAgICAgICAtIGluY2x1ZGVzIGBfZXJyb3JfY2xhc3NfbmFtZTogdGhpcy5uYW1lYFxuICpcbiAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNwZWNpYWwgZXJyb3IgY2xhc3Nlc1xuXG4vKlxuICogVGhpcyBlcnJvciBjbGFzcyByZXByZXNlbnRzIGNhc2VzIGluIHdoaWNoIHdlIGFyZSB0cnlpbmcgdG8gZG8gc29tZXRoaW5nXG4gKiB0aGF0IGludm9sdmVzIGJlbG9uZ2luZyB0byBhIGdyb3VwLCBidXQgd2UgZG8gbm90ICh5ZXQpIGJlbG9uZyB0byBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBOb0dyb3VwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IG1lc3NhZ2UgfSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJOb0dyb3VwRXJyb3JcIjtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBfZXJyb3JfY2xhc3NfbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuLypcbiAqIFRoaXMgZXJyb3IgY2xhc3MgaXMgaW50ZW5kZWQgdG8gcmVwcmVzZW50IGNhc2VzIGluIHdoaWNoIHRoZSBleHRlbnNpb24gaGFzXG4gKiBiZWNvbWUgdW5hdmFpbGFibGUuIFVzdWFsbHkgKGFjdHVhbGx5IHRoZSBvbmx5IGNhc2UgSSdtIGN1cnJlbnRseSBhd2FyZSBvZilcbiAqIHRoaXMgaXMgYmVjYXVzZSB0aGUgZXh0ZW5zaW9uIHdhcyB1bmluc3RhbGxlZCBhZnRlciB0aGF0IHBhZ2Ugd2FzIGxvYWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVuc2lvblVuYXZhaWxhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IG1lc3NhZ2UgfSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFeHRlbnNpb25VbmF2YWlsYWJsZUVycm9yXCI7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgX2Vycm9yX2NsYXNzX25hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbi8qIFJlcHJlc2VudHMgY2FzZXMgaW4gd2hpY2ggYSBQZWVyIGlzIGF0dGVtcHRpbmcgdG8gbG9vayB1cCBhbm90aGVyXG4gKiBQZWVyLCBidXQgY2Fubm90IGZpbmQgaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBVbmtub3duUGVlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyBtZXNzYWdlIH0pIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVW5rbm93blBlZXJFcnJvclwiO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIF9lcnJvcl9jbGFzc19uYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKlxuICogVGhpcyByZXByZXNlbnRzIGNhc2VzIGluIHdoaWNoIHRoZSBleHRlbnNpb24gaXMgbGFja2luZyBob3N0IHBlcm1pc3Npb25cbiAqIGZvciBhIGdpdmVuIFVSTC5cbiAqL1xuZXhwb3J0IGNsYXNzIExhY2tpbmdIb3N0UGVybWlzc2lvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyB1cmwgfSkge1xuICAgICAgICBzdXBlcihgRXh0ZW5zaW9uIGxhY2tzIGhvc3QgcGVybWlzc2lvbiBmb3IgJHt1cmx9LmApO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxhY2tpbmdIb3N0UGVybWlzc2lvbkVycm9yXCI7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIF9lcnJvcl9jbGFzc19uYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qXG4gKiBTdXBlcmNsYXNzIG9mIG1vcmUgc3BlY2lmaWMgZmV0Y2ggZXJyb3IgdHlwZXMgZGVmaW5lZCBiZWxvdy5cbiAqIEZvciBub3csIG5vdCBleHBvcnRlZCwgc2luY2UgSSB0aGluayB1c2VycyBvbmx5IG5lZWQgdGhlIG1vcmUgc3BlY2lmaWMgdHlwZXMuXG4gKi9cbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICAvKiBXZSByZWNvcmQgdGhvc2UgYXR0cmlidXRlcyBvZiBhIGZldGNoIFJlc3BvbnNlIG9iamVjdFxuICAgICAqIChzZWUgPGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNwb25zZT4pXG4gICAgICogdGhhdCB3ZSB0aGluayB3aWxsIGJlIHVzZWZ1bCAoYW5kIHRoYXQgd2Ugd2FudCB0byBib3RoZXIgd2l0aCByaWdodFxuICAgICAqIG5vdyAtLSBtYXliZSBtb3JlIGluIHRoZSBmdXR1cmUpLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHlvdSBtYXkgcGFzcyBhIFJlc3BvbnNlIGluc3RhbmNlIGl0c2VsZiB0byB0aGlzIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHsgb2ssIHN0YXR1cywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsLCBoZWFkZXJzLCBjb250ZW50VHlwZSB9KSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgRmV0Y2ggJHt1cmx9IHN0YXR1czogJHtzdGF0dXN9ICR7c3RhdHVzVGV4dH1gO1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ZldGNoRXJyb3InO1xuICAgICAgICB0aGlzLm9rID0gb2s7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgICAgICBpZiAoaGVhZGVycyAmJiBoZWFkZXJzLmdldCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgX2Vycm9yX2NsYXNzX25hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG9rOiB0aGlzLm9rLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogdGhpcy5jb250ZW50VHlwZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbi8qXG4gKiBUaGlzIGVycm9yIGNsYXNzIGlzIGludGVuZGVkIHRvIHJlcHJlc2VudCBjYXNlcyBpbiB3aGljaCBhIGBmZXRjaGAgcHJvbWlzZVxuICogcmVzb2x2ZWQsIGJ1dCByZXR1cm5lZCBhIFJlc3BvbnNlIG9iamVjdCB3aG9zZSBgb2tgIHByb3BlcnR5IHdhcyBgZmFsc2VgLlxuICpcbiAqIE9uIGJvdGggQ2hyb21lIGFuZCBGaXJlZm94LCB0aGlzIHdpbGwgYmUgdGhlIGNhc2Ugd2hlbiB3ZSBzdWNjZXNzZnVsbHlcbiAqIHJlY2VpdmVkIGEgcmVzcG9uc2UsIGJ1dCBpdCBoYWQgYW4gSFRUUCBzdGF0dXMgb3V0c2lkZSB0aGUgMjAwLTI5OSByYW5nZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZldGNoUmVzb2x2ZWROb3RPa0Vycm9yIGV4dGVuZHMgRmV0Y2hFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IG9rLCBzdGF0dXMsIHN0YXR1c1RleHQsIHR5cGUsIHVybCB9KSB7XG4gICAgICAgIHN1cGVyKHsgb2ssIHN0YXR1cywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsIH0pO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRmV0Y2hSZXNvbHZlZE5vdE9rRXJyb3InO1xuICAgIH1cblxufVxuXG4vKlxuICogVGhpcyBlcnJvciBjbGFzcyBpcyBpbnRlbmRlZCB0byByZXByZXNlbnQgY2FzZXMgaW4gd2hpY2ggYSBgZmV0Y2hgIHByb21pc2UgcmVqZWN0ZWQuXG4gKlxuICogRm9yIGV4YW1wbGUsIG9uIGJvdGggQ2hyb21lIGFuZCBGaXJlZm94LCB0aGlzIHdpbGwgYmUgdGhlIGNhc2Ugd2hlbiB3ZSBhdHRlbXB0IHRvIG1ha2UgYVxuICogY3Jvc3Mtb3JpZ2luIGZldGNoLCBidXQgQ09SUyBmYWlscyBkdWUgdG8gYWJzZW5jZSBvZiBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4gaGVhZGVyLlxuICovXG5leHBvcnQgY2xhc3MgRmV0Y2hSZWplY3RlZEVycm9yIGV4dGVuZHMgRmV0Y2hFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IG9rLCBzdGF0dXMsIHN0YXR1c1RleHQsIHR5cGUsIHVybCB9KSB7XG4gICAgICAgIHN1cGVyKHsgb2ssIHN0YXR1cywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsIH0pO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRmV0Y2hSZWplY3RlZEVycm9yJztcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0ZldGNoIHJlamVjdGVkLiAnICsgdGhpcy5tZXNzYWdlO1xuICAgIH1cblxufVxuXG4vKlxuICogUmVwcmVzZW50cyBjYXNlcyBpbiB3aGljaCBhIGBmZXRjaGAgcmVzb2x2ZWQgd2l0aCBgb2tgIGJ1dCB3aXRoIGFuIHVuZXhwZWN0ZWRcbiAqIENvbnRlbnQtVHlwZSBoZWFkZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBGZXRjaFdyb25nQ29udGVudFR5cGVFcnJvciBleHRlbmRzIEZldGNoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyBvaywgc3RhdHVzLCBzdGF0dXNUZXh0LCB0eXBlLCB1cmwsIGhlYWRlcnMsIGNvbnRlbnRUeXBlIH0pIHtcbiAgICAgICAgc3VwZXIoeyBvaywgc3RhdHVzLCBzdGF0dXNUZXh0LCB0eXBlLCB1cmwsIGhlYWRlcnMsIGNvbnRlbnRUeXBlIH0pO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRmV0Y2hXcm9uZ0NvbnRlbnRUeXBlRXJyb3InO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgRmV0Y2ggJHt1cmx9IHJlY2VpdmVkIHVuZXhwZWN0ZWQgQ29udGVudC1UeXBlOiAke2NvbnRlbnRUeXBlfWA7XG4gICAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVjb25zdGl0dXRpb25cblxuY29uc3QgS05PV05fRVJST1JfQ0xBU1NFUyA9IG5ldyBNYXAoKVxuICAgIC5zZXQoXCJGZXRjaFJlc29sdmVkTm90T2tFcnJvclwiLCBGZXRjaFJlc29sdmVkTm90T2tFcnJvcilcbiAgICAuc2V0KFwiRmV0Y2hSZWplY3RlZEVycm9yXCIsIEZldGNoUmVqZWN0ZWRFcnJvcilcbiAgICAuc2V0KFwiTm9Hcm91cEVycm9yXCIsIE5vR3JvdXBFcnJvcilcbiAgICAuc2V0KFwiRXh0ZW5zaW9uVW5hdmFpbGFibGVFcnJvclwiLCBFeHRlbnNpb25VbmF2YWlsYWJsZUVycm9yKVxuICAgIC5zZXQoXCJMYWNraW5nSG9zdFBlcm1pc3Npb25FcnJvclwiLCBMYWNraW5nSG9zdFBlcm1pc3Npb25FcnJvcilcbiAgICAuc2V0KFwiRmV0Y2hXcm9uZ0NvbnRlbnRUeXBlRXJyb3JcIiwgRmV0Y2hXcm9uZ0NvbnRlbnRUeXBlRXJyb3IpXG4gICAgLnNldChcIlVua25vd25QZWVyRXJyb3JcIiwgVW5rbm93blBlZXJFcnJvcilcbjtcblxuLyogQXR0ZW1wdCB0byByZWNvbnN0aXR1dGUgYSBzcGVjaWFsIGVycm9yIGNsYXNzIGluc3RhbmNlIGZyb20gYSBnZW5lcmljIEVycm9yLlxuICogV2UgbG9vayBhdCB0aGUgbWVzc2FnZSBvZiB0aGUgZ2l2ZW4gRXJyb3IuIElmIGl0IGFwcGVhcnMgdG8gYmUgdGhlIHNlcmlhbGl6YXRpb25cbiAqIG9mIG9uZSBvZiBvdXIgc3BlY2lhbCBlcnJvciBjbGFzc2VzLCB0aGVuIHdlIHJlYnVpbGQgYW4gaW5zdGFuY2UgYmFzZWQgb24gdGhpcy5cbiAqIE90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiB0aGUgZ2l2ZW4gRXJyb3IuXG4gKlxuICogcGFyYW0gZXJyb3I6IGFuIEVycm9yIGluc3RhbmNlXG4gKiByZXR1cm46IHRoZSByZWNvbnN0aXR1dGVkIGVycm9yLCBvciB0aGUgZ2l2ZW4gb25lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjb25zdGl0dXRlRXJyb3IoZXJyb3IpIHtcbiAgICBsZXQgZCA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgZCA9IEpTT04ucGFyc2UoZXJyb3IubWVzc2FnZSk7XG4gICAgfSBjYXRjaCB7fVxuICAgIGlmIChkICYmIEtOT1dOX0VSUk9SX0NMQVNTRVMuaGFzKGQuX2Vycm9yX2NsYXNzX25hbWUpKSB7XG4gICAgICAgIGNvbnN0IENsYXNzQ29uc3RydWN0b3IgPSBLTk9XTl9FUlJPUl9DTEFTU0VTLmdldChkLl9lcnJvcl9jbGFzc19uYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGFzc0NvbnN0cnVjdG9yKGQpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG59XG4iLCIvKiEgYnJvd3Nlci1wZWVycyB2MC4xLjAgfCBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMiBTdGV2ZSBLaWVmZmVyIHwgTUlUIGxpY2Vuc2UgKi9cbi8qIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVQgKi9cblxuaW1wb3J0IHsgcmVjb25zdGl0dXRlRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IExpc3RlbmFibGUgfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qIFRoaXMgaXMgdGhlIGFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIGFsbCBvZiBvdXIgcGVlciBjbGFzc2VzLlxuICogSXQgaW1wbGVtZW50cyBldmVyeXRoaW5nIHRvIGRvIHdpdGggbWFraW5nIGFuZCBoYW5kbGluZyByZXF1ZXN0cyBhbmQgcmVzcG9uc2VzLlxuICpcbiAqIFN1YmNsYXNzZXMgYXJlIHJlc3BvbnNpYmxlIGZvciBlc3RhYmxpc2hpbmcgY29ubmVjdGlvbnMgYmV0d2VlbiBwZWVycyxcbiAqIGFuZCBmb3IgaW1wbGVtZW50aW5nIHRoZSBhYnN0cmFjdCBgcG9zdE1lc3NhZ2VBc1BlZXJgIG1ldGhvZCBkZWZpbmVkIGJ5IHRoaXNcbiAqIGJhc2UgY2xhc3MuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgUGVlciBleHRlbmRzIExpc3RlbmFibGUge1xuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBhIHVuaXF1ZSBuYW1lIGZvciB0aGlzIHBlZXIsIHRvIHRlbGwgaXQgYXBhcnRcbiAgICAgKiAgIGZyb20gYWxsIG90aGVycy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKHt9KTtcblxuICAgICAgICAvLyBGb3IgZGV2ZWxvcG1lbnQgYW5kIHRlc3RpbmcgaW4gc2V0dGluZ3MgbGlrZSBicm93c2VyIGV4dGVuc2lvbnMgdW5kZXJcbiAgICAgICAgLy8gTWFuaWZlc3QgVjMgKHdoZXJlIGJhY2tncm91bmQgc2NyaXB0cyBhcmUgcmVwZWF0ZWRseSB0ZXJtaW5hdGVkIGFuZFxuICAgICAgICAvLyByZXN0YXJ0ZWQpIGl0IGNhbiBiZSBoZWxwZnVsIHRvIHByaW50IGRlYnVnZ2luZyBvdXRwdXQgaW4gd2hpY2ggd2Ugc2VlXG4gICAgICAgIC8vIHRoZSB0aW1lIGF0IHdoaWNoIGEgZ2l2ZW4gcGVlciB3YXMgY29uc3RydWN0ZWQuXG4gICAgICAgIHRoaXMuY29uc3RydWN0aW9uVGltZSA9IChuZXcgRGF0ZSgpKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm5leHRTZXFOdW0gPSAwO1xuICAgICAgICB0aGlzLnJlcXVlc3RzQnlTZXFOdW0gPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5yZWNvbnN0aXR1dGVFcnJvcnMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJlYWR5UmVzb2x2ZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgc2VsZi5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1aWx0SW5IYW5kbGVycyA9IG5ldyBNYXAoKVxuICAgICAgICAgICAgLnNldCgncmVhZHknLCB0aGlzLnJlYWR5LmJpbmQodGhpcykpXG4gICAgICAgIDtcbiAgICAgICAgZm9yIChsZXQgW25hbWUsIGhhbmRsZXJdIG9mIHRoaXMuYnVpbHRJbkhhbmRsZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRIYW5kbGVyKG5hbWUsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJvbUFkZHJlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgY29weU1lc3NhZ2UobXNnKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1lc3NhZ2UgaGFuZGxpbmdcblxuICAgIC8qIFN1YmNsYXNzZXMgc2hvdWxkIHBhc3MgaW5jb21pbmcgcmVxdWVzdC9yZXNwb25zZSB3cmFwcGVyIG1lc3NhZ2VzIHRvIHRoaXMgbWV0aG9kLlxuICAgICAqXG4gICAgICogd3JhcHBlciBmb3JtYXQ6IHtcbiAgICAgKiAgIHR5cGUge3N0cmluZ30gJ3JlcXVlc3QnIG9yICdyZXNwb25zZSdcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhlIHdyYXBwZXIgbXVzdCBjb25mb3JtIHRvIHRoZSByZXF1aXJlZCBmb3JtYXQgb2YgYHRoaXMuaGFuZGxlUmVxdWVzdGBcbiAgICAgKiBvciBgdGhpcy5oYW5kbGVSZXNwb25zZWAsIGFjY29yZGluZyB0byB0aGUgdmFsdWUgb2YgYHdyYXBwZXIudHlwZWAuXG4gICAgICpcbiAgICAgKi9cbiAgICBoYW5kbGVNZXNzYWdlKHdyYXBwZXIpIHtcbiAgICAgICAgaWYgKHdyYXBwZXIudHlwZSA9PT0gJ3JlcXVlc3QnKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3Qod3JhcHBlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKHdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiB3cmFwcGVyIGZvcm1hdDoge1xuICAgICAqICAgZnJvbSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgcGVlciB0aGF0IHNlbnQgdGhlIG1lc3NhZ2UsXG4gICAgICogICBzZXFOdW0ge2ludH0gc2VxdWVuY2UgbnVtYmVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGFzc29jaWF0ZSByZXNwb25zZSB3aXRoIHJlcXVlc3QsXG4gICAgICogICBoYW5kbGVyRGVzY3JpcCB7c3RyaW5nfSBzaG91bGQgYmUgYSB2YWxpZCBkZXNjcmlwdG9yIHN0cmluZyBwb2ludGluZyB0byBhIGhhbmRsZXJcbiAgICAgKiAgICAgdGhhdCBoYXMgYmVlbiByZWdpc3RlcmVkIHdpdGggdGhpcyBwZWVyLFxuICAgICAqICAgYXJncyB7YW55fSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxuICAgICAqIH1cbiAgICAgKi9cbiAgICBoYW5kbGVSZXF1ZXN0KHdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgcGVlck5hbWUgPSB3cmFwcGVyLmZyb207XG4gICAgICAgIGNvbnN0IHNlcU51bSA9IHdyYXBwZXIuc2VxTnVtO1xuICAgICAgICBjb25zdCBoYW5kbGVyRGVzY3JpcCA9IHdyYXBwZXIuaGFuZGxlckRlc2NyaXA7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSB3cmFwcGVyLmFyZ3M7XG4gICAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaGFuZGxlciA9IHRoaXMubG9va3VwSGFuZGxlcihoYW5kbGVyRGVzY3JpcCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMucmV0dXJuUmVqZWN0aW9uKHBlZXJOYW1lLCBzZXFOdW0sIGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGwgdGhlIGhhbmRsZXIgaW5zaWRlIGBQcm9taXNlLnJlc29sdmVgIHNvIHdlIGNhbiB3b3JrIHdpdGggaXQgYXN5bmNocm9ub3VzbHksXG4gICAgICAgIC8vIGV2ZW4gaWYgdGhlIGhhbmRsZXIgcmV0dXJucyBzeW5jaHJvbm91c2x5LlxuICAgICAgICAvLyBXZSBwYXNzIHRoZSB3aG9sZSB3cmFwcGVyIGFzIGEgc2Vjb25kIGFyZ3VtZW50ICh3aGljaCB0aGUgaGFuZGxlciBtYXkgY2hvb3NlXG4gICAgICAgIC8vIHRvIGlnbm9yZSksIGluIGNhc2UgdGhlIGhhbmRsZXIgbmVlZHMgdGhlIFwibWV0YVwiIGluZm9ybWF0aW9uIChzdWNoIGFzIHRoZSBwZWVyIG5hbWUpLlxuICAgICAgICBQcm9taXNlLnJlc29sdmUoaGFuZGxlcihhcmdzLCB3cmFwcGVyKSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXR1cm5SZXNwb25zZShwZWVyTmFtZSwgc2VxTnVtLCByZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgcmVhc29uID0gdGhpcy5jaGVja0hhbmRsaW5nRXJyb3IocmVhc29uLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIHRoaXMucmV0dXJuUmVqZWN0aW9uKHBlZXJOYW1lLCBzZXFOdW0sIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIHBlZXJOYW1lIHtzdHJpbmd9XG4gICAgICogQHBhcmFtIHNlcU51bSB7aW50fVxuICAgICAqIEBwYXJhbSByZXN1bHQge2FueX1cbiAgICAgKi9cbiAgICByZXR1cm5SZXNwb25zZShwZWVyTmFtZSwgc2VxTnVtLCByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdyZXNwb25zZScsXG4gICAgICAgICAgICBmcm9tOiB0aGlzLmZyb21BZGRyZXNzKCksXG4gICAgICAgICAgICBzZXFOdW06IHNlcU51bSxcbiAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlQXNQZWVyKHBlZXJOYW1lLCB3cmFwcGVyKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSBwZWVyTmFtZSB7c3RyaW5nfVxuICAgICAqIEBwYXJhbSBzZXFOdW0ge2ludH1cbiAgICAgKiBAcGFyYW0gcmVhc29uOiB7RXJyb3J9XG4gICAgICovXG4gICAgcmV0dXJuUmVqZWN0aW9uKHBlZXJOYW1lLCBzZXFOdW0sIHJlYXNvbikge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0ge1xuICAgICAgICAgICAgdHlwZTogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICAgIGZyb206IHRoaXMuZnJvbUFkZHJlc3MoKSxcbiAgICAgICAgICAgIHNlcU51bTogc2VxTnVtLFxuICAgICAgICAgICAgcmVqZWN0aW9uX3JlYXNvbjogcmVhc29uLm1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2VBc1BlZXIocGVlck5hbWUsIHdyYXBwZXIpO1xuICAgIH1cblxuICAgIGNvbnN1bWVSZXF1ZXN0RGF0YShzZXFOdW0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucmVxdWVzdHNCeVNlcU51bS5nZXQoc2VxTnVtKTtcbiAgICAgICAgaWYgKGRhdGEpIHdpbmRvdy5jbGVhclRpbWVvdXQoZGF0YS50aW1lb3V0SGFuZGxlKTsgIC8vIGZhaWxzIGdyYWNlZnVsbHkgaWYgdGltZW91dCBhbHJlYWR5IGNsZWFyZWQgb3IgaGFuZGxlIGlzIG51bGxcbiAgICAgICAgdGhpcy5yZXF1ZXN0c0J5U2VxTnVtLmRlbGV0ZShzZXFOdW0pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIHdyYXBwZXIgZm9ybWF0OiB7XG4gICAgICogICBSRVFVSVJFRDpcbiAgICAgKiAgICAgIGZyb20ge3N0cmluZ30gdGhlIG5hbWUgb2YgdGhlIHBlZXIgdGhhdCBzZW50IHRoZSBtZXNzYWdlLFxuICAgICAqICAgICAgc2VxTnVtIHtpbnR9IHNlcXVlbmNlIG51bWJlciB0aGF0IHdpbGwgYmUgdXNlZCB0byBhc3NvY2lhdGUgcmVzcG9uc2Ugd2l0aCByZXF1ZXN0LFxuICAgICAqICAgRUlUSEVSL09SOlxuICAgICAqICAgICAgcmVzdWx0IHthbnl9IGlmIHRoZSBjYWxsIHdhcyBzdWNjZXNzZnVsLCB0aGlzIGlzIHRoZSByZXN1bHQgdG8gYmUgcmV0dXJuZWQuXG4gICAgICogICAgICByZWplY3Rpb25fcmVhc29uIHtzdHJpbmd9IGlmIHRoZSBjYWxsIGZhaWxlZCwgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIG9mIHRoZSByZWFzb24uXG4gICAgICogfVxuICAgICAqL1xuICAgIGhhbmRsZVJlc3BvbnNlKHdyYXBwZXIpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uc3VtZVJlcXVlc3REYXRhKHdyYXBwZXIuc2VxTnVtKTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAvLyBTaG91bGQgb25seSBoYXBwZW4gaWYgcmVxdWVzdCBkYXRhIGFscmVhZHkgY29uc3VtZWQgZHVlIHRvIHRpbWVvdXQuXG4gICAgICAgICAgICAvLyBJbiB0aGF0IGNhc2UsIGNhbGxlciBhbHJlYWR5IGhhcyB0aGVpciBhbnN3ZXIuIFNvIGp1c3QgZG8gbm90aGluZy5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod3JhcHBlci5yZWplY3Rpb25fcmVhc29uKSB7XG4gICAgICAgICAgICBsZXQgZSA9IG5ldyBFcnJvcih3cmFwcGVyLnJlamVjdGlvbl9yZWFzb24pO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVjb25zdGl0dXRlRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgZSA9IHJlY29uc3RpdHV0ZUVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS5yZWplY3QoZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhLnJlc29sdmUod3JhcHBlci5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVhZGluZXNzXG4gICAgLy9cbiAgICAvLyAgIFRvIGJlIGNsZWFyOiB0aGlzIG1lYW5zIHJlYWRpbmVzcyB0byBoYW5kbGUgcmVxdWVzdHMsIG5vdCB0byBhY2NlcHQgY29ubmVjdGlvbnMuXG4gICAgLy8gICBBIHBlZXIgaW5zdGFuY2UgaXMgaW1tZWRpYXRlbHkgcmVhZHkgdG8gYWNjZXB0IGNvbm5lY3Rpb25zIGFmdGVyIGNvbnN0cnVjdGlvbi5cblxuICAgIC8qIENhbGwgdGhpcyB3aGVuIHlvdSd2ZSBmaW5pc2hlZCBhZGRpbmcgaGFuZGxlcnMsIGluIG9yZGVyIHRvIGRlY2xhcmUgdGhhdCB0aGlzXG4gICAgICogcGVlciBpcyByZWFkeSB0byBoYW5kbGUgcmVxdWVzdHMuXG4gICAgICovXG4gICAgc2V0UmVhZHkoKSB7XG4gICAgICAgIHRoaXMucmVhZHlSZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgLyogVGhpcyBpcyBvdXIgYnVpbHQtaW4gaGFuZGxlciBmb3IgdGhlICdyZWFkeScgaGFuZGxlciBkZXNjcmlwdGlvbi5cbiAgICAgKlxuICAgICAqIEl0IHJldHVybnMgYSBwcm9taXNlIHRoYXQgb3RoZXIgcGVlcnMgY2FuIHVzZSB0byB3YWl0IHVudGlsIHRoaXMgcGVlciBpcyByZWFkeVxuICAgICAqIHRvIGFjY2VwdCBjb25uZWN0aW9ucy5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZHlQcm9taXNlO1xuICAgIH1cblxuICAgIC8qIENvbnZlbmllbmNlIG1ldGhvZCB0byBjaGVjayB0aGUgcmVhZGluZXNzIG9mIGEgY29ubmVjdGVkIHBlZXIuXG4gICAgICovXG4gICAgY2hlY2tSZWFkeShwZWVyTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdChwZWVyTmFtZSwgJ3JlYWR5Jywge30sIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBSZXF1ZXN0IGhhbmRsZXJzXG5cbiAgICAvKiBBZGQgYSBoYW5kbGVyIGZ1bmN0aW9uIG9yIGhhbmRsZXIgb2JqZWN0LlxuICAgICAqXG4gICAgICogSGFuZGxlciBmdW5jdGlvbnMgd2lsbCBiZSBwYXNzZWQgdHdvIGFyZ3VtZW50czogYGFyZ3NgIGFuZCBgbWV0YWAuIFRoZSBmaXJzdCBpcyBhblxuICAgICAqIG9iamVjdCBwYXNzZWQgYnkgdGhlIGNsaWVudCBhbmQgcHJlc3VtYWJseSBjb250YWluaW5nIGFsbCB0aGUgYXJndW1lbnRzIHJlcXVpcmVkIGJ5XG4gICAgICogdGhlIGhhbmRsZXI7IHRoZSBzZWNvbmQgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgbWV0YSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVxdWVzdCxcbiAgICAgKiBzdWNoIGFzIHRoZSBuYW1lIG9mIHRoZSBjbGllbnQgKHdoaWNoIGlzIHVuZGVyIGBtZXRhLmZyb21gKS5cbiAgICAgKlxuICAgICAqIEhhbmRsZXJzIG1heSByZXR1cm4gYSB2YWx1ZSBzeW5jaHJvbm91c2x5LCBvciBtYXkgcmV0dXJuIGEgUHJvbWlzZS4gRWl0aGVyIGlzIGFjY2VwdGFibGUuXG4gICAgICpcbiAgICAgKiBZb3UgbWF5IG5vdCByZWdpc3RlciBhIGhhbmRsZXIgdW5kZXIgYSByZXNlcnZlZCBuYW1lLCBpLmUuIHRoZSBuYW1lcyBvZiBhbnkgb2Ygb3VyXG4gICAgICogYnVpbHQtaW4gaGFuZGxlcnMuIFRoZXNlIGFyZSBkZWZpbmVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEByZXR1cm46IHRoaXMgaW5zdGFuY2UsIHRvIHN1cHBvcnQgY2hhaW5pbmcuXG4gICAgICovXG4gICAgYWRkSGFuZGxlcihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1aWx0SW5IYW5kbGVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlZ2lzdGVyIGhhbmRsZXIgdW5kZXIgcmVzZXJ2ZWQgbmFtZTogJHtuYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FkZEhhbmRsZXIobmFtZSwgaGFuZGxlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9hZGRIYW5kbGVyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycy5zZXQobmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyogQWRkIGEgXCJidWlsdC1pbiBoYW5kbGVyLFwiIHdoaWNoIHJlYWxseSBtZWFucyBhIGhhbmRsZXIgc3VjaCB0aGF0IGFuIGVycm9yXG4gICAgICogd2lsbCBiZSB0aHJvd24gaWYgYW55b25lIHRyaWVzIHRvIGFkZCBhIGhhbmRsZXIgYnkgdGhlIHNhbWUgbmFtZSB1c2luZyB0aGVcbiAgICAgKiB1c3VhbCBgYWRkSGFuZGxlcmAgbWV0aG9kLlxuICAgICAqXG4gICAgICogSWYgdGhlIGxhbmd1YWdlIHN1cHBvcnRlZCBpdCwgd2Ugd291bGQgbWFrZSB0aGlzIGEgcHJvdGVjdGVkIG1ldGhvZCwgaS5lLlxuICAgICAqIHVzYWJsZSBvbmx5IGJ5IHN1YmNsYXNzZXMuIFNvIGRvbid0IHVzZSBpdCB1bmxlc3MgeW91IHNob3VsZCFcbiAgICAgKi9cbiAgICBfYWRkQnVpbHRJbkhhbmRsZXIobmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmJ1aWx0SW5IYW5kbGVycy5zZXQobmFtZSwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2FkZEhhbmRsZXIobmFtZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgLyogTG9vayB1cCBhIGhhbmRsZXIsIGJ5IGl0cyBkZXNjcmlwdGlvbi5cbiAgICAgKlxuICAgICAqIEEgaGFuZGxlciBkZXNjcmlwdGlvbiBzaG91bGQgYmUgYSBzdHJpbmcgbmFtaW5nIHNvbWV0aGluZyB0aGF0IGhhcyBiZWVuIGFkZGVkIGFzIGFcbiAgICAgKiBoYW5kbGVyIGZvciB0aGlzIHNlcnZlciwgb3IgYW4gYXR0cmlidXRlIHRoZXJlb2YsIHJlY3Vyc2l2ZWx5LlxuICAgICAqXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGBteUZ1bmNgIGlzIGEgZnVuY3Rpb24sIHRoZW4gYWZ0ZXJcbiAgICAgKiAgICAgIHNlcnZlci5hZGRIYW5kbGVyKCdmJywgbXlGdW5jKVxuICAgICAqICdmJyBpcyBhIHZhbGlkIGRlc2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogSWYgYG15SW5zdGFuY2VgIGlzIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MgdGhhdCBoYXMgYSBgZG9Tb21ldGhpbmdgIG1ldGhvZCwgdGhlblxuICAgICAqIGFmdGVyXG4gICAgICogICAgICBzZXJ2ZXIuYWRkSGFuZGxlcignZm9vJywgbXlJbnN0YW5jZSlcbiAgICAgKiAnZm9vLmRvU29tZXRoaW5nJyBpcyBhIHZhbGlkIGRlc2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRlc2NyaXAge3N0cmluZ30gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBoYW5kbGVyLlxuICAgICAqIEByZXR1cm46IHRoZSBoYW5kbGVyLiBJZiB0aGUgZGVzY3JpcHRpb24gd2FzIGRvdHRlZCwgdGhlbiB0aGUgcmV0dXJuZWQgaGFuZGxlciBmdW5jdGlvblxuICAgICAqICAgaGFzIHRoZSBwcmV2aW91cyBvYmplY3QgaW4gdGhlIGNoYWluIGJvdW5kIGFzIGB0aGlzYC5cbiAgICAgKiBAdGhyb3dzOiBFcnJvciBpZiB0aGUgZGVzY3JpcHRpb24gZG9lcyBub3QgcmVzb2x2ZSB0byBhbnl0aGluZywgb3IgaWYgaXQgZG9lcyBidXQgdGhhdFxuICAgICAqICAgdGhpbmcgaXMgbm90IGEgZnVuY3Rpb24uXG4gICAgICovXG4gICAgbG9va3VwSGFuZGxlcihkZXNjcmlwKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGVzY3JpcC5zcGxpdCgnLicpO1xuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgICAgICBsZXQgaGFuZGxlcjtcbiAgICAgICAgbGV0IHByZXY7XG4gICAgICAgIGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHRoaXMuaGFuZGxlcnMuZ2V0KHBhcnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcHJldiA9IGhhbmRsZXI7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IGhhbmRsZXJbcGFydF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGhhbmRsZXI6ICR7ZGVzY3JpcH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIYW5kbGVyIFwiJHtkZXNjcmlwfVwiIGlzIG5vdCBhIGZ1bmN0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGhhbmRsZXIgPSBoYW5kbGVyLmJpbmQocHJldik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuXG4gICAgLyogSWYgeW91IGFyZSBvbiB0aGUgc2FtZSBzaWRlIGFzIGEgcGVlciwgeW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gY2FsbFxuICAgICAqIG9uZSBvZiBpdHMgaGFuZGxlcnMgZGlyZWN0bHksIGluc3RlYWQgb2Ygd2l0aGluIGEgcmVxdWVzdC9yZXNwb25zZSBwYWlyLlxuICAgICAqL1xuICAgIGNhbGxIYW5kbGVyKGhhbmRsZXJEZXNjcmlwLCBhcmdzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmxvb2t1cEhhbmRsZXIoaGFuZGxlckRlc2NyaXApO1xuICAgICAgICByZXR1cm4gaGFuZGxlcihhcmdzKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBNYWtpbmcgcmVxdWVzdHNcblxuICAgIHRha2VOZXh0U2VxTnVtKCkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy5uZXh0U2VxTnVtO1xuICAgICAgICB0aGlzLm5leHRTZXFOdW0gPSBuICsgMTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxuXG4gICAgLyogU2VuZCBhIHJlcXVlc3QgdG8gYSBzaW5nbGUgcGVlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwZWVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgcGVlciB0byB3aGljaCB0aGUgcmVxdWVzdCBzaG91bGQgYmUgc2VudC5cbiAgICAgKiBAcGFyYW0gaGFuZGxlckRlc2NyaXAge3N0cmluZ30gQSBkZXNjcmlwdGlvbiBpbmRpY2F0aW5nIHRoZSBkZXNpcmVkIGhhbmRsZXIgZm9yIHRoZVxuICAgICAqICAgcmVxdWVzdCBvbiB0aGUgb3RoZXIgc2lkZS5cbiAgICAgKiBAcGFyYW0gYXJncyB7b2JqfSB0aGUgYXJndW1lbnRzIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXIgb24gdGhlIG90aGVyIHNpZGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9uczoge1xuICAgICAqICAgZG9SZWFkeUNoZWNrIHtib29sfSBvcHRpb25hbCwgZGVmYXVsdCBmYWxzZS4gU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcHJlY2VkZVxuICAgICAqICAgICB0aGUgcmVxdWVzdCB3aXRoIGEgcmVhZHkgY2hlY2suXG4gICAgICogICB0aW1lb3V0IHtpbnR9IG9wdGlvbmFsLCBkZWZhdWx0IDAuIFNldCBwb3NpdGl2ZSBpZiB5b3Ugd2FudCB0aGUgcmVxdWVzdCB0byB0aW1lb3V0XG4gICAgICogICAgIGFmdGVyIHRoaXMgbWFueSBtaWxsaXNlY29uZHMuIElmIDAgKG9yIG5lZ2F0aXZlKSwgd2lsbCB3YWl0IGluZGVmaW5pdGVseS5cbiAgICAgKiAgICAgSW4gY2FzZSBvZiB0aW1lb3V0LCB0aGUgcmV0dXJuZWQgcHJvbWlzZSByZWplY3RzLlxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXNwb25zZSB0byB0aGUgcmVxdWVzdCwgb3IgcmVqZWN0c1xuICAgICAqICAgd2l0aCBhbiBlcnJvci5cbiAgICAgKlxuICAgICAqIFNlZSBhbHNvOiBgYnJvYWRjYXN0UmVxdWVzdGAuXG4gICAgICovXG4gICAgbWFrZVJlcXVlc3QocGVlck5hbWUsIGhhbmRsZXJEZXNjcmlwLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGRvUmVhZHlDaGVjayA9IGZhbHNlLFxuICAgICAgICAgICAgdGltZW91dCA9IDAsXG4gICAgICAgIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBjb25zdCBzZXFOdW0gPSB0aGlzLnRha2VOZXh0U2VxTnVtKCk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB7XG4gICAgICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgICAgICBmcm9tOiB0aGlzLmZyb21BZGRyZXNzKCksXG4gICAgICAgICAgICBzZXFOdW06IHNlcU51bSxcbiAgICAgICAgICAgIGhhbmRsZXJEZXNjcmlwOiBoYW5kbGVyRGVzY3JpcCxcbiAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9SZWFkeUNoZWNrID8gdGhpcy5jaGVja1JlYWR5KHBlZXJOYW1lKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm4gY2hlY2sudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSB0aW1lb3V0IDwgMSA/IG51bGwgOiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbnN1bWVSZXF1ZXN0RGF0YShzZXFOdW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHJldHVybjsgLy8gUmVxdWVzdCB3YXMgYWxyZWFkeSBoYW5kbGVkLlxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdQZWVyIHJlcXVlc3QgdGltZWQgb3V0LicpKTtcbiAgICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RzQnlTZXFOdW0uc2V0KHNlcU51bSwge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZTogdGltZW91dEhhbmRsZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3RNZXNzYWdlQXNQZWVyKHBlZXJOYW1lLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBCcm9hZGNhc3QgYSByZXF1ZXN0IHRvIGFsbCBjb25uZWN0ZWQgcGVlcnMgKG9yIGEgc3Vic2V0LCBieSBmaWx0ZXJpbmcpLlxuICAgICAqXG4gICAgICogVGhpcyBqdXN0IHBlcmZvcm1zIG11bHRpcGxlIHJlcXVlc3RzLiBQYXJ0aWN1bGFyIHN1YmNsYXNzZXMgbWF5IGhhdmUgbW9yZVxuICAgICAqIGVmZmljaWVudCB3YXlzIG9mIGJyb2FkY2FzdGluZyB0aGF0IHRoZXkgbWF5IHByZWZlciB0byB1c2UgaW5zdGVhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBoYW5kbGVyRGVzY3JpcCB7c3RyaW5nfSBBIGRlc2NyaXB0aW9uIGluZGljYXRpbmcgdGhlIGRlc2lyZWQgaGFuZGxlciBmb3IgdGhlXG4gICAgICogICByZXF1ZXN0IG9uIHRoZSBvdGhlciBzaWRlLlxuICAgICAqIEBwYXJhbSBhcmdzIHtvYmp9IHRoZSBhcmd1bWVudHMgb2JqZWN0IHRvIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlciBvbiB0aGUgb3RoZXIgc2lkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zOiB7XG4gICAgICogICBleGNsdWRlU2VsZiB7Ym9vbH0gSWYgdHJ1ZSwgZG8gbm90IHNlbmQgdGhlIHJlcXVlc3QgdG8gc2VsZi4gVGhpcyBpcyByZWxldmFudCBmb3JcbiAgICAgKiAgICAgc29tZSBwZWVyIHR5cGVzIHRoYXQga2VlcCB0aGVpciBvd24gbmFtZSBpbiB0aGVpciBzZXQgb2YgcGVlcnM7IGZvciB0aG9zZSB0aGF0XG4gICAgICogICAgIGRvIG5vdCwgaXQgY2FuIGJlIGlnbm9yZWQuXG4gICAgICogICBmaWx0ZXIge2Z1bmN0aW9ufSBvcHRpb25hbCBmdW5jdGlvbiBtYXBwaW5nIHBlZXIgbmFtZXMgdG8gYm9vbGVhbnMuIEFsbG93cyB0b1xuICAgICAqICAgICBicm9hZGNhc3QgdG8gYSBzdWJzZXQgb2YgYWxsIGNvbm5lY3RlZCBwZWVycywgbmFtZWx5IHRob3NlIG1hcHBpbmcgdG8gYHRydWVgLlxuICAgICAqICAgICBJZiBgZXhjbHVkZVNlbGZgIGlzIHRydWUsIHRoYXQgZXhjbHVzaW9uIGhhcHBlbnMgZmlyc3QsIGFuZCB0aGUgZ2l2ZW4gZmlsdGVyXG4gICAgICogICAgIGlzIGFwcGxpZWQgdG8gd2hhdCByZW1haW5zLlxuICAgICAqICAgc2tpcFJlYWR5Q2hlY2tzIHtib29sfSBvcHRpb25hbCwgZGVmYXVsdCBmYWxzZS4gSWYgZmFsc2Ugd2Ugd2lsbCBwcmVjZWRlIGVhY2hcbiAgICAgKiAgICAgcmVxdWVzdCB3aXRoIGEgcmVhZGluZXNzIGNoZWNrLiBTZXQgdHJ1ZSB0byBza2lwLlxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5W1Byb21pc2VdfSBhcnJheSBvZiB0aGUgcHJvbWlzZXMgcmV0dXJuZWQgYnkgb3VyIGBtYWtlUmVxdWVzdGAgbWV0aG9kLFxuICAgICAqICAgb25lIGZvciBlYWNoIHBlZXIgdG8gd2hpY2ggYSByZXF1ZXN0IHdhcyBzZW50LlxuICAgICAqXG4gICAgICogU2VlIGFsc286IGBtYWtlUmVxdWVzdGAuXG4gICAgICpcbiAgICAgKiBOb3RlOiBXaGlsZSBpbiB0aGUgYG1ha2VSZXF1ZXN0YCBtZXRob2QgdGhlIHJlYWR5IGNoZWNrIGlzIHNraXBwZWQgYnkgZGVmYXVsdCwgaGVyZSB0aGVcbiAgICAgKiAgIGJlaGF2aW9yIGlzIHRoZSBvcHBvc2l0ZSwgYW5kIHRoZSByZWFkeSBjaGVja3MgYXJlIHBlcmZvcm1lZCBieSBkZWZhdWx0LiBJdCBpcyBmZWx0IHRoYXQsXG4gICAgICogICByYXRoZXIgdGhhbiBiZWluZyBjb25mdXNpbmcsIHRoaXMgY2F0ZXJzIHRvIG5vcm1hbCB1c2FnZSBwYXR0ZXJucy4gSXQgd2lsbCBiZSBub3JtYWwgdG9cbiAgICAgKiAgIGJlIGJyb2FkY2FzdGluZyB0byBhIGNvbGxlY3Rpb24gb2YgcGVlcnMgZm9yIHdoaWNoIHdlIGFyZSBfbm90XyBjYXJlZnVsbHkgbWFpbnRhaW5pbmcgc3RhdGU7XG4gICAgICogICB3aGVyZWFzIHdoZW4gcmVxdWVzdGluZyBmcm9tIGEgc2luZ2xlIHBlZXIsIHdlIGFyZSBtb3JlIGxpa2VseSB0byBoYXZlIGFscmVhZHkgcGVyZm9ybWVkIGFuXG4gICAgICogICBpbml0aWFsIChvbmUtdGltZSkgcmVhZHkgY2hlY2sgb3Vyc2VsdmVzLlxuICAgICAqL1xuICAgIGJyb2FkY2FzdFJlcXVlc3QoaGFuZGxlckRlc2NyaXAsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXhjbHVkZVNlbGYgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlciA9ICgoKSA9PiB0cnVlKSxcbiAgICAgICAgICAgIHNraXBSZWFkeUNoZWNrcyA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBjb25zdCBwZWVyTmFtZXMgPSB0aGlzLmdldEFsbFBlZXJOYW1lcygpLmZpbHRlcihuYW1lID0+ICghZXhjbHVkZVNlbGYpIHx8IG5hbWUgIT09IHRoaXMubmFtZSkuZmlsdGVyKGZpbHRlcik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcGVlck5hbWUgb2YgcGVlck5hbWVzKSB7XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2VzLnB1c2godGhpcy5tYWtlUmVxdWVzdChwZWVyTmFtZSwgaGFuZGxlckRlc2NyaXAsIGFyZ3MsIHtcbiAgICAgICAgICAgICAgICBkb1JlYWR5Q2hlY2s6ICFza2lwUmVhZHlDaGVja3MsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlUHJvbWlzZXM7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQWJzdHJhY3QgbWV0aG9kcyBzdWJjbGFzc2VzIE1BWSBvdmVycmlkZVxuXG4gICAgLyogU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSB3YW50IHRvIHVzZSB0aGlzXG4gICAgICogYmFzZSBjbGFzcydzIGBicm9hZGNhc3RSZXF1ZXN0YCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheVtzdHJpbmddfSBhbiBBcnJheSBvZiB0aGUgbmFtZXMgb2YgYWxsIGNvbm5lY3RlZCBwZWVycy5cbiAgICAgKi9cbiAgICBnZXRBbGxQZWVyTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGdpdmVzIGEgY2hhbmNlIHRvIGV4YW1pbmUgYW5kIG1vZGlmeSBhIGhhbmRsZXIgZXJyb3IsIGFuZCBwb3NzaWJseVxuICAgICAqIGhhdmUgc2lkZSBlZmZlY3RzLCBiZWZvcmUgdGhlIGVycm9yIGlzIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlYXNvbjogRXJyb3IgdGhyb3duIGJ5IHJlcXVlc3QgaGFuZGxlci5cbiAgICAgKiBAcGFyYW0gd3JhcHBlcjogdGhlIHdyYXBwZXIgbWVzc2FnZSB0aGF0IHdhcyBiZWluZyBoYW5kbGVkLlxuICAgICAqIEByZXR1cm46IEVycm9yIGluc3RhbmNlLiBNYXkgYmUgdGhlIHNhbWUgYXMgdGhlIGdpdmVuIHJlYXNvbiwgb3IgZGlmZmVyZW50LlxuICAgICAqL1xuICAgIGNoZWNrSGFuZGxpbmdFcnJvcihyZWFzb24sIHdyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBBYnN0cmFjdCBtZXRob2RzIHN1YmNsYXNzZXMgTVVTVCBvdmVycmlkZVxuXG4gICAgLyogVGhpcyBpcyB3aGVyZSBzdWJjbGFzc2VzIG11c3QgdXNlIHRoZWlyIHRyYW5zcG9ydC1zcGVjaWZpYyBtZXRob2Qgb2YgZ2V0dGluZ1xuICAgICAqIGEgc2VyaWFsaXphYmxlIG1lc3NhZ2UgZnJvbSBvbmUgcGVlciB0byBhbm90aGVyLlxuICAgICAqXG4gICAgICogU3BlY2lmaWNhbGx5LCB0aGUgbWVzc2FnZSB0byBiZSBjb21tdW5pY2F0ZWQgaGVyZSBpcyBvbmUgb2YgdGhlIFwid3JhcHBlclwiXG4gICAgICogbWVzc2FnZXMgd2UgdXNlIHRvIHJlcHJlc2VudCByZXF1ZXN0cyBhbmQgcmVzcG9uc2VzLiBUaGUgaW50ZW50aW9uIHRoZXJlZm9yZVxuICAgICAqIGlzIHRoYXQgaXQgYmUgZGVsaXZlcmVkIHRvIHRoZSBgaGFuZGxlTWVzc2FnZWAgbWV0aG9kIG9mIHRoZSBwZWVyICh3aGljaCBzaG91bGRcbiAgICAgKiBfbm90XyBiZSBvdmVycmlkZGVuLCBidXQgc2hvdWxkIGJlIGluaGVyaXRlZCBmcm9tIHRoaXMgYmFzZSBjbGFzcykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGVlck5hbWUge3N0cmluZ30gdGhlIG5hbWUgb2YgYSBjb25uZWN0ZWQgcGVlclxuICAgICAqIEBwYXJhbSB3cmFwcGVyIHtvYmp9IHRoZSB3cmFwcGVyIG1lc3NhZ2UgdG8gYmUgcG9zdGVkIHRvIHRoYXQgcGVlci4gRm9ybWF0OiB7XG4gICAgICogICB0eXBlIHtzdHJpbmd9IGVxdWFsIHRvIGVpdGhlciAncmVxdWVzdCcgb3IgJ3Jlc3BvbnNlJywgYXBwcm9wcmlhdGVseS5cbiAgICAgKiB9XG4gICAgICovXG4gICAgcG9zdE1lc3NhZ2VBc1BlZXIocGVlck5hbWUsIHdyYXBwZXIpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbn1cbiIsIi8qISBicm93c2VyLXBlZXJzIHYwLjEuMCB8IENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFN0ZXZlIEtpZWZmZXIgfCBNSVQgbGljZW5zZSAqL1xuLyogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVCAqL1xuXG4vKiBTaW1wbGUgWE1MSHR0cFJlcXVlc3QgdXRpbGl0eVxuICpcbiAqIHBhcmFtIHVybDogdGhlIHVybCB0byBiZSBhY2Nlc3NlZFxuICogb3B0aW9uYWwgcGFyYW1zIG9iamVjdDpcbiAqICAgICAgbWV0aG9kOiBcIkdFVFwiLCBcIlBPU1RcIiBldGMuIERlZmF1bHRzIHRvIFwiR0VUXCJcbiAqICAgICAgcXVlcnk6IHBhc3MgYW4gb2JqZWN0IGRlZmluaW5nIGtleS12YWx1ZSBwYWlycyB0aGF0IHlvdSB3YW50IGFkZGVkXG4gKiAgICAgICAgICBhcyBhIHF1ZXJ5IHN0cmluZyBvbiB0aGUgZW5kIG9mIHRoZSBVUkxcbiAqICAgICAgZm9ybTogcGFzcyBhbiBvYmplY3QgZGVmaW5pbmcga2V5LXZhbHVlIHBhaXJzIHRoYXQgeW91IHdhbnQgdG8gYmVcbiAqICAgICAgICAgIHNlbnQgaW4gZm9ybS1lbmNvZGVkIGZvcm1hdCBpbiB0aGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICogICAgICBoYW5kbGVBczogJ3RleHQnLCAnanNvbicsIG9yICdibG9iJy4gRGVmYXVsdHMgdG8gJ3RleHQnXG4gKlxuICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgcmVxdWVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24geGhyKHVybCwgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5xdWVyeSkge1xuICAgICAgICB1cmwgKz0gXCI/XCIrKG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zLnF1ZXJ5KSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB9O1xuICAgIGlmIChwYXJhbXMuZm9ybSkge1xuICAgICAgICBpbml0LmJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcy5mb3JtKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQXMgPSBwYXJhbXMuaGFuZGxlQXMgfHwgJ3RleHQnO1xuICAgIHJldHVybiBmZXRjaCh1cmwsIGluaXQpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcC5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZUFzID09PSAnanNvbicpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVBcyA9PT0gJ2Jsb2InKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5ibG9iKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC50ZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyogQWRkIGV4dHJhIGtleS12YWx1ZSBhcmd1bWVudHMgdG8gYW4gWEhSLlxuICpcbiAqIEBwYXJhbSBnaXZlblBhcmFtczogYSBgcGFyYW1zYCBhcmcgd2hpY2ggd291bGQgaGF2ZSBiZWVuIHBhc3NlZCB0byB0aGVcbiAqICAgYHhocmAgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGlzIG1vZHVsZS5cbiAqIEBwYXJhbSBleHRyYVBhaXJzOiBhbiBvYmplY3QgZGVmaW5pbmcgZXh0cmEga2V5LXZhbHVlIGFyZ3MgdGhhdCB5b3Ugd2FudCB0b1xuICogICBhZGQgdG8gdGhlIHJlcXVlc3QuXG4gKiBAcmV0dXJuOiBhIF9uZXdfIHBhcmFtcyBvYmplY3QuIFRoZSBnaXZlbiBvbmUgaXMgbm90IG1vZGlmaWVkLlxuICogICBUaGUgZXh0cmEgcGFpcnMgYXJlIHBsYWNlZCBpbiBgcGFyYW1zLnF1ZXJ5YCBpZiBgcXVlcnlgIHdhcyBkZWZpbmVkIGluIHRoZVxuICogICBnaXZlblBhcmFtcywgZWxzZSBpbiBgcGFyYW1zLmZvcm1gIGlmIHRoYXQgd2FzIGRlZmluZWQuIElmIG5laXRoZXIgd2FzIGRlZmluZWQsXG4gKiAgIHRoZW4gd2UgZGVmaW5lIGBwYXJhbXMucXVlcnlgIGFuZCBwdXQgdGhlIGV4dHJhIHBhaXJzIGluIHRoZXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5yaWNoWGhyUGFyYW1zKGdpdmVuUGFyYW1zLCBleHRyYVBhaXJzKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGdpdmVuUGFyYW1zIHx8IHt9KTtcbiAgICBpZiAocGFyYW1zLnF1ZXJ5KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLnF1ZXJ5LCBleHRyYVBhaXJzKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mb3JtKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLmZvcm0sIGV4dHJhUGFpcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5xdWVyeSA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtcy5xdWVyeSwgZXh0cmFQYWlycyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0ZW5hYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxpc3RlbmVycykge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICB9XG5cbiAgICBvbihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNicyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0gfHwgW107XG4gICAgICAgIGNicy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSA9IGNicztcbiAgICB9XG5cbiAgICBvZmYoZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdIHx8IFtdO1xuICAgICAgICBjb25zdCBpMCA9IGNicy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGkwID49IDApIHtcbiAgICAgICAgICAgIGNicy5zcGxpY2UoaTAsIDEpO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSA9IGNicztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIC8qIFN1YnRsZSBwb2ludDogSW4gZ2VuZXJhbCwgd2UgYXJlIGFsd2F5cyBjYXJlZnVsIG5vdCB0byBtb2RpZnkgYW5cbiAgICAgICAgICogaXRlcmFibGUgd2hpbGUgd2UgYXJlIGluIHRoZSBwcm9jZXNzIG9mIGl0ZXJhdGluZyBvdmVyIGl0LiBIZXJlLCB3ZSBkb24ndFxuICAgICAgICAgKiBrbm93IHdoZXRoZXIgYSBjYWxsYmFjayBtaWdodCBgb2ZmYCBpdHNlbGYgYXMgYSBwYXJ0IG9mIGl0cyBwcm9jZXNzLFxuICAgICAgICAgKiB0aGVyZWJ5IG1vZGlmeWluZyBvdXIgYXJyYXkgb2YgbGlzdGVuZXJzIHdoaWxlIHdlIGFyZSBpdGVyYXRpbmcgb3ZlciBpdCFcbiAgICAgICAgICogVGhlcmVmb3JlLCB0byBiZSBzYWZlLCB3ZSBoYXZlIHRvIGl0ZXJhdGUgb3ZlciBhIF9jb3B5XyBvZiBvdXIgYXJyYXkgb2ZcbiAgICAgICAgICogcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuICovXG4gICAgICAgIGNvbnN0IGNicyA9ICh0aGlzLmxpc3RlbmVyc1tldmVudC50eXBlXSB8fCBbXSkuc2xpY2UoKTtcbiAgICAgICAgZm9yIChsZXQgY2Igb2YgY2JzKSB7XG4gICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIndXNlIHN0cmljdCdcblxuLy8gQSBsaW5rZWQgbGlzdCB0byBrZWVwIHRyYWNrIG9mIHJlY2VudGx5LXVzZWQtbmVzc1xuY29uc3QgWWFsbGlzdCA9IHJlcXVpcmUoJ3lhbGxpc3QnKVxuXG5jb25zdCBNQVggPSBTeW1ib2woJ21heCcpXG5jb25zdCBMRU5HVEggPSBTeW1ib2woJ2xlbmd0aCcpXG5jb25zdCBMRU5HVEhfQ0FMQ1VMQVRPUiA9IFN5bWJvbCgnbGVuZ3RoQ2FsY3VsYXRvcicpXG5jb25zdCBBTExPV19TVEFMRSA9IFN5bWJvbCgnYWxsb3dTdGFsZScpXG5jb25zdCBNQVhfQUdFID0gU3ltYm9sKCdtYXhBZ2UnKVxuY29uc3QgRElTUE9TRSA9IFN5bWJvbCgnZGlzcG9zZScpXG5jb25zdCBOT19ESVNQT1NFX09OX1NFVCA9IFN5bWJvbCgnbm9EaXNwb3NlT25TZXQnKVxuY29uc3QgTFJVX0xJU1QgPSBTeW1ib2woJ2xydUxpc3QnKVxuY29uc3QgQ0FDSEUgPSBTeW1ib2woJ2NhY2hlJylcbmNvbnN0IFVQREFURV9BR0VfT05fR0VUID0gU3ltYm9sKCd1cGRhdGVBZ2VPbkdldCcpXG5cbmNvbnN0IG5haXZlTGVuZ3RoID0gKCkgPT4gMVxuXG4vLyBscnVMaXN0IGlzIGEgeWFsbGlzdCB3aGVyZSB0aGUgaGVhZCBpcyB0aGUgeW91bmdlc3Rcbi8vIGl0ZW0sIGFuZCB0aGUgdGFpbCBpcyB0aGUgb2xkZXN0LiAgdGhlIGxpc3QgY29udGFpbnMgdGhlIEhpdFxuLy8gb2JqZWN0cyBhcyB0aGUgZW50cmllcy5cbi8vIEVhY2ggSGl0IG9iamVjdCBoYXMgYSByZWZlcmVuY2UgdG8gaXRzIFlhbGxpc3QuTm9kZS4gIFRoaXNcbi8vIG5ldmVyIGNoYW5nZXMuXG4vL1xuLy8gY2FjaGUgaXMgYSBNYXAgKG9yIFBzZXVkb01hcCkgdGhhdCBtYXRjaGVzIHRoZSBrZXlzIHRvXG4vLyB0aGUgWWFsbGlzdC5Ob2RlIG9iamVjdC5cbmNsYXNzIExSVUNhY2hlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKVxuICAgICAgb3B0aW9ucyA9IHsgbWF4OiBvcHRpb25zIH1cblxuICAgIGlmICghb3B0aW9ucylcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMubWF4ICYmICh0eXBlb2Ygb3B0aW9ucy5tYXggIT09ICdudW1iZXInIHx8IG9wdGlvbnMubWF4IDwgMCkpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuICAgIC8vIEtpbmQgb2Ygd2VpcmQgdG8gaGF2ZSBhIGRlZmF1bHQgbWF4IG9mIEluZmluaXR5LCBidXQgb2ggd2VsbC5cbiAgICBjb25zdCBtYXggPSB0aGlzW01BWF0gPSBvcHRpb25zLm1heCB8fCBJbmZpbml0eVxuXG4gICAgY29uc3QgbGMgPSBvcHRpb25zLmxlbmd0aCB8fCBuYWl2ZUxlbmd0aFxuICAgIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdID0gKHR5cGVvZiBsYyAhPT0gJ2Z1bmN0aW9uJykgPyBuYWl2ZUxlbmd0aCA6IGxjXG4gICAgdGhpc1tBTExPV19TVEFMRV0gPSBvcHRpb25zLnN0YWxlIHx8IGZhbHNlXG4gICAgaWYgKG9wdGlvbnMubWF4QWdlICYmIHR5cGVvZiBvcHRpb25zLm1heEFnZSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG51bWJlcicpXG4gICAgdGhpc1tNQVhfQUdFXSA9IG9wdGlvbnMubWF4QWdlIHx8IDBcbiAgICB0aGlzW0RJU1BPU0VdID0gb3B0aW9ucy5kaXNwb3NlXG4gICAgdGhpc1tOT19ESVNQT1NFX09OX1NFVF0gPSBvcHRpb25zLm5vRGlzcG9zZU9uU2V0IHx8IGZhbHNlXG4gICAgdGhpc1tVUERBVEVfQUdFX09OX0dFVF0gPSBvcHRpb25zLnVwZGF0ZUFnZU9uR2V0IHx8IGZhbHNlXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIG1heCBjaGFuZ2VzLlxuICBzZXQgbWF4IChtTCkge1xuICAgIGlmICh0eXBlb2YgbUwgIT09ICdudW1iZXInIHx8IG1MIDwgMClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG5cbiAgICB0aGlzW01BWF0gPSBtTCB8fCBJbmZpbml0eVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbWF4ICgpIHtcbiAgICByZXR1cm4gdGhpc1tNQVhdXG4gIH1cblxuICBzZXQgYWxsb3dTdGFsZSAoYWxsb3dTdGFsZSkge1xuICAgIHRoaXNbQUxMT1dfU1RBTEVdID0gISFhbGxvd1N0YWxlXG4gIH1cbiAgZ2V0IGFsbG93U3RhbGUgKCkge1xuICAgIHJldHVybiB0aGlzW0FMTE9XX1NUQUxFXVxuICB9XG5cbiAgc2V0IG1heEFnZSAobUEpIHtcbiAgICBpZiAodHlwZW9mIG1BICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG5cbiAgICB0aGlzW01BWF9BR0VdID0gbUFcbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IG1heEFnZSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTUFYX0FHRV1cbiAgfVxuXG4gIC8vIHJlc2l6ZSB0aGUgY2FjaGUgd2hlbiB0aGUgbGVuZ3RoQ2FsY3VsYXRvciBjaGFuZ2VzLlxuICBzZXQgbGVuZ3RoQ2FsY3VsYXRvciAobEMpIHtcbiAgICBpZiAodHlwZW9mIGxDICE9PSAnZnVuY3Rpb24nKVxuICAgICAgbEMgPSBuYWl2ZUxlbmd0aFxuXG4gICAgaWYgKGxDICE9PSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSkge1xuICAgICAgdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0gPSBsQ1xuICAgICAgdGhpc1tMRU5HVEhdID0gMFxuICAgICAgdGhpc1tMUlVfTElTVF0uZm9yRWFjaChoaXQgPT4ge1xuICAgICAgICBoaXQubGVuZ3RoID0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0oaGl0LnZhbHVlLCBoaXQua2V5KVxuICAgICAgICB0aGlzW0xFTkdUSF0gKz0gaGl0Lmxlbmd0aFxuICAgICAgfSlcbiAgICB9XG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBsZW5ndGhDYWxjdWxhdG9yICgpIHsgcmV0dXJuIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXNbTEVOR1RIXSB9XG4gIGdldCBpdGVtQ291bnQgKCkgeyByZXR1cm4gdGhpc1tMUlVfTElTVF0ubGVuZ3RoIH1cblxuICByZm9yRWFjaCAoZm4sIHRoaXNwKSB7XG4gICAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpc1tMUlVfTElTVF0udGFpbDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgY29uc3QgcHJldiA9IHdhbGtlci5wcmV2XG4gICAgICBmb3JFYWNoU3RlcCh0aGlzLCBmbiwgd2Fsa2VyLCB0aGlzcClcbiAgICAgIHdhbGtlciA9IHByZXZcbiAgICB9XG4gIH1cblxuICBmb3JFYWNoIChmbiwgdGhpc3ApIHtcbiAgICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzW0xSVV9MSVNUXS5oZWFkOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgICBjb25zdCBuZXh0ID0gd2Fsa2VyLm5leHRcbiAgICAgIGZvckVhY2hTdGVwKHRoaXMsIGZuLCB3YWxrZXIsIHRoaXNwKVxuICAgICAgd2Fsa2VyID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIGtleXMgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS50b0FycmF5KCkubWFwKGsgPT4gay5rZXkpXG4gIH1cblxuICB2YWx1ZXMgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS50b0FycmF5KCkubWFwKGsgPT4gay52YWx1ZSlcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBpZiAodGhpc1tESVNQT1NFXSAmJlxuICAgICAgICB0aGlzW0xSVV9MSVNUXSAmJlxuICAgICAgICB0aGlzW0xSVV9MSVNUXS5sZW5ndGgpIHtcbiAgICAgIHRoaXNbTFJVX0xJU1RdLmZvckVhY2goaGl0ID0+IHRoaXNbRElTUE9TRV0oaGl0LmtleSwgaGl0LnZhbHVlKSlcbiAgICB9XG5cbiAgICB0aGlzW0NBQ0hFXSA9IG5ldyBNYXAoKSAvLyBoYXNoIG9mIGl0ZW1zIGJ5IGtleVxuICAgIHRoaXNbTFJVX0xJU1RdID0gbmV3IFlhbGxpc3QoKSAvLyBsaXN0IG9mIGl0ZW1zIGluIG9yZGVyIG9mIHVzZSByZWNlbmN5XG4gICAgdGhpc1tMRU5HVEhdID0gMCAvLyBsZW5ndGggb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS5tYXAoaGl0ID0+XG4gICAgICBpc1N0YWxlKHRoaXMsIGhpdCkgPyBmYWxzZSA6IHtcbiAgICAgICAgazogaGl0LmtleSxcbiAgICAgICAgdjogaGl0LnZhbHVlLFxuICAgICAgICBlOiBoaXQubm93ICsgKGhpdC5tYXhBZ2UgfHwgMClcbiAgICAgIH0pLnRvQXJyYXkoKS5maWx0ZXIoaCA9PiBoKVxuICB9XG5cbiAgZHVtcExydSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTFJVX0xJU1RdXG4gIH1cblxuICBzZXQgKGtleSwgdmFsdWUsIG1heEFnZSkge1xuICAgIG1heEFnZSA9IG1heEFnZSB8fCB0aGlzW01BWF9BR0VdXG5cbiAgICBpZiAobWF4QWdlICYmIHR5cGVvZiBtYXhBZ2UgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBudW1iZXInKVxuXG4gICAgY29uc3Qgbm93ID0gbWF4QWdlID8gRGF0ZS5ub3coKSA6IDBcbiAgICBjb25zdCBsZW4gPSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSh2YWx1ZSwga2V5KVxuXG4gICAgaWYgKHRoaXNbQ0FDSEVdLmhhcyhrZXkpKSB7XG4gICAgICBpZiAobGVuID4gdGhpc1tNQVhdKSB7XG4gICAgICAgIGRlbCh0aGlzLCB0aGlzW0NBQ0hFXS5nZXQoa2V5KSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzW0NBQ0hFXS5nZXQoa2V5KVxuICAgICAgY29uc3QgaXRlbSA9IG5vZGUudmFsdWVcblxuICAgICAgLy8gZGlzcG9zZSBvZiB0aGUgb2xkIG9uZSBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgICAgIC8vIHNwbGl0IG91dCBpbnRvIDIgaWZzIGZvciBiZXR0ZXIgY292ZXJhZ2UgdHJhY2tpbmdcbiAgICAgIGlmICh0aGlzW0RJU1BPU0VdKSB7XG4gICAgICAgIGlmICghdGhpc1tOT19ESVNQT1NFX09OX1NFVF0pXG4gICAgICAgICAgdGhpc1tESVNQT1NFXShrZXksIGl0ZW0udmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGl0ZW0ubm93ID0gbm93XG4gICAgICBpdGVtLm1heEFnZSA9IG1heEFnZVxuICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzW0xFTkdUSF0gKz0gbGVuIC0gaXRlbS5sZW5ndGhcbiAgICAgIGl0ZW0ubGVuZ3RoID0gbGVuXG4gICAgICB0aGlzLmdldChrZXkpXG4gICAgICB0cmltKHRoaXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IG5ldyBFbnRyeShrZXksIHZhbHVlLCBsZW4sIG5vdywgbWF4QWdlKVxuXG4gICAgLy8gb3ZlcnNpemVkIG9iamVjdHMgZmFsbCBvdXQgb2YgY2FjaGUgYXV0b21hdGljYWxseS5cbiAgICBpZiAoaGl0Lmxlbmd0aCA+IHRoaXNbTUFYXSkge1xuICAgICAgaWYgKHRoaXNbRElTUE9TRV0pXG4gICAgICAgIHRoaXNbRElTUE9TRV0oa2V5LCB2YWx1ZSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpc1tMRU5HVEhdICs9IGhpdC5sZW5ndGhcbiAgICB0aGlzW0xSVV9MSVNUXS51bnNoaWZ0KGhpdClcbiAgICB0aGlzW0NBQ0hFXS5zZXQoa2V5LCB0aGlzW0xSVV9MSVNUXS5oZWFkKVxuICAgIHRyaW0odGhpcylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGFzIChrZXkpIHtcbiAgICBpZiAoIXRoaXNbQ0FDSEVdLmhhcyhrZXkpKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBoaXQgPSB0aGlzW0NBQ0hFXS5nZXQoa2V5KS52YWx1ZVxuICAgIHJldHVybiAhaXNTdGFsZSh0aGlzLCBoaXQpXG4gIH1cblxuICBnZXQgKGtleSkge1xuICAgIHJldHVybiBnZXQodGhpcywga2V5LCB0cnVlKVxuICB9XG5cbiAgcGVlayAoa2V5KSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBrZXksIGZhbHNlKVxuICB9XG5cbiAgcG9wICgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpc1tMUlVfTElTVF0udGFpbFxuICAgIGlmICghbm9kZSlcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBkZWwodGhpcywgbm9kZSlcbiAgICByZXR1cm4gbm9kZS52YWx1ZVxuICB9XG5cbiAgZGVsIChrZXkpIHtcbiAgICBkZWwodGhpcywgdGhpc1tDQUNIRV0uZ2V0KGtleSkpXG4gIH1cblxuICBsb2FkIChhcnIpIHtcbiAgICAvLyByZXNldCB0aGUgY2FjaGVcbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAvLyBBIHByZXZpb3VzIHNlcmlhbGl6ZWQgY2FjaGUgaGFzIHRoZSBtb3N0IHJlY2VudCBpdGVtcyBmaXJzdFxuICAgIGZvciAobGV0IGwgPSBhcnIubGVuZ3RoIC0gMTsgbCA+PSAwOyBsLS0pIHtcbiAgICAgIGNvbnN0IGhpdCA9IGFycltsXVxuICAgICAgY29uc3QgZXhwaXJlc0F0ID0gaGl0LmUgfHwgMFxuICAgICAgaWYgKGV4cGlyZXNBdCA9PT0gMClcbiAgICAgICAgLy8gdGhlIGl0ZW0gd2FzIGNyZWF0ZWQgd2l0aG91dCBleHBpcmF0aW9uIGluIGEgbm9uIGFnZWQgY2FjaGVcbiAgICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52KVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG1heEFnZSA9IGV4cGlyZXNBdCAtIG5vd1xuICAgICAgICAvLyBkb250IGFkZCBhbHJlYWR5IGV4cGlyZWQgaXRlbXNcbiAgICAgICAgaWYgKG1heEFnZSA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldChoaXQuaywgaGl0LnYsIG1heEFnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBydW5lICgpIHtcbiAgICB0aGlzW0NBQ0hFXS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiBnZXQodGhpcywga2V5LCBmYWxzZSkpXG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gKHNlbGYsIGtleSwgZG9Vc2UpID0+IHtcbiAgY29uc3Qgbm9kZSA9IHNlbGZbQ0FDSEVdLmdldChrZXkpXG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaGl0ID0gbm9kZS52YWx1ZVxuICAgIGlmIChpc1N0YWxlKHNlbGYsIGhpdCkpIHtcbiAgICAgIGRlbChzZWxmLCBub2RlKVxuICAgICAgaWYgKCFzZWxmW0FMTE9XX1NUQUxFXSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9Vc2UpIHtcbiAgICAgICAgaWYgKHNlbGZbVVBEQVRFX0FHRV9PTl9HRVRdKVxuICAgICAgICAgIG5vZGUudmFsdWUubm93ID0gRGF0ZS5ub3coKVxuICAgICAgICBzZWxmW0xSVV9MSVNUXS51bnNoaWZ0Tm9kZShub2RlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGl0LnZhbHVlXG4gIH1cbn1cblxuY29uc3QgaXNTdGFsZSA9IChzZWxmLCBoaXQpID0+IHtcbiAgaWYgKCFoaXQgfHwgKCFoaXQubWF4QWdlICYmICFzZWxmW01BWF9BR0VdKSlcbiAgICByZXR1cm4gZmFsc2VcblxuICBjb25zdCBkaWZmID0gRGF0ZS5ub3coKSAtIGhpdC5ub3dcbiAgcmV0dXJuIGhpdC5tYXhBZ2UgPyBkaWZmID4gaGl0Lm1heEFnZVxuICAgIDogc2VsZltNQVhfQUdFXSAmJiAoZGlmZiA+IHNlbGZbTUFYX0FHRV0pXG59XG5cbmNvbnN0IHRyaW0gPSBzZWxmID0+IHtcbiAgaWYgKHNlbGZbTEVOR1RIXSA+IHNlbGZbTUFYXSkge1xuICAgIGZvciAobGV0IHdhbGtlciA9IHNlbGZbTFJVX0xJU1RdLnRhaWw7XG4gICAgICBzZWxmW0xFTkdUSF0gPiBzZWxmW01BWF0gJiYgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgLy8gV2Uga25vdyB0aGF0IHdlJ3JlIGFib3V0IHRvIGRlbGV0ZSB0aGlzIG9uZSwgYW5kIGFsc29cbiAgICAgIC8vIHdoYXQgdGhlIG5leHQgbGVhc3QgcmVjZW50bHkgdXNlZCBrZXkgd2lsbCBiZSwgc28ganVzdFxuICAgICAgLy8gZ28gYWhlYWQgYW5kIHNldCBpdCBub3cuXG4gICAgICBjb25zdCBwcmV2ID0gd2Fsa2VyLnByZXZcbiAgICAgIGRlbChzZWxmLCB3YWxrZXIpXG4gICAgICB3YWxrZXIgPSBwcmV2XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlbCA9IChzZWxmLCBub2RlKSA9PiB7XG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaGl0ID0gbm9kZS52YWx1ZVxuICAgIGlmIChzZWxmW0RJU1BPU0VdKVxuICAgICAgc2VsZltESVNQT1NFXShoaXQua2V5LCBoaXQudmFsdWUpXG5cbiAgICBzZWxmW0xFTkdUSF0gLT0gaGl0Lmxlbmd0aFxuICAgIHNlbGZbQ0FDSEVdLmRlbGV0ZShoaXQua2V5KVxuICAgIHNlbGZbTFJVX0xJU1RdLnJlbW92ZU5vZGUobm9kZSlcbiAgfVxufVxuXG5jbGFzcyBFbnRyeSB7XG4gIGNvbnN0cnVjdG9yIChrZXksIHZhbHVlLCBsZW5ndGgsIG5vdywgbWF4QWdlKSB7XG4gICAgdGhpcy5rZXkgPSBrZXlcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHRoaXMubm93ID0gbm93XG4gICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2UgfHwgMFxuICB9XG59XG5cbmNvbnN0IGZvckVhY2hTdGVwID0gKHNlbGYsIGZuLCBub2RlLCB0aGlzcCkgPT4ge1xuICBsZXQgaGl0ID0gbm9kZS52YWx1ZVxuICBpZiAoaXNTdGFsZShzZWxmLCBoaXQpKSB7XG4gICAgZGVsKHNlbGYsIG5vZGUpXG4gICAgaWYgKCFzZWxmW0FMTE9XX1NUQUxFXSlcbiAgICAgIGhpdCA9IHVuZGVmaW5lZFxuICB9XG4gIGlmIChoaXQpXG4gICAgZm4uY2FsbCh0aGlzcCwgaGl0LnZhbHVlLCBoaXQua2V5LCBzZWxmKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExSVUNhY2hlXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cbiAgICAgICAgICAvKiB3cmFwcGVycyAqL1xuICAgICAgICAgICwge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9OyAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoWWFsbGlzdCkge1xuICBZYWxsaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICgpIHtcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlcjsgd2Fsa2VyID0gd2Fsa2VyLm5leHQpIHtcbiAgICAgIHlpZWxkIHdhbGtlci52YWx1ZVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IFlhbGxpc3RcblxuWWFsbGlzdC5Ob2RlID0gTm9kZVxuWWFsbGlzdC5jcmVhdGUgPSBZYWxsaXN0XG5cbmZ1bmN0aW9uIFlhbGxpc3QgKGxpc3QpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghKHNlbGYgaW5zdGFuY2VvZiBZYWxsaXN0KSkge1xuICAgIHNlbGYgPSBuZXcgWWFsbGlzdCgpXG4gIH1cblxuICBzZWxmLnRhaWwgPSBudWxsXG4gIHNlbGYuaGVhZCA9IG51bGxcbiAgc2VsZi5sZW5ndGggPSAwXG5cbiAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgc2VsZi5wdXNoKGl0ZW0pXG4gICAgfSlcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgc2VsZi5wdXNoKGFyZ3VtZW50c1tpXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VsZlxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUubGlzdCAhPT0gdGhpcykge1xuICAgIHRocm93IG5ldyBFcnJvcigncmVtb3Zpbmcgbm9kZSB3aGljaCBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBsaXN0JylcbiAgfVxuXG4gIHZhciBuZXh0ID0gbm9kZS5uZXh0XG4gIHZhciBwcmV2ID0gbm9kZS5wcmV2XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXYgPSBwcmV2XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIHByZXYubmV4dCA9IG5leHRcbiAgfVxuXG4gIGlmIChub2RlID09PSB0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBuZXh0XG4gIH1cbiAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbCA9IHByZXZcbiAgfVxuXG4gIG5vZGUubGlzdC5sZW5ndGgtLVxuICBub2RlLm5leHQgPSBudWxsXG4gIG5vZGUucHJldiA9IG51bGxcbiAgbm9kZS5saXN0ID0gbnVsbFxuXG4gIHJldHVybiBuZXh0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnVuc2hpZnROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuaGVhZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG5vZGUubGlzdCkge1xuICAgIG5vZGUubGlzdC5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cblxuICB2YXIgaGVhZCA9IHRoaXMuaGVhZFxuICBub2RlLmxpc3QgPSB0aGlzXG4gIG5vZGUubmV4dCA9IGhlYWRcbiAgaWYgKGhlYWQpIHtcbiAgICBoZWFkLnByZXYgPSBub2RlXG4gIH1cblxuICB0aGlzLmhlYWQgPSBub2RlXG4gIGlmICghdGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsID0gbm9kZVxuICB9XG4gIHRoaXMubGVuZ3RoKytcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucHVzaE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobm9kZS5saXN0KSB7XG4gICAgbm9kZS5saXN0LnJlbW92ZU5vZGUobm9kZSlcbiAgfVxuXG4gIHZhciB0YWlsID0gdGhpcy50YWlsXG4gIG5vZGUubGlzdCA9IHRoaXNcbiAgbm9kZS5wcmV2ID0gdGFpbFxuICBpZiAodGFpbCkge1xuICAgIHRhaWwubmV4dCA9IG5vZGVcbiAgfVxuXG4gIHRoaXMudGFpbCA9IG5vZGVcbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBub2RlXG4gIH1cbiAgdGhpcy5sZW5ndGgrK1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBwdXNoKHRoaXMsIGFyZ3VtZW50c1tpXSlcbiAgfVxuICByZXR1cm4gdGhpcy5sZW5ndGhcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdW5zaGlmdCh0aGlzLCBhcmd1bWVudHNbaV0pXG4gIH1cbiAgcmV0dXJuIHRoaXMubGVuZ3RoXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB2YXIgcmVzID0gdGhpcy50YWlsLnZhbHVlXG4gIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2XG4gIGlmICh0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwubmV4dCA9IG51bGxcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhlYWQgPSBudWxsXG4gIH1cbiAgdGhpcy5sZW5ndGgtLVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciByZXMgPSB0aGlzLmhlYWQudmFsdWVcbiAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHRcbiAgaWYgKHRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZC5wcmV2ID0gbnVsbFxuICB9IGVsc2Uge1xuICAgIHRoaXMudGFpbCA9IG51bGxcbiAgfVxuICB0aGlzLmxlbmd0aC0tXG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMuaGVhZCwgaSA9IDA7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCBpLCB0aGlzKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZm9yRWFjaFJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLnRhaWwsIGkgPSB0aGlzLmxlbmd0aCAtIDE7IHdhbGtlciAhPT0gbnVsbDsgaS0tKSB7XG4gICAgZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCBpLCB0aGlzKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG4pIHtcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBuOyBpKyspIHtcbiAgICAvLyBhYm9ydCBvdXQgb2YgdGhlIGxpc3QgZWFybHkgaWYgd2UgaGl0IGEgY3ljbGVcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIGlmIChpID09PSBuICYmIHdhbGtlciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB3YWxrZXIudmFsdWVcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5nZXRSZXZlcnNlID0gZnVuY3Rpb24gKG4pIHtcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBuOyBpKyspIHtcbiAgICAvLyBhYm9ydCBvdXQgb2YgdGhlIGxpc3QgZWFybHkgaWYgd2UgaGl0IGEgY3ljbGVcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIGlmIChpID09PSBuICYmIHdhbGtlciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB3YWxrZXIudmFsdWVcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICB2YXIgcmVzID0gbmV3IFlhbGxpc3QoKVxuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICByZXMucHVzaChmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIHRoaXMpKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5tYXBSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgdmFyIHJlcyA9IG5ldyBZYWxsaXN0KClcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgcmVzLnB1c2goZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCB0aGlzKSlcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsKSB7XG4gIHZhciBhY2NcbiAgdmFyIHdhbGtlciA9IHRoaXMuaGVhZFxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBhY2MgPSBpbml0aWFsXG4gIH0gZWxzZSBpZiAodGhpcy5oZWFkKSB7XG4gICAgd2Fsa2VyID0gdGhpcy5oZWFkLm5leHRcbiAgICBhY2MgPSB0aGlzLmhlYWQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbGlzdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYWNjID0gZm4oYWNjLCB3YWxrZXIudmFsdWUsIGkpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVkdWNlUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgaW5pdGlhbCkge1xuICB2YXIgYWNjXG4gIHZhciB3YWxrZXIgPSB0aGlzLnRhaWxcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgYWNjID0gaW5pdGlhbFxuICB9IGVsc2UgaWYgKHRoaXMudGFpbCkge1xuICAgIHdhbGtlciA9IHRoaXMudGFpbC5wcmV2XG4gICAgYWNjID0gdGhpcy50YWlsLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGxpc3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IHdhbGtlciAhPT0gbnVsbDsgaS0tKSB7XG4gICAgYWNjID0gZm4oYWNjLCB3YWxrZXIudmFsdWUsIGkpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhcnJbaV0gPSB3YWxrZXIudmFsdWVcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudG9BcnJheVJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYXJyW2ldID0gd2Fsa2VyLnZhbHVlXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHRvID0gdG8gfHwgdGhpcy5sZW5ndGhcbiAgaWYgKHRvIDwgMCkge1xuICAgIHRvICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZnJvbSA9IGZyb20gfHwgMFxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgdmFyIHJldCA9IG5ldyBZYWxsaXN0KClcbiAgaWYgKHRvIDwgZnJvbSB8fCB0byA8IDApIHtcbiAgICByZXR1cm4gcmV0XG4gIH1cbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSA9IDBcbiAgfVxuICBpZiAodG8gPiB0aGlzLmxlbmd0aCkge1xuICAgIHRvID0gdGhpcy5sZW5ndGhcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IGZyb207IGkrKykge1xuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgZm9yICg7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgdG87IGkrKywgd2Fsa2VyID0gd2Fsa2VyLm5leHQpIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zbGljZVJldmVyc2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdG8gPSB0byB8fCB0aGlzLmxlbmd0aFxuICBpZiAodG8gPCAwKSB7XG4gICAgdG8gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICBmcm9tID0gZnJvbSB8fCAwXG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICB2YXIgcmV0ID0gbmV3IFlhbGxpc3QoKVxuICBpZiAodG8gPCBmcm9tIHx8IHRvIDwgMCkge1xuICAgIHJldHVybiByZXRcbiAgfVxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tID0gMFxuICB9XG4gIGlmICh0byA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdG8gPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGwgJiYgaSA+IHRvOyBpLS0pIHtcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIGZvciAoOyB3YWxrZXIgIT09IG51bGwgJiYgaSA+IGZyb207IGktLSwgd2Fsa2VyID0gd2Fsa2VyLnByZXYpIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5ub2Rlcykge1xuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggLSAxXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggKyBzdGFydDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgc3RhcnQ7IGkrKykge1xuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cblxuICB2YXIgcmV0ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IHdhbGtlciAmJiBpIDwgZGVsZXRlQ291bnQ7IGkrKykge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgICB3YWxrZXIgPSB0aGlzLnJlbW92ZU5vZGUod2Fsa2VyKVxuICB9XG4gIGlmICh3YWxrZXIgPT09IG51bGwpIHtcbiAgICB3YWxrZXIgPSB0aGlzLnRhaWxcbiAgfVxuXG4gIGlmICh3YWxrZXIgIT09IHRoaXMuaGVhZCAmJiB3YWxrZXIgIT09IHRoaXMudGFpbCkge1xuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2Fsa2VyID0gaW5zZXJ0KHRoaXMsIHdhbGtlciwgbm9kZXNbaV0pXG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQgPSB0aGlzLmhlYWRcbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWxcbiAgZm9yICh2YXIgd2Fsa2VyID0gaGVhZDsgd2Fsa2VyICE9PSBudWxsOyB3YWxrZXIgPSB3YWxrZXIucHJldikge1xuICAgIHZhciBwID0gd2Fsa2VyLnByZXZcbiAgICB3YWxrZXIucHJldiA9IHdhbGtlci5uZXh0XG4gICAgd2Fsa2VyLm5leHQgPSBwXG4gIH1cbiAgdGhpcy5oZWFkID0gdGFpbFxuICB0aGlzLnRhaWwgPSBoZWFkXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGluc2VydCAoc2VsZiwgbm9kZSwgdmFsdWUpIHtcbiAgdmFyIGluc2VydGVkID0gbm9kZSA9PT0gc2VsZi5oZWFkID9cbiAgICBuZXcgTm9kZSh2YWx1ZSwgbnVsbCwgbm9kZSwgc2VsZikgOlxuICAgIG5ldyBOb2RlKHZhbHVlLCBub2RlLCBub2RlLm5leHQsIHNlbGYpXG5cbiAgaWYgKGluc2VydGVkLm5leHQgPT09IG51bGwpIHtcbiAgICBzZWxmLnRhaWwgPSBpbnNlcnRlZFxuICB9XG4gIGlmIChpbnNlcnRlZC5wcmV2ID09PSBudWxsKSB7XG4gICAgc2VsZi5oZWFkID0gaW5zZXJ0ZWRcbiAgfVxuXG4gIHNlbGYubGVuZ3RoKytcblxuICByZXR1cm4gaW5zZXJ0ZWRcbn1cblxuZnVuY3Rpb24gcHVzaCAoc2VsZiwgaXRlbSkge1xuICBzZWxmLnRhaWwgPSBuZXcgTm9kZShpdGVtLCBzZWxmLnRhaWwsIG51bGwsIHNlbGYpXG4gIGlmICghc2VsZi5oZWFkKSB7XG4gICAgc2VsZi5oZWFkID0gc2VsZi50YWlsXG4gIH1cbiAgc2VsZi5sZW5ndGgrK1xufVxuXG5mdW5jdGlvbiB1bnNoaWZ0IChzZWxmLCBpdGVtKSB7XG4gIHNlbGYuaGVhZCA9IG5ldyBOb2RlKGl0ZW0sIG51bGwsIHNlbGYuaGVhZCwgc2VsZilcbiAgaWYgKCFzZWxmLnRhaWwpIHtcbiAgICBzZWxmLnRhaWwgPSBzZWxmLmhlYWRcbiAgfVxuICBzZWxmLmxlbmd0aCsrXG59XG5cbmZ1bmN0aW9uIE5vZGUgKHZhbHVlLCBwcmV2LCBuZXh0LCBsaXN0KSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSkge1xuICAgIHJldHVybiBuZXcgTm9kZSh2YWx1ZSwgcHJldiwgbmV4dCwgbGlzdClcbiAgfVxuXG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Lm5leHQgPSB0aGlzXG4gICAgdGhpcy5wcmV2ID0gcHJldlxuICB9IGVsc2Uge1xuICAgIHRoaXMucHJldiA9IG51bGxcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5wcmV2ID0gdGhpc1xuICAgIHRoaXMubmV4dCA9IG5leHRcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5leHQgPSBudWxsXG4gIH1cbn1cblxudHJ5IHtcbiAgLy8gYWRkIGlmIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvciBpcyBwcmVzZW50XG4gIHJlcXVpcmUoJy4vaXRlcmF0b3IuanMnKShZYWxsaXN0KVxufSBjYXRjaCAoZXIpIHt9XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqICBQcm9vZnNjYXBlIEJyb3dzZXIgRXh0ZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDIwLTIwMjIgUHJvb2ZzY2FwZSBjb250cmlidXRvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7ICAgICAgICAgICpcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICAgICAgICAgKlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSAgICAgICpcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsICAgICAgICAqXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICpcbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kICAgICAgKlxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qXG4gKiBXZSBpbXBsZW1lbnQgYSBkZWRpY2F0ZWQgb24tZGlzayBjYWNoZSBmb3IgUERGcywgdXNpbmcgdGhlIGBzdG9yYWdlYCBBUEkuXG4gKlxuICogV2UgZW1wbG95IGEgbXVsdGktcGFydCBkZXNpZ24sIHdoZXJlIHRoZSBhY3R1YWwgUERGIGJ5dGUgYXJyYXlzIGFyZSBzdG9yZWRcbiAqIHNlcGFyYXRlbHkgZnJvbSB3aGF0IHdlIGNhbGwgdGhlIFwiY2FjaGUgaW5kZXgsXCIgdGhlIGxhdHRlciBpbmNsdWRpbmcgYWxsIHRoZVxuICogaW5mb3JtYXRpb24gX2Fib3V0XyB0aGUgUERGcywgbGlrZSBsYXN0IGFjY2VzcyB0aW1lLCB1c2VyLXN1cHBsaWVkIGNvbW1lbnRzLFxuICogZXRjLlxuICpcbiAqIFRoaXMgYWxsb3dzIHRoZSBpbmRleCB0byBiZSBrZXB0IGluIG1lbW9yeSBzaW5jZSBpdCBpcyBzbWFsbCwgd2hpbGVcbiAqIHRoZSAocG90ZW50aWFsbHkgdmVyeSBsYXJnZSkgUERGIGJ5dGUgYXJyYXlzIHJlc2lkZSBvbiBkaXNrLlxuICpcbiAqIFJhdGlvbmFsZTpcbiAqIE9uZSBvciB0d28gUERGcyBjYWNoZWQgaW4gbWVtb3J5IG1pZ2h0IGJlIGZpbmUsIGJ1dCB0aGF0IGlzIGFscmVhZHkgaW1wbGVtZW50ZWRcbiAqIGJ5IHRoZSBgUGRmTWFuYWdlcmAgY2xhc3MgaW4gdGhlIFByb29mc2NhcGUgSVNFIGFwcC4gVGhpcyBicm93c2VyIGV4dGVuc2lvbiBjYWNoZSxcbiAqIG9uIHRoZSBvdGhlciBoYW5kLCBpcyBleHBlY3RlZCB0byBiZSBvbiB0aGUgb3JkZXIgb2YgMTAwIE1CIGluIHNpemUgKG9yIGV2ZW4gbGFyZ2VyKSxcbiAqIGFuZCBpcyBpbnRlbmRlZCBmb3IgbG9uZy10ZXJtIHN0b3JhZ2UuIFRvIHNpbXBseSBsb2FkIGFsbCBvZiB0aGF0IGludG8gbWVtb3J5IGNvdWxkXG4gKiByZXByZXNlbnQgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHdlYiBicm93c2VyJ3MgbWVtb3J5IHByb2ZpbGUsIGFuZCB0aGF0IGlzIG5vdFxuICogc29tZXRoaW5nIHRoYXQgc2hvdWxkIGp1c3QgXCJoYXBwZW5cIiB3aXRob3V0IHRoZSB1c2VyJ3Mga25vd2xlZGdlLlxuICovXG5cbmNvbnN0IGJyb3dzZXIgPSByZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpO1xuY29uc3QgTFJVID0gcmVxdWlyZShcImxydS1jYWNoZVwiKTtcblxuaW1wb3J0IHsgbm93U3RhbXBMZXggfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IENBQ0hFX0lOREVYX05BTUUgPSAnY2FjaGU6aW5kZXgnO1xuY29uc3QgQ0FDSEVfQllURVNfUFJFRklYID0gJ2NhY2hlOmJ5dGVzOic7XG5jb25zdCBDQUNIRV9JTklUSUFMX01BWF9NQiA9IDEwMDtcblxuXG4vKlxuICogUmVzdG9yZSB0aGUgQ2FjaGVJbmRleCBmcm9tIGl0cyByZXByZXNlbnRhdGlvbiBpbiBzdG9yYWdlLiBUaGlzIGlzIGhvdyBpdCBpc1xuICogcHJlc2VydmVkIGFjcm9zcyBicm93c2VyIHJlc3RhcnRzLiBJZiBzdGFydGluZyB1cCBmb3IgdGhlIGZpcnN0IHRpbWUgZXZlciwgd2VcbiAqIGdldCBhbiBlbXB0eSBjYWNoZSB3aXRoIHRoZSBkZWZhdWx0IGNhcGFjaXR5LlxuICpcbiAqIEByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgQ2FjaGVJbmRleCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gcmVzdG9yZUNhY2hlSW5kZXhGcm9tU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChDQUNIRV9JTkRFWF9OQU1FKS50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgY29uc3QgaW5mbyA9IGl0ZW1zW0NBQ0hFX0lOREVYX05BTUVdIHx8IHt9O1xuICAgICAgICByZXR1cm4gbG9hZENhY2hlSW5kZXgoaW5mbyk7XG4gICAgfSk7XG59XG5cbi8qXG4gKiBSZWNvbnN0cnVjdCBhIGBDYWNoZUluZGV4YCBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBvZiB0aGUga2luZCByZXR1cm5lZFxuICogYnkgYENhY2hlSW5kZXguZHVtcCgpYCwgZXhjZXB0IHRoYXQgYWxsIGZpZWxkcyBhcmUgb3B0aW9uYWwuXG4gKlxuICogSWYgYG1heE1CYCBpcyBvbWl0dGVkLCB3ZSB1c2UgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBJZiBgbHJ1RHVtcGAgaXMgb21pdHRlZCwgdGhlIGNhY2hlIHN0YXJ0cyBvdXQgZW1wdHkuXG4gKlxuICogQHJldHVybjogQ2FjaGVJbmRleCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbG9hZENhY2hlSW5kZXgoZHVtcCkge1xuICAgIGNvbnN0IGNhY2hlID0gbmV3IENhY2hlSW5kZXgoZHVtcC5tYXhNQiB8fCBDQUNIRV9JTklUSUFMX01BWF9NQik7XG4gICAgaWYgKGR1bXAuaGFzT3duUHJvcGVydHkoJ2xydUR1bXAnKSkge1xuICAgICAgICBjYWNoZS5scnUubG9hZChkdW1wLmxydUR1bXApO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGU7XG59XG5cbi8qXG4gKiBBIGNsYXNzIHRvIHJlcHJlc2VudCBhbGwgdGhlIGNhY2hlIGluZGV4IGluZm9ybWF0aW9uLlxuICpcbiAqIEF0IGl0cyBjb3JlLCB0aGlzIGNsYXNzIHVzZXMgYW4gTFJVIGNhY2hlIChgdGhpcy5scnVgKSBhcyBpbXBsZW1lbnRlZCBieSB0aGUgYGxydS1jYWNoZWAgbnBtIHBhY2thZ2UuXG4gKiBTZWUgPGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2xydS1jYWNoZT4uXG4gKiBUaGlzIGlzIHRoZSBjb21wb25lbnQgdGhhdCBhY3R1YWxseSBkZWNpZGVzIHdoaWNoIFBERnMgYXJlIG1vc3QvbGVhc3QgcmVjZW50bHkgdXNlZCwgYW5kIHRlbGxzIHVzIHdoZW5cbiAqIGl0IGlzIHRpbWUgdG8gZHJvcCBhbiBlbnRyeS5cbiAqXG4gKiBUaGUgTFJVIGNhY2hlIGlzIGltcGxlbWVudGVkIGxpa2UgYSBNYXAgKGtleXMgJiB2YWx1ZXMpLCBhbmQgaW4gYHRoaXMubHJ1YCB3ZSB1c2UgUERGIFVSTHMgKDxzdHJpbmc+KSBhc1xuICoga2V5cywgd2hpbGUgdmFsdWVzIGFyZSBvYmplY3RzIG9mIHRoZSBmb3JtOlxuICoge1xuICogICB1cmw6IDxzdHJpbmc+IHRoZSBVUkwgb2YgdGhlIFBERixcbiAqICAgc2l6ZTogPGludD4gdGhlIHNpemUgb2YgdGhlIFBERiBpbiBieXRlcyxcbiAqICAgbXRpbWU6IDxzdHJpbmc+IHRpbWVzdGFtcCBhdCB0aW1lIG9mIGluaXRpYWwgc3RvcmFnZSxcbiAqICAgYXRpbWU6IDxzdHJpbmc+IHRpbWVzdGFtcCBhdCB0aW1lIG9mIG1vc3QgcmVjZW50IGFjY2VzcyxcbiAqICAgc3RvcmVkOiA8Ym9vbD4gc3RhcnRzIG91dCBmYWxzZTsgZ29lcyB0byB0cnVlIGFmdGVyIHRoZSBmdWxsIGJ5dGUgYXJyYXkgaGFzIGJlZW4gc3RvcmVkLFxuICogICBjb21tZW50OiA8c3RyaW5nPiBvcHRpb25hbCBwbGFjZSBmb3IgdXNlciB0byByZWNvcmQgbm90ZXMgKGUuZy4gdGl0bGUgYW5kIGF1dGhvciBvZiBQREYpXG4gKiB9XG4gKlxuICogTWVhbndoaWxlLCBpbiBgdGhpcy5tYXhNQmAgd2Uga2VlcCB0aGUgY2FwYWNpdHkgb2YgdGhlIGNhY2hlLlxuICogVGhpcyBjbGFzcyBhbHNvIHByb3ZpZGVzIHZhcmlvdXMgY29udmVuaWVuY2UgbWV0aG9kcy5cbiAqXG4gKiBUaGVvcmV0aWNhbGx5IGFuIExSVSBjYWNoZSBpbnN0YW5jZSBhbG9uZSBfY291bGRfIGhhdmUgYmVlbiBzdWZmaWNpZW50LCBidXQgdGhpcyBzZWVtZWQgaW5hZHZpc2FibGVcbiAqIHNpbmNlIHRoZSBjYXBhY2l0eSBvZiB0aGUgTFJVIGNhY2hlIGlzIF9ub3RfIGN1cnJlbnRseSBhIHBhcnQgb2YgaXRzIEFQSS4gSXQgY291bGQgYmUgcmVhZCwgYnV0IHRoYXRcbiAqIHdvdWxkIGJlIGEgaGFjaywgYW5kIHdvdWxkIGNvbW1pdCB1cyB0byBjb21wYXRpYmlsaXR5IHRlc3RpbmcgZXZlbiBvbiBtaW5vciB2ZXJzaW9uIHVwZGF0ZXMuXG4gKiBQbHVzIG91ciBjbGFzcydzIGNvbnZlbmllbmNlIG1ldGhvZHMgYXJlLCB3ZWxsLCBjb252ZW5pZW50LlxuICovXG5jbGFzcyBDYWNoZUluZGV4IHtcblxuICAgIC8qXG4gICAgICogbWF4TUI6IHRoZSBkZXNpcmVkIGNhcGFjaXR5IG9mIHRoZSBjYWNoZSwgaW4gbWVnYWJ5dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1heE1CKSB7XG4gICAgICAgIHRoaXMubWF4TUIgPSBtYXhNQjtcbiAgICAgICAgLyogTm90ZTogRG8gTk9UIHNldCBgdXBkYXRlQWdlT25HZXRgLiBSZWFkaW5nIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgTFJVIGNsYXNzIChzZWUgbGluayBhYm92ZSksIHlvdVxuICAgICAgICAgKiBtaWdodCB0aGluayBzZXR0aW5nIHRoaXMgb3B0aW9uIHdvdWxkIGJlIFwib24gdGhlIHNhZmUgc2lkZVwiIGluIHlvdXIgZ29hbCB0byBtYWtlIGEgY2FjaGUgd2hlcmUgZWxlbWVudHNcbiAgICAgICAgICogbmV2ZXIgZXhwaXJlLiBUaGlzIGlzIGNvbXBsZXRlbHkgd3JvbmcuIEluIGZhY3QgaXQgbWFrZXMgaXQgc28gdGhhdCBpZiB5b3UgZXZlciBgZ2V0YCBhbiBlbGVtZW50IG9mIHRoZVxuICAgICAgICAgKiBjYWNoZSwgYW5kIHRoZW4gZHVtcCBhbmQgcmVsb2FkIGZyb20gZHVtcCwgdGhlbiB0aGF0IGVsZW1lbnQgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGJlIHJlamVjdGVkIGZyb20gdGhlXG4gICAgICAgICAqIHJlc3RvcmVkIGNhY2hlLiBJLmUuIGR1cmluZyByZWxvYWQgaXQgd2lsbCBiZSB2aWV3ZWQgYXMgZXhwaXJlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHdheSB0byBoYXZlIGVsZW1lbnRzIHRoYXQgbmV2ZXIgZXhwaXJlIGlzIHNpbXBseSB0byBgc2V0YCB0aGVtIHdpdGggYG1heEFnZWAgKGkuZS4gdGhlIHRoaXJkIGFyZ3VtZW50XG4gICAgICAgICAqIHRvIGBzZXRgKSBlcXVhbCB0byBgMGAuIE9yIGRvbid0IHBhc3MgYSBgbWF4QWdlYCBhcmd1bWVudCBhdCBhbGwgd2hlbiBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIGNhY2hlLiAoQnV0XG4gICAgICAgICAqIHNldHRpbmcgYDBgIG1ha2VzIHlvdXIgaW50ZW50aW9uIGV4cGxpY2l0LCB3aGljaCBpcyBnb29kLikgQWxzbyBkb24ndCBzZXQgYSBgbWF4QWdlYCB3aGVuIGNvbnN0cnVjdGluZ1xuICAgICAgICAgKiB0aGUgTFJVIGluc3RhbmNlIGl0c2VsZi5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IGFyZSBoYXZpbmcgYW4gaXNzdWUsIGV4YW1pbmUgdGhlIGNhY2hlIGR1bXAgYXJyYXkuIFRoZSBgZWAgYXR0cmlidXRlIG9mIGVhY2ggZW50cnkgc2hvdWxkIGJlIGAwYC5cbiAgICAgICAgICogSWYgaXQgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIHRoYXQgZW50cnkgaGFzIGFuIGV4cGlyYXRpb24gZGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubHJ1ID0gbmV3IExSVSh7XG4gICAgICAgICAgICBtYXg6IG1heE1CICogMTA0ODU3NixcbiAgICAgICAgICAgIGxlbmd0aDogKHZhbHVlLCBrZXkpID0+IHZhbHVlLnNpemUsXG4gICAgICAgICAgICBkaXNwb3NlOiB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm4gYSBzZXJpYWxpemFibGUgb2JqZWN0IGZyb20gd2hpY2ggdGhlIHNhbWUgQ2FjaGVJbmRleCBjYW4gYmUgcmVjb25zdHJ1Y3RlZC5cbiAgICAgKi9cbiAgICBkdW1wKCkge1xuICAgICAgICBjb25zdCBscnVEdW1wID0gdGhpcy5scnUuZHVtcCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdscnVEdW1wJywgbHJ1RHVtcCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXhNQjogdGhpcy5tYXhNQixcbiAgICAgICAgICAgIGxydUR1bXA6IGxydUR1bXAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXNwb25kIHRvIHRoZSBmYWN0IHRoYXQgYSBQREYgaXMgYmVpbmcgZHJvcHBlZCBmcm9tIG91ciBMUlUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBwYXJhbSB1cmw6IHRoZSBVUkwgb2YgdGhlIGRyb3BwZWQgUERGLlxuICAgICAqL1xuICAgIGRpc3Bvc2UodXJsKSB7XG4gICAgICAgIC8qIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd2UgYXJlIGFjdHVhbGx5IGVqZWN0aW5nIHRoaXMgUERGLCBvciB3aGV0aGVyXG4gICAgICAgICAqIGl0IGlzIHNpbXBseSBcImZhbGxpbmcgdGhyb3VnaCxcIiBpLmUuIGJlaW5nIHJlamVjdGVkIG91dHJpZ2h0IGJlY2F1c2UgaXQgaXMgdG9vXG4gICAgICAgICAqIGJpZyBmb3IgdGhlIGNhY2hlLiBJbiB0aGUgZm9ybWVyIGNhc2UsIHRoZSBVUkwgd2lsbCBzdGlsbCBhdCB0aGlzIHRpbWUgYmUgYVxuICAgICAgICAgKiBrZXkgaW4gdGhlIGNhY2hlOyBpbiB0aGUgbGF0dGVyIGNhc2UsIGl0IGhhcyBuZXZlciBiZWVuIGEga2V5IGF0IGFsbC5cbiAgICAgICAgICovXG4gICAgICAgIGlmICghdGhpcy5scnUuaGFzKHVybCkpIHtcbiAgICAgICAgICAgIC8vIEl0J3MgYSBcImZhbGwtdGhyb3VnaFwiLiBOb3RoaW5nIHRvIGRvLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYW4gYWN0dWFsIGVqZWN0aW9uLCBzbyB3ZSBkbyBuZWVkIHRvIHB1cmdlIGEgYnl0ZSBhcnJheSBmcm9tIHN0b3JhZ2UuXG4gICAgICAgIHJlbW92ZUJ5dGVBcnJheSh1cmwpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEFQSVxuXG4gICAgLypcbiAgICAgKiBSZWNvcmQgdGhpcyBpbmRleCBpbiBzdG9yYWdlLiBUaGlzIGFsbG93cyB1cyB0byByZXN0b3JlIGl0IGFmdGVyIGFcbiAgICAgKiBicm93c2VyIHJlc3RhcnQuIEl0IHNob3VsZCBiZSBjb21taXR0ZWQgYWZ0ZXIgZXZlcnkgdXBkYXRlLlxuICAgICAqXG4gICAgICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW5mbyBoYXMgYmVlbiBjb21taXR0ZWQgdG8gc3RvcmFnZS5cbiAgICAgKi9cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgICAgIFtDQUNIRV9JTkRFWF9OQU1FXTogdGhpcy5kdW1wKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgYSBQREYgdG8gdGhlIGluZGV4LlxuICAgICAqXG4gICAgICogcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIFBERlxuICAgICAqIHBhcmFtIHNpemUge2ludH0gdGhlIGxlbmd0aCBvZiB0aGUgUERGIGJ5dGUgYXJyYXlcbiAgICAgKlxuICAgICAqIHJldHVybjogYm9vbGVhbiBzYXlpbmcgd2hldGhlciB0aGUgUERGIHdhcyBhY3R1YWxseSBhY2NlcHRlZCAodHJ1ZSksIG9yXG4gICAgICogICB3YXMgcmVqZWN0ZWQgZm9yIGJlaW5nIGxhcmdlciB0aGFuIHRoZSBjYWNoZSBjYXBhY2l0eS5cbiAgICAgKi9cbiAgICBhZGRQZGYodXJsLCBzaXplKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5vd1N0YW1wTGV4KCk7XG4gICAgICAgIHRoaXMubHJ1LnNldCh1cmwsIHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgIG10aW1lOiBub3csXG4gICAgICAgICAgICBhdGltZTogbm93LFxuICAgICAgICAgICAgc3RvcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnXG4gICAgICAgIH0sIDApO1xuICAgICAgICBjb25zdCBhY2NlcHRlZCA9IHRoaXMubHJ1Lmhhcyh1cmwpO1xuICAgICAgICBpZiAoYWNjZXB0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY2VwdGVkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIG9uZSBvciBtb3JlIFBERnMgZnJvbSB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBwYXJhbSB1cmxzOiBpdGVyYWJsZSBvZiBVUkxzIHRvIGJlIHJlbW92ZWQuXG4gICAgICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHJlbW92ZVBkZnMoe3VybHN9KSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgICAgIGZvciAobGV0IHVybCBvZiB1cmxzKSB7XG4gICAgICAgICAgICB0aGlzLmxydS5kZWwodXJsKTtcbiAgICAgICAgICAgIHRhc2tzLnB1c2gocmVtb3ZlQnl0ZUFycmF5KHVybCkpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tzLnB1c2godGhpcy5jb21taXQoKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0YXNrcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgdGhlIGNvbW1lbnQgdGV4dCBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICogRG8gX25vdF8gdXBkYXRlIGl0cyBcInJlY2VudG5lc3NcIi5cbiAgICAgKlxuICAgICAqIHBhcmFtIHVybDogdGhlIFVSTCBmb3Igd2hpY2ggdGhlIGNvbW1lbnQgaXMgdG8gYmUgc2V0XG4gICAgICogcGFyYW0gY29tbWVudDogdGhlIGRlc2lyZWQgY29tbWVudFxuICAgICAqIHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBzZXRDb21tZW50KHt1cmwsIGNvbW1lbnR9KSB7XG4gICAgICAgIHRoaXMubHJ1LnBlZWsodXJsKS5jb21tZW50ID0gY29tbWVudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWl0KCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBY2Nlc3MgdGhlIGluZm8gZm9yIGEgZ2l2ZW4gVVJMLlxuICAgICAqIFRoaXMgYWNjZXNzIHVwZGF0ZXMgdGhlIGVudHJ5J3MgXCJyZWNlbnRuZXNzXCIgaW4gdGhlIExSVSBjYWNoZSBhcyB3ZWxsIGFzIHRoZVxuICAgICAqIGBhdGltZWAgcHJvcGVydHkgb2YgdGhlIGluZm8gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybDoge3N0cmluZ30gdGhlIFVSTCBvZiB0aGUgZGVzaXJlZCBpbmZvXG4gICAgICogQHJldHVybjogdGhlIGNvcnJlc3BvbmRpbmcgaW5mbyBvYmplY3QgaWYgcHJlc2VudCBpbiB0aGUgY2FjaGU7IGVsc2UgdW5kZWZpbmVkXG4gICAgICovXG4gICAgYWNjZXNzKHVybCkge1xuICAgICAgICAvLyBDYWxsaW5nIGBnZXRgIG9uIHRoZSBMUlUgY2FjaGUgdXBkYXRlcyB0aGUgZW50cnkncyByZWNlbnRuZXNzIGlmIHByZXNlbnQ7XG4gICAgICAgIC8vIGVsc2UgcmV0dXJucyB1bmRlZmluZWQuXG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmxydS5nZXQodXJsKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIGluZm8uYXRpbWUgPSBub3dTdGFtcExleCgpO1xuICAgICAgICAgICAgdGhpcy5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlY29yZCB0aGUgZmFjdCB0aGF0IHRoZSBieXRlIGFycmF5IGZvciBhIGdpdmVuIFVSTCBoYXMgYmVlbiBzdG9yZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsOiB7c3RyaW5nfSB0aGUgVVJMIG9mIHRoZSBQREYgd2hvc2UgYnl0ZXMgaGF2ZSBiZWVuIHN0b3JlZFxuICAgICAqIEByZXR1cm46IHRoZSBjb3JyZXNwb25kaW5nIGluZm8gb2JqZWN0IGlmIHByZXNlbnQgaW4gdGhlIGNhY2hlOyBlbHNlIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIG5vdGVBcnJheVN0b3JlZCh1cmwpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMubHJ1LmdldCh1cmwpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaW5mby5zdG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBhIHByZXZpZXcgb2Ygd2hhdCB3b3VsZCBoYXBwZW4gaWYgYSBuZXcgY2FwYWNpdHkgd2VyZSBzZXQgZm9yIHRoZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIHBhcmFtIG51bV9tYjogdGhlIHByb3Bvc2VkIG51bWJlciBvZiBNQiBmb3IgdGhlIG5ldyBjYXBhY2l0eS5cbiAgICAgKiByZXR1cm46IFNldCBvZiBVUkxzIHRoYXQgd291bGQgYmUgcHVyZ2VkIGlmIHRoYXQgc2V0dGluZyB3ZXJlIG1hZGUuXG4gICAgICovXG4gICAgcHJldmlld05ld01heE1CKHtudW1fbWJ9KSB7XG4gICAgICAgIGNvbnN0IGR1bW15TFJVID0gbmV3IExSVSh7XG4gICAgICAgICAgICBtYXg6IG51bV9tYiAqIDEwNDg1NzYsXG4gICAgICAgICAgICBsZW5ndGg6ICh2YWx1ZSwga2V5KSA9PiB2YWx1ZS5zaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZHVtcCA9IHRoaXMubHJ1LmR1bXAoKTtcbiAgICAgICAgZHVtbXlMUlUubG9hZChkdW1wKTtcbiAgICAgICAgY29uc3QgY3VycmVudFVybFNldCA9IG5ldyBTZXQodGhpcy5scnUua2V5cygpKTtcbiAgICAgICAgLy8gVGhlIGtleXMgaW4gdGhlIGR1bW15IGNhY2hlIGFyZSB0aG9zZSB0aGF0IHdvdWxkIGJlIHJldGFpbmVkLlxuICAgICAgICBjb25zdCByZXRhaW5lZFVybEFycmF5ID0gZHVtbXlMUlUua2V5cygpO1xuICAgICAgICBmb3IgKGxldCB1cmwgb2YgcmV0YWluZWRVcmxBcnJheSkge1xuICAgICAgICAgICAgY3VycmVudFVybFNldC5kZWxldGUodXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCeSBkZWxldGluZyB0aGUgVVJMcyB0aGF0IHdvdWxkIGJlIHJldGFpbmVkLCB3ZSBhcmUgbGVmdCB3aXRoXG4gICAgICAgIC8vIHRob3NlIHRoYXQgd291bGQgYmUgcHVyZ2VkLlxuICAgICAgICByZXR1cm4gY3VycmVudFVybFNldDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB0aGUgbWF4IHNpemUgb2YgdGhlIGNhY2hlIGluIG1lZ2FieXRlcy5cbiAgICAgKiBJdCBtYXkgYmUgYWR2aXNhYmxlIHRvIGNoZWNrIHRoZSByZXN1bHRzIGZpcnN0OyBzZWUgYHByZXZpZXdOZXdNYXhNQmAuXG4gICAgICpcbiAgICAgKiBwYXJhbSBudW1fbWI6IHRoZSBkZXNpcmVkIG51bWJlciBvZiBNQiBmb3IgdGhlIG1heCBzaXplLlxuICAgICAqIHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBzZXRNYXhNQih7bnVtX21ifSkge1xuICAgICAgICBjb25zdCB1cmxzVG9CZVB1cmdlZCA9IHRoaXMucHJldmlld05ld01heE1CKHtudW1fbWJ9KTtcbiAgICAgICAgY29uc3QgdGhpc0luZGV4ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlUGRmcyh7dXJsczogdXJsc1RvQmVQdXJnZWR9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXNJbmRleC5tYXhNQiA9IG51bV9tYjtcbiAgICAgICAgICAgIGNvbnN0IGR1bXAgPSB0aGlzSW5kZXguZHVtcCgpO1xuICAgICAgICAgICAgY29uc3QgZHVtbXlJbmRleCA9IGxvYWRDYWNoZUluZGV4KGR1bXApO1xuICAgICAgICAgICAgdGhpc0luZGV4LmxydSA9IGR1bW15SW5kZXgubHJ1O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNJbmRleC5jb21taXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm4gaW5mbyBhYm91dCB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBjYWNoZSBpbmZvIGlzOlxuICAgICAqIHtcbiAgICAgKiAgIGN1cnJlbnRTaXplOiA8aW50PiBjdXJyZW50IHNpemUgb2YgdGhlIGNhY2hlIGluIGJ5dGVzXG4gICAgICogICBtYXhTaXplOiA8aW50PiB0aGUgbWF4aW11bSBhbGxvd2VkIHNpemUgb2YgdGhlIGNhY2hlIGluIGJ5dGVzXG4gICAgICogICBoaXN0b3J5OiA8QXJyYXlbT2JqZWN0XT4gYXJyYXkgb2YgaW5mb3MgYWJvdXQgdGhlIHN0b3JlZCBQREZzLCBvcmRlcmVkIGJ5IGFjY2VzcyB0aW1lLFxuICAgICAqICAgICAgICAgICAgZnJvbSBtb3N0IHJlY2VudCB0byBsZWFzdCByZWNlbnRcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIGVhY2ggUERGIGluZm8gaW4gdGhlIGhpc3RvcnkgYXJyYXkgaXM6XG4gICAgICoge1xuICAgICAqICAgdXJsOiA8c3RyaW5nPiB0aGUgVVJMIG9mIHRoZSBQREYsXG4gICAgICogICBzaXplOiA8aW50PiB0aGUgc2l6ZSBvZiB0aGUgUERGIGluIGJ5dGVzLFxuICAgICAqICAgbXRpbWU6IDxzdHJpbmc+IHRpbWVzdGFtcCBhdCB0aW1lIG9mIGluaXRpYWwgc3RvcmFnZSxcbiAgICAgKiAgIGF0aW1lOiA8c3RyaW5nPiB0aW1lc3RhbXAgYXQgdGltZSBvZiBtb3N0IHJlY2VudCBhY2Nlc3MsXG4gICAgICogICBzdG9yZWQ6IDxib29sPiBzdGFydHMgb3V0IGZhbHNlOyBnb2VzIHRvIHRydWUgYWZ0ZXIgdGhlIGZ1bGwgYnl0ZSBhcnJheSBoYXMgYmVlbiBzdG9yZWQsXG4gICAgICogICBjb21tZW50OiA8c3RyaW5nPiBvcHRpb25hbCBwbGFjZSBmb3IgdXNlciB0byByZWNvcmQgbm90ZXMgKGUuZy4gdGl0bGUgYW5kIGF1dGhvciBvZiBQREYpXG4gICAgICogfVxuICAgICAqXG4gICAgICogQWxsIGluZm8gaXMgcmV0dXJuZWQgXCJieSB2YWx1ZVwiIChub3QgXCJieSByZWZlcmVuY2VcIikgYW5kIGNvbnN1bWVycyBtYXkgYWx0ZXIgd2l0aCBpbXB1bml0eS5cbiAgICAgKi9cbiAgICBnZXRDYWNoZUluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50U2l6ZTogdGhpcy5scnUubGVuZ3RoLFxuICAgICAgICAgICAgbWF4U2l6ZTogdGhpcy5tYXhNQiAqIDEwNDg1NzYsXG4gICAgICAgICAgICBoaXN0b3J5OiB0aGlzLmxydS52YWx1ZXMoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDUlVEIGFjdGlvbnMgZm9yIFBERiBieXRlIGFycmF5c1xuXG4vKlxuICogUmV0cmlldmUgYSBQREYgYnl0ZSBhcnJheSB3aGljaCB5b3Uga25vdyBpcyBwcmVzZW50ICh0aHJvd3NcbiAqIHVuY2F1Z2h0IGV4Y2VwdGlvbiBpZiBub3QgcHJlc2VudCkuXG4gKlxuICogcGFyYW0gdXJsOiB0aGUgVVJMIG9mIHRoZSBkZXNpcmVkIFBERlxuICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVzaXJlZCBieXRlIGFycmF5IChhcyBwbGFpbiBBcnJheSlcbiAqL1xuZnVuY3Rpb24gZ2V0Qnl0ZUFycmF5KHVybCkge1xuICAgIGNvbnN0IGFycmF5S2V5ID0gQ0FDSEVfQllURVNfUFJFRklYICsgdXJsO1xuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGFycmF5S2V5KS50aGVuKGl0ZW1zID0+IGl0ZW1zW2FycmF5S2V5XSk7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGJ5dGUgYXJyYXkgZm9yIGEgVVJMLlxuICpcbiAqIHBhcmFtIHVybDogdGhlIFVSTCB3aG9zZSBieXRlIGFycmF5IGlzIGJlaW5nIHNldC5cbiAqIHBhcmFtIGJ5dGVBcnJheTogdGhlIGJ5dGUgYXJyYXkgdG8gYmUgcmVjb3JkZWQuIE1heSBiZSBhIFVpbnQ4QXJyYXkgb3IgYSBwbGFpbiBBcnJheSBvZiBpbnRzLlxuICogcGFyYW0gY2FjaGVJbmRleDogYSBDYWNoZUluZGV4IGluc3RhbmNlIGluIHdoaWNoIHRoZSBmYWN0IG9mIGJ5dGUgYXJyYXkgc3RvcmFnZSBzaG91bGQgYmUgbm90ZWQuXG4gKiByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gKi9cbmZ1bmN0aW9uIHNldEJ5dGVBcnJheSh1cmwsIGJ5dGVBcnJheSwgY2FjaGVJbmRleCkge1xuICAgIGNvbnN0IHBsYWluQXJyYXkgPSAoYnl0ZUFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkgPyBBcnJheS5mcm9tKGJ5dGVBcnJheSkgOiBieXRlQXJyYXk7XG4gICAgY29uc3QgYXJyYXlLZXkgPSBDQUNIRV9CWVRFU19QUkVGSVggKyB1cmw7XG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICBbYXJyYXlLZXldOiBwbGFpbkFycmF5XG4gICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgY2FjaGVJbmRleC5ub3RlQXJyYXlTdG9yZWQodXJsKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfSk7XG59XG5cbi8qXG4gKiBSZW1vdmUgdGhlIGJ5dGUgYXJyYXkgZm9yIGEgVVJMLlxuICpcbiAqIHBhcmFtIHVybDogdGhlIFVSTCB3aG9zZSBieXRlIGFycmF5IGlzIHRvIGJlIHJlbW92ZWQuXG4gKiByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJ5dGVBcnJheSh1cmwpIHtcbiAgICBjb25zdCBhcnJheUtleSA9IENBQ0hFX0JZVEVTX1BSRUZJWCArIHVybDtcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnJlbW92ZShhcnJheUtleSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQge1xuICAgIHJlc3RvcmVDYWNoZUluZGV4RnJvbVN0b3JhZ2UsXG4gICAgZ2V0Qnl0ZUFycmF5LFxuICAgIHNldEJ5dGVBcnJheSxcbiAgICByZW1vdmVCeXRlQXJyYXksXG59O1xuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAgUHJvb2ZzY2FwZSBCcm93c2VyIEV4dGVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFByb29mc2NhcGUgY29udHJpYnV0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyAgICAgICAgICAqXG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgICAgICAgICpcbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgICAgICAqXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCAgICAgICAgKlxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAqXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCAgICAgICpcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBicm93c2VyID0gcmVxdWlyZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiKTtcblxuY29uc3QgRVhUX0NPTkZJR19OQU1FID0gJ2V4dF9jb25maWcnO1xuXG5cbi8qIEN1cnJlbnQgQ29uZmlnIFZhcnNcbiAqXG4gKiByZWFkU3RvcmFnZUluQmcge2Jvb2x9IFNldHRpbmcgZm9yIHRoZSBDc0Rvd25sb2FkTWdyLlxuICogICBSZWFkaW5nIHN0b3JhZ2UgaW4gQ1MgaXMgZmFzdGVyIGluIGJvdGggYnJvd3NlcnMsIGJ1dCBpbiBGaXJlZm94IGl0IGNhdXNlcyB0aGUgbWFpbiB0aHJlYWRcbiAqICAgdG8gYmxvY2suXG4gKlxuICogZmV0Y2hJbkJnIHtib29sfSBTZXR0aW5nIGZvciB0aGUgQ3NEb3dubG9hZE1nci5cbiAqICAgSW4gQ2hyb21pdW0gdGhpcyBjYW4gb25seSBiZSB0cnVlLCBzaW5jZSBDaHJvbWl1bSBvbmx5IGFsbG93cyBjcm9zcy1vcmlnaW4gZmV0Y2ggaW4gdGhlIEJHUy5cbiAqICAgSW4gRmlyZWZveCB3ZSBzZXQgaXQgZmFsc2UgYnkgZGVmYXVsdCwgc2luY2UgRmlyZWZveCBhbGxvd3MgQ09GIGF0IENTLCBhbmQgdGhpcyBzcGVlZHNcbiAqICAgdGhpbmdzIHVwLlxuICpcbiAqIGRvRGVsYXllZFN0b3JhZ2Uge2Jvb2x9IFNldHRpbmcgZm9yIHRoZSBDc0Rvd25sb2FkTWdyLlxuICogICBUaGlzIGltcHJvdmVzIHBlcmZvcm1hbmNlIGluIGJvdGggRmlyZWZveCBhbmQgQ2hyb21pdW0uIEkga2VlcCBpdCBhcyBhIHNldHRpbmcsIGJ1dCBjdXJyZW50bHlcbiAqICAgc2VlIG5vIHJlYXNvbiB3aHkgeW91J2QgZXZlciB0dXJuIGl0IG9mZiBpbiBlaXRoZXIgYnJvd3Nlci4gSXQgbWVhbnMgYSBmZXRjaGVkIFBERiB3aWxsIG9wZW5cbiAqICAgaW4gdGhlIHZpZXdlciBiZWZvcmUgdGhlIEJHUyBzdGFydHMgd29ya2luZyBvbiBzdG9yaW5nIGl0LiBPdGhlcndpc2UgdGhlIHZpZXdlciBpcyBibGFuayB1bnRpbFxuICogICBhZnRlciB0aGUgUERGIGlzIHN0b3JlZCwgYW5kIHRoZSB1c2VyIHNwZW5kcyBzZXZlcmFsIGNvbXBsZXRlbHkgdW5uZWNlc3Nhcnkgc2Vjb25kcyBvZiB3YWl0aW5nXG4gKiAgIGZvciB0aGUgUERGIHRvIGFwcGVhciB2aXN1YWxseS5cbiAqXG4gKi9cblxuZnVuY3Rpb24gc3RvcmVDb25maWcoY29uZmlnKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICBbRVhUX0NPTkZJR19OQU1FXTogY29uZmlnXG4gICAgfSlcbn1cblxuLyogUmVzdG9yZSB0aGUgUEJFIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZyb20gc3RvcmFnZS5cbiAqXG4gKiBAcGFyYW0gYnJvd3Nlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGJyb3dzZXIgd2UncmUgaW4uIFRoaXMgaXMgdXNlZCBpblxuICogICAgY2FzZSB3ZSBuZWVkIHRvIHNldCBkZWZhdWx0IHZhbHVlcywgd2hpY2ggaGFwcGVucyBvbiBmaXJzdC1ldmVyIGxvYWQsIHdoZW5cbiAqICAgIHRoZXJlIGlzIG5vIHByaW9yIGRhdGEgaW4gc3RvcmFnZS5cbiAqIEByZXR1cm4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggb2JqZWN0IGluIHdoaWNoIGtleTogdmFsdWUgcGFpcnMgYXJlIHRoZVxuICogICAgY3VycmVudCBjb25maWcgdmFsdWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZVBiZUNvbmZpZ0Zyb21TdG9yYWdlKGJyb3dzZXJOYW1lKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoRVhUX0NPTkZJR19OQU1FKS50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW0VYVF9DT05GSUdfTkFNRV0gfHwgbWFrZURlZmF1bHRDb25maWdTZXR0aW5ncyhicm93c2VyTmFtZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZWZhdWx0Q29uZmlnU2V0dGluZ3MoYnJvd3Nlck5hbWUpIHtcbiAgICBjb25zdCBpc0ZpcmVmb3ggPSAoYnJvd3Nlck5hbWUgPT09IFwiRmlyZWZveFwiKTtcbiAgICBjb25zdCBjb25maWcgPSB7fTtcbiAgICBjb25maWcucmVhZFN0b3JhZ2VJbkJnID0gdHJ1ZTtcbiAgICBjb25maWcuZmV0Y2hJbkJnID0gIWlzRmlyZWZveDtcbiAgICBjb25maWcuZG9EZWxheWVkU3RvcmFnZSA9IHRydWU7XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuLyogUmVhZCB0aGUgdmFsdWUgb2YgYSBzaW5nbGUgY29uZmlnIHZhci5cbiAqXG4gKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgY29uZmlnIHZhciB3aG9zZSB2YWx1ZSB5b3Ugd2FudCB0byByZWFkLlxuICogQHBhcmFtIGJyb3dzZXJOYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBicm93c2VyIHdlJ3JlIGluLiBUaGlzIGlzXG4gKiAgIHJlcXVpcmVkIHNvIHRoYXQgZGVmYXVsdCB2YWx1ZXMgY2FuIGJlIHNldCBpZiBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgY29uZmlnIHZhci5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRDb25maWdWYXIobmFtZSwgYnJvd3Nlck5hbWUpIHtcbiAgICBjb25zdCBjb25maWcgPSBhd2FpdCByZXN0b3JlUGJlQ29uZmlnRnJvbVN0b3JhZ2UoYnJvd3Nlck5hbWUpO1xuICAgIGNvbnNvbGUuZGVidWcoJ3JlYWRpbmcgY29uZmlnIHZhcicsIG5hbWUsIGJyb3dzZXJOYW1lLCBjb25maWcpO1xuICAgIHJldHVybiBjb25maWdbbmFtZV07XG59XG5cbi8qIFNldCB0aGUgdmFsdWUgb2YgYSBzaW5nbGUgY29uZmlnIHZhci5cbiAqXG4gKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgY29uZmlnIHZhciB3aG9zZSB2YWx1ZSB5b3Ugd2FudCB0byBzZXQuXG4gKiBAcGFyYW0gdmFsdWUge3NlcmlhbGl6YWJsZX0gVGhlIHZhbHVlIHlvdSB3YW50IHRvIHNldC5cbiAqIEBwYXJhbSBicm93c2VyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgYnJvd3NlciB3ZSdyZSBpbi4gVGhpcyBpc1xuICogICByZXF1aXJlZCBzbyB0aGF0IHdlIGNhbiBmaXJzdCByZWFkIHRoZSBjdXJyZW50IGNvbmZpZy5cbiAqIEByZXR1cm4gcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIHRoZSB2YWx1ZSBoYXMgYmVlbiBzZXQuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRDb25maWdWYXIobmFtZSwgdmFsdWUsIGJyb3dzZXJOYW1lKSB7XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgcmVzdG9yZVBiZUNvbmZpZ0Zyb21TdG9yYWdlKGJyb3dzZXJOYW1lKTtcbiAgICBjb25maWdbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gc3RvcmVDb25maWcoY29uZmlnKTtcbn1cbiIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogIFByb29mc2NhcGUgQnJvd3NlciBFeHRlbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMiBQcm9vZnNjYXBlIGNvbnRyaWJ1dG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgICAgICAgICAgKlxuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gICAgICAgICAqXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlICAgICAgKlxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgICAgICAgICpcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gKlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgICAgICAqXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3QgYnJvd3NlciA9IHJlcXVpcmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIik7XG5cbmltcG9ydCB7Z2V0Qnl0ZUFycmF5LCBzZXRCeXRlQXJyYXl9IGZyb20gXCIuL2NhY2hlXCI7XG5pbXBvcnQgeyBMYWNraW5nSG9zdFBlcm1pc3Npb25FcnJvciB9IGZyb20gXCJicm93c2VyLXBlZXJzL3NyYy9lcnJvcnNcIjtcbmltcG9ydCB7IGZldGNoUGRmIH0gZnJvbSBcIi4vdXRpbFwiO1xuXG4vKlxuICogVGhpcyBpcyBhbiBhYnN0cmFjdCBjbGFzcywgcmVwcmVzZW50aW5nIHRoZSBnZW5lcmFsIHBhdHRlcm4gb2YgZmV0Y2hpbmcgUERGcyxcbiAqIHN0b3JpbmcgdGhlbSBpbiB0aGUgY2FjaGUsIGFuZCByZXRyaWV2aW5nIHRoZW0gZnJvbSB0aGUgY2FjaGUuIEl0IGlzIG5vdCBtZWFudFxuICogdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHN1YmNsYXNzZWQuXG4gKlxuICogVGhlIGFic3RyYWN0IG1ldGhvZHMgdGhhdCBNVVNUIGJlIG92ZXJyaWRkZW4gYnkgdXNhYmxlIHN1YmNsYXNzZXMgYXJlIGNsZWFybHlcbiAqIHNldCBvZmYgYXQgdGhlIGVuZCBvZiB0aGUgY2xhc3MgZGVjbGFyYXRpb24uIE90aGVyIG1ldGhvZHMgTUFZIGJlIG92ZXJyaWRkZW5cbiAqIGFzIG5lZWRlZC5cbiAqL1xuY2xhc3MgQWJzdHJhY3REb3dubG9hZE1nciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyogV3JpdGluZyB0byBzdG9yYWdlIGlzIHZlcnkgc2xvdyBpbiBGaXJlZm94LCBhbmQgbm90IGV4YWN0bHkgZmFzdCBpbiBDaHJvbWUgZWl0aGVyLlxuICAgICAgICAgKiBJbiBvdXIgdGVzdHMgb24gYSAyMDE5IE1hY0Jvb2sgUHJvLCBDaHJvbWUgd3JvdGUgYXQgYWJvdXQgMC42cyBwZXIgTUIsIGFuZCBGaXJlZm94XG4gICAgICAgICAqIGF0IGFib3V0IDIuN3MgcGVyIE1CISBTZWUgb3VyIGB0ZXN0X2V4dHNgIHJlcG8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgICAgICpcbiAgICAgICAgICogU28sIHNpbmNlIGEgMTBNQiBQREYgY291bGQgdGFrZSBoYWxmIGEgbWludXRlIHRvIGJlIHJlY29yZGVkIGluIHN0b3JhZ2UsIHdlIG5lZWRcbiAgICAgICAgICogYSBwbGFjZSBmb3IgaXRzIGJ5dGUgYXJyYXkgdG8gbGl2ZSBpbiBjYXNlIGl0IGlzIHJlcXVlc3RlZCBkdXJpbmcgdGhhdCB0aW1lLiBUaGlzXG4gICAgICAgICAqIGlzIHRoYXQgcGxhY2U6XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBlbmRpbmdQZGZCeXRlQXJyYXlzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qIFN1YmNsYXNzZXMgc2hvdWxkIGRlY2lkZSB3aGV0aGVyIHRoZXkgd2FudCB0byBkbyBkZWxheWVkIHN0b3JhZ2UsIHByb2JhYmx5IGJhc2VkXG4gICAgICAgICAqIG9uIGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRvRGVsYXllZFN0b3JhZ2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiBHZXQgYSBQREYuIFRoaXMgaXMgdGhlIG1haW4gbWV0aG9kIHVzZXJzIGFyZSBtZWFudCB0byBjYWxsLlxuICAgICAqXG4gICAgICogV2UgY2hlY2sgd2hldGhlciB0aGUgUERGIGlzIGFscmVhZHkgcHJlc2VudCBpbiB0aGUgY2FjaGUuIElmIHNvLCB3ZSByZXR1cm4gaXQgZnJvbSB0aGVyZS5cbiAgICAgKiBPdGhlcndpc2Ugd2UgYXR0ZW1wdCB0byBmZXRjaCBpdCBmcm9tIHRoZSBJbnRlcm5ldCwgY2FjaGUgaXQsIGFuZCByZXR1cm4gaXQuIFRoZXJlJ3MgYWxzb1xuICAgICAqIHRoZSBpbi1iZXR3ZWVuIGNhc2UsIHdoZXJlIHdlJ3ZlIGZldGNoZWQgaXQgYnV0IGFyZSBzdGlsbCB3YWl0aW5nIHRvIGNvbXBsZXRlXG4gICAgICogdGhlIHNsb3cgb3BlcmF0aW9uIG9mIHdyaXRpbmcgaXQgdG8gc3RvcmFnZSwgZHVyaW5nIHdoaWNoIHRpbWUgd2UgcmV0dXJuIHRoZSBieXRlIGFycmF5IGZyb20gbWVtb3J5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfSB0aGUgVVJMIG9mIHRoZSBkZXNpcmVkIFBERlxuICAgICAqIEBwYXJhbSBhc1BsYWluQXJyYXkge2Jvb2x9IHNldCB0cnVlIGlmIHlvdSB3YW50IHRoZSBieXRlIGFycmF5IGFzIGEgcGxhaW4gQXJyYXk7XG4gICAgICogICBvdGhlcndpc2UgaXQgd2lsbCBiZSBhIFVpbnQ4QXJyYXkuXG4gICAgICogQHJldHVybiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBvYmplY3Qgb2YgdGhlIGZvcm06IHtcbiAgICAgKiAgIHVybDogPHN0cmluZz4gdGhlIFVSTCBvZiB0aGUgUERGXG4gICAgICogICBieXRlczogPFVpbnQ4QXJyYXl8QXJyYXk+IHRoZSBieXRlcyBvZiB0aGUgUERGXG4gICAgICogICBzaXplOiA8aW50PiB0aGUgc2l6ZSBvZiB0aGUgUERGIGluIGJ5dGVzXG4gICAgICogICBmcm9tTWVtb3J5OiA8Ym9vbD4gdHJ1ZSBpZiB0aGUgUERGIHdhcyBzdGlsbCBpbiB0aGUgZG93bmxvYWQgbWFuYWdlcidzIG1lbW9yeS5cbiAgICAgKiAgICAgICBUaGlzIG1lYW5zIGl0IGhhZCBiZWVuIGZldGNoZWQsIGJ1dCBub3QgeWV0IGNvbW1pdHRlZCB0byBzdG9yYWdlLlxuICAgICAqICAgZnJvbUNhY2hlOiA8Ym9vbD4gdHJ1ZSBpZiB0aGUgUERGIHdhcyByZXRyaWV2ZWQgZnJvbSBzdG9yYWdlLlxuICAgICAqICAgY29tbWVudDogPHN0cmluZz4gaWYgcmV0cmlldmVkIGZyb20gY2FjaGUsIHRoZSBjb21tZW50IHRleHQgZm9yIHRoaXMgZW50cnkgKGVsc2UgdW5kZWZpbmVkKVxuICAgICAqICAgdG9vQmlnRm9yQ2FjaGU6IDxib29sPiB0cnVlIGlmIHRoZSBQREYgd2FzIGZldGNoZWQgYW5kIHR1cm5lZCBvdXQgdG8gYmUgdG9vIGJpZyBmb3IgdGhlIGNhY2hlLFxuICAgICAqICAgICBpLmUuIGxhcmdlciB0aGFuIHRoZSBjYWNoZSdzIGN1cnJlbnQgY2FwYWNpdHkgc2V0dGluZywgYW5kIHRoZXJlZm9yZSB3aWxsIF9ub3RfIGJlIGNhY2hlZC5cbiAgICAgKiAgICAgVGhpcyBpcyB1c2VmdWwgc28gdGhhdCB0aGUgYXBwIGNhbiB3YXJuIHRoZSB1c2VyIHRoYXQgdGhlIFBERiB3aWxsIGhhdmUgdG8gYmUgZG93bmxvYWRlZFxuICAgICAqICAgICBldmVyeSB0aW1lIHVubGVzcyB0aGUgY2FwYWNpdHkgaXMgaW5jcmVhc2VkLlxuICAgICAqIH1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRQZGYoeyB1cmwsIGFzUGxhaW5BcnJheSA9IGZhbHNlIH0pIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHRoaXMuYWNjZXNzUGRmQ2FjaGVJbmZvKHt1cmw6dXJsfSk7XG4gICAgICAgIGNvbnN0IGhhdmVQZW5kaW5nQXJyYXkgPSB0aGlzLnBlbmRpbmdQZGZCeXRlQXJyYXlzLmhhcyh1cmwpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8uc3RvcmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGNhY2hlIHNheXMgd2UgYWxyZWFkeSBoYXZlIHRoaXMgUERGLlxuICAgICAgICAgICAgICAgIGlmIChoYXZlUGVuZGluZ0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9vcHMsIHRoZSBieXRlIGFycmF5IGlzIGFjdHVhbGx5IG5vIGxvbmdlciBwZW5kaW5nOyB0aW1lIGZvciBzb21lIGxhdGUgY2xlYW4gdXAuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FzZSBjYW4gYXJpc2UgaWYgdGhlIFBERiB3YXMgZG93bmxvYWRlZCBvbiB0aGUgQ1Mgc2lkZSwgYnV0IHRoZSBDUyBmYWlsZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVjZWl2ZSB0aGUgbWVzc2FnZSBmcm9tIHRoZSBCR1MgdGhhdCB0aGUgYXJyYXkgaGFkIGJlZW4gc3RvcmVkLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGF0IGNhbiBoYXBwZW4gaW4gRmlyZWZveCAoRGV2IEVkaXRpb24sIHYxMDcuMGI5IGF0IHRpbWUgb2YgdGVzdGluZylcbiAgICAgICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBpdCBzZWVtcyB0aGF0IGlmIHRoZSB1c2VyIG1hbnVhbGx5IGNsb3NlcyB0aGUgZXh0ZW5zaW9uJ3Mgb3B0aW9ucyBwYWdlIGR1cmluZyB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gZG93bmxvYWQgcHJvY2VzcyAod2hpY2ggaXMgcXVpdGUgbGlrZWx5IGlmIHRoZSBvcHRpb25zIHBhZ2Ugd2FzIG9wZW5lZCBpbiBvcmRlciBmb3IgdGhlIHVzZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZ3JhbnQgZG93bmxvYWQgcGVybWlzc2lvbiksIHRoaXMgY2F1c2VzIFBvcnRzIHRvIGJlIGZvcmNpYmx5IGRpc2Nvbm5lY3RlZCwgaW4gcGFydGljdWxhciB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIFBvcnQgb24gd2hpY2ggdGhlIGNhbGwgdG8gYG1nci5zdG9yZVBkZkJ5dGVzKClgIGRvd24gaW4gb3VyIGBkb3dubG9hZFBkZigpYCBtZXRob2QgaXMgYXdhaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aWNlIG9mIGNvbXBsZXRlZCBhcnJheSBzdG9yYWdlLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBTdG9yYWdlIG9mIFBERiBhcnJheSAke3VybH0gd2FzIGNvbXBsZXRlZCBlYXJsaWVyLiBEZWxldGluZyBmcm9tIHBlbmRpbmcgbWFwIG5vdy5gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nUGRmQnl0ZUFycmF5cy5kZWxldGUodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhaW5BcnJheSA9IGF3YWl0IHRoaXMucmVhZFBkZkJ5dGVzKHt1cmw6IHVybH0pO1xuICAgICAgICAgICAgICAgIC8vIEluIHRlc3RpbmcsIGl0IHdhcyB3aXRuZXNzZWQgb25lIHRpbWUgdGhhdCB0aGUgY2FjaGUgc2FpZCB3ZSBoYWQgYSBQREYsIGFuZCB5ZXRcbiAgICAgICAgICAgICAgICAvLyB0aGUgYnl0ZSBhcnJheSB0dXJuZWQgb3V0IHRvIGJlIHVuZGVmaW5lZC4gSXQgaGFwcGVuZWQgZHVyaW5nIGVhcmx5IGVmZm9ydHMgdG8gc3dpdGNoXG4gICAgICAgICAgICAgICAgLy8gdG8gTWFuaWZlc3QgVjMsIGFuZCBJIGhhdmUgbm90IGJlZW4gYWJsZSB0byByZXByb2R1Y2UgdGhlIGVycm9yLiBTdGlsbCwgd2UgdGFrZVxuICAgICAgICAgICAgICAgIC8vIHRoaXMgbW9tZW50IHRvIGNoZWNrIHdoZXRoZXIgd2UgYWN0dWFsbHkgaGF2ZSBkYXRhLiBJZiBub3QsIHdlIGp1c3QgbGV0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGRvd25sb2FkIGhhcHBlbiBhZ2FpbiAoYW5kIGl0IHdpbGwgb3ZlcndyaXRlIHRoZSBleGlzdGluZyBhcnJheSkuXG4gICAgICAgICAgICAgICAgaWYgKHBsYWluQXJyYXk/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBGb3VuZCBQREYgYnl0ZXMgZm9yIFwiJHt1cmx9XCIgaW4gY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzOiBhc1BsYWluQXJyYXkgPyBwbGFpbkFycmF5IDogbmV3IFVpbnQ4QXJyYXkocGxhaW5BcnJheSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBwbGFpbkFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21DYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IGluZm8uY29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgRm91bmQgbm8gUERGIGJ5dGVzIGZvciBcIiR7dXJsfVwiLCBzYWlkIHRvIGJlIHByZXNlbnQgaW4gdGhlIGNhY2hlLmApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXZlUGVuZGluZ0FycmF5KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIFBERiBoYXMgYWxyZWFkeSBiZWVuIGZldGNoZWQsIGJ1dCB0aGUgYnl0ZSBhcnJheSBoYXNuJ3QgYmVlblxuICAgICAgICAgICAgICAgIC8vIHJlY29yZGVkIGluIHN0b3JhZ2UgeWV0LCBhbmQgaXMgc3RpbGwgaGVsZCBpbiBtZW1vcnkuXG4gICAgICAgICAgICAgICAgY29uc3QgYnl0ZUFycmF5ID0gdGhpcy5wZW5kaW5nUGRmQnl0ZUFycmF5cy5nZXQodXJsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBGb3VuZCBQREYgYnl0ZXMgZm9yIFwiJHt1cmx9XCIgc3RpbGwgcGVuZGluZyBzdG9yYWdlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICBieXRlczogYXNQbGFpbkFycmF5ID8gQXJyYXkuZnJvbShieXRlQXJyYXkpIDogYnl0ZUFycmF5LFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBieXRlQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBmcm9tTWVtb3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIFBERiBpcyBuZWl0aGVyIGluIHRoZSBjYWNoZSwgbm9yIGFtb25nIHRoZSBwZW5kaW5nIGFycmF5cy4gV2UgbXVzdCBkb3dubG9hZCBpdC5cbiAgICAgICAgcmV0dXJuIHRoaXMuZG93bmxvYWRQZGYoe3VybDogdXJsLCBhc1BsYWluQXJyYXk6IGFzUGxhaW5BcnJheX0pO1xuICAgIH1cblxuICAgIGRvd25sb2FkUGRmKHsgdXJsLCBhc1BsYWluQXJyYXkgPSBmYWxzZSB9KSB7XG4gICAgICAgIGNvbnN0IG1nciA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrSG9zdFBlcm1pc3Npb24oe3VybDogdXJsLCBkb1Rocm93OiB0cnVlfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBJbml0aWF0aW5nIGZldGNoIGZvciBQREYgJHt1cmx9LmApO1xuICAgICAgICAgICAgcmV0dXJuIG1nci5mZXRjaFBkZih7dXJsOiB1cmx9KS50aGVuKGJ5dGVBcnJheSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGJ5dGVBcnJheS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1nci5hZGROZXdQZGZDYWNoZUluZm8oe3VybDp1cmwsIHNpemU6c2l6ZX0pLnRoZW4oYWNjZXB0ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXB0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFF1ZXVpbmcgUERGIGFycmF5ICR7dXJsfSBmb3Igc3RvcmFnZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1nci5wZW5kaW5nUGRmQnl0ZUFycmF5cy5zZXQodXJsLCBieXRlQXJyYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWdyLnN0b3JlUGRmQnl0ZXMoeyB1cmw6IHVybCwgYnl0ZXM6IEFycmF5LmZyb20oYnl0ZUFycmF5KSwgZGVsYXllZDogbWdyLmRvRGVsYXllZFN0b3JhZ2UgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWdyLnBlbmRpbmdQZGZCeXRlQXJyYXlzLmRlbGV0ZSh1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBQREYgYXJyYXkgJHt1cmx9IHdhcyByZWplY3RlZCwgYW5kIHdpbGwgbm90IGJlIHN0b3JlZC5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlczogYXNQbGFpbkFycmF5ID8gQXJyYXkuZnJvbShieXRlQXJyYXkpIDogYnl0ZUFycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogYnl0ZUFycmF5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb0JpZ0ZvckNhY2hlOiAhYWNjZXB0ZWQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgd2hldGhlciB3ZSBoYXZlIGhvc3QgcGVybWlzc2lvbiBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBVUkwgaW4gcXVlc3Rpb24sXG4gICAgICogQHBhcmFtIGRvVGhyb3cge2Jvb2x9IHNldCB0cnVlIGlmIHlvdSB3YW50IHRoaXMgaGFuZGxlciB0byB0aHJvdyBhbiBlcnJvciBpbiBjYXNlXG4gICAgICogICAgIHRoZSBuYW1lZCBob3N0IHBlcm1pc3Npb24gaXMgbGFja2luZ1xuICAgICAqIEByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGJvb2xlYW5cbiAgICAgKi9cbiAgICBjaGVja0hvc3RQZXJtaXNzaW9uKHsgdXJsLCBkb1Rocm93ID0gdHJ1ZSB9KSB7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkX2hvc3RfcGVybWlzc2lvbiA9IHsgb3JpZ2luczogW3VybF0gfTtcbiAgICAgICAgcmV0dXJuIGJyb3dzZXIucGVybWlzc2lvbnMuY29udGFpbnMocmVxdWlyZWRfaG9zdF9wZXJtaXNzaW9uKS50aGVuKGFibGUgPT4ge1xuICAgICAgICAgICAgaWYgKGRvVGhyb3cgJiYgIWFibGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IExhY2tpbmdIb3N0UGVybWlzc2lvbkVycm9yKHt1cmw6IHVybH0pO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhYmxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmZXRjaFBkZih7IHVybCB9KSB7XG4gICAgICAgIHJldHVybiBmZXRjaFBkZih1cmwpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEFic3RyYWN0IG1ldGhvZHMuIFVzYWJsZSBzdWJjbGFzc2VzIE1VU1Qgb3ZlcnJpZGUuXG5cbiAgICAvKiBBY2Nlc3MgdGhlIGNhY2hlIGluZm8gKGlmIGFueSkgZm9yIGEgUERGLlxuICAgICAqIElmIHByZXNlbnQsIHRoZSByZWNlbnRuZXNzIGFuZCBhY2Nlc3MgdGltZSBmb3IgdGhlIGVudHJ5IGFyZSB1cGRhdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfSB0aGUgVVJMIG9mIHRoZSBQREYgb2YgaW50ZXJlc3RcbiAgICAgKiBAcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVzaXJlZCBjYWNoZSBpbmZvLCBvciB1bmRlZmluZWQgaWYgbm90IHByZXNlbnRcbiAgICAgKi9cbiAgICBhY2Nlc3NQZGZDYWNoZUluZm8oeyB1cmwgfSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLyogQWRkIGEgbmV3IGNhY2hlIGVudHJ5IGZvciBhIFBERi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmw6IHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIFBERixcbiAgICAgKiBAcGFyYW0gc2l6ZToge2ludH0gdGhlIGxlbmd0aCBvZiB0aGUgUERGIGJ5dGUgYXJyYXlcbiAgICAgKlxuICAgICAqIEByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGJvb2xlYW4gc2F5aW5nIHdoZXRoZXIgdGhlIGVudHJ5IHdhcyBhY2NlcHRlZCAodHJ1ZSlcbiAgICAgKiAgIG9yIHJlamVjdGVkIGZvciBiZWluZyB0b28gXCJsYXJnZVwiIGFjY29yZGluZyB0byBtc2cuc2l6ZS5cbiAgICAgKi9cbiAgICBhZGROZXdQZGZDYWNoZUluZm8oeyB1cmwsIHNpemUgfSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIH1cblxuICAgIC8qIFJlYWQgYSBQREYgYnl0ZSBhcnJheSBmcm9tIHN0b3JhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIFBERlxuICAgICAqXG4gICAgICogQHJldHVybiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgYnl0ZSBhcnJheSAoYXMgcGxhaW4gQXJyYXkpXG4gICAgICovXG4gICAgcmVhZFBkZkJ5dGVzKHsgdXJsIH0pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuXG4gICAgLyogU3RvcmUgYSBQREYgYnl0ZSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmw6IHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIFBERlxuICAgICAqIEBwYXJhbSBieXRlczoge0FycmF5W2ludF19IHRoZSBieXRlIGFycmF5IG9mIHRoZSBQREZcbiAgICAgKiBAcGFyYW0gZGVsYXllZDoge2Jvb2x9IFNldCB0cnVlIGluIG9yZGVyIHRvIGRvIGRlbGF5ZWQgc3RvcmFnZS4gSW4gdGhpcyBjYXNlLFxuICAgICAqICAgYmVoYXZpb3IgZGVwZW5kcyBvbiB3aGV0aGVyIGBieXRlc2AgaXMgZGVmaW5lZCBvciBub3QuIElmIGRlZmluZWQsIHdlIHNpbXBseVxuICAgICAqICAgc3Rhc2ggdGhlIGJ5dGUgYXJyYXkgaW4gYSBNYXAgdW5kZXIgaXRzIFVSTDsgaWYgdW5kZWZpbmVkLCB3ZSByZXRyaWV2ZSB0aGUgYXJyYXlcbiAgICAgKiAgIGZyb20gc2FpZCBNYXAsIGFuZCBmaW5hbGx5IGRvIGFjdHVhbGx5IHN0b3JlIGl0LlxuICAgICAqXG4gICAgICogQHJldHVybiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlXG4gICAgICovXG4gICAgc3RvcmVQZGZCeXRlcyh7IHVybCwgYnl0ZXMsIGRlbGF5ZWQgfSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuICogVGhpcyBpcyBhIGRvd25sb2FkIG1hbmFnZXIgaW50ZW5kZWQgZm9yIHVzZSBhdCB0aGUgYmFja2dyb3VuZCBzY3JpcHQgbGV2ZWwuXG4gKlxuICogVGhpcyByZWZsZWN0cyBvdXIgZGVjaXNpb24gdG8gbGV0IHRoZSBCR1MgbWFuYWdlIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2ZcbiAqIG91ciBDYWNoZUluZGV4IGNsYXNzLiBUaGlzIG1ha2VzIHNlbnNlLCBzaW5jZSB3ZSB3YW50IHRoZSBDYWNoZUluZGV4IHRvIGxpdmVcbiAqIGluIG1lbW9yeSBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBicm93c2VyJ3MgcnVudGltZSwgYW5kIGluIHRoZSBCR1Mgd2hlcmUgaXRcbiAqIGlzIGFjY2Vzc2libGUgdG8gZWFjaCBDUyBydW5uaW5nIGluIGVhY2ggYnJvd3NlciB0YWIuXG4gKlxuICogVGhlIG1hbmFnZXIgaXMgY29uc3RydWN0ZWQgd2l0aCBhIHJlZmVyZW5jZSB0byB0aGUgQ2FjaGVJbmRleCwgYW5kIHVzZXMgaXRcbiAqIGRpcmVjdGx5LlxuICovXG5leHBvcnQgY2xhc3MgQmdzRG93bmxvYWRNZ3IgZXh0ZW5kcyBBYnN0cmFjdERvd25sb2FkTWdyIHtcblxuICAgIC8qXG4gICAgICogQHBhcmFtIGNhY2hlSW5kZXgge0NhY2hlSW5kZXh9IGFuIGluc3RhbmNlIG9mIHRoZSBDYWNoZUluZGV4IGNsYXNzIGRlZmluZWRcbiAgICAgKiAgIGluIG91ciBjYWNoZS5qcyBtb2R1bGUsIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBjb250ZW50cyBvZiBvdXIgUERGIGNhY2hlLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIHtcbiAgICAgKiAgIGRvRGVsYXllZFN0b3JhZ2Uge2Jvb2x9IGZhbHNlIG1lYW5zIHN0b3JlIGltbWVkaWF0ZWx5IGFmdGVyIGZldGNoOyB0cnVlIG1lYW5zXG4gICAgICogICAgICB3YWl0IHVudGlsIGBzdG9yZVBkZkJ5dGVzYCBpcyBjYWxsZWQgYWdhaW4gd2l0aCBtYXRjaGluZyBVUkwgYW5kIHVuZGVmaW5lZCBieXRlcy5cbiAgICAgKiB9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FjaGVJbmRleCwge1xuICAgICAgICBkb0RlbGF5ZWRTdG9yYWdlID0gdHJ1ZSxcbiAgICB9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2FjaGVJbmRleCA9IGNhY2hlSW5kZXg7XG4gICAgICAgIHRoaXMuZGVsYXllZEJ5dGVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmRvRGVsYXllZFN0b3JhZ2UgPSBkb0RlbGF5ZWRTdG9yYWdlO1xuICAgIH1cblxuICAgIGFjY2Vzc1BkZkNhY2hlSW5mbyh7IHVybCB9KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jYWNoZUluZGV4LmFjY2Vzcyh1cmwpKTtcbiAgICB9XG5cbiAgICBhZGROZXdQZGZDYWNoZUluZm8oeyB1cmwsIHNpemUgfSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY2FjaGVJbmRleC5hZGRQZGYodXJsLCBzaXplKSk7XG4gICAgfVxuXG4gICAgc3RvcmVQZGZCeXRlcyh7IHVybCwgYnl0ZXMsIGRlbGF5ZWQgfSkge1xuICAgICAgICBpZiAoZGVsYXllZCkge1xuICAgICAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gWW91IHNhaWQgXCJkZWxheWVkXCIgYW5kIHlvdSBwcm92aWRlZCBieXRlcy4gVGhpcyBtZWFucyB5b3Ugd2FudCB0byBzdGFzaFxuICAgICAgICAgICAgICAgIC8vIHRoZW0gbm93LCB0byBiZSBzdG9yZWQgbGF0ZXIuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygnc3Rhc2hpbmcgUERGIGZvciBkZWxheWVkIHN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGF5ZWRCeXRlcy5zZXQodXJsLCBieXRlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRlbGF5ZWRCeXRlcy5oYXModXJsKSkge1xuICAgICAgICAgICAgICAgIC8vIFlvdSBzYWlkIFwiZGVsYXllZFwiLCBhbmQgeW91IGRpZG4ndCBwcm92aWRlIGJ5dGVzLCBidXQgd2UgZm91bmQgc3Rhc2hlZCBieXRlc1xuICAgICAgICAgICAgICAgIC8vIHVuZGVyIHRoZSBnaXZlbiBVUkwuIFRoaXMgbWVhbnMgaXQncyB0aW1lIHRvIGNvbXBsZXRlIHRoaXMgZGVsYXllZCBzdG9yYWdlLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ3JldHJpZXZpbmcgUERGIGZvciBkZWxheWVkIHN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICBieXRlcyA9IHRoaXMuZGVsYXllZEJ5dGVzLmdldCh1cmwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXllZEJ5dGVzLmRlbGV0ZSh1cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBZb3Ugc2FpZCBcImRlbGF5ZWRcIiwgYW5kIHlvdSBkaWRuJ3QgcHJvdmlkZSBieXRlcywgYW5kIHdlIGRpZG4ndCBmaW5kIGFueSBzdGFzaGVkXG4gICAgICAgICAgICAgICAgLy8gYnl0ZXMgZWl0aGVyLiBUaGlzIGp1c3QgbWVhbnMgdGhlIGRlbGF5ZWQgc3RvcmFnZSB3YXMgYWxyZWFkeSBjb21wbGV0ZWQgZWFybGllcixcbiAgICAgICAgICAgICAgICAvLyBhbmQgd2UgaGF2ZSBub3RoaW5nIHRvIGRvLlxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKG5ldyBEYXRlKCksICdzdG9yaW5nIFBERi4uLicpO1xuICAgICAgICByZXR1cm4gc2V0Qnl0ZUFycmF5KHVybCwgYnl0ZXMsIHRoaXMuY2FjaGVJbmRleCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKG5ldyBEYXRlKCksICdmaW5pc2hlZCBzdG9yaW5nIFBERicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkUGRmQnl0ZXMoeyB1cmwgfSkge1xuICAgICAgICByZXR1cm4gZ2V0Qnl0ZUFycmF5KHVybCk7XG4gICAgfVxuXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuICogVGhpcyBpcyBhIGRvd25sb2FkIG1hbmFnZXIgaW50ZW5kZWQgZm9yIHVzZSBhdCB0aGUgY29udGVudCBzY3JpcHQgbGV2ZWwuXG4gKlxuICogSGVyZSB5b3UgaGF2ZSBvcHRpb25zIGFib3V0IHdoZXJlIGNhY2hlIHJlYWRzIHNob3VsZCB0YWtlIHBsYWNlIChDUyBvciBCR1MpLFxuICogYW5kLCBvbiBGaXJlZm94LCB3aGVyZSBmZXRjaCBzaG91bGQgdGFrZSBwbGFjZSwgYWdhaW4gQ1Mgb3IgQkdTLiBPbiBDaHJvbWUsXG4gKiBmZXRjaCBpcyBvbmx5IGFsbG93ZWQgaW4gQkdTLlxuICovXG5leHBvcnQgY2xhc3MgQ3NEb3dubG9hZE1nciBleHRlbmRzIEFic3RyYWN0RG93bmxvYWRNZ3Ige1xuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gY3NQZWVyIHtDc0Jnc1BlZXJ9IENTLXNpZGUgcGVlciBmb3IgY29ubmVjdGluZyB0byBCR1MuXG4gICAgICogQHBhcmFtIGJnUGVlck5hbWUge3N0cmluZ30gdGhlIG5hbWUgb2YgdGhlIEJHUy1zaWRlIHBlZXIgdG8gd2hpY2ggd2Ugd2lsbCBtYWtlIHJlcXVlc3RzLlxuICAgICAqIEBwYXJhbSBiZ0RsbU5hbWUge3N0cmluZ30gdGhlIG5hbWUgdW5kZXIgd2hpY2ggdGhlIEJHJ3MgRG93bmxvYWRNYW5hZ2VyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKiAgIGFzIGEgaGFuZGxlciBpbiB0aGUgQkdTLXNpZGUgcGVlci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjc1BlZXIsIGJnUGVlck5hbWUsIGJnRGxtTmFtZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNzUGVlciA9IGNzUGVlcjtcbiAgICAgICAgdGhpcy5iZ1BlZXJOYW1lID0gYmdQZWVyTmFtZTtcbiAgICAgICAgdGhpcy5iZ0RsbU5hbWUgPSBiZ0RsbU5hbWU7XG4gICAgICAgIHRoaXMucXVlcnlCZyA9IHRoaXMuY3NQZWVyLm1ha2VSZXF1ZXN0LmJpbmQodGhpcy5jc1BlZXIpO1xuICAgIH1cblxuICAgIGNoZWNrQ29uZmlnVmFsdWUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeUJnKHRoaXMuYmdQZWVyTmFtZSwgJ3JlYWRDb25maWdWYXInLCB7bmFtZX0pO1xuICAgIH1cblxuICAgIC8qIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgcGFzc2luZyBhIHJlcXVlc3QgKHZpYSBvdXIgYENsaWVudEZvckJnU2VydmVyYCBpbnN0YW5jZSkgdG9cbiAgICAgKiB0aGUgYmFja2dyb3VuZCBkb3dubG9hZCBtYW5hZ2VyLCBpLmUuIHRoZSBgQmdzRG93bmxvYWRNZ3JgIGluc3RhbnRpYXRlZCBpbiBvdXIgQkdTLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWUge3N0cmluZ30gdGhlIG5hbWUgb2YgdGhlIG1ldGhvZCBpbiB0aGUgYEJnc0Rvd25sb2FkTWdyYCBjbGFzcyB5b3VcbiAgICAgKiAgIHdpc2ggdG8gY2FsbC5cbiAgICAgKiBAcGFyYW0gYXJncyB7b2JqfSB0aGUgYXJndW1lbnRzIG9iamVjdCB0aGUgbWV0aG9kIGV4cGVjdHMuXG4gICAgICogQHJldHVybjogdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgbWV0aG9kIGNhbGxlZCwgZm9yd2FyZGVkIGFjcm9zcyB0aGUgUG9ydCBsaW5rIGJldHdlZW5cbiAgICAgKiAgIENTIGFuZCBCR1MuIEJlIHN1cmUgdG8gcmVxdWVzdCBvbmx5IHJldHVybiB2YWx1ZXMgdGhhdCBhcmUgSlNPTiBzZXJpYWxpemFibGUhXG4gICAgICovXG4gICAgdXNlQmdEbG0obWV0aG9kTmFtZSwgYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeUJnKHRoaXMuYmdQZWVyTmFtZSwgYCR7dGhpcy5iZ0RsbU5hbWV9LiR7bWV0aG9kTmFtZX1gLCBhcmdzKTtcbiAgICB9XG5cbiAgICBhY2Nlc3NQZGZDYWNoZUluZm8oYXJncykge1xuICAgICAgICAvLyBUaGUgQkdTIG93bnMgdGhlIHNpbmdsZXRvbiBDYWNoZUluZGV4IGluc3RhbmNlLCBzbyB3ZSBkZWZlci5cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlQmdEbG0oJ2FjY2Vzc1BkZkNhY2hlSW5mbycsIGFyZ3MpO1xuICAgIH1cblxuICAgIGFkZE5ld1BkZkNhY2hlSW5mbyhhcmdzKSB7XG4gICAgICAgIC8vIFRoZSBCR1Mgb3ducyB0aGUgc2luZ2xldG9uIENhY2hlSW5kZXggaW5zdGFuY2UsIHNvIHdlIGRlZmVyLlxuICAgICAgICByZXR1cm4gdGhpcy51c2VCZ0RsbSgnYWRkTmV3UGRmQ2FjaGVJbmZvJywgYXJncyk7XG4gICAgfVxuXG4gICAgY2hlY2tIb3N0UGVybWlzc2lvbihhcmdzKSB7XG4gICAgICAgIC8vIFdlJ3JlIG5vdCBhbGxvd2VkIHRvIHdvcmsgd2l0aCBgYnJvd3Nlci5wZXJtaXNzaW9uc2AgaW4gQ1MsIHNvIGRlZmVyIHRvIEJHUyBmb3IgdGhpcy5cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlQmdEbG0oJ2NoZWNrSG9zdFBlcm1pc3Npb24nLCBhcmdzKTtcbiAgICB9XG5cbiAgICByZWFkUGRmQnl0ZXMoeyB1cmwgfSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZ1ZhbHVlKCdyZWFkU3RvcmFnZUluQmcnKS50aGVuKHJlYWRTdG9yYWdlSW5CZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZFN0b3JhZ2VJbkJnID9cbiAgICAgICAgICAgICAgICB0aGlzLnVzZUJnRGxtKCdyZWFkUGRmQnl0ZXMnLCB7dXJsOiB1cmx9KSA6XG4gICAgICAgICAgICAgICAgZ2V0Qnl0ZUFycmF5KHVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvd25sb2FkUGRmKHt1cmwsIGFzUGxhaW5BcnJheSA9IGZhbHNlfSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0NvbmZpZ1ZhbHVlKCdmZXRjaEluQmcnKS50aGVuKGZldGNoSW5CZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hJbkJnID9cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBmZXRjaGluZyBpbiB0aGUgYmFja2dyb3VuZCwgdGhlbiB3ZSBhY3R1YWxseSB3YW50IHRvIGRlZmVyIHRvIHRoZSBCRyBkbG0nc1xuICAgICAgICAgICAgICAgIC8vIGZ1bGwgYGdldFBkZmAgbWV0aG9kIChub3QganVzdCBpdHMgYGRvd25sb2FkUGRmYCBtZXRob2QpLCBzaW5jZSB3ZSB3YW50IHRoZSBjaGFuY2UgdG9cbiAgICAgICAgICAgICAgICAvLyBoaXQgdGhlIGBmcm9tTWVtb3J5YCBjYXNlLiBBbHNvIHdlIG11c3QgcmVxdWVzdCB0aGUgYnl0ZSBhcnJheSBhcyBwbGFpbiBhcnJheSwgYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IGl0IGludG8gYSBVaW50OEFycmF5IG91cnNlbHZlcy5cbiAgICAgICAgICAgICAgICB0aGlzLnVzZUJnRGxtKCdnZXRQZGYnLCB7dXJsOiB1cmwsIGFzUGxhaW5BcnJheTogdHJ1ZX0pLnRoZW4oaW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGluZm8uYnl0ZXMgPSBuZXcgVWludDhBcnJheShpbmZvLmJ5dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGZldGNoaW5nIGluIGZvcmVncm91bmQsIGp1c3QgZm9sbG93IHRoZSBzdGFuZGFyZCBwcm9jZWR1cmUuXG4gICAgICAgICAgICAgICAgc3VwZXIuZG93bmxvYWRQZGYoe3VybDogdXJsfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0b3JlUGRmQnl0ZXMoYXJncykge1xuICAgICAgICAvLyBXcml0aW5nIHRvIHN0b3JhZ2UgZnJvbSBDUyBibG9ja3MgdGhlIG1haW4gdGhyZWFkLCBhbmQgdGhlIHNwaW5uZXIgZnJlZXplcyxcbiAgICAgICAgLy8gc28gd2UgYXNrIHRoZSBCR1MgdG8gZG8gaXQuIEluIEZpcmVmb3ggKHdoZXJlIHRoaXMgbWF0dGVycywgc2luY2Ugd2UncmUgYWxsb3dlZCB0byBmZXRjaCBpbiBDUyksXG4gICAgICAgIC8vIHdyaXRpbmcgdG8gc3RvcmFnZSBpcyBWRVJZIHNsb3csIGJ1dCBzZW5kaW5nIGEgUERGIHRvIEJHUyBvdmVyIFBvcnQgaXMgbXVjaCBmYXN0ZXIgKGJ5IGEgZmFjdG9yXG4gICAgICAgIC8vIG9mIGFib3V0IDQuMyB0byA1LjAgaW4gbXkgdGVzdHMgaW4gRmlyZWZveERFIDgyLjBiNyBvbiBhIDIwMTkgTWFjQm9vayBQcm8pLlxuICAgICAgICBjb25zb2xlLmRlYnVnKCdDUyBkb3dubG9hZCBtZ3IgZGVmZXJyaW5nIHRvIEJHUycpO1xuICAgICAgICByZXR1cm4gdGhpcy51c2VCZ0RsbSgnc3RvcmVQZGZCeXRlcycsIGFyZ3MpO1xuICAgIH1cblxuICAgIGNvbXBsZXRlRGVsYXllZFBkZlN0b3JhZ2UoeyB1cmwgfSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVBkZkJ5dGVzKHt1cmw6IHVybCwgZGVsYXllZDogdHJ1ZX0pO1xuICAgIH1cblxufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAgUHJvb2ZzY2FwZSBCcm93c2VyIEV4dGVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFByb29mc2NhcGUgY29udHJpYnV0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyAgICAgICAgICAqXG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgICAgICAgICpcbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgICAgICAqXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCAgICAgICAgKlxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAqXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCAgICAgICpcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBicm93c2VyID0gcmVxdWlyZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiKTtcbmltcG9ydCB7IHJlc3RvcmVDYWNoZUluZGV4RnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9jYWNoZVwiO1xuaW1wb3J0IHsgcmVhZENvbmZpZ1Zhciwgc2V0Q29uZmlnVmFyIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBjbGVhckV2ZXJ5dGhpbmcsIGdldEV2ZXJ5dGhpbmcgfSBmcm9tIFwiLi91dGlsXCJcbmltcG9ydCB7IEJnc0Rvd25sb2FkTWdyIH0gZnJvbSBcIi4vZG93bmxvYWRtZ3JcIjtcbmltcG9ydCB7IENzQmdzUGVlciB9IGZyb20gXCJicm93c2VyLXBlZXJzL3NyYy9jc2Jnc3BlZXJcIjtcblxuXG5leHBvcnQgY2xhc3MgUGJlQmFja2dyb3VuZCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0aW9uVGltZSA9IChuZXcgRGF0ZSgpKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgUGJlQmFja2dyb3VuZCB3YXMgY29uc3RydWN0ZWQgJHt0aGlzLmNvbnN0cnVjdGlvblRpbWV9YCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zUGFnZUluZm8gPSB7fTtcbiAgICAgICAgdGhpcy5icm93c2VySW5mbyA9IHt9O1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5iZ1BlZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlSW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLmJnRGxtID0gbnVsbDtcblxuICAgICAgICAvLyBVc2VmdWwgZHVyaW5nIGRldmVsb3BtZW50OlxuICAgICAgICB0aGlzLmNsZWFyRXZlcnl0aGluZyA9IGNsZWFyRXZlcnl0aGluZztcbiAgICAgICAgdGhpcy5nZXRFdmVyeXRoaW5nID0gZ2V0RXZlcnl0aGluZztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFRoZSBvcHRpb25zIHBhZ2UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBjb25zdW1lIG9uZS10aW1lLXVzZSBkYXRhXG4gICAgICogdGhhdCB3ZSByZWNvcmRlZCBmb3IgaXQgaW4gb3VyIGBvcHRpb25zUGFnZUluZm9gIG9iamVjdC5cbiAgICAgKi9cbiAgICBjb25zdW1lT3B0aW9uc1BhZ2VJbmZvKHtwcm9wZXJ0eU5hbWV9KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLm9wdGlvbnNQYWdlSW5mb1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5vcHRpb25zUGFnZUluZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgc3RhcnR1cCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIHdlJ3JlIGluLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYnJvd3Nlci5ydW50aW1lLmdldEJyb3dzZXJJbmZvKCkudGhlbihpbmZvID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyb3dzZXJJbmZvLm5hbWUgPSBpbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnQnJvd3NlciBuYW1lIChhcyByZXBvcnRlZCknLCB0aGlzLmJyb3dzZXJJbmZvLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8qIERpc2FwcG9pbnRpbmdseSwgYGJyb3dzZXIucnVudGltZS5nZXRCcm93c2VySW5mb2AgaXNuJ3QgZXZlbiBkZWZpbmVkIGluXG4gICAgICAgICAgICAgKiBDaHJvbWUsIGFuZCB0aGUgcG9seWZpbGwgbGlicmFyeSBkb2Vzbid0IGRlZmluZSBpdCBlaXRoZXIuIFNvIHRoZVxuICAgICAgICAgICAgICogdmVyeSBmYWN0IHRoYXQgdGhlIGZ1bmN0aW9uIGZhaWxzIHRvIGV4aXN0IGFscmVhZHkgdGVsbHMgdXMgd2UncmUgbm90IGluXG4gICAgICAgICAgICAgKiBGaXJlZm94IC0tIGFuZCwgZm9yIHVzLCB0aGF0IG1lYW5zIHdlJ3JlIGluIGEgQ2hyb21pdW0tYmFzZWQgYnJvd3Nlci4gKi9cbiAgICAgICAgICAgIHRoaXMuYnJvd3NlckluZm8ubmFtZSA9ICdDaHJvbWl1bSc7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdCcm93c2VyIG5hbWUgKGJ5IGRlZmF1bHQpJywgdGhpcy5icm93c2VySW5mby5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB1cCB0aGUgYnJvd3NlciBhY3Rpb25cbiAgICAgICAgLy8gSW4gRmlyZWZveCwgYGJyb3dzZXIuYnJvd3NlckFjdGlvbmAgaXMgZGVmaW5lZCwgYW5kIGBicm93c2VyLmFjdGlvbmAgaXMgbm90O1xuICAgICAgICAvLyBpbiBDaHJvbWl1bS1iYXNlZCBicm93c2VycywgdGhlIHJldmVyc2UgaXMgdHJ1ZS5cbiAgICAgICAgY29uc3QgYnJvd3NlckFjdGlvbiA9IGJyb3dzZXIuYnJvd3NlckFjdGlvbiB8fCBicm93c2VyLmFjdGlvbjtcbiAgICAgICAgYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKHRhYikgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRhYik7XG4gICAgICAgICAgICBzZWxmLnJlcXVlc3RBY3RpdmF0aW9uKHRhYik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGJhY2tncm91bmQgcGVlci4gV2lsbCBjb21wbGV0ZSBzZXR0aW5nIGl0IHVwIGxhdGVyLlxuICAgICAgICB0aGlzLmJnUGVlciA9IG5ldyBDc0Jnc1BlZXIoJ3Bmc2NCZ1BlZXInKTtcblxuXG4gICAgICAgIC8vIFRoZSBjYWNoZSBpbmRleCBpcyByZXN0b3JlZCBmcm9tIHN0b3JhZ2Ugb25jZSBhdCBzdGFydHVwIHRpbWUuXG4gICAgICAgIHJlc3RvcmVDYWNoZUluZGV4RnJvbVN0b3JhZ2UoKS50aGVuKGNhY2hlSW5kZXggPT4ge1xuICAgICAgICAgICAgc2VsZi5jYWNoZUluZGV4ID0gY2FjaGVJbmRleDtcbiAgICAgICAgICAgIC8vIE5vdyB3ZSBjYW4gYWxzbyBmaW5pc2ggc2V0dGluZyB1cCB0aGUgYmFja2dyb3VuZCBzZXJ2ZXIuXG4gICAgICAgICAgICBzZWxmLmJnRGxtID0gbmV3IEJnc0Rvd25sb2FkTWdyKGNhY2hlSW5kZXgsIHtkb0RlbGF5ZWRTdG9yYWdlOiB0cnVlfSk7XG4gICAgICAgICAgICBzZWxmLmJnUGVlci5hZGRIYW5kbGVyKCdjYWNoZUluZGV4Jywgc2VsZi5jYWNoZUluZGV4KTtcbiAgICAgICAgICAgIHNlbGYuYmdQZWVyLmFkZEhhbmRsZXIoJ2RsbScsIHNlbGYuYmdEbG0pO1xuICAgICAgICAgICAgc2VsZi5iZ1BlZXIuc2V0UmVhZHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTGlzdGVuIHRvIHJlcXVlc3RzIGZyb20gY29udGVudCBzY3JpcHRzIHZpYSBgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlYC5cbiAgICAgICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBzZWxmLm1lc3NhZ2VIYW5kbGVycy5nZXQobXNnLnR5cGUpO1xuICAgICAgICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWNrZ3JvdW5kIHNjcmlwdCBoYXMgbm8gaGFuZGxlciBmb3IgbWVzc2FnZSB0eXBlOiAke21zZy50eXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlcihtc2cpO1xuICAgICAgICAgICAgLyogVG8gcmV0dXJuIGFuIGFzeW5jaHJvbm91cyByZXNwb25zZSBmcm9tIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UsIHlvdSBtdXN0XG4gICAgICAgICAgICAgKiByZXR1cm4gYSBQcm9taXNlLlxuICAgICAgICAgICAgICogU2VlIDxodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9ydW50aW1lL29uTWVzc2FnZT5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgaGFuZGxlcnMgYm90aCBhcyBtZXNzYWdlSGFuZGxlcnMgZm9yIHJ1bnRpbWUub25NZXNzYWdlLCBhbmQgdG8gdGhlIGJnIHBlZXIuXG4gICAgICAgIHRoaXMuc2V0dXBCZ0hhbmRsZXJzKCk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgb3B0aW9ucyBwYWdlIHdpdGggXCJHZXR0aW5nIFN0YXJ0ZWRcIiBkaWFsb2csIGZvciBhbiBcIm9uYm9hcmRpbmdcIiBwYWdlLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9leHRlbnNpb253b3Jrc2hvcC5jb20vZG9jdW1lbnRhdGlvbi9kZXZlbG9wL29uYm9hcmQtdXBib2FyZC1vZmZib2FyZC11c2Vycy9cbiAgICAgICAgYnJvd3Nlci5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGFzeW5jICh7IHJlYXNvbiwgdGVtcG9yYXJ5IH0pID0+IHtcbiAgICAgICAgICAgIC8vaWYgKHRlbXBvcmFyeSkgcmV0dXJuOyAvLyBza2lwIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICAgICAgICAgc3dpdGNoIChyZWFzb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW5zdGFsbFwiOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93T25ib2FyZGluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gYWRkIGNvZGUgaGVyZSBmb3IgdXBib2FyZGluZyAvIG9mZmJvYXJkaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0IHVwIHRob3NlIGhhbmRsZXJzIF90aGF0IGNhbiBiZSBzZXQgc3luY2hyb25vdXNseV8uIEFueXRoaW5nIC0tIGUuZy4gYHRoaXMuY2FjaGVJbmRleGAgLS0gdGhhdFxuICAgICAqIG11c3QgZmlyc3QgYmUgbG9hZGVkIG11c3QgKG9mIGNvdXJzZSkgYmUgc2V0IGFzIGhhbmRsZXIgb25seSBhZnRlcndhcmQhIEJlIGNhcmVmdWwhXG4gICAgICovXG4gICAgc2V0dXBCZ0hhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyc1xuICAgICAgICAgICAgLnNldCgncmVxdWVzdEhvc3RQZXJtaXNzaW9uJywgdGhpcy5yZXF1ZXN0SG9zdFBlcm1pc3Npb24uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5zZXQoJ29wZW5PcHRpb25zUGFnZScsIHRoaXMub3Blbk9wdGlvbnNQYWdlLmJpbmQodGhpcykpXG4gICAgICAgIDtcbiAgICAgICAgdGhpcy5iZ1BlZXJcbiAgICAgICAgICAgIC5hZGRIYW5kbGVyKCdnZXRCcm93c2VyTmFtZScsIHRoaXMuZ2V0QnJvd3Nlck5hbWUuYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5hZGRIYW5kbGVyKCdjb25zdW1lT3B0aW9uc1BhZ2VJbmZvJywgdGhpcy5jb25zdW1lT3B0aW9uc1BhZ2VJbmZvLmJpbmQodGhpcykpXG4gICAgICAgICAgICAuYWRkSGFuZGxlcigncmVhZENvbmZpZ1ZhcicsIHRoaXMucmVhZENvbmZpZ1Zhci5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLmFkZEhhbmRsZXIoJ3NldENvbmZpZ1ZhcicsIHRoaXMuc2V0Q29uZmlnVmFyLmJpbmQodGhpcykpXG4gICAgICAgIDtcbiAgICB9XG5cbiAgICAvKiBPcGVuIHRoZSBvcHRpb25zIHBhZ2Ugd2l0aCBhbiBpbW1lZGlhdGUgZGlhbG9nIGFza2luZyB0aGUgdXNlciB0byBncmFudFxuICAgICAqIGhvc3QgcGVybWlzc2lvbnMgZm9yIGEgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1zZzoge1xuICAgICAqICAgdHlwZTogXCJyZXF1ZXN0SG9zdFBlcm1pc3Npb25cIixcbiAgICAgKiAgIHVybDoge3N0cmluZ30gdGhlIFVSTCBmb3Igd2hpY2ggaG9zdCBwZXJtaXNzaW9uIGlzIG5lZWRlZFxuICAgICAqIH1cbiAgICAgKiBAcmV0dXJuOiBub3RoaW5nXG4gICAgICovXG4gICAgcmVxdWVzdEhvc3RQZXJtaXNzaW9uKG1zZykge1xuICAgICAgICB0aGlzLm9wdGlvbnNQYWdlSW5mby5yZXF1ZXN0SG9zdFBlcm1pc3Npb24gPSBtc2cudXJsO1xuICAgICAgICB0aGlzLm9wZW5PcHRpb25zUGFnZSgpO1xuICAgIH1cblxuICAgIC8qIE9wZW4gdGhlIG9wdGlvbnMgcGFnZSwgd2l0aCBhIGZsYWcgaW5kaWNhdGluZyB0aGF0IGFjdGl2YXRpb24gaGFzIGJlZW5cbiAgICAgKiByZXF1ZXN0ZWQgZm9yIHRoZSBhY3RpdmUgdGFiLlxuICAgICAqXG4gICAgICogXCJBY3RpdmF0aW9uXCIgbWVhbnMgKGEpIHJlcXVlc3RpbmcgaG9zdCBwZXJtaXNzaW9uIGZvciB0aGUgVVJMIGlmIHdlIGRvbid0XG4gICAgICogaGF2ZSBpdCB5ZXQsIGFuZCAoYikgcmVnaXN0ZXJpbmcgb3VyIGNvbnRlbnQgc2NyaXB0IHRvIGxvYWQgb24gcGFnZXMgbWF0Y2hpbmdcbiAgICAgKiB0aGUgcGF0dGVybi5cbiAgICAgKlxuICAgICAqIEluIGFsbCBjYXNlcywgdGhlIG9wdGlvbnMgcGFnZSB3aWxsIG9wZW4uIElmIHdlIGFyZSBhbHJlYWR5IGFjdGl2YXRlZCBhdFxuICAgICAqIHRoZSBnaXZlbiBVUkwsIG5vdGhpbmcgbW9yZSBoYXBwZW5zLiBJZiBub3QsIHdlIG9wZW4gYSBkaWFsb2cgYXNraW5nIHRoZSB1c2VyXG4gICAgICogdG8gZ3JhbnQgaG9zdCBwZXJtaXNzaW9uLCBhbmQgdGhlbiB3ZSBhY3RpdmF0ZSwgaWYgZ3JhbnRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0YWI6IHRoZSBhY3RpdmUgdGFiXG4gICAgICogQHJldHVybjogbm90aGluZ1xuICAgICAqL1xuICAgIHJlcXVlc3RBY3RpdmF0aW9uKHRhYikge1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoJ2Jyb3dzZXIgYWN0aW9uIG9uIDonLCB0YWIpO1xuICAgICAgICB0aGlzLm9wdGlvbnNQYWdlSW5mby5yZXF1ZXN0QWN0aXZhdGlvbiA9IHRhYjtcbiAgICAgICAgdGhpcy5vcGVuT3B0aW9uc1BhZ2UoKTtcbiAgICB9XG5cbiAgICBzaG93T25ib2FyZGluZygpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zUGFnZUluZm8uc2hvd09uYm9hcmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wZW5PcHRpb25zUGFnZSgpO1xuICAgIH1cblxuICAgIG9wZW5PcHRpb25zUGFnZSgpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgT3BlbmluZyBvcHRpb25zIHBhZ2UgZnJvbSBQYmVCYWNrZ3JvdW5kIGNvbnN0cnVjdGVkIGF0ICR7dGhpcy5jb25zdHJ1Y3Rpb25UaW1lfWApO1xuICAgICAgICBicm93c2VyLnJ1bnRpbWUub3Blbk9wdGlvbnNQYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0QnJvd3Nlck5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXJJbmZvLm5hbWU7XG4gICAgfVxuXG4gICAgcmVhZENvbmZpZ1Zhcih7bmFtZX0pIHtcbiAgICAgICAgcmV0dXJuIHJlYWRDb25maWdWYXIobmFtZSwgdGhpcy5icm93c2VySW5mby5uYW1lKTtcbiAgICB9XG5cbiAgICBzZXRDb25maWdWYXIoe25hbWUsIHZhbHVlfSkge1xuICAgICAgICByZXR1cm4gc2V0Q29uZmlnVmFyKG5hbWUsIHZhbHVlLCB0aGlzLmJyb3dzZXJJbmZvLm5hbWUpO1xuICAgIH1cbiAgICBcbn1cbiIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogIFByb29mc2NhcGUgQnJvd3NlciBFeHRlbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMiBQcm9vZnNjYXBlIGNvbnRyaWJ1dG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgICAgICAgICAgKlxuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gICAgICAgICAqXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlICAgICAgKlxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgICAgICAgICpcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gKlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgICAgICAqXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuY29uc3QgYnJvd3NlciA9IHJlcXVpcmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIik7XG5cbmltcG9ydCB7XG4gICAgRmV0Y2hSZXNvbHZlZE5vdE9rRXJyb3IsXG4gICAgRmV0Y2hXcm9uZ0NvbnRlbnRUeXBlRXJyb3IsXG59IGZyb20gXCJicm93c2VyLXBlZXJzL3NyYy9lcnJvcnNcIjtcblxuLypcbiAqIEZldGNoIGEgUERGIGFuZCByZXR1cm4gaXRzIFVpbnQ4QXJyYXkuXG4gKiBUaHJvdyBhbiBlcnJvciBpZiB0aGUgSFRUUCByZXNwb25zZSBkb2VzIG5vdCBjb21lIGJhY2sgYG9rYCBvciBpZiB3ZSBkbyBub3RcbiAqIGdldCBhIENvbnRlbnQtVHlwZSBoZWFkZXIgZXF1YWwgdG8gXCJhcHBsaWNhdGlvbi9wZGZcIi5cbiAqL1xuZnVuY3Rpb24gZmV0Y2hQZGYodXJsKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEZldGNoUmVzb2x2ZWROb3RPa0Vycm9yKHJlc3ApO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUuc2VyaWFsaXplKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3AuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICE9PSAnYXBwbGljYXRpb24vcGRmJykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBGZXRjaFdyb25nQ29udGVudFR5cGVFcnJvcihyZXNwKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmFycmF5QnVmZmVyKCkudGhlbihidWZmZXIgPT4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLypcbiAqIFJldHVybiBhIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgdGltZSwgaW4gYSBmb3JtYXQgc3VjaCB0aGF0XG4gKiBsZXhpY29ncmFwaGljIGNvbXBhcmlzb24gb2Ygc3RyaW5ncyByZXByb2R1Y2VzIHRoZSB0ZW1wb3JhbCBvcmRlcmluZy5cbiAqL1xuZnVuY3Rpb24gbm93U3RhbXBMZXgoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbn1cblxuLypcbiAqIERlbGV0ZSBhYnNvbHV0ZWx5IGV2ZXJ5dGhpbmcgb3V0IG9mIHRoaXMgZXh0ZW5zaW9uJ3MgbG9jYWwgc3RvcmFnZS5cbiAqIE9jY2FzaW9uYWxseSB1c2VmdWwgZHVyaW5nIGRldmVsb3BtZW50LlxuICovXG5mdW5jdGlvbiBjbGVhckV2ZXJ5dGhpbmcoKSB7XG4gICAgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XG59XG5cbi8qXG4gKiBSZXRyaWV2ZSBhYnNvbHV0ZWx5IGV2ZXJ5dGhpbmcgZnJvbSB0aGlzIGV4dGVuc2lvbidzIGxvY2FsIHN0b3JhZ2UuXG4gKiBDb3VsZCBiZSB1c2VmdWwgaW4gY2FzZSB5b3VyIGluZGV4IGJlY2FtZSBjb3JydXB0ZWQsIG9yIHlvdSBqdXN0XG4gKiB3YW50ZWQgdG8gX2NoZWNrXyB0aGF0IGl0IHdhcyBzdGlsbCB0cmFja2luZyBwcm9wZXJseT9cbiAqIEkgbWFpbmx5IHdyaXRlIHRoZSBmdW5jdGlvbiBpbiBvcmRlciB0byByZWNvcmQgdGhlIHdheSB0aGlzIGlzXG4gKiBhY2hpZXZlZCAoaS5lLiBgZ2V0KG51bGwpYCkuXG4gKiBJdCBpcyBkb2N1bWVudGVkIFtoZXJlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL01vemlsbGEvQWRkLW9ucy9XZWJFeHRlbnNpb25zL0FQSS9zdG9yYWdlL1N0b3JhZ2VBcmVhL2dldClcbiAqIGJ1dCBpdCBpcyBhIHNvbWV3aGF0IHN1YnRsZSBwb2ludC4gQWxzbyB1c2VmdWwgZHVyaW5nIGRldmVsb3BtZW50LlxuICovXG5mdW5jdGlvbiBnZXRFdmVyeXRoaW5nKCkge1xuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwpO1xufVxuXG5leHBvcnQge1xuICAgIGZldGNoUGRmLFxuICAgIG5vd1N0YW1wTGV4LFxuICAgIGNsZWFyRXZlcnl0aGluZyxcbiAgICBnZXRFdmVyeXRoaW5nLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAgUHJvb2ZzY2FwZSBCcm93c2VyIEV4dGVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFByb29mc2NhcGUgY29udHJpYnV0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyAgICAgICAgICAqXG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgICAgICAgICpcbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgICAgICAqXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCAgICAgICAgKlxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAqXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCAgICAgICpcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5pbXBvcnQgeyBQYmVCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vcGJlYmdcIjtcblxuY29uc3QgcGJlQmcgPSBuZXcgUGJlQmFja2dyb3VuZCgpO1xucGJlQmcuc3RhcnR1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9