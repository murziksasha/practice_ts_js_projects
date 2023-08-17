import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector('.results') as HTMLElement;


  render(data: any) {
    this._data = data;
    this.generateMarkup();
  }

  generateMarkup(){
    return this._data.map((item: any) => {
      if(this._parentElement){
        this.clean();
        let markUpPreview = this._generateMarkupPreview(item);
        return this._parentElement.insertAdjacentHTML('afterbegin', markUpPreview)
      }
    }).join('');
  }

  private _generateMarkupPreview(item: any) {
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