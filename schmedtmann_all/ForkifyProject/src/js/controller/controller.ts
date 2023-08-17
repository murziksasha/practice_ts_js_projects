import { state, loadRecipe, loadSearchResults} from '../model/model.js';
import recipeView from '../views/recipeView.js';
import searchView from '../views/searchView.js';
import resultsView from '../views/resultsView.js';


export function controller() {


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
      console.log(state.search.results);
      resultsView.render(state.search.results);

    } catch (error) {
      console.log(error);
    }
  }



  const init = function() {
    recipeView.addHandlerRender(controlRecipes);
    searchView.addHandlerSearch(controlSearchResults)
  } 
  init();


}