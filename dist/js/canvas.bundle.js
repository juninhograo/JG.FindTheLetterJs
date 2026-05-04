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

/***/ "./src/img/background/BG_mountains_noon2_1024.png":
/*!********************************************************!*\
  !*** ./src/img/background/BG_mountains_noon2_1024.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c24ff57661a3131896b74b09ac0af019.png");

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

/***/ "./src/img/elements/first.png":
/*!************************************!*\
  !*** ./src/img/elements/first.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d77fd73999a7da4b9f2a974f864a2d5.png");

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

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-000.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-000.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "526ae0c8b609062b9a55aed31707a03e.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-001.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-001.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e65724b908ba3f2a513d1c921c98be3a.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-002.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-002.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1531e7e2408089b905804168a93a047a.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-003.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-003.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec0ae3d825696fd0bba2b8c6d0c92176.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-004.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-004.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f096eefb21bed4b76ea0995e84006437.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-005.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-005.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cbe5dc7f19026367d5fa24b1ef2d6c74.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-006.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-006.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8f929b9360ecf7430085cd1ae862cf1c.png");

/***/ }),

/***/ "./src/img/enemies/_debug_megalodon_bite_frames/frame-007.png":
/*!********************************************************************!*\
  !*** ./src/img/enemies/_debug_megalodon_bite_frames/frame-007.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8f005dc96ff2416d8fdd545216502b18.png");

/***/ }),

/***/ "./src/img/enemies/ant.png":
/*!*********************************!*\
  !*** ./src/img/enemies/ant.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f2f42bd98d714e54a096c729937ace9.png");

/***/ }),

/***/ "./src/img/enemies/bat-1.png":
/*!***********************************!*\
  !*** ./src/img/enemies/bat-1.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "acc98c4de79b94d58ae96b4225498045.png");

/***/ }),

/***/ "./src/img/enemies/elephant.png":
/*!**************************************!*\
  !*** ./src/img/enemies/elephant.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7be71c89b0267187c6bdc20cad5fc286.png");

/***/ }),

/***/ "./src/img/enemies/kangaroo-punch-transparent.png":
/*!********************************************************!*\
  !*** ./src/img/enemies/kangaroo-punch-transparent.png ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80d9047586165e91e53ea3bfe9ccbb61.png");

/***/ }),

/***/ "./src/img/enemies/megalodon-1.gif":
/*!*****************************************!*\
  !*** ./src/img/enemies/megalodon-1.gif ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "50e1c719815f7aba85aed81ff577fa63.gif");

/***/ }),

/***/ "./src/img/enemies/shark.png":
/*!***********************************!*\
  !*** ./src/img/enemies/shark.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e1f22819d016badbf65883652ceeccaa.png");

/***/ }),

/***/ "./src/img/friends/bear.png":
/*!**********************************!*\
  !*** ./src/img/friends/bear.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e2635ff4bc7cafc929f20a47b6dc74b7.png");

/***/ }),

/***/ "./src/img/friends/cow.png":
/*!*********************************!*\
  !*** ./src/img/friends/cow.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "17c781d09cb8a36b0bc5a219590ccf3e.png");

/***/ }),

/***/ "./src/img/friends/crocodile.png":
/*!***************************************!*\
  !*** ./src/img/friends/crocodile.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8b2dbc8ef730e38f13a37c0f74d43112.png");

/***/ }),

/***/ "./src/img/friends/dog.png":
/*!*********************************!*\
  !*** ./src/img/friends/dog.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5be3ac983a839b8a78d09d73c1b7dd3b.png");

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
/* harmony import */ var _levelConfigB__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./levelConfigB */ "./src/js/levelConfigB.js");
/* harmony import */ var _levelConfigC__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./levelConfigC */ "./src/js/levelConfigC.js");
/* harmony import */ var _levelConfigMystery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./levelConfigMystery */ "./src/js/levelConfigMystery.js");
/* harmony import */ var _img_background_BG_mountains_noon2_1024_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/background/BG_mountains_noon2_1024.png */ "./src/img/background/BG_mountains_noon2_1024.png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(1).png */ "./src/img/Player/Lucas/Idle/Idle-(1).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(2).png */ "./src/img/Player/Lucas/Idle/Idle-(2).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_3_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(3).png */ "./src/img/Player/Lucas/Idle/Idle-(3).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_4_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(4).png */ "./src/img/Player/Lucas/Idle/Idle-(4).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_5_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(5).png */ "./src/img/Player/Lucas/Idle/Idle-(5).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_6_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(6).png */ "./src/img/Player/Lucas/Idle/Idle-(6).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_7_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(7).png */ "./src/img/Player/Lucas/Idle/Idle-(7).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_8_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(8).png */ "./src/img/Player/Lucas/Idle/Idle-(8).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_9_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(9).png */ "./src/img/Player/Lucas/Idle/Idle-(9).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_10_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(10).png */ "./src/img/Player/Lucas/Idle/Idle-(10).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_11_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(11).png */ "./src/img/Player/Lucas/Idle/Idle-(11).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_12_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(12).png */ "./src/img/Player/Lucas/Idle/Idle-(12).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_13_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(13).png */ "./src/img/Player/Lucas/Idle/Idle-(13).png");
/* harmony import */ var _img_Player_Lucas_Idle_Idle_14_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../img/Player/Lucas/Idle/Idle-(14).png */ "./src/img/Player/Lucas/Idle/Idle-(14).png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_1_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-1.png */ "./src/img/Player/Lucas/Walk/Player-walk-1.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_2_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-2.png */ "./src/img/Player/Lucas/Walk/Player-walk-2.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_3_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-3.png */ "./src/img/Player/Lucas/Walk/Player-walk-3.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_4_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-4.png */ "./src/img/Player/Lucas/Walk/Player-walk-4.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_5_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-5.png */ "./src/img/Player/Lucas/Walk/Player-walk-5.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_7_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-7.png */ "./src/img/Player/Lucas/Walk/Player-walk-7.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_8_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-8.png */ "./src/img/Player/Lucas/Walk/Player-walk-8.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_9_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-9.png */ "./src/img/Player/Lucas/Walk/Player-walk-9.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_10_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-10.png */ "./src/img/Player/Lucas/Walk/Player-walk-10.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_11_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-11.png */ "./src/img/Player/Lucas/Walk/Player-walk-11.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_12_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-12.png */ "./src/img/Player/Lucas/Walk/Player-walk-12.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_13_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-13.png */ "./src/img/Player/Lucas/Walk/Player-walk-13.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_14_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-14.png */ "./src/img/Player/Lucas/Walk/Player-walk-14.png");
/* harmony import */ var _img_Player_Lucas_Walk_Player_walk_15_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../img/Player/Lucas/Walk/Player-walk-15.png */ "./src/img/Player/Lucas/Walk/Player-walk-15.png");
/* harmony import */ var _img_Player_Lucas_Jumping_Player_jump_1_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../img/Player/Lucas/Jumping/Player-jump-1.png */ "./src/img/Player/Lucas/Jumping/Player-jump-1.png");
/* harmony import */ var _img_Player_Lucas_Jumping_Player_jump_2_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../img/Player/Lucas/Jumping/Player-jump-2.png */ "./src/img/Player/Lucas/Jumping/Player-jump-2.png");
/* harmony import */ var _img_Player_Lucas_Flying_Player_flying_1_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../img/Player/Lucas/Flying/Player-flying-1.png */ "./src/img/Player/Lucas/Flying/Player-flying-1.png");
/* harmony import */ var _img_Player_Lucas_Flying_Player_flying_2_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../img/Player/Lucas/Flying/Player-flying-2.png */ "./src/img/Player/Lucas/Flying/Player-flying-2.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_1_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-1.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-1.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_2_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-2.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-2.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_3_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-3.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-3.png");
/* harmony import */ var _img_Player_Lucas_Swimming_Player_swimming_4_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../img/Player/Lucas/Swimming/Player-swimming-4.png */ "./src/img/Player/Lucas/Swimming/Player-swimming-4.png");
/* harmony import */ var _img_enemies_bat_1_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../img/enemies/bat-1.png */ "./src/img/enemies/bat-1.png");
/* harmony import */ var _img_enemies_shark_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../img/enemies/shark.png */ "./src/img/enemies/shark.png");
/* harmony import */ var _img_enemies_megalodon_1_gif__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../img/enemies/megalodon-1.gif */ "./src/img/enemies/megalodon-1.gif");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_000_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-000.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-000.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_001_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-001.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-001.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_002_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-002.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-002.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_003_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-003.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-003.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_004_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-004.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-004.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_005_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-005.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-005.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_006_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-006.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-006.png");
/* harmony import */ var _img_enemies_debug_megalodon_bite_frames_frame_007_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../img/enemies/_debug_megalodon_bite_frames/frame-007.png */ "./src/img/enemies/_debug_megalodon_bite_frames/frame-007.png");
/* harmony import */ var _img_enemies_ant_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../img/enemies/ant.png */ "./src/img/enemies/ant.png");
/* harmony import */ var _img_enemies_elephant_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../img/enemies/elephant.png */ "./src/img/enemies/elephant.png");
/* harmony import */ var _img_enemies_kangaroo_punch_transparent_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../img/enemies/kangaroo-punch-transparent.png */ "./src/img/enemies/kangaroo-punch-transparent.png");
/* harmony import */ var _img_elements_element_sea_1_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../img/elements/element-sea 1.png */ "./src/img/elements/element-sea 1.png");
/* harmony import */ var _img_friends_dog_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../img/friends/dog.png */ "./src/img/friends/dog.png");
/* harmony import */ var _img_friends_cow_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../img/friends/cow.png */ "./src/img/friends/cow.png");
/* harmony import */ var _img_friends_crocodile_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../img/friends/crocodile.png */ "./src/img/friends/crocodile.png");
/* harmony import */ var _img_friends_bear_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../img/friends/bear.png */ "./src/img/friends/bear.png");
/* harmony import */ var _img_elements_first_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../img/elements/first.png */ "./src/img/elements/first.png");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }























