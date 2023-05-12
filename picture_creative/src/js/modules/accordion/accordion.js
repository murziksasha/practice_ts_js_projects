export function accordion(triggersSelector, itemsSelector) {
    const parentEl = document.querySelector(triggersSelector);
    const blocks = document.querySelectorAll(itemsSelector);
    blocks.forEach(item => {
        item.classList.add('animate__animated', 'animate__fadeInDown');
    });
    parentEl === null || parentEl === void 0 ? void 0 : parentEl.addEventListener('click', e => {
        var _a, _b, _c;
        e.preventDefault();
        const target = e.target;
        if (target && target.closest('p.accordion-heading > span')) {
            (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle('active-style');
            const nextSibling = (_b = target.parentElement) === null || _b === void 0 ? void 0 : _b.nextElementSibling;
            if ((_c = target.parentElement) === null || _c === void 0 ? void 0 : _c.classList.contains('active-style')) {
                if (nextSibling) {
                    nextSibling.style.maxHeight = (nextSibling === null || nextSibling === void 0 ? void 0 : nextSibling.scrollHeight) + 80 + 'px';
                }
            }
            else {
                nextSibling.style.maxHeight = '0px';
            }
        }
    });
}
//# sourceMappingURL=accordion.js.map