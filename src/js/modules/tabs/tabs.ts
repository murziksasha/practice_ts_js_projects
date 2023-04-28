
export function tabs(tabParent: string, tabItem: string, tabBody: string, activeClass: string): void {

  
const tabParentItem = document.querySelector(tabParent);
const tabsItem = document.querySelectorAll(tabItem);
const tabContents = document.querySelectorAll(tabBody);


if(tabParentItem){
  tabParentItem.addEventListener('click', e => {
    const target = e.target as HTMLDivElement;
    if(target && target.dataset.current){
      tabsItem.forEach((item, i) => {
        item.classList.remove(activeClass);
        if(target.dataset.current == String(i)){
          item.classList.add(activeClass);
          tabBodyShow(i);
        }
      })
    }
  })
}

  function tabBodyShow(tabNum = 0){
    tabContents.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    })
    tabContents[tabNum].classList.remove('hide');
    tabContents[tabNum].classList.add('show');
  }

}