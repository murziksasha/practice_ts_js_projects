import { state, loadRecipe} from '../model/model.js';
import recipeView from '../views/recipeView.js';


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
      console.log(err);
    }
  }

  // https://forkify-api.herokuapp.com/v2

  ///////////////////////////////////////


  const init = function() {
    recipeView.addHandlerRender(controlRecipes);
  } 
  init();


}