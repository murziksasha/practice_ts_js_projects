export function tabs(tabParent, tabItem, tabBody, activeClass, showClass = 'show') {
    const tabParentItem = document.querySelector(tabParent);
    const tabsItem = document.querySelectorAll(tabItem);
    const tabContents = document.querySelectorAll(tabBody);
    if (tabParentItem) {
        tabBodyShow(); //изначальное скрытие табов.
        tabParentItem.addEventListener('click', e => {
            const target = e.target;
            if (target && target.dataset.current) {
                tabsItem.forEach((item, i) => {
                    item.classList.remove(activeClass);
                    if (target.dataset.current == String(i)) {
                        item.classList.add(activeClass);
                        tabBodyShow(i);
                    }
                });
            }
        });
    }
    function tabBodyShow(tabNum = 0) {
        tabContents.forEach(item => {
            item.classList.add('hide');
            item.classList.remove(showClass);
        });
        tabContents[tabNum].classList.remove('hide');
        tabContents[tabNum].classList.add(showClass);
    }
}
//# sourceMappingURL=tabs.js.map