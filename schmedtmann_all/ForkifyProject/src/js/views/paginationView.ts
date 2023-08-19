
//@ts-ignore
import icons from 'url:../../img/icons.svg';
import View from "./View.js";

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination') as HTMLElement;

  addHandlerClick(handler: any) {
    this._parentElement.addEventListener('click', e => {
        const btn = (e.target as HTMLElement).closest('.btn--inline') as HTMLButtonElement;
        if(!btn) return;
        const goToPage = btn.dataset.goto ? +btn.dataset.goto : undefined;
        handler(goToPage);
    }); 
  }

  render(data: any) {
    this._data = data;
    const markUp = this.generateMarkup();
    if(this._parentElement){
      this.clean();
      this._parentElement.insertAdjacentHTML('afterbegin', markUp);
    }
  }

  generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Page 1, and there are other pages
    if(currPage === 1 && numPages > 1) {
      return `
        <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${currPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    } 
    
    // Last page
    if(currPage === numPages && numPages > 1){
      return `
        <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage - 1}</span>
        </button>
      `;
    }

    // Other page
    if(currPage < numPages) {
      return `
        <button data-goto="${currPage - 1}" class="btn--inline pagination__btn--next">
          <span>Page ${currPage - 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
        <button data-goto="${currPage + 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currPage + 1}</span>
        </button>
        `;
    }

    // Page 1, and there are NO pages
    return '';

  }

}

export default new PaginationView();