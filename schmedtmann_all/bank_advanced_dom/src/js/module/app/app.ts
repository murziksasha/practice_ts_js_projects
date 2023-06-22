import { tabs } from "../tabs/tabs.js";


export default function app() {
  ///////////////////////////////////////
  // Modal window

  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  const linkParent = document.querySelector('.nav__links') as HTMLUListElement;

  tabs('.operations__tab-container', '.btn.operations__tab', '.operations__content', 'operations__tab--active')

  linkParent.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if(target.classList.contains('nav__link')){
      const id = target.getAttribute('href');
        if (id) {
          const proposeElem = document.querySelector(id);
          if (proposeElem) {
            proposeElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }
  });

  const openModal = function (e: Event) {
    e.preventDefault();
    modal?.classList.remove('hidden');
    overlay?.classList.remove('hidden');
  };

  const closeModal = function () {
    modal?.classList.add('hidden');
    overlay?.classList.add('hidden');
  };

  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

  btnCloseModal?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal?.classList.contains('hidden')) {
      closeModal();
    }
  });

  const divCookie = document.createElement('div') as HTMLDivElement;
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