var activeLevelConfig = _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"];

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
function drawCrouchCrate(x, y, width, height) {
  var px = Math.max(1, Math.floor(Math.min(width, height) / 16));
  var frame = Math.max(2, px * 2);
  var innerFrame = Math.max(2, px);
  c.save();

  // Outer border and frame
  c.fillStyle = '#0b0908';
  c.fillRect(x, y, width, height);
  c.fillStyle = '#b57c3e';
  c.fillRect(x + frame, y + frame, width - frame * 2, height - frame * 2);

  // Frame tint blocks for pixel-art look
  var midX = x + width / 2;
  var midY = y + height / 2;
  c.fillStyle = '#c79249';
  c.fillRect(x + frame, y + frame, width / 2 - frame, height / 2 - frame);
  c.fillStyle = '#cda95d';
  c.fillRect(midX, y + frame, width / 2 - frame, height / 2 - frame);
  c.fillStyle = '#b3783f';
  c.fillRect(x + frame, midY, width / 2 - frame, height / 2 - frame);
  c.fillStyle = '#c89f55';
  c.fillRect(midX, midY, width / 2 - frame, height / 2 - frame);

  // Inner panel
  var panelX = x + frame + innerFrame;
  var panelY = y + frame + innerFrame;
  var panelW = width - (frame + innerFrame) * 2;
  var panelH = height - (frame + innerFrame) * 2;
  c.fillStyle = '#0b0908';
  c.fillRect(panelX, panelY, panelW, panelH);
  var woodPad = Math.max(1, px);
  var woodX = panelX + woodPad;
  var woodY = panelY + woodPad;
  var woodW = panelW - woodPad * 2;
  var woodH = panelH - woodPad * 2;
  c.fillStyle = '#b37545';
  c.fillRect(woodX, woodY, woodW, woodH);
  c.fillStyle = '#a96b44';
  c.fillRect(woodX, woodY + woodH * 0.5, woodW, woodH * 0.5);

  // Diagonal slats
  c.save();
  c.beginPath();
  c.rect(woodX, woodY, woodW, woodH);
  c.clip();
  c.lineWidth = Math.max(2, px * 2);
  for (var i = -woodH; i < woodW + woodH; i += Math.max(10, px * 6)) {
    c.strokeStyle = '#d2a160';
    c.beginPath();
    c.moveTo(woodX + i, woodY + woodH);
    c.lineTo(woodX + i + woodH, woodY);
    c.stroke();
    c.strokeStyle = '#7b3c31';
    c.beginPath();
    c.moveTo(woodX + i + Math.max(1, px), woodY + woodH);
    c.lineTo(woodX + i + woodH + Math.max(1, px), woodY);
    c.stroke();
  }
  c.restore();

  // Corner bolts
  var bolt = Math.max(2, px * 2);
  var boltPad = frame + Math.max(2, px * 2);
  var bolts = [[x + boltPad, y + boltPad], [x + width - boltPad - bolt, y + boltPad], [x + boltPad, y + height - boltPad - bolt], [x + width - boltPad - bolt, y + height - boltPad - bolt]];
  bolts.forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      bx = _ref3[0],
      by = _ref3[1];
    c.fillStyle = '#e1c072';
    c.fillRect(bx, by, bolt, bolt);
    c.fillStyle = '#67342f';
    c.fillRect(bx + Math.max(1, px), by + Math.max(1, px), bolt, bolt);
  });
  c.restore();
}
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.width = 72;
    this.height = 96;
    // Hitbox is 28% smaller than the visual sprite, centered on it
    this.standHitboxWidth = Math.round(72 * 0.72);
    this.standHitboxHeight = Math.round(96 * 0.72);
    this.crouchHitboxWidth = Math.round(this.standHitboxWidth * 0.5);
    this.crouchHitboxHeight = Math.round(this.standHitboxHeight * 0.5);
    this.hitboxWidth = this.standHitboxWidth;
    this.hitboxHeight = this.standHitboxHeight;
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
    this.isCrouching = false;
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
      if (this.isCrouching) {
        var _drawWidth = this.hitboxWidth;
        var _drawHeight = this.hitboxHeight;
        var _spriteX = this.position.x;
        var _spriteY = this.position.y;
        drawCrouchCrate(_spriteX, _spriteY, _drawWidth, _drawHeight);
        return;
      }
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
      var spriteX = this.position.x + offsetX;
      var spriteY = this.position.y + offsetY;
      c.save();
      if (!this.facingRight) {
        c.scale(-1, 1);
        var drawX = -(spriteX + drawWidth);
        c.drawImage(frame, drawX, spriteY, drawWidth, drawHeight);
        if (fins > 0) {
          var finBaseX = drawX + drawWidth * 0.5;
          var finBaseY = spriteY + drawHeight * 0.02;
          c.fillStyle = '#2f6f88';
          c.strokeStyle = '#d5f6ff';
          c.lineWidth = 2;
          c.beginPath();
          c.moveTo(finBaseX, finBaseY);
          c.lineTo(finBaseX + drawWidth * 0.12, finBaseY - drawHeight * 0.33);
          c.lineTo(finBaseX + drawWidth * 0.12, finBaseY + drawHeight * 0.1);
          c.closePath();
          c.fill();
          c.stroke();
        }
      } else {
        c.drawImage(frame, spriteX, spriteY, drawWidth, drawHeight);
        if (fins > 0) {
          var _finBaseX = spriteX + drawWidth * 0.5;
          var _finBaseY = spriteY + drawHeight * 0.02;
          c.fillStyle = '#2f6f88';
          c.strokeStyle = '#d5f6ff';
          c.lineWidth = 2;
          c.beginPath();
          c.moveTo(_finBaseX, _finBaseY);
          c.lineTo(_finBaseX - drawWidth * 0.12, _finBaseY - drawHeight * 0.33);
          c.lineTo(_finBaseX - drawWidth * 0.12, _finBaseY + drawHeight * 0.1);
          c.closePath();
          c.fill();
          c.stroke();
        }
      }
      c.restore();
    }
  }, {
    key: "update",
    value: function update(platforms) {
      var _this = this;
      var prevHitboxWidth = this.hitboxWidth;
      var prevHitboxHeight = this.hitboxHeight;
      var playerCenterX = this.position.x + prevHitboxWidth / 2;
      var playerBottomY = this.position.y + prevHitboxHeight;
      var wantsCrouch = keys.down.pressed && this.onGround && !this.inWater;
      var nextHitboxWidth = this.standHitboxWidth;
      var nextHitboxHeight = this.standHitboxHeight;
      var nextIsCrouching = false;
      if (wantsCrouch) {
        nextHitboxWidth = this.crouchHitboxWidth;
        nextHitboxHeight = this.crouchHitboxHeight;
        nextIsCrouching = true;
      } else if (this.isCrouching) {
        var standX = playerCenterX - this.standHitboxWidth / 2;
        var standY = playerBottomY - this.standHitboxHeight;
        var blockedOverhead = platforms.some(function (platform) {
          return standX < platform.position.x + platform.width && standX + _this.standHitboxWidth > platform.position.x && standY < platform.position.y + platform.height && standY + _this.standHitboxHeight > platform.position.y;
        });
        if (blockedOverhead) {
          nextHitboxWidth = this.crouchHitboxWidth;
          nextHitboxHeight = this.crouchHitboxHeight;
          nextIsCrouching = true;
        }
      }
      if (nextHitboxWidth !== prevHitboxWidth || nextHitboxHeight !== prevHitboxHeight) {
        this.hitboxWidth = nextHitboxWidth;
        this.hitboxHeight = nextHitboxHeight;
        this.position.x = playerCenterX - this.hitboxWidth / 2;
        this.position.y = playerBottomY - this.hitboxHeight;
      }
      this.isCrouching = nextIsCrouching;

      // Resolve horizontal movement first so side collisions don't push vertically.
      this.position.x += this.velocity.x;

      // Invisible left/right walls.
      if (this.position.x < worldBounds.minX) {
        this.position.x = worldBounds.minX;
        if (this.velocity.x < 0) this.velocity.x = 0;
      }
      var maxPlayerX = worldBounds.maxX - this.hitboxWidth;
      if (this.position.x > maxPlayerX) {
        this.position.x = maxPlayerX;
        if (this.velocity.x > 0) this.velocity.x = 0;
      }
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

      // Invisible top wall.
      if (this.position.y < worldBounds.topY) {
        this.position.y = worldBounds.topY;
        if (this.velocity.y < 0) this.velocity.y = 0;
      }

      // Invisible floor clamp (no-void safety).
      if (this.position.y + this.hitboxHeight > worldBounds.bottomY) {
        this.position.y = worldBounds.bottomY - this.hitboxHeight;
        if (this.velocity.y > 0) this.velocity.y = 0;
        this.onGround = true;
      }
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
var playerIdleFrames = [_img_Player_Lucas_Idle_Idle_1_png__WEBPACK_IMPORTED_MODULE_23__["default"], _img_Player_Lucas_Idle_Idle_2_png__WEBPACK_IMPORTED_MODULE_24__["default"], _img_Player_Lucas_Idle_Idle_3_png__WEBPACK_IMPORTED_MODULE_25__["default"], _img_Player_Lucas_Idle_Idle_4_png__WEBPACK_IMPORTED_MODULE_26__["default"], _img_Player_Lucas_Idle_Idle_5_png__WEBPACK_IMPORTED_MODULE_27__["default"], _img_Player_Lucas_Idle_Idle_6_png__WEBPACK_IMPORTED_MODULE_28__["default"], _img_Player_Lucas_Idle_Idle_7_png__WEBPACK_IMPORTED_MODULE_29__["default"], _img_Player_Lucas_Idle_Idle_8_png__WEBPACK_IMPORTED_MODULE_30__["default"], _img_Player_Lucas_Idle_Idle_9_png__WEBPACK_IMPORTED_MODULE_31__["default"], _img_Player_Lucas_Idle_Idle_10_png__WEBPACK_IMPORTED_MODULE_32__["default"], _img_Player_Lucas_Idle_Idle_11_png__WEBPACK_IMPORTED_MODULE_33__["default"], _img_Player_Lucas_Idle_Idle_12_png__WEBPACK_IMPORTED_MODULE_34__["default"], _img_Player_Lucas_Idle_Idle_13_png__WEBPACK_IMPORTED_MODULE_35__["default"], _img_Player_Lucas_Idle_Idle_14_png__WEBPACK_IMPORTED_MODULE_36__["default"]].map(createImage);
var playerWalkFrames = [_img_Player_Lucas_Walk_Player_walk_1_png__WEBPACK_IMPORTED_MODULE_37__["default"], _img_Player_Lucas_Walk_Player_walk_2_png__WEBPACK_IMPORTED_MODULE_38__["default"], _img_Player_Lucas_Walk_Player_walk_3_png__WEBPACK_IMPORTED_MODULE_39__["default"], _img_Player_Lucas_Walk_Player_walk_4_png__WEBPACK_IMPORTED_MODULE_40__["default"], _img_Player_Lucas_Walk_Player_walk_5_png__WEBPACK_IMPORTED_MODULE_41__["default"], _img_Player_Lucas_Walk_Player_walk_5_png__WEBPACK_IMPORTED_MODULE_41__["default"], _img_Player_Lucas_Walk_Player_walk_7_png__WEBPACK_IMPORTED_MODULE_42__["default"], _img_Player_Lucas_Walk_Player_walk_8_png__WEBPACK_IMPORTED_MODULE_43__["default"], _img_Player_Lucas_Walk_Player_walk_9_png__WEBPACK_IMPORTED_MODULE_44__["default"], _img_Player_Lucas_Walk_Player_walk_10_png__WEBPACK_IMPORTED_MODULE_45__["default"], _img_Player_Lucas_Walk_Player_walk_11_png__WEBPACK_IMPORTED_MODULE_46__["default"], _img_Player_Lucas_Walk_Player_walk_12_png__WEBPACK_IMPORTED_MODULE_47__["default"], _img_Player_Lucas_Walk_Player_walk_13_png__WEBPACK_IMPORTED_MODULE_48__["default"], _img_Player_Lucas_Walk_Player_walk_14_png__WEBPACK_IMPORTED_MODULE_49__["default"], _img_Player_Lucas_Walk_Player_walk_15_png__WEBPACK_IMPORTED_MODULE_50__["default"]].map(createImage);
var playerJumpFrames = [_img_Player_Lucas_Jumping_Player_jump_1_png__WEBPACK_IMPORTED_MODULE_51__["default"], _img_Player_Lucas_Jumping_Player_jump_2_png__WEBPACK_IMPORTED_MODULE_52__["default"]].map(createImage);
var playerFlyFrames = [_img_Player_Lucas_Flying_Player_flying_1_png__WEBPACK_IMPORTED_MODULE_53__["default"], _img_Player_Lucas_Flying_Player_flying_2_png__WEBPACK_IMPORTED_MODULE_54__["default"]].map(createImage);
var playerSwimFrames = [_img_Player_Lucas_Swimming_Player_swimming_1_png__WEBPACK_IMPORTED_MODULE_55__["default"], _img_Player_Lucas_Swimming_Player_swimming_2_png__WEBPACK_IMPORTED_MODULE_56__["default"], _img_Player_Lucas_Swimming_Player_swimming_3_png__WEBPACK_IMPORTED_MODULE_57__["default"], _img_Player_Lucas_Swimming_Player_swimming_4_png__WEBPACK_IMPORTED_MODULE_58__["default"]].map(createImage);

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
var batEnemyImage = createImage(_img_enemies_bat_1_png__WEBPACK_IMPORTED_MODULE_59__["default"]);
var sharkEnemyImage = createImage(_img_enemies_shark_png__WEBPACK_IMPORTED_MODULE_60__["default"]);
var megalodonEnemyImage = createImage(_img_enemies_megalodon_1_gif__WEBPACK_IMPORTED_MODULE_61__["default"]);
var megalodonBiteFrameImages = [_img_enemies_debug_megalodon_bite_frames_frame_000_png__WEBPACK_IMPORTED_MODULE_62__["default"], _img_enemies_debug_megalodon_bite_frames_frame_001_png__WEBPACK_IMPORTED_MODULE_63__["default"], _img_enemies_debug_megalodon_bite_frames_frame_002_png__WEBPACK_IMPORTED_MODULE_64__["default"], _img_enemies_debug_megalodon_bite_frames_frame_003_png__WEBPACK_IMPORTED_MODULE_65__["default"], _img_enemies_debug_megalodon_bite_frames_frame_004_png__WEBPACK_IMPORTED_MODULE_66__["default"], _img_enemies_debug_megalodon_bite_frames_frame_005_png__WEBPACK_IMPORTED_MODULE_67__["default"], _img_enemies_debug_megalodon_bite_frames_frame_006_png__WEBPACK_IMPORTED_MODULE_68__["default"], _img_enemies_debug_megalodon_bite_frames_frame_007_png__WEBPACK_IMPORTED_MODULE_69__["default"]].map(createImage);
var antEnemyImage = createImage(_img_enemies_ant_png__WEBPACK_IMPORTED_MODULE_70__["default"]);
var elephantEnemyImage = createImage(_img_enemies_elephant_png__WEBPACK_IMPORTED_MODULE_71__["default"]);
var kangarooEnemyImage = createImage(_img_enemies_kangaroo_punch_transparent_png__WEBPACK_IMPORTED_MODULE_72__["default"]);
var sandImage = createImage(_img_elements_element_sea_1_png__WEBPACK_IMPORTED_MODULE_73__["default"]);
var dogFriendImage = createImage(_img_friends_dog_png__WEBPACK_IMPORTED_MODULE_74__["default"]);
var cowFriendImage = createImage(_img_friends_cow_png__WEBPACK_IMPORTED_MODULE_75__["default"]);
var crocodileFriendImage = createImage(_img_friends_crocodile_png__WEBPACK_IMPORTED_MODULE_76__["default"]);
var bearFriendImage = createImage(_img_friends_bear_png__WEBPACK_IMPORTED_MODULE_77__["default"]);
var firstBadgeImage = createImage(_img_elements_first_png__WEBPACK_IMPORTED_MODULE_78__["default"]);
var desertBackgroundImage = createImage(_img_background_BG_mountains_noon2_1024_png__WEBPACK_IMPORTED_MODULE_22__["default"]);
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
var fins = 0;
var portalCooldownFrames = 0;
var enemyHitCooldownFrames = 0;
var driveByFrames = 1800;
var driveByRiders = [];
var driveBySpawnFromLeft = true;
var showStartMenu = true;
var showChestHint = false;
var showGameOver = false;
var moveHoldFrames = 0;
var moveHoldDirection = '';
var shootCooldownFrames = 0;
var soccerBalls = [];
var endQuizResult = 'idle';
var endQuizMessage = 'Choose the animal that starts with the letter A.';
var endQuizSelectedId = '';
var endQuizAnimFrames = 0;
var levelACompleted = false;
var levelBCompleted = false;
var levelCCompleted = false;
var levelABatKills = 0;
var canSummonBat = false;
var summonBatCooldownFrames = 0;
var batFlyGranted = false;
var batRewardBalloonFrames = 0;
var finRewardBalloonFrames = 0;
var alliedBats = [];
var sharkKills = 0;
var canSummonShark = false;
var summonSharkCooldownFrames = 0;
var sharkRewardBalloonFrames = 0;
var alliedSharks = [];
var antKills = 0;
var canSummonAnt = false;
var summonAntCooldownFrames = 0;
var antRewardBalloonFrames = 0;
var alliedAnts = [];
var platforms = [];
var collectibles = [];
var worldObjects = [];
var enemies = [];
var enemyDeathParticles = [];
var waterZones = [];
var worldBounds = {
  minX: 0,
  maxX: Number.POSITIVE_INFINITY,
  topY: Number.NEGATIVE_INFINITY,
  bottomY: Number.POSITIVE_INFINITY
};
function syncWorldBounds() {
  var _activeLevelConfig$wo, _activeLevelConfig$wo2, _activeLevelConfig$wo3, _activeLevelConfig$wo4, _activeLevelConfig$wo5, _activeLevelConfig$wo6, _activeLevelConfig$wo7, _activeLevelConfig$wo8;
  worldBounds.minX = (_activeLevelConfig$wo = (_activeLevelConfig$wo2 = activeLevelConfig.worldBounds) === null || _activeLevelConfig$wo2 === void 0 ? void 0 : _activeLevelConfig$wo2.minX) !== null && _activeLevelConfig$wo !== void 0 ? _activeLevelConfig$wo : 0;
  worldBounds.maxX = (_activeLevelConfig$wo3 = (_activeLevelConfig$wo4 = activeLevelConfig.worldBounds) === null || _activeLevelConfig$wo4 === void 0 ? void 0 : _activeLevelConfig$wo4.maxX) !== null && _activeLevelConfig$wo3 !== void 0 ? _activeLevelConfig$wo3 : Number.POSITIVE_INFINITY;
  worldBounds.topY = (_activeLevelConfig$wo5 = (_activeLevelConfig$wo6 = activeLevelConfig.worldBounds) === null || _activeLevelConfig$wo6 === void 0 ? void 0 : _activeLevelConfig$wo6.topY) !== null && _activeLevelConfig$wo5 !== void 0 ? _activeLevelConfig$wo5 : Number.NEGATIVE_INFINITY;
  worldBounds.bottomY = (_activeLevelConfig$wo7 = (_activeLevelConfig$wo8 = activeLevelConfig.worldBounds) === null || _activeLevelConfig$wo8 === void 0 ? void 0 : _activeLevelConfig$wo8.bottomY) !== null && _activeLevelConfig$wo7 !== void 0 ? _activeLevelConfig$wo7 : Number.POSITIVE_INFINITY;
}
var startButton = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var startButtonB = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var startButtonC = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};
var startButtonMystery = {
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
var endQuizOptionButtons = [{
  id: 'dog',
  label: 'Dog',
  isCorrect: false,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  buttonX: 0,
  buttonY: 0,
  buttonWidth: 0,
  buttonHeight: 0
}, {
  id: 'alligator',
  label: 'Alligator',
  isCorrect: true,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  buttonX: 0,
  buttonY: 0,
  buttonWidth: 0,
  buttonHeight: 0
}, {
  id: 'cow',
  label: 'Cow',
  isCorrect: false,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  buttonX: 0,
  buttonY: 0,
  buttonWidth: 0,
  buttonHeight: 0
}];
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
  var createdPlatforms = activeLevelConfig.platforms.map(function (configPlatform) {
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

  // Only enforce a minimum gap for platforms that are already separated in config;
  // tiled ground platforms (overlapping in config) are left at their natural positions.
  var minGapBetweenPlatforms = 80;
  for (var i = 1; i < createdPlatforms.length; i++) {
    var previous = createdPlatforms[i - 1];
    var current = createdPlatforms[i];
    var configGap = activeLevelConfig.platforms[i].x - (activeLevelConfig.platforms[i - 1].x + previous.width);
    if (configGap > 0) {
      var minX = previous.position.x + previous.width + minGapBetweenPlatforms;
      if (current.position.x < minX) {
        current.position.x = minX;
      }
    }
  }
  return createdPlatforms;
}
function createCollectibles() {
  var createdCollectibles = activeLevelConfig.coins.map(function (configCoin) {
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
  var createdWorldObjects = activeLevelConfig.objects.map(function (configObject) {
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
    shark: sharkEnemyImage,
    megalodon: megalodonEnemyImage,
    ant: antEnemyImage,
    elephant: elephantEnemyImage,
    kangaroo: kangarooEnemyImage
  };
  return activeLevelConfig.enemies.map(function (configEnemy) {
    var _configEnemy$scale, _configEnemy$range;
    var image = imageByType[configEnemy.type];
    var scale = (_configEnemy$scale = configEnemy.scale) !== null && _configEnemy$scale !== void 0 ? _configEnemy$scale : 1;
    var width = Math.round((configEnemy.width || image.width || 64) * scale);
    var height = Math.round((configEnemy.height || image.height || 64) * scale);
    if (configEnemy.type === 'megalodon') {
      // Keep boss visually massive but still readable on screen.
      var maxWidth = 900;
      var maxHeight = 420;
      var shrinkRatio = Math.min(maxWidth / width, maxHeight / height, 1);
      width = Math.round(width * shrinkRatio);
      height = Math.round(height * shrinkRatio);
    }
    var enemy = new GenericObject({
      x: configEnemy.x,
      y: configEnemy.y,
      width: width,
      height: height,
      image: image
    });
    enemy.type = configEnemy.type;
    enemy.baseY = configEnemy.y;
    if (configEnemy.type === 'shark' || configEnemy.type === 'megalodon') {
      var _configEnemy$speed, _configEnemy$speed2, _configEnemy$bobAmpli, _configEnemy$bobSpeed;
      enemy.hitboxWidth = Math.round(width * 0.8);
      enemy.hitboxHeight = Math.round(height * 0.8);
      enemy.motionStyle = configEnemy.motionStyle || 'swim';
      enemy.baseX = configEnemy.x;
      enemy.swimBaseY = configEnemy.y;
      enemy.horizontalSpeed = (_configEnemy$speed = configEnemy.speed) !== null && _configEnemy$speed !== void 0 ? _configEnemy$speed : 1.5;
      enemy.verticalSpeed = (_configEnemy$speed2 = configEnemy.speed) !== null && _configEnemy$speed2 !== void 0 ? _configEnemy$speed2 : 1;
      enemy.bobAmplitude = (_configEnemy$bobAmpli = configEnemy.bobAmplitude) !== null && _configEnemy$bobAmpli !== void 0 ? _configEnemy$bobAmpli : 12;
      enemy.bobSpeed = (_configEnemy$bobSpeed = configEnemy.bobSpeed) !== null && _configEnemy$bobSpeed !== void 0 ? _configEnemy$bobSpeed : 0.045;
      enemy.swimPhase = configEnemy.x % 360 * (Math.PI / 180);
      if (configEnemy.type === 'shark') {
        enemy.biteAnimFrames = 0;
        enemy.biteCooldownFrames = 0;
      }
      if (configEnemy.type === 'megalodon') {
        var _configEnemy$health, _configEnemy$health2, _configEnemy$damage, _configEnemy$attackCo, _configEnemy$chaseSpe, _configEnemy$summonIn, _configEnemy$summonIn2, _configEnemy$summonLi;
        enemy.maxHealth = (_configEnemy$health = configEnemy.health) !== null && _configEnemy$health !== void 0 ? _configEnemy$health : 10;
        enemy.health = (_configEnemy$health2 = configEnemy.health) !== null && _configEnemy$health2 !== void 0 ? _configEnemy$health2 : 10;
        enemy.damage = (_configEnemy$damage = configEnemy.damage) !== null && _configEnemy$damage !== void 0 ? _configEnemy$damage : 3;
        enemy.attackCooldownFrames = 0;
        enemy.attackIntervalFrames = (_configEnemy$attackCo = configEnemy.attackCooldownFrames) !== null && _configEnemy$attackCo !== void 0 ? _configEnemy$attackCo : 240;
        enemy.stompCooldownFrames = 0;
        enemy.chaseSpeed = (_configEnemy$chaseSpe = configEnemy.chaseSpeed) !== null && _configEnemy$chaseSpe !== void 0 ? _configEnemy$chaseSpe : 2.2;
        enemy.summonIntervalFrames = (_configEnemy$summonIn = configEnemy.summonIntervalFrames) !== null && _configEnemy$summonIn !== void 0 ? _configEnemy$summonIn : 220;
        enemy.summonCooldownFrames = Math.floor(((_configEnemy$summonIn2 = configEnemy.summonIntervalFrames) !== null && _configEnemy$summonIn2 !== void 0 ? _configEnemy$summonIn2 : 220) * 0.75);
        enemy.summonLimit = (_configEnemy$summonLi = configEnemy.summonLimit) !== null && _configEnemy$summonLi !== void 0 ? _configEnemy$summonLi : 4;
        enemy.biteAnimFrames = 0;
        enemy.biteCooldownFrames = 0;
      }
    } else if (configEnemy.type === 'ant') {
      var _configEnemy$speed3;
      enemy.chaseSpeed = (_configEnemy$speed3 = configEnemy.speed) !== null && _configEnemy$speed3 !== void 0 ? _configEnemy$speed3 : 1.5;
      enemy.groundY = configEnemy.y;
      enemy.stompCooldownFrames = 0;
      enemy.hitboxWidth = Math.round(width * 0.75);
      enemy.hitboxHeight = Math.round(height * 0.75);
    } else if (configEnemy.type === 'elephant') {
      var _configEnemy$speed4;
      enemy.groundY = configEnemy.y;
      enemy.isMount = true;
      enemy.mountSpeed = (_configEnemy$speed4 = configEnemy.speed) !== null && _configEnemy$speed4 !== void 0 ? _configEnemy$speed4 : 2.5;
      enemy.hitboxWidth = width;
      enemy.hitboxHeight = height;
    } else if (configEnemy.type === 'kangaroo') {
      var _configEnemy$speed5, _configEnemy$patrolSp, _configEnemy$patrolCe, _configEnemy$patrolRa, _configEnemy$chaseRan;
      enemy.chaseSpeed = (_configEnemy$speed5 = configEnemy.speed) !== null && _configEnemy$speed5 !== void 0 ? _configEnemy$speed5 : 2;
      enemy.patrolSpeed = (_configEnemy$patrolSp = configEnemy.patrolSpeed) !== null && _configEnemy$patrolSp !== void 0 ? _configEnemy$patrolSp : 1.2;
      enemy.groundY = configEnemy.y;
      enemy.stompCooldownFrames = 0;
      enemy.hitboxWidth = Math.round(width * 0.75);
      enemy.hitboxHeight = Math.round(height * 0.75);
      enemy.animFrame = 0;
      enemy.animTick = 0;
      enemy.patrolCenter = (_configEnemy$patrolCe = configEnemy.patrolCenter) !== null && _configEnemy$patrolCe !== void 0 ? _configEnemy$patrolCe : configEnemy.x;
      enemy.patrolRange = (_configEnemy$patrolRa = configEnemy.patrolRange) !== null && _configEnemy$patrolRa !== void 0 ? _configEnemy$patrolRa : 150;
      enemy.chaseRange = (_configEnemy$chaseRan = configEnemy.chaseRange) !== null && _configEnemy$chaseRan !== void 0 ? _configEnemy$chaseRan : 350;
      enemy.isChasing = false;
    } else {
      var _configEnemy$speed6;
      enemy.verticalSpeed = (_configEnemy$speed6 = configEnemy.speed) !== null && _configEnemy$speed6 !== void 0 ? _configEnemy$speed6 : 1;
    }
    enemy.range = (_configEnemy$range = configEnemy.range) !== null && _configEnemy$range !== void 0 ? _configEnemy$range : 60;
    enemy.direction = -1;
    return enemy;
  });
}
function summonSharkFromMegalodon(boss) {
  var _boss$summonLimit;
  var aliveSummonedSharks = enemies.filter(function (enemy) {
    return enemy.type === 'shark' && enemy.isSummoned;
  }).length;
  if (aliveSummonedSharks >= ((_boss$summonLimit = boss.summonLimit) !== null && _boss$summonLimit !== void 0 ? _boss$summonLimit : 4)) {
    return;
  }
  var summonScale = 0.2;
  var width = Math.round((sharkEnemyImage.width || 64) * summonScale);
  var height = Math.round((sharkEnemyImage.height || 64) * summonScale);
  var summonOnRight = boss.direction > 0;
  var spawnX = summonOnRight ? boss.position.x + boss.width + 14 : boss.position.x - width - 14;
  var spawnY = boss.position.y + boss.height * 0.42;
  var summonedShark = new GenericObject({
    x: spawnX,
    y: spawnY,
    width: width,
    height: height,
    image: sharkEnemyImage
  });
  summonedShark.type = 'shark';
  summonedShark.isSummoned = true;
  summonedShark.followPlayer = true;
  summonedShark.chaseSpeed = 2.8;
  summonedShark.verticalChaseSpeed = 1.8;
  summonedShark.hitboxWidth = Math.round(width * 0.8);
  summonedShark.hitboxHeight = Math.round(height * 0.8);
  summonedShark.motionStyle = 'bat';
  summonedShark.baseX = spawnX;
  summonedShark.baseY = spawnY;
  summonedShark.swimBaseY = spawnY;
  summonedShark.horizontalSpeed = 1.3;
  summonedShark.verticalSpeed = 1.1;
  summonedShark.bobAmplitude = 12;
  summonedShark.bobSpeed = 0.045;
  summonedShark.swimPhase = spawnX % 360 * (Math.PI / 180);
  summonedShark.range = 70;
  summonedShark.direction = summonOnRight ? 1 : -1;
  summonedShark.biteAnimFrames = 0;
  summonedShark.biteCooldownFrames = 0;
  enemies.push(summonedShark);
}
function updateSharkBiteState(enemy) {
  var _enemy$biteCooldownFr, _enemy$biteAnimFrames, _enemy$biteCooldownFr2;
  if (((_enemy$biteCooldownFr = enemy.biteCooldownFrames) !== null && _enemy$biteCooldownFr !== void 0 ? _enemy$biteCooldownFr : 0) > 0) {
    enemy.biteCooldownFrames -= 1;
  }
  if (((_enemy$biteAnimFrames = enemy.biteAnimFrames) !== null && _enemy$biteAnimFrames !== void 0 ? _enemy$biteAnimFrames : 0) > 0) {
    enemy.biteAnimFrames -= 1;
  }
  var enemyCenterX = enemy.position.x + enemy.width / 2;
  var enemyCenterY = enemy.position.y + enemy.height / 2;
  var playerCenterX = player.position.x + player.hitboxWidth / 2;
  var playerCenterY = player.position.y + player.hitboxHeight / 2;
  var distance = Math.hypot(playerCenterX - enemyCenterX, playerCenterY - enemyCenterY);
  if (distance <= 240 && ((_enemy$biteCooldownFr2 = enemy.biteCooldownFrames) !== null && _enemy$biteCooldownFr2 !== void 0 ? _enemy$biteCooldownFr2 : 0) <= 0) {
    enemy.biteAnimFrames = 18;
    enemy.biteCooldownFrames = 42;
  }
}
function updateMegalodonBiteState(enemy) {
  var _enemy$biteCooldownFr3, _enemy$biteAnimFrames2, _enemy$biteCooldownFr4, _enemy$biteAnimFrames3;
  var biteSpriteFrames = Math.max(1, megalodonBiteFrameImages.length);
  var megalodonBiteFrames = biteSpriteFrames * 4;
  if (((_enemy$biteCooldownFr3 = enemy.biteCooldownFrames) !== null && _enemy$biteCooldownFr3 !== void 0 ? _enemy$biteCooldownFr3 : 0) > 0) {
    enemy.biteCooldownFrames -= 1;
  }
  if (((_enemy$biteAnimFrames2 = enemy.biteAnimFrames) !== null && _enemy$biteAnimFrames2 !== void 0 ? _enemy$biteAnimFrames2 : 0) > 0) {
    enemy.biteAnimFrames -= 1;
  }
  var enemyCenterX = enemy.position.x + enemy.width / 2;
  var enemyCenterY = enemy.position.y + enemy.height / 2;
  var playerCenterX = player.position.x + player.hitboxWidth / 2;
  var playerCenterY = player.position.y + player.hitboxHeight / 2;
  var distance = Math.hypot(playerCenterX - enemyCenterX, playerCenterY - enemyCenterY);
  if (distance <= 400 && ((_enemy$biteCooldownFr4 = enemy.biteCooldownFrames) !== null && _enemy$biteCooldownFr4 !== void 0 ? _enemy$biteCooldownFr4 : 0) <= 0 && ((_enemy$biteAnimFrames3 = enemy.biteAnimFrames) !== null && _enemy$biteAnimFrames3 !== void 0 ? _enemy$biteAnimFrames3 : 0) <= 0) {
    var _enemy$attackInterval;
    enemy.biteAnimFrames = megalodonBiteFrames;
    enemy.biteAnimTotalFrames = megalodonBiteFrames;
    enemy.biteCooldownFrames = Math.max((_enemy$attackInterval = enemy.attackIntervalFrames) !== null && _enemy$attackInterval !== void 0 ? _enemy$attackInterval : 240, megalodonBiteFrames + 20);
  }
}
function drawMegalodonWithBite(enemy) {
  var _enemy$biteAnimFrames4, _enemy$biteAnimTotalF, _enemy$direction;
  var biteFrames = (_enemy$biteAnimFrames4 = enemy.biteAnimFrames) !== null && _enemy$biteAnimFrames4 !== void 0 ? _enemy$biteAnimFrames4 : 0;
  var totalBiteFrames = (_enemy$biteAnimTotalF = enemy.biteAnimTotalFrames) !== null && _enemy$biteAnimTotalF !== void 0 ? _enemy$biteAnimTotalF : Math.max(1, megalodonBiteFrameImages.length) * 8;
  // Megalodon sprite faces LEFT by default, so flip when facing right (direction > 0)
  var shouldFlip = ((_enemy$direction = enemy.direction) !== null && _enemy$direction !== void 0 ? _enemy$direction : 1) > 0;
  var imageToDraw = megalodonEnemyImage;
  if (biteFrames <= 0) {
    imageToDraw = megalodonEnemyImage;
  } else {
    // Force full bite playback frame-by-frame to avoid GIF freeze on canvas.
    var biteSpriteFrames = Math.max(1, megalodonBiteFrameImages.length);
    var elapsedFrames = Math.max(0, totalBiteFrames - biteFrames);
    var framesPerSprite = Math.max(1, Math.floor(totalBiteFrames / biteSpriteFrames));
    var frameIndex = Math.min(biteSpriteFrames - 1, Math.floor(elapsedFrames / framesPerSprite));
    imageToDraw = megalodonBiteFrameImages[frameIndex] || megalodonEnemyImage;
  }
  c.save();
  if (shouldFlip) {
    c.scale(-1, 1);
    c.drawImage(imageToDraw, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height);
  } else {
    c.drawImage(imageToDraw, enemy.position.x, enemy.position.y, enemy.width, enemy.height);
  }
  c.restore();
}
function drawSharkWithBite(enemy) {
  var _enemy$biteAnimFrames5;
  var biteFrames = (_enemy$biteAnimFrames5 = enemy.biteAnimFrames) !== null && _enemy$biteAnimFrames5 !== void 0 ? _enemy$biteAnimFrames5 : 0;
  if (biteFrames <= 0) {
    var _enemy$direction2;
    // No bite — draw with direction flip
    var shouldFlip = ((_enemy$direction2 = enemy.direction) !== null && _enemy$direction2 !== void 0 ? _enemy$direction2 : 1) < 0;
    c.save();
    if (shouldFlip) {
      c.scale(-1, 1);
      c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height);
    } else {
      c.drawImage(enemy.image, enemy.position.x, enemy.position.y, enemy.width, enemy.height);
    }
    c.restore();
    return;
  }
  var frameProgress = 18 - biteFrames;
  var chomp = Math.abs(Math.sin(frameProgress * 0.9)) * 0.22;
  var drawWidth = enemy.width * (1 + chomp);
  var drawHeight = enemy.height * (1 - chomp * 0.12);
  var direction = enemy.direction >= 0 ? 1 : -1;
  var lunge = chomp * 18 * direction;
  var drawX = enemy.position.x - (drawWidth - enemy.width) / 2 + lunge;
  var drawY = enemy.position.y + (enemy.height - drawHeight) / 2;
  c.save();
  if (enemy.direction < 0) {
    c.scale(-1, 1);
    c.drawImage(enemy.image, -(drawX + drawWidth), drawY, drawWidth, drawHeight);
  } else {
    c.drawImage(enemy.image, drawX, drawY, drawWidth, drawHeight);
  }
  c.restore();
}
function drawKangarooAnimated(enemy) {
  // Use the stable transparent sprite so kangaroo is always visible.
  var frame = enemy.image || kangarooEnemyImage;
  c.save();
  if (enemy.direction < 0) {
    c.scale(-1, 1);
    c.drawImage(frame, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height);
  } else {
    c.drawImage(frame, enemy.position.x, enemy.position.y, enemy.width, enemy.height);
  }
  c.restore();
}
function teleportToChest() {
  var chestObject = worldObjects.find(function (wo) {
    return wo.type === 'chest' && !wo.collected;
  });
  if (!chestObject) return;
  scrollOffset = 0;
  scrollOffsetY = 0;
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
function handleEnemyDefeat(enemyEntity) {
  if (!enemyEntity) {
    return;
  }
  if (enemyEntity.type === 'shark') {
    // Shark rewards are permanent: first fin gives +20% swim speed,
    // each extra fin adds another +10%.
    var hadNoFins = fins === 0;
    fins += 1;
    if (hadNoFins) {
      finRewardBalloonFrames = 360;
    }
  }
  if (enemyEntity.type === 'bat' && activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"] && !canSummonBat) {
    levelABatKills += 1;
    if (levelABatKills >= 2) {
      canSummonBat = true;
      batRewardBalloonFrames = 360;
    }
  }
  if ((enemyEntity.type === 'shark' || enemyEntity.type === 'megalodon') && (activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"] || activeLevelConfig === _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"]) && !canSummonShark) {
    sharkKills += 1;
    if (sharkKills >= 3) {
      canSummonShark = true;
      sharkRewardBalloonFrames = 360;
    }
  }
  if (enemyEntity.type === 'ant' && !canSummonAnt) {
    antKills += 1;
    if (antKills >= 20) {
      canSummonAnt = true;
      antRewardBalloonFrames = 360;
    }
  }

  // On Level B, once all megalodon and sharks are dead, teleport player to the chest.
  if (activeLevelConfig !== _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"] && (enemyEntity.type === 'megalodon' || enemyEntity.type === 'shark')) {
    var remaining = enemies.filter(function (e) {
      return e !== enemyEntity && (e.type === 'megalodon' || e.type === 'shark');
    });
    if (remaining.length === 0) {
      teleportToChest();
    }
  }
}
function drawBatRewardBalloon() {
  var boxWidth = Math.min(620, canvas.width - 40);
  var boxHeight = 110;
  var boxX = canvas.width / 2 - boxWidth / 2;
  var boxY = hudBarHeight + 18;
  c.save();
  c.fillStyle = 'rgba(245, 254, 255, 0.97)';
  c.strokeStyle = '#2d92a3';
  c.lineWidth = 3;
  c.beginPath();
  c.roundRect(boxX, boxY, boxWidth, boxHeight, 12);
  c.fill();
  c.stroke();

  // Balloon pointer
  c.beginPath();
  c.moveTo(boxX + 86, boxY + boxHeight);
  c.lineTo(boxX + 124, boxY + boxHeight);
  c.lineTo(boxX + 98, boxY + boxHeight + 20);
  c.closePath();
  c.fill();
  c.stroke();
  c.textAlign = 'left';
  c.textBaseline = 'top';
  c.fillStyle = '#124f61';
  c.font = "700 24px \"".concat(buttonFontFamily, "\"");
  c.fillText('Quest complete! Bat power unlocked', boxX + 18, boxY + 14);
  c.fillStyle = '#17323f';
  c.font = "500 18px \"".concat(bodyFontFamily, "\"");
  c.fillText('Press D to summon an ally bat. First summon each level gives 10s flight.', boxX + 18, boxY + 52);
  c.restore();
}
function drawSharkRewardBalloon() {
  var boxWidth = Math.min(620, canvas.width - 40);
  var boxHeight = 110;
  var boxX = canvas.width / 2 - boxWidth / 2;
  var boxY = hudBarHeight + 254;
  c.save();
  c.fillStyle = 'rgba(236, 244, 255, 0.97)';
  c.strokeStyle = '#2d5fa3';
  c.lineWidth = 3;
  c.beginPath();
  c.roundRect(boxX, boxY, boxWidth, boxHeight, 12);
  c.fill();
  c.stroke();
  c.beginPath();
  c.moveTo(boxX + 86, boxY + boxHeight);
  c.lineTo(boxX + 124, boxY + boxHeight);
  c.lineTo(boxX + 98, boxY + boxHeight + 20);
  c.closePath();
  c.fill();
  c.stroke();
  c.textAlign = 'left';
  c.textBaseline = 'top';
  c.fillStyle = '#12294f';
  c.font = "700 24px \"".concat(buttonFontFamily, "\"");
  c.fillText('Quest complete! Shark power unlocked', boxX + 18, boxY + 14);
  c.fillStyle = '#17323f';
  c.font = "500 18px \"".concat(bodyFontFamily, "\"");
  c.fillText('Press D to summon an ally shark that attacks enemies.', boxX + 18, boxY + 52);
  c.restore();
}
function drawAntRewardBalloon() {
  var boxWidth = Math.min(620, canvas.width - 40);
  var boxHeight = 110;
  var boxX = canvas.width / 2 - boxWidth / 2;
  var boxY = hudBarHeight + 340;
  c.save();
  c.fillStyle = 'rgba(245, 255, 237, 0.97)';
  c.strokeStyle = '#4f8f2e';
  c.lineWidth = 3;
  c.beginPath();
  c.roundRect(boxX, boxY, boxWidth, boxHeight, 12);
  c.fill();
  c.stroke();
  c.beginPath();
  c.moveTo(boxX + 86, boxY + boxHeight);
  c.lineTo(boxX + 124, boxY + boxHeight);
  c.lineTo(boxX + 98, boxY + boxHeight + 20);
  c.closePath();
  c.fill();
  c.stroke();
  c.textAlign = 'left';
  c.textBaseline = 'top';
  c.fillStyle = '#1f4a13';
  c.font = "700 24px \"".concat(buttonFontFamily, "\"");
  c.fillText('Quest complete! Ant helper unlocked', boxX + 18, boxY + 14);
  c.fillStyle = '#17323f';
  c.font = "500 18px \"".concat(bodyFontFamily, "\"");
  c.fillText('Press D to summon an ally ant that fights enemies.', boxX + 18, boxY + 52);
  c.restore();
}
function drawFinRewardBalloon() {
  var boxWidth = Math.min(600, canvas.width - 50);
  var boxHeight = 104;
  var boxX = canvas.width / 2 - boxWidth / 2;
  var boxY = hudBarHeight + 136;
  c.save();
  c.fillStyle = 'rgba(236, 251, 255, 0.97)';
  c.strokeStyle = '#2e6f88';
  c.lineWidth = 3;
  c.beginPath();
  c.roundRect(boxX, boxY, boxWidth, boxHeight, 12);
  c.fill();
  c.stroke();
  c.beginPath();
  c.moveTo(boxX + boxWidth - 132, boxY);
  c.lineTo(boxX + boxWidth - 96, boxY);
  c.lineTo(boxX + boxWidth - 114, boxY - 18);
  c.closePath();
  c.fill();
  c.stroke();
  c.textAlign = 'left';
  c.textBaseline = 'top';
  c.fillStyle = '#124f61';
  c.font = "700 24px \"".concat(buttonFontFamily, "\"");
  c.fillText('Fin unlocked!', boxX + 18, boxY + 14);
  c.fillStyle = '#17323f';
  c.font = "500 18px \"".concat(bodyFontFamily, "\"");
  c.fillText('Killing sharks gives you a fin and makes you swim faster.', boxX + 18, boxY + 50);
  c.restore();
}
function shootSoccerBall() {
  if (shootCooldownFrames > 0) {
    return;
  }
  var size = 20;
  var direction = player.facingRight ? 1 : -1;
  soccerBalls.push({
    position: {
      x: player.position.x + player.hitboxWidth / 2 - size / 2,
      y: player.position.y + player.hitboxHeight / 2 - size / 2
    },
    width: size,
    height: size,
    vx: direction * 14,
    vy: -1.4,
    life: 160
  });

  // 5 seconds at ~60 FPS.
  shootCooldownFrames = 300;
}
function summonFriendlyBat() {
  if (!canSummonBat || summonBatCooldownFrames > 0) {
    return;
  }
  alliedBats.push({
    position: {
      x: player.position.x - 52,
      y: player.position.y - 28
    },
    width: 64,
    height: 40,
    vx: 0,
    vy: 0,
    life: 900,
    health: 3,
    attackCooldownFrames: 0,
    damageCooldownFrames: 0
  });
  if (!batFlyGranted) {
    flyAbilityFrames = 600;
    batFlyGranted = true;
  }
  summonBatCooldownFrames = 360;
}
function updateFriendlyBats() {
  if (summonBatCooldownFrames > 0) {
    summonBatCooldownFrames -= 1;
  }
  alliedBats = alliedBats.filter(function (ally) {
    return ally.life > 0 && ally.health > 0;
  });
  alliedBats.forEach(function (ally) {
    ally.life -= 1;
    if (ally.attackCooldownFrames > 0) {
      ally.attackCooldownFrames -= 1;
    }
    if (ally.damageCooldownFrames > 0) {
      ally.damageCooldownFrames -= 1;
    }
    var closestEnemy = null;
    var closestDistance = Number.POSITIVE_INFINITY;
    enemies.forEach(function (enemy) {
      var dx = enemy.position.x + enemy.width / 2 - (ally.position.x + ally.width / 2);
      var dy = enemy.position.y + enemy.height / 2 - (ally.position.y + ally.height / 2);
      var dist = Math.hypot(dx, dy);
      if (dist < closestDistance) {
        closestDistance = dist;
        closestEnemy = enemy;
      }
    });
    var targetX = player.position.x - 48;
    var targetY = player.position.y - 36;
    if (closestEnemy && closestDistance < 520) {
      targetX = closestEnemy.position.x + closestEnemy.width / 2 - ally.width / 2;
      targetY = closestEnemy.position.y + closestEnemy.height / 2 - ally.height / 2;
    }
    var moveDx = targetX - ally.position.x;
    var moveDy = targetY - ally.position.y;
    ally.vx = Math.sign(moveDx) * Math.min(Math.abs(moveDx), 5.6);
    ally.vy = Math.sign(moveDy) * Math.min(Math.abs(moveDy), 3.8);
    ally.position.x += ally.vx;
    ally.position.y += ally.vy;
    if (closestEnemy && ally.attackCooldownFrames <= 0 && isOverlapping(ally, closestEnemy)) {
      if (closestEnemy.type === 'megalodon') {
        var _ref4, _closestEnemy$health;
        closestEnemy.health = Math.max(0, ((_ref4 = (_closestEnemy$health = closestEnemy.health) !== null && _closestEnemy$health !== void 0 ? _closestEnemy$health : closestEnemy.maxHealth) !== null && _ref4 !== void 0 ? _ref4 : 10) - 0.5);
        if (closestEnemy.health <= 0) {
          closestEnemy.health = 0;
          var deadIndex = enemies.indexOf(closestEnemy);
          if (deadIndex > -1) {
            enemies.splice(deadIndex, 1);
          }
          handleEnemyDefeat(closestEnemy);
          spawnEnemyDeathExplosion(closestEnemy);
        }
      } else {
        var _closestEnemy$health2;
        closestEnemy.health = ((_closestEnemy$health2 = closestEnemy.health) !== null && _closestEnemy$health2 !== void 0 ? _closestEnemy$health2 : 1) - 0.5;
        if (closestEnemy.health <= 0) {
          var _deadIndex = enemies.indexOf(closestEnemy);
          if (_deadIndex > -1) {
            enemies.splice(_deadIndex, 1);
          }
          handleEnemyDefeat(closestEnemy);
          spawnEnemyDeathExplosion(closestEnemy);
        }
      }
      ally.attackCooldownFrames = 120;
    }

    // Allied bat takes damage from enemy contact
    if (ally.damageCooldownFrames <= 0) {
      enemies.forEach(function (enemy) {
        if (ally.health > 0 && isOverlapping(ally, enemy)) {
          ally.health -= 1;
          ally.damageCooldownFrames = 90;
        }
      });
    }
    c.save();
    c.globalAlpha = 0.95;
    c.drawImage(batEnemyImage, ally.position.x, ally.position.y, ally.width, ally.height);
    c.restore();
  });
}
function isEntityInWater(entity, widthOverride, heightOverride) {
  var entityWidth = widthOverride !== null && widthOverride !== void 0 ? widthOverride : entity.width;
  var entityHeight = heightOverride !== null && heightOverride !== void 0 ? heightOverride : entity.height;
  var px = entity.position.x + entityWidth / 2;
  return waterZones.some(function (zone) {
    return px > zone.x && px < zone.x + zone.width && entity.position.y + entityHeight > zone.y && entity.position.y < zone.y + zone.height;
  });
}
function summonFriendlyShark() {
  if (!canSummonShark || summonSharkCooldownFrames > 0) {
    return;
  }

  // Sharks can only be summoned while the player is in water.
  if (!isEntityInWater(player, player.hitboxWidth, player.hitboxHeight)) {
    return;
  }
  alliedSharks.push({
    position: {
      x: player.position.x - 80,
      y: player.position.y
    },
    width: 80,
    height: 44,
    vx: 0,
    vy: 0,
    life: 900,
    health: 4,
    attackCooldownFrames: 0,
    damageCooldownFrames: 0
  });
  summonSharkCooldownFrames = 360;
}
function updateAlliedSharks() {
  if (summonSharkCooldownFrames > 0) {
    summonSharkCooldownFrames -= 1;
  }
  alliedSharks = alliedSharks.filter(function (ally) {
    return ally.life > 0 && ally.health > 0;
  });
  alliedSharks.forEach(function (ally) {
    // Ally shark dies immediately when leaving water.
    if (!isEntityInWater(ally)) {
      ally.life = 0;
      ally.health = 0;
      return;
    }
    ally.life -= 1;
    if (ally.attackCooldownFrames > 0) ally.attackCooldownFrames -= 1;
    if (ally.damageCooldownFrames > 0) ally.damageCooldownFrames -= 1;
    var closestEnemy = null;
    var closestDistance = Number.POSITIVE_INFINITY;
    enemies.forEach(function (enemy) {
      var dx = enemy.position.x + enemy.width / 2 - (ally.position.x + ally.width / 2);
      var dy = enemy.position.y + enemy.height / 2 - (ally.position.y + ally.height / 2);
      var dist = Math.hypot(dx, dy);
      if (dist < closestDistance) {
        closestDistance = dist;
        closestEnemy = enemy;
      }
    });
    var targetX = player.position.x - 80;
    var targetY = player.position.y;
    if (closestEnemy && closestDistance < 520) {
      targetX = closestEnemy.position.x + closestEnemy.width / 2 - ally.width / 2;
      targetY = closestEnemy.position.y + closestEnemy.height / 2 - ally.height / 2;
    }
    var moveDx = targetX - ally.position.x;
    var moveDy = targetY - ally.position.y;
    ally.vx = Math.sign(moveDx) * Math.min(Math.abs(moveDx), 6);
    ally.vy = Math.sign(moveDy) * Math.min(Math.abs(moveDy), 4);
    ally.position.x += ally.vx;
    ally.position.y += ally.vy;
    if (closestEnemy && ally.attackCooldownFrames <= 0 && isOverlapping(ally, closestEnemy)) {
      if (closestEnemy.type === 'megalodon') {
        var _ref5, _closestEnemy$health3;
        closestEnemy.health = Math.max(0, ((_ref5 = (_closestEnemy$health3 = closestEnemy.health) !== null && _closestEnemy$health3 !== void 0 ? _closestEnemy$health3 : closestEnemy.maxHealth) !== null && _ref5 !== void 0 ? _ref5 : 10) - 0.5);
        if (closestEnemy.health <= 0) {
          var deadIndex = enemies.indexOf(closestEnemy);
          if (deadIndex > -1) enemies.splice(deadIndex, 1);
          handleEnemyDefeat(closestEnemy);
          spawnEnemyDeathExplosion(closestEnemy);
        }
      } else if (closestEnemy.type !== 'elephant') {
        var _closestEnemy$health4;
        closestEnemy.health = ((_closestEnemy$health4 = closestEnemy.health) !== null && _closestEnemy$health4 !== void 0 ? _closestEnemy$health4 : 1) - 1;
        if (closestEnemy.health <= 0) {
          var _deadIndex2 = enemies.indexOf(closestEnemy);
          if (_deadIndex2 > -1) enemies.splice(_deadIndex2, 1);
          handleEnemyDefeat(closestEnemy);
          spawnEnemyDeathExplosion(closestEnemy);
        }
      }
      ally.attackCooldownFrames = 100;
    }
    if (ally.damageCooldownFrames <= 0) {
      enemies.forEach(function (enemy) {
        if (ally.health > 0 && isOverlapping(ally, enemy)) {
          ally.health -= 1;
          ally.damageCooldownFrames = 90;
        }
      });
    }
    c.save();
    c.globalAlpha = 0.95;
    if (ally.vx < 0) {
      c.scale(-1, 1);
      c.drawImage(sharkEnemyImage, -(ally.position.x + ally.width), ally.position.y, ally.width, ally.height);
    } else {
      c.drawImage(sharkEnemyImage, ally.position.x, ally.position.y, ally.width, ally.height);
    }
    c.restore();
  });
}
function summonFriendlyAnt() {
  if (!canSummonAnt || summonAntCooldownFrames > 0) {
    return;
  }
  var antWidth = 52;
  var antHeight = 34;
  var groundY = player.position.y + player.hitboxHeight - antHeight;
  alliedAnts.push({
    position: {
      x: player.position.x - 24,
      y: groundY
    },
    width: antWidth,
    height: antHeight,
    groundY: groundY,
    vx: 0,
    life: 900,
    health: 3,
    attackCooldownFrames: 0,
    damageCooldownFrames: 0
  });
  summonAntCooldownFrames = 360;
}
function updateFriendlyAnts() {
  if (summonAntCooldownFrames > 0) {
    summonAntCooldownFrames -= 1;
  }
  alliedAnts = alliedAnts.filter(function (ally) {
    return ally.life > 0 && ally.health > 0;
  });
  alliedAnts.forEach(function (ally) {
    ally.life -= 1;
    if (ally.attackCooldownFrames > 0) ally.attackCooldownFrames -= 1;
    if (ally.damageCooldownFrames > 0) ally.damageCooldownFrames -= 1;
    var closestEnemy = null;
    var closestDistance = Number.POSITIVE_INFINITY;
    enemies.forEach(function (enemy) {
      if (enemy.type === 'elephant') {
        return;
      }
      var dx = enemy.position.x + enemy.width / 2 - (ally.position.x + ally.width / 2);
      var dy = enemy.position.y + enemy.height / 2 - (ally.position.y + ally.height / 2);
      var dist = Math.hypot(dx, dy);
      if (dist < closestDistance) {
        closestDistance = dist;
        closestEnemy = enemy;
      }
    });
    var targetX = closestEnemy ? closestEnemy.position.x + closestEnemy.width / 2 - ally.width / 2 : player.position.x - 24;
    var moveDx = targetX - ally.position.x;
    ally.vx = Math.sign(moveDx) * Math.min(Math.abs(moveDx), 4.2);
    ally.position.x += ally.vx;
    ally.position.y = ally.groundY;
    if (closestEnemy && ally.attackCooldownFrames <= 0 && isOverlapping(ally, closestEnemy)) {
      if (closestEnemy.type === 'megalodon') {
        var _ref6, _closestEnemy$health5;
        closestEnemy.health = Math.max(0, ((_ref6 = (_closestEnemy$health5 = closestEnemy.health) !== null && _closestEnemy$health5 !== void 0 ? _closestEnemy$health5 : closestEnemy.maxHealth) !== null && _ref6 !== void 0 ? _ref6 : 10) - 0.5);
        if (closestEnemy.health <= 0) {
          var deadIndex = enemies.indexOf(closestEnemy);
          if (deadIndex > -1) enemies.splice(deadIndex, 1);
          handleEnemyDefeat(closestEnemy);
          spawnEnemyDeathExplosion(closestEnemy);
        }
      } else {
        var _closestEnemy$health6;
        closestEnemy.health = ((_closestEnemy$health6 = closestEnemy.health) !== null && _closestEnemy$health6 !== void 0 ? _closestEnemy$health6 : 1) - 1;
        if (closestEnemy.health <= 0) {
          var _deadIndex3 = enemies.indexOf(closestEnemy);
          if (_deadIndex3 > -1) enemies.splice(_deadIndex3, 1);
          handleEnemyDefeat(closestEnemy);
          spawnEnemyDeathExplosion(closestEnemy);
        }
      }
      ally.attackCooldownFrames = 100;
    }
    if (ally.damageCooldownFrames <= 0) {
      enemies.forEach(function (enemy) {
        if (enemy.type !== 'elephant' && ally.health > 0 && isOverlapping(ally, enemy)) {
          ally.health -= 1;
          ally.damageCooldownFrames = 90;
        }
      });
    }
    c.save();
    c.globalAlpha = 0.95;
    if (ally.vx < 0) {
      c.scale(-1, 1);
      c.drawImage(antEnemyImage, -(ally.position.x + ally.width), ally.position.y, ally.width, ally.height);
    } else {
      c.drawImage(antEnemyImage, ally.position.x, ally.position.y, ally.width, ally.height);
    }
    c.restore();
  });
}
function updateSoccerBalls() {
  soccerBalls = soccerBalls.filter(function (ball) {
    return ball.life > 0;
  });
  soccerBalls.forEach(function (ball) {
    ball.position.x += ball.vx;
    ball.position.y += ball.vy;
    ball.vy += 0.08;
    ball.life -= 1;
    if (ball.position.x + ball.width < worldBounds.minX || ball.position.x > worldBounds.maxX || ball.position.y > worldBounds.bottomY || ball.position.y + ball.height < worldBounds.topY) {
      ball.life = 0;
      return;
    }
    for (var i = enemies.length - 1; i >= 0; i--) {
      var enemy = enemies[i];
      if (!isOverlapping(ball, enemy)) {
        continue;
      }
      if (enemy.type === 'megalodon') {
        var _ref7, _enemy$health;
        enemy.health = Math.max(0, ((_ref7 = (_enemy$health = enemy.health) !== null && _enemy$health !== void 0 ? _enemy$health : enemy.maxHealth) !== null && _ref7 !== void 0 ? _ref7 : 10) - 1);
        if (enemy.health === 0) {
          enemies.splice(i, 1);
          handleEnemyDefeat(enemy);
          spawnEnemyDeathExplosion(enemy);
        }
      } else {
        enemies.splice(i, 1);
        handleEnemyDefeat(enemy);
        spawnEnemyDeathExplosion(enemy);
      }
      ball.life = 0;
      break;
    }
  });
  soccerBalls.forEach(function (ball) {
    c.save();
    c.fillStyle = '#ffffff';
    c.beginPath();
    c.arc(ball.position.x + ball.width / 2, ball.position.y + ball.height / 2, ball.width / 2, 0, Math.PI * 2);
    c.fill();
    c.strokeStyle = '#1d1d1d';
    c.lineWidth = 2;
    c.beginPath();
    c.arc(ball.position.x + ball.width / 2, ball.position.y + ball.height / 2, ball.width * 0.22, 0, Math.PI * 2);
    c.stroke();
    c.restore();
  });
}
function createWaterZones() {
  return (activeLevelConfig.waterZones || []).map(function (z) {
    return _objectSpread({}, z);
  });
}
function drawDesertGround() {
  c.save();
  var groundY = 450; // matches levelConfigC platform/ground Y
  var sandDark = '#c8964a';
  var sandMid = '#e0b86e';
  var sandLight = '#f5d38a';

  // Base sandy ground strip
  c.fillStyle = sandDark;
  c.fillRect(0, groundY, canvas.width, canvas.height - groundY);

  // Dune waves — scroll with camera so they feel like part of the world
  var spacing = 320;
  var duneCount = Math.ceil(canvas.width / spacing) + 3;
  var offset = scrollOffset % spacing;
  for (var i = 0; i < duneCount; i++) {
    var screenCx = i * spacing - offset;
    var r = 160 + i % 3 * 30;
    c.fillStyle = sandMid;
    c.beginPath();
    c.ellipse(screenCx, groundY + 10, r, 80, 0, Math.PI, Math.PI * 2);
    c.fill();
    c.fillStyle = sandLight;
    c.beginPath();
    c.ellipse(screenCx, groundY + 2, r * 0.55, 22, 0, Math.PI, Math.PI * 2);
    c.fill();
  }
  c.restore();
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
function drawDriveByRider(x, y, dir) {
  c.save();
  c.translate(x, y);
  if (dir < 0) {
    c.scale(-1, 1);
    c.translate(-130, 0);
  }
  // Big front wheel
  c.fillStyle = '#1a1a1a';
  c.beginPath();
  c.arc(30, 52, 48, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = '#444';
  c.lineWidth = 5;
  c.stroke();
  c.strokeStyle = '#e0e0e0';
  c.lineWidth = 10;
  c.beginPath();
  c.arc(30, 52, 38, 0, Math.PI * 2);
  c.stroke();
  c.strokeStyle = '#555';
  c.lineWidth = 2;
  for (var a = 0; a < Math.PI * 2; a += Math.PI / 4) {
    c.beginPath();
    c.moveTo(30, 52);
    c.lineTo(30 + Math.cos(a) * 36, 52 + Math.sin(a) * 36);
    c.stroke();
  }
  // Back wheel
  c.fillStyle = '#1a1a1a';
  c.beginPath();
  c.arc(118, 62, 21, 0, Math.PI * 2);
  c.fill();
  c.strokeStyle = '#444';
  c.lineWidth = 3;
  c.stroke();
  c.strokeStyle = '#e0e0e0';
  c.lineWidth = 6;
  c.beginPath();
  c.arc(118, 62, 14, 0, Math.PI * 2);
  c.stroke();
  // Blue frame
  c.strokeStyle = '#1565c0';
  c.lineWidth = 9;
  c.lineCap = 'round';
  c.lineJoin = 'round';
  c.beginPath();
  c.moveTo(30, 52);
  c.lineTo(68, 16);
  c.lineTo(118, 48);
  c.lineTo(118, 62);
  c.stroke();
  c.beginPath();
  c.moveTo(68, 16);
  c.lineTo(60, -10);
  c.stroke();
  c.strokeStyle = '#90caf9';
  c.lineWidth = 7;
  c.beginPath();
  c.moveTo(46, -10);
  c.lineTo(74, -10);
  c.stroke();
  c.fillStyle = '#0d47a1';
  c.fillRect(54, -13, 22, 6);
  // Legs
  c.strokeStyle = '#4a5c30';
  c.lineWidth = 9;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(68, 5);
  c.lineTo(50, 30);
  c.lineTo(30, 52);
  c.stroke();
  c.beginPath();
  c.moveTo(68, 5);
  c.lineTo(85, 28);
  c.lineTo(110, 58);
  c.stroke();
  // Shoes
  c.fillStyle = '#2a1a0a';
  c.beginPath();
  c.ellipse(30, 54, 10, 6, 0.2, 0, Math.PI * 2);
  c.fill();
  c.fillStyle = '#1565c0';
  c.beginPath();
  c.ellipse(110, 61, 9, 5, 0.2, 0, Math.PI * 2);
  c.fill();
  // Body (black hoodie)
  c.fillStyle = '#111';
  c.beginPath();
  c.ellipse(72, -5, 22, 24, -0.15, 0, Math.PI * 2);
  c.fill();
  // Blue flame logo
  c.fillStyle = '#29b6f6';
  c.beginPath();
  c.moveTo(68, -2);
  c.lineTo(72, -16);
  c.lineTo(74, -6);
  c.lineTo(76, -18);
  c.lineTo(78, -2);
  c.closePath();
  c.fill();
  // Arms
  c.strokeStyle = '#111';
  c.lineWidth = 8;
  c.lineCap = 'round';
  c.beginPath();
  c.moveTo(66, -14);
  c.lineTo(55, -8);
  c.stroke();
  c.beginPath();
  c.moveTo(74, -14);
  c.lineTo(92, -30);
  c.stroke();
  // Hands
  c.fillStyle = '#6b3d1e';
  c.beginPath();
  c.arc(55, -8, 6, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(92, -30, 6, 0, Math.PI * 2);
  c.fill();
  // Head
  c.fillStyle = '#6b3d1e';
  c.beginPath();
  c.arc(78, -32, 14, 0, Math.PI * 2);
  c.fill();
  // Afro
  c.fillStyle = '#0d0d0d';
  c.beginPath();
  c.arc(78, -41, 15, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(66, -36, 9, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(90, -37, 9, 0, Math.PI * 2);
  c.fill();
  // Bandana
  c.fillStyle = '#1565c0';
  c.fillRect(65, -32, 28, 11);
  c.fillStyle = '#b3e5fc';
  for (var i = 0; i < 4; i++) {
    c.beginPath();
    c.arc(68 + i * 7, -27, 2, 0, Math.PI * 2);
    c.fill();
  }
  // Eyes
  c.fillStyle = '#fff';
  c.fillRect(68, -42, 7, 5);
  c.fillRect(80, -42, 7, 5);
  c.fillStyle = '#0d0d0d';
  c.fillRect(70, -42, 4, 4);
  c.fillRect(82, -42, 4, 4);
  c.restore();
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
  var _thresholdByEnemy$ene;
  var playerBottom = playerEntity.position.y + playerEntity.hitboxHeight;
  // Megalodon only takes stomp damage on the head area.
  var thresholdByEnemy = {
    megalodon: 0.2,
    shark: 0.6
  };
  var threshold = (_thresholdByEnemy$ene = thresholdByEnemy[enemyEntity.type]) !== null && _thresholdByEnemy$ene !== void 0 ? _thresholdByEnemy$ene : 0.45;
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
  var deltaX = player.position.x - centerX;
  // Y scrolling is disabled — flat level, camera only follows horizontally.
  var deltaY = 0;
  if (deltaX === 0) {
    return;
  }
  player.position.x = centerX;
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
function drawMenuButton(_ref8) {
  var rect = _ref8.rect,
    label = _ref8.label,
    iconImage = _ref8.iconImage,
    backgroundColor = _ref8.backgroundColor,
    borderColor = _ref8.borderColor,
    textColor = _ref8.textColor,
    _ref8$iconSize = _ref8.iconSize,
    iconSize = _ref8$iconSize === void 0 ? 34 : _ref8$iconSize;
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
  var avatarSize = Math.min(180, canvas.width * 0.16, canvas.height * 0.24);
  var titleGap = 42;
  var subtitleGap = 62;
  var buttonGap = 44;
  var blockHeight = avatarSize + titleGap + subtitleGap + buttonGap + 72;
  var blockTop = canvas.height / 2 - blockHeight / 2;
  var avatarY = blockTop;
  var titleY = avatarY + avatarSize + titleGap;
  var subtitleY = titleY + subtitleGap;
  var btnW = 72;
  var btnH = 72;
  var btnGapBetween = 24;

  // Calculate button positions for up to 4 buttons
  var totalButtonsWidth = btnW * 4 + btnGapBetween * 3;
  var startXForButtons = canvas.width / 2 - totalButtonsWidth / 2;
  startButton.width = btnW;
  startButton.height = btnH;
  startButton.x = startXForButtons;
  startButton.y = subtitleY + buttonGap;
  startButtonB.width = btnW;
  startButtonB.height = btnH;
  startButtonB.x = startXForButtons + btnW + btnGapBetween;
  startButtonB.y = subtitleY + buttonGap;
  startButtonC.width = btnW;
  startButtonC.height = btnH;
  startButtonC.x = startXForButtons + (btnW + btnGapBetween) * 2;
  startButtonC.y = subtitleY + buttonGap;
  startButtonMystery.width = btnW;
  startButtonMystery.height = btnH;
  startButtonMystery.x = startXForButtons + (btnW + btnGapBetween) * 3;
  startButtonMystery.y = subtitleY + buttonGap;
  c.save();
  c.fillStyle = '#455f88';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(lucasImage, canvas.width / 2 - avatarSize / 2, avatarY, avatarSize, avatarSize);
  c.fillStyle = '#ffffff';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = "700 54px \"".concat(titleFontFamily, "\"");
  c.fillText('Find the Letter', canvas.width / 2, titleY);
  c.font = "400 34px \"".concat(bodyLightFontFamily, "\"");
  c.fillText('Starring Lucas Grao and more', canvas.width / 2, subtitleY);
  drawMenuButton({
    rect: startButton,
    label: 'A',
    backgroundColor: '#56a551',
    borderColor: '#458742',
    textColor: '#ffffff'
  });
  if (levelACompleted) {
    drawMenuButton({
      rect: startButtonB,
      label: 'B',
      backgroundColor: '#3a7abf',
      borderColor: '#2a5f9e',
      textColor: '#ffffff'
    });
  } else {
    // Locked B button
    c.save();
    c.fillStyle = '#5a5a7a';
    c.strokeStyle = '#44445a';
    c.lineWidth = 2;
    c.beginPath();
    c.roundRect(startButtonB.x, startButtonB.y, startButtonB.width, startButtonB.height, 8);
    c.fill();
    c.stroke();
    c.fillStyle = '#9090b0';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = "700 32px \"".concat(buttonFontFamily, "\"");
    c.fillText('B', startButtonB.x + startButtonB.width / 2, startButtonB.y + startButtonB.height / 2 + 2);
    // Lock icon
    c.font = "700 18px \"".concat(bodyFontFamily, "\"");
    c.fillText('🔒', startButtonB.x + startButtonB.width / 2, startButtonB.y + startButtonB.height - 14);
    c.restore();
  }
  if (levelBCompleted) {
    drawMenuButton({
      rect: startButtonC,
      label: 'C',
      backgroundColor: '#e67e22',
      borderColor: '#d45604',
      textColor: '#ffffff'
    });
  } else {
    // Locked C button
    c.save();
    c.fillStyle = '#5a5a7a';
    c.strokeStyle = '#44445a';
    c.lineWidth = 2;
    c.beginPath();
    c.roundRect(startButtonC.x, startButtonC.y, startButtonC.width, startButtonC.height, 8);
    c.fill();
    c.stroke();
    c.fillStyle = '#9090b0';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = "700 32px \"".concat(buttonFontFamily, "\"");
    c.fillText('C', startButtonC.x + startButtonC.width / 2, startButtonC.y + startButtonC.height / 2 + 2);
    // Lock icon
    c.font = "700 18px \"".concat(bodyFontFamily, "\"");
    c.fillText('🔒', startButtonC.x + startButtonC.width / 2, startButtonC.y + startButtonC.height - 14);
    c.restore();
  }
  drawMenuButton({
    rect: startButtonMystery,
    label: '?',
    backgroundColor: '#6a0dad',
    borderColor: '#4b0080',
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
  var finX = 96;
  var coinX = 196;
  var coinsX = coinX + iconSize + 10;
  var questX = coinX + 138;
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
  c.fillStyle = '#9be2ff';
  c.font = "700 18px \"".concat(buttonFontFamily, "\"");
  c.fillText("FIN ".concat(fins), finX, textY);
  if (hasKey) {
    c.drawImage(keyImage, pauseButton.x - 44, 15, iconSize, iconSize);
  }
  if (canSummonBat) {
    c.fillStyle = '#9be2ff';
    c.font = "700 16px \"".concat(buttonFontFamily, "\"");
    var batText = summonBatCooldownFrames > 0 ? Math.ceil(summonBatCooldownFrames / 60) + 's' : 'READY';
    var flyText = batFlyGranted ? flyAbilityFrames > 0 ? " FLY:".concat(Math.ceil(flyAbilityFrames / 60), "s") : '' : ' FLY:1×';
    c.fillText("BAT: ".concat(batText).concat(flyText), questX, textY);
  } else if (activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"]) {
    c.fillStyle = '#9be2ff';
    c.font = "700 16px \"".concat(buttonFontFamily, "\"");
    c.fillText("BAT QUEST ".concat(Math.min(levelABatKills, 2), "/2"), questX, textY);
  }
  if (canSummonShark) {
    c.fillStyle = '#7fd8ff';
    c.font = "700 16px \"".concat(buttonFontFamily, "\"");
    var sharkText = summonSharkCooldownFrames > 0 ? Math.ceil(summonSharkCooldownFrames / 60) + 's' : 'READY';
    c.fillText("SHARK: ".concat(sharkText), questX, textY + 22);
  } else if (activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"] || activeLevelConfig === _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"]) {
    c.fillStyle = '#7fd8ff';
    c.font = "700 16px \"".concat(buttonFontFamily, "\"");
    c.fillText("SHARK QUEST ".concat(Math.min(sharkKills, 3), "/3"), questX, textY + 22);
  }
  if (canSummonAnt) {
    c.fillStyle = '#b5f294';
    c.font = "700 16px \"".concat(buttonFontFamily, "\"");
    var antText = summonAntCooldownFrames > 0 ? Math.ceil(summonAntCooldownFrames / 60) + 's' : 'READY';
    c.fillText("ANT: ".concat(antText), questX, textY + 44);
  } else if (activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"]) {
    c.fillStyle = '#b5f294';
    c.font = "700 16px \"".concat(buttonFontFamily, "\"");
    c.fillText("ANT QUEST ".concat(Math.min(antKills, 20), "/20"), questX, textY + 44);
  }
  var megalodonBoss = enemies.find(function (enemy) {
    return enemy.type === 'megalodon';
  });
  if (megalodonBoss && megalodonBoss.maxHealth > 0) {
    var bossBarWidth = Math.min(360, canvas.width * 0.36);
    var bossBarHeight = 18;
    var bossBarX = canvas.width / 2 - bossBarWidth / 2;
    var bossBarY = 20;
    var healthRatio = Math.max(0, Math.min(1, megalodonBoss.health / megalodonBoss.maxHealth));
    c.fillStyle = 'rgba(30, 18, 18, 0.9)';
    c.fillRect(bossBarX, bossBarY, bossBarWidth, bossBarHeight);
    c.fillStyle = '#df3d3d';
    c.fillRect(bossBarX + 2, bossBarY + 2, (bossBarWidth - 4) * healthRatio, bossBarHeight - 4);
    c.strokeStyle = '#f7c271';
    c.lineWidth = 2;
    c.strokeRect(bossBarX, bossBarY, bossBarWidth, bossBarHeight);
    c.fillStyle = '#ffffff';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.font = "700 18px \"".concat(buttonFontFamily, "\"");
    c.fillText("MEGALODON ".concat(megalodonBoss.health, "/").concat(megalodonBoss.maxHealth), canvas.width / 2, bossBarY + bossBarHeight / 2);
  }
  drawPauseButton();
  c.restore();
}
function getEndQuizImage(optionId) {
  switch (optionId) {
    case 'dog':
      return dogFriendImage;
    case 'alligator':
      return crocodileFriendImage;
    case 'cow':
      return cowFriendImage;
    case 'lion':
      return null;
    case 'bear':
      return bearFriendImage;
    case 'giraffe':
      return null;
    case 'camel':
      return null;
    case 'tiger':
      return null;
    default:
      return null;
  }
}
function resetEndQuizState() {
  endQuizResult = 'idle';
  endQuizMessage = 'Choose the animal that starts with the letter A.';
  endQuizSelectedId = '';
  endQuizAnimFrames = 0;
}
function handleEndQuizSelection(option) {
  if (!option) {
    return;
  }
  endQuizSelectedId = option.id;
  if (option.isCorrect) {
    endQuizResult = 'correct';
    endQuizAnimFrames = 90;

    // Mark appropriate level as completed based on active level
    if (activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"]) {
      endQuizMessage = 'Correct! Alligator starts with the letter A. Great job!';
      levelACompleted = true;
    } else if (activeLevelConfig === _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"]) {
      endQuizMessage = 'Correct! Bear starts with the letter B. Excellent work!';
      levelBCompleted = true;
    } else if (activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"]) {
      endQuizMessage = 'Correct! Camel starts with the letter C. Outstanding!';
      levelCCompleted = true;
    } else if (activeLevelConfig === _levelConfigMystery__WEBPACK_IMPORTED_MODULE_21__["default"]) {
      endQuizMessage = 'Correct! You survived the mystery level!';
    }
    setTimeout(function () {
      gameEnded = false;
      showStartMenu = true;
      init();
    }, 2000);
  } else {
    endQuizResult = 'wrong';

    // Show appropriate hint based on active level
    if (activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"]) {
      endQuizMessage = "Not this one. ".concat(option.label, " does not start with A. Try again!");
    } else if (activeLevelConfig === _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"]) {
      endQuizMessage = "Not this one. ".concat(option.label, " does not start with B. Try again!");
    } else if (activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"]) {
      endQuizMessage = "Not this one. ".concat(option.label, " does not start with C. Try again!");
    }
    endQuizAnimFrames = 30;
  }
}
function updateQuizOptionsForLevel() {
  // Update quiz options and messages based on active level
  if (activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"]) {
    // Level A - Alligator
    endQuizOptionButtons[0].label = 'Dog';
    endQuizOptionButtons[0].id = 'dog';
    endQuizOptionButtons[0].isCorrect = false;
    endQuizOptionButtons[1].label = 'Alligator';
    endQuizOptionButtons[1].id = 'alligator';
    endQuizOptionButtons[1].isCorrect = true;
    endQuizOptionButtons[2].label = 'Cow';
    endQuizOptionButtons[2].id = 'cow';
    endQuizOptionButtons[2].isCorrect = false;
  } else if (activeLevelConfig === _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"]) {
    // Level B - Bear
    endQuizOptionButtons[0].label = 'Lion';
    endQuizOptionButtons[0].id = 'lion';
    endQuizOptionButtons[0].isCorrect = false;
    endQuizOptionButtons[1].label = 'Bear';
    endQuizOptionButtons[1].id = 'bear';
    endQuizOptionButtons[1].isCorrect = true;
    endQuizOptionButtons[2].label = 'Giraffe';
    endQuizOptionButtons[2].id = 'giraffe';
    endQuizOptionButtons[2].isCorrect = false;
  } else if (activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"]) {
    // Level C - Camel
    endQuizOptionButtons[0].label = 'Lion';
    endQuizOptionButtons[0].id = 'lion';
    endQuizOptionButtons[0].isCorrect = false;
    endQuizOptionButtons[1].label = 'Camel';
    endQuizOptionButtons[1].id = 'camel';
    endQuizOptionButtons[1].isCorrect = true;
    endQuizOptionButtons[2].label = 'Tiger';
    endQuizOptionButtons[2].id = 'tiger';
    endQuizOptionButtons[2].isCorrect = false;
  } else if (activeLevelConfig === _levelConfigMystery__WEBPACK_IMPORTED_MODULE_21__["default"]) {
    // Mystery Level - Dolphin
    endQuizOptionButtons[0].label = 'Dolphin';
    endQuizOptionButtons[0].id = 'dolphin';
    endQuizOptionButtons[0].isCorrect = true;
    endQuizOptionButtons[1].label = 'Eagle';
    endQuizOptionButtons[1].id = 'eagle';
    endQuizOptionButtons[1].isCorrect = false;
    endQuizOptionButtons[2].label = 'Fox';
    endQuizOptionButtons[2].id = 'fox';
    endQuizOptionButtons[2].isCorrect = false;
  }
}
function isPointInsideQuizOptionButton(mouseX, mouseY, option) {
  return isPointInsideRect(mouseX, mouseY, {
    x: option.buttonX,
    y: option.buttonY,
    width: option.buttonWidth,
    height: option.buttonHeight
  });
}
function drawGameEndOverlay() {
  var centerX = canvas.width / 2;
  var stripY = 310;
  var stripHeight = 106;
  var optionWidth = Math.min(220, Math.max(160, canvas.width * 0.18));
  var optionHeight = 156;
  var optionGap = Math.max(26, canvas.width * 0.02);
  var totalOptionsWidth = optionWidth * endQuizOptionButtons.length + optionGap * (endQuizOptionButtons.length - 1);
  var firstOptionX = centerX - totalOptionsWidth / 2;
  gameOverPlayAgainButton.width = 250;
  gameOverPlayAgainButton.height = 78;
  gameOverMenuButton.width = 250;
  gameOverMenuButton.height = 78;
  var buttonGap = 90;
  var buttonsTotal = gameOverPlayAgainButton.width + buttonGap + gameOverMenuButton.width;
  var buttonsStartX = centerX - buttonsTotal / 2;
  var buttonsY = canvas.height - 112;
  gameOverPlayAgainButton.x = buttonsStartX;
  gameOverPlayAgainButton.y = buttonsY;
  gameOverMenuButton.x = buttonsStartX + gameOverPlayAgainButton.width + buttonGap;
  gameOverMenuButton.y = buttonsY;
  c.save();
  c.fillStyle = '#0f6492';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  var badgeSize = 124;
  c.drawImage(firstBadgeImage, centerX - 360, 62, badgeSize, badgeSize);
  c.fillStyle = '#ffffff';
  c.font = "700 68px \"".concat(titleFontFamily, "\"");
  c.fillText('Congratulations', centerX + 26, 92);
  c.font = "500 62px \"".concat(bodyFontFamily, "\"");
  c.fillStyle = '#f2d548';
  var currentLetter = activeLevelConfig === _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"] ? 'A' : activeLevelConfig === _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"] ? 'B' : activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"] ? 'C' : '?';
  c.fillText("You found the letter: ".concat(currentLetter), centerX + 52, 162);
  c.font = "400 46px \"".concat(bodyLightFontFamily, "\"");
  c.fillStyle = '#bfd7e5';
  c.fillText('Now tell me, which animal starts with this letter?', centerX, 230);
  c.fillStyle = 'rgba(235, 235, 235, 0.82)';
  c.beginPath();
  c.roundRect(Math.max(44, centerX - 520), stripY, Math.min(1040, canvas.width - 88), stripHeight, 8);
  c.fill();
  endQuizOptionButtons.forEach(function (option, index) {
    var isSelected = endQuizSelectedId === option.id;
    var x = firstOptionX + index * (optionWidth + optionGap);
    var y = stripY - 48;
    option.x = x;
    option.y = y;
    option.width = optionWidth;
    option.height = optionHeight;
    var offsetX = 0;
    var scale = 1;
    if (isSelected && endQuizResult === 'wrong' && endQuizAnimFrames > 0) {
      var shakeProgress = (30 - endQuizAnimFrames) / 30;
      offsetX = Math.sin(shakeProgress * Math.PI * 9) * 10 * (1 - shakeProgress);
    }
    if (isSelected && endQuizResult === 'correct' && endQuizAnimFrames > 0) {
      scale = 1 + Math.sin((90 - endQuizAnimFrames) * 0.42) * 0.05;
    }
    var drawX = x + offsetX;
    var drawW = optionWidth * scale;
    var drawH = optionHeight * scale;
    var drawY = y - (drawH - optionHeight) / 2;
    var drawXScaled = drawX - (drawW - optionWidth) / 2;
    c.fillStyle = isSelected ? endQuizResult === 'correct' ? '#dff5cd' : '#ffd8d8' : 'rgba(255, 255, 255, 0.52)';
    c.strokeStyle = isSelected ? endQuizResult === 'correct' ? '#53a84d' : '#d24d4d' : '#8ea6b5';
    c.lineWidth = 4;
    c.beginPath();
    c.roundRect(drawXScaled, drawY, drawW, drawH, 16);
    c.fill();
    c.stroke();
    var image = getEndQuizImage(option.id);
    if (image) {
      var imageSize = Math.min(124, drawW * 0.7);
      c.drawImage(image, drawXScaled + drawW / 2 - imageSize / 2, drawY + 8, imageSize, imageSize);
    }
    var answerButtonWidth = Math.max(124, drawW * 0.68);
    var answerButtonHeight = 46;
    option.buttonWidth = answerButtonWidth;
    option.buttonHeight = answerButtonHeight;
    option.buttonX = drawXScaled + drawW / 2 - answerButtonWidth / 2;
    option.buttonY = drawY + drawH - answerButtonHeight - 10;
    var buttonStyle = isSelected ? endQuizResult === 'correct' ? {
      bg: '#58b953',
      border: '#3e8f3a'
    } : {
      bg: '#d65c5c',
      border: '#ab3f3f'
    } : {
      bg: '#44a8b8',
      border: '#2b90a1'
    };
    drawMenuButton({
      rect: {
        x: option.buttonX,
        y: option.buttonY,
        width: option.buttonWidth,
        height: option.buttonHeight
      },
      label: option.label,
      backgroundColor: buttonStyle.bg,
      borderColor: buttonStyle.border,
      textColor: '#ffffff'
    });
    if (isSelected && endQuizResult === 'wrong' && endQuizAnimFrames > 0) {
      c.strokeStyle = '#d02f2f';
      c.lineWidth = 8;
      c.lineCap = 'round';
      var cx = drawXScaled + drawW - 20;
      var cy = drawY + 20;
      c.beginPath();
      c.moveTo(cx - 12, cy - 12);
      c.lineTo(cx + 12, cy + 12);
      c.moveTo(cx + 12, cy - 12);
      c.lineTo(cx - 12, cy + 12);
      c.stroke();
    }
  });
  if (endQuizResult === 'correct' && endQuizAnimFrames > 0) {
    var sparkleCount = 18;
    for (var i = 0; i < sparkleCount; i++) {
      var angle = i / sparkleCount * Math.PI * 2 + (90 - endQuizAnimFrames) * 0.09;
      var radius = 70 + Math.sin((90 - endQuizAnimFrames) * 0.16 + i) * 18;
      var x = centerX + Math.cos(angle) * radius;
      var y = 146 + Math.sin(angle) * (radius * 0.6);
      c.fillStyle = i % 2 === 0 ? '#ffe07a' : '#7ef29a';
      c.beginPath();
      c.arc(x, y, 6, 0, Math.PI * 2);
      c.fill();
    }
  }
  var messageColor = endQuizResult === 'correct' ? '#7ef29a' : endQuizResult === 'wrong' ? '#ff9f9f' : '#d6e5ee';
  c.fillStyle = messageColor;
  c.font = "600 34px \"".concat(bodyFontFamily, "\"");
  c.fillText(endQuizMessage, centerX, 500);
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
  if (endQuizAnimFrames > 0) {
    endQuizAnimFrames -= 1;
  }
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
  var rows = [['SPACE / W', 'Jump / Swim / Fly'], ['SPACE / W again', 'Glide (press again in the air)'], ['Q', 'Shoot soccer ball (5s cooldown)'], ['D', 'Summon bat (unlock after 2 bat kills in A)']];
  c.textAlign = 'left';
  c.textBaseline = 'middle';

  // Header
  c.fillStyle = '#1a3a22';
  c.font = "700 22px \"".concat(buttonFontFamily, "\"");
  c.textAlign = 'center';
  c.fillText('ACTIONS', actionsBoxX + actionsBoxW / 2, actionsBoxY + 22);
  c.textAlign = 'left';
  rows.forEach(function (_ref9, i) {
    var _ref10 = _slicedToArray(_ref9, 2),
      key = _ref10[0],
      action = _ref10[1];
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
  syncWorldBounds();
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
  batEnemyImage = createImage(_img_enemies_bat_1_png__WEBPACK_IMPORTED_MODULE_59__["default"]);
  sharkEnemyImage = createImage(_img_enemies_shark_png__WEBPACK_IMPORTED_MODULE_60__["default"]);
  megalodonEnemyImage = createImage(_img_enemies_megalodon_1_gif__WEBPACK_IMPORTED_MODULE_61__["default"]);
  antEnemyImage = createImage(_img_enemies_ant_png__WEBPACK_IMPORTED_MODULE_70__["default"]);
  elephantEnemyImage = createImage(_img_enemies_elephant_png__WEBPACK_IMPORTED_MODULE_71__["default"]);
  sandImage = createImage(_img_elements_element_sea_1_png__WEBPACK_IMPORTED_MODULE_73__["default"]);
  dogFriendImage = createImage(_img_friends_dog_png__WEBPACK_IMPORTED_MODULE_74__["default"]);
  cowFriendImage = createImage(_img_friends_cow_png__WEBPACK_IMPORTED_MODULE_75__["default"]);
  crocodileFriendImage = createImage(_img_friends_crocodile_png__WEBPACK_IMPORTED_MODULE_76__["default"]);
  bearFriendImage = createImage(_img_friends_bear_png__WEBPACK_IMPORTED_MODULE_77__["default"]);
  firstBadgeImage = createImage(_img_elements_first_png__WEBPACK_IMPORTED_MODULE_78__["default"]);
  desertBackgroundImage = createImage(_img_background_BG_mountains_noon2_1024_png__WEBPACK_IMPORTED_MODULE_22__["default"]);
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
  driveByFrames = 1800;
  driveByRiders = [];
  driveBySpawnFromLeft = true;
  shootCooldownFrames = 0;
  soccerBalls = [];
  alliedBats = [];
  summonBatCooldownFrames = 0;
  batFlyGranted = false;
  batRewardBalloonFrames = 0;
  finRewardBalloonFrames = 0;
  alliedSharks = [];
  summonSharkCooldownFrames = 0;
  sharkRewardBalloonFrames = 0;
  alliedAnts = [];
  summonAntCooldownFrames = 0;
  antRewardBalloonFrames = 0;
  showChestHint = false;
  resetEndQuizState();
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
  driveByFrames = 1800;
  driveByRiders = [];
  driveBySpawnFromLeft = true;
  shootCooldownFrames = 0;
  soccerBalls = [];
  alliedBats = [];
  summonBatCooldownFrames = 0;
  batRewardBalloonFrames = 0;
  finRewardBalloonFrames = 0;
  alliedSharks = [];
  summonSharkCooldownFrames = 0;
  sharkRewardBalloonFrames = 0;
  alliedAnts = [];
  summonAntCooldownFrames = 0;
  antRewardBalloonFrames = 0;
  showChestHint = false;
  resetEndQuizState();
  platforms = createPlatforms();
  collectibles = createCollectibles();
  worldObjects = createWorldObjects();
  enemies = createEnemies();
  enemyDeathParticles = [];
  waterZones = createWaterZones();
  backgroundObjects[0].position.x = levelOrigin.backgroundX;
  backgroundObjects[0].image = activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"] ? desertBackgroundImage : backgroundImage;
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
  var _activeLevelConfig$wa, _activeLevelConfig$wa2;
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
  c.fillStyle = activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"] ? '#e8c87a' : '#3aa2e8';
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
  if (shootCooldownFrames > 0) {
    shootCooldownFrames -= 1;
  }
  var waterSpeedMultiplier = fins > 0 ? 1.2 + Math.max(0, fins - 1) * 0.1 : 1;
  if (!player.isCrouching && keys.right.pressed && !keys.left.pressed) {
    player.velocity.x = player.inWater ? moveSpeed * waterSpeedMultiplier : moveSpeed;
  } else if (!player.isCrouching && keys.left.pressed && !keys.right.pressed) {
    player.velocity.x = player.inWater ? -moveSpeed * waterSpeedMultiplier : -moveSpeed;
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
  if (!activeLevelConfig.hidePlatforms) {
    platforms.forEach(function (p) {
      p.draw();
    });
  }
  if (activeLevelConfig === _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"]) {
    drawDesertGround();
  }
  worldObjects.forEach(function (worldObject) {
    if (!worldObject.collected) {
      worldObject.draw();
    }
  });
  enemies.forEach(function (enemy) {
    if (enemy.type === 'megalodon') {
      var _enemy$stompCooldownF, _enemy$attackCooldown, _ref11, _enemy$summonCooldown, _enemy$chaseSpeed, _enemy$verticalSpeed;
      if (((_enemy$stompCooldownF = enemy.stompCooldownFrames) !== null && _enemy$stompCooldownF !== void 0 ? _enemy$stompCooldownF : 0) > 0) {
        enemy.stompCooldownFrames -= 1;
      }
      if (((_enemy$attackCooldown = enemy.attackCooldownFrames) !== null && _enemy$attackCooldown !== void 0 ? _enemy$attackCooldown : 0) > 0) {
        enemy.attackCooldownFrames -= 1;
      }
      updateMegalodonBiteState(enemy);
      enemy.summonCooldownFrames = ((_ref11 = (_enemy$summonCooldown = enemy.summonCooldownFrames) !== null && _enemy$summonCooldown !== void 0 ? _enemy$summonCooldown : enemy.summonIntervalFrames) !== null && _ref11 !== void 0 ? _ref11 : 220) - 1;
      if (enemy.summonCooldownFrames <= 0) {
        var _enemy$summonInterval;
        summonSharkFromMegalodon(enemy);
        enemy.summonCooldownFrames = (_enemy$summonInterval = enemy.summonIntervalFrames) !== null && _enemy$summonInterval !== void 0 ? _enemy$summonInterval : 220;
      }
      var enemyCenterX = enemy.position.x + enemy.width / 2;
      var playerCenterX = player.position.x + player.hitboxWidth / 2;
      var dx = playerCenterX - enemyCenterX;
      var stepX = Math.sign(dx) * Math.min(Math.abs(dx), (_enemy$chaseSpeed = enemy.chaseSpeed) !== null && _enemy$chaseSpeed !== void 0 ? _enemy$chaseSpeed : 5.2);
      enemy.position.x += stepX;
      enemy.direction = dx >= 0 ? 1 : -1;
      var minBossX = worldBounds.minX;
      var maxBossX = worldBounds.maxX - enemy.width;
      if (enemy.position.x < minBossX) enemy.position.x = minBossX;
      if (enemy.position.x > maxBossX) enemy.position.x = maxBossX;

      // Keep boss inside water zones — clamp Y to the first water zone that covers it.
      var bossWaterZone = waterZones.find(function (zone) {
        var cx = enemy.position.x + enemy.width / 2;
        return cx >= zone.x && cx <= zone.x + zone.width;
      });
      var minBossY = bossWaterZone ? bossWaterZone.y : hudBarHeight + 6;
      var maxBossY = bossWaterZone ? bossWaterZone.y + bossWaterZone.height - enemy.height : worldBounds.bottomY - enemy.height;
      var targetY = Math.max(minBossY, Math.min(maxBossY, player.position.y - enemy.height * 0.35));
      var dy = targetY - enemy.position.y;
      var stepY = Math.sign(dy) * Math.min(Math.abs(dy), ((_enemy$verticalSpeed = enemy.verticalSpeed) !== null && _enemy$verticalSpeed !== void 0 ? _enemy$verticalSpeed : 1) * 2.3);
      enemy.position.y = Math.max(minBossY, Math.min(maxBossY, enemy.position.y + stepY));
      drawMegalodonWithBite(enemy);
      return;
    }
    if (enemy.type === 'shark') {
      updateSharkBiteState(enemy);
      if (enemy.followPlayer) {
        var _enemy$chaseSpeed2, _enemy$verticalChaseS;
        var _enemyCenterX = enemy.position.x + enemy.width / 2;
        var _playerCenterX = player.position.x + player.hitboxWidth / 2;
        var _dx = _playerCenterX - _enemyCenterX;
        var chaseStepX = Math.sign(_dx) * Math.min(Math.abs(_dx), (_enemy$chaseSpeed2 = enemy.chaseSpeed) !== null && _enemy$chaseSpeed2 !== void 0 ? _enemy$chaseSpeed2 : 2.8);
        enemy.position.x += chaseStepX;
        enemy.direction = _dx >= 0 ? 1 : -1;
        var _targetY = Math.max(hudBarHeight + 10, player.position.y - enemy.height * 0.3);
        var _dy = _targetY - enemy.position.y;
        var chaseStepY = Math.sign(_dy) * Math.min(Math.abs(_dy), (_enemy$verticalChaseS = enemy.verticalChaseSpeed) !== null && _enemy$verticalChaseS !== void 0 ? _enemy$verticalChaseS : 1.8);
        enemy.position.y += chaseStepY;
        var _minX = worldBounds.minX;
        var _maxX = worldBounds.maxX - enemy.width;
        if (enemy.position.x < _minX) enemy.position.x = _minX;
        if (enemy.position.x > _maxX) enemy.position.x = _maxX;
        drawSharkWithBite(enemy);
        return;
      }
      if (enemy.motionStyle === 'bat') {
        enemy.position.y += enemy.verticalSpeed * enemy.direction;
        if (enemy.position.y <= enemy.baseY - enemy.range) {
          enemy.position.y = enemy.baseY - enemy.range;
          enemy.direction = 1;
        } else if (enemy.position.y >= enemy.baseY + enemy.range) {
          enemy.position.y = enemy.baseY + enemy.range;
          enemy.direction = -1;
        }
        drawSharkWithBite(enemy);
        return;
      }
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
      drawSharkWithBite(enemy);
    } else if (enemy.type === 'ant') {
      var _enemy$stompCooldownF2, _enemy$chaseSpeed3;
      // Ants chase the player along the ground; can also climb the elephant
      if (((_enemy$stompCooldownF2 = enemy.stompCooldownFrames) !== null && _enemy$stompCooldownF2 !== void 0 ? _enemy$stompCooldownF2 : 0) > 0) {
        enemy.stompCooldownFrames -= 1;
      }
      var _playerCenterX2 = player.position.x + player.hitboxWidth / 2;
      var antCenterX = enemy.position.x + enemy.width / 2;
      var _dx2 = _playerCenterX2 - antCenterX;
      var step = Math.sign(_dx2) * Math.min(Math.abs(_dx2), (_enemy$chaseSpeed3 = enemy.chaseSpeed) !== null && _enemy$chaseSpeed3 !== void 0 ? _enemy$chaseSpeed3 : 1.5);
      enemy.position.x += step;
      enemy.direction = _dx2 >= 0 ? 1 : -1;

      // If the elephant is between ant and player, climb up its side
      var elephantE = enemies.find(function (e) {
        return e.type === 'elephant';
      });
      if (elephantE) {
        var antRight = enemy.position.x + enemy.width;
        var antLeft = enemy.position.x;
        var elLeft = elephantE.position.x;
        var elRight = elephantE.position.x + elephantE.width;
        var onElephant = antRight > elLeft + elephantE.width * 0.1 && antLeft < elRight - elephantE.width * 0.1;
        if (onElephant) {
          // Climb up toward elephant top
          var _targetY2 = elephantE.position.y - enemy.height;
          if (enemy.position.y > _targetY2) {
            enemy.position.y = Math.max(_targetY2, enemy.position.y - 2);
          } else {
            enemy.position.y = _targetY2;
          }
        } else {
          enemy.position.y = enemy.groundY;
        }
      } else {
        enemy.position.y = enemy.groundY;
      }

      // Draw flipped when moving left
      c.save();
      if (enemy.direction < 0) {
        c.scale(-1, 1);
        c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height);
      } else {
        enemy.draw();
      }
      c.restore();
    } else if (enemy.type === 'elephant') {
      // Elephant is a mount — player rides on its back
      enemy.position.y = enemy.groundY;
      if (player.ridingElephant) {
        // Jump off with UP key
        if (keys.up.pressed) {
          player.ridingElephant = false;
          player.velocity.y = -18;
          player.onGround = false;
        } else {
          // Move elephant with player input
          if (keys.right.pressed && !keys.left.pressed) {
            enemy.position.x += enemy.mountSpeed;
            enemy.direction = 1;
          } else if (keys.left.pressed && !keys.right.pressed) {
            enemy.position.x -= enemy.mountSpeed;
            enemy.direction = -1;
          }
          // Clamp to world
          enemy.position.x = Math.max(worldBounds.minX, Math.min(worldBounds.maxX - enemy.width, enemy.position.x));
          // Seat player on top of elephant
          player.position.x = enemy.position.x + enemy.width / 2 - player.hitboxWidth / 2;
          player.position.y = enemy.position.y - player.hitboxHeight;
          player.velocity.x = 0;
          player.velocity.y = 0;
          player.onGround = true;
        }
      }
      // Draw flipped when facing left
      c.save();
      if (enemy.direction < 0) {
        c.scale(-1, 1);
        c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height);
      } else {
        enemy.draw();
      }
      c.restore();
    } else if (enemy.type === 'kangaroo') {
      var _enemy$chaseRange, _enemy$chaseRange2;
      // Patrol around chest; switch to chase when player gets close
      var _playerCenterX3 = player.position.x + player.hitboxWidth / 2;
      var kangarooCenterX = enemy.position.x + enemy.width / 2;
      var distToPlayer = Math.abs(_playerCenterX3 - kangarooCenterX);
      if (distToPlayer <= ((_enemy$chaseRange = enemy.chaseRange) !== null && _enemy$chaseRange !== void 0 ? _enemy$chaseRange : 350)) {
        enemy.isChasing = true;
      } else if (distToPlayer > ((_enemy$chaseRange2 = enemy.chaseRange) !== null && _enemy$chaseRange2 !== void 0 ? _enemy$chaseRange2 : 350) * 1.5) {
        enemy.isChasing = false;
      }
      if (enemy.isChasing) {
        var _enemy$chaseSpeed4;
        var _dx3 = _playerCenterX3 - kangarooCenterX;
        var _step = Math.sign(_dx3) * Math.min(Math.abs(_dx3), (_enemy$chaseSpeed4 = enemy.chaseSpeed) !== null && _enemy$chaseSpeed4 !== void 0 ? _enemy$chaseSpeed4 : 2);
        enemy.position.x += _step;
        enemy.direction = _dx3 >= 0 ? 1 : -1;
      } else {
        var _enemy$patrolCenter, _enemy$patrolRange, _enemy$patrolCenter2, _enemy$patrolRange2, _enemy$patrolSpeed;
        // Patrol back and forth around patrolCenter
        var patrolMin = ((_enemy$patrolCenter = enemy.patrolCenter) !== null && _enemy$patrolCenter !== void 0 ? _enemy$patrolCenter : enemy.position.x) - ((_enemy$patrolRange = enemy.patrolRange) !== null && _enemy$patrolRange !== void 0 ? _enemy$patrolRange : 150);
        var patrolMax = ((_enemy$patrolCenter2 = enemy.patrolCenter) !== null && _enemy$patrolCenter2 !== void 0 ? _enemy$patrolCenter2 : enemy.position.x) + ((_enemy$patrolRange2 = enemy.patrolRange) !== null && _enemy$patrolRange2 !== void 0 ? _enemy$patrolRange2 : 150);
        enemy.position.x += ((_enemy$patrolSpeed = enemy.patrolSpeed) !== null && _enemy$patrolSpeed !== void 0 ? _enemy$patrolSpeed : 1.2) * enemy.direction;
        if (enemy.position.x <= patrolMin) {
          enemy.position.x = patrolMin;
          enemy.direction = 1;
        } else if (enemy.position.x >= patrolMax - enemy.width) {
          enemy.position.x = patrolMax - enemy.width;
          enemy.direction = -1;
        }
      }
      enemy.position.x = Math.max(worldBounds.minX, Math.min(worldBounds.maxX - enemy.width, enemy.position.x));
      enemy.position.y = enemy.groundY;
      drawKangarooAnimated(enemy);
    } else {
      enemy.position.y += enemy.verticalSpeed * enemy.direction;
      if (enemy.position.y <= enemy.baseY - enemy.range) {
        enemy.position.y = enemy.baseY - enemy.range;
        enemy.direction = 1;
      } else if (enemy.position.y >= enemy.baseY + enemy.range) {
        enemy.position.y = enemy.baseY + enemy.range;
        enemy.direction = -1;
      }
      var facingRight = player.position.x + player.hitboxWidth / 2 >= enemy.position.x + enemy.width / 2;
      c.save();
      if (!facingRight) {
        c.scale(-1, 1);
        c.drawImage(enemy.image, -(enemy.position.x + enemy.width), enemy.position.y, enemy.width, enemy.height);
      } else {
        enemy.draw();
      }
      c.restore();
    }
  });
  updateFriendlyBats();
  updateAlliedSharks();
  updateFriendlyAnts();
  updateSoccerBalls();
  updateEnemyDeathEffects();
  collectibles.forEach(function (coinItem) {
    if (!coinItem.collected) {
      coinItem.sprite.draw();
    }
  });
  var wasInWater = !!player.inWater;
  player.update(platforms);

  // Elephant mount detection — any touch mounts
  var elephantEnemy = enemies.find(function (e) {
    return e.type === 'elephant';
  });
  if (elephantEnemy && !player.ridingElephant && isOverlapping(player, elephantEnemy)) {
    player.ridingElephant = true;
  } else if (!elephantEnemy) {
    player.ridingElephant = false;
  }
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

  // Player no longer dies from leaving water

  centerCameraOnPlayer();
  if (portalCooldownFrames > 0) {
    portalCooldownFrames -= 1;
  }
  if (enemyHitCooldownFrames > 0) {
    enemyHitCooldownFrames -= 1;
  }
  var touchingEnemies = enemies.filter(function (enemy) {
    return enemy.type !== 'elephant' && isOverlapping(player, enemy);
  });
  var stompedEnemy = false;
  var stompedEnemyType = null;
  touchingEnemies.forEach(function (enemy) {
    if (isStompOnEnemy(player, enemy)) {
      // Megalodon is a boss: it needs multiple head stomps before removal.
      if (enemy.type === 'megalodon') {
        var _enemy$stompCooldownF3;
        if (((_enemy$stompCooldownF3 = enemy.stompCooldownFrames) !== null && _enemy$stompCooldownF3 !== void 0 ? _enemy$stompCooldownF3 : 0) <= 0) {
          var _enemy$health2;
          enemy.health = Math.max(0, ((_enemy$health2 = enemy.health) !== null && _enemy$health2 !== void 0 ? _enemy$health2 : 10) - 1);
          enemy.stompCooldownFrames = 300;
          if (enemy.health === 0) {
            var _enemyIndex = enemies.indexOf(enemy);
            if (_enemyIndex > -1) {
              enemies.splice(_enemyIndex, 1);
            }
            spawnEnemyDeathExplosion(enemy);
            stompedEnemyType = enemy.type;
          }
        }
        stompedEnemy = true;
        return;
      }

      // Ant stomp: only kill if stompCooldown is 0
      if (enemy.type === 'ant') {
        var _enemy$stompCooldownF4;
        if (((_enemy$stompCooldownF4 = enemy.stompCooldownFrames) !== null && _enemy$stompCooldownF4 !== void 0 ? _enemy$stompCooldownF4 : 0) <= 0) {
          var _enemyIndex2 = enemies.indexOf(enemy);
          if (_enemyIndex2 > -1) enemies.splice(_enemyIndex2, 1);
          handleEnemyDefeat(enemy);
          spawnEnemyDeathExplosion(enemy);
          stompedEnemy = true;
          stompedEnemyType = enemy.type;
        }
        return;
      }

      // Elephant cannot be stomped (it's a mount)
      if (enemy.type === 'elephant') {
        return;
      }

      // Standard stomp enemy - remove and play death effect.
      var enemyIndex = enemies.indexOf(enemy);
      if (enemyIndex > -1) {
        enemies.splice(enemyIndex, 1);
      }
      handleEnemyDefeat(enemy);
      spawnEnemyDeathExplosion(enemy);
      stompedEnemy = true;
      stompedEnemyType = enemy.type;
    }
  });
  if (stompedEnemy) {
    // Player bounces on stomp (0 damage)
    player.velocity.y = -10;
    player.onGround = false;
    // Grant fly only for bat stomps
    if (stompedEnemyType === 'bat') {
      flyAbilityFrames = Math.min(flyAbilityFrames + 300, 600);
    }
  } else if (enemyHitCooldownFrames === 0 && touchingEnemies.length > 0 && !player.isCrouching) {
    var _strongestEnemy$damag;
    var strongestEnemy = touchingEnemies.find(function (enemy) {
      var _enemy$biteAnimFrames6;
      return enemy.type === 'megalodon' && ((_enemy$biteAnimFrames6 = enemy.biteAnimFrames) !== null && _enemy$biteAnimFrames6 !== void 0 ? _enemy$biteAnimFrames6 : 0) > 0;
    });
    var hunterShark = touchingEnemies.find(function (enemy) {
      return enemy.type === 'shark' && enemy.followPlayer;
    });
    var canDamageNow = !!strongestEnemy || !!hunterShark || touchingEnemies.some(function (enemy) {
      return enemy.type !== 'megalodon';
    });
    if (!canDamageNow) {
      return;
    }
    var damageAmount = (_strongestEnemy$damag = strongestEnemy === null || strongestEnemy === void 0 ? void 0 : strongestEnemy.damage) !== null && _strongestEnemy$damag !== void 0 ? _strongestEnemy$damag : 1;
    // Only take damage if it's not a successful stomp
    lives = Math.max(0, lives - damageAmount);
    enemyHitCooldownFrames = 45;
    if (strongestEnemy) {
      var _strongestEnemy$attac;
      strongestEnemy.attackCooldownFrames = (_strongestEnemy$attac = strongestEnemy.attackIntervalFrames) !== null && _strongestEnemy$attac !== void 0 ? _strongestEnemy$attac : 240;
    }

    // Launch the player away when hit; stronger launch from boss encounters.
    if (strongestEnemy) {
      player.velocity.y = -4;
      player.velocity.x = player.position.x < strongestEnemy.position.x ? -16 : 16;
    } else if (hunterShark) {
      player.velocity.y = -3;
      player.velocity.x = player.position.x < hunterShark.position.x ? -12 : 12;
    } else {
      player.velocity.y = -2;
      player.velocity.x = player.position.x < touchingEnemies[0].position.x ? -7 : 7;
    }
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
      var isMegalodonAlive = enemies.some(function (enemy) {
        return enemy.type === 'megalodon';
      });
      if (hasKey && isMegalodonAlive) {
        // Boss is still guarding the treasure.
        player.velocity.x = player.position.x < worldObject.position.x ? -3 : 3;
        player.velocity.y = -4;
        return;
      }
      if (hasKey) {
        gameEnded = true;
        gameEndMessage = 'Voce abriu o bau com sucesso!';
        resetEndQuizState();
        updateQuizOptionsForLevel();
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

  // Drive-by rider: spawns 2x per minute (every 1800 frames). Skip water-only levels.
  var isWaterOnlyLevel = ((_activeLevelConfig$wa = (_activeLevelConfig$wa2 = activeLevelConfig.waterZones) === null || _activeLevelConfig$wa2 === void 0 ? void 0 : _activeLevelConfig$wa2.length) !== null && _activeLevelConfig$wa !== void 0 ? _activeLevelConfig$wa : 0) > 0 && activeLevelConfig.waterZones.some(function (z) {
    return z.width > 2000;
  });
  if (!isWaterOnlyLevel) {
    driveByFrames -= 1;
    if (driveByFrames <= 0) {
      var _activeLevelConfig$pl, _activeLevelConfig$pl2, _activeLevelConfig$pl3;
      var groundY = (_activeLevelConfig$pl = (_activeLevelConfig$pl2 = activeLevelConfig.platforms) === null || _activeLevelConfig$pl2 === void 0 ? void 0 : (_activeLevelConfig$pl3 = _activeLevelConfig$pl2[0]) === null || _activeLevelConfig$pl3 === void 0 ? void 0 : _activeLevelConfig$pl3.y) !== null && _activeLevelConfig$pl !== void 0 ? _activeLevelConfig$pl : 450;
      driveByRiders.push({
        x: driveBySpawnFromLeft ? -140 : canvas.width + 140,
        y: groundY - 100,
        dir: driveBySpawnFromLeft ? 1 : -1
      });
      driveBySpawnFromLeft = !driveBySpawnFromLeft;
      driveByFrames = 1800;
    }
    driveByRiders = driveByRiders.filter(function (rider) {
      rider.x += rider.dir * 10;
      drawDriveByRider(rider.x, rider.y, rider.dir);
      var riderHitbox = {
        position: {
          x: rider.x,
          y: rider.y - 50
        },
        width: 130,
        height: 150
      };
      if (enemyHitCooldownFrames === 0 && isOverlapping(player, riderHitbox)) {
        lives = Math.max(0, lives - 1);
        enemyHitCooldownFrames = 45;
        player.velocity.y = -3;
        player.velocity.x = player.position.x < rider.x + 65 ? -8 : 8;
        if (lives === 0) showGameOver = true;
      }
      return rider.dir > 0 ? rider.x < canvas.width + 200 : rider.x > -200;
    });
  }
  drawHud();
  if (batRewardBalloonFrames > 0) {
    drawBatRewardBalloon();
    batRewardBalloonFrames -= 1;
  }
  if (finRewardBalloonFrames > 0) {
    drawFinRewardBalloon();
    finRewardBalloonFrames -= 1;
  }
  if (sharkRewardBalloonFrames > 0) {
    drawSharkRewardBalloon();
    sharkRewardBalloonFrames -= 1;
  }
  if (antRewardBalloonFrames > 0) {
    drawAntRewardBalloon();
    antRewardBalloonFrames -= 1;
  }
}
animate();
addEventListener('keydown', function (_ref12) {
  var keyCode = _ref12.keyCode,
    code = _ref12.code;
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
    case 37: // ← Move left
    case 65:
      {
        // A
        keys.left.pressed = true;
        break;
      }
    case 39: // → Move right
    case 68:
      {
        // D
        keys.right.pressed = true;
        break;
      }
    case 40: // ↓
    case 83: // S
    case 67:
      {
        // C - Crouch
        keys.down.pressed = true;
        break;
      }
    case 32: // SPACE - Action (Jump / Fly / Swim)
    case 87:
      {
        // W
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
    case 81:
      {
        // Q - Shoot soccer ball
        shootSoccerBall();
        break;
      }
  }
  if (code === 'KeyD' || keyCode === 68) {
    summonFriendlyBat();
    summonFriendlyShark();
    summonFriendlyAnt();
  }
});
addEventListener('keyup', function (_ref13) {
  var keyCode = _ref13.keyCode;
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
    case 37: // ← Move left
    case 65:
      {
        // A
        keys.left.pressed = false;
        break;
      }
    case 39: // → Move right
    case 68:
      {
        // D
        keys.right.pressed = false;
        break;
      }
    case 40: // ↓
    case 83: // S
    case 67:
      {
        // C - Crouch
        keys.down.pressed = false;
        break;
      }
    case 32: // SPACE - Action
    case 87:
      {
        // W
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
      activeLevelConfig = _levelConfig__WEBPACK_IMPORTED_MODULE_18__["default"];
      syncWorldBounds();
      showStartMenu = false;
      init();
    } else if (levelACompleted && isPointInsideRect(mouseX, mouseY, startButtonB)) {
      activeLevelConfig = _levelConfigB__WEBPACK_IMPORTED_MODULE_19__["default"];
      syncWorldBounds();
      showStartMenu = false;
      init();
    } else if (levelBCompleted && isPointInsideRect(mouseX, mouseY, startButtonC)) {
      activeLevelConfig = _levelConfigC__WEBPACK_IMPORTED_MODULE_20__["default"];
      syncWorldBounds();
      showStartMenu = false;
      init();
    } else if (isPointInsideRect(mouseX, mouseY, startButtonMystery)) {
      activeLevelConfig = _levelConfigMystery__WEBPACK_IMPORTED_MODULE_21__["default"];
      syncWorldBounds();
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
    var clickedOption = endQuizOptionButtons.find(function (option) {
      return isPointInsideQuizOptionButton(mouseX, mouseY, option);
    });
    if (clickedOption) {
      handleEndQuizSelection(clickedOption);
      return;
    }
    if (isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton)) {
      gameEnded = false;
      init();
    } else if (isPointInsideRect(mouseX, mouseY, gameOverMenuButton)) {
      gameEnded = false;
      showStartMenu = true;
      init();
    }
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
    isPointer = isPointInsideRect(mouseX, mouseY, startButton) || levelACompleted && isPointInsideRect(mouseX, mouseY, startButtonB) || levelBCompleted && isPointInsideRect(mouseX, mouseY, startButtonC) || isPointInsideRect(mouseX, mouseY, startButtonMystery);
  } else if (showChestHint) {
    isPointer = isPointInsideRect(mouseX, mouseY, gotItButton);
  } else if (showGameOver) {
    isPointer = isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton) || isPointInsideRect(mouseX, mouseY, gameOverMenuButton);
  } else if (isPaused) {
    isPointer = isPointInsideRect(mouseX, mouseY, pauseResumeButton) || isPointInsideRect(mouseX, mouseY, pauseMenuButton);
  } else if (gameEnded) {
    isPointer = isPointInsideRect(mouseX, mouseY, gameOverPlayAgainButton) || isPointInsideRect(mouseX, mouseY, gameOverMenuButton) || endQuizOptionButtons.some(function (option) {
      return isPointInsideQuizOptionButton(mouseX, mouseY, option);
    });
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
var BLOCK_COUNT = 100;
var BLOCK_WIDTH = 72;
var GROUND_Y = 450;
var platforms = Array.from({
  length: BLOCK_COUNT
}, function (_, index) {
  return {
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
  };
});
var levelConfig = {
  worldBounds: {
    minX: 0,
    maxX: BLOCK_COUNT * BLOCK_WIDTH,
    topY: 0,
    bottomY: GROUND_Y + 400
  },
  platforms: platforms,
  coins: [],
  objects: [{
    x: 1450,
    y: 42,
    type: 'trampoline',
    width: 72,
    height: 34,
    scale: 1.12,
    bounce: 34
  }, {
    x: 2480,
    y: 26,
    type: 'key',
    width: 68,
    height: 68,
    scale: 0.6
  }, {
    x: 3440,
    y: 560,
    type: 'chest',
    width: 96,
    height: 96,
    scale: 0.65
  }],
  waterZones: [
  // U-shaped water section (left wall, bottom, right wall) with no ground holes.
  {
    x: 3280,
    y: 94,
    width: 120,
    height: 230
  }, {
    x: 3280,
    y: 244,
    width: 420,
    height: 80
  }, {
    x: 3580,
    y: 94,
    width: 120,
    height: 230
  }],
  enemies: [{
    x: 500,
    y: 400,
    type: 'bat',
    scale: 0.14,
    range: 70,
    speed: 1.0
  }, {
    x: 1100,
    y: 140,
    type: 'bat',
    scale: 0.14,
    range: 80,
    speed: 1.2
  }, {
    x: 1650,
    y: 400,
    type: 'bat',
    scale: 0.14,
    range: 70,
    speed: 1.3
  }, {
    x: 2200,
    y: 120,
    type: 'bat',
    scale: 0.14,
    range: 60,
    speed: 1.1
  }, {
    x: 2800,
    y: 100,
    type: 'bat',
    scale: 0.14,
    range: 75,
    speed: 1.4
  }, {
    x: 3360,
    y: 260,
    type: 'shark',
    scale: 0.12,
    range: 55,
    speed: 1.2,
    motionStyle: 'bat'
  }, {
    x: 3360,
    y: 317,
    type: 'kangaroo',
    scale: 0.6,
    speed: 2.4,
    patrolSpeed: 1.4,
    patrolCenter: 3440,
    patrolRange: 140,
    chaseRange: 520
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (levelConfig);

/***/ }),

/***/ "./src/js/levelConfigB.js":
/*!********************************!*\
  !*** ./src/js/levelConfigB.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BLOCK_COUNT = 1800;
var BLOCK_WIDTH = 72;
var GROUND_Y = 520;
var platforms = Array.from({
  length: BLOCK_COUNT
}, function (_, index) {
  return {
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
  };
});
var levelConfigB = {
  worldBounds: {
    minX: 0,
    maxX: BLOCK_COUNT * BLOCK_WIDTH,
    topY: Number.NEGATIVE_INFINITY,
    bottomY: GROUND_Y + 500
  },
  platforms: platforms,
  coins: [],
  objects: [{
    x: 4200,
    y: 452,
    type: 'key',
    width: 68,
    height: 68,
    scale: 0.6
  }, {
    x: 5600,
    y: 452,
    type: 'chest',
    width: 96,
    height: 96,
    scale: 0.65
  }],
  waterZones: [{
    x: 0,
    y: 0,
    width: BLOCK_COUNT * BLOCK_WIDTH,
    height: GROUND_Y + 500
  }],
  enemies: [{
    x: 5350,
    y: 260,
    type: 'megalodon',
    // 50x the Level A shark scale (0.12 * 50 = 6).
    scale: 6,
    range: 120,
    speed: 1.8,
    motionStyle: 'bat',
    health: 10,
    damage: 3,
    chaseSpeed: 5.8,
    attackCooldownFrames: 240,
    summonIntervalFrames: 220,
    summonLimit: 4
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (levelConfigB);

/***/ }),

/***/ "./src/js/levelConfigC.js":
/*!********************************!*\
  !*** ./src/js/levelConfigC.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BLOCK_COUNT = 120;
var BLOCK_WIDTH = 72;
var GROUND_Y = 450;
var platforms = Array.from({
  length: BLOCK_COUNT
}, function (_, index) {
  return {
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
  };
});
var levelConfigC = {
  worldBounds: {
    minX: 0,
    maxX: BLOCK_COUNT * BLOCK_WIDTH,
    topY: 0,
    bottomY: GROUND_Y + 400
  },
  platforms: platforms,
  coins: [],
  objects: [{
    x: 1800,
    y: 42,
    type: 'trampoline',
    width: 72,
    height: 34,
    scale: 1.12,
    bounce: 34
  }, {
    x: 2650,
    y: 26,
    type: 'key',
    width: 68,
    height: 68,
    scale: 0.6
  }, {
    x: 3400,
    y: 560,
    type: 'chest',
    width: 96,
    height: 96,
    scale: 0.65
  }],
  waterZones: [],
  enemies: [
  // Elephant at start — player mounts it
  {
    x: 200,
    y: -84,
    type: 'elephant',
    scale: 1.1,
    speed: 2.5
  },
  // Ants spread across the level (55 total)
  {
    x: 500,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 650,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 800,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 950,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 1100,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 1250,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 1400,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 1550,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 1700,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 1850,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 2000,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 2150,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 2300,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 2450,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 2600,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 2750,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 2900,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 3050,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 3200,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 3350,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 3360,
    y: 295,
    type: 'kangaroo',
    scale: 0.7,
    speed: 2.4,
    patrolSpeed: 1.4,
    patrolCenter: 3400,
    patrolRange: 140,
    chaseRange: 520
  }, {
    x: 3500,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 3650,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 3800,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 3950,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 4100,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 4250,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 4400,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 4550,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 4700,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 4850,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 5000,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 5150,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 5300,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 5450,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 5600,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 5750,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 5900,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 6050,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 6200,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 6350,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 6500,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 6650,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 6800,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 6950,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 7100,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 7250,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 7400,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 7550,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 7700,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 7850,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 8000,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 8150,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 8300,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 8450,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 8600,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  },
  // 45 more ants (100 total)
  {
    x: 8750,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 8900,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 9050,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 9200,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 9350,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 9500,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 9650,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 9800,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 9950,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 10100,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 10250,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 10400,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 10550,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 10700,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 10850,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 11000,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 11150,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 11300,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 11450,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 11600,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 11750,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 11900,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 12050,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 12200,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 12350,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 12500,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 12650,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 12800,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 12950,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 13100,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 13250,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 13400,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 13550,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 13700,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 13850,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 14000,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 14150,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }, {
    x: 14300,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 14450,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 14600,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.7
  }, {
    x: 14750,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.4
  }, {
    x: 14900,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.6
  }, {
    x: 15050,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.5
  }, {
    x: 15200,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.3
  }, {
    x: 15350,
    y: 420,
    type: 'ant',
    scale: 0.1,
    speed: 1.8
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (levelConfigC);

/***/ }),

/***/ "./src/js/levelConfigMystery.js":
/*!**************************************!*\
  !*** ./src/js/levelConfigMystery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var BLOCK_COUNT = 1800;
var BLOCK_WIDTH = 72;
var GROUND_Y = 520;
var platforms = Array.from({
  length: BLOCK_COUNT
}, function (_, index) {
  return {
    x: index * BLOCK_WIDTH,
    y: GROUND_Y,
    type: 'small',
    scale: 1
  };
});

// Extra invisible wall platforms scattered around to block the player
var invisibleWalls = [].concat(_toConsumableArray(Array.from({
  length: 8
}, function (_, i) {
  return {
    x: 2000,
    y: GROUND_Y - (i + 1) * 72,
    type: 'small',
    scale: 1
  };
})), _toConsumableArray(Array.from({
  length: 8
}, function (_, i) {
  return {
    x: 3000,
    y: GROUND_Y - (i + 1) * 72,
    type: 'small',
    scale: 1
  };
})), _toConsumableArray(Array.from({
  length: 8
}, function (_, i) {
  return {
    x: 1200,
    y: GROUND_Y - (i + 1) * 72,
    type: 'small',
    scale: 1
  };
})), _toConsumableArray(Array.from({
  length: 8
}, function (_, i) {
  return {
    x: 4800,
    y: GROUND_Y - (i + 1) * 72,
    type: 'small',
    scale: 1
  };
})), _toConsumableArray(Array.from({
  length: 8
}, function (_, i) {
  return {
    x: 6000,
    y: GROUND_Y - (i + 1) * 72,
    type: 'small',
    scale: 1
  };
})), _toConsumableArray(Array.from({
  length: 20
}, function (_, i) {
  return {
    x: 2200 + i * 72,
    y: GROUND_Y - 216,
    type: 'small',
    scale: 1
  };
})), _toConsumableArray(Array.from({
  length: 20
}, function (_, i) {
  return {
    x: 3500 + i * 72,
    y: GROUND_Y - 288,
    type: 'small',
    scale: 1
  };
})));
var levelConfigMystery = {
  worldBounds: {
    minX: 0,
    maxX: BLOCK_COUNT * BLOCK_WIDTH,
    topY: Number.NEGATIVE_INFINITY,
    bottomY: GROUND_Y + 500
  },
  platforms: [].concat(platforms, _toConsumableArray(invisibleWalls)),
  hidePlatforms: true,
  coins: [],
  objects: [{
    x: 4200,
    y: 452,
    type: 'key',
    width: 68,
    height: 68,
    scale: 0.6
  }, {
    x: 5600,
    y: 452,
    type: 'chest',
    width: 96,
    height: 96,
    scale: 0.65
  }],
  waterZones: [{
    x: 0,
    y: 0,
    width: BLOCK_COUNT * BLOCK_WIDTH,
    height: GROUND_Y + 500
  }],
  enemies: [{
    x: 5350,
    y: 260,
    type: 'megalodon',
    scale: 6,
    range: 120,
    // Player max speed = 9; 100x = 900
    speed: 900,
    motionStyle: 'bat',
    health: 10,
    damage: 3,
    chaseSpeed: 900,
    attackCooldownFrames: 240,
    summonIntervalFrames: 220,
    summonLimit: 4
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (levelConfigMystery);

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map