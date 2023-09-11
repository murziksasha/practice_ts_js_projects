import { getResource } from "../../services/requests/requests";
export function showMoreStyles(trigger, parentEl) {
    const btn = document.querySelector(trigger);
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
        this.remove();
    });
    function createCards(response) {
        response.forEach((item) => {
            var _a;
            const { src, title, link } = item;
            let card = document.createElement('div');
            card.classList.add('animate__animated', 'animate__fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
          <div class='styles-block'>
            <img src=${src} alt = ${title}>
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
          </div>
        `;
            (_a = document.querySelector(parentEl)) === null || _a === void 0 ? void 0 : _a.appendChild(card);
        });
        console.log('something wrong');
    }
}
;
//# sourceMappingURL=showMoreStyles.js.map