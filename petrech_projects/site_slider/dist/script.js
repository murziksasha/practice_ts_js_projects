/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/playVideo/playVideo.js":
/*!***********************************************!*\
  !*** ./src/js/modules/playVideo/playVideo.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoPlayer; }
/* harmony export */ });
// import 'youtube'; // Import the YouTube Player API typings
class VideoPlayer {
  constructor(triggers, overlaySelector) {
    this.triggers = triggers;
    this.overlaySelector = overlaySelector;
    this.btns = Array.from(document.querySelectorAll(triggers));
    this.overlay = document.querySelector(overlaySelector);
    this.close = this.overlay.querySelector('.close');
  }
  bindTriggers() {
    var _a;
    (_a = this.btns) === null || _a === void 0 ? void 0 : _a.forEach(btn => {
      btn.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          if (this.overlay) this.overlay.style.display = 'flex';
        } else {
          const path = btn.getAttribute('data-url');
          if (path) this.createPlayer(path);
        }
      });
    });
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });
    console.log(this.player);
    if (this.overlay) this.overlay.style.display = 'flex';
  }
  hideYouTubeFrame() {
    if (this.overlay) this.overlay.style.display = 'none';
    this.player.stopVideo();
  }
  bindCloseBtn() {
    var _a, _b;
    (_a = this.close) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.hideYouTubeFrame.bind(this));
    (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.hideYouTubeFrame.bind(this));
  }
  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindCloseBtn();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainSlider; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(pageSelector, btnsSelector) {
    super({
      pageSelector,
      btnsSelector
    });
    this.pageSelector = pageSelector;
    this.btnsSelector = btnsSelector;
    this.showSlides(this.slideIndex);
  }
  showSlides(n) {
    if (n > this.slides.length) this.slideIndex = 1;
    if (n < 1) this.slideIndex = this.slides.length;
    try {
      if (!this.blockHanson) return;
      this.blockHanson.style.opacity = '0';
      if (n === 3) {
        this.blockHanson.classList.add('animate__animated');
        setTimeout(() => {
          if (this.blockHanson) {
            this.blockHanson.classList.add('animate__fadeInUpBig');
            this.blockHanson.style.opacity = '1';
          }
        }, 3000);
      } else {
        this.blockHanson.classList.remove('animate__fadeInUpBig');
      }
    } catch (e) {}
    this.slides.forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  render() {
    var _a;
    (_a = this.btns) === null || _a === void 0 ? void 0 : _a.forEach(item => {
      var _a, _b, _c;
      item.addEventListener('click', () => {
        this.plusSlides(1);
      });
      ((_b = (_a = item.parentNode) === null || _a === void 0 ? void 0 : _a.previousSibling) === null || _b === void 0 ? void 0 : _b.previousSibling) ? (_c = item.parentNode.previousSibling) === null || _c === void 0 ? void 0 : _c.previousSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      }) : null;
    });
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
class Slider {
  // constructor(
  //   public pageSelector: string,
  //   public btnsSelector: string,
  // )
  constructor(_ref) {
    let {
      pageSelector = '',
      btnsSelector = '',
      next = '',
      prev = ''
    } = _ref;
    this.slides = [];
    this.slideIndex = 1;
    this.page = document.querySelector(pageSelector);
    this.btns = Array.from(document.querySelectorAll(btnsSelector));
    if (this.page) {
      this.slides = Array.from(this.page.children);
    }
    this.blockHanson = document.querySelector('div.hanson');
  }
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main.js */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_playVideo_playVideo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playVideo/playVideo.js */ "./src/js/modules/playVideo/playVideo.js");


document.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.page', '.next');
  slider.render();
  const player = new _modules_playVideo_playVideo_js__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup .play', '.overlay');
  player.init();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map