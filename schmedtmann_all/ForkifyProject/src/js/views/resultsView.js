import View from "./View.js";
class ResultsView extends View {
    constructor() {
        super(...arguments);
        this._parentElement = document.querySelector('.results');
    }
    render(data) {
        this._data = data;
        this.generateMarkup();
    }
    generateMarkup() {
        return this._data.map((item) => {
            if (this._parentElement) {
                this.clean();
                let markUpPreview = this._generateMarkupPreview(item);
                return this._parentElement.insertAdjacentHTML('afterbegin', markUpPreview);
            }
        }).join('');
    }
    _generateMarkupPreview(item) {
        console.log(item);
        const markUp = `
      <li class="preview">
        <a class="preview__link" href="#23456">
          <figure class="preview__fig">
            <img src="src/img/test-1.jpg" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__name">
              Pasta with Tomato Cream ...
            </h4>
            <p class="preview__publisher">The Pioneer Woman</p>
          </div>
        </a>
      </li>
    `;
        return markUp;
    }
}
export default new ResultsView();
//# sourceMappingURL=resultsView.js.map