import { state, loadRecipe, loadSearchResults, getSearchResultsPage, updateServings} from '../model/model.js';
import recipeView from '../views/recipeView.js';
import searchView from '../views/searchView.js';
import resultsView from '../views/resultsView.js';
import paginationView from '../views/paginationView.js';


export function controller() {

  //@ts-ignore
  if(module.hot){
    //@ts-ignore
    module.hot.accept();
  }

  const controlRecipes = async function() {

    try{
      //spinner
      recipeView.renderSpinner();
      
      // 1 Loading recipe
      await loadRecipe('5ed6604591c37cdc054bc886');

      // 2 Rendering Recipe
      recipeView.render(state.recipe);
      
    } catch(err) {
      recipeView.renderError();
    }


  }

  const controlSearchResults = async function() {
    try {

      resultsView.renderSpinner();

      const query = searchView.getQuery();
      if(!query) return;

      await loadSearchResults(query);
      // resultsView.render(state.search.results);
      resultsView.render(getSearchResultsPage());

      // render initial pagiantion buttons
      paginationView.render(state.search);

    } catch (error) {
      console.log(error);
    }
  }

  const controlPagination = (goToPage: number) => {
    resultsView.render(getSearchResultsPage(goToPage));
    paginationView.render(state.search);
  };

  const controlServings = (newServings: number) => {
    // Update the recipe servings (in state)
   updateServings(newServings);

    // Update the recipe view
    recipeView.render(state.recipe);
  }

  const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);

  } 
  init();


}