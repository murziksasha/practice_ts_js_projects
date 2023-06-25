export function menuFade() {
    const nav = document.querySelector('.nav');
    const handleHover = (e, opacity) => {
        var _a, _b;
        const target = e.target;
        if (target && target.classList.contains('nav__link')) {
            const siblings = (_a = target.closest('.nav')) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.nav__link');
            const logo = (_b = target.closest('.nav')) === null || _b === void 0 ? void 0 : _b.querySelector('img');
            siblings === null || siblings === void 0 ? void 0 : siblings.forEach((el) => {
                if (el !== target) {
                    const siblingElement = el;
                    siblingElement.style.opacity = opacity;
                }
            });
            logo.style.opacity = opacity;
        }
    };
    nav === null || nav === void 0 ? void 0 : nav.addEventListener('mouseover', e => handleHover(e, '0.5'));
    nav === null || nav === void 0 ? void 0 : nav.addEventListener('mouseout', e => handleHover(e, '1'));
}
;
//# sourceMappingURL=menuFade.js.map