var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-ignore
import icons from 'url:../../img/icons.svg';
export function controller() {
    let id = window.location.hash.slice(1);
    const key = `a8d95058-27af-4278-9ab6-28f5d9eba0d9`;
    let link = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=${key}`;
    const recipeContainer = document.querySelector('.recipe');
    const timeout = function (s) {
        return new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error(`Request took too long! Timeout after ${s} second`));
            }, s * 1000);
        });
    };
    const renderSpinner = (parentEl) => {
        const markUp = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
        if (parentEl) {
            parentEl.innerHTML = '';
            parentEl.insertAdjacentHTML('afterbegin', markUp);
        }
    };
    const showRecipe = function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //spinner
                renderSpinner(recipeContainer);
                // 1 Loading recipe
                // 2 Rendering Recipe
                const markUp = `
        <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="${icons}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${recipe.ingredients.map((ing) => {
                    return `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="$}#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${ing.quantity}</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                    ${ing.description}
                  </div>
                </li>
              `;
                }).join('')}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
      `;
                if (recipeContainer) {
                    recipeContainer.innerHTML = '';
                    recipeContainer.insertAdjacentHTML('afterbegin', markUp);
                }
            }
            catch (err) {
                alert(err);
            }
        });
    };
    // https://forkify-api.herokuapp.com/v2
    ///////////////////////////////////////
    const patternEvent = ['hashchange', 'load'];
    patternEvent.forEach(element => {
        window.addEventListener(element, showRecipe);
    });
}
//# sourceMappingURL=controller.js.map