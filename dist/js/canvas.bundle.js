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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fonts/AdventPro-Light.ttf":
/*!***************************************!*\
  !*** ./src/fonts/AdventPro-Light.ttf ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ccfdd36efac3732e057236f27ceab7a3.ttf");

/***/ }),

/***/ "./src/fonts/AdventPro-Medium.ttf":
/*!****************************************!*\
  !*** ./src/fonts/AdventPro-Medium.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4dcd0065278d7f38950dac5c35c05b95.ttf");

/***/ }),

/***/ "./src/fonts/AdventPro-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/AdventPro-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "401e09d2873c8d3e15410d13fe22178c.ttf");

/***/ }),

/***/ "./src/fonts/FredokaOne-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/FredokaOne-Regular.ttf ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3888a8fd758c9b59eda47b220ee999df.ttf");

/***/ }),

/***/ "./src/img/Player/Lucas/Flying/Player-flying-1.png":
/*!*********************************************************!*\
  !*** ./src/img/Player/Lucas/Flying/Player-flying-1.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "16bbc850dab299052817a5d9b5b2744a.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Flying/Player-flying-2.png":
/*!*********************************************************!*\
  !*** ./src/img/Player/Lucas/Flying/Player-flying-2.png ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bf44267badd74e0b155302028140c0ca.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(1).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(1).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d2f0f62d6684fbe523b436a3e7c8ac5.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(10).png":
/*!*************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(10).png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "001e19cbe8f6af0aaba0d18e7a889328.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(11).png":
/*!*************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(11).png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a22fe38744bd142202690be6815a1107.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(12).png":
/*!*************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(12).png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "001e19cbe8f6af0aaba0d18e7a889328.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(13).png":
/*!*************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(13).png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "001e19cbe8f6af0aaba0d18e7a889328.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(14).png":
/*!*************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(14).png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a22fe38744bd142202690be6815a1107.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(2).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(2).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bad522df9fd34dc3ebdf9948c33ee4ec.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(3).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(3).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d2f0f62d6684fbe523b436a3e7c8ac5.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(4).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(4).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bad522df9fd34dc3ebdf9948c33ee4ec.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(5).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(5).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d2f0f62d6684fbe523b436a3e7c8ac5.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(6).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(6).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bad522df9fd34dc3ebdf9948c33ee4ec.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(7).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(7).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d2f0f62d6684fbe523b436a3e7c8ac5.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(8).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(8).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bad522df9fd34dc3ebdf9948c33ee4ec.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Idle/Idle-(9).png":
/*!************************************************!*\
  !*** ./src/img/Player/Lucas/Idle/Idle-(9).png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a22fe38744bd142202690be6815a1107.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Jumping/Player-jump-1.png":
/*!********************************************************!*\
  !*** ./src/img/Player/Lucas/Jumping/Player-jump-1.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f198838c2f23e5f80cae821a61601c67.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Jumping/Player-jump-2.png":
/*!********************************************************!*\
  !*** ./src/img/Player/Lucas/Jumping/Player-jump-2.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5ece90d30b1860939df168dffd7701c.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Swimming/Player-swimming-1.png":
/*!*************************************************************!*\
  !*** ./src/img/Player/Lucas/Swimming/Player-swimming-1.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3833e758c68a523cdd874b32d83e2e08.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Swimming/Player-swimming-2.png":
/*!*************************************************************!*\
  !*** ./src/img/Player/Lucas/Swimming/Player-swimming-2.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79ed6b684a0f39c9fe40a0e1a74af2ce.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Swimming/Player-swimming-3.png":
/*!*************************************************************!*\
  !*** ./src/img/Player/Lucas/Swimming/Player-swimming-3.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "34fadde3bdce4c935d8dff9f2b0f251a.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Swimming/Player-swimming-4.png":
/*!*************************************************************!*\
  !*** ./src/img/Player/Lucas/Swimming/Player-swimming-4.png ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bfcd5b1e5ead8d9c37150916486d264a.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-1.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-1.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1fca32a23a0190daa5c0d6e7053ce198.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-10.png":
/*!******************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-10.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0bc6bec6b02d3488f79f0d7aece2cc03.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-11.png":
/*!******************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-11.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b362e0bed48d2f308e70e80c95ea9189.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-12.png":
/*!******************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-12.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7d91fb4137b340559aac716c93214e7d.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-13.png":
/*!******************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-13.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bb5130e11b03ebcc4a6ed44b3d6ae86f.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-14.png":
/*!******************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-14.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a75c9430ae6abc984e40850de20b1ec4.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-15.png":
/*!******************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-15.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "96d3fa33f2e01ee9303f8bcddcbc414f.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-2.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-2.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "06bf9185ca7a62ccd0841b82371e424e.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-3.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-3.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "122cb7cdd75488dd862b2f95a6eecb77.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-4.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-4.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "db439a17e61e55685fa1272ce5b2420d.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-5.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-5.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0b6007427e2f02293b5b2de664fae885.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-6.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-6.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e86dc4305b2eac1a90433fb7727f004.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-7.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-7.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "47fd0593cb7073cd37b74f32c0465c5d.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-8.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-8.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "93acfa6c1b02d4fa354c98352d67640b.png");

/***/ }),

/***/ "./src/img/Player/Lucas/Walk/Player-walk-9.png":
/*!*****************************************************!*\
  !*** ./src/img/Player/Lucas/Walk/Player-walk-9.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e0d66c72ce525470203a434f37a59a81.png");

/***/ }),

/***/ "./src/img/background/background-blue.jpg":
/*!************************************************!*\
  !*** ./src/img/background/background-blue.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e4054ea739347108792e1433b7cf32be.jpg");

/***/ }),

/***/ "./src/img/elements/Portal-1.png":
/*!***************************************!*\
  !*** ./src/img/elements/Portal-1.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d05f3f9227c73934110bef08d52a68fb.png");

/***/ }),

/***/ "./src/img/elements/chest.png":
/*!************************************!*\
  !*** ./src/img/elements/chest.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e37069636d494c8184698ebd49ab770a.png");

/***/ }),

/***/ "./src/img/elements/clouds/cloud-1.png":
/*!*********************************************!*\
  !*** ./src/img/elements/clouds/cloud-1.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "062e71412e06bde681145e592729e074.png");

/***/ }),

/***/ "./src/img/elements/element-sea 1.png":
/*!********************************************!*\
  !*** ./src/img/elements/element-sea 1.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "139e81284cddf8918133273e69667756.png");

/***/ }),

/***/ "./src/img/elements/heart.png":
/*!************************************!*\
  !*** ./src/img/elements/heart.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "eb9e88c5f3dc43cebf34ab54e57651a7.png");

/***/ }),

/***/ "./src/img/elements/hills/hill-1.png":
/*!*******************************************!*\
  !*** ./src/img/elements/hills/hill-1.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/elements/key.png":
/*!**********************************!*\
  !*** ./src/img/elements/key.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "67e62fc1112e090fa976ea6bf7dda212.png");

/***/ }),

/***/ "./src/img/elements/lucas.png":
/*!************************************!*\
  !*** ./src/img/elements/lucas.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "feb5346fde81c7d95c3c91189e2bf9fc.png");

/***/ }),

/***/ "./src/img/elements/money.png":
/*!************************************!*\
  !*** ./src/img/elements/money.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "975697b3110e2fc830f6650183f5bde9.png");

/***/ }),

/***/ "./src/img/elements/pause.png":
/*!************************************!*\
  !*** ./src/img/elements/pause.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9fdf37ddf73617028cde3a9adc30f2ce.png");

/***/ }),

/***/ "./src/img/elements/play.png":
/*!***********************************!*\
  !*** ./src/img/elements/play.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d7c205ac45688f91a80dde6b6203c509.png");

/***/ }),

/***/ "./src/img/elements/trampoline.png":
/*!*****************************************!*\
  !*** ./src/img/elements/trampoline.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a753a5b4e960724e5533591db4910218.png");

/***/ }),

/***/ "./src/img/platform/platform-big.png":
/*!*******************************************!*\
  !*** ./src/img/platform/platform-big.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a760fe720cf3a96c35669203efd4ef6e.png");

/***/ }),

/***/ "./src/img/platform/platform-small.png":
/*!*********************************************!*\
  !*** ./src/img/platform/platform-small.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f69c0be2a3ce23e026de89a1bef167c9.png");

/***/ }),

/***/ "./src/img/tmp_files/Enemies/bat-1.png":
/*!*********************************************!*\
  !*** ./src/img/tmp_files/Enemies/bat-1.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "acc98c4de79b94d58ae96b4225498045.png");

/***/ }),

/***/ "./src/img/tmp_files/Enemies/shark.png":
/*!*********************************************!*\
  !*** ./src/img/tmp_files/Enemies/shark.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e1f22819d016badbf65883652ceeccaa.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_background_background_blue_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background/background-blue.jpg */ "./src/img/background/background-blue.jpg");
