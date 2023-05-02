export function modal(modalSelector, btnSelector, timer = false, showClass = 'show', closeClickOverlay = true) {
    const modalsPop = document.querySelectorAll(modalSelector);
    const btnsModal = document.querySelectorAll(btnSelector);
    const windows = document.querySelectorAll('[data-modal]');
    let modalTimerId;
    btnsModal.forEach((btn, i) => {
        btn.addEventListener('click', e => {
            if (e.target) {
                e.preventDefault();
                windows.forEach(item => closeModal(item)); //при каждом клике скрываем ВСЕ модальные ОКНА!
                showModal(modalsPop[0]);
            }
        });
    });
    modalsPop.forEach(item => {
        item.addEventListener('click', e => {
            const target = e.target;
            if ((target === item && closeClickOverlay) || target.matches('[data-close]')) {
                windows.forEach(item => closeModal(item)); //при каждом клике скрываем ВСЕ модальные ОКНА!
            }
        });
    });
    function showModal(itemModal) {
        if (timer) {
            clearTimeout(modalTimerId);
        }
        itemModal.classList.remove('hide');
        itemModal.classList.add(showClass);
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', e => {
            const target = e.code;
            if (target === 'Escape' && !itemModal.classList.contains('hide')) {
                windows.forEach(item => closeModal(item)); //при каждом клике скрываем ВСЕ модальные ОКНА!
            }
        });
    }
    function closeModal(itemModal) {
        itemModal.classList.remove(showClass);
        itemModal.classList.add('hide');
        document.body.style.overflow = '';
    }
    if (timer) {
        modalTimerId = setTimeout(showModal, 50000);
        window.addEventListener('scroll', () => showModalByScroll(modalsPop[0]));
        function showModalByScroll(itemModal) {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
                showModal(itemModal);
                window.removeEventListener('scroll', () => showModalByScroll(modalsPop[0]));
            }
        }
        showModalByScroll(modalsPop[0]);
    }
}
//# sourceMappingURL=modal.js.map