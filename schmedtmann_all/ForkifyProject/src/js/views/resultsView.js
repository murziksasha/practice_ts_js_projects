//@ts-ignore
import icons from 'url:../../img/icons.svg';
import View from "./View.js";
class ResultsView extends View {
    constructor() {
        super(...arguments);
        this._parentElement = document.querySelector('.results');
        this._errorMessage = 'No recipes found for your query! Please try again :) ';
        this._message = '';
    }
    generateMarkup() {
        let markUp = '';
        this._data.map((item) => {
            markUp += this._generateMarkupPreview(item);
        });
        if (this._parentElement) {
            this.clean();
            this._parentElement.insertAdjacentHTML('afterbegin', markUp);
        }
    }
    _generateMarkupPreview(item) {
        const markUp = `
      <li class="preview" data-id = "${item.id}">
        <a class="preview__link" href="${item.id}">
          <figure class="preview__fig">
            <img src="${item.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">
              ${item.title}
            </h4>
            <p class="preview__publisher">${item.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"/>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
        return markUp;
    }
}
export default new ResultsView();
//# sourceMappingURL=resultsView.js.map