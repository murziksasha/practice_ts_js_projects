export function filter(parentSelector, allBtn) {
    const menu = document.querySelector(parentSelector);
    const allIndex = document.querySelectorAll(allBtn);
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelectorAll('.all');
    const markGirl = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelectorAll('.girl');
    const markLovers = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelectorAll('.lovers');
    const markChef = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelectorAll('.chef');
    const markGuy = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no');
    const initialFunc = (remove = false) => {
        if (!remove) {
            markAll === null || markAll === void 0 ? void 0 : markAll.forEach(mark => {
                mark.classList.add('hide');
                mark.classList.remove('animate__animated', 'animate__fadeIn');
            });
            no === null || no === void 0 ? void 0 : no.classList.add('hide');
            no === null || no === void 0 ? void 0 : no.classList.remove('animate__animated', 'animate__fadeIn');
        }
        else {
            markAll === null || markAll === void 0 ? void 0 : markAll.forEach(mark => {
                mark.classList.remove('animate__animated', 'animate__fadeIn');
            });
        }
    };
    function typeFilter(markType, indexTab) {
        initialFunc();
        allIndex === null || allIndex === void 0 ? void 0 : allIndex.forEach(item => {
            item.classList.remove('active');
        });
        allIndex[indexTab].classList.add('active');
        if (markType) {
            markType.forEach(mark => {
                mark.classList.remove('hide');
                mark.classList.add('animate__animated', 'animate__fadeIn');
            });
        }
        else {
            no === null || no === void 0 ? void 0 : no.classList.remove('hide');
            no === null || no === void 0 ? void 0 : no.classList.add('animate__animated', 'animate__fadeIn', 'show');
        }
    }
    menu === null || menu === void 0 ? void 0 : menu.addEventListener('click', e => {
        e.preventDefault;
        const target = e.target;
        if (target instanceof HTMLElement) {
            switch (target.dataset.value) {
                case '0':
                    if (markAll)
                        typeFilter(markAll, 0);
                    setTimeout(() => initialFunc(true), 550);
                    break;
                case '1':
                    if (markLovers)
                        typeFilter(markLovers, 1);
                    break;
                case '2':
                    if (markChef)
                        typeFilter(markChef, 2);
                    break;
                case '3':
                    if (markGirl)
                        typeFilter(markGirl, 3);
                    break;
                case '4':
                    if (markGuy)
                        typeFilter(markGuy, 4);
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
//# sourceMappingURL=filter.js.map