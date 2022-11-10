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

/***/ "./node_modules/browser-peers/src/ext.js":
/*!***********************************************!*\
  !*** ./node_modules/browser-peers/src/ext.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicSignalling": () => (/* binding */ BasicSignalling),
/* harmony export */   "ExtensionClient": () => (/* binding */ ExtensionClient)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/browser-peers/src/errors.js");
/* harmony import */ var _pscspeer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pscspeer */ "./node_modules/browser-peers/src/pscspeer.js");
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */




/* ----------------------------------------------------------------------------------
 * In this and the extserver modules we define subclasses of PsCsPeer that are
 * specially designed for establishing and maintaining a connection between a page
 * and a browser extension.
 *
 * They provide tools to help the extension recognize pages where it is meant to run,
 * and to help pages detect the presence and version number of the extension.
 *
 * They also aim to smoothly handle cases where the extension is uninstalled or even
 * reinstalled after the page has already loaded.
 *
 * Although they are indeed PsCsPeers -- so either one can initiate a request to the
 * other -- these classes are called ExtensionClient (for use on PS side) and
 * ExtensionServer (for use on CS side), just to give a sense for what they are for,
 * and where they are meant to be used.
 * --------------------------------------------------------------------------------*/


/*
 * Both the ExtensionClient and ExtensionServer classes want to be able to work with
 * what we call "signalling," i.e. setting/reading/clearing certain data attributes
 * on a special DOM element in the page, for the purpose of letting the page and
 * content scripts know about each other's presence, and version numbers.
 *
 * Part of this functionality is common to both classes, while the ExtensionServer
 * adds a few further methods. The BasicSignalling class serves as a common super
 * class, and a place for the common methods to be implemented.
 */
class BasicSignalling extends _pscspeer__WEBPACK_IMPORTED_MODULE_1__.PsCsPeer {

    constructor(name, ext_name, signal_elt_selector, ext_vers_attr, options) {
        super(name, ext_name, options);
        this.signal_elt_selector = signal_elt_selector;
        this.ext_vers_attr = ext_vers_attr;
    }

    /*
     * Try to get the DOM element in the host page that is used for signalling
     * between the host and extension.
     */
    getHostSignallingElement() {
        return document.querySelector(this.signal_elt_selector);
    }

    /*
     * Try to determine whether an extension content script has already activated messaging on the page.
     *
     * return: {string|null} The extension version number detected or else `null`.
     */
    testForExtension() {
        const signalElt = this.getHostSignallingElement();
        if (signalElt) {
            return signalElt.getAttribute(this.ext_vers_attr);
        }
        return null;
    }

    eraseExtensionPresence() {
        const signalElt = this.getHostSignallingElement();
        signalElt.removeAttribute(this.ext_vers_attr);
    }

}

/*
 * Page scripts wishing to use an extension should instantiate this class.
 * This provides a client that can pass requests to, and receive responses from,
 * the extension. It can also receive requests from the extension, and respond.
 *
 * Requests return a promise that either resolves or rejects according to whether
 * the extension is able to return a response or needs to raise an exception.
 */
class ExtensionClient extends BasicSignalling {

    /*
     * @param name {string} a unique name for this client.
     * @param serverName {string} the name of the ExtensionServer instance with
     *   which we intend to interact.
     *
     * All other parameters are as for the `ExtensionServer` class.
     */
    constructor(name, serverName, ext_name = '', signal_elt_selector, ext_vers_attr) {
        super(name, ext_name, signal_elt_selector, ext_vers_attr);
        this.serverName = serverName;
        this.reconstituteErrors = true;
    }


    // --------------------------------------------------------------------
    // API

    /* It is expected that there will be just a unique ExtensionServer instance for this
     * client to connect to, and that is the one that was named in this ExtensionClient's
     * constructor. Therefore as a convenience we automatically pass the server's name
     * as the `peerName` to the base class's `makeRequest` method.
     */
    makeRequest(handlerDescrip, args, options) {
        return super.makeRequest(this.serverName, handlerDescrip, args, options);
    }

    /*
     * Unlike the `apparentExtensionVersion()` method, which is faulty and only checks for a posted
     * version number (but returns immediately), this method performs an actually robust check for
     * the presence of the extension, on both Firefox and Chrome. It returns a promise that either
     * resolves with the present version number, or rejects if it detects that the extension is absent.
     *
     * On any browser, if the promise is going to resolve -- i.e. if the extension is present -- it will
     * resolve immediately.
     *
     * On Chrome, if the promise is going to reject, that too will happen immediately. This is because
     * when an extension has been uninstalled on Chrome, its content scripts continue running, while any
     * attempt to use `browser.runtime` throws an "Extension context invalidated" error. The ExtensionServer
     * class deliberately uses `browser.runtime` in its version number check, in order to throw this exception.
     *
     * On Firefox, if the promise is going to reject, this will take time. You may set the timeout yourself,
     * or accept the default value. This is because when an extension has been uninstalled on Firefox, its
     * content scripts become immediately inactive. This means the ExtensionServer instance we try to reach
     * simply becomes unresponsive. It is the timeout on our request that tells us the extension is gone.
     *
     * param timeout {int} milliseconds to wait for a response from the ExtensionServer. As discussed
     *   above, this represents the time you will wait for a rejection in Firefox.
     * param selfRepairing {bool} if true, and we detect absence of the extension, we will erase the
     *   extension's presence signal. Defaults to true.
     * return: promise that either resolves with the present version number, or rejects if the extension
     *   is absent.
     */
    checkExtensionPresence({ timeout = 3000, selfRepairing = true }) {
        // Timeout must be positive, since 0 signals "wait forever".
        timeout = Math.max(timeout, 1);
        const client = this;
        return this.makeRequest('checkVers', {}, { timeout: timeout })
            .catch(reason => {
                if (selfRepairing && (reason instanceof _errors__WEBPACK_IMPORTED_MODULE_0__.ExtensionUnavailableError)) {
                    client.eraseExtensionPresence();
                }
                throw reason;
            });
    }

    /*
     * More descriptive synonym for test method inherited from BasicSignalling class.
     *
     * Attempt to check which version (if any) of the extension is present.
     * Return the version (<string>) of extension that is present, or else `null`.
     *
     * Ordinarily the return value will be non-null only if the extension is actually present;
     * however it could also be the case that the extension was present but has now been uninstalled,
     * while the host page has not yet been reloaded.
     *
     * See also: `checkExtensionVersion()`.
     */
    apparentExtensionVersion() {
        return this.testForExtension();
    }

    /*
     * Convenience method to return a boolean true if the extension's signal is present, false otherwise.
     */
    extensionAppearsToBePresent() {
        return this.testForExtension() !== null;
    }

}


/***/ }),

/***/ "./node_modules/browser-peers/src/extserver.js":
/*!*****************************************************!*\
  !*** ./node_modules/browser-peers/src/extserver.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionServer": () => (/* binding */ ExtensionServer)
/* harmony export */ });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/browser-peers/src/errors.js");
/* harmony import */ var _ext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ext */ "./node_modules/browser-peers/src/ext.js");
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */


const browser = __webpack_require__(/*! webextension-polyfill */ "./node_modules/browser-peers/node_modules/webextension-polyfill/dist/browser-polyfill.js");



/* ----------------------------------------------------------------------------------
 * Note: The ExtensionServer class must be defined in a separate module from the
 * ExtensionClient. This is because (a) page scripts need to import the ExtensionClient
 * module, while (b) the ExtensionServer needs to use the webextension-polyfill library,
 * and (c) if a page script tries to import (any module that imports) that library, you
 * will get a console error saying,
 *   "This script should only be loaded in a browser extension."
 * and your page will not load!
 * --------------------------------------------------------------------------------*/

/*
 * Together with the `ExtensionClient` class, this class supports promise-based
 * messaging between page scripts and content scripts.
 *
 * A content script is expected to use only one ExtensionServer, since this class takes
 * steps to ensure only one is running on the page at any given time. (This is to support
 * uninstall/reinstall of the extension, as well as injection after the page is already
 * loaded.)
 *
 * The content script should instantiate an ExtensionServer, and then call its
 * `activateOnDocumentReady` method to make it activate as soon as the page is ready.
 *
 * NOTE: Be sure to read the docstring for the `activateOnDocumentReady` method. It returns a
 * promise which you need to pay attention to.
 *
 * Under this design, the extension's background script is free to actively inject the
 * content script into host pages. The ExtensionServer (on Chrome) or ExtensionClient
 * (on Firefox) will see to it that the content script becomes deactivated if the extension
 * is uninstalled.
 */
class ExtensionServer extends _ext__WEBPACK_IMPORTED_MODULE_1__.BasicSignalling {

    /*
     * @param name {string} a unique name for this server.
     * @param ext_name {string} a unique name for the extension. This allows the client to direct requests
     *   at the right server.
     * @param signal_elt_selector {string} CSS selector for the "signalling element," i.e. a DOM element
     *   that is expected to be present in any page ("host page") where the extension is
     *   meant to be accessible
     * @param ext_vers_attr {string} the name of a data attribute where the version number of the extension
     *   is to be posted on the signalling element
     * @param host_vers_attr {string} the name of a data attribute of the signalling element where the version
     *   number of the host page will be available
     */
    constructor(name, ext_name = '', signal_elt_selector, ext_vers_attr, host_vers_attr) {
        super(name, ext_name, signal_elt_selector, ext_vers_attr, {activateOnConstruction: false});
        this.host_vers_attr = host_vers_attr;
        this.ext_vers_value = browser.runtime.getManifest().version;
        this._addBuiltInHandler('checkVers', this.checkVersHandler.bind(this));
        this._addBuiltInHandler('sendMessage', this.runtimeSendMessage.bind(this));
    }

    // --------------------------------------------------------------------------------
    // Built-in handlers

    /*
     * @return: promise that resolves with the version number of the extension {string},
     *   as read from the extension manifest.
     *
     * Important: we deliberately make use of `browser.runtime` here. This is not just a
     * handy way to read the version number out of the manifest; it is critical that we
     * attempt to make use of the "extension context" so that, on Chrome, we will get a
     * signal that the extension context has been invalidated, if indeed it has (as happens
     * if the extension is uninstalled after page load).
     */
    checkVersHandler() {
        return new Promise((resolve, reject) => {
            const manifest = browser.runtime.getManifest();
            resolve(manifest.version);
        });
    }

    /* This provides a way for page scripts (via an ExtensionClient) to send a message to
     * the extension's background script. Of course, the BGS must set up listening for this
     * via `browser.runtime.onMessage`.
     *
     * Note: We need this wrapper method (i.e. cannot simply set `browser.runtime.sendMessage`
     * itself as the handler) because we have to filter out the second, `meta` argument.
     * If both args were passed to `browser.runtime.sendMessage`, it would interpret one of
     * these as its optional `options` arg, which would be a bug.
     */
    runtimeSendMessage(args, meta) {
        return browser.runtime.sendMessage(args);
    }

    // --------------------------------------------------------------------------------

    checkHandlingError(reason, wrapper) {
        console.debug(`content script detected error: ${reason} for request: ${wrapper}`);
        if (reason.message === "Extension context invalidated.") {
            /* In Chrome this happens if the browser extension has been uninstalled or deactivated.
             * This provides a way for the content script to automatically disable itself, at
             * least in Chrome. To be precise, we want to deactivate this content script, and
             * erase the signal of the extension's presence. This (a) prevents further useless
             * activity, and (b) allows a newly-injected content script to become active should the
             * extension be reinstalled.
             *
             * For Firefox, the client will have to be smarter, since there the content script
             * too (not just the background script) becomes unreachable as soon as the extension
             * is uninstalled. An appropriate test for this purpose has been implemented in
             * `ExtensionClient.checkExtensionPresence`.
             */
            this.deactivateMessaging();
            this.eraseExtensionPresence();
            const e = new _errors__WEBPACK_IMPORTED_MODULE_0__.ExtensionUnavailableError(reason);
            reason = new Error(e.serialize());
        }
        return reason;
    }

    // --------------------------------------------------------------------------------
    // Initial Setup

    /*
     * Try to determine whether the page we're looking at is the intended host page.
     *
     * @return {string|null} The host version number detected or else `null`.
     */
    testForHost() {
        const signalElt = this.getHostSignallingElement();
        if (signalElt) {
            return signalElt.getAttribute(this.host_vers_attr);
        }
        return null;
    }

    /*
     * Make the mark that indicates that this content script is the first (from this extension)
     * to activate messaging on this page.
     */
    markExtensionPresence() {
        const signalElt = this.getHostSignallingElement();
        signalElt.setAttribute(this.ext_vers_attr, this.ext_vers_value);
    }

    _conditionalActivation(resolve, reject) {
        const host_vers = this.testForHost();
        const ext_vers = this.testForExtension();
        let msg = `ExtensionServer "${this.name}" constructed at ${this.constructionTime}`;
        // Only if (a) the page _does_ appear to be the intended host, while (b) it does _not_
        // appear that an extension content script has yet activated, do we go ahead and activate.
        if (host_vers !== null && ext_vers === null) {
            // First mark our presence, to stop any others from setting up a redundant server.
            this.markExtensionPresence();
            console.debug(msg + ' chose to activate.');
            this.activateMessaging()
            resolve();
        } else {
            msg += ' declined to activate due to: '
            msg += host_vers === null ? 'Not a host page.' : `Ext "${ext_vers}" already present.`;
            console.debug(msg);
            msg += ' You should ensure your content script removes any event listeners and makes no memory leaks.';
            msg += ' (The ExtensionServer has already removed its own listeners.)';
            reject(msg);
        }
    }

    /* The content script where the ExtensionServer is instantiated should call this to make
     * the server either "activate" as soon as the page is ready, or decline to do so. It will
     * decline either because the page is not a host page, or because the extension has already
     * been activated here.
     *
     * Returns a promise which either _resolves_ when the server activates, or _rejects_ when it
     * declines to do so.
     *
     * The right way to set up your content script therefore is as follows:
     *
     * - Try to make the initialization and activation of the ExtensionServer the first thing
     *   you do.
     *
     * - Pass both a fulfillment handler and a rejection handler to the `then()` of the promise
     *   this method returns.
     *
     * - Use the fulfillment handler to set up anything else the content script needs, in particular
     *   anything that might involve adding event listeners.
     *
     * - If you had to set event listeners _before_ the call to `activateOnDocumentReady()`, be
     *   sure to use the rejection handler to remove these listeners, and take any other
     *   necessary steps to ensure your content script makes no memory leaks.
     *
     * - Even if you have no potential memory leaks to attend to, you should have a rejection
     *   handler anyway, just to suppress the error message, and signal (to other developers)
     *   that you've thought about it.
     *
     * Basically, your content script should be idempotent: running it a second time should not
     * change anything. This is especially critical under Manifest V3, where background scripts
     * are expected to run repeatedly. If your bg script programmatically injects your content
     * script (so that the extension activates immediately on existing tabs, without having to
     * reload them), then your content script too is going to run repeatedly within each tab.
     * Even if you don't do any programmatic injection, you should write your content script
     * carefully, to avoid memory leaks in case of repeated execution.
     *
     */
    activateOnDocumentReady() {
        return new Promise((resolve, reject) => {
            if (document.readyState !== 'loading') {
                this._conditionalActivation(resolve, reject);
            } else {
                /* We're not worried about this event listener as a memory leak.
                 * It will only be added in cases where the content script has run
                 * before the page has finished loading. That is not the "repeated
                 * run" case we are worried about. The latter arises due to background
                 * scripts which may re-inject content scripts when they re-run.
                 */
                document.addEventListener('DOMContentLoaded', _ => {
                    this._conditionalActivation(resolve, reject);
                });
            }
        });
    }

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

/***/ "./node_modules/browser-peers/src/pscspeer.js":
/*!****************************************************!*\
  !*** ./node_modules/browser-peers/src/pscspeer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PsCsPeer": () => (/* binding */ PsCsPeer)
/* harmony export */ });
/* harmony import */ var _peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peer */ "./node_modules/browser-peers/src/peer.js");
/*! browser-peers v0.1.0 | Copyright (c) 2020-2022 Steve Kieffer | MIT license */
/* SPDX-License-Identifier: MIT */




/*
 * This peer class supports symmetrical communication between page
 * scripts (PS) and content scripts (CS) in a browser extension, via use
 * of window.postMessage.
 */
class PsCsPeer extends _peer__WEBPACK_IMPORTED_MODULE_0__.Peer {

    /*
     * @param name {string} A unique name with which to tell this peer apart
     *   from all others.
     * @param ext_name {string} A name for the browser extension.
     * @param options {
     *   activateOnConstruction: bool (default true)
     *     If true, activate messaging at end of constructor method.
     * }
     */
    constructor(name, ext_name, options) {
        super(name);
        const {
            activateOnConstruction = true
        } = options || {};
        this.ext_name = ext_name;
        this.boundMessageHandler = this.handleMessageEvent.bind(this);
        if (activateOnConstruction) {
            this.activateMessaging();
        }
    }

    activateMessaging() {
        window.addEventListener("message", this.boundMessageHandler);
        console.debug(`PsCsPeer "${this.name}" activated messaging.`);
    }

    deactivateMessaging() {
        window.removeEventListener("message", this.boundMessageHandler);
        console.debug(`PsCsPeer "${this.name}" de-activated messaging.`);
    }

    handleMessageEvent(event) {
        // We listen to message events only if they originated from our own window and origin,
        // and contain a data attribute.
        if (event.source === window && event.origin === window.location.origin && event.data) {
            const wrapper = event.data;
            // Only listen to messages for the right extension and for this peer.
            if (wrapper.extName === this.ext_name && wrapper.to === this.name) {
                super.handleMessage(wrapper);
            }
        }
    }

    // ------------------------------------------------------------------------
    // Override abstract base class methods

    postMessageAsPeer(peerName, wrapper) {
        wrapper.extName = this.ext_name;
        wrapper.to = peerName;
        // Post the message only to windows whose origin is the same as ours.
        window.postMessage(wrapper, window.location.origin);
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
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var browser_peers_src_csbgspeer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-peers/src/csbgspeer */ "./node_modules/browser-peers/src/csbgspeer.js");
/* harmony import */ var _downloadmgr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloadmgr */ "./src/downloadmgr.js");
/* harmony import */ var browser_peers_src_extserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser-peers/src/extserver */ "./node_modules/browser-peers/src/extserver.js");
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






