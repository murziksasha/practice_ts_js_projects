


export function modal(modalSelector: string, btnSelector: string, timer: boolean = false, showClass: string = 'show', closeClickOverlay: boolean = true): void {

  const modalsPop: NodeListOf<HTMLDivElement> = document.querySelectorAll(modalSelector);
  const btnsModal: NodeListOf<HTMLButtonElement> = document.querySelectorAll(btnSelector);
  const windows: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-modal]');
  const scroll = calcScroll(); // функция выщитает прокрутку убираем скачки сайта при вызове модального окошка
  const gift = document.querySelector('img.fixed-gift.wow.pulse.infinite') as HTMLImageElement; //изо подарочка на странице

  const giftModal = document.querySelector('.popup-gift') as HTMLDivElement;
  const consultModal = document.querySelector('.popup-consultation') as HTMLDivElement;


  btnsModal.forEach((btn, i) => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if(target.matches('img.fixed-gift.wow.pulse.infinite')){
        target.remove()
      }
      if(target){
        windows.forEach(item => closeModal(item)); //при каждом клике скрываем ВСЕ модальные ОКНА!
        showModal(modalsPop[0]);
      }
    });
  });

  modalsPop.forEach(item => {
    item.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      if(target.matches('img.fixed-gift.wow.pulse.infinite')){
        item.remove()
      }
      if((target === item && closeClickOverlay) || target.matches('[data-close]')) {
        windows.forEach(item => closeModal(item)); //при каждом клике скрываем ВСЕ модальные ОКНА!
      }
    });
  })

  function showModal(itemModal: HTMLElement) {

    itemModal.classList.remove('hide');
    itemModal.classList.add(showClass);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;


    
  document.addEventListener('keydown', e => {
    const target = e.code;
    if(target === 'Escape' && !itemModal.classList.contains('hide')){
      windows.forEach(item => closeModal(item)); //при каждом клике скрываем ВСЕ модальные ОКНА!
      }
    });
  }

  function closeModal(itemModal: HTMLElement){
    itemModal.classList.remove(showClass);
    itemModal.classList.add('hide');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;

  }

  // Функция позволяющая убрать дергание окна сайта при появлении модального окна
  function calcScroll() {
    let div = document.createElement('div') as HTMLDivElement;

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    //от полной ширины окна отнимаем главный контент и пэддинги (без прокрутки!) = равно будет сама прокрутка
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }



  if(timer){

    window.addEventListener('scroll', showModalByScroll);
  
    function showModalByScroll() {
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
        if(gift) {
          gift.remove();
        }
        showModal(modalsPop[0]);
        window.removeEventListener('scroll', showModalByScroll);
      }
    }

  showModalByScroll();
}


  function showModalByTime(selector: HTMLDivElement, time: number) {
    setTimeout(function(){
      let param: string | undefined = undefined;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if(getComputedStyle(item).display !== 'none'){
          param = 'block';
        }

        }); 
        if(!param){
          console.log(param);
          showModal(selector);
        }
    }, time)
  }

  showModalByTime(consultModal, 3000);

}