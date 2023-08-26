import Slider from "./slider";
export default class MiniSlider extends Slider {
    constructor(pageSelector, nextSelector, prevSelector) {
        super({ pageSelector, nextSelector, prevSelector });
        this.pageSelector = pageSelector;
        this.nextSelector = nextSelector;
        this.prevSelector = prevSelector;
    }
    init() {
        if (this.container)
            this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;
    }
}
//# sourceMappingURL=slider-mini.js.map