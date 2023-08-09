var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function controller() {
    const key = `a8d95058-27af-4278-9ab6-28f5d9eba0d9`;
    const link = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=${key}`;
    const recipeContainer = document.querySelector('.recipe');
    const timeout = function (s) {
        return new Promise(function (_, reject) {
            setTimeout(function () {
                reject(new Error(`Request took too long! Timeout after ${s} second`));
            }, s * 1000);
        });
    };
    const showRecipe = function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(link);
                const data = yield res.json();
                if (!res.ok)
                    throw new Error(`${res.status}`);
                console.log(data.data);
                let { recipe } = data.data;
                recipe = {
                    id: recipe.id,
                    title: recipe.title,
                    publisher: recipe.publisher,
                    sourceUrl: recipe.source_url,
                    image: recipe.image_url,
                    servings: recipe.servings,
                    cookingTime: recipe.cooking_time,
                    ingredients: recipe.ingredients,
                };
            }
            catch (err) {
                alert(err);
            }
        });
    };
    // https://forkify-api.herokuapp.com/v2
    ///////////////////////////////////////
    showRecipe();
}
//# sourceMappingURL=controller.js.map