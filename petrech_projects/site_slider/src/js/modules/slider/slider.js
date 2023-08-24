export default class Slider {
    constructor(pageSelector, btnsSelector) {
        this.pageSelector = pageSelector;
        this.btnsSelector = btnsSelector;
        this.slides = [];
        this.slideIndex = 1;
        this.page = document.querySelector(pageSelector);
        this.btns = Array.from(document.querySelectorAll(btnsSelector));
        if (this.page) {
            this.slides = Array.from(this.page.children);
        }
        this.showSlides(this.slideIndex);
    }
    showSlides(n) {
        if (n > this.slides.length)
            this.slideIndex = 1;
        if (n < 1)
            this.slideIndex = this.slides.length;
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
//# sourceMappingURL=slider.js.map