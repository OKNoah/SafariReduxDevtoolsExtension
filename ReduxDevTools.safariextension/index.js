/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// import request from 'superagent'
const defaultAttributes = {
  src: 'http://localhost:3001',
  ref: 'ReduxDevtools',
  id: 'ReduxDevtools',
  style: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%'
  }
};
let SafariDevTools = class SafariDevTools {
  constructor(attributes = defaultAttributes) {
    this.frame = document.createElement('iframe');

    for (let attribute in attributes) {
      switch (attribute) {
        case "style":
          for (let prop in attributes[attribute]) {
            this.frame.style[prop] = attributes[attribute][prop];
          }

          break;

        default:
          this.frame.setAttribute(attribute, attributes[attribute]);
      }
    }
  }

  eventHandler(event) {
    console.log('event', event);

    switch (event) {
      case 'toggle-devtools':
        this.remove();
        break;
    }
  }

  append() {
    document.body.append(this.frame);
  }

  remove() {
    console.log('removing');
    delete this.frame.ref;
  }

};
const devTools = new SafariDevTools();
devTools.append();
safari.self.addEventListener("message", devTools.eventHandler, false);

/***/ })
/******/ ]);