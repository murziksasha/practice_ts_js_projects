export default class Slider {
    // constructor(
    //   public pageSelector: string,
    //   public btnsSelector: string,
    // )
    constructor({ pageSelector = '', btnsSelector = '', next = '', prev = '' }) {
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
//# sourceMappingURL=slider.js.map