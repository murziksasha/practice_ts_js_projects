import Slider from "./slider";
export default class MiniSlider extends Slider {
    constructor(pageSelector, nextSelector, prevSelector) {
        super({ pageSelector, nextSelector, prevSelector });
        this.pageSelector = pageSelector;
        this.nextSelector = nextSelector;
        this.prevSelector = prevSelector;
    }
    init() {
        console.log(this.container, this.next, this.prev);
    }
}
//# sourceMappingURL=slider-mini.js.map