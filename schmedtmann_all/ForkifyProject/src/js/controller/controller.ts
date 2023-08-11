import { state, loadRecipe} from '../model/model.js';
import recipeView from '../views/recipeView.js';


export function controller() {

  const recipeContainer = document.querySelector('.recipe') as HTMLElement;

  const timeout = function (s: any) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };



  const controlRecipes = async function() {
    try{
      //spinner
      recipeView.renderSpinner();
      
      // 1 Loading recipe
      await loadRecipe('5ed6604591c37cdc054bc886');

      // 2 Rendering Recipe
      recipeView.render(state.recipe);
      
    } catch(err) {
      alert(err);
    }
  }

  // https://forkify-api.herokuapp.com/v2

  ///////////////////////////////////////


  const patternEvent =  ['hashchange', 'load'];
  patternEvent.forEach(element => {
    window.addEventListener(element, controlRecipes);
  });


}