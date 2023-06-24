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
    // const section1 = document.querySelector('#section--1') as HTMLElement;
    // const obsCallback = (entries: IntersectionObserverEntry []) => {
    //   entries.forEach(entry => {
    //     console.log(entry);
    //   });
    // }
    // const obsOptions = {
    //   root: null,
    //   rootMargin: '10px',
    //   threshold: .1,
    // }
    // const observer = new IntersectionObserver(obsCallback, obsOptions);
    // observer.observe(section1);
}
//# sourceMappingURL=stickyWithObserver.js.map