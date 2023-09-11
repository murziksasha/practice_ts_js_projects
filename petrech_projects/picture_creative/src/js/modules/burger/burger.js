export function burger(menuSelector, burgerSelector) {
    const menuElem = document.querySelector(menuSelector);
    const burgerElem = document.querySelector(burgerSelector);
    menuElem === null || menuElem === void 0 ? void 0 : menuElem.classList.add('hide');
    burgerElem === null || burgerElem === void 0 ? void 0 : burgerElem.addEventListener('click', () => {
        if (menuElem && (menuElem === null || menuElem === void 0 ? void 0 : menuElem.classList.contains('hide')) && window.screen.availWidth < 993) { //window.screen.availWidth - это ширина экрана которая служит для вывода пользователю информации, это ширина без панели задач барузера, полоса прокрутки, те без технических характеристик
            console.log('hello');
            menuElem.classList.remove('hide');
        }
        else {
            menuElem === null || menuElem === void 0 ? void 0 : menuElem.classList.add('hide');
        }
    });
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem === null || menuElem === void 0 ? void 0 : menuElem.classList.add('hide');
        }
    });
}
//# sourceMappingURL=burger.js.map