

export function burger(menuSelector: string, burgerSelector: string) {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);

  menuElem?.classList.add('hide');
  
  burgerElem?.addEventListener('click', () => {  // показываем меню по условию разрешения экрана
    if(menuElem && menuElem?.classList.contains('hide') && window.screen.availWidth < 993){ //window.screen.availWidth - это ширина экрана которая служит для вывода пользователю информации, это ширина без панели задач барузера, полоса прокрутки, те без технических характеристик
      console.log('hello')
      menuElem.classList.remove('hide');
    } else {
      menuElem?.classList.add('hide');
    }
  });

  window.addEventListener('resize', () => { // при увеличении экрана что б открытое меню скрывалось
    if(window.screen.availWidth > 992){
      menuElem?.classList.add('hide');
    }
  });

}