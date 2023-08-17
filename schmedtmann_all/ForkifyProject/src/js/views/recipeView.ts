import View from './View.js';

//@ts-ignore
import icons from 'url:../../img/icons.svg';





class RecipeView extends View {
  _parentElement = document.querySelector('.recipe') as HTMLElement;
   _data: any = {};
  _errorMessage: string = 'We could not find that recipe. Please try another one!';
  _message: string = '';

  // render(data: any) {
  //   this._data = data;
  //   this.generateMarkup();
  // }

  
  // clean() {
  //   this._parentElement.innerHTML = '';
  // }
  
  // generateMarkup() {
  //   const markUp = `
  //   <figure class="recipe__fig">
  //   <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
  //   <h1 class="recipe__title">
  //   <span>${this._data.title}</span>
  //     </h1>
  //     </figure>

  //   <div class="recipe__details">
  //     <div class="recipe__info">
  //     <svg class="recipe__info-icon">
  //     <use href="${icons}#icon-clock"></use>
  //     </svg>
  //     <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
  //     <span class="recipe__info-text">minutes</span>
  //     </div>
  //     <div class="recipe__info">
  //     <svg class="recipe__info-icon">
  //     <use href="${icons}#icon-users"></use>
  //     </svg>
  //     <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
  //     <span class="recipe__info-text">servings</span>

  //     <div class="recipe__info-buttons">
  //     <button class="btn--tiny btn--increase-servings">
  //         <svg>
  //         <use href="${icons}#icon-minus-circle"></use>
  //         </svg>
  //         </button>
  //       <button class="btn--tiny btn--increase-servings">
  //         <svg>
  //           <use href="${icons}#icon-plus-circle"></use>
  //           </svg>
  //       </button>
  //       </div>
  //   </div>

  //   <div class="recipe__user-generated">
  //     <svg>
  //       <use href="${icons}#icon-user"></use>
  //     </svg>
  //     </div>
  //   <button class="btn--round">
  //   <svg class="">
  //   <use href="${icons}#icon-bookmark-fill"></use>
  //     </svg>
  //     </button>
  //     </div>

  //     <div class="recipe__ingredients">
  //     <h2 class="heading--2">Recipe ingredients</h2>
  //     <ul class="recipe__ingredient-list">
  //       ${this._data.ingredients.map((ing: any) => this.generateMarkupIngredient(ing)).join('')}
  //     </ul>
  //   </div>
    
  //   <div class="recipe__directions">
  //     <h2 class="heading--2">How to cook it</h2>
  //     <p class="recipe__directions-text">
  //     This recipe was carefully designed and tested by
  //       <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
  //       directions at their website.
  //       </p>
  //     <a
  //       class="btn--small recipe__btn"
  //       href="${this._data.sourceUrl}"
  //       target="_blank"
  //       >
  //       <span>Directions</span>
  //       <svg class="search__icon">
  //         <use href="${icons}#icon-arrow-right"></use>
  //         </svg>
  //     </a>
  //   </div>
  // `;
  
  // if(this._parentElement){
  //   this.clean();
  //   this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  // }
  // }

  // renderSpinner(){
  //   const markUp = `
  //     <div class="spinner">
  //     <svg>
  //         <use href="${icons}#icon-loader"></use>
  //       </svg>
  //     </div>
  //   `;
  //   if(this._parentElement){
  //     this.clean();
  //     this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  //   }
  // }
  
  renderError(message: string = this._errorMessage) {
    const markUp = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
          </div>
          <p>${message}</p>
      </div>
    `;
    this.clean();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderMessage(message: string = this._message) {
    const markUp = `
      <div class="message">
      <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${this._message}</p>
      </div>
      `;
      this.clean();
      this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
    
  addHandlerRender(handler: EventListenerOrEventListenerObject) {
    const patternEvent =  ['hashchange', 'load'];
    patternEvent.forEach(element => {
      window.addEventListener(element, handler);
    });
  }
  

  
}

export default new RecipeView();