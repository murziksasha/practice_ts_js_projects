/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/difference/difference.js":
/*!*************************************************!*\
  !*** ./src/js/modules/difference/difference.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Difference; }
/* harmony export */ });
class Difference {
  constructor(oldOfficerSelector, newOfficerSelector, itemsSelector) {
    var _a, _b;
    this.oldOfficerSelector = oldOfficerSelector;
    this.newOfficerSelector = newOfficerSelector;
    this.itemsSelector = itemsSelector;
    this.oldCounter = 0;
    this.newCounter = 0;
    this.oldOfficer = document.querySelector(oldOfficerSelector);
    this.newOfficer = document.querySelector(newOfficerSelector);
    this.items = itemsSelector;
    this.oldItems = (_a = this.oldOfficer) === null || _a === void 0 ? void 0 : _a.querySelectorAll(itemsSelector);
    this.newItems = (_b = this.oldOfficer) === null || _b === void 0 ? void 0 : _b.querySelectorAll(itemsSelector);
  }
  bindTriggers() {
    var _a, _b, _c, _d;
    (_b = (_a = this.oldOfficer) === null || _a === void 0 ? void 0 : _a.querySelector('plus')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
      if (this.oldItems && this.oldCounter !== this.oldItems.length - 2) {
        this.oldItems[this.oldCounter].style.display = 'flex';
        this.oldCounter++;
      } else {
        if (this.oldItems) {
          this.oldItems[this.oldCounter].style.display = 'flex';
          this.oldItems[this.oldItems.length - 1].remove();
        }
      }
    });
    (_d = (_c = this.newOfficer) === null || _c === void 0 ? void 0 : _c.querySelector('plus')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
      if (this.newItems && this.newCounter !== this.newItems.length - 2) {
        this.newItems[this.newCounter].style.display = 'flex';
        this.newCounter++;
      } else {
        if (this.newItems) {
          this.newItems[this.newCounter].style.display = 'flex';
          this.newItems[this.newItems.length - 1].remove();
        }
      }
    });
  }
  hideItems(items) {
    if (items) items.forEach((item, i, arr) => {
      if (i !== arr.length - 1) {
        if (item instanceof HTMLElement) item.style.display = 'none';
      }
    });
  }
  init() {
    this.hideItems(this.oldItems);
    this.hideItems(this.newItems);
    this.bindTriggers();
  }
}

/***/ }),

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

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MiniSlider; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(pageSelector, nextSelector, prevSelector) {
    super({
      pageSelector,
      nextSelector,
      prevSelector
    });
    this.pageSelector = pageSelector;
    this.nextSelector = nextSelector;
    this.prevSelector = prevSelector;
    this.slideLocalCounter = 0;
    this._length = this.slides.length - 1;
  }
  _sliderClickNext() {
    let next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var _a, _b;
    this.slideLocalCounter = this.slideLocalCounter + next;
    if (next === -1) {
      if (this.slideLocalCounter < 0) this.slideLocalCounter = this.slides.length - 1;
      (_a = this.container) === null || _a === void 0 ? void 0 : _a.insertBefore(this.slides[this.slideLocalCounter], this.slides[0]);
    } else {
      if (this.slideLocalCounter > this._length) this.slideLocalCounter = 0;
      (_b = this.container) === null || _b === void 0 ? void 0 : _b.insertBefore(this.slides[this.slideLocalCounter], this.slides[0]);
    }
  }
  bindTriggers() {
    var _a, _b;
    (_a = this.next) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this._sliderClickNext());
    (_b = this.prev) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => this._sliderClickNext(-1));
  }
  init() {
    if (this.container) this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
    this.bindTriggers();
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
  constructor(_ref) {
    let {
      pageSelector,
      btnsSelector,
      nextSelector,
      prevSelector
    } = _ref;
    this.container = null;
    this.btns = [];
    this.prev = null;
    this.next = null;
    this.slides = [];
    this.slideIndex = 1;
    this.blockHanson = null;
    if (typeof pageSelector === 'string') this.container = document.querySelector(pageSelector);
    if (typeof btnsSelector === 'string') this.btns = Array.from(document.querySelectorAll(btnsSelector));
    if (this.container) {
      this.slides = Array.from(this.container.children);
    }
    this.blockHanson = document.querySelector('div.hanson');
    if (typeof nextSelector === 'string') this.next = document.querySelector(nextSelector);
    if (typeof prevSelector === 'string') this.prev = document.querySelector(prevSelector);
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
/* harmony import */ var _modules_slider_slider_mini_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini.js */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo_playVideo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo/playVideo.js */ "./src/js/modules/playVideo/playVideo.js");
/* harmony import */ var _modules_difference_difference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference/difference.js */ "./src/js/modules/difference/difference.js");




document.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.page', '.next');
  slider.render();
  const showUpSlider = new _modules_slider_slider_mini_js__WEBPACK_IMPORTED_MODULE_1__["default"]('.showup__content-slider', '.showup__next', '.showup__prev');
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini_js__WEBPACK_IMPORTED_MODULE_1__["default"]('.modules__content-slider', '.modules__info-btns .slick-next', '.modules__info-btns .slick-prev');
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini_js__WEBPACK_IMPORTED_MODULE_1__["default"]('.feed__slider', '.feed__slider .slick-next', '.feed__slider .slick-prev');
  feedSlider.init();
  const player = new _modules_playVideo_playVideo_js__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay');
  player.init();
  new _modules_difference_difference_js__WEBPACK_IMPORTED_MODULE_3__["default"]('.officerold', '.officernew', '.officer__card-item').init();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map