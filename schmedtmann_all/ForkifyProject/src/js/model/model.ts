
import { API_KEY, API_URL } from "../config/config.js";
import { getJSON } from "../helpers/helpers.js";

  export const state = {
    recipe: {}
  }

  export const loadRecipe = async function(id: string) {

    // id = '5ed6604591c37cdc054bc886'; 
    if(!id) return;
    const key = `a8d95058-27af-4278-9ab6-28f5d9eba0d9`;
    // const link = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${key}`;
    const link = `${API_URL}/${id}?key=${API_KEY}`;

    try {
      const data = await getJSON(link);
      const {recipe} = data.data;
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
      }
      console.log(state.recipe);
    } catch(err) {
      console.error(`${err} 💣💣💣💣`);
    }

  };

