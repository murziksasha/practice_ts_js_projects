export function modalCode() {
  const modal = document.querySelector('.modal') as HTMLDivElement;
  const overlay = document.querySelector('.overlay') as HTMLDivElement;
  const btnCloseModal = document.querySelector('.close-modal');
  const btns = document.querySelectorAll('.show-modal');

  const showModal = () => {
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
    btnCloseModal?.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    modal.classList.add('hide');
    overlay.classList.add('hide');
    btnCloseModal?.removeEventListener('click', closeModal);
  };

  btns.forEach(btn => {
    btn.addEventListener('click', showModal);
  });

  
  document.addEventListener('keydown', e => {
    const target = e.code;
    if(target === 'Escape' && !modal.classList.contains('hide')){
      closeModal();
    }
  });

  document.body.addEventListener('click', e => {
    const target = e.target;
    if(target === overlay){
      closeModal();
    }
  });
}