/* harmony import */ var _img_elements_clouds_cloud_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/elements/clouds/cloud-1.png */ "./src/img/elements/clouds/cloud-1.png");
/* harmony import */ var _img_elements_hills_hill_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/elements/hills/hill-1.png */ "./src/img/elements/hills/hill-1.png");
/* harmony import */ var _img_elements_money_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/elements/money.png */ "./src/img/elements/money.png");
/* harmony import */ var _img_elements_key_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/elements/key.png */ "./src/img/elements/key.png");
/* harmony import */ var _img_elements_heart_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/elements/heart.png */ "./src/img/elements/heart.png");
/* harmony import */ var _img_elements_pause_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/elements/pause.png */ "./src/img/elements/pause.png");
/* harmony import */ var _img_elements_play_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/elements/play.png */ "./src/img/elements/play.png");
/* harmony import */ var _img_elements_lucas_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/elements/lucas.png */ "./src/img/elements/lucas.png");
/* harmony import */ var _img_elements_chest_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/elements/chest.png */ "./src/img/elements/chest.png");
/* harmony import */ var _img_elements_Portal_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/elements/Portal-1.png */ "./src/img/elements/Portal-1.png");
/* harmony import */ var _img_elements_trampoline_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/elements/trampoline.png */ "./src/img/elements/trampoline.png");
/* harmony import */ var _img_platform_platform_small_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/platform/platform-small.png */ "./src/img/platform/platform-small.png");
/* harmony import */ var _img_platform_platform_big_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/platform/platform-big.png */ "./src/img/platform/platform-big.png");
/* harmony import */ var _fonts_FredokaOne_Regular_ttf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../fonts/FredokaOne-Regular.ttf */ "./src/fonts/FredokaOne-Regular.ttf");
/* harmony import */ var _fonts_AdventPro_Medium_ttf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../fonts/AdventPro-Medium.ttf */ "./src/fonts/AdventPro-Medium.ttf");
/* harmony import */ var _fonts_AdventPro_Regular_ttf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../fonts/AdventPro-Regular.ttf */ "./src/fonts/AdventPro-Regular.ttf");
/* harmony import */ var _fonts_AdventPro_Light_ttf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../fonts/AdventPro-Light.ttf */ "./src/fonts/AdventPro-Light.ttf");
/* harmony import */ var _levelConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./levelConfig */ "./src/js/levelConfig.js");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(1).png */ "./src/img/Player/Lucas/Idle/Idle-(1).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(2).png */ "./src/img/Player/Lucas/Idle/Idle-(2).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_3_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(3).png */ "./src/img/Player/Lucas/Idle/Idle-(3).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_4_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(4).png */ "./src/img/Player/Lucas/Idle/Idle-(4).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_5_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(5).png */ "./src/img/Player/Lucas/Idle/Idle-(5).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_6_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(6).png */ "./src/img/Player/Lucas/Idle/Idle-(6).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_7_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(7).png */ "./src/img/Player/Lucas/Idle/Idle-(7).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_8_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(8).png */ "./src/img/Player/Lucas/Idle/Idle-(8).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_9_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(9).png */ "./src/img/Player/Lucas/Idle/Idle-(9).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_10_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(10).png */ "./src/img/Player/Lucas/Idle/Idle-(10).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_11_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(11).png */ "./src/img/Player/Lucas/Idle/Idle-(11).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_12_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(12).png */ "./src/img/Player/Lucas/Idle/Idle-(12).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_13_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(13).png */ "./src/img/Player/Lucas/Idle/Idle-(13).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_14_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(14).png */ "./src/img/Player/Lucas/Idle/Idle-(14).png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_1_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-1.png */ "./src/img/Player/Lucas/Walk/Player-walk-1.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_2_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-2.png */ "./src/img/Player/Lucas/Walk/Player-walk-2.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_3_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-3.png */ "./src/img/Player/Lucas/Walk/Player-walk-3.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_4_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-4.png */ "./src/img/Player/Lucas/Walk/Player-walk-4.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_5_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-5.png */ "./src/img/Player/Lucas/Walk/Player-walk-5.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_6_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-6.png */ "./src/img/Player/Lucas/Walk/Player-walk-6.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_7_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-7.png */ "./src/img/Player/Lucas/Walk/Player-walk-7.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_8_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-8.png */ "./src/img/Player/Lucas/Walk/Player-walk-8.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_9_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-9.png */ "./src/img/Player/Lucas/Walk/Player-walk-9.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_10_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-10.png */ "./src/img/Player/Lucas/Walk/Player-walk-10.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_11_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-11.png */ "./src/img/Player/Lucas/Walk/Player-walk-11.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_12_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-12.png */ "./src/img/Player/Lucas/Walk/Player-walk-12.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_13_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-13.png */ "./src/img/Player/Lucas/Walk/Player-walk-13.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_14_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-14.png */ "./src/img/Player/Lucas/Walk/Player-walk-14.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_15_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-15.png */ "./src/img/Player/Lucas/Walk/Player-walk-15.png");
/* harmony import */ var _img_Player_Lucas_Jumping_Player_jump_1_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../img/Player/Lucas/Jumping/Player-jump-1.png */ "./src/img/Player/Lucas/Jumping/Player-jump-1.png");
/* harmony import */ var _img_Player_Lucas_Jumping_Player_jump_2_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../img/Player/Lucas/Jumping/Player-jump-2.png */ "./src/img/Player/Lucas/Jumping/Player-jump-2.png");
/* harmony import */ var _img_Player_Lucas_Flying_Player_flying_1_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../img/Player/Lucas/Flying/Player-flying-1.png */ "./src/img/Player/Lucas/Flying/Player-flying-1.png");
/* harmony import */ var _img_Player_Lucas_Flying_Player_flying_2_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../img/Player/Lucas/Flying/Player-flying-2.png */ "./src/img/Player/Lucas/Flying/Player-flying-2.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_1_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-1.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-1.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_2_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-2.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-2.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_3_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-3.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-3.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_4_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-4.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-4.png");
/* harmony import */ var _img_tmp_files_Enemies_bat_1_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../img/tmp_files/Enemies/bat-1.png */ "./src/img/tmp_files/Enemies/bat-1.png");
/* harmony import */ var _img_tmp_files_Enemies_shark_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../img/tmp_files/Enemies/shark.png */ "./src/img/tmp_files/Enemies/shark.png");
/* harmony import */ var _img_elements_element_sea_1_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../img/elements/element-sea 1.png */ "./src/img/elements/element-sea 1.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




















// Player sprites - Idle














// Player sprites - Walk















// Player sprites - Jump


// Player sprites - Glide


// Player sprites - Swimming







var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var gravity = 1;
var minCanvasWidth = 1024;
var minCanvasHeight = 576;
var hudBarHeight = 58;
var titleFontFamily = 'Fredoka One';
var buttonFontFamily = 'Advent Pro Medium';
var bodyFontFamily = 'Advent Pro';
var bodyLightFontFamily = 'Advent Pro Light';
function loadFonts() {
  if (!('fonts' in document)) {
    return;
  }
  var fontFaces = [new FontFace(titleFontFamily, "url(".concat(_fonts_FredokaOne_Regular_ttf__WEBPACK_IMPORTED_MODULE_14__["default"], ")")), new FontFace(buttonFontFamily, "url(".concat(_fonts_AdventPro_Medium_ttf__WEBPACK_IMPORTED_MODULE_15__["default"], ")")), new FontFace(bodyFontFamily, "url(".concat(_fonts_AdventPro_Regular_ttf__WEBPACK_IMPORTED_MODULE_16__["default"], ")")), new FontFace(bodyLightFontFamily, "url(".concat(_fonts_AdventPro_Light_ttf__WEBPACK_IMPORTED_MODULE_17__["default"], ")"))];
  Promise.all(fontFaces.map(function (fontFace) {
    return fontFace.load();
  })).then(function (loadedFonts) {
    loadedFonts.forEach(function (fontFace) {
      document.fonts.add(fontFace);
    });
  })["catch"](function () {});
}
function resizeCanvasToViewport() {
  canvas.width = Math.max(minCanvasWidth, window.innerWidth);
  canvas.height = Math.max(minCanvasHeight, window.innerHeight);
}
resizeCanvasToViewport();
loadFonts();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height,
      image = _ref.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.width = width !== null && width !== void 0 ? width : image.width;
    this.height = height !== null && height !== void 0 ? height : image.height;
    this.image = image;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      var drawWidth = this.width > 0 ? this.width : this.image.naturalWidth || this.image.width || 0;
      var drawHeight = this.height > 0 ? this.height : this.image.naturalHeight || this.image.height || 0;
      if (drawWidth > 0 && drawHeight > 0) {
        c.drawImage(this.image, this.position.x, this.position.y, drawWidth, drawHeight);
      }
    }
  }]);
  return GenericObject;
}();
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.width = 72;
    this.height = 96;
    // Hitbox is 28% smaller than the visual sprite, centered on it
    this.hitboxWidth = Math.round(72 * 0.72);
    this.hitboxHeight = Math.round(96 * 0.72);
    this.position = {
      x: canvas.width / 2 - this.hitboxWidth / 2,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.onGround = false;
    this.facingRight = true;
    this.animFrame = 0;
    this.animTimer = 0;
    this.animState = 'idle';
    this.glideWindowFrames = 0;
    this.glideArmed = false;
  }
  _createClass(Player, [{
    key: "getFrames",
    value: function getFrames() {
      switch (this.animState) {
        case 'walk':
          return {
            frames: playerWalkFrames,
            speed: 8
          };
        case 'jump':
          return {
            frames: playerJumpFrames,
            speed: 14
          };
        case 'glide':
          return {
            frames: playerFlyFrames,
            speed: 10
          };
        case 'swim':
          return {
            frames: playerSwimFrames,
            speed: 11
          };
        default:
          return {
            frames: playerIdleFrames,
            speed: 10
          };
      }
    }
  }, {
    key: "updateAnimState",
    value: function updateAnimState() {
      if (this.inWater) {
        this.animState = 'swim';
      } else if (!this.onGround && keys.up.pressed && (flyAbilityFrames > 0 || this.glideArmed)) {
        this.animState = 'glide';
      } else if (!this.onGround) {
        this.animState = 'jump';
      } else if (keys.left.pressed || keys.right.pressed) {
        this.animState = 'walk';
      } else {
        this.animState = 'idle';
      }
      if (keys.right.pressed) this.facingRight = true;
      if (keys.left.pressed) this.facingRight = false;
    }
  }, {
    key: "draw",
    value: function draw() {
      var prevState = this.animState;
      this.updateAnimState();
      if (this.animState !== prevState) {
        this.animFrame = 0;
        this.animTimer = 0;
      }
      var _this$getFrames = this.getFrames(),
        frames = _this$getFrames.frames,
        speed = _this$getFrames.speed;
      if (this.animFrame >= frames.length) {
        this.animFrame = 0;
        this.animTimer = 0;
      }
      this.animTimer++;
      if (this.animTimer >= speed) {
        this.animTimer = 0;
        this.animFrame = (this.animFrame + 1) % frames.length;
      }
      var frame = frames[this.animFrame];
      if (!frame || !frame.complete || frame.naturalWidth === 0) return;
      var drawScale = this.animState === 'glide' ? 1.5 : 1;
      var drawWidth = this.width * drawScale;
      var drawHeight = this.height * drawScale;

      // Offset sprite so it is visually centered on the hitbox
      var offsetX = (this.hitboxWidth - drawWidth) / 2;
      var offsetY = (this.hitboxHeight - drawHeight) / 2;
      c.save();
      if (!this.facingRight) {
        c.scale(-1, 1);
        c.drawImage(frame, -(this.position.x + offsetX + drawWidth), this.position.y + offsetY, drawWidth, drawHeight);
      } else {
        c.drawImage(frame, this.position.x + offsetX, this.position.y + offsetY, drawWidth, drawHeight);
      }
      c.restore();
    }
  }, {
    key: "update",
    value: function update(platforms) {
      var _this = this;
      // Resolve horizontal movement first so side collisions don't push vertically.
      this.position.x += this.velocity.x;
      platforms.forEach(function (platform) {
        // Only treat as a side collision if the player is genuinely overlapping
        // the platform vertically by more than a small tolerance (prevents corner
        // grazes from teleporting the player up).
        var verticalOverlap = Math.min(_this.position.y + _this.hitboxHeight, platform.position.y + platform.height) - Math.max(_this.position.y, platform.position.y);
        var sideCollisionTolerance = 4;
        if (verticalOverlap > sideCollisionTolerance && _this.position.x < platform.position.x + platform.width && _this.position.x + _this.hitboxWidth > platform.position.x && _this.position.y < platform.position.y + platform.height && _this.position.y + _this.hitboxHeight > platform.position.y) {
          if (_this.velocity.x > 0) {
            _this.position.x = platform.position.x - _this.hitboxWidth;
          } else if (_this.velocity.x < 0) {
            _this.position.x = platform.position.x + platform.width;
          }
          _this.velocity.x = 0;
        }
      });
      this.onGround = false;
      this.velocity.y += gravity;
      var prevBottomY = this.position.y + this.hitboxHeight; // bottom before this frame's Y move
      this.position.y += this.velocity.y;
      platforms.forEach(function (platform) {
        if (_this.position.x < platform.position.x + platform.width && _this.position.x + _this.hitboxWidth > platform.position.x && _this.position.y < platform.position.y + platform.height && _this.position.y + _this.hitboxHeight > platform.position.y) {
          if (_this.velocity.y > 0 && prevBottomY <= platform.position.y + 2) {
            // Falling down onto a platform — only land if approaching from above
            _this.position.y = platform.position.y - _this.hitboxHeight;
            _this.onGround = true;
          } else if (_this.velocity.y < 0) {
            // Hitting a ceiling
            _this.position.y = platform.position.y + platform.height;
          }
          _this.velocity.y = 0;
        }
      });
      this.draw();
    }
  }]);
  return Player;
}(); //images
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

