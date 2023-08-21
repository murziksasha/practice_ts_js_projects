var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state, loadRecipe, loadSearchResults, getSearchResultsPage, updateServings } from '../model/model.js';
import recipeView from '../views/recipeView.js';
import searchView from '../views/searchView.js';
import resultsView from '../views/resultsView.js';
import paginationView from '../views/paginationView.js';
export function controller() {
    //@ts-ignore
    if (module.hot) {
        //@ts-ignore
        module.hot.accept();
    }
    const controlRecipes = function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //spinner
                recipeView.renderSpinner();
                // 1 Loading recipe
                yield loadRecipe('5ed6604591c37cdc054bc886');
                // 2 Rendering Recipe
                recipeView.render(state.recipe);
            }
            catch (err) {
                recipeView.renderError();
            }
        });
    };
    const controlSearchResults = function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                resultsView.renderSpinner();
                const query = searchView.getQuery();
                if (!query)
                    return;
                yield loadSearchResults(query);
                // resultsView.render(state.search.results);
                resultsView.render(getSearchResultsPage());
                // render initial pagiantion buttons
                paginationView.render(state.search);
            }
            catch (error) {
                console.log(error);
            }
        });
    };
    const controlPagination = (goToPage) => {
        resultsView.render(getSearchResultsPage(goToPage));
        paginationView.render(state.search);
    };
    const controlServings = (newServings) => {
        // Update the recipe servings (in state)
        updateServings(newServings);
        // Update the recipe view
        recipeView.render(state.recipe);
    };
    const init = function () {
        recipeView.addHandlerRender(controlRecipes);
        recipeView.addHandlerUpdateServings(controlServings);
        searchView.addHandlerSearch(controlSearchResults);
        paginationView.addHandlerClick(controlPagination);
    };
    init();
}
//# sourceMappingURL=controller.js.map