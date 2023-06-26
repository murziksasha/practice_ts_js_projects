import { tabs } from "../tabs/tabs.js";
import { menuFade } from "../menuFade/menuFade.js";
import { stickyWithObserver } from "../stickyWithObserver/stickyWithObserver.js";
import { revealSections } from "../revealSections/revealSections.js";
import { lazyImgLoader } from "../lazyImgLoader/lazyImgLoader.js";
export default function app() {
    stickyWithObserver();
    menuFade();
    // stickyNavigation();
    revealSections();
    lazyImgLoader();
    ///////////////////////////////////////
    // Modal window
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.btn--close-modal');
    const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
    const linkParent = document.querySelector('.nav__links');
    tabs('.operations__tab-container', '.btn.operations__tab', '.operations__content', 'operations__tab--active');
    linkParent.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        if (target.classList.contains('nav__link')) {
            const id = target.getAttribute('href');
            if (id) {
                const proposeElem = document.querySelector(id);
                if (proposeElem) {
                    proposeElem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
    const openModal = function (e) {
        e.preventDefault();
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
    const divCookie = document.createElement('div');
    divCookie.classList.add('cookie-message');
    divCookie.innerHTML = `
      <h2>Hello! Attention, we use the cookies files</h2>
      <button class='btn btn--text'>Click if you agree</button>
    `;
    document.body.insertAdjacentElement('afterbegin', divCookie);
    divCookie.addEventListener('click', e => {
        divCookie.remove();
    });
    divCookie.style.height =
        Number.parseFloat(getComputedStyle(divCookie).height) + 60 + 'px';
}
//# sourceMappingURL=app.js.map