// Player sprite frame arrays (built after createImage is defined)
var playerIdleFrames = [_img_Player_Lucas_Idle_Idle_1_png__WEBPACK_IMPORTED_MODULE_19__["default"], _img_Player_Lucas_Idle_Idle_2_png__WEBPACK_IMPORTED_MODULE_20__["default"], _img_Player_Lucas_Idle_Idle_3_png__WEBPACK_IMPORTED_MODULE_21__["default"], _img_Player_Lucas_Idle_Idle_4_png__WEBPACK_IMPORTED_MODULE_22__["default"], _img_Player_Lucas_Idle_Idle_5_png__WEBPACK_IMPORTED_MODULE_23__["default"], _img_Player_Lucas_Idle_Idle_6_png__WEBPACK_IMPORTED_MODULE_24__["default"], _img_Player_Lucas_Idle_Idle_7_png__WEBPACK_IMPORTED_MODULE_25__["default"], _img_Player_Lucas_Idle_Idle_8_png__WEBPACK_IMPORTED_MODULE_26__["default"], _img_Player_Lucas_Idle_Idle_9_png__WEBPACK_IMPORTED_MODULE_27__["default"], _img_Player_Lucas_Idle_Idle_10_png__WEBPACK_IMPORTED_MODULE_28__["default"], _img_Player_Lucas_Idle_Idle_11_png__WEBPACK_IMPORTED_MODULE_29__["default"], _img_Player_Lucas_Idle_Idle_12_png__WEBPACK_IMPORTED_MODULE_30__["default"], _img_Player_Lucas_Idle_Idle_13_png__WEBPACK_IMPORTED_MODULE_31__["default"], _img_Player_Lucas_Idle_Idle_14_png__WEBPACK_IMPORTED_MODULE_32__["default"]].map(createImage);
var playerWalkFrames = [_img_Player_Lucas_Walk_Player_walk_1_png__WEBPACK_IMPORTED_MODULE_33__["default"], _img_Player_Lucas_Walk_Player_walk_2_png__WEBPACK_IMPORTED_MODULE_34__["default"], _img_Player_Lucas_Walk_Player_walk_3_png__WEBPACK_IMPORTED_MODULE_35__["default"], _img_Player_Lucas_Walk_Player_walk_4_png__WEBPACK_IMPORTED_MODULE_36__["default"], _img_Player_Lucas_Walk_Player_walk_5_png__WEBPACK_IMPORTED_MODULE_37__["default"], _img_Player_Lucas_Walk_Player_walk_6_png__WEBPACK_IMPORTED_MODULE_38__["default"], _img_Player_Lucas_Walk_Player_walk_7_png__WEBPACK_IMPORTED_MODULE_39__["default"], _img_Player_Lucas_Walk_Player_walk_8_png__WEBPACK_IMPORTED_MODULE_40__["default"], _img_Player_Lucas_Walk_Player_walk_9_png__WEBPACK_IMPORTED_MODULE_41__["default"], _img_Player_Lucas_Walk_Player_walk_10_png__WEBPACK_IMPORTED_MODULE_42__["default"], _img_Player_Lucas_Walk_Player_walk_11_png__WEBPACK_IMPORTED_MODULE_43__["default"], _img_Player_Lucas_Walk_Player_walk_12_png__WEBPACK_IMPORTED_MODULE_44__["default"], _img_Player_Lucas_Walk_Player_walk_13_png__WEBPACK_IMPORTED_MODULE_45__["default"], _img_Player_Lucas_Walk_Player_walk_14_png__WEBPACK_IMPORTED_MODULE_46__["default"], _img_Player_Lucas_Walk_Player_walk_15_png__WEBPACK_IMPORTED_MODULE_47__["default"]].map(createImage);
var playerJumpFrames = [_img_Player_Lucas_Jumping_Player_jump_1_png__WEBPACK_IMPORTED_MODULE_48__["default"], _img_Player_Lucas_Jumping_Player_jump_2_png__WEBPACK_IMPORTED_MODULE_49__["default"]].map(createImage);
var playerFlyFrames = [_img_Player_Lucas_Flying_Player_flying_1_png__WEBPACK_IMPORTED_MODULE_50__["default"], _img_Player_Lucas_Flying_Player_flying_2_png__WEBPACK_IMPORTED_MODULE_51__["default"]].map(createImage);
var playerSwimFrames = [_img_Player_Lucas_Swimming_Player_swimming_1_png__WEBPACK_IMPORTED_MODULE_52__["default"], _img_Player_Lucas_Swimming_Player_swimming_2_png__WEBPACK_IMPORTED_MODULE_53__["default"], _img_Player_Lucas_Swimming_Player_swimming_3_png__WEBPACK_IMPORTED_MODULE_54__["default"], _img_Player_Lucas_Swimming_Player_swimming_4_png__WEBPACK_IMPORTED_MODULE_55__["default"]].map(createImage);

