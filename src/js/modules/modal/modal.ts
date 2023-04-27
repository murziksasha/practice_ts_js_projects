


export function modal(modalSelector: string, btnSelector: string, timer: boolean = false): void {

  const modalPop = document.querySelector(modalSelector) as HTMLDivElement;
  const btnModal = document.querySelector(btnSelector) as HTMLButtonElement;
  let modalTimerId: number;

  btnModal.addEventListener('click', e => {
    if(e.target){
      e.preventDefault();
      showModal();
    }
  });

  modalPop.addEventListener('click', e => {
    const target = e.target as HTMLElement;
    if(target === modalPop || target.matches('[data-close]')) {
      closeModal();
    }
  });

  function showModal() {
    if(timer){clearTimeout(modalTimerId)}
    modalPop.classList.remove('hide');
    modalPop.classList.add('show');
    document.body.style.overflow = 'hidden';

    
  document.addEventListener('keydown', e => {
    const target = e.code;
    if(target === 'Escape' && !modalPop.classList.contains('hide')){
      closeModal();
      }
    });
  }

  function closeModal(){
    modalPop.classList.remove('show');
    modalPop.classList.add('hide');
    document.body.style.overflow = '';
  }


if(timer){
  modalTimerId = setTimeout(showModal, 50000);

  window.addEventListener('scroll', showModalByScroll);

  function showModalByScroll() {
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
        showModal();
        window.removeEventListener('scroll', showModalByScroll);
      }
  }

  showModalByScroll();
}



}