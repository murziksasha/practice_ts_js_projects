//@ts-ignore
import icons from 'url:../../img/icons.svg';
import View from "./View.js";
class BookmarksView extends View {
    constructor() {
        super(...arguments);
        this._parentElement = document.querySelector('.bookmarks__list');
        this._errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :) ';
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
    addHandlerClickElemSearch(handler) {
        this._parentElement.addEventListener('click', (e) => {
            const targetElement = e.target;
            const elem = targetElement === null || targetElement === void 0 ? void 0 : targetElement.closest('li.preview');
            if (!elem)
                return;
            handler(elem.dataset.id);
        });
    }
    _generateMarkupPreview(item) {
        const markUp = `
      <li class="preview" data-id = "${item.id}">
        <div class="preview__link">
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
        </div>
      </li>
    `;
        return markUp;
    }
}
export default new BookmarksView();
//# sourceMappingURL=bookmarksView.js.map