export function revealSections() {
    const allSections = document.querySelectorAll('.section');
    const revealSection = (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting)
            return;
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target); // обязательное условия убрать наблюдатель для того чтобы даже когда покажутся все секции он не срабатывал
    };
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: .15,
    });
    allSections.forEach(section => {
        sectionObserver.observe(section);
        section.classList.add('section--hidden');
    });
}
//# sourceMappingURL=revealSections.js.map