//player
var player = new Player();
var backgroundImage = createImage(_img_background_background_blue_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var cloudImage = createImage(_img_elements_clouds_cloud_1_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var hillImage = createImage(_img_elements_hills_hill_1_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var platformImageSmall = createImage(_img_platform_platform_small_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
var platformImageBig = createImage(_img_platform_platform_big_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
var coinImage = createImage(_img_elements_money_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var keyImage = createImage(_img_elements_key_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var heartImage = createImage(_img_elements_heart_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var pauseImage = createImage(_img_elements_pause_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
var playImage = createImage(_img_elements_play_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var lucasImage = createImage(_img_elements_lucas_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var chestImage = createImage(_img_elements_chest_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var portalImage = createImage(_img_elements_Portal_1_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
var trampolineImage = createImage(_img_elements_trampoline_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
var batEnemyImage = createImage(_img_tmp_files_Enemies_bat_1_png__WEBPACK_IMPORTED_MODULE_56__["default"]);
var sharkEnemyImage = createImage(_img_tmp_files_Enemies_shark_png__WEBPACK_IMPORTED_MODULE_57__["default"]);
var sandImage = createImage(_img_elements_element_sea_1_png__WEBPACK_IMPORTED_MODULE_58__["default"]);
var scrollOffset = 0;
var scrollOffsetY = 0;
var lives = 10;
var coins = 0;
var isPaused = false;
var gameEnded = false;
var gameEndMessage = '';
var hasKey = false;
var flyAbilityFrames = 0;
var swimmingSpeedFrames = 0;
var portalCooldownFrames = 0;
var enemyHitCooldownFrames = 0;
var showStartMenu = true;
var showChestHint = false;
var showGameOver = false;
var moveHoldFrames = 0;
var moveHoldDirection = '';
var platforms = [];
var collectibles = [];
var worldObjects = [];
var enemies = [];
var enemyDeathParticles = [];
var waterZones = [];
var startButton = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var gotItButton = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var gameOverPlayAgainButton = {
  x: 0,
  y: 0,
  width: 240,
  height: 78
};
var gameOverMenuButton = {
  x: 0,
  y: 0,
  width: 240,
  height: 78
};
var pauseResumeButton = {
  x: 0,
  y: 0,
  width: 240,
  height: 78
};
var pauseMenuButton = {
  x: 0,
  y: 0,
  width: 240,
  height: 78
};
var levelOrigin = {
  backgroundX: 0,
  genericX: 0,
  cloudX: 0
};
function createPlatforms() {
  var smallBaseWidth = platformImageSmall.width || 260;
  var smallBaseHeight = platformImageSmall.height || 70;
  var bigBaseWidth = platformImageBig.width || 360;
  var bigBaseHeight = platformImageBig.height || 70;
  var createdPlatforms = _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"].platforms.map(function (configPlatform) {
    var _configPlatform$scale;
    var useBig = configPlatform.type === 'big';
    var image = useBig ? platformImageBig : platformImageSmall;
    var baseWidth = useBig ? bigBaseWidth : smallBaseWidth;
    var baseHeight = useBig ? bigBaseHeight : smallBaseHeight;
    var scale = (_configPlatform$scale = configPlatform.scale) !== null && _configPlatform$scale !== void 0 ? _configPlatform$scale : 1;
    return new GenericObject({
      x: configPlatform.x,
      y: configPlatform.y,
      width: Math.round(baseWidth * scale),
      height: Math.round(baseHeight * scale),
      image: image
    });
  });
  createdPlatforms.sort(function (a, b) {
    return a.position.x - b.position.x;
  });
  var minGapBetweenPlatforms = 80;
  for (var i = 1; i < createdPlatforms.length; i++) {
    var previous = createdPlatforms[i - 1];
    var current = createdPlatforms[i];
    var minX = previous.position.x + previous.width + minGapBetweenPlatforms;
    if (current.position.x < minX) {
      current.position.x = minX;
    }
  }
  return createdPlatforms;
}
function createCollectibles() {
  var createdCollectibles = _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"].coins.map(function (configCoin) {
    return {
      collected: false,
      sprite: new GenericObject({
        x: configCoin.x,
        y: configCoin.y,
        width: 32,
        height: 32,
        image: coinImage
      })
    };
  });
  createdCollectibles.forEach(function (coinItem) {
    platforms.forEach(function (platform) {
      if (isOverlapping(coinItem.sprite, platform)) {
        coinItem.sprite.position.y = platform.position.y - coinItem.sprite.height - 10;
      }
    });
  });
  return createdCollectibles;
}
function createWorldObjects() {
  var imageByType = {
    key: keyImage,
    chest: chestImage,
    portal: portalImage,
    trampoline: trampolineImage,
    sand: sandImage
  };
  var createdWorldObjects = _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"].objects.map(function (configObject) {
    var _configObject$scale, _configObject$pairId, _configObject$bounce;
    var image = imageByType[configObject.type];
    var scale = (_configObject$scale = configObject.scale) !== null && _configObject$scale !== void 0 ? _configObject$scale : 1;
    var width = Math.round((configObject.width || image.width || 64) * scale);
    var height = Math.round((configObject.height || image.height || 64) * scale);
    var worldObject = new GenericObject({
      x: configObject.x,
      y: configObject.y,
      width: width,
      height: height,
      image: image
    });
    worldObject.type = configObject.type;
    worldObject.pairId = (_configObject$pairId = configObject.pairId) !== null && _configObject$pairId !== void 0 ? _configObject$pairId : null;
    worldObject.bounce = (_configObject$bounce = configObject.bounce) !== null && _configObject$bounce !== void 0 ? _configObject$bounce : 30;
    worldObject.collected = false;
    return worldObject;
  });
  createdWorldObjects.sort(function (a, b) {
    return a.position.x - b.position.x;
  });
  var minGapBetweenObjects = 24;
  for (var i = 1; i < createdWorldObjects.length; i++) {
    var previous = createdWorldObjects[i - 1];
    var current = createdWorldObjects[i];
    var sameVerticalBand = current.position.y < previous.position.y + previous.height && current.position.y + current.height > previous.position.y;
    if (sameVerticalBand) {
      var minX = previous.position.x + previous.width + minGapBetweenObjects;
      if (current.position.x < minX) {
        current.position.x = minX;
      }
    }
  }
  createdWorldObjects.forEach(function (worldObject) {
    var objectCenterX = worldObject.position.x + worldObject.width / 2;
    var supportPlatform = platforms.find(function (platform) {
      return objectCenterX >= platform.position.x - 12 && objectCenterX <= platform.position.x + platform.width + 12;
    });
    if (!supportPlatform) {
      return;
    }
    if (worldObject.type === 'trampoline') {
      worldObject.position.y = supportPlatform.position.y - worldObject.height + 6;
    }
    if (worldObject.type === 'chest') {
      worldObject.position.y = supportPlatform.position.y - worldObject.height + 4;
    }
    if (worldObject.type === 'portal') {
      worldObject.position.y = supportPlatform.position.y - worldObject.height + 6;
    }
  });
  return createdWorldObjects;
}
function createEnemies() {
  var imageByType = {
    bat: batEnemyImage,
    shark: sharkEnemyImage
  };
  return _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"].enemies.map(function (configEnemy) {
    var _configEnemy$scale, _configEnemy$range;
    var image = imageByType[configEnemy.type];
    var scale = (_configEnemy$scale = configEnemy.scale) !== null && _configEnemy$scale !== void 0 ? _configEnemy$scale : 1;
    var width = Math.round((configEnemy.width || image.width || 64) * scale);
    var height = Math.round((configEnemy.height || image.height || 64) * scale);
    var enemy = new GenericObject({
      x: configEnemy.x,
      y: configEnemy.y,
      width: width,
      height: height,
      image: image
    });
    enemy.type = configEnemy.type;
    enemy.baseY = configEnemy.y;
    if (configEnemy.type === 'shark') {
      var _configEnemy$speed, _configEnemy$bobAmpli, _configEnemy$bobSpeed;
      enemy.baseX = configEnemy.x;
      enemy.swimBaseY = configEnemy.y;
      enemy.horizontalSpeed = (_configEnemy$speed = configEnemy.speed) !== null && _configEnemy$speed !== void 0 ? _configEnemy$speed : 1.5;
      enemy.bobAmplitude = (_configEnemy$bobAmpli = configEnemy.bobAmplitude) !== null && _configEnemy$bobAmpli !== void 0 ? _configEnemy$bobAmpli : 12;
      enemy.bobSpeed = (_configEnemy$bobSpeed = configEnemy.bobSpeed) !== null && _configEnemy$bobSpeed !== void 0 ? _configEnemy$bobSpeed : 0.045;
      enemy.swimPhase = configEnemy.x % 360 * (Math.PI / 180);
    } else {
      var _configEnemy$speed2;
      enemy.verticalSpeed = (_configEnemy$speed2 = configEnemy.speed) !== null && _configEnemy$speed2 !== void 0 ? _configEnemy$speed2 : 1;
    }
    enemy.range = (_configEnemy$range = configEnemy.range) !== null && _configEnemy$range !== void 0 ? _configEnemy$range : 60;
    enemy.direction = -1;
    return enemy;
  });
}
function createWaterZones() {
  return (_levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"].waterZones || []).map(function (z) {
    return _objectSpread({}, z);
  });
}
function drawWaterZone(zone) {
  c.save();
  var fillColor = zone.tier === 'top' ? 'rgba(28, 156, 220, 0.92)' : 'rgba(24, 148, 214, 0.96)';
  var strokeColor = 'rgba(70, 196, 255, 0.75)';
  c.fillStyle = fillColor;
  c.strokeStyle = strokeColor;
  c.lineWidth = 4;
  if (zone.tier === 'top') {
    c.beginPath();
    c.moveTo(zone.x, zone.y);
    c.lineTo(zone.x + zone.width, zone.y + 20);
    c.lineTo(zone.x + zone.width, zone.y + zone.height);
    c.lineTo(zone.x, zone.y + zone.height);
    c.closePath();
    c.fill();
    c.stroke();
    c.fillStyle = 'rgba(135, 216, 255, 0.55)';
    c.beginPath();
    c.moveTo(zone.x + 6, zone.y + 8);
    c.lineTo(zone.x + zone.width - 8, zone.y + 26);
    c.lineTo(zone.x + zone.width - 8, zone.y + 34);
    c.lineTo(zone.x + 6, zone.y + 16);
    c.closePath();
    c.fill();
  } else {
    c.fillRect(zone.x, zone.y, zone.width, zone.height);
    c.strokeRect(zone.x, zone.y, zone.width, zone.height);
    c.fillStyle = 'rgba(135, 216, 255, 0.28)';
    c.fillRect(zone.x, zone.y + 8, zone.width, 10);
  }
  c.restore();
}
function getDeepWaterZoneForEnemy(enemy) {
  return waterZones.find(function (zone) {
    var centerX = enemy.baseX + enemy.width / 2;
    return zone.tier === 'deep' && centerX > zone.x + 30 && centerX < zone.x + zone.width - 30;
  });
}
function isOverlapping(a, b) {
  var _a$hitboxWidth, _a$hitboxHeight, _b$hitboxWidth, _b$hitboxHeight;
  var aW = (_a$hitboxWidth = a.hitboxWidth) !== null && _a$hitboxWidth !== void 0 ? _a$hitboxWidth : a.width;
  var aH = (_a$hitboxHeight = a.hitboxHeight) !== null && _a$hitboxHeight !== void 0 ? _a$hitboxHeight : a.height;
  var bW = (_b$hitboxWidth = b.hitboxWidth) !== null && _b$hitboxWidth !== void 0 ? _b$hitboxWidth : b.width;
  var bH = (_b$hitboxHeight = b.hitboxHeight) !== null && _b$hitboxHeight !== void 0 ? _b$hitboxHeight : b.height;
  return a.position.x < b.position.x + bW && a.position.x + aW > b.position.x && a.position.y < b.position.y + bH && a.position.y + aH > b.position.y;
}
function findPairedPortal(currentPortal, allPortals) {
  if (currentPortal.pairId) {
    return allPortals.find(function (portalObject) {
      return portalObject !== currentPortal && portalObject.pairId === currentPortal.pairId;
    });
  }
  var portalIndex = allPortals.indexOf(currentPortal);
  if (portalIndex === -1) {
    return null;
  }
  return portalIndex % 2 === 0 ? allPortals[portalIndex + 1] : allPortals[portalIndex - 1];
}
function isStompOnEnemy(playerEntity, enemyEntity) {
  var playerBottom = playerEntity.position.y + playerEntity.hitboxHeight;
  // For shark, use larger threshold since it moves horizontally in water
  var threshold = enemyEntity.type === 'shark' ? 0.6 : 0.45;
  var enemyTopThreshold = enemyEntity.position.y + enemyEntity.height * threshold;
  return playerEntity.velocity.y > 0 && playerBottom <= enemyTopThreshold;
}
function spawnEnemyDeathExplosion(enemyEntity) {
  var centerX = enemyEntity.position.x + enemyEntity.width / 2;
  var centerY = enemyEntity.position.y + enemyEntity.height / 2;
  for (var i = 0; i < 12; i++) {
    var angle = Math.PI * 2 * i / 12;
    var speed = 1.6 + Math.random() * 1.6;
    enemyDeathParticles.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.8,
      radius: 2 + Math.random() * 2,
      life: 24 + Math.floor(Math.random() * 8),
      color: i % 2 === 0 ? '#ffcf4a' : '#ff7f3a'
    });
  }
}
function updateEnemyDeathEffects() {
  enemyDeathParticles = enemyDeathParticles.filter(function (particle) {
    return particle.life > 0;
  });
  enemyDeathParticles.forEach(function (particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.06;
    particle.life -= 1;
    c.save();
    c.globalAlpha = Math.max(0, particle.life / 32);
    c.fillStyle = particle.color;
    c.beginPath();
    c.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    c.fill();
    c.restore();
  });
}
var pauseButton = {
  x: canvas.width - 58,
  y: 15,
  width: 28,
  height: 28
};
function updateHudAnchors() {
  pauseButton.x = canvas.width - 58;
  pauseButton.y = 15;
}
function updateSceneAnchors() {
  if (backgroundObjects.length > 0) {
    backgroundObjects[0].width = canvas.width;
    backgroundObjects[0].height = canvas.height;
  }
  if (genericObjects.length > 0) {
    var genericHeight = genericObjects[0].height > 0 ? genericObjects[0].height : hillImage.naturalHeight || hillImage.height || 0;
    if (genericHeight > 0) {
      genericObjects[0].position.y = canvas.height - genericHeight + 24;
    }
  }
}
function centerCameraOnPlayer() {
  var centerX = canvas.width / 2 - player.hitboxWidth / 2;
  var centerY = canvas.height / 2 - player.hitboxHeight / 2;
  var deltaX = player.position.x - centerX;
  var deltaY = player.position.y - centerY;
  if (deltaX === 0 && deltaY === 0) {
    return;
  }
  player.position.x = centerX;
  player.position.y = centerY;
  scrollOffset += deltaX;
  scrollOffsetY += deltaY;
  platforms.forEach(function (platform) {
    platform.position.x -= deltaX;
    platform.position.y -= deltaY;
  });
  collectibles.forEach(function (coinItem) {
    coinItem.sprite.position.x -= deltaX;
    coinItem.sprite.position.y -= deltaY;
  });
  worldObjects.forEach(function (worldObject) {
    worldObject.position.x -= deltaX;
    worldObject.position.y -= deltaY;
  });
  enemies.forEach(function (enemy) {
    enemy.position.x -= deltaX;
    enemy.position.y -= deltaY;
    enemy.baseY -= deltaY;
    if (enemy.type === 'shark') {
      enemy.baseX -= deltaX;
      enemy.swimBaseY -= deltaY;
    }
  });
  enemyDeathParticles.forEach(function (particle) {
    particle.x -= deltaX;
    particle.y -= deltaY;
  });
  waterZones.forEach(function (zone) {
    zone.x -= deltaX;
    zone.y -= deltaY;
  });
  genericObjects.forEach(function (genericObject) {
    genericObject.position.x -= deltaX * 0.4;
    genericObject.position.y -= deltaY * 0.4;
  });
  cloudObjects.forEach(function (cloudObject) {
    cloudObject.position.x -= deltaX * 0.1;
    cloudObject.position.y -= deltaY * 0.1;
  });
}
updateHudAnchors();
function isPointInsidePauseButton(mouseX, mouseY) {
  return mouseX >= pauseButton.x && mouseX <= pauseButton.x + pauseButton.width && mouseY >= pauseButton.y && mouseY <= pauseButton.y + pauseButton.height;
}
function drawPauseButton() {
  c.drawImage(pauseImage, pauseButton.x, pauseButton.y, pauseButton.width, pauseButton.height);
}
function isPointInsideRect(mouseX, mouseY, rect) {
  return mouseX >= rect.x && mouseX <= rect.x + rect.width && mouseY >= rect.y && mouseY <= rect.y + rect.height;
}
function drawMenuButton(_ref2) {
  var rect = _ref2.rect,
    label = _ref2.label,
    iconImage = _ref2.iconImage,
    backgroundColor = _ref2.backgroundColor,
    borderColor = _ref2.borderColor,
    textColor = _ref2.textColor,
    _ref2$iconSize = _ref2.iconSize,
    iconSize = _ref2$iconSize === void 0 ? 34 : _ref2$iconSize;
  c.save();
  c.fillStyle = backgroundColor;
  c.strokeStyle = borderColor;
  c.lineWidth = 2;
  c.beginPath();
  c.roundRect(rect.x, rect.y, rect.width, rect.height, 8);
  c.fill();
  c.stroke();
  if (iconImage) {
    c.drawImage(iconImage, rect.x + 18, rect.y + (rect.height - iconSize) / 2, iconSize, iconSize);
  }
  c.fillStyle = textColor;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = "700 32px \"".concat(buttonFontFamily, "\"");
  c.fillText(label, rect.x + rect.width / 2 + (iconImage ? 22 : 0), rect.y + rect.height / 2 + 2);
  c.restore();
}
function dismissChestHint() {
  var chestObject = worldObjects.find(function (worldObject) {
    return worldObject.type === 'chest' && !worldObject.collected;
  });
  showChestHint = false;
  if (!chestObject) {
    return;
  }
  player.position.x = Math.max(24, chestObject.position.x - player.width - 72);
  player.position.y = chestObject.position.y + chestObject.height - player.height;
  player.velocity.x = 0;
  player.velocity.y = 0;
  player.onGround = true;
  keys.left.pressed = false;
  keys.right.pressed = false;
  keys.up.pressed = false;
  keys.down.pressed = false;
}
function drawStartMenu() {
  var avatarSize = Math.min(180, canvas.width * 0.16);
  var titleY = Math.max(220, canvas.height * 0.46);
  startButton.width = 72;
  startButton.height = 72;
  startButton.x = canvas.width / 2 - startButton.width / 2;
  startButton.y = titleY + 92;
  c.save();
  c.fillStyle = '#455f88';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(lucasImage, canvas.width / 2 - avatarSize / 2, 40, avatarSize, avatarSize);
  c.fillStyle = '#ffffff';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = "700 54px \"".concat(titleFontFamily, "\"");
  c.fillText('Find the Letter', canvas.width / 2, titleY);
  c.font = "400 34px \"".concat(bodyLightFontFamily, "\"");
  c.fillText('Starring Lucas Grao and more', canvas.width / 2, titleY + 64);
  drawMenuButton({
    rect: startButton,
    label: 'A',
    backgroundColor: '#56a551',
    borderColor: '#458742',
    textColor: '#ffffff'
  });
  c.restore();
}
function drawGameOverScreen() {
  var titleY = canvas.height / 2 - 60;
  var buttonY = canvas.height / 2 + 20;
  var gap = 20;
  var totalW = gameOverPlayAgainButton.width + gap + gameOverMenuButton.width;
  var startX = canvas.width / 2 - totalW / 2;
  gameOverPlayAgainButton.x = startX;
  gameOverPlayAgainButton.y = buttonY;
  gameOverMenuButton.x = startX + gameOverPlayAgainButton.width + gap;
  gameOverMenuButton.y = buttonY;
  c.save();
  c.fillStyle = '#8b3232';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = '#ffffff';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = "700 64px \"".concat(titleFontFamily, "\"");
  c.fillText('Game Over', canvas.width / 2, titleY);
  c.font = "300 30px \"".concat(bodyLightFontFamily, "\"");
  c.fillText("Don't give up, try again!", canvas.width / 2, titleY + 52);
  drawMenuButton({
    rect: gameOverPlayAgainButton,
    label: 'Play Again',
    iconImage: playImage,
    backgroundColor: '#56a551',
    borderColor: '#458742',
    textColor: '#ffffff'
  });
  drawMenuButton({
    rect: gameOverMenuButton,
    label: 'Menu',
    iconImage: pauseImage,
    backgroundColor: '#56a551',
    borderColor: '#458742',
    textColor: '#ffffff'
  });
  c.restore();
}
function drawChestHintOverlay() {
  gotItButton.width = 250;
  gotItButton.height = 78;
  gotItButton.x = canvas.width / 2 - gotItButton.width / 2;
  gotItButton.y = canvas.height - 126;
  c.save();
  c.fillStyle = '#2e8994';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = '#ffffff';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = "700 58px \"".concat(titleFontFamily, "\"");
  c.fillText('You are almost', canvas.width / 2, 110);
  c.font = "300 34px \"".concat(bodyLightFontFamily, "\"");
  c.fillText('Find the key to open the treasure', canvas.width / 2, 190);
  var keySize = Math.min(220, canvas.width * 0.24);
  c.drawImage(keyImage, canvas.width / 2 - keySize / 2, canvas.height / 2 - 50, keySize, keySize);
  drawMenuButton({
    rect: gotItButton,
    label: 'Got it',
    iconImage: playImage,
    backgroundColor: '#44a8b8',
    borderColor: '#2b90a1',
    textColor: '#ffffff'
  });
  c.restore();
}
function drawHud() {
  var iconSize = 28;
  var textY = 29;
  var heartX = 18;
  var livesX = heartX + iconSize + 10;
  var coinX = 168;
  var coinsX = coinX + iconSize + 10;
  c.save();
  c.fillStyle = 'rgba(130, 44, 44, 0.9)';
  c.fillRect(0, 0, canvas.width, hudBarHeight);
  c.fillStyle = '#ffffff';
  c.font = "700 28px \"".concat(titleFontFamily, "\"");
  c.textBaseline = 'middle';
  c.drawImage(heartImage, heartX, 15, iconSize, iconSize);
  c.fillStyle = '#ffffff';
  c.fillText(String(lives), livesX, textY);
  c.drawImage(coinImage, coinX, 15, iconSize, iconSize);
  c.fillStyle = '#ffffff';
  c.fillText(String(coins), coinsX, textY);
  if (hasKey) {
    c.drawImage(keyImage, pauseButton.x - 44, 15, iconSize, iconSize);
  }
  drawPauseButton();
  c.restore();
}
function drawGameEndOverlay() {
  c.save();
  c.fillStyle = 'rgba(20, 20, 20, 0.72)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.textAlign = 'center';
  c.fillStyle = '#ffffff';
  c.font = "700 56px \"".concat(titleFontFamily, "\"");
  c.fillText('Fim de jogo', canvas.width / 2, canvas.height / 2 - 20);
  c.font = "400 30px \"".concat(bodyFontFamily, "\"");
  c.fillText(gameEndMessage, canvas.width / 2, canvas.height / 2 + 36);
  c.font = "400 22px \"".concat(bodyLightFontFamily, "\"");
  c.fillText('Recarregue a pagina para jogar de novo', canvas.width / 2, canvas.height / 2 + 80);
  c.restore();
}
function drawPauseOverlay() {
  var cx = canvas.width / 2;
  var cy = canvas.height / 2;

  // Layout constants
  var actionsBoxW = Math.min(400, canvas.width * 0.38);
  var actionsBoxH = 300;
  var actionsBoxX = cx - actionsBoxW - 40;
  var actionsBoxY = cy - actionsBoxH / 2 + 10;
  var buttonsX = cx + 40;
  pauseResumeButton.x = buttonsX;
  pauseResumeButton.y = actionsBoxY + 10;
  pauseMenuButton.x = buttonsX;
  pauseMenuButton.y = actionsBoxY + 10 + pauseResumeButton.height + 20;
  c.save();
  c.fillStyle = '#3d8d4d';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = '#f5f5f5';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = "700 64px \"".concat(titleFontFamily, "\"");
  c.fillText('Paused', cx, 80);
  c.font = "300 30px \"".concat(bodyLightFontFamily, "\"");
  c.fillText('I know, everybody need to take a breath', cx, 140);

  // Actions box
  c.fillStyle = 'rgba(193, 210, 186, 0.85)';
  c.beginPath();
  c.roundRect(actionsBoxX, actionsBoxY, actionsBoxW, actionsBoxH, 8);
  c.fill();
  var col1X = actionsBoxX + 30;
  var col2X = actionsBoxX + actionsBoxW * 0.45;
  var rowStart = actionsBoxY + 44;
  var rowGap = 42;
  var rows = [['SPACE', 'Jump / Swim / Fly'], ['SPACE again', 'Glide (press again in the air)']];
  c.textAlign = 'left';
  c.textBaseline = 'middle';

  // Header
  c.fillStyle = '#1a3a22';
  c.font = "700 22px \"".concat(buttonFontFamily, "\"");
  c.textAlign = 'center';
  c.fillText('ACTIONS', actionsBoxX + actionsBoxW / 2, actionsBoxY + 22);
  c.textAlign = 'left';
  rows.forEach(function (_ref3, i) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      action = _ref4[1];
    var rowY = rowStart + i * rowGap;
    c.font = "700 22px \"".concat(buttonFontFamily, "\"");
    c.fillStyle = '#1a3a22';
    c.fillText(key, col1X, rowY);
    c.font = "400 22px \"".concat(bodyFontFamily, "\"");
    c.fillStyle = '#111111';
    c.fillText(action, col2X, rowY);
  });

  // Arrow icons for move left/right
  var arrowCol = actionsBoxX + actionsBoxW * 0.68;
  c.fillStyle = '#1a3a22';
  c.font = "700 26px \"".concat(bodyFontFamily, "\"");
  c.fillText("\u2190", arrowCol, rowStart + 2 * rowGap - 4);
  c.fillText("\u2192", arrowCol, rowStart + 2 * rowGap + rowGap - 4);
  c.font = "400 18px \"".concat(bodyFontFamily, "\"");
  c.fillText('Move left', arrowCol + 30, rowStart + 2 * rowGap);
  c.fillText('Move right', arrowCol + 30, rowStart + 3 * rowGap);
  drawMenuButton({
    rect: pauseResumeButton,
    label: 'Resume',
    iconImage: playImage,
    backgroundColor: '#56a551',
    borderColor: '#458742',
    textColor: '#ffffff'
  });
  drawMenuButton({
    rect: pauseMenuButton,
    label: 'Menu',
    iconImage: pauseImage,
    backgroundColor: '#56a551',
    borderColor: '#458742',
    textColor: '#ffffff'
  });
  c.restore();
}
function init() {
  player = new Player();
  backgroundImage = createImage(_img_background_background_blue_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  cloudImage = createImage(_img_elements_clouds_cloud_1_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  hillImage = createImage(_img_elements_hills_hill_1_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  platformImageSmall = createImage(_img_platform_platform_small_png__WEBPACK_IMPORTED_MODULE_12__["default"]);
  platformImageBig = createImage(_img_platform_platform_big_png__WEBPACK_IMPORTED_MODULE_13__["default"]);
  coinImage = createImage(_img_elements_money_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  keyImage = createImage(_img_elements_key_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  heartImage = createImage(_img_elements_heart_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
  pauseImage = createImage(_img_elements_pause_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
  playImage = createImage(_img_elements_play_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
  lucasImage = createImage(_img_elements_lucas_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
  chestImage = createImage(_img_elements_chest_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
  portalImage = createImage(_img_elements_Portal_1_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
  trampolineImage = createImage(_img_elements_trampoline_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
  batEnemyImage = createImage(_img_tmp_files_Enemies_bat_1_png__WEBPACK_IMPORTED_MODULE_56__["default"]);
  sharkEnemyImage = createImage(_img_tmp_files_Enemies_shark_png__WEBPACK_IMPORTED_MODULE_57__["default"]);
  sandImage = createImage(_img_elements_element_sea_1_png__WEBPACK_IMPORTED_MODULE_58__["default"]);
  scrollOffset = 0;
  scrollOffsetY = 0;
  lives = 10;
  coins = 0;
  isPaused = false;
  gameEnded = false;
  gameEndMessage = '';
  showGameOver = false;
  hasKey = false;
  flyAbilityFrames = 0;
  swimmingSpeedFrames = 0;
  moveHoldFrames = 0;
  moveHoldDirection = '';
  player.glideWindowFrames = 0;
  player.glideArmed = false;
  portalCooldownFrames = 0;
  enemyHitCooldownFrames = 0;
  showChestHint = false;
  platforms = createPlatforms();
  collectibles = createCollectibles();
  worldObjects = createWorldObjects();
  enemies = createEnemies();
  enemyDeathParticles = [];
  waterZones = createWaterZones();
  keys.left.pressed = false;
  keys.right.pressed = false;
  keys.up.pressed = false;
  keys.down.pressed = false;
  updateSceneAnchors();
}
function resetRunAfterFall() {
  player = new Player();
  scrollOffset = 0;
  scrollOffsetY = 0;
  coins = 0;
  hasKey = false;
  flyAbilityFrames = 0;
  swimmingSpeedFrames = 0;
  moveHoldFrames = 0;
  moveHoldDirection = '';
  player.glideWindowFrames = 0;
  player.glideArmed = false;
  portalCooldownFrames = 0;
  enemyHitCooldownFrames = 0;
  showChestHint = false;
  platforms = createPlatforms();
  collectibles = createCollectibles();
  worldObjects = createWorldObjects();
  enemies = createEnemies();
  enemyDeathParticles = [];
  waterZones = createWaterZones();
  backgroundObjects[0].position.x = levelOrigin.backgroundX;
  genericObjects[0].position.x = levelOrigin.genericX;
  cloudObjects[0].position.x = levelOrigin.cloudX;
  keys.left.pressed = false;
  keys.right.pressed = false;
  keys.up.pressed = false;
  keys.down.pressed = false;
}

//background
var backgroundObjects = [new GenericObject({
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  image: backgroundImage
})];

//generic objects
var genericObjects = [new GenericObject({
  x: 0,
  y: 100,
  width: hillImage.width,
  height: hillImage.height,
  image: hillImage
})];

//clouds
var cloudObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: cloudImage
})];
platforms = createPlatforms();
collectibles = createCollectibles();
worldObjects = createWorldObjects();
enemies = createEnemies();
waterZones = createWaterZones();
updateSceneAnchors();

//actions
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  },
  down: {
    pressed: false
  }
};
function animate() {
  requestAnimationFrame(animate);
  if (showStartMenu) {
    drawStartMenu();
    return;
  }
  if (showChestHint) {
    drawChestHintOverlay();
    return;
  }
  if (showGameOver) {
    drawGameOverScreen();
    return;
  }
  if (gameEnded) {
    drawGameEndOverlay();
    return;
  }
  if (isPaused) {
    drawPauseOverlay();
    return;
  }
  c.fillStyle = '#3aa2e8';
  c.fillRect(0, 0, canvas.width, canvas.height);
  var movingRight = keys.right.pressed && !keys.left.pressed;
  var movingLeft = keys.left.pressed && !keys.right.pressed;
  var moveDirection = movingRight ? 'right' : movingLeft ? 'left' : '';
  if (moveDirection) {
    if (moveDirection === moveHoldDirection) {
      moveHoldFrames += 1;
    } else {
      moveHoldDirection = moveDirection;
      moveHoldFrames = 1;
    }
  } else {
    moveHoldDirection = '';
    moveHoldFrames = 0;
  }
  var moveSpeed = moveHoldFrames >= 60 ? 9 : 5;
  if (player.inWater || player.onGround && player.velocity.y >= 0) {
    player.glideWindowFrames = 0;
    player.glideArmed = false;
  } else if (player.glideWindowFrames > 0) {
    player.glideWindowFrames -= 1;
  }
  if (keys.up.pressed && !player.inWater && !player.onGround) {
    if (flyAbilityFrames > 0) {
      player.velocity.y = Math.max(player.velocity.y - 1.2, -10);
    } else if (player.glideArmed && player.velocity.y > 1.8) {
      // Glide by limiting fall speed while Space is held in the air.
      player.velocity.y = 1.8;
    }
  }
  if (flyAbilityFrames > 0) {
    flyAbilityFrames -= 1;
  }
  if (swimmingSpeedFrames > 0) {
    swimmingSpeedFrames -= 1;
  }
  if (keys.right.pressed && !keys.left.pressed) {
    player.velocity.x = player.inWater ? moveSpeed * 0.5 : moveSpeed;
  } else if (keys.left.pressed && !keys.right.pressed) {
    player.velocity.x = player.inWater ? -moveSpeed * 0.5 : -moveSpeed;
  } else {
    player.velocity.x = 0;
  }
  backgroundObjects.forEach(function (obj) {
    obj.draw();
  });
  cloudObjects.forEach(function (obj) {
    obj.draw();
  });
  genericObjects.forEach(function (obj) {
    obj.draw();
  });
  waterZones.forEach(function (zone) {
    drawWaterZone(zone);
  });
  platforms.forEach(function (p) {
    p.draw();
  });
  worldObjects.forEach(function (worldObject) {
    if (!worldObject.collected) {
      worldObject.draw();
    }
  });
  enemies.forEach(function (enemy) {
    if (enemy.type === 'shark') {
      var waterZone = getDeepWaterZoneForEnemy(enemy);
      if (!waterZone) {
        return;
      }
      var minX = waterZone.x + 36;
      var maxX = waterZone.x + waterZone.width - enemy.width - 36;
      enemy.position.x += enemy.horizontalSpeed * enemy.direction;
      if (enemy.position.x <= minX) {
        enemy.position.x = minX;
        enemy.direction = 1;
      } else if (enemy.position.x >= maxX) {
        enemy.position.x = maxX;
        enemy.direction = -1;
      }
      enemy.swimPhase += enemy.bobSpeed;
      var swimMidY = waterZone.y + waterZone.height * 0.45 - enemy.height / 2;
      enemy.swimBaseY = swimMidY;
      enemy.position.y = swimMidY + Math.sin(enemy.swimPhase) * enemy.bobAmplitude;
      enemy.draw();
    } else {
      enemy.position.y += enemy.verticalSpeed * enemy.direction;
      if (enemy.position.y <= enemy.baseY - enemy.range) {
        enemy.position.y = enemy.baseY - enemy.range;
        enemy.direction = 1;
      } else if (enemy.position.y >= enemy.baseY + enemy.range) {
        enemy.position.y = enemy.baseY + enemy.range;
        enemy.direction = -1;
      }
      enemy.draw();
    }
  });
  updateEnemyDeathEffects();
  collectibles.forEach(function (coinItem) {
    if (!coinItem.collected) {
      coinItem.sprite.draw();
    }
  });
  var wasInWater = !!player.inWater;
  player.update(platforms);
  var playerInWater = waterZones.some(function (zone) {
    var px = player.position.x + player.hitboxWidth / 2;
    return px > zone.x && px < zone.x + zone.width && player.position.y + player.hitboxHeight > zone.y && player.position.y < zone.y + zone.height;
  });
  player.inWater = playerInWater;
  if (playerInWater) {
    if (swimmingSpeedFrames > 0) {
      if (player.velocity.y > 1) player.velocity.y = 1;
    } else {
      if (player.velocity.y > 2) player.velocity.y = 2;
    }
  }

  // If the player swims up past the surface, give a small jump-like pop out of water.
  if (wasInWater && !playerInWater && keys.up.pressed && player.velocity.y < 0) {
    player.velocity.y = -28;
    player.glideWindowFrames = 36;
    player.glideArmed = false;
  }

  // If the player leaves water in any other way, they die
  if (wasInWater && !playerInWater && !(keys.up.pressed && player.velocity.y < 0)) {
    lives = Math.max(0, lives - 1);
    if (lives === 0) {
      showGameOver = true;
    } else {
      resetRunAfterFall();
    }
  }
  centerCameraOnPlayer();
  if (portalCooldownFrames > 0) {
    portalCooldownFrames -= 1;
  }
  if (enemyHitCooldownFrames > 0) {
    enemyHitCooldownFrames -= 1;
  }
  var touchingEnemies = enemies.filter(function (enemy) {
    return isOverlapping(player, enemy);
  });
  var stompedEnemy = false;
  var stompedEnemyType = null;
  touchingEnemies.forEach(function (enemy) {
    if (isStompOnEnemy(player, enemy)) {
      // Stomp detected - remove enemy from array and play death effect
      var enemyIndex = enemies.indexOf(enemy);
      if (enemyIndex > -1) {
        enemies.splice(enemyIndex, 1);
      }
      spawnEnemyDeathExplosion(enemy);
      stompedEnemy = true;
      stompedEnemyType = enemy.type;
    }
  });
  if (stompedEnemy) {
    // Player bounces on stomp (0 damage)
    player.velocity.y = -10;
    player.onGround = false;
    // Grant ability based on enemy type
    if (stompedEnemyType === 'shark') {
      swimmingSpeedFrames = Math.min(swimmingSpeedFrames + 300, 600);
    } else {
      flyAbilityFrames = Math.min(flyAbilityFrames + 300, 600);
    }
  } else if (enemyHitCooldownFrames === 0 && touchingEnemies.length > 0) {
    // Only take damage if it's not a successful stomp
    lives = Math.max(0, lives - 1);
    enemyHitCooldownFrames = 45;

    // Small knock-back so the player can separate from the enemy.
    player.velocity.y = -6;
    player.velocity.x = player.position.x < touchingEnemies[0].position.x ? -3 : 3;
    if (lives === 0) {
      showGameOver = true;
    }
  }
  collectibles.forEach(function (coinItem) {
    if (!coinItem.collected && isOverlapping(player, coinItem.sprite)) {
      coinItem.collected = true;
      coins += 1;
    }
  });
  var portals = worldObjects.filter(function (worldObject) {
    return worldObject.type === 'portal' && !worldObject.collected;
  });
  var didTeleport = false;
  worldObjects.forEach(function (worldObject) {
    if (worldObject.collected) {
      return;
    }
    if (didTeleport) {
      return;
    }
    if (worldObject.type === 'key' && isOverlapping(player, worldObject)) {
      worldObject.collected = true;
      hasKey = true;
      return;
    }
    if (worldObject.type === 'chest' && isOverlapping(player, worldObject)) {
      if (hasKey) {
        gameEnded = true;
        gameEndMessage = 'Voce abriu o bau com sucesso!';
      } else {
        showChestHint = true;
        player.position.x = worldObject.position.x - player.width - 16;
        player.velocity.x = 0;
      }
      return;
    }
    if (worldObject.type === 'portal' && portalCooldownFrames === 0 && isOverlapping(player, worldObject)) {
      var targetPortal = findPairedPortal(worldObject, portals);
      if (targetPortal) {
        var exitOnRight = player.position.x <= worldObject.position.x + worldObject.width / 2;
        player.position.x = exitOnRight ? targetPortal.position.x + targetPortal.width + 8 : targetPortal.position.x - player.width - 8;
        player.position.y = targetPortal.position.y + targetPortal.height - player.height;
        player.velocity.x = 0;
        player.velocity.y = 0;
        player.onGround = false;
        portalCooldownFrames = 24;
        didTeleport = true;
      }
      return;
    }
    if (worldObject.type === 'trampoline' && player.velocity.y >= 0 && player.position.y + player.height <= worldObject.position.y + Math.max(24, worldObject.height) && isOverlapping(player, worldObject)) {
      player.position.y = worldObject.position.y - player.height;
      player.velocity.y = -worldObject.bounce;
      player.onGround = false;
      player.glideWindowFrames = 36;
      player.glideArmed = false;
    }
  });
  if (!showGameOver && scrollOffsetY > 1000) {
    lives = Math.max(0, lives - 1);
    if (lives === 0) {
      showGameOver = true;
    } else {
      resetRunAfterFall();
    }
  }
  drawHud();
}
animate();
addEventListener('keydown', function (_ref5) {
  var keyCode = _ref5.keyCode;
  //console.log(keyCode)

  if (showChestHint) {
    if (keyCode === 27) {
      dismissChestHint();
    }
    return;
  }
  if (showStartMenu) {
    return;
  }
  if (gameEnded) {
    return;
  }
  if (keyCode === 27) {
    isPaused = !isPaused;
    return;
  }
  if (isPaused) {
    return;
  }
  switch (keyCode) {
    case 37:
      {
        // ← Move left
        keys.left.pressed = true;
        break;
      }
    case 39:
      {
        // → Move right
        keys.right.pressed = true;
        break;
      }
    case 40:
      {
        keys.down.pressed = true;
        break;
      }
    case 32:
      {
        // SPACE - Action (Jump / Fly / Swim)
        if (player.inWater && !keys.up.pressed) {
          player.velocity.y = -12;
        } else if (!keys.up.pressed && player.onGround) {
          player.velocity.y = -25;
          player.glideWindowFrames = 36;
          player.glideArmed = false;
        } else if (!keys.up.pressed && !player.onGround && player.glideWindowFrames > 0) {
          player.glideArmed = true;
        }
        keys.up.pressed = true;
        break;
      }
  }
});
addEventListener('keyup', function (_ref6) {
  var keyCode = _ref6.keyCode;
  //console.log(keyCode)

  if (showStartMenu || showChestHint) {
    return;
  }
  if (gameEnded) {
    return;
  }
  if (isPaused) {
    return;
  }
  switch (keyCode) {
    case 37:
      {
        // ← Move left
        keys.left.pressed = false;
        break;
      }
    case 39:
      {
        // → Move right
        keys.right.pressed = false;
        break;
      }
    case 40:
      {
        keys.down.pressed = false;
        break;
      }
    case 32:
      {
        // SPACE - Action
        keys.up.pressed = false;
        break;
      }
  }
});
canvas.addEventListener('click', function (event) {
  var rect = canvas.getBoundingClientRect();
  var scaleX = canvas.width / rect.width;
  var scaleY = canvas.height / rect.height;
  var mouseX = (event.clientX - rect.left) * scaleX;
  var mouseY = (event.clientY - rect.top) * scaleY;
  if (showStartMenu) {
    if (isPointInsideRect(mouseX, mouseY, startButton)) {
      showStartMenu = false;
      init();
    }
    return;
  }
  if (showChestHint) {
    if (isPointInsideRect(mouseX, mouseY, gotItButton)) {
      dismissChestHint();
    }
    return;
  }
  if (showGameOver) {
    if (isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton)) {
      showGameOver = false;
      init();
    } else if (isPointInsideRect(mouseX, mouseY, gameOverMenuButton)) {
      showGameOver = false;
      showStartMenu = true;
      init();
    }
    return;
  }
  if (gameEnded) {
    return;
  }
  if (isPaused) {
    if (isPointInsideRect(mouseX, mouseY, pauseResumeButton)) {
      isPaused = false;
    } else if (isPointInsideRect(mouseX, mouseY, pauseMenuButton)) {
      isPaused = false;
      showStartMenu = true;
      init();
    }
    return;
  }
  if (isPointInsidePauseButton(mouseX, mouseY)) {
    isPaused = !isPaused;
  }
});
canvas.addEventListener('mousemove', function (event) {
  var rect = canvas.getBoundingClientRect();
  var scaleX = canvas.width / rect.width;
  var scaleY = canvas.height / rect.height;
  var mouseX = (event.clientX - rect.left) * scaleX;
  var mouseY = (event.clientY - rect.top) * scaleY;
  var isPointer = false;
  if (showStartMenu) {
    isPointer = isPointInsideRect(mouseX, mouseY, startButton);
  } else if (showChestHint) {
    isPointer = isPointInsideRect(mouseX, mouseY, gotItButton);
  } else if (showGameOver) {
    isPointer = isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton) || isPointInsideRect(mouseX, mouseY, gameOverMenuButton);
  } else if (isPaused) {
    isPointer = isPointInsideRect(mouseX, mouseY, pauseResumeButton) || isPointInsideRect(mouseX, mouseY, pauseMenuButton);
  } else if (!gameEnded) {
    isPointer = isPointInsidePauseButton(mouseX, mouseY);
  }
  canvas.style.cursor = isPointer ? 'pointer' : 'default';
});
window.addEventListener('resize', function () {
  resizeCanvasToViewport();
  updateHudAnchors();
  updateSceneAnchors();
  centerCameraOnPlayer();
});

/***/ }),

/***/ "./src/js/levelConfig.js":
/*!*******************************!*\
  !*** ./src/js/levelConfig.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var W = 4400; // section width offset

function shift(items, dx) {
  return items.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      x: item.x + dx
    });
  });
}
var basePlatforms = [{
  x: 0,
  y: 450,
  type: 'small',
  scale: 1
}, {
  x: 350,
  y: 438,
  type: 'big',
  scale: 1.08
}, {
  x: 780,
  y: 450,
  type: 'small',
  scale: 0.95
}, {
  x: 1120,
  y: 428,
  type: 'big',
  scale: 1.2
}, {
  x: 2260,
  y: 432,
  type: 'big',
  scale: 1.12
}, {
  x: 2460,
  y: 450,
  type: 'small',
  scale: 1
}, {
  x: 2840,
  y: 420,
  type: 'big',
  scale: 1.25
}, {
  x: 3360,
  y: 450,
  type: 'small',
  scale: 0.92
}, {
  x: 3710,
  y: 435,
  type: 'big',
  scale: 1.1
}];
var baseCoins = [{
  x: 120,
  y: 380
}, {
  x: 210,
  y: 340
}, {
  x: 420,
  y: 355
}, {
  x: 560,
  y: 330
}, {
  x: 920,
  y: 375
}, {
  x: 1030,
  y: 330
}, {
  x: 1240,
  y: 348
}, {
  x: 1490,
  y: 360
}, {
  x: 1770,
  y: 375
}, {
  x: 2130,
  y: 335
}, {
  x: 2280,
  y: 300
}, {
  x: 2580,
  y: 370
}, {
  x: 2990,
  y: 315
}, {
  x: 3230,
  y: 360
}, {
  x: 3520,
  y: 380
}];
var baseWaterZones = [{
  x: 980,
  y: 322,
  width: 720,
  height: 132,
  tier: 'top'
}, {
  x: 720,
  y: 454,
  width: 1140,
  height: 270,
  tier: 'deep'
}];
var baseEnemies = [{
  x: 1720,
  y: 310,
  type: 'bat',
  scale: 0.14,
  range: 70,
  speed: 1.2
}, {
  x: 1280,
  y: 565,
  type: 'shark',
  scale: 0.12,
  range: 100,
  speed: 1.5
}];
var baseSandObjects = [{
  x: 705,
  y: 404,
  type: 'sand',
  width: 220,
  height: 120,
  scale: 1
}, {
  x: 940,
  y: 278,
  type: 'sand',
  width: 190,
  height: 105,
  scale: 1
}, {
  x: 1750,
  y: 406,
  type: 'sand',
  width: 180,
  height: 110,
  scale: 1
}];

// Objects per section — no key/chest in sections 1 and 2
var section1Objects = [{
  x: 1280,
  y: 402,
  type: 'trampoline',
  width: 72,
  height: 34,
  scale: 1.12,
  bounce: 34
}].concat(baseSandObjects, [{
  x: 3050,
  y: 360,
  type: 'portal',
  scale: 0.3,
  pairId: 'portalS1'
}, {
  x: 3900,
  y: 360,
  type: 'portal',
  scale: 0.3,
  pairId: 'portalS1'
}]);
var section2Objects = shift([{
  x: 1280,
  y: 402,
  type: 'trampoline',
  width: 72,
  height: 34,
  scale: 1.12,
  bounce: 34
}].concat(baseSandObjects, [{
  x: 3050,
  y: 360,
  type: 'portal',
  scale: 0.3,
  pairId: 'portalS2'
}, {
  x: 3900,
  y: 360,
  type: 'portal',
  scale: 0.3,
  pairId: 'portalS2'
}]), W);
var section3Objects = shift([{
  x: 1280,
  y: 402,
  type: 'trampoline',
  width: 72,
  height: 34,
  scale: 1.12,
  bounce: 34
}].concat(baseSandObjects, [{
  x: 1455,
  y: 545,
  type: 'key',
  width: 68,
  height: 68,
  scale: 0.6
}, {
  x: 2520,
  y: 376,
  type: 'chest',
  width: 96,
  height: 96,
  scale: 0.65
}, {
  x: 3050,
  y: 360,
  type: 'portal',
  scale: 0.3,
  pairId: 'portalS3'
}, {
  x: 3900,
  y: 360,
  type: 'portal',
  scale: 0.3,
  pairId: 'portalS3'
}]), W * 2);
var levelConfig = {
  platforms: [].concat(basePlatforms, _toConsumableArray(shift(basePlatforms, W)), _toConsumableArray(shift(basePlatforms, W * 2))),
  coins: [].concat(baseCoins, _toConsumableArray(shift(baseCoins, W)), _toConsumableArray(shift(baseCoins, W * 2))),
  objects: [].concat(_toConsumableArray(section1Objects), _toConsumableArray(section2Objects), _toConsumableArray(section3Objects)),
  waterZones: [].concat(baseWaterZones, _toConsumableArray(shift(baseWaterZones, W)), _toConsumableArray(shift(baseWaterZones, W * 2))),
  enemies: [].concat(baseEnemies, _toConsumableArray(shift(baseEnemies, W)), _toConsumableArray(shift(baseEnemies, W * 2)))
};
/* harmony default export */ __webpack_exports__["default"] = (levelConfig);

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map