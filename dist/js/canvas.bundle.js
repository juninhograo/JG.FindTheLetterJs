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
/* harmony import */ var _img_platform_platform_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platform/platform-small.png */ "./src/img/platform/platform-small.png");
/* harmony import */ var _img_platform_platform_big_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/platform/platform-big.png */ "./src/img/platform/platform-big.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var gravity = 1;
canvas.width = 1024;
canvas.height = 576;
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
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 30;
    this.height = 30;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      //when player is falling down
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
      //when player reaches the root of the ground
      else {
        //stop the fall
        //this.velocity.y = 0
      }
    }
  }]);
  return Player;
}(); //images
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

//player
var player = new Player();
var backgroundImage = createImage(_img_background_background_blue_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
var cloudImage = createImage(_img_elements_clouds_cloud_1_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var hillImage = createImage(_img_elements_hills_hill_1_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var platformImageSmall = createImage(_img_platform_platform_small_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var platformImageBig = createImage(_img_platform_platform_big_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var scrollOffset = 0;
function init() {
  player = new Player();
  backgroundImage = createImage(_img_background_background_blue_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  cloudImage = createImage(_img_elements_clouds_cloud_1_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  hillImage = createImage(_img_elements_hills_hill_1_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  platformImageSmall = createImage(_img_platform_platform_small_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
  platformImageBig = createImage(_img_platform_platform_big_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  scrollOffset = 0;
}

//background
var backgroundObjects = [new GenericObject({
  x: 0,
  y: 0,
  width: backgroundImage.width,
  height: backgroundImage.height,
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

//platform
var platforms = [new GenericObject({
  x: 0,
  y: 450,
  width: platformImageSmall.width,
  height: platformImageSmall.height,
  image: platformImageSmall
}), new GenericObject({
  x: 600,
  y: 450,
  width: platformImageBig.width,
  height: platformImageBig.height,
  image: platformImageBig
})];

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
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  if (keys.right.pressed && player.position.x < 400) player.velocity.x = 5;else if (keys.left.pressed && player.position.x > 400) player.velocity.x = -5;else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += 5;

      //paralax effect to the right side
      platforms.forEach(function (p) {
        p.position.x -= 5;
      });
      genericObjects.forEach(function (p) {
        p.position.x -= 2;
      });
      cloudObjects.forEach(function (p) {
        p.position.x -= .5;
      });
    } else if (keys.left.pressed) {
      scrollOffset += -5;

      //paralax effect to the left side
      platforms.forEach(function (p) {
        p.position.x += 5;
      });
      genericObjects.forEach(function (p) {
        p.position.x += 2;
      });
      cloudObjects.forEach(function (p) {
        p.position.x += .5;
      });
    }
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
  platforms.forEach(function (p) {
    p.draw();
  });
  player.update();

  //platform colision detection
  platforms.forEach(function (p) {
    if (player.position.y + player.height <= p.position.y && player.position.y + player.height + player.velocity.y >= p.position.y && player.position.x <= p.position.x + p.width && player.position.x + player.width + player.velocity.x >= p.position.x) {
      player.velocity.y = 0;
    }
  });

  //win condition
  if (scrollOffset > 2000) {
    scrollOffset = 0;
    console.log('you win!');
  }
  //loose condition
  if (player.position.y > canvas.height) {
    //console.log('you loose!')
    init();
  }
}
animate();
addEventListener('keydown', function (_ref2) {
  var keyCode = _ref2.keyCode;
  //console.log(keyCode)

  switch (keyCode) {
    case 37:
    case 65:
      {
        //console.log('left');
        keys.left.pressed = true;
        break;
      }
    case 40:
    case 83:
      {
        //console.log('down');
        keys.down.pressed = true;
        break;
      }
    case 39:
    case 68:
      {
        //console.log('right');
        keys.right.pressed = true;
        break;
      }
    case 38:
    case 32:
      {
        //space 32, up 87
        //console.log('up');
        if (!keys.up.pressed) {
          player.velocity.y -= 25;
        }
        keys.up.pressed = true;
        break;
      }
  }
});
addEventListener('keyup', function (_ref3) {
  var keyCode = _ref3.keyCode;
  //console.log(keyCode)
  switch (keyCode) {
    case 37:
    case 65:
      {
        //console.log('left');
        keys.left.pressed = false;
        break;
      }
    case 40:
    case 83:
      {
        //console.log('down');
        keys.down.pressed = false;
        break;
      }
    case 39:
    case 68:
      {
        //console.log('right');
        keys.right.pressed = false;
        break;
      }
    case 38:
    case 32:
      {
        //space 32, up 87
        //console.log('up');
        player.velocity.y -= 0;
        keys.up.pressed = false;
        break;
      }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map