export function scrolling(upSelector) {
    const upElem = document.querySelector(upSelector);
    upElem.classList.add('animate__animated');
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.remove('animate__fadeOut');
            upElem.classList.add('animate__fadeIn', 'show');
        }
        else {
            upElem.classList.remove('animate__fadeIn', 'show');
            upElem.classList.add('animate__fadeOut');
        }
    });
    const element = document.documentElement;
    const body = document.body;
    const calcScroll = () => {
        upElem.addEventListener('click', e => {
            const target = e.target;
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
            if (target.hash !== '') {
                e.preventDefault();
                let hashElement = document.querySelector(target.hash);
                let hashElementTop = 0;
                while (hashElement === null || hashElement === void 0 ? void 0 : hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }
                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, +target.hash);
            }
        });
    };
    function smoothScroll(from, to, hash) {
        let timeInterval = 1; // через какое значение будет происходить анимация
        let prevScrollTop; // предыдущее значение
        let speed; // с какой скоростью будет проиходить анимация
        //определяем в какую сторону двигаемся (сверху вниз, или снизу вверх)
        if (to > from) { //сверху вниз
            speed = 30;
        }
        else { // снизу вверх (нажатие на стлку АП для перемищение наверх)
            speed = -30;
        }
        let move = setInterval(() => {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
            if (prevScrollTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '')); // убираем все # заменяем на пустую строку.
            }
            else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);
    }
    ;
    calcScroll();
}
//# sourceMappingURL=scrolling.js.map