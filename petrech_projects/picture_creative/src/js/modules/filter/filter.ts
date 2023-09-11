type NodeList = NodeListOf<Element> | undefined;

export function filter(parentSelector: string, allBtn: string) {
  const menu = document.querySelector(parentSelector);
  const allIndex = document.querySelectorAll(allBtn);
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll: NodeList = wrapper?.querySelectorAll('.all');
  const markOne: NodeList = wrapper?.querySelectorAll('.girl');
  const markTwo: NodeList = wrapper?.querySelectorAll('.lovers');
  const markThree: NodeList = wrapper?.querySelectorAll('.chef');
  const markFour: NodeList = wrapper?.querySelectorAll('.guy');
  const no = document.querySelector('.portfolio-no');



  const initialFunc = (remove = false) => {
    if(!remove){
      markAll?.forEach(mark => {
        mark.classList.add('hide');
        mark.classList.remove('animate__animated', 'animate__fadeIn');
      });
      no?.classList.add('hide');
      no?.classList.remove('animate__animated', 'animate__fadeIn');
    } else {
      markAll?.forEach(mark => {
        mark.classList.remove('animate__animated', 'animate__fadeIn');
      });
    }
  }

  function typeFilter(markType: NodeListOf<Element> | null, indexTab: number) {

    initialFunc();

    allIndex?.forEach(item => {
      item.classList.remove('active');
    });
    allIndex[indexTab].classList.add('active');

    if(markType){
      markType.forEach(mark => {
        mark.classList.remove('hide');
        mark.classList.add('animate__animated', 'animate__fadeIn');
      })
    } else {
      no?.classList.remove('hide');
      no?.classList.add('animate__animated', 'animate__fadeIn', 'show');
    } 

  }

  menu?.addEventListener('click', e => {
    e.preventDefault
    const target = e.target as HTMLElement;
    if (target instanceof HTMLElement) {
      switch (target.dataset.value) {
        case '0':
          if (markAll) typeFilter(markAll, 0);
          setTimeout(()=>initialFunc(true), 550)
          break;
        case '1':
          if (markOne) typeFilter(markOne, 1);
          break;
        case '2':
          if (markTwo) typeFilter(markTwo, 2);
          break;
        case '3':
          if (markThree) typeFilter(markThree, 3);
          break;
        case '4':
          if (markFour) typeFilter(markFour, 4);
          break;
        case '5':
          typeFilter(null, 5);
          break;
        case '6':
          typeFilter(null, 6);
          break;
      }
    }
  });


}