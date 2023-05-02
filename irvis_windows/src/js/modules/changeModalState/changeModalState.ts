import { checkNumInputs } from "../checkNumInputs/checkNumInputs";


export function changeModalState(state: any) {

  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  type ElementType = NodeListOf<Element> | 
  NodeListOf<HTMLInputElement>;

  function bindActionToElems(event: string, elem: ElementType, prop: string) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN' :
            console.log('span');
            break;
          case 'INPUT' :
            if(item.getAttribute('type') === 'checkbox'){
              console.log('checkbox');
            } else {
              console.log('input common');
            }
            break;
          case 'SELECT' :
            console.log('select');
            break;
        }
      })
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');





};