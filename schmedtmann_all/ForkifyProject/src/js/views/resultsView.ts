//@ts-ignore
import icons from 'url:../../img/icons.svg';
import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector('.results') as HTMLElement;
  _errorMessage: string = 'No recipes found for your query! Please try again :) ';
  _message: string = '';

  
  generateMarkup(){
    let markUp = '';
    this._data.map((item: any)=> {
      markUp +=  this._generateMarkupPreview(item);
    });
    if(this._parentElement){
      this.clean();
      this._parentElement.insertAdjacentHTML('afterbegin', markUp);
    }
    
  }

  addHandlerClickElemSearch(handler: any) {
    this._parentElement.addEventListener('click', (e) => {
      const targetElement = e.target as Element; 
      const elem = targetElement?.closest('li.preview') as HTMLElement;
      if(!elem) return;
      handler(elem.dataset.id);
    });
  }

  private _generateMarkupPreview(item: any) {
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

export default new ResultsView();