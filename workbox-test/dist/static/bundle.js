/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/register-service-worker/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/register-service-worker/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"register\": () => (/* binding */ register),\n/* harmony export */   \"unregister\": () => (/* binding */ unregister)\n/* harmony export */ });\n// Register a service worker to serve assets from local cache.\n\n// This lets the app load faster on subsequent visits in production, and gives\n// it offline capabilities. However, it also means that developers (and users)\n// will only see deployed updates on the \"N+1\" visit to a page, since previously\n// cached resources are updated in the background.\n\nvar isLocalhost = function () { return Boolean(\n  window.location.hostname === 'localhost' ||\n    // [::1] is the IPv6 localhost address.\n    window.location.hostname === '[::1]' ||\n    // 127.0.0.1/8 is considered localhost for IPv4.\n    window.location.hostname.match(\n      /^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/\n    )\n); }\n\nvar waitWindowLoad\n// https://github.com/yyx990803/register-service-worker/pull/33#discussion_r394181861\nif (typeof window !== 'undefined') {\n  // Typically, a browser that supports `serviceWorker` should also have supported\n  // `Promise`. But as this package can be used in environments without service\n  // worker support (in that case it would do nothing), there's a chance that\n  // `Promise` does not exist. So we must check for its existence first.\n  if (typeof Promise !== 'undefined') {\n    waitWindowLoad = new Promise(function (resolve) { return window.addEventListener('load', resolve); })\n  } else {\n    waitWindowLoad = { then: function (cb) { return window.addEventListener('load', cb); } }\n  }\n}\n\nfunction register (swUrl, hooks) {\n  if ( hooks === void 0 ) hooks = {};\n\n  var registrationOptions = hooks.registrationOptions; if ( registrationOptions === void 0 ) registrationOptions = {};\n  delete hooks.registrationOptions\n\n  var emit = function (hook) {\n    var args = [], len = arguments.length - 1;\n    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];\n\n    if (hooks && hooks[hook]) {\n      hooks[hook].apply(hooks, args)\n    }\n  }\n\n  if ('serviceWorker' in navigator) {\n    waitWindowLoad.then(function () {\n      if (isLocalhost()) {\n        // This is running on localhost. Lets check if a service worker still exists or not.\n        checkValidServiceWorker(swUrl, emit, registrationOptions)\n        navigator.serviceWorker.ready.then(function (registration) {\n          emit('ready', registration)\n        }).catch(function (error) { return handleError(emit, error); })\n      } else {\n        // Is not local host. Just register service worker\n        registerValidSW(swUrl, emit, registrationOptions)\n        navigator.serviceWorker.ready.then(function (registration) {\n          emit('ready', registration)\n        }).catch(function (error) { return handleError(emit, error); })\n      }\n    })\n  }\n}\n\nfunction handleError (emit, error) {\n  if (!navigator.onLine) {\n    emit('offline')\n  }\n  emit('error', error)\n}\n\nfunction registerValidSW (swUrl, emit, registrationOptions) {\n  navigator.serviceWorker\n    .register(swUrl, registrationOptions)\n    .then(function (registration) {\n      emit('registered', registration)\n      if (registration.waiting) {\n        emit('updated', registration)\n        return\n      }\n      registration.onupdatefound = function () {\n        emit('updatefound', registration)\n        var installingWorker = registration.installing\n        installingWorker.onstatechange = function () {\n          if (installingWorker.state === 'installed') {\n            if (navigator.serviceWorker.controller) {\n              // At this point, the old content will have been purged and\n              // the fresh content will have been added to the cache.\n              // It's the perfect time to display a \"New content is\n              // available; please refresh.\" message in your web app.\n              emit('updated', registration)\n            } else {\n              // At this point, everything has been precached.\n              // It's the perfect time to display a\n              // \"Content is cached for offline use.\" message.\n              emit('cached', registration)\n            }\n          }\n        }\n      }\n    })\n    .catch(function (error) { return handleError(emit, error); })\n}\n\nfunction checkValidServiceWorker (swUrl, emit, registrationOptions) {\n  // Check if the service worker can be found.\n  fetch(swUrl)\n    .then(function (response) {\n      // Ensure service worker exists, and that we really are getting a JS file.\n      if (response.status === 404) {\n        // No service worker found.\n        emit('error', new Error((\"Service worker not found at \" + swUrl)))\n        unregister()\n      } else if (response.headers.get('content-type').indexOf('javascript') === -1) {\n        emit('error', new Error(\n          \"Expected \" + swUrl + \" to have javascript content-type, \" +\n          \"but received \" + (response.headers.get('content-type'))))\n        unregister()\n      } else {\n        // Service worker found. Proceed as normal.\n        registerValidSW(swUrl, emit, registrationOptions)\n      }\n    })\n    .catch(function (error) { return handleError(emit, error); })\n}\n\nfunction unregister () {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(function (registration) {\n      registration.unregister()\n    }).catch(function (error) { return handleError(emit, error); })\n  }\n}\n\n\n//# sourceURL=webpack://workbox-test/./node_modules/register-service-worker/index.js?");

/***/ }),

/***/ "./src/foo.ts":
/*!********************!*\
  !*** ./src/foo.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar name = 'foo';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (name);\n\n\n//# sourceURL=webpack://workbox-test/./src/foo.ts?");

/***/ }),

/***/ "./src/hello.ts":
/*!**********************!*\
  !*** ./src/hello.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foo */ \"./src/foo.ts\");\n\nfunction sayHello() {\n    console.log(\"hello \" + _foo__WEBPACK_IMPORTED_MODULE_0__.default);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sayHello);\n\n\n//# sourceURL=webpack://workbox-test/./src/hello.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var register_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! register-service-worker */ \"./node_modules/register-service-worker/index.js\");\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ \"./src/hello.ts\");\n\n\n(0,_hello__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,register_service_worker__WEBPACK_IMPORTED_MODULE_1__.register)('./service-worker.js', {\n    registrationOptions: { scope: './' },\n    ready: function (registration) {\n        console.log('Service worker is active.');\n    },\n    registered: function (registration) {\n        console.log('Service worker has been registered.');\n    },\n    cached: function (registration) {\n        console.log('Content has been cached for offline use.');\n    },\n    updatefound: function (registration) {\n        console.log('New content is downloading.');\n    },\n    updated: function (registration) {\n        console.log('New content is available; please refresh.');\n    },\n    offline: function () {\n        console.log('No internet connection found. App is running in offline mode.');\n    },\n    error: function (error) {\n        console.error('Error during service worker registration:', error);\n    }\n});\n\n\n//# sourceURL=webpack://workbox-test/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;