export function stickyWithObserver() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const navHeight = nav.getBoundingClientRect().height;
    const stickNav = (entries) => {
        const [entry] = entries;
        entry.isIntersecting ? nav.classList.remove('sticky') :
            nav.classList.add('sticky');
    };
    const headerObserver = new IntersectionObserver(stickNav, {
        root: null,
        threshold: 0,
        rootMargin: `${-navHeight}px`
    });
    headerObserver.observe(header);
}
//# sourceMappingURL=stickyWithObserver.js.map