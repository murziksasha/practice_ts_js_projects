import { stickyWithObserver } from "../stickyWithObserver/stickyWithObserver.js";
export default function app() {
    stickyWithObserver();
    ///////////////////////////////////////
    // Modal window
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.btn--close-modal');
    const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
    const openModal = function () {
        modal === null || modal === void 0 ? void 0 : modal.classList.remove('hidden');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('hidden');
    };
    const closeModal = function () {
        modal === null || modal === void 0 ? void 0 : modal.classList.add('hidden');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('hidden');
    };
    btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
    btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener('click', closeModal);
    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !(modal === null || modal === void 0 ? void 0 : modal.classList.contains('hidden'))) {
            closeModal();
        }
    });
}
//# sourceMappingURL=app.js.map