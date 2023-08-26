export default class Slider {
    constructor({ pageSelector, btnsSelector, nextSelector, prevSelector }) {
        this.container = null;
        this.btns = [];
        this.prev = null;
        this.next = null;
        this.slides = [];
        this.slideIndex = 1;
        this.blockHanson = null;
        if (typeof pageSelector === 'string')
            this.container = document.querySelector(pageSelector);
        if (typeof btnsSelector === 'string')
            this.btns = Array.from(document.querySelectorAll(btnsSelector));
        if (this.container) {
            this.slides = Array.from(this.container.children);
        }
        this.blockHanson = document.querySelector('div.hanson');
        if (typeof nextSelector === 'string')
            this.next = document.querySelector(nextSelector);
        if (typeof prevSelector === 'string')
            this.prev = document.querySelector(prevSelector);
    }
}
//# sourceMappingURL=slider.js.map