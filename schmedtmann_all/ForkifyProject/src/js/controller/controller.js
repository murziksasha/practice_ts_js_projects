var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state, loadRecipe } from '../model/model.js';
import recipeView from '../views/recipeView.js';
export function controller() {
    const recipeContainer = document.querySelector('.recipe');
    const timeout = function (s) {
        return new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error(`Request took too long! Timeout after ${s} second`));
            }, s * 1000);
        });
    };
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
                alert(err);
            }
        });
    };
    // https://forkify-api.herokuapp.com/v2
    ///////////////////////////////////////
    const patternEvent = ['hashchange', 'load'];
    patternEvent.forEach(element => {
        window.addEventListener(element, controlRecipes);
    });
}
//# sourceMappingURL=controller.js.map