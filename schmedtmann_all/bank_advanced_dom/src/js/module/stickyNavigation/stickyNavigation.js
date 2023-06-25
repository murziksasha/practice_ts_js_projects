export function stickyNavigation() {
    const nav = document.querySelector('.nav');
    const section1 = document.querySelector('#section--1');
    const initialCoords = section1 === null || section1 === void 0 ? void 0 : section1.getBoundingClientRect();
    console.log(initialCoords);
    window.addEventListener('scroll', () => {
        if (initialCoords) {
            window.scrollY > initialCoords.top ? nav === null || nav === void 0 ? void 0 : nav.classList.add('sticky') : nav === null || nav === void 0 ? void 0 : nav.classList.remove('sticky');
        }
    });
}
//# sourceMappingURL=stickyNavigation.js.map