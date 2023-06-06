export function modalCode() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.close-modal');
    const btns = document.querySelectorAll('.show-modal');
    const showModal = () => {
        modal.classList.remove('hide');
        overlay.classList.remove('hide');
        btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener('click', closeModal);
    };
    const closeModal = () => {
        modal.classList.add('hide');
        overlay.classList.add('hide');
        btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.removeEventListener('click', closeModal);
    };
    btns.forEach(btn => {
        btn.addEventListener('click', showModal);
    });
    document.addEventListener('keydown', e => {
        const target = e.code;
        if (target === 'Escape' && !modal.classList.contains('hide')) {
            closeModal();
        }
    });
    document.body.addEventListener('click', e => {
        const target = e.target;
        if (target === overlay) {
            closeModal();
        }
    });
}
//# sourceMappingURL=modalCode.js.map