const server = new browser_peers_src_extserver__WEBPACK_IMPORTED_MODULE_2__.ExtensionServer(
    'pbeServer', 'pfsc-ext',
    '#appLayout.pfsc-ise', 'data-pbe-vers',
    'data-proofscape-ise-vers'
);
server.activateOnDocumentReady().then(() => {
    const bgPeerName = 'pfscBgPeer';
    const portClient = new browser_peers_src_csbgspeer__WEBPACK_IMPORTED_MODULE_0__.CsBgsPortClient(`pfscCsPortClient-@(${(new Date()).toISOString()})-${Math.random()}`);
    portClient.checkReady(bgPeerName).then(() => {
        const csDlm = new _downloadmgr__WEBPACK_IMPORTED_MODULE_1__.CsDownloadMgr(portClient, bgPeerName, 'dlm');
        server
            .addHandler("request-pdf", csDlm.getPdf.bind(csDlm))
            .addHandler("complete-delayed-pdf-storage", csDlm.completeDelayedPdfStorage.bind(csDlm))
        ;
        server.setReady();
    });
}, reason => {
    // We have no listeners to deregister, or other memory leaks that we're aware of.
    console.debug(reason);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU0sSUFBMEM7QUFDaEQsSUFBSSxpQ0FBZ0MsQ0FBQyxNQUFRLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUN4RCxJQUFJLEtBQUssWUFRTjtBQUNILENBQUM7QUFDRDs7QUFFQSxzQ0FBc0M7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3U0FBd1M7QUFDeFM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEdBQUc7QUFDcEIsbUJBQW1CLFNBQVM7QUFDNUI7OztB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QUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixHQUFHO0FBQ3BCLG1CQUFtQixTQUFTO0FBQzVCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxrQkFBa0IsRUFBRSxzQ0FBc0MsTUFBTSxLQUFLLFVBQVUsWUFBWTtBQUM1STs7QUFFQTtBQUNBLGdEQUFnRCxrQkFBa0IsRUFBRSxzQ0FBc0MsTUFBTSxLQUFLLFVBQVUsWUFBWTtBQUMzSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGdDQUFnQyxNQUFNO0FBQ3RDLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUSxjQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQSxpQkFBaUIsUUFBUSxjQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUEsK0NBQStDLGVBQWU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRztBQUN0QjtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBLDBFQUEwRTtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7OztBQUdaO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0Msa0JBQWtCLEVBQUUsc0NBQXNDLE1BQU0sS0FBSyxVQUFVLFlBQVk7QUFDMUk7O0FBRUE7QUFDQSw4Q0FBOEMsa0JBQWtCLEVBQUUsc0NBQXNDLE1BQU0sS0FBSyxVQUFVLFlBQVk7QUFDekk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7O0FDcHZDWTtBQUNaO0FBQ0E7QUFDQSxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUFk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0osMENBQTBDLE9BQU87QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxpQkFBaUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsMEJBQTBCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLGlCQUFpQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FO0FBQ0E7QUFDQSxTQUFTLDJCQUEyQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCwyQkFBMkI7QUFDM0U7QUFDQTtBQUNBLFNBQVMsNkJBQTZCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyw4QkFBOEI7QUFDcEU7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbUJBQU8sQ0FBQyx5REFBZTtBQUN6QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3phRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLG1CQUFPLENBQUMsNEZBQXVCO0FBQy9DLFlBQVksbUJBQU8sQ0FBQyxvREFBVzs7QUFFTTs7QUFFckM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG1CQUFtQixLQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1Qix1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixxREFBcUQsT0FBTztBQUM1RDtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFPRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3WUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLDRGQUF1Qjs7QUFFSTtBQUNtQjtBQUNwQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUMsb0RBQW9ELFFBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0Q7QUFDQTtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxJQUFJO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsSUFBSTtBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELElBQUk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTs7QUFFQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0EseUNBQXlDLHdCQUF3QjtBQUNqRSxzREFBc0QsSUFBSTtBQUMxRCxpQ0FBaUMsU0FBUztBQUMxQztBQUNBLCtDQUErQyxtQkFBbUI7QUFDbEU7QUFDQSwyREFBMkQsS0FBSztBQUNoRTtBQUNBLDRDQUE0Qyx1RUFBdUU7QUFDbkg7QUFDQSx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLG1EQUFtRCxLQUFLO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLHVCQUF1QixNQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0MsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSw4QkFBOEIsZ0ZBQTBCLEVBQUUsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsZUFBZSxLQUFLO0FBQ3BCLGVBQWUsK0NBQVE7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIscUJBQXFCLEtBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IsWUFBWTtBQUNsQyx3QkFBd0IsTUFBTTtBQUM5QjtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQSwwQkFBMEIsWUFBWTtBQUN0QztBQUNBO0FBQ0EsMkJBQTJCLE1BQU0sMkNBQTJDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBOztBQUVBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBWTtBQUMzQjtBQUNBLFNBQVM7QUFDVDs7QUFFQSxtQkFBbUIsS0FBSztBQUN4QixlQUFlLG9EQUFZO0FBQzNCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQSxzQkFBc0IsV0FBVztBQUNqQywwQkFBMEIsUUFBUTtBQUNsQyx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0QsS0FBSztBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUTtBQUNsQztBQUNBLG9CQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWUsR0FBRyxXQUFXO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixLQUFLO0FBQ3hCO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RCxnQkFBZ0Isb0RBQVk7QUFDNUIsU0FBUztBQUNUOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLEtBQUs7QUFDckMsbUNBQW1DLHdCQUF3QjtBQUMzRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLDRGQUF1Qjs7QUFLYjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2RUFBdUI7QUFDakQ7QUFDQSxVQUFVO0FBQ1YsMEJBQTBCLGdGQUEwQjtBQUNwRDtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7OztVQzlFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4RDtBQUNoQjtBQUNnQjs7O0FBRzlELG1CQUFtQix3RUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0VBQWUsdUJBQXVCLDJCQUEyQixJQUFJLGNBQWM7QUFDOUc7QUFDQSwwQkFBMEIsdURBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGVlcnMvbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy9jc2Jnc3BlZXIuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy9leHQuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy9leHRzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy9wZWVyLmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wZWVycy9zcmMvcHNjc3BlZXIuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy9icm93c2VyLXBlZXJzL3NyYy91dGlsLmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9ub2RlX21vZHVsZXMvbHJ1LWNhY2hlL2luZGV4LmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vbm9kZV9tb2R1bGVzL3lhbGxpc3QvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL25vZGVfbW9kdWxlcy95YWxsaXN0L3lhbGxpc3QuanMiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL3NyYy9jYWNoZS5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0Ly4vc3JjL2Rvd25sb2FkbWdyLmpzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Bmc2MtYnJvd3Nlci1leHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZnNjLWJyb3dzZXItZXh0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGZzYy1icm93c2VyLWV4dC8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiLCBbXCJtb2R1bGVcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShtb2R1bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QpO1xuICAgIGdsb2JhbC5icm93c2VyID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuNi4wIC0gTW9uIERlYyAyMyAyMDE5IDEyOjMyOjUzICovXG5cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuXG4gIC8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG5cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0eXBlb2YgYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYnJvd3NlcikgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcbiAgICBjb25zdCBTRU5EX1JFU1BPTlNFX0RFUFJFQ0FUSU9OX1dBUk5JTkcgPSBcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG5cblxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3Rpb25cbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heFJlc29sdmVkQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBjcmVhdGVkIGJ5IHRoZSB3cmFwcGVkIGFzeW5jIGZ1bmN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IG51bUFyZ3MgPT4gbnVtQXJncyA9PSAxID8gXCJhcmd1bWVudFwiIDogXCJhcmd1bWVudHNcIjtcbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heFJlc29sdmVkQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBjcmVhdGVkIGJ5IHRoZSB3cmFwcGVkIGFzeW5jIGZ1bmN0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihvYmplY3QsIC4uLiopfVxuICAgICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTsgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG5cbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG5cbiAgICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICAgIGxldCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldCB8fCBwcm9wIGluIGNhY2hlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0YXJnZXRbcHJvcF07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygd3JhcHBlcnNbcHJvcF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxuICAgICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8IGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgICAvLyBvZi4gQ3JlYXRlIGEgc3ViLW9iamVjdCB3cmFwcGVyIGZvciBpdCB3aXRoIHRoZSBhcHByb3ByaWF0ZSBjaGlsZFxuICAgICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgXCIqXCIpKSB7XG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9OyAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG5cbiAgICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTsgLy8gS2VlcCB0cmFjayBpZiB0aGUgZGVwcmVjYXRpb24gd2FybmluZyBoYXMgYmVlbiBsb2dnZWQgYXQgbGVhc3Qgb25jZS5cblxuXG4gICAgICBsZXQgbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXG4gICAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXG4gICAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmICghbG9nZ2VkU2VuZFJlc3BvbnNlRGVwcmVjYXRpb25XYXJuaW5nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORywgbmV3IEVycm9yKCkuc3RhY2spO1xuICAgICAgICAgICAgICAgIGxvZ2dlZFNlbmRSZXNwb25zZURlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNSZXN1bHRUaGVuYWJsZSA9IHJlc3VsdCAhPT0gdHJ1ZSAmJiBpc1RoZW5hYmxlKHJlc3VsdCk7IC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cblxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXG4gICAgICAgICAgLy8gcHJvbWlzZSkuXG5cblxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuXG4gICAgICAgICAgICAgIGlmIChlcnJvciAmJiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9OyAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuXG5cbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICB9IC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cblxuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xuICAgICAgICByZWplY3QsXG4gICAgICAgIHJlc29sdmVcbiAgICAgIH0sIHJlcGx5KSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgICAvLyBhbiBFcnJvciBpbnN0YW5jZS5cbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHJlcGx5KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtcbiAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICByZWplY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcHBlZENiKTtcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgICBvbk1lc3NhZ2U6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICB0YWJzOiB7XG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge1xuICAgICAgICAgICAgbWluQXJnczogMixcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgICBjbGVhcjoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBnZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgd2Vic2l0ZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIGNocm9tZSAhPSBcIm9iamVjdFwiIHx8ICFjaHJvbWUgfHwgIWNocm9tZS5ydW50aW1lIHx8ICFjaHJvbWUucnVudGltZS5pZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xuICAgIH0gLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cblxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gYnJvd3NlcjtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm93c2VyLXBvbHlmaWxsLmpzLm1hcFxuIiwiLyohIGJyb3dzZXItcGVlcnMgdjAuMS4wIHwgQ29weXJpZ2h0IChjKSAyMDIwLTIwMjIgU3RldmUgS2llZmZlciB8IE1JVCBsaWNlbnNlICovXG4vKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUICovXG5cbmNvbnN0IGJyb3dzZXIgPSByZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpO1xuXG5pbXBvcnQgeyBQZWVyIH0gZnJvbSBcIi4vcGVlclwiO1xuXG4vKlxuICogVGhpcyBwZWVyIGNsYXNzIHN1cHBvcnRzIHN5bW1ldHJpY2FsIGNvbW11bmljYXRpb24gYmV0d2VlbiBjb250ZW50XG4gKiBzY3JpcHRzIChDUykgYW5kIGJhY2tncm91bmQgc2NyaXB0cyAoQkdTKSBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLCB2aWEgdXNlXG4gKiBvZiB0aGUgYnJvd3Nlci5ydW50aW1lLlBvcnQgY2xhc3MuXG4gKlxuICogQ29tbXVuaWNhdGlvbiBpcyBzeW1tZXRyaWNhbCBpbiB0aGUgdXN1YWwgd2F5IChlaXRoZXIgc2lkZSBjYW4gaW5pdGlhdGUgYVxuICogcmVxdWVzdCwgYW5kIHJlY2VpdmUgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHJlc3BvbnNlIGZyb20gdGhlIG90aGVyIHNpZGUpLlxuICpcbiAqIEVzdGFibGlzaGluZyBjb25uZWN0aW9ucyBob3dldmVyIGlzIGFzeW1tZXRyaWNhbDogdGhlIHBlZXIgb24gdGhlIENTIHNpZGUgbXVzdFxuICogb3BlbiB0aGUgY29ubmVjdGlvbi4gVGhpcyBpcyBiZWNhdXNlIHRvIGdvIGluIHRoZSBvdGhlciBkaXJlY3Rpb24gd291bGQgcmVxdWlyZVxuICogdXNlIG9mIGBicm93c2VyLnRhYnNgLCBhbmQgd2UgYXJlIHRyeWluZyB0byBrZWVwIHRoaW5ncyBzaW1wbGUgYW5kIGF2b2lkIHRoYXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDc0Jnc1BlZXIgZXh0ZW5kcyBQZWVyIHtcblxuICAgIC8qXG4gICAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gTVVTVCBOT1QgY29udGFpbiB0aGUgYCNgIGNoYXJhY3Rlci4gT3RoZXJ3aXNlIHNob3VsZFxuICAgICAqICAgYmUgYW55IHVuaXF1ZSBuYW1lIHdpdGggd2hpY2ggdG8gdGVsbCB0aGlzIHBlZXIgYXBhcnQgZnJvbSBhbGwgb3RoZXJzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYENzQmdzUGVlciBcIiR7bmFtZX1cIiB3YXMgY29uc3RydWN0ZWQgJHt0aGlzLmNvbnN0cnVjdGlvblRpbWV9YCk7XG4gICAgICAgIHRoaXMucG9ydHNCeVBlZXJOYW1lID0gbmV3IE1hcCgpO1xuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKHRoaXMuYWNjZXB0Q29ubmVjdGlvbi5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb25uZWN0aW9uc1xuXG4gICAgLyogT3BlbiBhIGNvbm5lY3Rpb24gd2l0aCBhbm90aGVyIHBlZXIuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gb25seSBiZSBjYWxsZWQgb24gcGVlcnMgbGl2aW5nIG9uIHRoZSBDUyBzaWRlLCBzaW5jZSBpdFxuICAgICAqIHVzZXMgYGJyb3dzZXIucnVudGltZS5jb25uZWN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwZWVyTmFtZSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgcGVlciB0byB3aGljaCB3ZSB3aXNoIHRvIGNvbm5lY3QuXG4gICAgICovXG4gICAgb3BlbkNvbm5lY3Rpb24ocGVlck5hbWUpIHtcbiAgICAgICAgLyogSW4gb3JkZXIgZm9yIHBlZXIgUCB0byBjb25uZWN0IHRvIHBlZXIgUSwgUCBtdXN0IGJlIG9uIHRoZSBDUyBzaWRlLCBhbmQgbXVzdFxuICAgICAgICAqIGNhbGwgYGJyb3dzZXIucnVudGltZS5jb25uZWN0YCwgcGFzc2luZyBhcyBuYW1lIG9mIHRoZSBwb3J0IGEgc3RyaW5nIG9mIHRoZVxuICAgICAgICAqIGZvcm0gYCR7bmFtZU9mUH0jJHtuYW1lT2ZRfWAuICovXG4gICAgICAgIGNvbnN0IHBvcnROYW1lID0gYCR7dGhpcy5uYW1lfSMke3BlZXJOYW1lfWA7XG4gICAgICAgIGNvbnN0IHBvcnQgPSBicm93c2VyLnJ1bnRpbWUuY29ubmVjdCh7bmFtZTogcG9ydE5hbWV9KTtcbiAgICAgICAgdGhpcy5zYXZlUG9ydEFuZExpc3RlbihwZWVyTmFtZSwgcG9ydCk7XG4gICAgfVxuXG4gICAgYWNjZXB0Q29ubmVjdGlvbihwb3J0KSB7XG4gICAgICAgIGlmIChwb3J0Lm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IFtwZWVyTmFtZSwgbXlOYW1lXSA9IHBvcnQubmFtZS5zcGxpdChcIiNcIik7XG4gICAgICAgICAgICBpZiAobXlOYW1lID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBDb25uIGZyb20gXCIke3BlZXJOYW1lfVwiIGFjY2VwdGVkIGJ5IENzQmdzUGVlciAke3RoaXMubmFtZX0gY29uc3RydWN0ZWQgYXQgJHt0aGlzLmNvbnN0cnVjdGlvblRpbWV9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlUG9ydEFuZExpc3RlbihwZWVyTmFtZSwgcG9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzYXZlUG9ydEFuZExpc3RlbihwZWVyTmFtZSwgcG9ydCkge1xuICAgICAgICB0aGlzLnBvcnRzQnlQZWVyTmFtZS5zZXQocGVlck5hbWUsIHBvcnQpO1xuICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIEluIGJvdGggQ2hyb21lIGFuZCBGaXJlZm94LCB0aGUgZGlzY29ubmVjdCBldmVudCB3aWxsIGluIHBhcnRpY3VsYXIgYmUgZmlyZWRcbiAgICAgICAgLy8gZm9yIGEgQ1Mtc2lkZSBwb3J0IGlmIGFuZCB3aGVuIHRoZSB0YWIgaW4gd2hpY2ggaXQgbGl2ZXMgY2xvc2VzLiBTbyB0aGlzXG4gICAgICAgIC8vIGxpc3RlbmVyIHByb3ZpZGVzIGEgYm9va2tlZXBpbmcgc29sdXRpb24gZm9yIGNsb3NpbmcgdGFicy5cbiAgICAgICAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUG9ydCBmcm9tICR7dGhpcy5uYW1lfSB0byBcIiR7cGVlck5hbWV9XCIgZGlzY29ubmVjdGVkYCk7XG4gICAgICAgICAgICB0aGlzLnBvcnRzQnlQZWVyTmFtZS5kZWxldGUocGVlck5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPdmVycmlkZSBhYnN0cmFjdCBiYXNlIGNsYXNzIG1ldGhvZHNcblxuICAgIGdldEFsbFBlZXJOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wb3J0c0J5UGVlck5hbWUua2V5cygpKTtcbiAgICB9XG5cbiAgICBwb3N0TWVzc2FnZUFzUGVlcihwZWVyTmFtZSwgd3JhcHBlcikge1xuICAgICAgICAvKiBTdGFydGluZyB3aXRoIFwiTWFuaWZlc3QgVjNcIiwgYmFja2dyb3VuZCBwYWdlcyBhcmUgbm9uLXBlcnNpc3RlbnQsIGFuZCBydW4gaW5zdGVhZCBhc1xuICAgICAgICAgICBzZXJ2aWNlIHdvcmtlcnMuIEl0IHNlZW1zIChpbiBDaHJvbWUgMTAyLjAuNTAwNS4xMTUgYXQgbGVhc3QpIHRoYXQgdGhlc2Ugd29ya2VycyB3aWxsXG4gICAgICAgICAgIGJlIHN0b3BwZWQgYnkgZm9yY2UgYWZ0ZXIgYWJ0IDUgbWluIG9mIGluYWN0aXZpdHksIGV2ZW4gaWYgeW91IGhhdmUgYW4gb3BlbiBQb3J0LlxuICAgICAgICAgICBUaGVyZWZvcmUgd2Ugbm93IGJlZ2luIGJ5IGF0dGVtcHRpbmcgdG8gcmVvcGVuIGEgY29ubmVjdGlvbiBpZiBpdCBzZWVtcyB0byBoYXZlIGJlZW4gY2xvc2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCF0aGlzLnBvcnRzQnlQZWVyTmFtZS5oYXMocGVlck5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5Db25uZWN0aW9uKHBlZXJOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYENzQmdzUGVlciByZS1vcGVuZWQgcG9ydCB0byAke3BlZXJOYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvcnQgPSB0aGlzLnBvcnRzQnlQZWVyTmFtZS5nZXQocGVlck5hbWUpO1xuICAgICAgICBpZiAoIXBvcnQpIHtcbiAgICAgICAgICAgIHRocm93IGBDb3VsZCBub3Qgb3BlbiBwb3J0IHRvICR7cGVlck5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh3cmFwcGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLyogSnVzdCBpbiBjYXNlIHRoZSBwb3J0IHdhcyBzb21laG93IGRpc2Nvbm5lY3RlZCBidXQgb3VyIGJvb2trZWVwaW5nIGVmZm9ydHMgZmFpbGVkIHRvXG4gICAgICAgICAgICAgKiBub3RlIGl0LCB3ZSB3YW50IHRvIGdyYWNlZnVsbHkgcmVtb3ZlIHRoZSBwb3J0IGZyb20gb3VyIHJlY29yZHMgbm93LlxuICAgICAgICAgICAgICogTGFzdCBJIGNoZWNrZWQgKENocm9tZSA4NS4wLjQxODMuMTIxIGFuZCBGaXJlZm94IERldmVsb3BlciBFZGl0aW9uIDgyLjBiNyksXG4gICAgICAgICAgICAgKiBDaHJvbWUgc2F5cywgXCJBdHRlbXB0aW5nIHRvIHVzZSBhIGRpc2Nvbm5lY3RlZCBwb3J0IG9iamVjdFwiLFxuICAgICAgICAgICAgICogd2hpbGUgRmlyZWZveCBzYXlzLCBcIkF0dGVtcHQgdG8gcG9zdE1lc3NhZ2Ugb24gZGlzY29ubmVjdGVkIHBvcnRcIi5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKGUubWVzc2FnZSAmJiBlLm1lc3NhZ2UuaW5kZXhPZignZGlzY29ubmVjdGVkIHBvcnQnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYENhdWdodCBkaXNjb25uZWN0ZWQgcG9ydCBcIiR7cG9ydC5uYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgW25hbWUxLCBuYW1lMl0gPSBwb3J0Lm5hbWUuc3BsaXQoXCIjXCIpO1xuICAgICAgICAgICAgICAgIC8vIE9uZSBuYW1lIHNob3VsZCBiZSB0aGF0IG9mIG91ciBwZWVyLCBvbmUgb3VyIG93bi5cbiAgICAgICAgICAgICAgICAvLyBXZSBjYW4gc2FmZWx5IGF0dGVtcHQgdG8gZGVsZXRlIGJvdGggZnJvbSBvdXIgbWFwcGluZy5cbiAgICAgICAgICAgICAgICB0aGlzLnBvcnRzQnlQZWVyTmFtZS5kZWxldGUobmFtZTEpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9ydHNCeVBlZXJOYW1lLmRlbGV0ZShuYW1lMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4vKlxuICogVGhpcyBpcyBhIGNsaWVudCBjbGFzcywgd2hpY2ggaXMgbWVhbnQgdG8gYmUgaW5zdGFudGlhdGVkIGluIGEgY29udGVudCBzY3JpcHQsXG4gKiBhbmQgbWFrZSByZXF1ZXN0cyBvZiBhIENzQmdzUGVlciwgdXNpbmcgYSBmcmVzaCBwb3J0IGZvciBlYWNoIHJlcXVlc3QsIGFuZFxuICogdGhyb3dpbmcgZWFjaCBwb3J0IGF3YXkgYXMgc29vbiBhcyBpdHMgcmVzcG9uc2UgY29tZXMgYmFjay5cbiAqXG4gKiBJdCBpcyByZWFzb25hYmxlIHRvIGFzayB3aGF0IGlzIHRoZSBwdXJwb3NlIG9mIHN1Y2ggYSBjbGFzcywgd2hlbiB3ZSB1c3VhbGx5XG4gKiBzYXkgdGhlIHB1cnBvc2Ugb2YgcG9ydHMgaXMgdG8gbWFpbnRhaW4gbG9uZy1saXZlZCBjb25uZWN0aW9ucyBmb3IgbXVsdGlwbGVcbiAqIHJlcXVlc3RzIGFuZCByZXNwb25zZXMuIEhvd2V2ZXIsIGluIGZhY3QgdGhlcmUgaXMgYW5vdGhlciByZWFzb24gdG8gdXNlIHBvcnRzLFxuICogYW5kIHRoaXMgaXMgdGhhdCB0aGV5IGFyZSB0aGUgX2Zhc3Rlc3RfIHdheSB0byBzZW5kIGRhdGEgYmV0d2VlbiBDUyBhbmQgQkdTLFxuICogd2hpY2ggY2FuIGJlIGltcG9ydGFudCB3aGVuIHNlbmRpbmcgbGFyZ2UgYnl0ZSBhcnJheXMuXG4gKlxuICogV2h5IHRoZW4gc2hvdWxkIHRoZSBwb3J0cyBiZSB1c2VkIG9ubHkgZm9yIGEgc2luZ2xlIHJlcXVlc3QsIGJlZm9yZSB0aHJvd2luZ1xuICogdGhlbSBhd2F5PyBUaGlzIGlzIGluIG9yZGVyIHRvIHN1cHBvcnQgYnJvd3NlciBleHRlbnNpb25zIHVuZGVyIE1hbmlmZXN0IFYzLFxuICogd2hlcmUgdGhlIEJHUyBjYW4gYmUgdGVybWluYXRlZCBhdCBhbnkgdGltZSAoY3VycmVudGx5LCBDaHJvbWUgc2VlbXMgdG8gdGVybWluYXRlXG4gKiB0aGUgQkdTIGFmdGVyIDUgbWludXRlcyBvZiBpbmFjdGl2aXR5LCBldmVuIGlmIHRoZXJlIGFyZSBvcGVuIHBvcnRzKS4gVGhlIEJHUyBpc1xuICogc3RhcnRlZCBhbmV3IGluIHJlc3BvbnNlIHRvIGV2ZW50cyBvbiB3aGljaCBpdCBoYXMgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuIFRoaXNcbiAqIG1lYW5zIGEgY2xpZW50IHRoYXQgdHJpZWQgdG8gcmV1c2UgYSBwb3J0IHdvdWxkIGFsd2F5cyBiZSBpbiBkYW5nZXIgb2YgdXNpbmdcbiAqIGEgc3RhbGUgcG9ydCwgd2hvc2UgcmVjaXBpZW50IGhhZCB2YW5pc2hlZC4gVGVzdHMgaGF2ZSBzaG93biBpdCBpcyBubyB1c2UgdHJ5aW5nXG4gKiB0byBtb25pdG9yIGRpc2Nvbm5lY3QgZXZlbnRzIGVpdGhlcjsgd2UgcmVwZWF0ZWRseSBmb3VuZCB0aGF0IG5vIHN1Y2ggZXZlbnRcbiAqIHdhcyByZWNlaXZlZCBvbiB0aGUgQ1Mgc2lkZSwgd2hlbiB0aGUgQkdTIHdhcyBmb3JjaWJseSBjbG9zZWQgYnkgdGhlIGJyb3dzZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDc0Jnc1BvcnRDbGllbnQgZXh0ZW5kcyBQZWVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYENzQmdzUG9ydENsaWVudCBcIiR7bmFtZX1cIiB3YXMgY29uc3RydWN0ZWQgJHt0aGlzLmNvbnN0cnVjdGlvblRpbWV9YCk7XG4gICAgfVxuXG4gICAgZnJvbUFkZHJlc3MoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9LSR7dGhpcy5uZXh0U2VxTnVtfWA7XG4gICAgfVxuXG4gICAgb3BlbkNvbm5lY3Rpb24ocGVlck5hbWUpIHtcbiAgICAgICAgY29uc3QgcG9ydE5hbWUgPSBgJHt0aGlzLmZyb21BZGRyZXNzKCl9IyR7cGVlck5hbWV9YDtcbiAgICAgICAgY29uc3QgcG9ydCA9IGJyb3dzZXIucnVudGltZS5jb25uZWN0KHtuYW1lOiBwb3J0TmFtZX0pO1xuICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih3cmFwcGVyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHdyYXBwZXIudHlwZSA9PT0gJ3Jlc3BvbnNlJywgJ0EgQ3NCZ3NQb3J0Q2xpZW50IHNob3VsZCBuZXZlciByZWNlaXZlIHJlcXVlc3RzLicpO1xuICAgICAgICAgICAgcG9ydC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1lc3NhZ2Uod3JhcHBlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcG9ydDtcbiAgICB9XG5cbiAgICBwb3N0TWVzc2FnZUFzUGVlcihwZWVyTmFtZSwgd3JhcHBlcikge1xuICAgICAgICBjb25zdCBwb3J0ID0gdGhpcy5vcGVuQ29ubmVjdGlvbihwZWVyTmFtZSk7XG4gICAgICAgIGlmICghcG9ydCkge1xuICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBvcGVuIHBvcnQgdG8gJHtwZWVyTmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uod3JhcHBlcik7XG4gICAgfVxuXG59XG4iLCIvKiEgYnJvd3Nlci1wZWVycyB2MC4xLjAgfCBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMiBTdGV2ZSBLaWVmZmVyIHwgTUlUIGxpY2Vuc2UgKi9cbi8qIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVQgKi9cblxuLypcbiAqIEhlcmUgd2UgZGVmaW5lIHNwZWNpYWwgZXJyb3IgY2xhc3NlcyB0aGF0IGFyZSBkZXNpZ25lZCB0byBiZSBzZXJpYWxpemFibGUuXG4gKiBUaGlzIGlzIHNvIHRoYXQgdGhleSBjYW4gYmUgY29tbXVuaWNhdGVkIHZpYSB2YXJpb3VzIG1lc3NhZ2luZyBzeXN0ZW1zLFxuICogYW5kIHRoZW4gcmVjb25zdHJ1Y3RlZCBvbiB0aGUgb3RoZXIgc2lkZS5cbiAqXG4gKiBBbGwgZXJyb3IgY2xhc3NlcyBkZWZpbmVkIGhlcmUgTVVTVDpcbiAqXG4gKiAgICogaGF2ZSBhIGNvbnN0cnVjdG9yIHRoYXQgYWNjZXB0cyBhbiBvYmplY3RcbiAqXG4gKiAgICogZGVmaW5lIGB0aGlzLm5hbWVgIGVxdWFsIHRvIHRoZWlyIG93biBjbGFzcyBuYW1lIChhcyBzdHJpbmchKVxuICpcbiAqICAgKiBiZSByZWdpc3RlcmVkIGluIGBLTk9XTl9FUlJPUl9DTEFTU0VTYCAoc2VlIGJlbG93KSB1bmRlciB0aGVpciBjbGFzcyBuYW1lXG4gKlxuICogICAqIGhhdmUgYSBgc2VyaWFsaXplKClgIG1ldGhvZCB0aGF0IHJldHVybnMgdGhlIEpTT04uc3RyaW5naWZ5IG9mIGFuXG4gKiAgICAgb2JqZWN0IHRoYXQ6XG4gKiAgICAgICAtIGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzJ3MgY29uc3RydWN0b3IsIGFuZFxuICogICAgICAgLSBpbmNsdWRlcyBgX2Vycm9yX2NsYXNzX25hbWU6IHRoaXMubmFtZWBcbiAqXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTcGVjaWFsIGVycm9yIGNsYXNzZXNcblxuLypcbiAqIFRoaXMgZXJyb3IgY2xhc3MgcmVwcmVzZW50cyBjYXNlcyBpbiB3aGljaCB3ZSBhcmUgdHJ5aW5nIHRvIGRvIHNvbWV0aGluZ1xuICogdGhhdCBpbnZvbHZlcyBiZWxvbmdpbmcgdG8gYSBncm91cCwgYnV0IHdlIGRvIG5vdCAoeWV0KSBiZWxvbmcgdG8gb25lLlxuICovXG5leHBvcnQgY2xhc3MgTm9Hcm91cEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyBtZXNzYWdlIH0pIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTm9Hcm91cEVycm9yXCI7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgX2Vycm9yX2NsYXNzX25hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbi8qXG4gKiBUaGlzIGVycm9yIGNsYXNzIGlzIGludGVuZGVkIHRvIHJlcHJlc2VudCBjYXNlcyBpbiB3aGljaCB0aGUgZXh0ZW5zaW9uIGhhc1xuICogYmVjb21lIHVuYXZhaWxhYmxlLiBVc3VhbGx5IChhY3R1YWxseSB0aGUgb25seSBjYXNlIEknbSBjdXJyZW50bHkgYXdhcmUgb2YpXG4gKiB0aGlzIGlzIGJlY2F1c2UgdGhlIGV4dGVuc2lvbiB3YXMgdW5pbnN0YWxsZWQgYWZ0ZXIgdGhhdCBwYWdlIHdhcyBsb2FkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb25VbmF2YWlsYWJsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyBtZXNzYWdlIH0pIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiRXh0ZW5zaW9uVW5hdmFpbGFibGVFcnJvclwiO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIF9lcnJvcl9jbGFzc19uYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKiBSZXByZXNlbnRzIGNhc2VzIGluIHdoaWNoIGEgUGVlciBpcyBhdHRlbXB0aW5nIHRvIGxvb2sgdXAgYW5vdGhlclxuICogUGVlciwgYnV0IGNhbm5vdCBmaW5kIGl0LlxuICovXG5leHBvcnQgY2xhc3MgVW5rbm93blBlZXJFcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgbWVzc2FnZSB9KSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlVua25vd25QZWVyRXJyb3JcIjtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBfZXJyb3JfY2xhc3NfbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuLypcbiAqIFRoaXMgcmVwcmVzZW50cyBjYXNlcyBpbiB3aGljaCB0aGUgZXh0ZW5zaW9uIGlzIGxhY2tpbmcgaG9zdCBwZXJtaXNzaW9uXG4gKiBmb3IgYSBnaXZlbiBVUkwuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYWNraW5nSG9zdFBlcm1pc3Npb25FcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgdXJsIH0pIHtcbiAgICAgICAgc3VwZXIoYEV4dGVuc2lvbiBsYWNrcyBob3N0IHBlcm1pc3Npb24gZm9yICR7dXJsfS5gKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMYWNraW5nSG9zdFBlcm1pc3Npb25FcnJvclwiO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBfZXJyb3JfY2xhc3NfbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKlxuICogU3VwZXJjbGFzcyBvZiBtb3JlIHNwZWNpZmljIGZldGNoIGVycm9yIHR5cGVzIGRlZmluZWQgYmVsb3cuXG4gKiBGb3Igbm93LCBub3QgZXhwb3J0ZWQsIHNpbmNlIEkgdGhpbmsgdXNlcnMgb25seSBuZWVkIHRoZSBtb3JlIHNwZWNpZmljIHR5cGVzLlxuICovXG5jbGFzcyBGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgLyogV2UgcmVjb3JkIHRob3NlIGF0dHJpYnV0ZXMgb2YgYSBmZXRjaCBSZXNwb25zZSBvYmplY3RcbiAgICAgKiAoc2VlIDxodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzcG9uc2U+KVxuICAgICAqIHRoYXQgd2UgdGhpbmsgd2lsbCBiZSB1c2VmdWwgKGFuZCB0aGF0IHdlIHdhbnQgdG8gYm90aGVyIHdpdGggcmlnaHRcbiAgICAgKiBub3cgLS0gbWF5YmUgbW9yZSBpbiB0aGUgZnV0dXJlKS5cbiAgICAgKlxuICAgICAqIE5vdGUgdGhhdCB5b3UgbWF5IHBhc3MgYSBSZXNwb25zZSBpbnN0YW5jZSBpdHNlbGYgdG8gdGhpcyBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IG9rLCBzdGF0dXMsIHN0YXR1c1RleHQsIHR5cGUsIHVybCwgaGVhZGVycywgY29udGVudFR5cGUgfSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYEZldGNoICR7dXJsfSBzdGF0dXM6ICR7c3RhdHVzfSAke3N0YXR1c1RleHR9YDtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdGZXRjaEVycm9yJztcbiAgICAgICAgdGhpcy5vayA9IG9rO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcbiAgICAgICAgaWYgKGhlYWRlcnMgJiYgaGVhZGVycy5nZXQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIF9lcnJvcl9jbGFzc19uYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBvazogdGhpcy5vayxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IHRoaXMuY29udGVudFR5cGUsXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKlxuICogVGhpcyBlcnJvciBjbGFzcyBpcyBpbnRlbmRlZCB0byByZXByZXNlbnQgY2FzZXMgaW4gd2hpY2ggYSBgZmV0Y2hgIHByb21pc2VcbiAqIHJlc29sdmVkLCBidXQgcmV0dXJuZWQgYSBSZXNwb25zZSBvYmplY3Qgd2hvc2UgYG9rYCBwcm9wZXJ0eSB3YXMgYGZhbHNlYC5cbiAqXG4gKiBPbiBib3RoIENocm9tZSBhbmQgRmlyZWZveCwgdGhpcyB3aWxsIGJlIHRoZSBjYXNlIHdoZW4gd2Ugc3VjY2Vzc2Z1bGx5XG4gKiByZWNlaXZlZCBhIHJlc3BvbnNlLCBidXQgaXQgaGFkIGFuIEhUVFAgc3RhdHVzIG91dHNpZGUgdGhlIDIwMC0yOTkgcmFuZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBGZXRjaFJlc29sdmVkTm90T2tFcnJvciBleHRlbmRzIEZldGNoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyBvaywgc3RhdHVzLCBzdGF0dXNUZXh0LCB0eXBlLCB1cmwgfSkge1xuICAgICAgICBzdXBlcih7IG9rLCBzdGF0dXMsIHN0YXR1c1RleHQsIHR5cGUsIHVybCB9KTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ZldGNoUmVzb2x2ZWROb3RPa0Vycm9yJztcbiAgICB9XG5cbn1cblxuLypcbiAqIFRoaXMgZXJyb3IgY2xhc3MgaXMgaW50ZW5kZWQgdG8gcmVwcmVzZW50IGNhc2VzIGluIHdoaWNoIGEgYGZldGNoYCBwcm9taXNlIHJlamVjdGVkLlxuICpcbiAqIEZvciBleGFtcGxlLCBvbiBib3RoIENocm9tZSBhbmQgRmlyZWZveCwgdGhpcyB3aWxsIGJlIHRoZSBjYXNlIHdoZW4gd2UgYXR0ZW1wdCB0byBtYWtlIGFcbiAqIGNyb3NzLW9yaWdpbiBmZXRjaCwgYnV0IENPUlMgZmFpbHMgZHVlIHRvIGFic2VuY2Ugb2YgQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luIGhlYWRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEZldGNoUmVqZWN0ZWRFcnJvciBleHRlbmRzIEZldGNoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoeyBvaywgc3RhdHVzLCBzdGF0dXNUZXh0LCB0eXBlLCB1cmwgfSkge1xuICAgICAgICBzdXBlcih7IG9rLCBzdGF0dXMsIHN0YXR1c1RleHQsIHR5cGUsIHVybCB9KTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ZldGNoUmVqZWN0ZWRFcnJvcic7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdGZXRjaCByZWplY3RlZC4gJyArIHRoaXMubWVzc2FnZTtcbiAgICB9XG5cbn1cblxuLypcbiAqIFJlcHJlc2VudHMgY2FzZXMgaW4gd2hpY2ggYSBgZmV0Y2hgIHJlc29sdmVkIHdpdGggYG9rYCBidXQgd2l0aCBhbiB1bmV4cGVjdGVkXG4gKiBDb250ZW50LVR5cGUgaGVhZGVyLlxuICovXG5leHBvcnQgY2xhc3MgRmV0Y2hXcm9uZ0NvbnRlbnRUeXBlRXJyb3IgZXh0ZW5kcyBGZXRjaEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHsgb2ssIHN0YXR1cywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsLCBoZWFkZXJzLCBjb250ZW50VHlwZSB9KSB7XG4gICAgICAgIHN1cGVyKHsgb2ssIHN0YXR1cywgc3RhdHVzVGV4dCwgdHlwZSwgdXJsLCBoZWFkZXJzLCBjb250ZW50VHlwZSB9KTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0ZldGNoV3JvbmdDb250ZW50VHlwZUVycm9yJztcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYEZldGNoICR7dXJsfSByZWNlaXZlZCB1bmV4cGVjdGVkIENvbnRlbnQtVHlwZTogJHtjb250ZW50VHlwZX1gO1xuICAgIH1cblxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJlY29uc3RpdHV0aW9uXG5cbmNvbnN0IEtOT1dOX0VSUk9SX0NMQVNTRVMgPSBuZXcgTWFwKClcbiAgICAuc2V0KFwiRmV0Y2hSZXNvbHZlZE5vdE9rRXJyb3JcIiwgRmV0Y2hSZXNvbHZlZE5vdE9rRXJyb3IpXG4gICAgLnNldChcIkZldGNoUmVqZWN0ZWRFcnJvclwiLCBGZXRjaFJlamVjdGVkRXJyb3IpXG4gICAgLnNldChcIk5vR3JvdXBFcnJvclwiLCBOb0dyb3VwRXJyb3IpXG4gICAgLnNldChcIkV4dGVuc2lvblVuYXZhaWxhYmxlRXJyb3JcIiwgRXh0ZW5zaW9uVW5hdmFpbGFibGVFcnJvcilcbiAgICAuc2V0KFwiTGFja2luZ0hvc3RQZXJtaXNzaW9uRXJyb3JcIiwgTGFja2luZ0hvc3RQZXJtaXNzaW9uRXJyb3IpXG4gICAgLnNldChcIkZldGNoV3JvbmdDb250ZW50VHlwZUVycm9yXCIsIEZldGNoV3JvbmdDb250ZW50VHlwZUVycm9yKVxuICAgIC5zZXQoXCJVbmtub3duUGVlckVycm9yXCIsIFVua25vd25QZWVyRXJyb3IpXG47XG5cbi8qIEF0dGVtcHQgdG8gcmVjb25zdGl0dXRlIGEgc3BlY2lhbCBlcnJvciBjbGFzcyBpbnN0YW5jZSBmcm9tIGEgZ2VuZXJpYyBFcnJvci5cbiAqIFdlIGxvb2sgYXQgdGhlIG1lc3NhZ2Ugb2YgdGhlIGdpdmVuIEVycm9yLiBJZiBpdCBhcHBlYXJzIHRvIGJlIHRoZSBzZXJpYWxpemF0aW9uXG4gKiBvZiBvbmUgb2Ygb3VyIHNwZWNpYWwgZXJyb3IgY2xhc3NlcywgdGhlbiB3ZSByZWJ1aWxkIGFuIGluc3RhbmNlIGJhc2VkIG9uIHRoaXMuXG4gKiBPdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGdpdmVuIEVycm9yLlxuICpcbiAqIHBhcmFtIGVycm9yOiBhbiBFcnJvciBpbnN0YW5jZVxuICogcmV0dXJuOiB0aGUgcmVjb25zdGl0dXRlZCBlcnJvciwgb3IgdGhlIGdpdmVuIG9uZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29uc3RpdHV0ZUVycm9yKGVycm9yKSB7XG4gICAgbGV0IGQgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGQgPSBKU09OLnBhcnNlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH0gY2F0Y2gge31cbiAgICBpZiAoZCAmJiBLTk9XTl9FUlJPUl9DTEFTU0VTLmhhcyhkLl9lcnJvcl9jbGFzc19uYW1lKSkge1xuICAgICAgICBjb25zdCBDbGFzc0NvbnN0cnVjdG9yID0gS05PV05fRVJST1JfQ0xBU1NFUy5nZXQoZC5fZXJyb3JfY2xhc3NfbmFtZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ2xhc3NDb25zdHJ1Y3RvcihkKTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xufVxuIiwiLyohIGJyb3dzZXItcGVlcnMgdjAuMS4wIHwgQ29weXJpZ2h0IChjKSAyMDIwLTIwMjIgU3RldmUgS2llZmZlciB8IE1JVCBsaWNlbnNlICovXG4vKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUICovXG5cbmltcG9ydCB7IEV4dGVuc2lvblVuYXZhaWxhYmxlRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnNcIjtcbmltcG9ydCB7IFBzQ3NQZWVyIH0gZnJvbSBcIi4vcHNjc3BlZXJcIjtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSW4gdGhpcyBhbmQgdGhlIGV4dHNlcnZlciBtb2R1bGVzIHdlIGRlZmluZSBzdWJjbGFzc2VzIG9mIFBzQ3NQZWVyIHRoYXQgYXJlXG4gKiBzcGVjaWFsbHkgZGVzaWduZWQgZm9yIGVzdGFibGlzaGluZyBhbmQgbWFpbnRhaW5pbmcgYSBjb25uZWN0aW9uIGJldHdlZW4gYSBwYWdlXG4gKiBhbmQgYSBicm93c2VyIGV4dGVuc2lvbi5cbiAqXG4gKiBUaGV5IHByb3ZpZGUgdG9vbHMgdG8gaGVscCB0aGUgZXh0ZW5zaW9uIHJlY29nbml6ZSBwYWdlcyB3aGVyZSBpdCBpcyBtZWFudCB0byBydW4sXG4gKiBhbmQgdG8gaGVscCBwYWdlcyBkZXRlY3QgdGhlIHByZXNlbmNlIGFuZCB2ZXJzaW9uIG51bWJlciBvZiB0aGUgZXh0ZW5zaW9uLlxuICpcbiAqIFRoZXkgYWxzbyBhaW0gdG8gc21vb3RobHkgaGFuZGxlIGNhc2VzIHdoZXJlIHRoZSBleHRlbnNpb24gaXMgdW5pbnN0YWxsZWQgb3IgZXZlblxuICogcmVpbnN0YWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgaGFzIGFscmVhZHkgbG9hZGVkLlxuICpcbiAqIEFsdGhvdWdoIHRoZXkgYXJlIGluZGVlZCBQc0NzUGVlcnMgLS0gc28gZWl0aGVyIG9uZSBjYW4gaW5pdGlhdGUgYSByZXF1ZXN0IHRvIHRoZVxuICogb3RoZXIgLS0gdGhlc2UgY2xhc3NlcyBhcmUgY2FsbGVkIEV4dGVuc2lvbkNsaWVudCAoZm9yIHVzZSBvbiBQUyBzaWRlKSBhbmRcbiAqIEV4dGVuc2lvblNlcnZlciAoZm9yIHVzZSBvbiBDUyBzaWRlKSwganVzdCB0byBnaXZlIGEgc2Vuc2UgZm9yIHdoYXQgdGhleSBhcmUgZm9yLFxuICogYW5kIHdoZXJlIHRoZXkgYXJlIG1lYW50IHRvIGJlIHVzZWQuXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLypcbiAqIEJvdGggdGhlIEV4dGVuc2lvbkNsaWVudCBhbmQgRXh0ZW5zaW9uU2VydmVyIGNsYXNzZXMgd2FudCB0byBiZSBhYmxlIHRvIHdvcmsgd2l0aFxuICogd2hhdCB3ZSBjYWxsIFwic2lnbmFsbGluZyxcIiBpLmUuIHNldHRpbmcvcmVhZGluZy9jbGVhcmluZyBjZXJ0YWluIGRhdGEgYXR0cmlidXRlc1xuICogb24gYSBzcGVjaWFsIERPTSBlbGVtZW50IGluIHRoZSBwYWdlLCBmb3IgdGhlIHB1cnBvc2Ugb2YgbGV0dGluZyB0aGUgcGFnZSBhbmRcbiAqIGNvbnRlbnQgc2NyaXB0cyBrbm93IGFib3V0IGVhY2ggb3RoZXIncyBwcmVzZW5jZSwgYW5kIHZlcnNpb24gbnVtYmVycy5cbiAqXG4gKiBQYXJ0IG9mIHRoaXMgZnVuY3Rpb25hbGl0eSBpcyBjb21tb24gdG8gYm90aCBjbGFzc2VzLCB3aGlsZSB0aGUgRXh0ZW5zaW9uU2VydmVyXG4gKiBhZGRzIGEgZmV3IGZ1cnRoZXIgbWV0aG9kcy4gVGhlIEJhc2ljU2lnbmFsbGluZyBjbGFzcyBzZXJ2ZXMgYXMgYSBjb21tb24gc3VwZXJcbiAqIGNsYXNzLCBhbmQgYSBwbGFjZSBmb3IgdGhlIGNvbW1vbiBtZXRob2RzIHRvIGJlIGltcGxlbWVudGVkLlxuICovXG5leHBvcnQgY2xhc3MgQmFzaWNTaWduYWxsaW5nIGV4dGVuZHMgUHNDc1BlZXIge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZXh0X25hbWUsIHNpZ25hbF9lbHRfc2VsZWN0b3IsIGV4dF92ZXJzX2F0dHIsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZXh0X25hbWUsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNpZ25hbF9lbHRfc2VsZWN0b3IgPSBzaWduYWxfZWx0X3NlbGVjdG9yO1xuICAgICAgICB0aGlzLmV4dF92ZXJzX2F0dHIgPSBleHRfdmVyc19hdHRyO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVHJ5IHRvIGdldCB0aGUgRE9NIGVsZW1lbnQgaW4gdGhlIGhvc3QgcGFnZSB0aGF0IGlzIHVzZWQgZm9yIHNpZ25hbGxpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBob3N0IGFuZCBleHRlbnNpb24uXG4gICAgICovXG4gICAgZ2V0SG9zdFNpZ25hbGxpbmdFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNpZ25hbF9lbHRfc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogVHJ5IHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGV4dGVuc2lvbiBjb250ZW50IHNjcmlwdCBoYXMgYWxyZWFkeSBhY3RpdmF0ZWQgbWVzc2FnaW5nIG9uIHRoZSBwYWdlLlxuICAgICAqXG4gICAgICogcmV0dXJuOiB7c3RyaW5nfG51bGx9IFRoZSBleHRlbnNpb24gdmVyc2lvbiBudW1iZXIgZGV0ZWN0ZWQgb3IgZWxzZSBgbnVsbGAuXG4gICAgICovXG4gICAgdGVzdEZvckV4dGVuc2lvbigpIHtcbiAgICAgICAgY29uc3Qgc2lnbmFsRWx0ID0gdGhpcy5nZXRIb3N0U2lnbmFsbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgaWYgKHNpZ25hbEVsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHNpZ25hbEVsdC5nZXRBdHRyaWJ1dGUodGhpcy5leHRfdmVyc19hdHRyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBlcmFzZUV4dGVuc2lvblByZXNlbmNlKCkge1xuICAgICAgICBjb25zdCBzaWduYWxFbHQgPSB0aGlzLmdldEhvc3RTaWduYWxsaW5nRWxlbWVudCgpO1xuICAgICAgICBzaWduYWxFbHQucmVtb3ZlQXR0cmlidXRlKHRoaXMuZXh0X3ZlcnNfYXR0cik7XG4gICAgfVxuXG59XG5cbi8qXG4gKiBQYWdlIHNjcmlwdHMgd2lzaGluZyB0byB1c2UgYW4gZXh0ZW5zaW9uIHNob3VsZCBpbnN0YW50aWF0ZSB0aGlzIGNsYXNzLlxuICogVGhpcyBwcm92aWRlcyBhIGNsaWVudCB0aGF0IGNhbiBwYXNzIHJlcXVlc3RzIHRvLCBhbmQgcmVjZWl2ZSByZXNwb25zZXMgZnJvbSxcbiAqIHRoZSBleHRlbnNpb24uIEl0IGNhbiBhbHNvIHJlY2VpdmUgcmVxdWVzdHMgZnJvbSB0aGUgZXh0ZW5zaW9uLCBhbmQgcmVzcG9uZC5cbiAqXG4gKiBSZXF1ZXN0cyByZXR1cm4gYSBwcm9taXNlIHRoYXQgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMgYWNjb3JkaW5nIHRvIHdoZXRoZXJcbiAqIHRoZSBleHRlbnNpb24gaXMgYWJsZSB0byByZXR1cm4gYSByZXNwb25zZSBvciBuZWVkcyB0byByYWlzZSBhbiBleGNlcHRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBFeHRlbnNpb25DbGllbnQgZXh0ZW5kcyBCYXNpY1NpZ25hbGxpbmcge1xuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBhIHVuaXF1ZSBuYW1lIGZvciB0aGlzIGNsaWVudC5cbiAgICAgKiBAcGFyYW0gc2VydmVyTmFtZSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgRXh0ZW5zaW9uU2VydmVyIGluc3RhbmNlIHdpdGhcbiAgICAgKiAgIHdoaWNoIHdlIGludGVuZCB0byBpbnRlcmFjdC5cbiAgICAgKlxuICAgICAqIEFsbCBvdGhlciBwYXJhbWV0ZXJzIGFyZSBhcyBmb3IgdGhlIGBFeHRlbnNpb25TZXJ2ZXJgIGNsYXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNlcnZlck5hbWUsIGV4dF9uYW1lID0gJycsIHNpZ25hbF9lbHRfc2VsZWN0b3IsIGV4dF92ZXJzX2F0dHIpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgZXh0X25hbWUsIHNpZ25hbF9lbHRfc2VsZWN0b3IsIGV4dF92ZXJzX2F0dHIpO1xuICAgICAgICB0aGlzLnNlcnZlck5hbWUgPSBzZXJ2ZXJOYW1lO1xuICAgICAgICB0aGlzLnJlY29uc3RpdHV0ZUVycm9ycyA9IHRydWU7XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEFQSVxuXG4gICAgLyogSXQgaXMgZXhwZWN0ZWQgdGhhdCB0aGVyZSB3aWxsIGJlIGp1c3QgYSB1bmlxdWUgRXh0ZW5zaW9uU2VydmVyIGluc3RhbmNlIGZvciB0aGlzXG4gICAgICogY2xpZW50IHRvIGNvbm5lY3QgdG8sIGFuZCB0aGF0IGlzIHRoZSBvbmUgdGhhdCB3YXMgbmFtZWQgaW4gdGhpcyBFeHRlbnNpb25DbGllbnQnc1xuICAgICAqIGNvbnN0cnVjdG9yLiBUaGVyZWZvcmUgYXMgYSBjb252ZW5pZW5jZSB3ZSBhdXRvbWF0aWNhbGx5IHBhc3MgdGhlIHNlcnZlcidzIG5hbWVcbiAgICAgKiBhcyB0aGUgYHBlZXJOYW1lYCB0byB0aGUgYmFzZSBjbGFzcydzIGBtYWtlUmVxdWVzdGAgbWV0aG9kLlxuICAgICAqL1xuICAgIG1ha2VSZXF1ZXN0KGhhbmRsZXJEZXNjcmlwLCBhcmdzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5tYWtlUmVxdWVzdCh0aGlzLnNlcnZlck5hbWUsIGhhbmRsZXJEZXNjcmlwLCBhcmdzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFVubGlrZSB0aGUgYGFwcGFyZW50RXh0ZW5zaW9uVmVyc2lvbigpYCBtZXRob2QsIHdoaWNoIGlzIGZhdWx0eSBhbmQgb25seSBjaGVja3MgZm9yIGEgcG9zdGVkXG4gICAgICogdmVyc2lvbiBudW1iZXIgKGJ1dCByZXR1cm5zIGltbWVkaWF0ZWx5KSwgdGhpcyBtZXRob2QgcGVyZm9ybXMgYW4gYWN0dWFsbHkgcm9idXN0IGNoZWNrIGZvclxuICAgICAqIHRoZSBwcmVzZW5jZSBvZiB0aGUgZXh0ZW5zaW9uLCBvbiBib3RoIEZpcmVmb3ggYW5kIENocm9tZS4gSXQgcmV0dXJucyBhIHByb21pc2UgdGhhdCBlaXRoZXJcbiAgICAgKiByZXNvbHZlcyB3aXRoIHRoZSBwcmVzZW50IHZlcnNpb24gbnVtYmVyLCBvciByZWplY3RzIGlmIGl0IGRldGVjdHMgdGhhdCB0aGUgZXh0ZW5zaW9uIGlzIGFic2VudC5cbiAgICAgKlxuICAgICAqIE9uIGFueSBicm93c2VyLCBpZiB0aGUgcHJvbWlzZSBpcyBnb2luZyB0byByZXNvbHZlIC0tIGkuZS4gaWYgdGhlIGV4dGVuc2lvbiBpcyBwcmVzZW50IC0tIGl0IHdpbGxcbiAgICAgKiByZXNvbHZlIGltbWVkaWF0ZWx5LlxuICAgICAqXG4gICAgICogT24gQ2hyb21lLCBpZiB0aGUgcHJvbWlzZSBpcyBnb2luZyB0byByZWplY3QsIHRoYXQgdG9vIHdpbGwgaGFwcGVuIGltbWVkaWF0ZWx5LiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgKiB3aGVuIGFuIGV4dGVuc2lvbiBoYXMgYmVlbiB1bmluc3RhbGxlZCBvbiBDaHJvbWUsIGl0cyBjb250ZW50IHNjcmlwdHMgY29udGludWUgcnVubmluZywgd2hpbGUgYW55XG4gICAgICogYXR0ZW1wdCB0byB1c2UgYGJyb3dzZXIucnVudGltZWAgdGhyb3dzIGFuIFwiRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWRcIiBlcnJvci4gVGhlIEV4dGVuc2lvblNlcnZlclxuICAgICAqIGNsYXNzIGRlbGliZXJhdGVseSB1c2VzIGBicm93c2VyLnJ1bnRpbWVgIGluIGl0cyB2ZXJzaW9uIG51bWJlciBjaGVjaywgaW4gb3JkZXIgdG8gdGhyb3cgdGhpcyBleGNlcHRpb24uXG4gICAgICpcbiAgICAgKiBPbiBGaXJlZm94LCBpZiB0aGUgcHJvbWlzZSBpcyBnb2luZyB0byByZWplY3QsIHRoaXMgd2lsbCB0YWtlIHRpbWUuIFlvdSBtYXkgc2V0IHRoZSB0aW1lb3V0IHlvdXJzZWxmLFxuICAgICAqIG9yIGFjY2VwdCB0aGUgZGVmYXVsdCB2YWx1ZS4gVGhpcyBpcyBiZWNhdXNlIHdoZW4gYW4gZXh0ZW5zaW9uIGhhcyBiZWVuIHVuaW5zdGFsbGVkIG9uIEZpcmVmb3gsIGl0c1xuICAgICAqIGNvbnRlbnQgc2NyaXB0cyBiZWNvbWUgaW1tZWRpYXRlbHkgaW5hY3RpdmUuIFRoaXMgbWVhbnMgdGhlIEV4dGVuc2lvblNlcnZlciBpbnN0YW5jZSB3ZSB0cnkgdG8gcmVhY2hcbiAgICAgKiBzaW1wbHkgYmVjb21lcyB1bnJlc3BvbnNpdmUuIEl0IGlzIHRoZSB0aW1lb3V0IG9uIG91ciByZXF1ZXN0IHRoYXQgdGVsbHMgdXMgdGhlIGV4dGVuc2lvbiBpcyBnb25lLlxuICAgICAqXG4gICAgICogcGFyYW0gdGltZW91dCB7aW50fSBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgYSByZXNwb25zZSBmcm9tIHRoZSBFeHRlbnNpb25TZXJ2ZXIuIEFzIGRpc2N1c3NlZFxuICAgICAqICAgYWJvdmUsIHRoaXMgcmVwcmVzZW50cyB0aGUgdGltZSB5b3Ugd2lsbCB3YWl0IGZvciBhIHJlamVjdGlvbiBpbiBGaXJlZm94LlxuICAgICAqIHBhcmFtIHNlbGZSZXBhaXJpbmcge2Jvb2x9IGlmIHRydWUsIGFuZCB3ZSBkZXRlY3QgYWJzZW5jZSBvZiB0aGUgZXh0ZW5zaW9uLCB3ZSB3aWxsIGVyYXNlIHRoZVxuICAgICAqICAgZXh0ZW5zaW9uJ3MgcHJlc2VuY2Ugc2lnbmFsLiBEZWZhdWx0cyB0byB0cnVlLlxuICAgICAqIHJldHVybjogcHJvbWlzZSB0aGF0IGVpdGhlciByZXNvbHZlcyB3aXRoIHRoZSBwcmVzZW50IHZlcnNpb24gbnVtYmVyLCBvciByZWplY3RzIGlmIHRoZSBleHRlbnNpb25cbiAgICAgKiAgIGlzIGFic2VudC5cbiAgICAgKi9cbiAgICBjaGVja0V4dGVuc2lvblByZXNlbmNlKHsgdGltZW91dCA9IDMwMDAsIHNlbGZSZXBhaXJpbmcgPSB0cnVlIH0pIHtcbiAgICAgICAgLy8gVGltZW91dCBtdXN0IGJlIHBvc2l0aXZlLCBzaW5jZSAwIHNpZ25hbHMgXCJ3YWl0IGZvcmV2ZXJcIi5cbiAgICAgICAgdGltZW91dCA9IE1hdGgubWF4KHRpbWVvdXQsIDEpO1xuICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlUmVxdWVzdCgnY2hlY2tWZXJzJywge30sIHsgdGltZW91dDogdGltZW91dCB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGZSZXBhaXJpbmcgJiYgKHJlYXNvbiBpbnN0YW5jZW9mIEV4dGVuc2lvblVuYXZhaWxhYmxlRXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudC5lcmFzZUV4dGVuc2lvblByZXNlbmNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTW9yZSBkZXNjcmlwdGl2ZSBzeW5vbnltIGZvciB0ZXN0IG1ldGhvZCBpbmhlcml0ZWQgZnJvbSBCYXNpY1NpZ25hbGxpbmcgY2xhc3MuXG4gICAgICpcbiAgICAgKiBBdHRlbXB0IHRvIGNoZWNrIHdoaWNoIHZlcnNpb24gKGlmIGFueSkgb2YgdGhlIGV4dGVuc2lvbiBpcyBwcmVzZW50LlxuICAgICAqIFJldHVybiB0aGUgdmVyc2lvbiAoPHN0cmluZz4pIG9mIGV4dGVuc2lvbiB0aGF0IGlzIHByZXNlbnQsIG9yIGVsc2UgYG51bGxgLlxuICAgICAqXG4gICAgICogT3JkaW5hcmlseSB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgbm9uLW51bGwgb25seSBpZiB0aGUgZXh0ZW5zaW9uIGlzIGFjdHVhbGx5IHByZXNlbnQ7XG4gICAgICogaG93ZXZlciBpdCBjb3VsZCBhbHNvIGJlIHRoZSBjYXNlIHRoYXQgdGhlIGV4dGVuc2lvbiB3YXMgcHJlc2VudCBidXQgaGFzIG5vdyBiZWVuIHVuaW5zdGFsbGVkLFxuICAgICAqIHdoaWxlIHRoZSBob3N0IHBhZ2UgaGFzIG5vdCB5ZXQgYmVlbiByZWxvYWRlZC5cbiAgICAgKlxuICAgICAqIFNlZSBhbHNvOiBgY2hlY2tFeHRlbnNpb25WZXJzaW9uKClgLlxuICAgICAqL1xuICAgIGFwcGFyZW50RXh0ZW5zaW9uVmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdEZvckV4dGVuc2lvbigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJldHVybiBhIGJvb2xlYW4gdHJ1ZSBpZiB0aGUgZXh0ZW5zaW9uJ3Mgc2lnbmFsIGlzIHByZXNlbnQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBleHRlbnNpb25BcHBlYXJzVG9CZVByZXNlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RGb3JFeHRlbnNpb24oKSAhPT0gbnVsbDtcbiAgICB9XG5cbn1cbiIsIi8qISBicm93c2VyLXBlZXJzIHYwLjEuMCB8IENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFN0ZXZlIEtpZWZmZXIgfCBNSVQgbGljZW5zZSAqL1xuLyogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVCAqL1xuXG5cbmNvbnN0IGJyb3dzZXIgPSByZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpO1xuaW1wb3J0IHsgRXh0ZW5zaW9uVW5hdmFpbGFibGVFcnJvciB9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHsgQmFzaWNTaWduYWxsaW5nIH0gZnJvbSBcIi4vZXh0XCI7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIE5vdGU6IFRoZSBFeHRlbnNpb25TZXJ2ZXIgY2xhc3MgbXVzdCBiZSBkZWZpbmVkIGluIGEgc2VwYXJhdGUgbW9kdWxlIGZyb20gdGhlXG4gKiBFeHRlbnNpb25DbGllbnQuIFRoaXMgaXMgYmVjYXVzZSAoYSkgcGFnZSBzY3JpcHRzIG5lZWQgdG8gaW1wb3J0IHRoZSBFeHRlbnNpb25DbGllbnRcbiAqIG1vZHVsZSwgd2hpbGUgKGIpIHRoZSBFeHRlbnNpb25TZXJ2ZXIgbmVlZHMgdG8gdXNlIHRoZSB3ZWJleHRlbnNpb24tcG9seWZpbGwgbGlicmFyeSxcbiAqIGFuZCAoYykgaWYgYSBwYWdlIHNjcmlwdCB0cmllcyB0byBpbXBvcnQgKGFueSBtb2R1bGUgdGhhdCBpbXBvcnRzKSB0aGF0IGxpYnJhcnksIHlvdVxuICogd2lsbCBnZXQgYSBjb25zb2xlIGVycm9yIHNheWluZyxcbiAqICAgXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIlxuICogYW5kIHlvdXIgcGFnZSB3aWxsIG5vdCBsb2FkIVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKlxuICogVG9nZXRoZXIgd2l0aCB0aGUgYEV4dGVuc2lvbkNsaWVudGAgY2xhc3MsIHRoaXMgY2xhc3Mgc3VwcG9ydHMgcHJvbWlzZS1iYXNlZFxuICogbWVzc2FnaW5nIGJldHdlZW4gcGFnZSBzY3JpcHRzIGFuZCBjb250ZW50IHNjcmlwdHMuXG4gKlxuICogQSBjb250ZW50IHNjcmlwdCBpcyBleHBlY3RlZCB0byB1c2Ugb25seSBvbmUgRXh0ZW5zaW9uU2VydmVyLCBzaW5jZSB0aGlzIGNsYXNzIHRha2VzXG4gKiBzdGVwcyB0byBlbnN1cmUgb25seSBvbmUgaXMgcnVubmluZyBvbiB0aGUgcGFnZSBhdCBhbnkgZ2l2ZW4gdGltZS4gKFRoaXMgaXMgdG8gc3VwcG9ydFxuICogdW5pbnN0YWxsL3JlaW5zdGFsbCBvZiB0aGUgZXh0ZW5zaW9uLCBhcyB3ZWxsIGFzIGluamVjdGlvbiBhZnRlciB0aGUgcGFnZSBpcyBhbHJlYWR5XG4gKiBsb2FkZWQuKVxuICpcbiAqIFRoZSBjb250ZW50IHNjcmlwdCBzaG91bGQgaW5zdGFudGlhdGUgYW4gRXh0ZW5zaW9uU2VydmVyLCBhbmQgdGhlbiBjYWxsIGl0c1xuICogYGFjdGl2YXRlT25Eb2N1bWVudFJlYWR5YCBtZXRob2QgdG8gbWFrZSBpdCBhY3RpdmF0ZSBhcyBzb29uIGFzIHRoZSBwYWdlIGlzIHJlYWR5LlxuICpcbiAqIE5PVEU6IEJlIHN1cmUgdG8gcmVhZCB0aGUgZG9jc3RyaW5nIGZvciB0aGUgYGFjdGl2YXRlT25Eb2N1bWVudFJlYWR5YCBtZXRob2QuIEl0IHJldHVybnMgYVxuICogcHJvbWlzZSB3aGljaCB5b3UgbmVlZCB0byBwYXkgYXR0ZW50aW9uIHRvLlxuICpcbiAqIFVuZGVyIHRoaXMgZGVzaWduLCB0aGUgZXh0ZW5zaW9uJ3MgYmFja2dyb3VuZCBzY3JpcHQgaXMgZnJlZSB0byBhY3RpdmVseSBpbmplY3QgdGhlXG4gKiBjb250ZW50IHNjcmlwdCBpbnRvIGhvc3QgcGFnZXMuIFRoZSBFeHRlbnNpb25TZXJ2ZXIgKG9uIENocm9tZSkgb3IgRXh0ZW5zaW9uQ2xpZW50XG4gKiAob24gRmlyZWZveCkgd2lsbCBzZWUgdG8gaXQgdGhhdCB0aGUgY29udGVudCBzY3JpcHQgYmVjb21lcyBkZWFjdGl2YXRlZCBpZiB0aGUgZXh0ZW5zaW9uXG4gKiBpcyB1bmluc3RhbGxlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4dGVuc2lvblNlcnZlciBleHRlbmRzIEJhc2ljU2lnbmFsbGluZyB7XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IGEgdW5pcXVlIG5hbWUgZm9yIHRoaXMgc2VydmVyLlxuICAgICAqIEBwYXJhbSBleHRfbmFtZSB7c3RyaW5nfSBhIHVuaXF1ZSBuYW1lIGZvciB0aGUgZXh0ZW5zaW9uLiBUaGlzIGFsbG93cyB0aGUgY2xpZW50IHRvIGRpcmVjdCByZXF1ZXN0c1xuICAgICAqICAgYXQgdGhlIHJpZ2h0IHNlcnZlci5cbiAgICAgKiBAcGFyYW0gc2lnbmFsX2VsdF9zZWxlY3RvciB7c3RyaW5nfSBDU1Mgc2VsZWN0b3IgZm9yIHRoZSBcInNpZ25hbGxpbmcgZWxlbWVudCxcIiBpLmUuIGEgRE9NIGVsZW1lbnRcbiAgICAgKiAgIHRoYXQgaXMgZXhwZWN0ZWQgdG8gYmUgcHJlc2VudCBpbiBhbnkgcGFnZSAoXCJob3N0IHBhZ2VcIikgd2hlcmUgdGhlIGV4dGVuc2lvbiBpc1xuICAgICAqICAgbWVhbnQgdG8gYmUgYWNjZXNzaWJsZVxuICAgICAqIEBwYXJhbSBleHRfdmVyc19hdHRyIHtzdHJpbmd9IHRoZSBuYW1lIG9mIGEgZGF0YSBhdHRyaWJ1dGUgd2hlcmUgdGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBleHRlbnNpb25cbiAgICAgKiAgIGlzIHRvIGJlIHBvc3RlZCBvbiB0aGUgc2lnbmFsbGluZyBlbGVtZW50XG4gICAgICogQHBhcmFtIGhvc3RfdmVyc19hdHRyIHtzdHJpbmd9IHRoZSBuYW1lIG9mIGEgZGF0YSBhdHRyaWJ1dGUgb2YgdGhlIHNpZ25hbGxpbmcgZWxlbWVudCB3aGVyZSB0aGUgdmVyc2lvblxuICAgICAqICAgbnVtYmVyIG9mIHRoZSBob3N0IHBhZ2Ugd2lsbCBiZSBhdmFpbGFibGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBleHRfbmFtZSA9ICcnLCBzaWduYWxfZWx0X3NlbGVjdG9yLCBleHRfdmVyc19hdHRyLCBob3N0X3ZlcnNfYXR0cikge1xuICAgICAgICBzdXBlcihuYW1lLCBleHRfbmFtZSwgc2lnbmFsX2VsdF9zZWxlY3RvciwgZXh0X3ZlcnNfYXR0ciwge2FjdGl2YXRlT25Db25zdHJ1Y3Rpb246IGZhbHNlfSk7XG4gICAgICAgIHRoaXMuaG9zdF92ZXJzX2F0dHIgPSBob3N0X3ZlcnNfYXR0cjtcbiAgICAgICAgdGhpcy5leHRfdmVyc192YWx1ZSA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpLnZlcnNpb247XG4gICAgICAgIHRoaXMuX2FkZEJ1aWx0SW5IYW5kbGVyKCdjaGVja1ZlcnMnLCB0aGlzLmNoZWNrVmVyc0hhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX2FkZEJ1aWx0SW5IYW5kbGVyKCdzZW5kTWVzc2FnZScsIHRoaXMucnVudGltZVNlbmRNZXNzYWdlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQnVpbHQtaW4gaGFuZGxlcnNcblxuICAgIC8qXG4gICAgICogQHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHZlcnNpb24gbnVtYmVyIG9mIHRoZSBleHRlbnNpb24ge3N0cmluZ30sXG4gICAgICogICBhcyByZWFkIGZyb20gdGhlIGV4dGVuc2lvbiBtYW5pZmVzdC5cbiAgICAgKlxuICAgICAqIEltcG9ydGFudDogd2UgZGVsaWJlcmF0ZWx5IG1ha2UgdXNlIG9mIGBicm93c2VyLnJ1bnRpbWVgIGhlcmUuIFRoaXMgaXMgbm90IGp1c3QgYVxuICAgICAqIGhhbmR5IHdheSB0byByZWFkIHRoZSB2ZXJzaW9uIG51bWJlciBvdXQgb2YgdGhlIG1hbmlmZXN0OyBpdCBpcyBjcml0aWNhbCB0aGF0IHdlXG4gICAgICogYXR0ZW1wdCB0byBtYWtlIHVzZSBvZiB0aGUgXCJleHRlbnNpb24gY29udGV4dFwiIHNvIHRoYXQsIG9uIENocm9tZSwgd2Ugd2lsbCBnZXQgYVxuICAgICAqIHNpZ25hbCB0aGF0IHRoZSBleHRlbnNpb24gY29udGV4dCBoYXMgYmVlbiBpbnZhbGlkYXRlZCwgaWYgaW5kZWVkIGl0IGhhcyAoYXMgaGFwcGVuc1xuICAgICAqIGlmIHRoZSBleHRlbnNpb24gaXMgdW5pbnN0YWxsZWQgYWZ0ZXIgcGFnZSBsb2FkKS5cbiAgICAgKi9cbiAgICBjaGVja1ZlcnNIYW5kbGVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFuaWZlc3QgPSBicm93c2VyLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTtcbiAgICAgICAgICAgIHJlc29sdmUobWFuaWZlc3QudmVyc2lvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIFRoaXMgcHJvdmlkZXMgYSB3YXkgZm9yIHBhZ2Ugc2NyaXB0cyAodmlhIGFuIEV4dGVuc2lvbkNsaWVudCkgdG8gc2VuZCBhIG1lc3NhZ2UgdG9cbiAgICAgKiB0aGUgZXh0ZW5zaW9uJ3MgYmFja2dyb3VuZCBzY3JpcHQuIE9mIGNvdXJzZSwgdGhlIEJHUyBtdXN0IHNldCB1cCBsaXN0ZW5pbmcgZm9yIHRoaXNcbiAgICAgKiB2aWEgYGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2VgLlxuICAgICAqXG4gICAgICogTm90ZTogV2UgbmVlZCB0aGlzIHdyYXBwZXIgbWV0aG9kIChpLmUuIGNhbm5vdCBzaW1wbHkgc2V0IGBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2VgXG4gICAgICogaXRzZWxmIGFzIHRoZSBoYW5kbGVyKSBiZWNhdXNlIHdlIGhhdmUgdG8gZmlsdGVyIG91dCB0aGUgc2Vjb25kLCBgbWV0YWAgYXJndW1lbnQuXG4gICAgICogSWYgYm90aCBhcmdzIHdlcmUgcGFzc2VkIHRvIGBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2VgLCBpdCB3b3VsZCBpbnRlcnByZXQgb25lIG9mXG4gICAgICogdGhlc2UgYXMgaXRzIG9wdGlvbmFsIGBvcHRpb25zYCBhcmcsIHdoaWNoIHdvdWxkIGJlIGEgYnVnLlxuICAgICAqL1xuICAgIHJ1bnRpbWVTZW5kTWVzc2FnZShhcmdzLCBtZXRhKSB7XG4gICAgICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoYXJncyk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNoZWNrSGFuZGxpbmdFcnJvcihyZWFzb24sIHdyYXBwZXIpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgY29udGVudCBzY3JpcHQgZGV0ZWN0ZWQgZXJyb3I6ICR7cmVhc29ufSBmb3IgcmVxdWVzdDogJHt3cmFwcGVyfWApO1xuICAgICAgICBpZiAocmVhc29uLm1lc3NhZ2UgPT09IFwiRXh0ZW5zaW9uIGNvbnRleHQgaW52YWxpZGF0ZWQuXCIpIHtcbiAgICAgICAgICAgIC8qIEluIENocm9tZSB0aGlzIGhhcHBlbnMgaWYgdGhlIGJyb3dzZXIgZXh0ZW5zaW9uIGhhcyBiZWVuIHVuaW5zdGFsbGVkIG9yIGRlYWN0aXZhdGVkLlxuICAgICAgICAgICAgICogVGhpcyBwcm92aWRlcyBhIHdheSBmb3IgdGhlIGNvbnRlbnQgc2NyaXB0IHRvIGF1dG9tYXRpY2FsbHkgZGlzYWJsZSBpdHNlbGYsIGF0XG4gICAgICAgICAgICAgKiBsZWFzdCBpbiBDaHJvbWUuIFRvIGJlIHByZWNpc2UsIHdlIHdhbnQgdG8gZGVhY3RpdmF0ZSB0aGlzIGNvbnRlbnQgc2NyaXB0LCBhbmRcbiAgICAgICAgICAgICAqIGVyYXNlIHRoZSBzaWduYWwgb2YgdGhlIGV4dGVuc2lvbidzIHByZXNlbmNlLiBUaGlzIChhKSBwcmV2ZW50cyBmdXJ0aGVyIHVzZWxlc3NcbiAgICAgICAgICAgICAqIGFjdGl2aXR5LCBhbmQgKGIpIGFsbG93cyBhIG5ld2x5LWluamVjdGVkIGNvbnRlbnQgc2NyaXB0IHRvIGJlY29tZSBhY3RpdmUgc2hvdWxkIHRoZVxuICAgICAgICAgICAgICogZXh0ZW5zaW9uIGJlIHJlaW5zdGFsbGVkLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEZvciBGaXJlZm94LCB0aGUgY2xpZW50IHdpbGwgaGF2ZSB0byBiZSBzbWFydGVyLCBzaW5jZSB0aGVyZSB0aGUgY29udGVudCBzY3JpcHRcbiAgICAgICAgICAgICAqIHRvbyAobm90IGp1c3QgdGhlIGJhY2tncm91bmQgc2NyaXB0KSBiZWNvbWVzIHVucmVhY2hhYmxlIGFzIHNvb24gYXMgdGhlIGV4dGVuc2lvblxuICAgICAgICAgICAgICogaXMgdW5pbnN0YWxsZWQuIEFuIGFwcHJvcHJpYXRlIHRlc3QgZm9yIHRoaXMgcHVycG9zZSBoYXMgYmVlbiBpbXBsZW1lbnRlZCBpblxuICAgICAgICAgICAgICogYEV4dGVuc2lvbkNsaWVudC5jaGVja0V4dGVuc2lvblByZXNlbmNlYC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlTWVzc2FnaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmVyYXNlRXh0ZW5zaW9uUHJlc2VuY2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXh0ZW5zaW9uVW5hdmFpbGFibGVFcnJvcihyZWFzb24pO1xuICAgICAgICAgICAgcmVhc29uID0gbmV3IEVycm9yKGUuc2VyaWFsaXplKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFzb247XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBJbml0aWFsIFNldHVwXG5cbiAgICAvKlxuICAgICAqIFRyeSB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcGFnZSB3ZSdyZSBsb29raW5nIGF0IGlzIHRoZSBpbnRlbmRlZCBob3N0IHBhZ2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH0gVGhlIGhvc3QgdmVyc2lvbiBudW1iZXIgZGV0ZWN0ZWQgb3IgZWxzZSBgbnVsbGAuXG4gICAgICovXG4gICAgdGVzdEZvckhvc3QoKSB7XG4gICAgICAgIGNvbnN0IHNpZ25hbEVsdCA9IHRoaXMuZ2V0SG9zdFNpZ25hbGxpbmdFbGVtZW50KCk7XG4gICAgICAgIGlmIChzaWduYWxFbHQpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWduYWxFbHQuZ2V0QXR0cmlidXRlKHRoaXMuaG9zdF92ZXJzX2F0dHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogTWFrZSB0aGUgbWFyayB0aGF0IGluZGljYXRlcyB0aGF0IHRoaXMgY29udGVudCBzY3JpcHQgaXMgdGhlIGZpcnN0IChmcm9tIHRoaXMgZXh0ZW5zaW9uKVxuICAgICAqIHRvIGFjdGl2YXRlIG1lc3NhZ2luZyBvbiB0aGlzIHBhZ2UuXG4gICAgICovXG4gICAgbWFya0V4dGVuc2lvblByZXNlbmNlKCkge1xuICAgICAgICBjb25zdCBzaWduYWxFbHQgPSB0aGlzLmdldEhvc3RTaWduYWxsaW5nRWxlbWVudCgpO1xuICAgICAgICBzaWduYWxFbHQuc2V0QXR0cmlidXRlKHRoaXMuZXh0X3ZlcnNfYXR0ciwgdGhpcy5leHRfdmVyc192YWx1ZSk7XG4gICAgfVxuXG4gICAgX2NvbmRpdGlvbmFsQWN0aXZhdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc3QgaG9zdF92ZXJzID0gdGhpcy50ZXN0Rm9ySG9zdCgpO1xuICAgICAgICBjb25zdCBleHRfdmVycyA9IHRoaXMudGVzdEZvckV4dGVuc2lvbigpO1xuICAgICAgICBsZXQgbXNnID0gYEV4dGVuc2lvblNlcnZlciBcIiR7dGhpcy5uYW1lfVwiIGNvbnN0cnVjdGVkIGF0ICR7dGhpcy5jb25zdHJ1Y3Rpb25UaW1lfWA7XG4gICAgICAgIC8vIE9ubHkgaWYgKGEpIHRoZSBwYWdlIF9kb2VzXyBhcHBlYXIgdG8gYmUgdGhlIGludGVuZGVkIGhvc3QsIHdoaWxlIChiKSBpdCBkb2VzIF9ub3RfXG4gICAgICAgIC8vIGFwcGVhciB0aGF0IGFuIGV4dGVuc2lvbiBjb250ZW50IHNjcmlwdCBoYXMgeWV0IGFjdGl2YXRlZCwgZG8gd2UgZ28gYWhlYWQgYW5kIGFjdGl2YXRlLlxuICAgICAgICBpZiAoaG9zdF92ZXJzICE9PSBudWxsICYmIGV4dF92ZXJzID09PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBtYXJrIG91ciBwcmVzZW5jZSwgdG8gc3RvcCBhbnkgb3RoZXJzIGZyb20gc2V0dGluZyB1cCBhIHJlZHVuZGFudCBzZXJ2ZXIuXG4gICAgICAgICAgICB0aGlzLm1hcmtFeHRlbnNpb25QcmVzZW5jZSgpO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zyhtc2cgKyAnIGNob3NlIHRvIGFjdGl2YXRlLicpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZU1lc3NhZ2luZygpXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBkZWNsaW5lZCB0byBhY3RpdmF0ZSBkdWUgdG86ICdcbiAgICAgICAgICAgIG1zZyArPSBob3N0X3ZlcnMgPT09IG51bGwgPyAnTm90IGEgaG9zdCBwYWdlLicgOiBgRXh0IFwiJHtleHRfdmVyc31cIiBhbHJlYWR5IHByZXNlbnQuYDtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobXNnKTtcbiAgICAgICAgICAgIG1zZyArPSAnIFlvdSBzaG91bGQgZW5zdXJlIHlvdXIgY29udGVudCBzY3JpcHQgcmVtb3ZlcyBhbnkgZXZlbnQgbGlzdGVuZXJzIGFuZCBtYWtlcyBubyBtZW1vcnkgbGVha3MuJztcbiAgICAgICAgICAgIG1zZyArPSAnIChUaGUgRXh0ZW5zaW9uU2VydmVyIGhhcyBhbHJlYWR5IHJlbW92ZWQgaXRzIG93biBsaXN0ZW5lcnMuKSc7XG4gICAgICAgICAgICByZWplY3QobXNnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIFRoZSBjb250ZW50IHNjcmlwdCB3aGVyZSB0aGUgRXh0ZW5zaW9uU2VydmVyIGlzIGluc3RhbnRpYXRlZCBzaG91bGQgY2FsbCB0aGlzIHRvIG1ha2VcbiAgICAgKiB0aGUgc2VydmVyIGVpdGhlciBcImFjdGl2YXRlXCIgYXMgc29vbiBhcyB0aGUgcGFnZSBpcyByZWFkeSwgb3IgZGVjbGluZSB0byBkbyBzby4gSXQgd2lsbFxuICAgICAqIGRlY2xpbmUgZWl0aGVyIGJlY2F1c2UgdGhlIHBhZ2UgaXMgbm90IGEgaG9zdCBwYWdlLCBvciBiZWNhdXNlIHRoZSBleHRlbnNpb24gaGFzIGFscmVhZHlcbiAgICAgKiBiZWVuIGFjdGl2YXRlZCBoZXJlLlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggZWl0aGVyIF9yZXNvbHZlc18gd2hlbiB0aGUgc2VydmVyIGFjdGl2YXRlcywgb3IgX3JlamVjdHNfIHdoZW4gaXRcbiAgICAgKiBkZWNsaW5lcyB0byBkbyBzby5cbiAgICAgKlxuICAgICAqIFRoZSByaWdodCB3YXkgdG8gc2V0IHVwIHlvdXIgY29udGVudCBzY3JpcHQgdGhlcmVmb3JlIGlzIGFzIGZvbGxvd3M6XG4gICAgICpcbiAgICAgKiAtIFRyeSB0byBtYWtlIHRoZSBpbml0aWFsaXphdGlvbiBhbmQgYWN0aXZhdGlvbiBvZiB0aGUgRXh0ZW5zaW9uU2VydmVyIHRoZSBmaXJzdCB0aGluZ1xuICAgICAqICAgeW91IGRvLlxuICAgICAqXG4gICAgICogLSBQYXNzIGJvdGggYSBmdWxmaWxsbWVudCBoYW5kbGVyIGFuZCBhIHJlamVjdGlvbiBoYW5kbGVyIHRvIHRoZSBgdGhlbigpYCBvZiB0aGUgcHJvbWlzZVxuICAgICAqICAgdGhpcyBtZXRob2QgcmV0dXJucy5cbiAgICAgKlxuICAgICAqIC0gVXNlIHRoZSBmdWxmaWxsbWVudCBoYW5kbGVyIHRvIHNldCB1cCBhbnl0aGluZyBlbHNlIHRoZSBjb250ZW50IHNjcmlwdCBuZWVkcywgaW4gcGFydGljdWxhclxuICAgICAqICAgYW55dGhpbmcgdGhhdCBtaWdodCBpbnZvbHZlIGFkZGluZyBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiAtIElmIHlvdSBoYWQgdG8gc2V0IGV2ZW50IGxpc3RlbmVycyBfYmVmb3JlXyB0aGUgY2FsbCB0byBgYWN0aXZhdGVPbkRvY3VtZW50UmVhZHkoKWAsIGJlXG4gICAgICogICBzdXJlIHRvIHVzZSB0aGUgcmVqZWN0aW9uIGhhbmRsZXIgdG8gcmVtb3ZlIHRoZXNlIGxpc3RlbmVycywgYW5kIHRha2UgYW55IG90aGVyXG4gICAgICogICBuZWNlc3Nhcnkgc3RlcHMgdG8gZW5zdXJlIHlvdXIgY29udGVudCBzY3JpcHQgbWFrZXMgbm8gbWVtb3J5IGxlYWtzLlxuICAgICAqXG4gICAgICogLSBFdmVuIGlmIHlvdSBoYXZlIG5vIHBvdGVudGlhbCBtZW1vcnkgbGVha3MgdG8gYXR0ZW5kIHRvLCB5b3Ugc2hvdWxkIGhhdmUgYSByZWplY3Rpb25cbiAgICAgKiAgIGhhbmRsZXIgYW55d2F5LCBqdXN0IHRvIHN1cHByZXNzIHRoZSBlcnJvciBtZXNzYWdlLCBhbmQgc2lnbmFsICh0byBvdGhlciBkZXZlbG9wZXJzKVxuICAgICAqICAgdGhhdCB5b3UndmUgdGhvdWdodCBhYm91dCBpdC5cbiAgICAgKlxuICAgICAqIEJhc2ljYWxseSwgeW91ciBjb250ZW50IHNjcmlwdCBzaG91bGQgYmUgaWRlbXBvdGVudDogcnVubmluZyBpdCBhIHNlY29uZCB0aW1lIHNob3VsZCBub3RcbiAgICAgKiBjaGFuZ2UgYW55dGhpbmcuIFRoaXMgaXMgZXNwZWNpYWxseSBjcml0aWNhbCB1bmRlciBNYW5pZmVzdCBWMywgd2hlcmUgYmFja2dyb3VuZCBzY3JpcHRzXG4gICAgICogYXJlIGV4cGVjdGVkIHRvIHJ1biByZXBlYXRlZGx5LiBJZiB5b3VyIGJnIHNjcmlwdCBwcm9ncmFtbWF0aWNhbGx5IGluamVjdHMgeW91ciBjb250ZW50XG4gICAgICogc2NyaXB0IChzbyB0aGF0IHRoZSBleHRlbnNpb24gYWN0aXZhdGVzIGltbWVkaWF0ZWx5IG9uIGV4aXN0aW5nIHRhYnMsIHdpdGhvdXQgaGF2aW5nIHRvXG4gICAgICogcmVsb2FkIHRoZW0pLCB0aGVuIHlvdXIgY29udGVudCBzY3JpcHQgdG9vIGlzIGdvaW5nIHRvIHJ1biByZXBlYXRlZGx5IHdpdGhpbiBlYWNoIHRhYi5cbiAgICAgKiBFdmVuIGlmIHlvdSBkb24ndCBkbyBhbnkgcHJvZ3JhbW1hdGljIGluamVjdGlvbiwgeW91IHNob3VsZCB3cml0ZSB5b3VyIGNvbnRlbnQgc2NyaXB0XG4gICAgICogY2FyZWZ1bGx5LCB0byBhdm9pZCBtZW1vcnkgbGVha3MgaW4gY2FzZSBvZiByZXBlYXRlZCBleGVjdXRpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBhY3RpdmF0ZU9uRG9jdW1lbnRSZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25kaXRpb25hbEFjdGl2YXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLyogV2UncmUgbm90IHdvcnJpZWQgYWJvdXQgdGhpcyBldmVudCBsaXN0ZW5lciBhcyBhIG1lbW9yeSBsZWFrLlxuICAgICAgICAgICAgICAgICAqIEl0IHdpbGwgb25seSBiZSBhZGRlZCBpbiBjYXNlcyB3aGVyZSB0aGUgY29udGVudCBzY3JpcHQgaGFzIHJ1blxuICAgICAgICAgICAgICAgICAqIGJlZm9yZSB0aGUgcGFnZSBoYXMgZmluaXNoZWQgbG9hZGluZy4gVGhhdCBpcyBub3QgdGhlIFwicmVwZWF0ZWRcbiAgICAgICAgICAgICAgICAgKiBydW5cIiBjYXNlIHdlIGFyZSB3b3JyaWVkIGFib3V0LiBUaGUgbGF0dGVyIGFyaXNlcyBkdWUgdG8gYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgICAqIHNjcmlwdHMgd2hpY2ggbWF5IHJlLWluamVjdCBjb250ZW50IHNjcmlwdHMgd2hlbiB0aGV5IHJlLXJ1bi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgXyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmRpdGlvbmFsQWN0aXZhdGlvbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsIi8qISBicm93c2VyLXBlZXJzIHYwLjEuMCB8IENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFN0ZXZlIEtpZWZmZXIgfCBNSVQgbGljZW5zZSAqL1xuLyogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVCAqL1xuXG5pbXBvcnQgeyByZWNvbnN0aXR1dGVFcnJvciB9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHsgTGlzdGVuYWJsZSB9IGZyb20gXCIuL3V0aWxcIjtcblxuLyogVGhpcyBpcyB0aGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgYWxsIG9mIG91ciBwZWVyIGNsYXNzZXMuXG4gKiBJdCBpbXBsZW1lbnRzIGV2ZXJ5dGhpbmcgdG8gZG8gd2l0aCBtYWtpbmcgYW5kIGhhbmRsaW5nIHJlcXVlc3RzIGFuZCByZXNwb25zZXMuXG4gKlxuICogU3ViY2xhc3NlcyBhcmUgcmVzcG9uc2libGUgZm9yIGVzdGFibGlzaGluZyBjb25uZWN0aW9ucyBiZXR3ZWVuIHBlZXJzLFxuICogYW5kIGZvciBpbXBsZW1lbnRpbmcgdGhlIGFic3RyYWN0IGBwb3N0TWVzc2FnZUFzUGVlcmAgbWV0aG9kIGRlZmluZWQgYnkgdGhpc1xuICogYmFzZSBjbGFzcy5cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBQZWVyIGV4dGVuZHMgTGlzdGVuYWJsZSB7XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSBuYW1lIHtzdHJpbmd9IGEgdW5pcXVlIG5hbWUgZm9yIHRoaXMgcGVlciwgdG8gdGVsbCBpdCBhcGFydFxuICAgICAqICAgZnJvbSBhbGwgb3RoZXJzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoe30pO1xuXG4gICAgICAgIC8vIEZvciBkZXZlbG9wbWVudCBhbmQgdGVzdGluZyBpbiBzZXR0aW5ncyBsaWtlIGJyb3dzZXIgZXh0ZW5zaW9ucyB1bmRlclxuICAgICAgICAvLyBNYW5pZmVzdCBWMyAod2hlcmUgYmFja2dyb3VuZCBzY3JpcHRzIGFyZSByZXBlYXRlZGx5IHRlcm1pbmF0ZWQgYW5kXG4gICAgICAgIC8vIHJlc3RhcnRlZCkgaXQgY2FuIGJlIGhlbHBmdWwgdG8gcHJpbnQgZGVidWdnaW5nIG91dHB1dCBpbiB3aGljaCB3ZSBzZWVcbiAgICAgICAgLy8gdGhlIHRpbWUgYXQgd2hpY2ggYSBnaXZlbiBwZWVyIHdhcyBjb25zdHJ1Y3RlZC5cbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rpb25UaW1lID0gKG5ldyBEYXRlKCkpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubmV4dFNlcU51bSA9IDA7XG4gICAgICAgIHRoaXMucmVxdWVzdHNCeVNlcU51bSA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnJlY29uc3RpdHV0ZUVycm9ycyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmVhZHlSZXNvbHZlID0gbnVsbDtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBzZWxmLnJlYWR5UmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnVpbHRJbkhhbmRsZXJzID0gbmV3IE1hcCgpXG4gICAgICAgICAgICAuc2V0KCdyZWFkeScsIHRoaXMucmVhZHkuYmluZCh0aGlzKSlcbiAgICAgICAgO1xuICAgICAgICBmb3IgKGxldCBbbmFtZSwgaGFuZGxlcl0gb2YgdGhpcy5idWlsdEluSGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZEhhbmRsZXIobmFtZSwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcm9tQWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBjb3B5TWVzc2FnZShtc2cpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gTWVzc2FnZSBoYW5kbGluZ1xuXG4gICAgLyogU3ViY2xhc3NlcyBzaG91bGQgcGFzcyBpbmNvbWluZyByZXF1ZXN0L3Jlc3BvbnNlIHdyYXBwZXIgbWVzc2FnZXMgdG8gdGhpcyBtZXRob2QuXG4gICAgICpcbiAgICAgKiB3cmFwcGVyIGZvcm1hdDoge1xuICAgICAqICAgdHlwZSB7c3RyaW5nfSAncmVxdWVzdCcgb3IgJ3Jlc3BvbnNlJ1xuICAgICAqIH1cbiAgICAgKlxuICAgICAqIEZ1cnRoZXJtb3JlLCB0aGUgd3JhcHBlciBtdXN0IGNvbmZvcm0gdG8gdGhlIHJlcXVpcmVkIGZvcm1hdCBvZiBgdGhpcy5oYW5kbGVSZXF1ZXN0YFxuICAgICAqIG9yIGB0aGlzLmhhbmRsZVJlc3BvbnNlYCwgYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiBgd3JhcHBlci50eXBlYC5cbiAgICAgKlxuICAgICAqL1xuICAgIGhhbmRsZU1lc3NhZ2Uod3JhcHBlcikge1xuICAgICAgICBpZiAod3JhcHBlci50eXBlID09PSAncmVxdWVzdCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVxdWVzdCh3cmFwcGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2Uod3JhcHBlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAqIHdyYXBwZXIgZm9ybWF0OiB7XG4gICAgICogICBmcm9tIHtzdHJpbmd9IHRoZSBuYW1lIG9mIHRoZSBwZWVyIHRoYXQgc2VudCB0aGUgbWVzc2FnZSxcbiAgICAgKiAgIHNlcU51bSB7aW50fSBzZXF1ZW5jZSBudW1iZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gYXNzb2NpYXRlIHJlc3BvbnNlIHdpdGggcmVxdWVzdCxcbiAgICAgKiAgIGhhbmRsZXJEZXNjcmlwIHtzdHJpbmd9IHNob3VsZCBiZSBhIHZhbGlkIGRlc2NyaXB0b3Igc3RyaW5nIHBvaW50aW5nIHRvIGEgaGFuZGxlclxuICAgICAqICAgICB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIHBlZXIsXG4gICAgICogICBhcmdzIHthbnl9IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXG4gICAgICogfVxuICAgICAqL1xuICAgIGhhbmRsZVJlcXVlc3Qod3JhcHBlcikge1xuICAgICAgICBjb25zdCBwZWVyTmFtZSA9IHdyYXBwZXIuZnJvbTtcbiAgICAgICAgY29uc3Qgc2VxTnVtID0gd3JhcHBlci5zZXFOdW07XG4gICAgICAgIGNvbnN0IGhhbmRsZXJEZXNjcmlwID0gd3JhcHBlci5oYW5kbGVyRGVzY3JpcDtcbiAgICAgICAgY29uc3QgYXJncyA9IHdyYXBwZXIuYXJncztcbiAgICAgICAgbGV0IGhhbmRsZXI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gdGhpcy5sb29rdXBIYW5kbGVyKGhhbmRsZXJEZXNjcmlwKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5yZXR1cm5SZWplY3Rpb24ocGVlck5hbWUsIHNlcU51bSwgZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FsbCB0aGUgaGFuZGxlciBpbnNpZGUgYFByb21pc2UucmVzb2x2ZWAgc28gd2UgY2FuIHdvcmsgd2l0aCBpdCBhc3luY2hyb25vdXNseSxcbiAgICAgICAgLy8gZXZlbiBpZiB0aGUgaGFuZGxlciByZXR1cm5zIHN5bmNocm9ub3VzbHkuXG4gICAgICAgIC8vIFdlIHBhc3MgdGhlIHdob2xlIHdyYXBwZXIgYXMgYSBzZWNvbmQgYXJndW1lbnQgKHdoaWNoIHRoZSBoYW5kbGVyIG1heSBjaG9vc2VcbiAgICAgICAgLy8gdG8gaWdub3JlKSwgaW4gY2FzZSB0aGUgaGFuZGxlciBuZWVkcyB0aGUgXCJtZXRhXCIgaW5mb3JtYXRpb24gKHN1Y2ggYXMgdGhlIHBlZXIgbmFtZSkuXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShoYW5kbGVyKGFyZ3MsIHdyYXBwZXIpKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJldHVyblJlc3BvbnNlKHBlZXJOYW1lLCBzZXFOdW0sIHJlc3VsdCk7XG4gICAgICAgIH0pLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICByZWFzb24gPSB0aGlzLmNoZWNrSGFuZGxpbmdFcnJvcihyZWFzb24sIHdyYXBwZXIpO1xuICAgICAgICAgICAgdGhpcy5yZXR1cm5SZWplY3Rpb24ocGVlck5hbWUsIHNlcU51bSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gcGVlck5hbWUge3N0cmluZ31cbiAgICAgKiBAcGFyYW0gc2VxTnVtIHtpbnR9XG4gICAgICogQHBhcmFtIHJlc3VsdCB7YW55fVxuICAgICAqL1xuICAgIHJldHVyblJlc3BvbnNlKHBlZXJOYW1lLCBzZXFOdW0sIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0ge1xuICAgICAgICAgICAgdHlwZTogJ3Jlc3BvbnNlJyxcbiAgICAgICAgICAgIGZyb206IHRoaXMuZnJvbUFkZHJlc3MoKSxcbiAgICAgICAgICAgIHNlcU51bTogc2VxTnVtLFxuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2VBc1BlZXIocGVlck5hbWUsIHdyYXBwZXIpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIHBlZXJOYW1lIHtzdHJpbmd9XG4gICAgICogQHBhcmFtIHNlcU51bSB7aW50fVxuICAgICAqIEBwYXJhbSByZWFzb246IHtFcnJvcn1cbiAgICAgKi9cbiAgICByZXR1cm5SZWplY3Rpb24ocGVlck5hbWUsIHNlcU51bSwgcmVhc29uKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB7XG4gICAgICAgICAgICB0eXBlOiAncmVzcG9uc2UnLFxuICAgICAgICAgICAgZnJvbTogdGhpcy5mcm9tQWRkcmVzcygpLFxuICAgICAgICAgICAgc2VxTnVtOiBzZXFOdW0sXG4gICAgICAgICAgICByZWplY3Rpb25fcmVhc29uOiByZWFzb24ubWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZUFzUGVlcihwZWVyTmFtZSwgd3JhcHBlcik7XG4gICAgfVxuXG4gICAgY29uc3VtZVJlcXVlc3REYXRhKHNlcU51bSkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXF1ZXN0c0J5U2VxTnVtLmdldChzZXFOdW0pO1xuICAgICAgICBpZiAoZGF0YSkgd2luZG93LmNsZWFyVGltZW91dChkYXRhLnRpbWVvdXRIYW5kbGUpOyAgLy8gZmFpbHMgZ3JhY2VmdWxseSBpZiB0aW1lb3V0IGFscmVhZHkgY2xlYXJlZCBvciBoYW5kbGUgaXMgbnVsbFxuICAgICAgICB0aGlzLnJlcXVlc3RzQnlTZXFOdW0uZGVsZXRlKHNlcU51bSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogd3JhcHBlciBmb3JtYXQ6IHtcbiAgICAgKiAgIFJFUVVJUkVEOlxuICAgICAqICAgICAgZnJvbSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgcGVlciB0aGF0IHNlbnQgdGhlIG1lc3NhZ2UsXG4gICAgICogICAgICBzZXFOdW0ge2ludH0gc2VxdWVuY2UgbnVtYmVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGFzc29jaWF0ZSByZXNwb25zZSB3aXRoIHJlcXVlc3QsXG4gICAgICogICBFSVRIRVIvT1I6XG4gICAgICogICAgICByZXN1bHQge2FueX0gaWYgdGhlIGNhbGwgd2FzIHN1Y2Nlc3NmdWwsIHRoaXMgaXMgdGhlIHJlc3VsdCB0byBiZSByZXR1cm5lZC5cbiAgICAgKiAgICAgIHJlamVjdGlvbl9yZWFzb24ge3N0cmluZ30gaWYgdGhlIGNhbGwgZmFpbGVkLCB0aGlzIGlzIGFuIGluZGljYXRpb24gb2YgdGhlIHJlYXNvbi5cbiAgICAgKiB9XG4gICAgICovXG4gICAgaGFuZGxlUmVzcG9uc2Uod3JhcHBlcikge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb25zdW1lUmVxdWVzdERhdGEod3JhcHBlci5zZXFOdW0pO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIC8vIFNob3VsZCBvbmx5IGhhcHBlbiBpZiByZXF1ZXN0IGRhdGEgYWxyZWFkeSBjb25zdW1lZCBkdWUgdG8gdGltZW91dC5cbiAgICAgICAgICAgIC8vIEluIHRoYXQgY2FzZSwgY2FsbGVyIGFscmVhZHkgaGFzIHRoZWlyIGFuc3dlci4gU28ganVzdCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3cmFwcGVyLnJlamVjdGlvbl9yZWFzb24pIHtcbiAgICAgICAgICAgIGxldCBlID0gbmV3IEVycm9yKHdyYXBwZXIucmVqZWN0aW9uX3JlYXNvbik7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWNvbnN0aXR1dGVFcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBlID0gcmVjb25zdGl0dXRlRXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnJlamVjdChlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEucmVzb2x2ZSh3cmFwcGVyLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBSZWFkaW5lc3NcbiAgICAvL1xuICAgIC8vICAgVG8gYmUgY2xlYXI6IHRoaXMgbWVhbnMgcmVhZGluZXNzIHRvIGhhbmRsZSByZXF1ZXN0cywgbm90IHRvIGFjY2VwdCBjb25uZWN0aW9ucy5cbiAgICAvLyAgIEEgcGVlciBpbnN0YW5jZSBpcyBpbW1lZGlhdGVseSByZWFkeSB0byBhY2NlcHQgY29ubmVjdGlvbnMgYWZ0ZXIgY29uc3RydWN0aW9uLlxuXG4gICAgLyogQ2FsbCB0aGlzIHdoZW4geW91J3ZlIGZpbmlzaGVkIGFkZGluZyBoYW5kbGVycywgaW4gb3JkZXIgdG8gZGVjbGFyZSB0aGF0IHRoaXNcbiAgICAgKiBwZWVyIGlzIHJlYWR5IHRvIGhhbmRsZSByZXF1ZXN0cy5cbiAgICAgKi9cbiAgICBzZXRSZWFkeSgpIHtcbiAgICAgICAgdGhpcy5yZWFkeVJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvKiBUaGlzIGlzIG91ciBidWlsdC1pbiBoYW5kbGVyIGZvciB0aGUgJ3JlYWR5JyBoYW5kbGVyIGRlc2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogSXQgcmV0dXJucyBhIHByb21pc2UgdGhhdCBvdGhlciBwZWVycyBjYW4gdXNlIHRvIHdhaXQgdW50aWwgdGhpcyBwZWVyIGlzIHJlYWR5XG4gICAgICogdG8gYWNjZXB0IGNvbm5lY3Rpb25zLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeVByb21pc2U7XG4gICAgfVxuXG4gICAgLyogQ29udmVuaWVuY2UgbWV0aG9kIHRvIGNoZWNrIHRoZSByZWFkaW5lc3Mgb2YgYSBjb25uZWN0ZWQgcGVlci5cbiAgICAgKi9cbiAgICBjaGVja1JlYWR5KHBlZXJOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2VSZXF1ZXN0KHBlZXJOYW1lLCAncmVhZHknLCB7fSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlcXVlc3QgaGFuZGxlcnNcblxuICAgIC8qIEFkZCBhIGhhbmRsZXIgZnVuY3Rpb24gb3IgaGFuZGxlciBvYmplY3QuXG4gICAgICpcbiAgICAgKiBIYW5kbGVyIGZ1bmN0aW9ucyB3aWxsIGJlIHBhc3NlZCB0d28gYXJndW1lbnRzOiBgYXJnc2AgYW5kIGBtZXRhYC4gVGhlIGZpcnN0IGlzIGFuXG4gICAgICogb2JqZWN0IHBhc3NlZCBieSB0aGUgY2xpZW50IGFuZCBwcmVzdW1hYmx5IGNvbnRhaW5pbmcgYWxsIHRoZSBhcmd1bWVudHMgcmVxdWlyZWQgYnlcbiAgICAgKiB0aGUgaGFuZGxlcjsgdGhlIHNlY29uZCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBtZXRhIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXF1ZXN0LFxuICAgICAqIHN1Y2ggYXMgdGhlIG5hbWUgb2YgdGhlIGNsaWVudCAod2hpY2ggaXMgdW5kZXIgYG1ldGEuZnJvbWApLlxuICAgICAqXG4gICAgICogSGFuZGxlcnMgbWF5IHJldHVybiBhIHZhbHVlIHN5bmNocm9ub3VzbHksIG9yIG1heSByZXR1cm4gYSBQcm9taXNlLiBFaXRoZXIgaXMgYWNjZXB0YWJsZS5cbiAgICAgKlxuICAgICAqIFlvdSBtYXkgbm90IHJlZ2lzdGVyIGEgaGFuZGxlciB1bmRlciBhIHJlc2VydmVkIG5hbWUsIGkuZS4gdGhlIG5hbWVzIG9mIGFueSBvZiBvdXJcbiAgICAgKiBidWlsdC1pbiBoYW5kbGVycy4gVGhlc2UgYXJlIGRlZmluZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHJldHVybjogdGhpcyBpbnN0YW5jZSwgdG8gc3VwcG9ydCBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBhZGRIYW5kbGVyKG5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVpbHRJbkhhbmRsZXJzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVnaXN0ZXIgaGFuZGxlciB1bmRlciByZXNlcnZlZCBuYW1lOiAke25hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWRkSGFuZGxlcihuYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2FkZEhhbmRsZXIobmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnNldChuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvKiBBZGQgYSBcImJ1aWx0LWluIGhhbmRsZXIsXCIgd2hpY2ggcmVhbGx5IG1lYW5zIGEgaGFuZGxlciBzdWNoIHRoYXQgYW4gZXJyb3JcbiAgICAgKiB3aWxsIGJlIHRocm93biBpZiBhbnlvbmUgdHJpZXMgdG8gYWRkIGEgaGFuZGxlciBieSB0aGUgc2FtZSBuYW1lIHVzaW5nIHRoZVxuICAgICAqIHVzdWFsIGBhZGRIYW5kbGVyYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgbGFuZ3VhZ2Ugc3VwcG9ydGVkIGl0LCB3ZSB3b3VsZCBtYWtlIHRoaXMgYSBwcm90ZWN0ZWQgbWV0aG9kLCBpLmUuXG4gICAgICogdXNhYmxlIG9ubHkgYnkgc3ViY2xhc3Nlcy4gU28gZG9uJ3QgdXNlIGl0IHVubGVzcyB5b3Ugc2hvdWxkIVxuICAgICAqL1xuICAgIF9hZGRCdWlsdEluSGFuZGxlcihuYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuYnVpbHRJbkhhbmRsZXJzLnNldChuYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5fYWRkSGFuZGxlcihuYW1lLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvKiBMb29rIHVwIGEgaGFuZGxlciwgYnkgaXRzIGRlc2NyaXB0aW9uLlxuICAgICAqXG4gICAgICogQSBoYW5kbGVyIGRlc2NyaXB0aW9uIHNob3VsZCBiZSBhIHN0cmluZyBuYW1pbmcgc29tZXRoaW5nIHRoYXQgaGFzIGJlZW4gYWRkZWQgYXMgYVxuICAgICAqIGhhbmRsZXIgZm9yIHRoaXMgc2VydmVyLCBvciBhbiBhdHRyaWJ1dGUgdGhlcmVvZiwgcmVjdXJzaXZlbHkuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSwgaWYgYG15RnVuY2AgaXMgYSBmdW5jdGlvbiwgdGhlbiBhZnRlclxuICAgICAqICAgICAgc2VydmVyLmFkZEhhbmRsZXIoJ2YnLCBteUZ1bmMpXG4gICAgICogJ2YnIGlzIGEgdmFsaWQgZGVzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBJZiBgbXlJbnN0YW5jZWAgaXMgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcyB0aGF0IGhhcyBhIGBkb1NvbWV0aGluZ2AgbWV0aG9kLCB0aGVuXG4gICAgICogYWZ0ZXJcbiAgICAgKiAgICAgIHNlcnZlci5hZGRIYW5kbGVyKCdmb28nLCBteUluc3RhbmNlKVxuICAgICAqICdmb28uZG9Tb21ldGhpbmcnIGlzIGEgdmFsaWQgZGVzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVzY3JpcCB7c3RyaW5nfSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGhhbmRsZXIuXG4gICAgICogQHJldHVybjogdGhlIGhhbmRsZXIuIElmIHRoZSBkZXNjcmlwdGlvbiB3YXMgZG90dGVkLCB0aGVuIHRoZSByZXR1cm5lZCBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgICogICBoYXMgdGhlIHByZXZpb3VzIG9iamVjdCBpbiB0aGUgY2hhaW4gYm91bmQgYXMgYHRoaXNgLlxuICAgICAqIEB0aHJvd3M6IEVycm9yIGlmIHRoZSBkZXNjcmlwdGlvbiBkb2VzIG5vdCByZXNvbHZlIHRvIGFueXRoaW5nLCBvciBpZiBpdCBkb2VzIGJ1dCB0aGF0XG4gICAgICogICB0aGluZyBpcyBub3QgYSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBsb29rdXBIYW5kbGVyKGRlc2NyaXApIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBkZXNjcmlwLnNwbGl0KCcuJyk7XG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgICBsZXQgcHJldjtcbiAgICAgICAgZm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gdGhpcy5oYW5kbGVycy5nZXQocGFydCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBwcmV2ID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gaGFuZGxlcltwYXJ0XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gaGFuZGxlcjogJHtkZXNjcmlwfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhhbmRsZXIgXCIke2Rlc2NyaXB9XCIgaXMgbm90IGEgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgaGFuZGxlciA9IGhhbmRsZXIuYmluZChwcmV2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG5cbiAgICAvKiBJZiB5b3UgYXJlIG9uIHRoZSBzYW1lIHNpZGUgYXMgYSBwZWVyLCB5b3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBjYWxsXG4gICAgICogb25lIG9mIGl0cyBoYW5kbGVycyBkaXJlY3RseSwgaW5zdGVhZCBvZiB3aXRoaW4gYSByZXF1ZXN0L3Jlc3BvbnNlIHBhaXIuXG4gICAgICovXG4gICAgY2FsbEhhbmRsZXIoaGFuZGxlckRlc2NyaXAsIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMubG9va3VwSGFuZGxlcihoYW5kbGVyRGVzY3JpcCk7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKGFyZ3MpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE1ha2luZyByZXF1ZXN0c1xuXG4gICAgdGFrZU5leHRTZXFOdW0oKSB7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm5leHRTZXFOdW07XG4gICAgICAgIHRoaXMubmV4dFNlcU51bSA9IG4gKyAxO1xuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG5cbiAgICAvKiBTZW5kIGEgcmVxdWVzdCB0byBhIHNpbmdsZSBwZWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBlZXJOYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBwZWVyIHRvIHdoaWNoIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBzZW50LlxuICAgICAqIEBwYXJhbSBoYW5kbGVyRGVzY3JpcCB7c3RyaW5nfSBBIGRlc2NyaXB0aW9uIGluZGljYXRpbmcgdGhlIGRlc2lyZWQgaGFuZGxlciBmb3IgdGhlXG4gICAgICogICByZXF1ZXN0IG9uIHRoZSBvdGhlciBzaWRlLlxuICAgICAqIEBwYXJhbSBhcmdzIHtvYmp9IHRoZSBhcmd1bWVudHMgb2JqZWN0IHRvIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlciBvbiB0aGUgb3RoZXIgc2lkZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvcHRpb25zOiB7XG4gICAgICogICBkb1JlYWR5Q2hlY2sge2Jvb2x9IG9wdGlvbmFsLCBkZWZhdWx0IGZhbHNlLiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBwcmVjZWRlXG4gICAgICogICAgIHRoZSByZXF1ZXN0IHdpdGggYSByZWFkeSBjaGVjay5cbiAgICAgKiAgIHRpbWVvdXQge2ludH0gb3B0aW9uYWwsIGRlZmF1bHQgMC4gU2V0IHBvc2l0aXZlIGlmIHlvdSB3YW50IHRoZSByZXF1ZXN0IHRvIHRpbWVvdXRcbiAgICAgKiAgICAgYWZ0ZXIgdGhpcyBtYW55IG1pbGxpc2Vjb25kcy4gSWYgMCAob3IgbmVnYXRpdmUpLCB3aWxsIHdhaXQgaW5kZWZpbml0ZWx5LlxuICAgICAqICAgICBJbiBjYXNlIG9mIHRpbWVvdXQsIHRoZSByZXR1cm5lZCBwcm9taXNlIHJlamVjdHMuXG4gICAgICogfVxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3BvbnNlIHRvIHRoZSByZXF1ZXN0LCBvciByZWplY3RzXG4gICAgICogICB3aXRoIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogU2VlIGFsc286IGBicm9hZGNhc3RSZXF1ZXN0YC5cbiAgICAgKi9cbiAgICBtYWtlUmVxdWVzdChwZWVyTmFtZSwgaGFuZGxlckRlc2NyaXAsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZG9SZWFkeUNoZWNrID0gZmFsc2UsXG4gICAgICAgICAgICB0aW1lb3V0ID0gMCxcbiAgICAgICAgfSA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGNvbnN0IHNlcU51bSA9IHRoaXMudGFrZU5leHRTZXFOdW0oKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIGZyb206IHRoaXMuZnJvbUFkZHJlc3MoKSxcbiAgICAgICAgICAgIHNlcU51bTogc2VxTnVtLFxuICAgICAgICAgICAgaGFuZGxlckRlc2NyaXA6IGhhbmRsZXJEZXNjcmlwLFxuICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb1JlYWR5Q2hlY2sgPyB0aGlzLmNoZWNrUmVhZHkocGVlck5hbWUpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHJldHVybiBjaGVjay50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHRpbWVvdXQgPCAxID8gbnVsbCA6IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29uc3VtZVJlcXVlc3REYXRhKHNlcU51bSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGF0YSkgcmV0dXJuOyAvLyBSZXF1ZXN0IHdhcyBhbHJlYWR5IGhhbmRsZWQuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1BlZXIgcmVxdWVzdCB0aW1lZCBvdXQuJykpO1xuICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdHNCeVNlcU51bS5zZXQoc2VxTnVtLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlOiB0aW1lb3V0SGFuZGxlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2VBc1BlZXIocGVlck5hbWUsIHdyYXBwZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIEJyb2FkY2FzdCBhIHJlcXVlc3QgdG8gYWxsIGNvbm5lY3RlZCBwZWVycyAob3IgYSBzdWJzZXQsIGJ5IGZpbHRlcmluZykuXG4gICAgICpcbiAgICAgKiBUaGlzIGp1c3QgcGVyZm9ybXMgbXVsdGlwbGUgcmVxdWVzdHMuIFBhcnRpY3VsYXIgc3ViY2xhc3NlcyBtYXkgaGF2ZSBtb3JlXG4gICAgICogZWZmaWNpZW50IHdheXMgb2YgYnJvYWRjYXN0aW5nIHRoYXQgdGhleSBtYXkgcHJlZmVyIHRvIHVzZSBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGhhbmRsZXJEZXNjcmlwIHtzdHJpbmd9IEEgZGVzY3JpcHRpb24gaW5kaWNhdGluZyB0aGUgZGVzaXJlZCBoYW5kbGVyIGZvciB0aGVcbiAgICAgKiAgIHJlcXVlc3Qgb24gdGhlIG90aGVyIHNpZGUuXG4gICAgICogQHBhcmFtIGFyZ3Mge29ian0gdGhlIGFyZ3VtZW50cyBvYmplY3QgdG8gYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyIG9uIHRoZSBvdGhlciBzaWRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdGlvbnM6IHtcbiAgICAgKiAgIGV4Y2x1ZGVTZWxmIHtib29sfSBJZiB0cnVlLCBkbyBub3Qgc2VuZCB0aGUgcmVxdWVzdCB0byBzZWxmLiBUaGlzIGlzIHJlbGV2YW50IGZvclxuICAgICAqICAgICBzb21lIHBlZXIgdHlwZXMgdGhhdCBrZWVwIHRoZWlyIG93biBuYW1lIGluIHRoZWlyIHNldCBvZiBwZWVyczsgZm9yIHRob3NlIHRoYXRcbiAgICAgKiAgICAgZG8gbm90LCBpdCBjYW4gYmUgaWdub3JlZC5cbiAgICAgKiAgIGZpbHRlciB7ZnVuY3Rpb259IG9wdGlvbmFsIGZ1bmN0aW9uIG1hcHBpbmcgcGVlciBuYW1lcyB0byBib29sZWFucy4gQWxsb3dzIHRvXG4gICAgICogICAgIGJyb2FkY2FzdCB0byBhIHN1YnNldCBvZiBhbGwgY29ubmVjdGVkIHBlZXJzLCBuYW1lbHkgdGhvc2UgbWFwcGluZyB0byBgdHJ1ZWAuXG4gICAgICogICAgIElmIGBleGNsdWRlU2VsZmAgaXMgdHJ1ZSwgdGhhdCBleGNsdXNpb24gaGFwcGVucyBmaXJzdCwgYW5kIHRoZSBnaXZlbiBmaWx0ZXJcbiAgICAgKiAgICAgaXMgYXBwbGllZCB0byB3aGF0IHJlbWFpbnMuXG4gICAgICogICBza2lwUmVhZHlDaGVja3Mge2Jvb2x9IG9wdGlvbmFsLCBkZWZhdWx0IGZhbHNlLiBJZiBmYWxzZSB3ZSB3aWxsIHByZWNlZGUgZWFjaFxuICAgICAqICAgICByZXF1ZXN0IHdpdGggYSByZWFkaW5lc3MgY2hlY2suIFNldCB0cnVlIHRvIHNraXAuXG4gICAgICogfVxuICAgICAqXG4gICAgICogQHJldHVybiB7QXJyYXlbUHJvbWlzZV19IGFycmF5IG9mIHRoZSBwcm9taXNlcyByZXR1cm5lZCBieSBvdXIgYG1ha2VSZXF1ZXN0YCBtZXRob2QsXG4gICAgICogICBvbmUgZm9yIGVhY2ggcGVlciB0byB3aGljaCBhIHJlcXVlc3Qgd2FzIHNlbnQuXG4gICAgICpcbiAgICAgKiBTZWUgYWxzbzogYG1ha2VSZXF1ZXN0YC5cbiAgICAgKlxuICAgICAqIE5vdGU6IFdoaWxlIGluIHRoZSBgbWFrZVJlcXVlc3RgIG1ldGhvZCB0aGUgcmVhZHkgY2hlY2sgaXMgc2tpcHBlZCBieSBkZWZhdWx0LCBoZXJlIHRoZVxuICAgICAqICAgYmVoYXZpb3IgaXMgdGhlIG9wcG9zaXRlLCBhbmQgdGhlIHJlYWR5IGNoZWNrcyBhcmUgcGVyZm9ybWVkIGJ5IGRlZmF1bHQuIEl0IGlzIGZlbHQgdGhhdCxcbiAgICAgKiAgIHJhdGhlciB0aGFuIGJlaW5nIGNvbmZ1c2luZywgdGhpcyBjYXRlcnMgdG8gbm9ybWFsIHVzYWdlIHBhdHRlcm5zLiBJdCB3aWxsIGJlIG5vcm1hbCB0b1xuICAgICAqICAgYmUgYnJvYWRjYXN0aW5nIHRvIGEgY29sbGVjdGlvbiBvZiBwZWVycyBmb3Igd2hpY2ggd2UgYXJlIF9ub3RfIGNhcmVmdWxseSBtYWludGFpbmluZyBzdGF0ZTtcbiAgICAgKiAgIHdoZXJlYXMgd2hlbiByZXF1ZXN0aW5nIGZyb20gYSBzaW5nbGUgcGVlciwgd2UgYXJlIG1vcmUgbGlrZWx5IHRvIGhhdmUgYWxyZWFkeSBwZXJmb3JtZWQgYW5cbiAgICAgKiAgIGluaXRpYWwgKG9uZS10aW1lKSByZWFkeSBjaGVjayBvdXJzZWx2ZXMuXG4gICAgICovXG4gICAgYnJvYWRjYXN0UmVxdWVzdChoYW5kbGVyRGVzY3JpcCwgYXJncywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBleGNsdWRlU2VsZiA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyID0gKCgpID0+IHRydWUpLFxuICAgICAgICAgICAgc2tpcFJlYWR5Q2hlY2tzID0gZmFsc2VcbiAgICAgICAgfSA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGNvbnN0IHBlZXJOYW1lcyA9IHRoaXMuZ2V0QWxsUGVlck5hbWVzKCkuZmlsdGVyKG5hbWUgPT4gKCFleGNsdWRlU2VsZikgfHwgbmFtZSAhPT0gdGhpcy5uYW1lKS5maWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwZWVyTmFtZSBvZiBwZWVyTmFtZXMpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZXMucHVzaCh0aGlzLm1ha2VSZXF1ZXN0KHBlZXJOYW1lLCBoYW5kbGVyRGVzY3JpcCwgYXJncywge1xuICAgICAgICAgICAgICAgIGRvUmVhZHlDaGVjazogIXNraXBSZWFkeUNoZWNrcyxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VQcm9taXNlcztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBBYnN0cmFjdCBtZXRob2RzIHN1YmNsYXNzZXMgTUFZIG92ZXJyaWRlXG5cbiAgICAvKiBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCBpZiB0aGV5IHdhbnQgdG8gdXNlIHRoaXNcbiAgICAgKiBiYXNlIGNsYXNzJ3MgYGJyb2FkY2FzdFJlcXVlc3RgIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5W3N0cmluZ119IGFuIEFycmF5IG9mIHRoZSBuYW1lcyBvZiBhbGwgY29ubmVjdGVkIHBlZXJzLlxuICAgICAqL1xuICAgIGdldEFsbFBlZXJOYW1lcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qIFRoaXMgZ2l2ZXMgYSBjaGFuY2UgdG8gZXhhbWluZSBhbmQgbW9kaWZ5IGEgaGFuZGxlciBlcnJvciwgYW5kIHBvc3NpYmx5XG4gICAgICogaGF2ZSBzaWRlIGVmZmVjdHMsIGJlZm9yZSB0aGUgZXJyb3IgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVhc29uOiBFcnJvciB0aHJvd24gYnkgcmVxdWVzdCBoYW5kbGVyLlxuICAgICAqIEBwYXJhbSB3cmFwcGVyOiB0aGUgd3JhcHBlciBtZXNzYWdlIHRoYXQgd2FzIGJlaW5nIGhhbmRsZWQuXG4gICAgICogQHJldHVybjogRXJyb3IgaW5zdGFuY2UuIE1heSBiZSB0aGUgc2FtZSBhcyB0aGUgZ2l2ZW4gcmVhc29uLCBvciBkaWZmZXJlbnQuXG4gICAgICovXG4gICAgY2hlY2tIYW5kbGluZ0Vycm9yKHJlYXNvbiwgd3JhcHBlcikge1xuICAgICAgICByZXR1cm4gcmVhc29uO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEFic3RyYWN0IG1ldGhvZHMgc3ViY2xhc3NlcyBNVVNUIG92ZXJyaWRlXG5cbiAgICAvKiBUaGlzIGlzIHdoZXJlIHN1YmNsYXNzZXMgbXVzdCB1c2UgdGhlaXIgdHJhbnNwb3J0LXNwZWNpZmljIG1ldGhvZCBvZiBnZXR0aW5nXG4gICAgICogYSBzZXJpYWxpemFibGUgbWVzc2FnZSBmcm9tIG9uZSBwZWVyIHRvIGFub3RoZXIuXG4gICAgICpcbiAgICAgKiBTcGVjaWZpY2FsbHksIHRoZSBtZXNzYWdlIHRvIGJlIGNvbW11bmljYXRlZCBoZXJlIGlzIG9uZSBvZiB0aGUgXCJ3cmFwcGVyXCJcbiAgICAgKiBtZXNzYWdlcyB3ZSB1c2UgdG8gcmVwcmVzZW50IHJlcXVlc3RzIGFuZCByZXNwb25zZXMuIFRoZSBpbnRlbnRpb24gdGhlcmVmb3JlXG4gICAgICogaXMgdGhhdCBpdCBiZSBkZWxpdmVyZWQgdG8gdGhlIGBoYW5kbGVNZXNzYWdlYCBtZXRob2Qgb2YgdGhlIHBlZXIgKHdoaWNoIHNob3VsZFxuICAgICAqIF9ub3RfIGJlIG92ZXJyaWRkZW4sIGJ1dCBzaG91bGQgYmUgaW5oZXJpdGVkIGZyb20gdGhpcyBiYXNlIGNsYXNzKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwZWVyTmFtZSB7c3RyaW5nfSB0aGUgbmFtZSBvZiBhIGNvbm5lY3RlZCBwZWVyXG4gICAgICogQHBhcmFtIHdyYXBwZXIge29ian0gdGhlIHdyYXBwZXIgbWVzc2FnZSB0byBiZSBwb3N0ZWQgdG8gdGhhdCBwZWVyLiBGb3JtYXQ6IHtcbiAgICAgKiAgIHR5cGUge3N0cmluZ30gZXF1YWwgdG8gZWl0aGVyICdyZXF1ZXN0JyBvciAncmVzcG9uc2UnLCBhcHByb3ByaWF0ZWx5LlxuICAgICAqIH1cbiAgICAgKi9cbiAgICBwb3N0TWVzc2FnZUFzUGVlcihwZWVyTmFtZSwgd3JhcHBlcikge1xuICAgICAgICAvL1xuICAgIH1cblxufVxuIiwiLyohIGJyb3dzZXItcGVlcnMgdjAuMS4wIHwgQ29weXJpZ2h0IChjKSAyMDIwLTIwMjIgU3RldmUgS2llZmZlciB8IE1JVCBsaWNlbnNlICovXG4vKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUICovXG5cblxuaW1wb3J0IHsgUGVlciB9IGZyb20gXCIuL3BlZXJcIjtcblxuLypcbiAqIFRoaXMgcGVlciBjbGFzcyBzdXBwb3J0cyBzeW1tZXRyaWNhbCBjb21tdW5pY2F0aW9uIGJldHdlZW4gcGFnZVxuICogc2NyaXB0cyAoUFMpIGFuZCBjb250ZW50IHNjcmlwdHMgKENTKSBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLCB2aWEgdXNlXG4gKiBvZiB3aW5kb3cucG9zdE1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBQc0NzUGVlciBleHRlbmRzIFBlZXIge1xuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBBIHVuaXF1ZSBuYW1lIHdpdGggd2hpY2ggdG8gdGVsbCB0aGlzIHBlZXIgYXBhcnRcbiAgICAgKiAgIGZyb20gYWxsIG90aGVycy5cbiAgICAgKiBAcGFyYW0gZXh0X25hbWUge3N0cmluZ30gQSBuYW1lIGZvciB0aGUgYnJvd3NlciBleHRlbnNpb24uXG4gICAgICogQHBhcmFtIG9wdGlvbnMge1xuICAgICAqICAgYWN0aXZhdGVPbkNvbnN0cnVjdGlvbjogYm9vbCAoZGVmYXVsdCB0cnVlKVxuICAgICAqICAgICBJZiB0cnVlLCBhY3RpdmF0ZSBtZXNzYWdpbmcgYXQgZW5kIG9mIGNvbnN0cnVjdG9yIG1ldGhvZC5cbiAgICAgKiB9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobmFtZSwgZXh0X25hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGFjdGl2YXRlT25Db25zdHJ1Y3Rpb24gPSB0cnVlXG4gICAgICAgIH0gPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmV4dF9uYW1lID0gZXh0X25hbWU7XG4gICAgICAgIHRoaXMuYm91bmRNZXNzYWdlSGFuZGxlciA9IHRoaXMuaGFuZGxlTWVzc2FnZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChhY3RpdmF0ZU9uQ29uc3RydWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlTWVzc2FnaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZU1lc3NhZ2luZygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMuYm91bmRNZXNzYWdlSGFuZGxlcik7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFBzQ3NQZWVyIFwiJHt0aGlzLm5hbWV9XCIgYWN0aXZhdGVkIG1lc3NhZ2luZy5gKTtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlTWVzc2FnaW5nKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5ib3VuZE1lc3NhZ2VIYW5kbGVyKTtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhgUHNDc1BlZXIgXCIke3RoaXMubmFtZX1cIiBkZS1hY3RpdmF0ZWQgbWVzc2FnaW5nLmApO1xuICAgIH1cblxuICAgIGhhbmRsZU1lc3NhZ2VFdmVudChldmVudCkge1xuICAgICAgICAvLyBXZSBsaXN0ZW4gdG8gbWVzc2FnZSBldmVudHMgb25seSBpZiB0aGV5IG9yaWdpbmF0ZWQgZnJvbSBvdXIgb3duIHdpbmRvdyBhbmQgb3JpZ2luLFxuICAgICAgICAvLyBhbmQgY29udGFpbiBhIGRhdGEgYXR0cmlidXRlLlxuICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiYgZXZlbnQub3JpZ2luID09PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICYmIGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgLy8gT25seSBsaXN0ZW4gdG8gbWVzc2FnZXMgZm9yIHRoZSByaWdodCBleHRlbnNpb24gYW5kIGZvciB0aGlzIHBlZXIuXG4gICAgICAgICAgICBpZiAod3JhcHBlci5leHROYW1lID09PSB0aGlzLmV4dF9uYW1lICYmIHdyYXBwZXIudG8gPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIHN1cGVyLmhhbmRsZU1lc3NhZ2Uod3JhcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPdmVycmlkZSBhYnN0cmFjdCBiYXNlIGNsYXNzIG1ldGhvZHNcblxuICAgIHBvc3RNZXNzYWdlQXNQZWVyKHBlZXJOYW1lLCB3cmFwcGVyKSB7XG4gICAgICAgIHdyYXBwZXIuZXh0TmFtZSA9IHRoaXMuZXh0X25hbWU7XG4gICAgICAgIHdyYXBwZXIudG8gPSBwZWVyTmFtZTtcbiAgICAgICAgLy8gUG9zdCB0aGUgbWVzc2FnZSBvbmx5IHRvIHdpbmRvd3Mgd2hvc2Ugb3JpZ2luIGlzIHRoZSBzYW1lIGFzIG91cnMuXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh3cmFwcGVyLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcbiAgICB9XG5cbn1cbiIsIi8qISBicm93c2VyLXBlZXJzIHYwLjEuMCB8IENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFN0ZXZlIEtpZWZmZXIgfCBNSVQgbGljZW5zZSAqL1xuLyogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVCAqL1xuXG4vKiBTaW1wbGUgWE1MSHR0cFJlcXVlc3QgdXRpbGl0eVxuICpcbiAqIHBhcmFtIHVybDogdGhlIHVybCB0byBiZSBhY2Nlc3NlZFxuICogb3B0aW9uYWwgcGFyYW1zIG9iamVjdDpcbiAqICAgICAgbWV0aG9kOiBcIkdFVFwiLCBcIlBPU1RcIiBldGMuIERlZmF1bHRzIHRvIFwiR0VUXCJcbiAqICAgICAgcXVlcnk6IHBhc3MgYW4gb2JqZWN0IGRlZmluaW5nIGtleS12YWx1ZSBwYWlycyB0aGF0IHlvdSB3YW50IGFkZGVkXG4gKiAgICAgICAgICBhcyBhIHF1ZXJ5IHN0cmluZyBvbiB0aGUgZW5kIG9mIHRoZSBVUkxcbiAqICAgICAgZm9ybTogcGFzcyBhbiBvYmplY3QgZGVmaW5pbmcga2V5LXZhbHVlIHBhaXJzIHRoYXQgeW91IHdhbnQgdG8gYmVcbiAqICAgICAgICAgIHNlbnQgaW4gZm9ybS1lbmNvZGVkIGZvcm1hdCBpbiB0aGUgYm9keSBvZiB0aGUgcmVxdWVzdFxuICogICAgICBoYW5kbGVBczogJ3RleHQnLCAnanNvbicsIG9yICdibG9iJy4gRGVmYXVsdHMgdG8gJ3RleHQnXG4gKlxuICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgcmVxdWVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24geGhyKHVybCwgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5xdWVyeSkge1xuICAgICAgICB1cmwgKz0gXCI/XCIrKG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zLnF1ZXJ5KSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB9O1xuICAgIGlmIChwYXJhbXMuZm9ybSkge1xuICAgICAgICBpbml0LmJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcy5mb3JtKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQXMgPSBwYXJhbXMuaGFuZGxlQXMgfHwgJ3RleHQnO1xuICAgIHJldHVybiBmZXRjaCh1cmwsIGluaXQpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcC5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhbmRsZUFzID09PSAnanNvbicpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVBcyA9PT0gJ2Jsb2InKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5ibG9iKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC50ZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyogQWRkIGV4dHJhIGtleS12YWx1ZSBhcmd1bWVudHMgdG8gYW4gWEhSLlxuICpcbiAqIEBwYXJhbSBnaXZlblBhcmFtczogYSBgcGFyYW1zYCBhcmcgd2hpY2ggd291bGQgaGF2ZSBiZWVuIHBhc3NlZCB0byB0aGVcbiAqICAgYHhocmAgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGlzIG1vZHVsZS5cbiAqIEBwYXJhbSBleHRyYVBhaXJzOiBhbiBvYmplY3QgZGVmaW5pbmcgZXh0cmEga2V5LXZhbHVlIGFyZ3MgdGhhdCB5b3Ugd2FudCB0b1xuICogICBhZGQgdG8gdGhlIHJlcXVlc3QuXG4gKiBAcmV0dXJuOiBhIF9uZXdfIHBhcmFtcyBvYmplY3QuIFRoZSBnaXZlbiBvbmUgaXMgbm90IG1vZGlmaWVkLlxuICogICBUaGUgZXh0cmEgcGFpcnMgYXJlIHBsYWNlZCBpbiBgcGFyYW1zLnF1ZXJ5YCBpZiBgcXVlcnlgIHdhcyBkZWZpbmVkIGluIHRoZVxuICogICBnaXZlblBhcmFtcywgZWxzZSBpbiBgcGFyYW1zLmZvcm1gIGlmIHRoYXQgd2FzIGRlZmluZWQuIElmIG5laXRoZXIgd2FzIGRlZmluZWQsXG4gKiAgIHRoZW4gd2UgZGVmaW5lIGBwYXJhbXMucXVlcnlgIGFuZCBwdXQgdGhlIGV4dHJhIHBhaXJzIGluIHRoZXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5yaWNoWGhyUGFyYW1zKGdpdmVuUGFyYW1zLCBleHRyYVBhaXJzKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGdpdmVuUGFyYW1zIHx8IHt9KTtcbiAgICBpZiAocGFyYW1zLnF1ZXJ5KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLnF1ZXJ5LCBleHRyYVBhaXJzKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mb3JtKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFyYW1zLmZvcm0sIGV4dHJhUGFpcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5xdWVyeSA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhcmFtcy5xdWVyeSwgZXh0cmFQYWlycyk7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG59XG5cbmV4cG9ydCBjbGFzcyBMaXN0ZW5hYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxpc3RlbmVycykge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICB9XG5cbiAgICBvbihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNicyA9IHRoaXMubGlzdGVuZXJzW2V2ZW50VHlwZV0gfHwgW107XG4gICAgICAgIGNicy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSA9IGNicztcbiAgICB9XG5cbiAgICBvZmYoZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudFR5cGVdIHx8IFtdO1xuICAgICAgICBjb25zdCBpMCA9IGNicy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKGkwID49IDApIHtcbiAgICAgICAgICAgIGNicy5zcGxpY2UoaTAsIDEpO1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRUeXBlXSA9IGNicztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoKGV2ZW50KSB7XG4gICAgICAgIC8qIFN1YnRsZSBwb2ludDogSW4gZ2VuZXJhbCwgd2UgYXJlIGFsd2F5cyBjYXJlZnVsIG5vdCB0byBtb2RpZnkgYW5cbiAgICAgICAgICogaXRlcmFibGUgd2hpbGUgd2UgYXJlIGluIHRoZSBwcm9jZXNzIG9mIGl0ZXJhdGluZyBvdmVyIGl0LiBIZXJlLCB3ZSBkb24ndFxuICAgICAgICAgKiBrbm93IHdoZXRoZXIgYSBjYWxsYmFjayBtaWdodCBgb2ZmYCBpdHNlbGYgYXMgYSBwYXJ0IG9mIGl0cyBwcm9jZXNzLFxuICAgICAgICAgKiB0aGVyZWJ5IG1vZGlmeWluZyBvdXIgYXJyYXkgb2YgbGlzdGVuZXJzIHdoaWxlIHdlIGFyZSBpdGVyYXRpbmcgb3ZlciBpdCFcbiAgICAgICAgICogVGhlcmVmb3JlLCB0byBiZSBzYWZlLCB3ZSBoYXZlIHRvIGl0ZXJhdGUgb3ZlciBhIF9jb3B5XyBvZiBvdXIgYXJyYXkgb2ZcbiAgICAgICAgICogcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuICovXG4gICAgICAgIGNvbnN0IGNicyA9ICh0aGlzLmxpc3RlbmVyc1tldmVudC50eXBlXSB8fCBbXSkuc2xpY2UoKTtcbiAgICAgICAgZm9yIChsZXQgY2Igb2YgY2JzKSB7XG4gICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIndXNlIHN0cmljdCdcblxuLy8gQSBsaW5rZWQgbGlzdCB0byBrZWVwIHRyYWNrIG9mIHJlY2VudGx5LXVzZWQtbmVzc1xuY29uc3QgWWFsbGlzdCA9IHJlcXVpcmUoJ3lhbGxpc3QnKVxuXG5jb25zdCBNQVggPSBTeW1ib2woJ21heCcpXG5jb25zdCBMRU5HVEggPSBTeW1ib2woJ2xlbmd0aCcpXG5jb25zdCBMRU5HVEhfQ0FMQ1VMQVRPUiA9IFN5bWJvbCgnbGVuZ3RoQ2FsY3VsYXRvcicpXG5jb25zdCBBTExPV19TVEFMRSA9IFN5bWJvbCgnYWxsb3dTdGFsZScpXG5jb25zdCBNQVhfQUdFID0gU3ltYm9sKCdtYXhBZ2UnKVxuY29uc3QgRElTUE9TRSA9IFN5bWJvbCgnZGlzcG9zZScpXG5jb25zdCBOT19ESVNQT1NFX09OX1NFVCA9IFN5bWJvbCgnbm9EaXNwb3NlT25TZXQnKVxuY29uc3QgTFJVX0xJU1QgPSBTeW1ib2woJ2xydUxpc3QnKVxuY29uc3QgQ0FDSEUgPSBTeW1ib2woJ2NhY2hlJylcbmNvbnN0IFVQREFURV9BR0VfT05fR0VUID0gU3ltYm9sKCd1cGRhdGVBZ2VPbkdldCcpXG5cbmNvbnN0IG5haXZlTGVuZ3RoID0gKCkgPT4gMVxuXG4vLyBscnVMaXN0IGlzIGEgeWFsbGlzdCB3aGVyZSB0aGUgaGVhZCBpcyB0aGUgeW91bmdlc3Rcbi8vIGl0ZW0sIGFuZCB0aGUgdGFpbCBpcyB0aGUgb2xkZXN0LiAgdGhlIGxpc3QgY29udGFpbnMgdGhlIEhpdFxuLy8gb2JqZWN0cyBhcyB0aGUgZW50cmllcy5cbi8vIEVhY2ggSGl0IG9iamVjdCBoYXMgYSByZWZlcmVuY2UgdG8gaXRzIFlhbGxpc3QuTm9kZS4gIFRoaXNcbi8vIG5ldmVyIGNoYW5nZXMuXG4vL1xuLy8gY2FjaGUgaXMgYSBNYXAgKG9yIFBzZXVkb01hcCkgdGhhdCBtYXRjaGVzIHRoZSBrZXlzIHRvXG4vLyB0aGUgWWFsbGlzdC5Ob2RlIG9iamVjdC5cbmNsYXNzIExSVUNhY2hlIHtcbiAgY29uc3RydWN0b3IgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKVxuICAgICAgb3B0aW9ucyA9IHsgbWF4OiBvcHRpb25zIH1cblxuICAgIGlmICghb3B0aW9ucylcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgaWYgKG9wdGlvbnMubWF4ICYmICh0eXBlb2Ygb3B0aW9ucy5tYXggIT09ICdudW1iZXInIHx8IG9wdGlvbnMubWF4IDwgMCkpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuICAgIC8vIEtpbmQgb2Ygd2VpcmQgdG8gaGF2ZSBhIGRlZmF1bHQgbWF4IG9mIEluZmluaXR5LCBidXQgb2ggd2VsbC5cbiAgICBjb25zdCBtYXggPSB0aGlzW01BWF0gPSBvcHRpb25zLm1heCB8fCBJbmZpbml0eVxuXG4gICAgY29uc3QgbGMgPSBvcHRpb25zLmxlbmd0aCB8fCBuYWl2ZUxlbmd0aFxuICAgIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdID0gKHR5cGVvZiBsYyAhPT0gJ2Z1bmN0aW9uJykgPyBuYWl2ZUxlbmd0aCA6IGxjXG4gICAgdGhpc1tBTExPV19TVEFMRV0gPSBvcHRpb25zLnN0YWxlIHx8IGZhbHNlXG4gICAgaWYgKG9wdGlvbnMubWF4QWdlICYmIHR5cGVvZiBvcHRpb25zLm1heEFnZSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG51bWJlcicpXG4gICAgdGhpc1tNQVhfQUdFXSA9IG9wdGlvbnMubWF4QWdlIHx8IDBcbiAgICB0aGlzW0RJU1BPU0VdID0gb3B0aW9ucy5kaXNwb3NlXG4gICAgdGhpc1tOT19ESVNQT1NFX09OX1NFVF0gPSBvcHRpb25zLm5vRGlzcG9zZU9uU2V0IHx8IGZhbHNlXG4gICAgdGhpc1tVUERBVEVfQUdFX09OX0dFVF0gPSBvcHRpb25zLnVwZGF0ZUFnZU9uR2V0IHx8IGZhbHNlXG4gICAgdGhpcy5yZXNldCgpXG4gIH1cblxuICAvLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIG1heCBjaGFuZ2VzLlxuICBzZXQgbWF4IChtTCkge1xuICAgIGlmICh0eXBlb2YgbUwgIT09ICdudW1iZXInIHx8IG1MIDwgMClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG5cbiAgICB0aGlzW01BWF0gPSBtTCB8fCBJbmZpbml0eVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbWF4ICgpIHtcbiAgICByZXR1cm4gdGhpc1tNQVhdXG4gIH1cblxuICBzZXQgYWxsb3dTdGFsZSAoYWxsb3dTdGFsZSkge1xuICAgIHRoaXNbQUxMT1dfU1RBTEVdID0gISFhbGxvd1N0YWxlXG4gIH1cbiAgZ2V0IGFsbG93U3RhbGUgKCkge1xuICAgIHJldHVybiB0aGlzW0FMTE9XX1NUQUxFXVxuICB9XG5cbiAgc2V0IG1heEFnZSAobUEpIHtcbiAgICBpZiAodHlwZW9mIG1BICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlcicpXG5cbiAgICB0aGlzW01BWF9BR0VdID0gbUFcbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IG1heEFnZSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTUFYX0FHRV1cbiAgfVxuXG4gIC8vIHJlc2l6ZSB0aGUgY2FjaGUgd2hlbiB0aGUgbGVuZ3RoQ2FsY3VsYXRvciBjaGFuZ2VzLlxuICBzZXQgbGVuZ3RoQ2FsY3VsYXRvciAobEMpIHtcbiAgICBpZiAodHlwZW9mIGxDICE9PSAnZnVuY3Rpb24nKVxuICAgICAgbEMgPSBuYWl2ZUxlbmd0aFxuXG4gICAgaWYgKGxDICE9PSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSkge1xuICAgICAgdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0gPSBsQ1xuICAgICAgdGhpc1tMRU5HVEhdID0gMFxuICAgICAgdGhpc1tMUlVfTElTVF0uZm9yRWFjaChoaXQgPT4ge1xuICAgICAgICBoaXQubGVuZ3RoID0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0oaGl0LnZhbHVlLCBoaXQua2V5KVxuICAgICAgICB0aGlzW0xFTkdUSF0gKz0gaGl0Lmxlbmd0aFxuICAgICAgfSlcbiAgICB9XG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBsZW5ndGhDYWxjdWxhdG9yICgpIHsgcmV0dXJuIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdIH1cblxuICBnZXQgbGVuZ3RoICgpIHsgcmV0dXJuIHRoaXNbTEVOR1RIXSB9XG4gIGdldCBpdGVtQ291bnQgKCkgeyByZXR1cm4gdGhpc1tMUlVfTElTVF0ubGVuZ3RoIH1cblxuICByZm9yRWFjaCAoZm4sIHRoaXNwKSB7XG4gICAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpc1tMUlVfTElTVF0udGFpbDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgY29uc3QgcHJldiA9IHdhbGtlci5wcmV2XG4gICAgICBmb3JFYWNoU3RlcCh0aGlzLCBmbiwgd2Fsa2VyLCB0aGlzcClcbiAgICAgIHdhbGtlciA9IHByZXZcbiAgICB9XG4gIH1cblxuICBmb3JFYWNoIChmbiwgdGhpc3ApIHtcbiAgICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzW0xSVV9MSVNUXS5oZWFkOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgICBjb25zdCBuZXh0ID0gd2Fsa2VyLm5leHRcbiAgICAgIGZvckVhY2hTdGVwKHRoaXMsIGZuLCB3YWxrZXIsIHRoaXNwKVxuICAgICAgd2Fsa2VyID0gbmV4dFxuICAgIH1cbiAgfVxuXG4gIGtleXMgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS50b0FycmF5KCkubWFwKGsgPT4gay5rZXkpXG4gIH1cblxuICB2YWx1ZXMgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS50b0FycmF5KCkubWFwKGsgPT4gay52YWx1ZSlcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICBpZiAodGhpc1tESVNQT1NFXSAmJlxuICAgICAgICB0aGlzW0xSVV9MSVNUXSAmJlxuICAgICAgICB0aGlzW0xSVV9MSVNUXS5sZW5ndGgpIHtcbiAgICAgIHRoaXNbTFJVX0xJU1RdLmZvckVhY2goaGl0ID0+IHRoaXNbRElTUE9TRV0oaGl0LmtleSwgaGl0LnZhbHVlKSlcbiAgICB9XG5cbiAgICB0aGlzW0NBQ0hFXSA9IG5ldyBNYXAoKSAvLyBoYXNoIG9mIGl0ZW1zIGJ5IGtleVxuICAgIHRoaXNbTFJVX0xJU1RdID0gbmV3IFlhbGxpc3QoKSAvLyBsaXN0IG9mIGl0ZW1zIGluIG9yZGVyIG9mIHVzZSByZWNlbmN5XG4gICAgdGhpc1tMRU5HVEhdID0gMCAvLyBsZW5ndGggb2YgaXRlbXMgaW4gdGhlIGxpc3RcbiAgfVxuXG4gIGR1bXAgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXS5tYXAoaGl0ID0+XG4gICAgICBpc1N0YWxlKHRoaXMsIGhpdCkgPyBmYWxzZSA6IHtcbiAgICAgICAgazogaGl0LmtleSxcbiAgICAgICAgdjogaGl0LnZhbHVlLFxuICAgICAgICBlOiBoaXQubm93ICsgKGhpdC5tYXhBZ2UgfHwgMClcbiAgICAgIH0pLnRvQXJyYXkoKS5maWx0ZXIoaCA9PiBoKVxuICB9XG5cbiAgZHVtcExydSAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTFJVX0xJU1RdXG4gIH1cblxuICBzZXQgKGtleSwgdmFsdWUsIG1heEFnZSkge1xuICAgIG1heEFnZSA9IG1heEFnZSB8fCB0aGlzW01BWF9BR0VdXG5cbiAgICBpZiAobWF4QWdlICYmIHR5cGVvZiBtYXhBZ2UgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBudW1iZXInKVxuXG4gICAgY29uc3Qgbm93ID0gbWF4QWdlID8gRGF0ZS5ub3coKSA6IDBcbiAgICBjb25zdCBsZW4gPSB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSh2YWx1ZSwga2V5KVxuXG4gICAgaWYgKHRoaXNbQ0FDSEVdLmhhcyhrZXkpKSB7XG4gICAgICBpZiAobGVuID4gdGhpc1tNQVhdKSB7XG4gICAgICAgIGRlbCh0aGlzLCB0aGlzW0NBQ0hFXS5nZXQoa2V5KSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzW0NBQ0hFXS5nZXQoa2V5KVxuICAgICAgY29uc3QgaXRlbSA9IG5vZGUudmFsdWVcblxuICAgICAgLy8gZGlzcG9zZSBvZiB0aGUgb2xkIG9uZSBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgICAgIC8vIHNwbGl0IG91dCBpbnRvIDIgaWZzIGZvciBiZXR0ZXIgY292ZXJhZ2UgdHJhY2tpbmdcbiAgICAgIGlmICh0aGlzW0RJU1BPU0VdKSB7XG4gICAgICAgIGlmICghdGhpc1tOT19ESVNQT1NFX09OX1NFVF0pXG4gICAgICAgICAgdGhpc1tESVNQT1NFXShrZXksIGl0ZW0udmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGl0ZW0ubm93ID0gbm93XG4gICAgICBpdGVtLm1heEFnZSA9IG1heEFnZVxuICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzW0xFTkdUSF0gKz0gbGVuIC0gaXRlbS5sZW5ndGhcbiAgICAgIGl0ZW0ubGVuZ3RoID0gbGVuXG4gICAgICB0aGlzLmdldChrZXkpXG4gICAgICB0cmltKHRoaXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IG5ldyBFbnRyeShrZXksIHZhbHVlLCBsZW4sIG5vdywgbWF4QWdlKVxuXG4gICAgLy8gb3ZlcnNpemVkIG9iamVjdHMgZmFsbCBvdXQgb2YgY2FjaGUgYXV0b21hdGljYWxseS5cbiAgICBpZiAoaGl0Lmxlbmd0aCA+IHRoaXNbTUFYXSkge1xuICAgICAgaWYgKHRoaXNbRElTUE9TRV0pXG4gICAgICAgIHRoaXNbRElTUE9TRV0oa2V5LCB2YWx1ZSlcblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgdGhpc1tMRU5HVEhdICs9IGhpdC5sZW5ndGhcbiAgICB0aGlzW0xSVV9MSVNUXS51bnNoaWZ0KGhpdClcbiAgICB0aGlzW0NBQ0hFXS5zZXQoa2V5LCB0aGlzW0xSVV9MSVNUXS5oZWFkKVxuICAgIHRyaW0odGhpcylcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaGFzIChrZXkpIHtcbiAgICBpZiAoIXRoaXNbQ0FDSEVdLmhhcyhrZXkpKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBoaXQgPSB0aGlzW0NBQ0hFXS5nZXQoa2V5KS52YWx1ZVxuICAgIHJldHVybiAhaXNTdGFsZSh0aGlzLCBoaXQpXG4gIH1cblxuICBnZXQgKGtleSkge1xuICAgIHJldHVybiBnZXQodGhpcywga2V5LCB0cnVlKVxuICB9XG5cbiAgcGVlayAoa2V5KSB7XG4gICAgcmV0dXJuIGdldCh0aGlzLCBrZXksIGZhbHNlKVxuICB9XG5cbiAgcG9wICgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpc1tMUlVfTElTVF0udGFpbFxuICAgIGlmICghbm9kZSlcbiAgICAgIHJldHVybiBudWxsXG5cbiAgICBkZWwodGhpcywgbm9kZSlcbiAgICByZXR1cm4gbm9kZS52YWx1ZVxuICB9XG5cbiAgZGVsIChrZXkpIHtcbiAgICBkZWwodGhpcywgdGhpc1tDQUNIRV0uZ2V0KGtleSkpXG4gIH1cblxuICBsb2FkIChhcnIpIHtcbiAgICAvLyByZXNldCB0aGUgY2FjaGVcbiAgICB0aGlzLnJlc2V0KClcblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICAvLyBBIHByZXZpb3VzIHNlcmlhbGl6ZWQgY2FjaGUgaGFzIHRoZSBtb3N0IHJlY2VudCBpdGVtcyBmaXJzdFxuICAgIGZvciAobGV0IGwgPSBhcnIubGVuZ3RoIC0gMTsgbCA+PSAwOyBsLS0pIHtcbiAgICAgIGNvbnN0IGhpdCA9IGFycltsXVxuICAgICAgY29uc3QgZXhwaXJlc0F0ID0gaGl0LmUgfHwgMFxuICAgICAgaWYgKGV4cGlyZXNBdCA9PT0gMClcbiAgICAgICAgLy8gdGhlIGl0ZW0gd2FzIGNyZWF0ZWQgd2l0aG91dCBleHBpcmF0aW9uIGluIGEgbm9uIGFnZWQgY2FjaGVcbiAgICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52KVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG1heEFnZSA9IGV4cGlyZXNBdCAtIG5vd1xuICAgICAgICAvLyBkb250IGFkZCBhbHJlYWR5IGV4cGlyZWQgaXRlbXNcbiAgICAgICAgaWYgKG1heEFnZSA+IDApIHtcbiAgICAgICAgICB0aGlzLnNldChoaXQuaywgaGl0LnYsIG1heEFnZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBydW5lICgpIHtcbiAgICB0aGlzW0NBQ0hFXS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiBnZXQodGhpcywga2V5LCBmYWxzZSkpXG4gIH1cbn1cblxuY29uc3QgZ2V0ID0gKHNlbGYsIGtleSwgZG9Vc2UpID0+IHtcbiAgY29uc3Qgbm9kZSA9IHNlbGZbQ0FDSEVdLmdldChrZXkpXG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaGl0ID0gbm9kZS52YWx1ZVxuICAgIGlmIChpc1N0YWxlKHNlbGYsIGhpdCkpIHtcbiAgICAgIGRlbChzZWxmLCBub2RlKVxuICAgICAgaWYgKCFzZWxmW0FMTE9XX1NUQUxFXSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9Vc2UpIHtcbiAgICAgICAgaWYgKHNlbGZbVVBEQVRFX0FHRV9PTl9HRVRdKVxuICAgICAgICAgIG5vZGUudmFsdWUubm93ID0gRGF0ZS5ub3coKVxuICAgICAgICBzZWxmW0xSVV9MSVNUXS51bnNoaWZ0Tm9kZShub2RlKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGl0LnZhbHVlXG4gIH1cbn1cblxuY29uc3QgaXNTdGFsZSA9IChzZWxmLCBoaXQpID0+IHtcbiAgaWYgKCFoaXQgfHwgKCFoaXQubWF4QWdlICYmICFzZWxmW01BWF9BR0VdKSlcbiAgICByZXR1cm4gZmFsc2VcblxuICBjb25zdCBkaWZmID0gRGF0ZS5ub3coKSAtIGhpdC5ub3dcbiAgcmV0dXJuIGhpdC5tYXhBZ2UgPyBkaWZmID4gaGl0Lm1heEFnZVxuICAgIDogc2VsZltNQVhfQUdFXSAmJiAoZGlmZiA+IHNlbGZbTUFYX0FHRV0pXG59XG5cbmNvbnN0IHRyaW0gPSBzZWxmID0+IHtcbiAgaWYgKHNlbGZbTEVOR1RIXSA+IHNlbGZbTUFYXSkge1xuICAgIGZvciAobGV0IHdhbGtlciA9IHNlbGZbTFJVX0xJU1RdLnRhaWw7XG4gICAgICBzZWxmW0xFTkdUSF0gPiBzZWxmW01BWF0gJiYgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgLy8gV2Uga25vdyB0aGF0IHdlJ3JlIGFib3V0IHRvIGRlbGV0ZSB0aGlzIG9uZSwgYW5kIGFsc29cbiAgICAgIC8vIHdoYXQgdGhlIG5leHQgbGVhc3QgcmVjZW50bHkgdXNlZCBrZXkgd2lsbCBiZSwgc28ganVzdFxuICAgICAgLy8gZ28gYWhlYWQgYW5kIHNldCBpdCBub3cuXG4gICAgICBjb25zdCBwcmV2ID0gd2Fsa2VyLnByZXZcbiAgICAgIGRlbChzZWxmLCB3YWxrZXIpXG4gICAgICB3YWxrZXIgPSBwcmV2XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlbCA9IChzZWxmLCBub2RlKSA9PiB7XG4gIGlmIChub2RlKSB7XG4gICAgY29uc3QgaGl0ID0gbm9kZS52YWx1ZVxuICAgIGlmIChzZWxmW0RJU1BPU0VdKVxuICAgICAgc2VsZltESVNQT1NFXShoaXQua2V5LCBoaXQudmFsdWUpXG5cbiAgICBzZWxmW0xFTkdUSF0gLT0gaGl0Lmxlbmd0aFxuICAgIHNlbGZbQ0FDSEVdLmRlbGV0ZShoaXQua2V5KVxuICAgIHNlbGZbTFJVX0xJU1RdLnJlbW92ZU5vZGUobm9kZSlcbiAgfVxufVxuXG5jbGFzcyBFbnRyeSB7XG4gIGNvbnN0cnVjdG9yIChrZXksIHZhbHVlLCBsZW5ndGgsIG5vdywgbWF4QWdlKSB7XG4gICAgdGhpcy5rZXkgPSBrZXlcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aFxuICAgIHRoaXMubm93ID0gbm93XG4gICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2UgfHwgMFxuICB9XG59XG5cbmNvbnN0IGZvckVhY2hTdGVwID0gKHNlbGYsIGZuLCBub2RlLCB0aGlzcCkgPT4ge1xuICBsZXQgaGl0ID0gbm9kZS52YWx1ZVxuICBpZiAoaXNTdGFsZShzZWxmLCBoaXQpKSB7XG4gICAgZGVsKHNlbGYsIG5vZGUpXG4gICAgaWYgKCFzZWxmW0FMTE9XX1NUQUxFXSlcbiAgICAgIGhpdCA9IHVuZGVmaW5lZFxuICB9XG4gIGlmIChoaXQpXG4gICAgZm4uY2FsbCh0aGlzcCwgaGl0LnZhbHVlLCBoaXQua2V5LCBzZWxmKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExSVUNhY2hlXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEwLjAgLSBGcmkgQXVnIDEyIDIwMjIgMTk6NDI6NDQgKi9cblxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG5cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cblxuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCFnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZT8uaWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMuYnJvd3NlciA9PT0gXCJ1bmRlZmluZWRcIiB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsVGhpcy5icm93c2VyKSAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiOyAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cblxuICAgIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgICAvLyBhdCBidWlsZCB0aW1lIGJ5IHJlcGxhY2luZyB0aGUgZm9sbG93aW5nIFwiaW5jbHVkZVwiIHdpdGggdGhlIGNvbnRlbnQgb2YgdGhlXG4gICAgICAvLyBKU09OIGZpbGUuXG4gICAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgICAgXCJhbGFybXNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJvb2ttYXJrc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDaGlsZHJlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NpbmdEYXRhXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ29va2llc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlSGlzdG9yeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVBsdWdpbkRhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbW1hbmRzXCI6IHtcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvbnRleHRNZW51c1wiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRldnRvb2xzXCI6IHtcbiAgICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgICAgXCJjcmVhdGVTaWRlYmFyUGFuZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZG93bmxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRmlsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHRlbnNpb25cIjoge1xuICAgICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRWaXNpdHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpMThuXCI6IHtcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidW5pbnN0YWxsU2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQZXJtaXNzaW9uTGV2ZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYWdlQWN0aW9uXCI6IHtcbiAgICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBsYXRmb3JtSW5mb1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50bHlDbG9zZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic3luY1wiOiB7XG4gICAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRhYnNcIjoge1xuICAgICAgICAgIFwiY2FwdHVyZVZpc2libGVUYWJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRpc2NhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJoaWdobGlnaHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicXVlcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDU1NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tU2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0b3BTaXRlc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJOYXZpZ2F0aW9uXCI6IHtcbiAgICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0TGFzdEZvY3VzZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXG4gICAgICAgKiBvdGhlcndpc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxuICAgICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXG4gICAgICAgKi9cblxuXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG5cblxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwQXN5bmNGdW5jdGlvbiA9IChuYW1lLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cblxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAgICogYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB0aGUgb3JpZ2luYWwgYHRhcmdldGAgb2JqZWN0LCBmb2xsb3dlZCBieSBlYWNoIG9mXG4gICAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICAgKiAgICAgICAgVGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLiBUaGlzIGlzIHVzZWQgYXMgdGhlIHRhcmdldCBvZiB0aGUgUHJveHlcbiAgICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgVGhlIHdyYXBwZXIgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHBsYWNlIG9mIGEgZGlyZWN0IGludm9jYXRpb25cbiAgICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PGZ1bmN0aW9uPn1cbiAgICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICAgKi9cblxuXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHByZXNlbnQgaW4gdGhpcyBvYmplY3QgdHJlZSBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgdGhlXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAgICogICAgICAgIFByb21pc2UtYmFzZWQgd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFzeW5jaHJvbm91cy4gQW55IGZ1bmN0aW9uIGluXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICAgKiAgICAgICAgYXV0b21hdGljYWxseS1nZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbiwgYXMgZGVzY3JpYmVkIGluXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge1Byb3h5PG9iamVjdD59XG4gICAgICAgKi9cblxuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXCJnZXRcIiBwcm94eSBoYW5kbGVyIG11c3QgcmV0dXJuIHRoZVxuICAgICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgICAgLy8gcHJvdG90eXBlIHNldCB0byBgdGFyZ2V0YCBpbnN0ZWFkIG9mIHVzaW5nIGB0YXJnZXRgIGRpcmVjdGx5LlxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgICAgLy8gZGVyZWZlcmVuY2VkIHZpYSB0aGUgb3JpZ2luYWwgdGFyZ2V0cy5cblxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAgICogd3JhcHBpbmcgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRoYXQgdGhvc2UgbWVzc2FnZXMgYXJlIHBhc3NlZC5cbiAgICAgICAqXG4gICAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAgICogbWFwLiBTdWJzZXF1ZW50IGNhbGxzIHRvIGBhZGRMaXN0ZW5lcmAsIGBoYXNMaXN0ZW5lcmAsIG9yIGByZW1vdmVMaXN0ZW5lcmBcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgZm9yIGEgZ2l2ZW4gbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBvbmUgZG9lcyBub3QgZXhpc3QsIGFuZCByZXRyaWV2ZVxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge31cbiAgICAgICAgICAvKiB3cmFwcGVycyAqL1xuICAgICAgICAgICwge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgICAgbGV0IHNlbmRSZXNwb25zZVByb21pc2UgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoZXJlIHdpbGwgYmUgbm8gcmVzcG9uc2Ugc2VudCBmcm9tIHRoaXMgbGlzdGVuZXIuXG5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuXG5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIC8vIFByaW50IGFuIGVycm9yIG9uIHRoZSBjb25zb2xlIGlmIHVuYWJsZSB0byBzZW5kIHRoZSByZXNwb25zZS5cbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTsgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cblxuXG4gICAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgICAgfSAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG5cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9OyAvLyBUaGUgYnVpbGQgcHJvY2VzcyBhZGRzIGEgVU1EIHdyYXBwZXIgYXJvdW5kIHRoaXMgZmlsZSwgd2hpY2ggbWFrZXMgdGhlXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuXG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoWWFsbGlzdCkge1xuICBZYWxsaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICgpIHtcbiAgICBmb3IgKGxldCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlcjsgd2Fsa2VyID0gd2Fsa2VyLm5leHQpIHtcbiAgICAgIHlpZWxkIHdhbGtlci52YWx1ZVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IFlhbGxpc3RcblxuWWFsbGlzdC5Ob2RlID0gTm9kZVxuWWFsbGlzdC5jcmVhdGUgPSBZYWxsaXN0XG5cbmZ1bmN0aW9uIFlhbGxpc3QgKGxpc3QpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmICghKHNlbGYgaW5zdGFuY2VvZiBZYWxsaXN0KSkge1xuICAgIHNlbGYgPSBuZXcgWWFsbGlzdCgpXG4gIH1cblxuICBzZWxmLnRhaWwgPSBudWxsXG4gIHNlbGYuaGVhZCA9IG51bGxcbiAgc2VsZi5sZW5ndGggPSAwXG5cbiAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgc2VsZi5wdXNoKGl0ZW0pXG4gICAgfSlcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgc2VsZi5wdXNoKGFyZ3VtZW50c1tpXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VsZlxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZW1vdmVOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUubGlzdCAhPT0gdGhpcykge1xuICAgIHRocm93IG5ldyBFcnJvcigncmVtb3Zpbmcgbm9kZSB3aGljaCBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyBsaXN0JylcbiAgfVxuXG4gIHZhciBuZXh0ID0gbm9kZS5uZXh0XG4gIHZhciBwcmV2ID0gbm9kZS5wcmV2XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXYgPSBwcmV2XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIHByZXYubmV4dCA9IG5leHRcbiAgfVxuXG4gIGlmIChub2RlID09PSB0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBuZXh0XG4gIH1cbiAgaWYgKG5vZGUgPT09IHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbCA9IHByZXZcbiAgfVxuXG4gIG5vZGUubGlzdC5sZW5ndGgtLVxuICBub2RlLm5leHQgPSBudWxsXG4gIG5vZGUucHJldiA9IG51bGxcbiAgbm9kZS5saXN0ID0gbnVsbFxuXG4gIHJldHVybiBuZXh0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnVuc2hpZnROb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IHRoaXMuaGVhZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKG5vZGUubGlzdCkge1xuICAgIG5vZGUubGlzdC5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cblxuICB2YXIgaGVhZCA9IHRoaXMuaGVhZFxuICBub2RlLmxpc3QgPSB0aGlzXG4gIG5vZGUubmV4dCA9IGhlYWRcbiAgaWYgKGhlYWQpIHtcbiAgICBoZWFkLnByZXYgPSBub2RlXG4gIH1cblxuICB0aGlzLmhlYWQgPSBub2RlXG4gIGlmICghdGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsID0gbm9kZVxuICB9XG4gIHRoaXMubGVuZ3RoKytcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucHVzaE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobm9kZS5saXN0KSB7XG4gICAgbm9kZS5saXN0LnJlbW92ZU5vZGUobm9kZSlcbiAgfVxuXG4gIHZhciB0YWlsID0gdGhpcy50YWlsXG4gIG5vZGUubGlzdCA9IHRoaXNcbiAgbm9kZS5wcmV2ID0gdGFpbFxuICBpZiAodGFpbCkge1xuICAgIHRhaWwubmV4dCA9IG5vZGVcbiAgfVxuXG4gIHRoaXMudGFpbCA9IG5vZGVcbiAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICB0aGlzLmhlYWQgPSBub2RlXG4gIH1cbiAgdGhpcy5sZW5ndGgrK1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBwdXNoKHRoaXMsIGFyZ3VtZW50c1tpXSlcbiAgfVxuICByZXR1cm4gdGhpcy5sZW5ndGhcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdW5zaGlmdCh0aGlzLCBhcmd1bWVudHNbaV0pXG4gIH1cbiAgcmV0dXJuIHRoaXMubGVuZ3RoXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB2YXIgcmVzID0gdGhpcy50YWlsLnZhbHVlXG4gIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2XG4gIGlmICh0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwubmV4dCA9IG51bGxcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhlYWQgPSBudWxsXG4gIH1cbiAgdGhpcy5sZW5ndGgtLVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciByZXMgPSB0aGlzLmhlYWQudmFsdWVcbiAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHRcbiAgaWYgKHRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZC5wcmV2ID0gbnVsbFxuICB9IGVsc2Uge1xuICAgIHRoaXMudGFpbCA9IG51bGxcbiAgfVxuICB0aGlzLmxlbmd0aC0tXG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMuaGVhZCwgaSA9IDA7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCBpLCB0aGlzKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZm9yRWFjaFJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLnRhaWwsIGkgPSB0aGlzLmxlbmd0aCAtIDE7IHdhbGtlciAhPT0gbnVsbDsgaS0tKSB7XG4gICAgZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCBpLCB0aGlzKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG4pIHtcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBuOyBpKyspIHtcbiAgICAvLyBhYm9ydCBvdXQgb2YgdGhlIGxpc3QgZWFybHkgaWYgd2UgaGl0IGEgY3ljbGVcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIGlmIChpID09PSBuICYmIHdhbGtlciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB3YWxrZXIudmFsdWVcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5nZXRSZXZlcnNlID0gZnVuY3Rpb24gKG4pIHtcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBuOyBpKyspIHtcbiAgICAvLyBhYm9ydCBvdXQgb2YgdGhlIGxpc3QgZWFybHkgaWYgd2UgaGl0IGEgY3ljbGVcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIGlmIChpID09PSBuICYmIHdhbGtlciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB3YWxrZXIudmFsdWVcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICB2YXIgcmVzID0gbmV3IFlhbGxpc3QoKVxuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICByZXMucHVzaChmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIHRoaXMpKVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5tYXBSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgdmFyIHJlcyA9IG5ldyBZYWxsaXN0KClcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGw7KSB7XG4gICAgcmVzLnB1c2goZm4uY2FsbCh0aGlzcCwgd2Fsa2VyLnZhbHVlLCB0aGlzKSlcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsKSB7XG4gIHZhciBhY2NcbiAgdmFyIHdhbGtlciA9IHRoaXMuaGVhZFxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBhY2MgPSBpbml0aWFsXG4gIH0gZWxzZSBpZiAodGhpcy5oZWFkKSB7XG4gICAgd2Fsa2VyID0gdGhpcy5oZWFkLm5leHRcbiAgICBhY2MgPSB0aGlzLmhlYWQudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbGlzdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYWNjID0gZm4oYWNjLCB3YWxrZXIudmFsdWUsIGkpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmVkdWNlUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgaW5pdGlhbCkge1xuICB2YXIgYWNjXG4gIHZhciB3YWxrZXIgPSB0aGlzLnRhaWxcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgYWNjID0gaW5pdGlhbFxuICB9IGVsc2UgaWYgKHRoaXMudGFpbCkge1xuICAgIHdhbGtlciA9IHRoaXMudGFpbC5wcmV2XG4gICAgYWNjID0gdGhpcy50YWlsLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGxpc3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJylcbiAgfVxuXG4gIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCAtIDE7IHdhbGtlciAhPT0gbnVsbDsgaS0tKSB7XG4gICAgYWNjID0gZm4oYWNjLCB3YWxrZXIudmFsdWUsIGkpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuXG4gIHJldHVybiBhY2Ncbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhcnJbaV0gPSB3YWxrZXIudmFsdWVcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudG9BcnJheVJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbDsgaSsrKSB7XG4gICAgYXJyW2ldID0gd2Fsa2VyLnZhbHVlXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuICByZXR1cm4gYXJyXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHRvID0gdG8gfHwgdGhpcy5sZW5ndGhcbiAgaWYgKHRvIDwgMCkge1xuICAgIHRvICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZnJvbSA9IGZyb20gfHwgMFxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tICs9IHRoaXMubGVuZ3RoXG4gIH1cbiAgdmFyIHJldCA9IG5ldyBZYWxsaXN0KClcbiAgaWYgKHRvIDwgZnJvbSB8fCB0byA8IDApIHtcbiAgICByZXR1cm4gcmV0XG4gIH1cbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSA9IDBcbiAgfVxuICBpZiAodG8gPiB0aGlzLmxlbmd0aCkge1xuICAgIHRvID0gdGhpcy5sZW5ndGhcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IGZyb207IGkrKykge1xuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgZm9yICg7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgdG87IGkrKywgd2Fsa2VyID0gd2Fsa2VyLm5leHQpIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zbGljZVJldmVyc2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdG8gPSB0byB8fCB0aGlzLmxlbmd0aFxuICBpZiAodG8gPCAwKSB7XG4gICAgdG8gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICBmcm9tID0gZnJvbSB8fCAwXG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICB2YXIgcmV0ID0gbmV3IFlhbGxpc3QoKVxuICBpZiAodG8gPCBmcm9tIHx8IHRvIDwgMCkge1xuICAgIHJldHVybiByZXRcbiAgfVxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tID0gMFxuICB9XG4gIGlmICh0byA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdG8gPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGwgJiYgaSA+IHRvOyBpLS0pIHtcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIGZvciAoOyB3YWxrZXIgIT09IG51bGwgJiYgaSA+IGZyb207IGktLSwgd2Fsa2VyID0gd2Fsa2VyLnByZXYpIHtcbiAgICByZXQucHVzaCh3YWxrZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5zcGxpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5ub2Rlcykge1xuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggLSAxXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggKyBzdGFydDtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgc3RhcnQ7IGkrKykge1xuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cblxuICB2YXIgcmV0ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IHdhbGtlciAmJiBpIDwgZGVsZXRlQ291bnQ7IGkrKykge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgICB3YWxrZXIgPSB0aGlzLnJlbW92ZU5vZGUod2Fsa2VyKVxuICB9XG4gIGlmICh3YWxrZXIgPT09IG51bGwpIHtcbiAgICB3YWxrZXIgPSB0aGlzLnRhaWxcbiAgfVxuXG4gIGlmICh3YWxrZXIgIT09IHRoaXMuaGVhZCAmJiB3YWxrZXIgIT09IHRoaXMudGFpbCkge1xuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2Fsa2VyID0gaW5zZXJ0KHRoaXMsIHdhbGtlciwgbm9kZXNbaV0pXG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQgPSB0aGlzLmhlYWRcbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWxcbiAgZm9yICh2YXIgd2Fsa2VyID0gaGVhZDsgd2Fsa2VyICE9PSBudWxsOyB3YWxrZXIgPSB3YWxrZXIucHJldikge1xuICAgIHZhciBwID0gd2Fsa2VyLnByZXZcbiAgICB3YWxrZXIucHJldiA9IHdhbGtlci5uZXh0XG4gICAgd2Fsa2VyLm5leHQgPSBwXG4gIH1cbiAgdGhpcy5oZWFkID0gdGFpbFxuICB0aGlzLnRhaWwgPSBoZWFkXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIGluc2VydCAoc2VsZiwgbm9kZSwgdmFsdWUpIHtcbiAgdmFyIGluc2VydGVkID0gbm9kZSA9PT0gc2VsZi5oZWFkID9cbiAgICBuZXcgTm9kZSh2YWx1ZSwgbnVsbCwgbm9kZSwgc2VsZikgOlxuICAgIG5ldyBOb2RlKHZhbHVlLCBub2RlLCBub2RlLm5leHQsIHNlbGYpXG5cbiAgaWYgKGluc2VydGVkLm5leHQgPT09IG51bGwpIHtcbiAgICBzZWxmLnRhaWwgPSBpbnNlcnRlZFxuICB9XG4gIGlmIChpbnNlcnRlZC5wcmV2ID09PSBudWxsKSB7XG4gICAgc2VsZi5oZWFkID0gaW5zZXJ0ZWRcbiAgfVxuXG4gIHNlbGYubGVuZ3RoKytcblxuICByZXR1cm4gaW5zZXJ0ZWRcbn1cblxuZnVuY3Rpb24gcHVzaCAoc2VsZiwgaXRlbSkge1xuICBzZWxmLnRhaWwgPSBuZXcgTm9kZShpdGVtLCBzZWxmLnRhaWwsIG51bGwsIHNlbGYpXG4gIGlmICghc2VsZi5oZWFkKSB7XG4gICAgc2VsZi5oZWFkID0gc2VsZi50YWlsXG4gIH1cbiAgc2VsZi5sZW5ndGgrK1xufVxuXG5mdW5jdGlvbiB1bnNoaWZ0IChzZWxmLCBpdGVtKSB7XG4gIHNlbGYuaGVhZCA9IG5ldyBOb2RlKGl0ZW0sIG51bGwsIHNlbGYuaGVhZCwgc2VsZilcbiAgaWYgKCFzZWxmLnRhaWwpIHtcbiAgICBzZWxmLnRhaWwgPSBzZWxmLmhlYWRcbiAgfVxuICBzZWxmLmxlbmd0aCsrXG59XG5cbmZ1bmN0aW9uIE5vZGUgKHZhbHVlLCBwcmV2LCBuZXh0LCBsaXN0KSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOb2RlKSkge1xuICAgIHJldHVybiBuZXcgTm9kZSh2YWx1ZSwgcHJldiwgbmV4dCwgbGlzdClcbiAgfVxuXG4gIHRoaXMubGlzdCA9IGxpc3RcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Lm5leHQgPSB0aGlzXG4gICAgdGhpcy5wcmV2ID0gcHJldlxuICB9IGVsc2Uge1xuICAgIHRoaXMucHJldiA9IG51bGxcbiAgfVxuXG4gIGlmIChuZXh0KSB7XG4gICAgbmV4dC5wcmV2ID0gdGhpc1xuICAgIHRoaXMubmV4dCA9IG5leHRcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm5leHQgPSBudWxsXG4gIH1cbn1cblxudHJ5IHtcbiAgLy8gYWRkIGlmIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvciBpcyBwcmVzZW50XG4gIHJlcXVpcmUoJy4vaXRlcmF0b3IuanMnKShZYWxsaXN0KVxufSBjYXRjaCAoZXIpIHt9XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqICBQcm9vZnNjYXBlIEJyb3dzZXIgRXh0ZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDIwLTIwMjIgUHJvb2ZzY2FwZSBjb250cmlidXRvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7ICAgICAgICAgICpcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICAgICAgICAgKlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSAgICAgICpcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsICAgICAgICAqXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICpcbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kICAgICAgKlxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qXG4gKiBXZSBpbXBsZW1lbnQgYSBkZWRpY2F0ZWQgb24tZGlzayBjYWNoZSBmb3IgUERGcywgdXNpbmcgdGhlIGBzdG9yYWdlYCBBUEkuXG4gKlxuICogV2UgZW1wbG95IGEgbXVsdGktcGFydCBkZXNpZ24sIHdoZXJlIHRoZSBhY3R1YWwgUERGIGJ5dGUgYXJyYXlzIGFyZSBzdG9yZWRcbiAqIHNlcGFyYXRlbHkgZnJvbSB3aGF0IHdlIGNhbGwgdGhlIFwiY2FjaGUgaW5kZXgsXCIgdGhlIGxhdHRlciBpbmNsdWRpbmcgYWxsIHRoZVxuICogaW5mb3JtYXRpb24gX2Fib3V0XyB0aGUgUERGcywgbGlrZSBsYXN0IGFjY2VzcyB0aW1lLCB1c2VyLXN1cHBsaWVkIGNvbW1lbnRzLFxuICogZXRjLlxuICpcbiAqIFRoaXMgYWxsb3dzIHRoZSBpbmRleCB0byBiZSBrZXB0IGluIG1lbW9yeSBzaW5jZSBpdCBpcyBzbWFsbCwgd2hpbGVcbiAqIHRoZSAocG90ZW50aWFsbHkgdmVyeSBsYXJnZSkgUERGIGJ5dGUgYXJyYXlzIHJlc2lkZSBvbiBkaXNrLlxuICpcbiAqIFJhdGlvbmFsZTpcbiAqIE9uZSBvciB0d28gUERGcyBjYWNoZWQgaW4gbWVtb3J5IG1pZ2h0IGJlIGZpbmUsIGJ1dCB0aGF0IGlzIGFscmVhZHkgaW1wbGVtZW50ZWRcbiAqIGJ5IHRoZSBgUGRmTWFuYWdlcmAgY2xhc3MgaW4gdGhlIFByb29mc2NhcGUgSVNFIGFwcC4gVGhpcyBicm93c2VyIGV4dGVuc2lvbiBjYWNoZSxcbiAqIG9uIHRoZSBvdGhlciBoYW5kLCBpcyBleHBlY3RlZCB0byBiZSBvbiB0aGUgb3JkZXIgb2YgMTAwIE1CIGluIHNpemUgKG9yIGV2ZW4gbGFyZ2VyKSxcbiAqIGFuZCBpcyBpbnRlbmRlZCBmb3IgbG9uZy10ZXJtIHN0b3JhZ2UuIFRvIHNpbXBseSBsb2FkIGFsbCBvZiB0aGF0IGludG8gbWVtb3J5IGNvdWxkXG4gKiByZXByZXNlbnQgYSBzaWduaWZpY2FudCBpbXBhY3Qgb24gdGhlIHdlYiBicm93c2VyJ3MgbWVtb3J5IHByb2ZpbGUsIGFuZCB0aGF0IGlzIG5vdFxuICogc29tZXRoaW5nIHRoYXQgc2hvdWxkIGp1c3QgXCJoYXBwZW5cIiB3aXRob3V0IHRoZSB1c2VyJ3Mga25vd2xlZGdlLlxuICovXG5cbmNvbnN0IGJyb3dzZXIgPSByZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpO1xuY29uc3QgTFJVID0gcmVxdWlyZShcImxydS1jYWNoZVwiKTtcblxuaW1wb3J0IHsgbm93U3RhbXBMZXggfSBmcm9tIFwiLi91dGlsXCI7XG5cbmNvbnN0IENBQ0hFX0lOREVYX05BTUUgPSAnY2FjaGU6aW5kZXgnO1xuY29uc3QgQ0FDSEVfQllURVNfUFJFRklYID0gJ2NhY2hlOmJ5dGVzOic7XG5jb25zdCBDQUNIRV9JTklUSUFMX01BWF9NQiA9IDEwMDtcblxuXG4vKlxuICogUmVzdG9yZSB0aGUgQ2FjaGVJbmRleCBmcm9tIGl0cyByZXByZXNlbnRhdGlvbiBpbiBzdG9yYWdlLiBUaGlzIGlzIGhvdyBpdCBpc1xuICogcHJlc2VydmVkIGFjcm9zcyBicm93c2VyIHJlc3RhcnRzLiBJZiBzdGFydGluZyB1cCBmb3IgdGhlIGZpcnN0IHRpbWUgZXZlciwgd2VcbiAqIGdldCBhbiBlbXB0eSBjYWNoZSB3aXRoIHRoZSBkZWZhdWx0IGNhcGFjaXR5LlxuICpcbiAqIEByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgQ2FjaGVJbmRleCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gcmVzdG9yZUNhY2hlSW5kZXhGcm9tU3RvcmFnZSgpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChDQUNIRV9JTkRFWF9OQU1FKS50aGVuKGl0ZW1zID0+IHtcbiAgICAgICAgY29uc3QgaW5mbyA9IGl0ZW1zW0NBQ0hFX0lOREVYX05BTUVdIHx8IHt9O1xuICAgICAgICByZXR1cm4gbG9hZENhY2hlSW5kZXgoaW5mbyk7XG4gICAgfSk7XG59XG5cbi8qXG4gKiBSZWNvbnN0cnVjdCBhIGBDYWNoZUluZGV4YCBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdCBvZiB0aGUga2luZCByZXR1cm5lZFxuICogYnkgYENhY2hlSW5kZXguZHVtcCgpYCwgZXhjZXB0IHRoYXQgYWxsIGZpZWxkcyBhcmUgb3B0aW9uYWwuXG4gKlxuICogSWYgYG1heE1CYCBpcyBvbWl0dGVkLCB3ZSB1c2UgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBJZiBgbHJ1RHVtcGAgaXMgb21pdHRlZCwgdGhlIGNhY2hlIHN0YXJ0cyBvdXQgZW1wdHkuXG4gKlxuICogQHJldHVybjogQ2FjaGVJbmRleCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbG9hZENhY2hlSW5kZXgoZHVtcCkge1xuICAgIGNvbnN0IGNhY2hlID0gbmV3IENhY2hlSW5kZXgoZHVtcC5tYXhNQiB8fCBDQUNIRV9JTklUSUFMX01BWF9NQik7XG4gICAgaWYgKGR1bXAuaGFzT3duUHJvcGVydHkoJ2xydUR1bXAnKSkge1xuICAgICAgICBjYWNoZS5scnUubG9hZChkdW1wLmxydUR1bXApO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGU7XG59XG5cbi8qXG4gKiBBIGNsYXNzIHRvIHJlcHJlc2VudCBhbGwgdGhlIGNhY2hlIGluZGV4IGluZm9ybWF0aW9uLlxuICpcbiAqIEF0IGl0cyBjb3JlLCB0aGlzIGNsYXNzIHVzZXMgYW4gTFJVIGNhY2hlIChgdGhpcy5scnVgKSBhcyBpbXBsZW1lbnRlZCBieSB0aGUgYGxydS1jYWNoZWAgbnBtIHBhY2thZ2UuXG4gKiBTZWUgPGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2xydS1jYWNoZT4uXG4gKiBUaGlzIGlzIHRoZSBjb21wb25lbnQgdGhhdCBhY3R1YWxseSBkZWNpZGVzIHdoaWNoIFBERnMgYXJlIG1vc3QvbGVhc3QgcmVjZW50bHkgdXNlZCwgYW5kIHRlbGxzIHVzIHdoZW5cbiAqIGl0IGlzIHRpbWUgdG8gZHJvcCBhbiBlbnRyeS5cbiAqXG4gKiBUaGUgTFJVIGNhY2hlIGlzIGltcGxlbWVudGVkIGxpa2UgYSBNYXAgKGtleXMgJiB2YWx1ZXMpLCBhbmQgaW4gYHRoaXMubHJ1YCB3ZSB1c2UgUERGIFVSTHMgKDxzdHJpbmc+KSBhc1xuICoga2V5cywgd2hpbGUgdmFsdWVzIGFyZSBvYmplY3RzIG9mIHRoZSBmb3JtOlxuICoge1xuICogICB1cmw6IDxzdHJpbmc+IHRoZSBVUkwgb2YgdGhlIFBERixcbiAqICAgc2l6ZTogPGludD4gdGhlIHNpemUgb2YgdGhlIFBERiBpbiBieXRlcyxcbiAqICAgbXRpbWU6IDxzdHJpbmc+IHRpbWVzdGFtcCBhdCB0aW1lIG9mIGluaXRpYWwgc3RvcmFnZSxcbiAqICAgYXRpbWU6IDxzdHJpbmc+IHRpbWVzdGFtcCBhdCB0aW1lIG9mIG1vc3QgcmVjZW50IGFjY2VzcyxcbiAqICAgc3RvcmVkOiA8Ym9vbD4gc3RhcnRzIG91dCBmYWxzZTsgZ29lcyB0byB0cnVlIGFmdGVyIHRoZSBmdWxsIGJ5dGUgYXJyYXkgaGFzIGJlZW4gc3RvcmVkLFxuICogICBjb21tZW50OiA8c3RyaW5nPiBvcHRpb25hbCBwbGFjZSBmb3IgdXNlciB0byByZWNvcmQgbm90ZXMgKGUuZy4gdGl0bGUgYW5kIGF1dGhvciBvZiBQREYpXG4gKiB9XG4gKlxuICogTWVhbndoaWxlLCBpbiBgdGhpcy5tYXhNQmAgd2Uga2VlcCB0aGUgY2FwYWNpdHkgb2YgdGhlIGNhY2hlLlxuICogVGhpcyBjbGFzcyBhbHNvIHByb3ZpZGVzIHZhcmlvdXMgY29udmVuaWVuY2UgbWV0aG9kcy5cbiAqXG4gKiBUaGVvcmV0aWNhbGx5IGFuIExSVSBjYWNoZSBpbnN0YW5jZSBhbG9uZSBfY291bGRfIGhhdmUgYmVlbiBzdWZmaWNpZW50LCBidXQgdGhpcyBzZWVtZWQgaW5hZHZpc2FibGVcbiAqIHNpbmNlIHRoZSBjYXBhY2l0eSBvZiB0aGUgTFJVIGNhY2hlIGlzIF9ub3RfIGN1cnJlbnRseSBhIHBhcnQgb2YgaXRzIEFQSS4gSXQgY291bGQgYmUgcmVhZCwgYnV0IHRoYXRcbiAqIHdvdWxkIGJlIGEgaGFjaywgYW5kIHdvdWxkIGNvbW1pdCB1cyB0byBjb21wYXRpYmlsaXR5IHRlc3RpbmcgZXZlbiBvbiBtaW5vciB2ZXJzaW9uIHVwZGF0ZXMuXG4gKiBQbHVzIG91ciBjbGFzcydzIGNvbnZlbmllbmNlIG1ldGhvZHMgYXJlLCB3ZWxsLCBjb252ZW5pZW50LlxuICovXG5jbGFzcyBDYWNoZUluZGV4IHtcblxuICAgIC8qXG4gICAgICogbWF4TUI6IHRoZSBkZXNpcmVkIGNhcGFjaXR5IG9mIHRoZSBjYWNoZSwgaW4gbWVnYWJ5dGVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1heE1CKSB7XG4gICAgICAgIHRoaXMubWF4TUIgPSBtYXhNQjtcbiAgICAgICAgLyogTm90ZTogRG8gTk9UIHNldCBgdXBkYXRlQWdlT25HZXRgLiBSZWFkaW5nIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgTFJVIGNsYXNzIChzZWUgbGluayBhYm92ZSksIHlvdVxuICAgICAgICAgKiBtaWdodCB0aGluayBzZXR0aW5nIHRoaXMgb3B0aW9uIHdvdWxkIGJlIFwib24gdGhlIHNhZmUgc2lkZVwiIGluIHlvdXIgZ29hbCB0byBtYWtlIGEgY2FjaGUgd2hlcmUgZWxlbWVudHNcbiAgICAgICAgICogbmV2ZXIgZXhwaXJlLiBUaGlzIGlzIGNvbXBsZXRlbHkgd3JvbmcuIEluIGZhY3QgaXQgbWFrZXMgaXQgc28gdGhhdCBpZiB5b3UgZXZlciBgZ2V0YCBhbiBlbGVtZW50IG9mIHRoZVxuICAgICAgICAgKiBjYWNoZSwgYW5kIHRoZW4gZHVtcCBhbmQgcmVsb2FkIGZyb20gZHVtcCwgdGhlbiB0aGF0IGVsZW1lbnQgd2lsbCBiZSBndWFyYW50ZWVkIHRvIGJlIHJlamVjdGVkIGZyb20gdGhlXG4gICAgICAgICAqIHJlc3RvcmVkIGNhY2hlLiBJLmUuIGR1cmluZyByZWxvYWQgaXQgd2lsbCBiZSB2aWV3ZWQgYXMgZXhwaXJlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHdheSB0byBoYXZlIGVsZW1lbnRzIHRoYXQgbmV2ZXIgZXhwaXJlIGlzIHNpbXBseSB0byBgc2V0YCB0aGVtIHdpdGggYG1heEFnZWAgKGkuZS4gdGhlIHRoaXJkIGFyZ3VtZW50XG4gICAgICAgICAqIHRvIGBzZXRgKSBlcXVhbCB0byBgMGAuIE9yIGRvbid0IHBhc3MgYSBgbWF4QWdlYCBhcmd1bWVudCBhdCBhbGwgd2hlbiBhZGRpbmcgZWxlbWVudHMgdG8gdGhlIGNhY2hlLiAoQnV0XG4gICAgICAgICAqIHNldHRpbmcgYDBgIG1ha2VzIHlvdXIgaW50ZW50aW9uIGV4cGxpY2l0LCB3aGljaCBpcyBnb29kLikgQWxzbyBkb24ndCBzZXQgYSBgbWF4QWdlYCB3aGVuIGNvbnN0cnVjdGluZ1xuICAgICAgICAgKiB0aGUgTFJVIGluc3RhbmNlIGl0c2VsZi5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IGFyZSBoYXZpbmcgYW4gaXNzdWUsIGV4YW1pbmUgdGhlIGNhY2hlIGR1bXAgYXJyYXkuIFRoZSBgZWAgYXR0cmlidXRlIG9mIGVhY2ggZW50cnkgc2hvdWxkIGJlIGAwYC5cbiAgICAgICAgICogSWYgaXQgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIHRoYXQgZW50cnkgaGFzIGFuIGV4cGlyYXRpb24gZGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubHJ1ID0gbmV3IExSVSh7XG4gICAgICAgICAgICBtYXg6IG1heE1CICogMTA0ODU3NixcbiAgICAgICAgICAgIGxlbmd0aDogKHZhbHVlLCBrZXkpID0+IHZhbHVlLnNpemUsXG4gICAgICAgICAgICBkaXNwb3NlOiB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm4gYSBzZXJpYWxpemFibGUgb2JqZWN0IGZyb20gd2hpY2ggdGhlIHNhbWUgQ2FjaGVJbmRleCBjYW4gYmUgcmVjb25zdHJ1Y3RlZC5cbiAgICAgKi9cbiAgICBkdW1wKCkge1xuICAgICAgICBjb25zdCBscnVEdW1wID0gdGhpcy5scnUuZHVtcCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdscnVEdW1wJywgbHJ1RHVtcCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXhNQjogdGhpcy5tYXhNQixcbiAgICAgICAgICAgIGxydUR1bXA6IGxydUR1bXAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXNwb25kIHRvIHRoZSBmYWN0IHRoYXQgYSBQREYgaXMgYmVpbmcgZHJvcHBlZCBmcm9tIG91ciBMUlUgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBwYXJhbSB1cmw6IHRoZSBVUkwgb2YgdGhlIGRyb3BwZWQgUERGLlxuICAgICAqL1xuICAgIGRpc3Bvc2UodXJsKSB7XG4gICAgICAgIC8qIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd2UgYXJlIGFjdHVhbGx5IGVqZWN0aW5nIHRoaXMgUERGLCBvciB3aGV0aGVyXG4gICAgICAgICAqIGl0IGlzIHNpbXBseSBcImZhbGxpbmcgdGhyb3VnaCxcIiBpLmUuIGJlaW5nIHJlamVjdGVkIG91dHJpZ2h0IGJlY2F1c2UgaXQgaXMgdG9vXG4gICAgICAgICAqIGJpZyBmb3IgdGhlIGNhY2hlLiBJbiB0aGUgZm9ybWVyIGNhc2UsIHRoZSBVUkwgd2lsbCBzdGlsbCBhdCB0aGlzIHRpbWUgYmUgYVxuICAgICAgICAgKiBrZXkgaW4gdGhlIGNhY2hlOyBpbiB0aGUgbGF0dGVyIGNhc2UsIGl0IGhhcyBuZXZlciBiZWVuIGEga2V5IGF0IGFsbC5cbiAgICAgICAgICovXG4gICAgICAgIGlmICghdGhpcy5scnUuaGFzKHVybCkpIHtcbiAgICAgICAgICAgIC8vIEl0J3MgYSBcImZhbGwtdGhyb3VnaFwiLiBOb3RoaW5nIHRvIGRvLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYW4gYWN0dWFsIGVqZWN0aW9uLCBzbyB3ZSBkbyBuZWVkIHRvIHB1cmdlIGEgYnl0ZSBhcnJheSBmcm9tIHN0b3JhZ2UuXG4gICAgICAgIHJlbW92ZUJ5dGVBcnJheSh1cmwpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEFQSVxuXG4gICAgLypcbiAgICAgKiBSZWNvcmQgdGhpcyBpbmRleCBpbiBzdG9yYWdlLiBUaGlzIGFsbG93cyB1cyB0byByZXN0b3JlIGl0IGFmdGVyIGFcbiAgICAgKiBicm93c2VyIHJlc3RhcnQuIEl0IHNob3VsZCBiZSBjb21taXR0ZWQgYWZ0ZXIgZXZlcnkgdXBkYXRlLlxuICAgICAqXG4gICAgICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaW5mbyBoYXMgYmVlbiBjb21taXR0ZWQgdG8gc3RvcmFnZS5cbiAgICAgKi9cbiAgICBjb21taXQoKSB7XG4gICAgICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuc2V0KHtcbiAgICAgICAgICAgIFtDQUNIRV9JTkRFWF9OQU1FXTogdGhpcy5kdW1wKClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgYSBQREYgdG8gdGhlIGluZGV4LlxuICAgICAqXG4gICAgICogcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIFBERlxuICAgICAqIHBhcmFtIHNpemUge2ludH0gdGhlIGxlbmd0aCBvZiB0aGUgUERGIGJ5dGUgYXJyYXlcbiAgICAgKlxuICAgICAqIHJldHVybjogYm9vbGVhbiBzYXlpbmcgd2hldGhlciB0aGUgUERGIHdhcyBhY3R1YWxseSBhY2NlcHRlZCAodHJ1ZSksIG9yXG4gICAgICogICB3YXMgcmVqZWN0ZWQgZm9yIGJlaW5nIGxhcmdlciB0aGFuIHRoZSBjYWNoZSBjYXBhY2l0eS5cbiAgICAgKi9cbiAgICBhZGRQZGYodXJsLCBzaXplKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG5vd1N0YW1wTGV4KCk7XG4gICAgICAgIHRoaXMubHJ1LnNldCh1cmwsIHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgIG10aW1lOiBub3csXG4gICAgICAgICAgICBhdGltZTogbm93LFxuICAgICAgICAgICAgc3RvcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbW1lbnQ6ICcnXG4gICAgICAgIH0sIDApO1xuICAgICAgICBjb25zdCBhY2NlcHRlZCA9IHRoaXMubHJ1Lmhhcyh1cmwpO1xuICAgICAgICBpZiAoYWNjZXB0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY2VwdGVkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmVtb3ZlIG9uZSBvciBtb3JlIFBERnMgZnJvbSB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBwYXJhbSB1cmxzOiBpdGVyYWJsZSBvZiBVUkxzIHRvIGJlIHJlbW92ZWQuXG4gICAgICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgb3BlcmF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHJlbW92ZVBkZnMoe3VybHN9KSB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgICAgIGZvciAobGV0IHVybCBvZiB1cmxzKSB7XG4gICAgICAgICAgICB0aGlzLmxydS5kZWwodXJsKTtcbiAgICAgICAgICAgIHRhc2tzLnB1c2gocmVtb3ZlQnl0ZUFycmF5KHVybCkpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tzLnB1c2godGhpcy5jb21taXQoKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0YXNrcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXQgdGhlIGNvbW1lbnQgdGV4dCBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICogRG8gX25vdF8gdXBkYXRlIGl0cyBcInJlY2VudG5lc3NcIi5cbiAgICAgKlxuICAgICAqIHBhcmFtIHVybDogdGhlIFVSTCBmb3Igd2hpY2ggdGhlIGNvbW1lbnQgaXMgdG8gYmUgc2V0XG4gICAgICogcGFyYW0gY29tbWVudDogdGhlIGRlc2lyZWQgY29tbWVudFxuICAgICAqIHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBzZXRDb21tZW50KHt1cmwsIGNvbW1lbnR9KSB7XG4gICAgICAgIHRoaXMubHJ1LnBlZWsodXJsKS5jb21tZW50ID0gY29tbWVudDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbWl0KCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBY2Nlc3MgdGhlIGluZm8gZm9yIGEgZ2l2ZW4gVVJMLlxuICAgICAqIFRoaXMgYWNjZXNzIHVwZGF0ZXMgdGhlIGVudHJ5J3MgXCJyZWNlbnRuZXNzXCIgaW4gdGhlIExSVSBjYWNoZSBhcyB3ZWxsIGFzIHRoZVxuICAgICAqIGBhdGltZWAgcHJvcGVydHkgb2YgdGhlIGluZm8gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybDoge3N0cmluZ30gdGhlIFVSTCBvZiB0aGUgZGVzaXJlZCBpbmZvXG4gICAgICogQHJldHVybjogdGhlIGNvcnJlc3BvbmRpbmcgaW5mbyBvYmplY3QgaWYgcHJlc2VudCBpbiB0aGUgY2FjaGU7IGVsc2UgdW5kZWZpbmVkXG4gICAgICovXG4gICAgYWNjZXNzKHVybCkge1xuICAgICAgICAvLyBDYWxsaW5nIGBnZXRgIG9uIHRoZSBMUlUgY2FjaGUgdXBkYXRlcyB0aGUgZW50cnkncyByZWNlbnRuZXNzIGlmIHByZXNlbnQ7XG4gICAgICAgIC8vIGVsc2UgcmV0dXJucyB1bmRlZmluZWQuXG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmxydS5nZXQodXJsKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgIGluZm8uYXRpbWUgPSBub3dTdGFtcExleCgpO1xuICAgICAgICAgICAgdGhpcy5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFJlY29yZCB0aGUgZmFjdCB0aGF0IHRoZSBieXRlIGFycmF5IGZvciBhIGdpdmVuIFVSTCBoYXMgYmVlbiBzdG9yZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsOiB7c3RyaW5nfSB0aGUgVVJMIG9mIHRoZSBQREYgd2hvc2UgYnl0ZXMgaGF2ZSBiZWVuIHN0b3JlZFxuICAgICAqIEByZXR1cm46IHRoZSBjb3JyZXNwb25kaW5nIGluZm8gb2JqZWN0IGlmIHByZXNlbnQgaW4gdGhlIGNhY2hlOyBlbHNlIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIG5vdGVBcnJheVN0b3JlZCh1cmwpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMubHJ1LmdldCh1cmwpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaW5mby5zdG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb21taXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEdldCBhIHByZXZpZXcgb2Ygd2hhdCB3b3VsZCBoYXBwZW4gaWYgYSBuZXcgY2FwYWNpdHkgd2VyZSBzZXQgZm9yIHRoZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIHBhcmFtIG51bV9tYjogdGhlIHByb3Bvc2VkIG51bWJlciBvZiBNQiBmb3IgdGhlIG5ldyBjYXBhY2l0eS5cbiAgICAgKiByZXR1cm46IFNldCBvZiBVUkxzIHRoYXQgd291bGQgYmUgcHVyZ2VkIGlmIHRoYXQgc2V0dGluZyB3ZXJlIG1hZGUuXG4gICAgICovXG4gICAgcHJldmlld05ld01heE1CKHtudW1fbWJ9KSB7XG4gICAgICAgIGNvbnN0IGR1bW15TFJVID0gbmV3IExSVSh7XG4gICAgICAgICAgICBtYXg6IG51bV9tYiAqIDEwNDg1NzYsXG4gICAgICAgICAgICBsZW5ndGg6ICh2YWx1ZSwga2V5KSA9PiB2YWx1ZS5zaXplLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZHVtcCA9IHRoaXMubHJ1LmR1bXAoKTtcbiAgICAgICAgZHVtbXlMUlUubG9hZChkdW1wKTtcbiAgICAgICAgY29uc3QgY3VycmVudFVybFNldCA9IG5ldyBTZXQodGhpcy5scnUua2V5cygpKTtcbiAgICAgICAgLy8gVGhlIGtleXMgaW4gdGhlIGR1bW15IGNhY2hlIGFyZSB0aG9zZSB0aGF0IHdvdWxkIGJlIHJldGFpbmVkLlxuICAgICAgICBjb25zdCByZXRhaW5lZFVybEFycmF5ID0gZHVtbXlMUlUua2V5cygpO1xuICAgICAgICBmb3IgKGxldCB1cmwgb2YgcmV0YWluZWRVcmxBcnJheSkge1xuICAgICAgICAgICAgY3VycmVudFVybFNldC5kZWxldGUodXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCeSBkZWxldGluZyB0aGUgVVJMcyB0aGF0IHdvdWxkIGJlIHJldGFpbmVkLCB3ZSBhcmUgbGVmdCB3aXRoXG4gICAgICAgIC8vIHRob3NlIHRoYXQgd291bGQgYmUgcHVyZ2VkLlxuICAgICAgICByZXR1cm4gY3VycmVudFVybFNldDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldCB0aGUgbWF4IHNpemUgb2YgdGhlIGNhY2hlIGluIG1lZ2FieXRlcy5cbiAgICAgKiBJdCBtYXkgYmUgYWR2aXNhYmxlIHRvIGNoZWNrIHRoZSByZXN1bHRzIGZpcnN0OyBzZWUgYHByZXZpZXdOZXdNYXhNQmAuXG4gICAgICpcbiAgICAgKiBwYXJhbSBudW1fbWI6IHRoZSBkZXNpcmVkIG51bWJlciBvZiBNQiBmb3IgdGhlIG1heCBzaXplLlxuICAgICAqIHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG9wZXJhdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBzZXRNYXhNQih7bnVtX21ifSkge1xuICAgICAgICBjb25zdCB1cmxzVG9CZVB1cmdlZCA9IHRoaXMucHJldmlld05ld01heE1CKHtudW1fbWJ9KTtcbiAgICAgICAgY29uc3QgdGhpc0luZGV4ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlUGRmcyh7dXJsczogdXJsc1RvQmVQdXJnZWR9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXNJbmRleC5tYXhNQiA9IG51bV9tYjtcbiAgICAgICAgICAgIGNvbnN0IGR1bXAgPSB0aGlzSW5kZXguZHVtcCgpO1xuICAgICAgICAgICAgY29uc3QgZHVtbXlJbmRleCA9IGxvYWRDYWNoZUluZGV4KGR1bXApO1xuICAgICAgICAgICAgdGhpc0luZGV4LmxydSA9IGR1bW15SW5kZXgubHJ1O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNJbmRleC5jb21taXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm4gaW5mbyBhYm91dCB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBjYWNoZSBpbmZvIGlzOlxuICAgICAqIHtcbiAgICAgKiAgIGN1cnJlbnRTaXplOiA8aW50PiBjdXJyZW50IHNpemUgb2YgdGhlIGNhY2hlIGluIGJ5dGVzXG4gICAgICogICBtYXhTaXplOiA8aW50PiB0aGUgbWF4aW11bSBhbGxvd2VkIHNpemUgb2YgdGhlIGNhY2hlIGluIGJ5dGVzXG4gICAgICogICBoaXN0b3J5OiA8QXJyYXlbT2JqZWN0XT4gYXJyYXkgb2YgaW5mb3MgYWJvdXQgdGhlIHN0b3JlZCBQREZzLCBvcmRlcmVkIGJ5IGFjY2VzcyB0aW1lLFxuICAgICAqICAgICAgICAgICAgZnJvbSBtb3N0IHJlY2VudCB0byBsZWFzdCByZWNlbnRcbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIGVhY2ggUERGIGluZm8gaW4gdGhlIGhpc3RvcnkgYXJyYXkgaXM6XG4gICAgICoge1xuICAgICAqICAgdXJsOiA8c3RyaW5nPiB0aGUgVVJMIG9mIHRoZSBQREYsXG4gICAgICogICBzaXplOiA8aW50PiB0aGUgc2l6ZSBvZiB0aGUgUERGIGluIGJ5dGVzLFxuICAgICAqICAgbXRpbWU6IDxzdHJpbmc+IHRpbWVzdGFtcCBhdCB0aW1lIG9mIGluaXRpYWwgc3RvcmFnZSxcbiAgICAgKiAgIGF0aW1lOiA8c3RyaW5nPiB0aW1lc3RhbXAgYXQgdGltZSBvZiBtb3N0IHJlY2VudCBhY2Nlc3MsXG4gICAgICogICBzdG9yZWQ6IDxib29sPiBzdGFydHMgb3V0IGZhbHNlOyBnb2VzIHRvIHRydWUgYWZ0ZXIgdGhlIGZ1bGwgYnl0ZSBhcnJheSBoYXMgYmVlbiBzdG9yZWQsXG4gICAgICogICBjb21tZW50OiA8c3RyaW5nPiBvcHRpb25hbCBwbGFjZSBmb3IgdXNlciB0byByZWNvcmQgbm90ZXMgKGUuZy4gdGl0bGUgYW5kIGF1dGhvciBvZiBQREYpXG4gICAgICogfVxuICAgICAqXG4gICAgICogQWxsIGluZm8gaXMgcmV0dXJuZWQgXCJieSB2YWx1ZVwiIChub3QgXCJieSByZWZlcmVuY2VcIikgYW5kIGNvbnN1bWVycyBtYXkgYWx0ZXIgd2l0aCBpbXB1bml0eS5cbiAgICAgKi9cbiAgICBnZXRDYWNoZUluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50U2l6ZTogdGhpcy5scnUubGVuZ3RoLFxuICAgICAgICAgICAgbWF4U2l6ZTogdGhpcy5tYXhNQiAqIDEwNDg1NzYsXG4gICAgICAgICAgICBoaXN0b3J5OiB0aGlzLmxydS52YWx1ZXMoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDUlVEIGFjdGlvbnMgZm9yIFBERiBieXRlIGFycmF5c1xuXG4vKlxuICogUmV0cmlldmUgYSBQREYgYnl0ZSBhcnJheSB3aGljaCB5b3Uga25vdyBpcyBwcmVzZW50ICh0aHJvd3NcbiAqIHVuY2F1Z2h0IGV4Y2VwdGlvbiBpZiBub3QgcHJlc2VudCkuXG4gKlxuICogcGFyYW0gdXJsOiB0aGUgVVJMIG9mIHRoZSBkZXNpcmVkIFBERlxuICogcmV0dXJuOiBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgZGVzaXJlZCBieXRlIGFycmF5IChhcyBwbGFpbiBBcnJheSlcbiAqL1xuZnVuY3Rpb24gZ2V0Qnl0ZUFycmF5KHVybCkge1xuICAgIGNvbnN0IGFycmF5S2V5ID0gQ0FDSEVfQllURVNfUFJFRklYICsgdXJsO1xuICAgIHJldHVybiBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGFycmF5S2V5KS50aGVuKGl0ZW1zID0+IGl0ZW1zW2FycmF5S2V5XSk7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGJ5dGUgYXJyYXkgZm9yIGEgVVJMLlxuICpcbiAqIHBhcmFtIHVybDogdGhlIFVSTCB3aG9zZSBieXRlIGFycmF5IGlzIGJlaW5nIHNldC5cbiAqIHBhcmFtIGJ5dGVBcnJheTogdGhlIGJ5dGUgYXJyYXkgdG8gYmUgcmVjb3JkZWQuIE1heSBiZSBhIFVpbnQ4QXJyYXkgb3IgYSBwbGFpbiBBcnJheSBvZiBpbnRzLlxuICogcGFyYW0gY2FjaGVJbmRleDogYSBDYWNoZUluZGV4IGluc3RhbmNlIGluIHdoaWNoIHRoZSBmYWN0IG9mIGJ5dGUgYXJyYXkgc3RvcmFnZSBzaG91bGQgYmUgbm90ZWQuXG4gKiByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gKi9cbmZ1bmN0aW9uIHNldEJ5dGVBcnJheSh1cmwsIGJ5dGVBcnJheSwgY2FjaGVJbmRleCkge1xuICAgIGNvbnN0IHBsYWluQXJyYXkgPSAoYnl0ZUFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkgPyBBcnJheS5mcm9tKGJ5dGVBcnJheSkgOiBieXRlQXJyYXk7XG4gICAgY29uc3QgYXJyYXlLZXkgPSBDQUNIRV9CWVRFU19QUkVGSVggKyB1cmw7XG4gICAgcmV0dXJuIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICBbYXJyYXlLZXldOiBwbGFpbkFycmF5XG4gICAgfSkudGhlbihyID0+IHtcbiAgICAgICAgY2FjaGVJbmRleC5ub3RlQXJyYXlTdG9yZWQodXJsKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfSk7XG59XG5cbi8qXG4gKiBSZW1vdmUgdGhlIGJ5dGUgYXJyYXkgZm9yIGEgVVJMLlxuICpcbiAqIHBhcmFtIHVybDogdGhlIFVSTCB3aG9zZSBieXRlIGFycmF5IGlzIHRvIGJlIHJlbW92ZWQuXG4gKiByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGUuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJ5dGVBcnJheSh1cmwpIHtcbiAgICBjb25zdCBhcnJheUtleSA9IENBQ0hFX0JZVEVTX1BSRUZJWCArIHVybDtcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnJlbW92ZShhcnJheUtleSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQge1xuICAgIHJlc3RvcmVDYWNoZUluZGV4RnJvbVN0b3JhZ2UsXG4gICAgZ2V0Qnl0ZUFycmF5LFxuICAgIHNldEJ5dGVBcnJheSxcbiAgICByZW1vdmVCeXRlQXJyYXksXG59O1xuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAgUHJvb2ZzY2FwZSBCcm93c2VyIEV4dGVuc2lvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIENvcHlyaWdodCAoYykgMjAyMC0yMDIyIFByb29mc2NhcGUgY29udHJpYnV0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyAgICAgICAgICAqXG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgICAgICAgICpcbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgICAgICAqXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCAgICAgICAgKlxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAqXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCAgICAgICpcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5jb25zdCBicm93c2VyID0gcmVxdWlyZShcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiKTtcblxuaW1wb3J0IHtnZXRCeXRlQXJyYXksIHNldEJ5dGVBcnJheX0gZnJvbSBcIi4vY2FjaGVcIjtcbmltcG9ydCB7IExhY2tpbmdIb3N0UGVybWlzc2lvbkVycm9yIH0gZnJvbSBcImJyb3dzZXItcGVlcnMvc3JjL2Vycm9yc1wiO1xuaW1wb3J0IHsgZmV0Y2hQZGYgfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGFic3RyYWN0IGNsYXNzLCByZXByZXNlbnRpbmcgdGhlIGdlbmVyYWwgcGF0dGVybiBvZiBmZXRjaGluZyBQREZzLFxuICogc3RvcmluZyB0aGVtIGluIHRoZSBjYWNoZSwgYW5kIHJldHJpZXZpbmcgdGhlbSBmcm9tIHRoZSBjYWNoZS4gSXQgaXMgbm90IG1lYW50XG4gKiB0byBiZSB1c2VkIGRpcmVjdGx5LCBidXQgc3ViY2xhc3NlZC5cbiAqXG4gKiBUaGUgYWJzdHJhY3QgbWV0aG9kcyB0aGF0IE1VU1QgYmUgb3ZlcnJpZGRlbiBieSB1c2FibGUgc3ViY2xhc3NlcyBhcmUgY2xlYXJseVxuICogc2V0IG9mZiBhdCB0aGUgZW5kIG9mIHRoZSBjbGFzcyBkZWNsYXJhdGlvbi4gT3RoZXIgbWV0aG9kcyBNQVkgYmUgb3ZlcnJpZGRlblxuICogYXMgbmVlZGVkLlxuICovXG5jbGFzcyBBYnN0cmFjdERvd25sb2FkTWdyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiBXcml0aW5nIHRvIHN0b3JhZ2UgaXMgdmVyeSBzbG93IGluIEZpcmVmb3gsIGFuZCBub3QgZXhhY3RseSBmYXN0IGluIENocm9tZSBlaXRoZXIuXG4gICAgICAgICAqIEluIG91ciB0ZXN0cyBvbiBhIDIwMTkgTWFjQm9vayBQcm8sIENocm9tZSB3cm90ZSBhdCBhYm91dCAwLjZzIHBlciBNQiwgYW5kIEZpcmVmb3hcbiAgICAgICAgICogYXQgYWJvdXQgMi43cyBwZXIgTUIhIFNlZSBvdXIgYHRlc3RfZXh0c2AgcmVwbyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBTbywgc2luY2UgYSAxME1CIFBERiBjb3VsZCB0YWtlIGhhbGYgYSBtaW51dGUgdG8gYmUgcmVjb3JkZWQgaW4gc3RvcmFnZSwgd2UgbmVlZFxuICAgICAgICAgKiBhIHBsYWNlIGZvciBpdHMgYnl0ZSBhcnJheSB0byBsaXZlIGluIGNhc2UgaXQgaXMgcmVxdWVzdGVkIGR1cmluZyB0aGF0IHRpbWUuIFRoaXNcbiAgICAgICAgICogaXMgdGhhdCBwbGFjZTpcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ1BkZkJ5dGVBcnJheXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyogU3ViY2xhc3NlcyBzaG91bGQgZGVjaWRlIHdoZXRoZXIgdGhleSB3YW50IHRvIGRvIGRlbGF5ZWQgc3RvcmFnZSwgcHJvYmFibHkgYmFzZWRcbiAgICAgICAgICogb24gY29uc3RydWN0b3Igb3B0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZG9EZWxheWVkU3RvcmFnZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qIEdldCBhIFBERi4gVGhpcyBpcyB0aGUgbWFpbiBtZXRob2QgdXNlcnMgYXJlIG1lYW50IHRvIGNhbGwuXG4gICAgICpcbiAgICAgKiBXZSBjaGVjayB3aGV0aGVyIHRoZSBQREYgaXMgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBjYWNoZS4gSWYgc28sIHdlIHJldHVybiBpdCBmcm9tIHRoZXJlLlxuICAgICAqIE90aGVyd2lzZSB3ZSBhdHRlbXB0IHRvIGZldGNoIGl0IGZyb20gdGhlIEludGVybmV0LCBjYWNoZSBpdCwgYW5kIHJldHVybiBpdC4gVGhlcmUncyBhbHNvXG4gICAgICogdGhlIGluLWJldHdlZW4gY2FzZSwgd2hlcmUgd2UndmUgZmV0Y2hlZCBpdCBidXQgYXJlIHN0aWxsIHdhaXRpbmcgdG8gY29tcGxldGVcbiAgICAgKiB0aGUgc2xvdyBvcGVyYXRpb24gb2Ygd3JpdGluZyBpdCB0byBzdG9yYWdlLCBkdXJpbmcgd2hpY2ggdGltZSB3ZSByZXR1cm4gdGhlIGJ5dGUgYXJyYXkgZnJvbSBtZW1vcnkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIGRlc2lyZWQgUERGXG4gICAgICogQHBhcmFtIGFzUGxhaW5BcnJheSB7Ym9vbH0gc2V0IHRydWUgaWYgeW91IHdhbnQgdGhlIGJ5dGUgYXJyYXkgYXMgYSBwbGFpbiBBcnJheTtcbiAgICAgKiAgIG90aGVyd2lzZSBpdCB3aWxsIGJlIGEgVWludDhBcnJheS5cbiAgICAgKiBAcmV0dXJuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG9iamVjdCBvZiB0aGUgZm9ybToge1xuICAgICAqICAgdXJsOiA8c3RyaW5nPiB0aGUgVVJMIG9mIHRoZSBQREZcbiAgICAgKiAgIGJ5dGVzOiA8VWludDhBcnJheXxBcnJheT4gdGhlIGJ5dGVzIG9mIHRoZSBQREZcbiAgICAgKiAgIHNpemU6IDxpbnQ+IHRoZSBzaXplIG9mIHRoZSBQREYgaW4gYnl0ZXNcbiAgICAgKiAgIGZyb21NZW1vcnk6IDxib29sPiB0cnVlIGlmIHRoZSBQREYgd2FzIHN0aWxsIGluIHRoZSBkb3dubG9hZCBtYW5hZ2VyJ3MgbWVtb3J5LlxuICAgICAqICAgICAgIFRoaXMgbWVhbnMgaXQgaGFkIGJlZW4gZmV0Y2hlZCwgYnV0IG5vdCB5ZXQgY29tbWl0dGVkIHRvIHN0b3JhZ2UuXG4gICAgICogICBmcm9tQ2FjaGU6IDxib29sPiB0cnVlIGlmIHRoZSBQREYgd2FzIHJldHJpZXZlZCBmcm9tIHN0b3JhZ2UuXG4gICAgICogICBjb21tZW50OiA8c3RyaW5nPiBpZiByZXRyaWV2ZWQgZnJvbSBjYWNoZSwgdGhlIGNvbW1lbnQgdGV4dCBmb3IgdGhpcyBlbnRyeSAoZWxzZSB1bmRlZmluZWQpXG4gICAgICogICB0b29CaWdGb3JDYWNoZTogPGJvb2w+IHRydWUgaWYgdGhlIFBERiB3YXMgZmV0Y2hlZCBhbmQgdHVybmVkIG91dCB0byBiZSB0b28gYmlnIGZvciB0aGUgY2FjaGUsXG4gICAgICogICAgIGkuZS4gbGFyZ2VyIHRoYW4gdGhlIGNhY2hlJ3MgY3VycmVudCBjYXBhY2l0eSBzZXR0aW5nLCBhbmQgdGhlcmVmb3JlIHdpbGwgX25vdF8gYmUgY2FjaGVkLlxuICAgICAqICAgICBUaGlzIGlzIHVzZWZ1bCBzbyB0aGF0IHRoZSBhcHAgY2FuIHdhcm4gdGhlIHVzZXIgdGhhdCB0aGUgUERGIHdpbGwgaGF2ZSB0byBiZSBkb3dubG9hZGVkXG4gICAgICogICAgIGV2ZXJ5IHRpbWUgdW5sZXNzIHRoZSBjYXBhY2l0eSBpcyBpbmNyZWFzZWQuXG4gICAgICogfVxuICAgICAqL1xuICAgIGFzeW5jIGdldFBkZih7IHVybCwgYXNQbGFpbkFycmF5ID0gZmFsc2UgfSkge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5hY2Nlc3NQZGZDYWNoZUluZm8oe3VybDp1cmx9KTtcbiAgICAgICAgY29uc3QgaGF2ZVBlbmRpbmdBcnJheSA9IHRoaXMucGVuZGluZ1BkZkJ5dGVBcnJheXMuaGFzKHVybCk7XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5zdG9yZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgY2FjaGUgc2F5cyB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBQREYuXG4gICAgICAgICAgICAgICAgaWYgKGhhdmVQZW5kaW5nQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT29wcywgdGhlIGJ5dGUgYXJyYXkgaXMgYWN0dWFsbHkgbm8gbG9uZ2VyIHBlbmRpbmc7IHRpbWUgZm9yIHNvbWUgbGF0ZSBjbGVhbiB1cC5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBjYXNlIGNhbiBhcmlzZSBpZiB0aGUgUERGIHdhcyBkb3dubG9hZGVkIG9uIHRoZSBDUyBzaWRlLCBidXQgdGhlIENTIGZhaWxlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyByZWNlaXZlIHRoZSBtZXNzYWdlIGZyb20gdGhlIEJHUyB0aGF0IHRoZSBhcnJheSBoYWQgYmVlbiBzdG9yZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoYXQgY2FuIGhhcHBlbiBpbiBGaXJlZm94IChEZXYgRWRpdGlvbiwgdjEwNy4wYjkgYXQgdGltZSBvZiB0ZXN0aW5nKVxuICAgICAgICAgICAgICAgICAgICAvLyBiZWNhdXNlIGl0IHNlZW1zIHRoYXQgaWYgdGhlIHVzZXIgbWFudWFsbHkgY2xvc2VzIHRoZSBleHRlbnNpb24ncyBvcHRpb25zIHBhZ2UgZHVyaW5nIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBkb3dubG9hZCBwcm9jZXNzICh3aGljaCBpcyBxdWl0ZSBsaWtlbHkgaWYgdGhlIG9wdGlvbnMgcGFnZSB3YXMgb3BlbmVkIGluIG9yZGVyIGZvciB0aGUgdXNlclxuICAgICAgICAgICAgICAgICAgICAvLyB0byBncmFudCBkb3dubG9hZCBwZXJtaXNzaW9uKSwgdGhpcyBjYXVzZXMgUG9ydHMgdG8gYmUgZm9yY2libHkgZGlzY29ubmVjdGVkLCBpbiBwYXJ0aWN1bGFyIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gUG9ydCBvbiB3aGljaCB0aGUgY2FsbCB0byBgbWdyLnN0b3JlUGRmQnl0ZXMoKWAgZG93biBpbiBvdXIgYGRvd25sb2FkUGRmKClgIG1ldGhvZCBpcyBhd2FpdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBub3RpY2Ugb2YgY29tcGxldGVkIGFycmF5IHN0b3JhZ2UuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFN0b3JhZ2Ugb2YgUERGIGFycmF5ICR7dXJsfSB3YXMgY29tcGxldGVkIGVhcmxpZXIuIERlbGV0aW5nIGZyb20gcGVuZGluZyBtYXAgbm93LmApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdQZGZCeXRlQXJyYXlzLmRlbGV0ZSh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwbGFpbkFycmF5ID0gYXdhaXQgdGhpcy5yZWFkUGRmQnl0ZXMoe3VybDogdXJsfSk7XG4gICAgICAgICAgICAgICAgLy8gSW4gdGVzdGluZywgaXQgd2FzIHdpdG5lc3NlZCBvbmUgdGltZSB0aGF0IHRoZSBjYWNoZSBzYWlkIHdlIGhhZCBhIFBERiwgYW5kIHlldFxuICAgICAgICAgICAgICAgIC8vIHRoZSBieXRlIGFycmF5IHR1cm5lZCBvdXQgdG8gYmUgdW5kZWZpbmVkLiBJdCBoYXBwZW5lZCBkdXJpbmcgZWFybHkgZWZmb3J0cyB0byBzd2l0Y2hcbiAgICAgICAgICAgICAgICAvLyB0byBNYW5pZmVzdCBWMywgYW5kIEkgaGF2ZSBub3QgYmVlbiBhYmxlIHRvIHJlcHJvZHVjZSB0aGUgZXJyb3IuIFN0aWxsLCB3ZSB0YWtlXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtb21lbnQgdG8gY2hlY2sgd2hldGhlciB3ZSBhY3R1YWxseSBoYXZlIGRhdGEuIElmIG5vdCwgd2UganVzdCBsZXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gZG93bmxvYWQgaGFwcGVuIGFnYWluIChhbmQgaXQgd2lsbCBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIGFycmF5KS5cbiAgICAgICAgICAgICAgICBpZiAocGxhaW5BcnJheT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYEZvdW5kIFBERiBieXRlcyBmb3IgXCIke3VybH1cIiBpbiBjYWNoZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXM6IGFzUGxhaW5BcnJheSA/IHBsYWluQXJyYXkgOiBuZXcgVWludDhBcnJheShwbGFpbkFycmF5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHBsYWluQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUNhY2hlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudDogaW5mby5jb21tZW50LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBGb3VuZCBubyBQREYgYnl0ZXMgZm9yIFwiJHt1cmx9XCIsIHNhaWQgdG8gYmUgcHJlc2VudCBpbiB0aGUgY2FjaGUuYCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhdmVQZW5kaW5nQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgUERGIGhhcyBhbHJlYWR5IGJlZW4gZmV0Y2hlZCwgYnV0IHRoZSBieXRlIGFycmF5IGhhc24ndCBiZWVuXG4gICAgICAgICAgICAgICAgLy8gcmVjb3JkZWQgaW4gc3RvcmFnZSB5ZXQsIGFuZCBpcyBzdGlsbCBoZWxkIGluIG1lbW9yeS5cbiAgICAgICAgICAgICAgICBjb25zdCBieXRlQXJyYXkgPSB0aGlzLnBlbmRpbmdQZGZCeXRlQXJyYXlzLmdldCh1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYEZvdW5kIFBERiBieXRlcyBmb3IgXCIke3VybH1cIiBzdGlsbCBwZW5kaW5nIHN0b3JhZ2UuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGJ5dGVzOiBhc1BsYWluQXJyYXkgPyBBcnJheS5mcm9tKGJ5dGVBcnJheSkgOiBieXRlQXJyYXksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGJ5dGVBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGZyb21NZW1vcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgUERGIGlzIG5laXRoZXIgaW4gdGhlIGNhY2hlLCBub3IgYW1vbmcgdGhlIHBlbmRpbmcgYXJyYXlzLiBXZSBtdXN0IGRvd25sb2FkIGl0LlxuICAgICAgICByZXR1cm4gdGhpcy5kb3dubG9hZFBkZih7dXJsOiB1cmwsIGFzUGxhaW5BcnJheTogYXNQbGFpbkFycmF5fSk7XG4gICAgfVxuXG4gICAgZG93bmxvYWRQZGYoeyB1cmwsIGFzUGxhaW5BcnJheSA9IGZhbHNlIH0pIHtcbiAgICAgICAgY29uc3QgbWdyID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tIb3N0UGVybWlzc2lvbih7dXJsOiB1cmwsIGRvVGhyb3c6IHRydWV9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYEluaXRpYXRpbmcgZmV0Y2ggZm9yIFBERiAke3VybH0uYCk7XG4gICAgICAgICAgICByZXR1cm4gbWdyLmZldGNoUGRmKHt1cmw6IHVybH0pLnRoZW4oYnl0ZUFycmF5ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaXplID0gYnl0ZUFycmF5Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWdyLmFkZE5ld1BkZkNhY2hlSW5mbyh7dXJsOnVybCwgc2l6ZTpzaXplfSkudGhlbihhY2NlcHRlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NlcHRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUXVldWluZyBQREYgYXJyYXkgJHt1cmx9IGZvciBzdG9yYWdlLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWdyLnBlbmRpbmdQZGZCeXRlQXJyYXlzLnNldCh1cmwsIGJ5dGVBcnJheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZ3Iuc3RvcmVQZGZCeXRlcyh7IHVybDogdXJsLCBieXRlczogQXJyYXkuZnJvbShieXRlQXJyYXkpLCBkZWxheWVkOiBtZ3IuZG9EZWxheWVkU3RvcmFnZSB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZ3IucGVuZGluZ1BkZkJ5dGVBcnJheXMuZGVsZXRlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFBERiBhcnJheSAke3VybH0gd2FzIHJlamVjdGVkLCBhbmQgd2lsbCBub3QgYmUgc3RvcmVkLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVzOiBhc1BsYWluQXJyYXkgPyBBcnJheS5mcm9tKGJ5dGVBcnJheSkgOiBieXRlQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBieXRlQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vQmlnRm9yQ2FjaGU6ICFhY2NlcHRlZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB3aGV0aGVyIHdlIGhhdmUgaG9zdCBwZXJtaXNzaW9uIGZvciBhIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwge3N0cmluZ30gdGhlIFVSTCBpbiBxdWVzdGlvbixcbiAgICAgKiBAcGFyYW0gZG9UaHJvdyB7Ym9vbH0gc2V0IHRydWUgaWYgeW91IHdhbnQgdGhpcyBoYW5kbGVyIHRvIHRocm93IGFuIGVycm9yIGluIGNhc2VcbiAgICAgKiAgICAgdGhlIG5hbWVkIGhvc3QgcGVybWlzc2lvbiBpcyBsYWNraW5nXG4gICAgICogQHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYm9vbGVhblxuICAgICAqL1xuICAgIGNoZWNrSG9zdFBlcm1pc3Npb24oeyB1cmwsIGRvVGhyb3cgPSB0cnVlIH0pIHtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRfaG9zdF9wZXJtaXNzaW9uID0geyBvcmlnaW5zOiBbdXJsXSB9O1xuICAgICAgICByZXR1cm4gYnJvd3Nlci5wZXJtaXNzaW9ucy5jb250YWlucyhyZXF1aXJlZF9ob3N0X3Blcm1pc3Npb24pLnRoZW4oYWJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9UaHJvdyAmJiAhYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgTGFja2luZ0hvc3RQZXJtaXNzaW9uRXJyb3Ioe3VybDogdXJsfSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUuc2VyaWFsaXplKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFibGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZldGNoUGRmKHsgdXJsIH0pIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUGRmKHVybCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQWJzdHJhY3QgbWV0aG9kcy4gVXNhYmxlIHN1YmNsYXNzZXMgTVVTVCBvdmVycmlkZS5cblxuICAgIC8qIEFjY2VzcyB0aGUgY2FjaGUgaW5mbyAoaWYgYW55KSBmb3IgYSBQREYuXG4gICAgICogSWYgcHJlc2VudCwgdGhlIHJlY2VudG5lc3MgYW5kIGFjY2VzcyB0aW1lIGZvciB0aGUgZW50cnkgYXJlIHVwZGF0ZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IHRoZSBVUkwgb2YgdGhlIFBERiBvZiBpbnRlcmVzdFxuICAgICAqIEByZXR1cm46IHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkZXNpcmVkIGNhY2hlIGluZm8sIG9yIHVuZGVmaW5lZCBpZiBub3QgcHJlc2VudFxuICAgICAqL1xuICAgIGFjY2Vzc1BkZkNhY2hlSW5mbyh7IHVybCB9KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKiBBZGQgYSBuZXcgY2FjaGUgZW50cnkgZm9yIGEgUERGLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybDoge3N0cmluZ30gdGhlIFVSTCBvZiB0aGUgUERGLFxuICAgICAqIEBwYXJhbSBzaXplOiB7aW50fSB0aGUgbGVuZ3RoIG9mIHRoZSBQREYgYnl0ZSBhcnJheVxuICAgICAqXG4gICAgICogQHJldHVybjogcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYm9vbGVhbiBzYXlpbmcgd2hldGhlciB0aGUgZW50cnkgd2FzIGFjY2VwdGVkICh0cnVlKVxuICAgICAqICAgb3IgcmVqZWN0ZWQgZm9yIGJlaW5nIHRvbyBcImxhcmdlXCIgYWNjb3JkaW5nIHRvIG1zZy5zaXplLlxuICAgICAqL1xuICAgIGFkZE5ld1BkZkNhY2hlSW5mbyh7IHVybCwgc2l6ZSB9KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyogUmVhZCBhIFBERiBieXRlIGFycmF5IGZyb20gc3RvcmFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwge3N0cmluZ30gdGhlIFVSTCBvZiB0aGUgUERGXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBieXRlIGFycmF5IChhcyBwbGFpbiBBcnJheSlcbiAgICAgKi9cbiAgICByZWFkUGRmQnl0ZXMoeyB1cmwgfSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICB9XG5cbiAgICAvKiBTdG9yZSBhIFBERiBieXRlIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybDoge3N0cmluZ30gdGhlIFVSTCBvZiB0aGUgUERGXG4gICAgICogQHBhcmFtIGJ5dGVzOiB7QXJyYXlbaW50XX0gdGhlIGJ5dGUgYXJyYXkgb2YgdGhlIFBERlxuICAgICAqIEBwYXJhbSBkZWxheWVkOiB7Ym9vbH0gU2V0IHRydWUgaW4gb3JkZXIgdG8gZG8gZGVsYXllZCBzdG9yYWdlLiBJbiB0aGlzIGNhc2UsXG4gICAgICogICBiZWhhdmlvciBkZXBlbmRzIG9uIHdoZXRoZXIgYGJ5dGVzYCBpcyBkZWZpbmVkIG9yIG5vdC4gSWYgZGVmaW5lZCwgd2Ugc2ltcGx5XG4gICAgICogICBzdGFzaCB0aGUgYnl0ZSBhcnJheSBpbiBhIE1hcCB1bmRlciBpdHMgVVJMOyBpZiB1bmRlZmluZWQsIHdlIHJldHJpZXZlIHRoZSBhcnJheVxuICAgICAqICAgZnJvbSBzYWlkIE1hcCwgYW5kIGZpbmFsbHkgZG8gYWN0dWFsbHkgc3RvcmUgaXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBvcGVyYXRpb24gaXMgY29tcGxldGVcbiAgICAgKi9cbiAgICBzdG9yZVBkZkJ5dGVzKHsgdXJsLCBieXRlcywgZGVsYXllZCB9KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBUaGlzIGlzIGEgZG93bmxvYWQgbWFuYWdlciBpbnRlbmRlZCBmb3IgdXNlIGF0IHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCBsZXZlbC5cbiAqXG4gKiBUaGlzIHJlZmxlY3RzIG91ciBkZWNpc2lvbiB0byBsZXQgdGhlIEJHUyBtYW5hZ2UgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZlxuICogb3VyIENhY2hlSW5kZXggY2xhc3MuIFRoaXMgbWFrZXMgc2Vuc2UsIHNpbmNlIHdlIHdhbnQgdGhlIENhY2hlSW5kZXggdG8gbGl2ZVxuICogaW4gbWVtb3J5IGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIGJyb3dzZXIncyBydW50aW1lLCBhbmQgaW4gdGhlIEJHUyB3aGVyZSBpdFxuICogaXMgYWNjZXNzaWJsZSB0byBlYWNoIENTIHJ1bm5pbmcgaW4gZWFjaCBicm93c2VyIHRhYi5cbiAqXG4gKiBUaGUgbWFuYWdlciBpcyBjb25zdHJ1Y3RlZCB3aXRoIGEgcmVmZXJlbmNlIHRvIHRoZSBDYWNoZUluZGV4LCBhbmQgdXNlcyBpdFxuICogZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBCZ3NEb3dubG9hZE1nciBleHRlbmRzIEFic3RyYWN0RG93bmxvYWRNZ3Ige1xuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gY2FjaGVJbmRleCB7Q2FjaGVJbmRleH0gYW4gaW5zdGFuY2Ugb2YgdGhlIENhY2hlSW5kZXggY2xhc3MgZGVmaW5lZFxuICAgICAqICAgaW4gb3VyIGNhY2hlLmpzIG1vZHVsZSwgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGNvbnRlbnRzIG9mIG91ciBQREYgY2FjaGUuXG4gICAgICogQHBhcmFtIG9wdGlvbnMge1xuICAgICAqICAgZG9EZWxheWVkU3RvcmFnZSB7Ym9vbH0gZmFsc2UgbWVhbnMgc3RvcmUgaW1tZWRpYXRlbHkgYWZ0ZXIgZmV0Y2g7IHRydWUgbWVhbnNcbiAgICAgKiAgICAgIHdhaXQgdW50aWwgYHN0b3JlUGRmQnl0ZXNgIGlzIGNhbGxlZCBhZ2FpbiB3aXRoIG1hdGNoaW5nIFVSTCBhbmQgdW5kZWZpbmVkIGJ5dGVzLlxuICAgICAqIH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWNoZUluZGV4LCB7XG4gICAgICAgIGRvRGVsYXllZFN0b3JhZ2UgPSB0cnVlLFxuICAgIH0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jYWNoZUluZGV4ID0gY2FjaGVJbmRleDtcbiAgICAgICAgdGhpcy5kZWxheWVkQnl0ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuZG9EZWxheWVkU3RvcmFnZSA9IGRvRGVsYXllZFN0b3JhZ2U7XG4gICAgfVxuXG4gICAgYWNjZXNzUGRmQ2FjaGVJbmZvKHsgdXJsIH0pIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhY2hlSW5kZXguYWNjZXNzKHVybCkpO1xuICAgIH1cblxuICAgIGFkZE5ld1BkZkNhY2hlSW5mbyh7IHVybCwgc2l6ZSB9KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jYWNoZUluZGV4LmFkZFBkZih1cmwsIHNpemUpKTtcbiAgICB9XG5cbiAgICBzdG9yZVBkZkJ5dGVzKHsgdXJsLCBieXRlcywgZGVsYXllZCB9KSB7XG4gICAgICAgIGlmIChkZWxheWVkKSB7XG4gICAgICAgICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBZb3Ugc2FpZCBcImRlbGF5ZWRcIiBhbmQgeW91IHByb3ZpZGVkIGJ5dGVzLiBUaGlzIG1lYW5zIHlvdSB3YW50IHRvIHN0YXNoXG4gICAgICAgICAgICAgICAgLy8gdGhlbSBub3csIHRvIGJlIHN0b3JlZCBsYXRlci5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdzdGFzaGluZyBQREYgZm9yIGRlbGF5ZWQgc3RvcmFnZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsYXllZEJ5dGVzLnNldCh1cmwsIGJ5dGVzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGVsYXllZEJ5dGVzLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICAgICAgLy8gWW91IHNhaWQgXCJkZWxheWVkXCIsIGFuZCB5b3UgZGlkbid0IHByb3ZpZGUgYnl0ZXMsIGJ1dCB3ZSBmb3VuZCBzdGFzaGVkIGJ5dGVzXG4gICAgICAgICAgICAgICAgLy8gdW5kZXIgdGhlIGdpdmVuIFVSTC4gVGhpcyBtZWFucyBpdCdzIHRpbWUgdG8gY29tcGxldGUgdGhpcyBkZWxheWVkIHN0b3JhZ2UuXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygncmV0cmlldmluZyBQREYgZm9yIGRlbGF5ZWQgc3RvcmFnZScpO1xuICAgICAgICAgICAgICAgIGJ5dGVzID0gdGhpcy5kZWxheWVkQnl0ZXMuZ2V0KHVybCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxheWVkQnl0ZXMuZGVsZXRlKHVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFlvdSBzYWlkIFwiZGVsYXllZFwiLCBhbmQgeW91IGRpZG4ndCBwcm92aWRlIGJ5dGVzLCBhbmQgd2UgZGlkbid0IGZpbmQgYW55IHN0YXNoZWRcbiAgICAgICAgICAgICAgICAvLyBieXRlcyBlaXRoZXIuIFRoaXMganVzdCBtZWFucyB0aGUgZGVsYXllZCBzdG9yYWdlIHdhcyBhbHJlYWR5IGNvbXBsZXRlZCBlYXJsaWVyLFxuICAgICAgICAgICAgICAgIC8vIGFuZCB3ZSBoYXZlIG5vdGhpbmcgdG8gZG8uXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcobmV3IERhdGUoKSwgJ3N0b3JpbmcgUERGLi4uJyk7XG4gICAgICAgIHJldHVybiBzZXRCeXRlQXJyYXkodXJsLCBieXRlcywgdGhpcy5jYWNoZUluZGV4KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcobmV3IERhdGUoKSwgJ2ZpbmlzaGVkIHN0b3JpbmcgUERGJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRQZGZCeXRlcyh7IHVybCB9KSB7XG4gICAgICAgIHJldHVybiBnZXRCeXRlQXJyYXkodXJsKTtcbiAgICB9XG5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qXG4gKiBUaGlzIGlzIGEgZG93bmxvYWQgbWFuYWdlciBpbnRlbmRlZCBmb3IgdXNlIGF0IHRoZSBjb250ZW50IHNjcmlwdCBsZXZlbC5cbiAqXG4gKiBIZXJlIHlvdSBoYXZlIG9wdGlvbnMgYWJvdXQgd2hlcmUgY2FjaGUgcmVhZHMgc2hvdWxkIHRha2UgcGxhY2UgKENTIG9yIEJHUyksXG4gKiBhbmQsIG9uIEZpcmVmb3gsIHdoZXJlIGZldGNoIHNob3VsZCB0YWtlIHBsYWNlLCBhZ2FpbiBDUyBvciBCR1MuIE9uIENocm9tZSxcbiAqIGZldGNoIGlzIG9ubHkgYWxsb3dlZCBpbiBCR1MuXG4gKi9cbmV4cG9ydCBjbGFzcyBDc0Rvd25sb2FkTWdyIGV4dGVuZHMgQWJzdHJhY3REb3dubG9hZE1nciB7XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSBjc1BlZXIge0NzQmdzUGVlcn0gQ1Mtc2lkZSBwZWVyIGZvciBjb25uZWN0aW5nIHRvIEJHUy5cbiAgICAgKiBAcGFyYW0gYmdQZWVyTmFtZSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgQkdTLXNpZGUgcGVlciB0byB3aGljaCB3ZSB3aWxsIG1ha2UgcmVxdWVzdHMuXG4gICAgICogQHBhcmFtIGJnRGxtTmFtZSB7c3RyaW5nfSB0aGUgbmFtZSB1bmRlciB3aGljaCB0aGUgQkcncyBEb3dubG9hZE1hbmFnZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqICAgYXMgYSBoYW5kbGVyIGluIHRoZSBCR1Mtc2lkZSBwZWVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNzUGVlciwgYmdQZWVyTmFtZSwgYmdEbG1OYW1lKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY3NQZWVyID0gY3NQZWVyO1xuICAgICAgICB0aGlzLmJnUGVlck5hbWUgPSBiZ1BlZXJOYW1lO1xuICAgICAgICB0aGlzLmJnRGxtTmFtZSA9IGJnRGxtTmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeUJnID0gdGhpcy5jc1BlZXIubWFrZVJlcXVlc3QuYmluZCh0aGlzLmNzUGVlcik7XG4gICAgfVxuXG4gICAgY2hlY2tDb25maWdWYWx1ZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5QmcodGhpcy5iZ1BlZXJOYW1lLCAncmVhZENvbmZpZ1ZhcicsIHtuYW1lfSk7XG4gICAgfVxuXG4gICAgLyogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBwYXNzaW5nIGEgcmVxdWVzdCAodmlhIG91ciBgQ2xpZW50Rm9yQmdTZXJ2ZXJgIGluc3RhbmNlKSB0b1xuICAgICAqIHRoZSBiYWNrZ3JvdW5kIGRvd25sb2FkIG1hbmFnZXIsIGkuZS4gdGhlIGBCZ3NEb3dubG9hZE1ncmAgaW5zdGFudGlhdGVkIGluIG91ciBCR1MuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kTmFtZSB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgbWV0aG9kIGluIHRoZSBgQmdzRG93bmxvYWRNZ3JgIGNsYXNzIHlvdVxuICAgICAqICAgd2lzaCB0byBjYWxsLlxuICAgICAqIEBwYXJhbSBhcmdzIHtvYmp9IHRoZSBhcmd1bWVudHMgb2JqZWN0IHRoZSBtZXRob2QgZXhwZWN0cy5cbiAgICAgKiBAcmV0dXJuOiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBtZXRob2QgY2FsbGVkLCBmb3J3YXJkZWQgYWNyb3NzIHRoZSBQb3J0IGxpbmsgYmV0d2VlblxuICAgICAqICAgQ1MgYW5kIEJHUy4gQmUgc3VyZSB0byByZXF1ZXN0IG9ubHkgcmV0dXJuIHZhbHVlcyB0aGF0IGFyZSBKU09OIHNlcmlhbGl6YWJsZSFcbiAgICAgKi9cbiAgICB1c2VCZ0RsbShtZXRob2ROYW1lLCBhcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5QmcodGhpcy5iZ1BlZXJOYW1lLCBgJHt0aGlzLmJnRGxtTmFtZX0uJHttZXRob2ROYW1lfWAsIGFyZ3MpO1xuICAgIH1cblxuICAgIGFjY2Vzc1BkZkNhY2hlSW5mbyhhcmdzKSB7XG4gICAgICAgIC8vIFRoZSBCR1Mgb3ducyB0aGUgc2luZ2xldG9uIENhY2hlSW5kZXggaW5zdGFuY2UsIHNvIHdlIGRlZmVyLlxuICAgICAgICByZXR1cm4gdGhpcy51c2VCZ0RsbSgnYWNjZXNzUGRmQ2FjaGVJbmZvJywgYXJncyk7XG4gICAgfVxuXG4gICAgYWRkTmV3UGRmQ2FjaGVJbmZvKGFyZ3MpIHtcbiAgICAgICAgLy8gVGhlIEJHUyBvd25zIHRoZSBzaW5nbGV0b24gQ2FjaGVJbmRleCBpbnN0YW5jZSwgc28gd2UgZGVmZXIuXG4gICAgICAgIHJldHVybiB0aGlzLnVzZUJnRGxtKCdhZGROZXdQZGZDYWNoZUluZm8nLCBhcmdzKTtcbiAgICB9XG5cbiAgICBjaGVja0hvc3RQZXJtaXNzaW9uKGFyZ3MpIHtcbiAgICAgICAgLy8gV2UncmUgbm90IGFsbG93ZWQgdG8gd29yayB3aXRoIGBicm93c2VyLnBlcm1pc3Npb25zYCBpbiBDUywgc28gZGVmZXIgdG8gQkdTIGZvciB0aGlzLlxuICAgICAgICByZXR1cm4gdGhpcy51c2VCZ0RsbSgnY2hlY2tIb3N0UGVybWlzc2lvbicsIGFyZ3MpO1xuICAgIH1cblxuICAgIHJlYWRQZGZCeXRlcyh7IHVybCB9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29uZmlnVmFsdWUoJ3JlYWRTdG9yYWdlSW5CZycpLnRoZW4ocmVhZFN0b3JhZ2VJbkJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZWFkU3RvcmFnZUluQmcgP1xuICAgICAgICAgICAgICAgIHRoaXMudXNlQmdEbG0oJ3JlYWRQZGZCeXRlcycsIHt1cmw6IHVybH0pIDpcbiAgICAgICAgICAgICAgICBnZXRCeXRlQXJyYXkodXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG93bmxvYWRQZGYoe3VybCwgYXNQbGFpbkFycmF5ID0gZmFsc2V9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29uZmlnVmFsdWUoJ2ZldGNoSW5CZycpLnRoZW4oZmV0Y2hJbkJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaEluQmcgP1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGZldGNoaW5nIGluIHRoZSBiYWNrZ3JvdW5kLCB0aGVuIHdlIGFjdHVhbGx5IHdhbnQgdG8gZGVmZXIgdG8gdGhlIEJHIGRsbSdzXG4gICAgICAgICAgICAgICAgLy8gZnVsbCBgZ2V0UGRmYCBtZXRob2QgKG5vdCBqdXN0IGl0cyBgZG93bmxvYWRQZGZgIG1ldGhvZCksIHNpbmNlIHdlIHdhbnQgdGhlIGNoYW5jZSB0b1xuICAgICAgICAgICAgICAgIC8vIGhpdCB0aGUgYGZyb21NZW1vcnlgIGNhc2UuIEFsc28gd2UgbXVzdCByZXF1ZXN0IHRoZSBieXRlIGFycmF5IGFzIHBsYWluIGFycmF5LCBhbmQgdGhlblxuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgaXQgaW50byBhIFVpbnQ4QXJyYXkgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgIHRoaXMudXNlQmdEbG0oJ2dldFBkZicsIHt1cmw6IHVybCwgYXNQbGFpbkFycmF5OiB0cnVlfSkudGhlbihpbmZvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5ieXRlcyA9IG5ldyBVaW50OEFycmF5KGluZm8uYnl0ZXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgZmV0Y2hpbmcgaW4gZm9yZWdyb3VuZCwganVzdCBmb2xsb3cgdGhlIHN0YW5kYXJkIHByb2NlZHVyZS5cbiAgICAgICAgICAgICAgICBzdXBlci5kb3dubG9hZFBkZih7dXJsOiB1cmx9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RvcmVQZGZCeXRlcyhhcmdzKSB7XG4gICAgICAgIC8vIFdyaXRpbmcgdG8gc3RvcmFnZSBmcm9tIENTIGJsb2NrcyB0aGUgbWFpbiB0aHJlYWQsIGFuZCB0aGUgc3Bpbm5lciBmcmVlemVzLFxuICAgICAgICAvLyBzbyB3ZSBhc2sgdGhlIEJHUyB0byBkbyBpdC4gSW4gRmlyZWZveCAod2hlcmUgdGhpcyBtYXR0ZXJzLCBzaW5jZSB3ZSdyZSBhbGxvd2VkIHRvIGZldGNoIGluIENTKSxcbiAgICAgICAgLy8gd3JpdGluZyB0byBzdG9yYWdlIGlzIFZFUlkgc2xvdywgYnV0IHNlbmRpbmcgYSBQREYgdG8gQkdTIG92ZXIgUG9ydCBpcyBtdWNoIGZhc3RlciAoYnkgYSBmYWN0b3JcbiAgICAgICAgLy8gb2YgYWJvdXQgNC4zIHRvIDUuMCBpbiBteSB0ZXN0cyBpbiBGaXJlZm94REUgODIuMGI3IG9uIGEgMjAxOSBNYWNCb29rIFBybykuXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ0NTIGRvd25sb2FkIG1nciBkZWZlcnJpbmcgdG8gQkdTJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZUJnRGxtKCdzdG9yZVBkZkJ5dGVzJywgYXJncyk7XG4gICAgfVxuXG4gICAgY29tcGxldGVEZWxheWVkUGRmU3RvcmFnZSh7IHVybCB9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlUGRmQnl0ZXMoe3VybDogdXJsLCBkZWxheWVkOiB0cnVlfSk7XG4gICAgfVxuXG59XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqICBQcm9vZnNjYXBlIEJyb3dzZXIgRXh0ZW5zaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgQ29weXJpZ2h0IChjKSAyMDIwLTIwMjIgUHJvb2ZzY2FwZSBjb250cmlidXRvcnMgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7ICAgICAgICAgICpcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICAgICAgICAgKlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSAgICAgICpcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsICAgICAgICAqXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICpcbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kICAgICAgKlxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IGJyb3dzZXIgPSByZXF1aXJlKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIpO1xuXG5pbXBvcnQge1xuICAgIEZldGNoUmVzb2x2ZWROb3RPa0Vycm9yLFxuICAgIEZldGNoV3JvbmdDb250ZW50VHlwZUVycm9yLFxufSBmcm9tIFwiYnJvd3Nlci1wZWVycy9zcmMvZXJyb3JzXCI7XG5cbi8qXG4gKiBGZXRjaCBhIFBERiBhbmQgcmV0dXJuIGl0cyBVaW50OEFycmF5LlxuICogVGhyb3cgYW4gZXJyb3IgaWYgdGhlIEhUVFAgcmVzcG9uc2UgZG9lcyBub3QgY29tZSBiYWNrIGBva2Agb3IgaWYgd2UgZG8gbm90XG4gKiBnZXQgYSBDb250ZW50LVR5cGUgaGVhZGVyIGVxdWFsIHRvIFwiYXBwbGljYXRpb24vcGRmXCIuXG4gKi9cbmZ1bmN0aW9uIGZldGNoUGRmKHVybCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgIGlmICghcmVzcC5vaykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBGZXRjaFJlc29sdmVkTm90T2tFcnJvcihyZXNwKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSAhPT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRmV0Y2hXcm9uZ0NvbnRlbnRUeXBlRXJyb3IocmVzcCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZS5zZXJpYWxpemUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcC5hcnJheUJ1ZmZlcigpLnRoZW4oYnVmZmVyID0+IG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8qXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHRpbWUsIGluIGEgZm9ybWF0IHN1Y2ggdGhhdFxuICogbGV4aWNvZ3JhcGhpYyBjb21wYXJpc29uIG9mIHN0cmluZ3MgcmVwcm9kdWNlcyB0aGUgdGVtcG9yYWwgb3JkZXJpbmcuXG4gKi9cbmZ1bmN0aW9uIG5vd1N0YW1wTGV4KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG59XG5cbi8qXG4gKiBEZWxldGUgYWJzb2x1dGVseSBldmVyeXRoaW5nIG91dCBvZiB0aGlzIGV4dGVuc2lvbidzIGxvY2FsIHN0b3JhZ2UuXG4gKiBPY2Nhc2lvbmFsbHkgdXNlZnVsIGR1cmluZyBkZXZlbG9wbWVudC5cbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVyeXRoaW5nKCkge1xuICAgIGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5jbGVhcigpO1xufVxuXG4vKlxuICogUmV0cmlldmUgYWJzb2x1dGVseSBldmVyeXRoaW5nIGZyb20gdGhpcyBleHRlbnNpb24ncyBsb2NhbCBzdG9yYWdlLlxuICogQ291bGQgYmUgdXNlZnVsIGluIGNhc2UgeW91ciBpbmRleCBiZWNhbWUgY29ycnVwdGVkLCBvciB5b3UganVzdFxuICogd2FudGVkIHRvIF9jaGVja18gdGhhdCBpdCB3YXMgc3RpbGwgdHJhY2tpbmcgcHJvcGVybHk/XG4gKiBJIG1haW5seSB3cml0ZSB0aGUgZnVuY3Rpb24gaW4gb3JkZXIgdG8gcmVjb3JkIHRoZSB3YXkgdGhpcyBpc1xuICogYWNoaWV2ZWQgKGkuZS4gYGdldChudWxsKWApLlxuICogSXQgaXMgZG9jdW1lbnRlZCBbaGVyZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Nb3ppbGxhL0FkZC1vbnMvV2ViRXh0ZW5zaW9ucy9BUEkvc3RvcmFnZS9TdG9yYWdlQXJlYS9nZXQpXG4gKiBidXQgaXQgaXMgYSBzb21ld2hhdCBzdWJ0bGUgcG9pbnQuIEFsc28gdXNlZnVsIGR1cmluZyBkZXZlbG9wbWVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0RXZlcnl0aGluZygpIHtcbiAgICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChudWxsKTtcbn1cblxuZXhwb3J0IHtcbiAgICBmZXRjaFBkZixcbiAgICBub3dTdGFtcExleCxcbiAgICBjbGVhckV2ZXJ5dGhpbmcsXG4gICAgZ2V0RXZlcnl0aGluZyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogIFByb29mc2NhcGUgQnJvd3NlciBFeHRlbnNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBDb3B5cmlnaHQgKGMpIDIwMjAtMjAyMiBQcm9vZnNjYXBlIGNvbnRyaWJ1dG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgICAgICAgICAgKlxuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gICAgICAgICAqXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlICAgICAgKlxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgICAgICAgICpcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gKlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgICAgICAqXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaW1wb3J0IHsgQ3NCZ3NQb3J0Q2xpZW50IH0gZnJvbSBcImJyb3dzZXItcGVlcnMvc3JjL2NzYmdzcGVlclwiO1xuaW1wb3J0IHsgQ3NEb3dubG9hZE1nciB9IGZyb20gXCIuL2Rvd25sb2FkbWdyXCI7XG5pbXBvcnQgeyBFeHRlbnNpb25TZXJ2ZXIgfSBmcm9tIFwiYnJvd3Nlci1wZWVycy9zcmMvZXh0c2VydmVyXCI7XG5cblxuY29uc3Qgc2VydmVyID0gbmV3IEV4dGVuc2lvblNlcnZlcihcbiAgICAncGJlU2VydmVyJywgJ3Bmc2MtZXh0JyxcbiAgICAnI2FwcExheW91dC5wZnNjLWlzZScsICdkYXRhLXBiZS12ZXJzJyxcbiAgICAnZGF0YS1wcm9vZnNjYXBlLWlzZS12ZXJzJ1xuKTtcbnNlcnZlci5hY3RpdmF0ZU9uRG9jdW1lbnRSZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IGJnUGVlck5hbWUgPSAncGZzY0JnUGVlcic7XG4gICAgY29uc3QgcG9ydENsaWVudCA9IG5ldyBDc0Jnc1BvcnRDbGllbnQoYHBmc2NDc1BvcnRDbGllbnQtQCgkeyhuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpfSktJHtNYXRoLnJhbmRvbSgpfWApO1xuICAgIHBvcnRDbGllbnQuY2hlY2tSZWFkeShiZ1BlZXJOYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgY3NEbG0gPSBuZXcgQ3NEb3dubG9hZE1ncihwb3J0Q2xpZW50LCBiZ1BlZXJOYW1lLCAnZGxtJyk7XG4gICAgICAgIHNlcnZlclxuICAgICAgICAgICAgLmFkZEhhbmRsZXIoXCJyZXF1ZXN0LXBkZlwiLCBjc0RsbS5nZXRQZGYuYmluZChjc0RsbSkpXG4gICAgICAgICAgICAuYWRkSGFuZGxlcihcImNvbXBsZXRlLWRlbGF5ZWQtcGRmLXN0b3JhZ2VcIiwgY3NEbG0uY29tcGxldGVEZWxheWVkUGRmU3RvcmFnZS5iaW5kKGNzRGxtKSlcbiAgICAgICAgO1xuICAgICAgICBzZXJ2ZXIuc2V0UmVhZHkoKTtcbiAgICB9KTtcbn0sIHJlYXNvbiA9PiB7XG4gICAgLy8gV2UgaGF2ZSBubyBsaXN0ZW5lcnMgdG8gZGVyZWdpc3Rlciwgb3Igb3RoZXIgbWVtb3J5IGxlYWtzIHRoYXQgd2UncmUgYXdhcmUgb2YuXG4gICAgY29uc29sZS5kZWJ1ZyhyZWFzb24pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=