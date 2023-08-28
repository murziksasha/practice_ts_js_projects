import Slider from "./slider";
export default class MiniSlider extends Slider {
    constructor(pageSelector, nextSelector, prevSelector) {
        super({ pageSelector, nextSelector, prevSelector });
        this.pageSelector = pageSelector;
        this.nextSelector = nextSelector;
        this.prevSelector = prevSelector;
        this.slideLocalCounter = 0;
        this._length = this.slides.length - 1;
    }
    _sliderClickNext(next = 1) {
        var _a, _b;
        this.slideLocalCounter = this.slideLocalCounter + next;
        if (next === -1) {
            if (this.slideLocalCounter < 0)
                this.slideLocalCounter = this.slides.length - 1;
            (_a = this.container) === null || _a === void 0 ? void 0 : _a.insertBefore(this.slides[this.slideLocalCounter], this.slides[0]);
        }
        else {
            if (this.slideLocalCounter > this._length)
                this.slideLocalCounter = 0;
            (_b = this.container) === null || _b === void 0 ? void 0 : _b.insertBefore(this.slides[this.slideLocalCounter], this.slides[0]);
        }
    }
    bindTriggers() {
        var _a, _b;
        (_a = this.next) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this._sliderClickNext());
        (_b = this.prev) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => this._sliderClickNext(-1));
    }
    init() {
        if (this.container)
            this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
        this.bindTriggers();
    }
}
//# sourceMappingURL=slider-mini.js.map