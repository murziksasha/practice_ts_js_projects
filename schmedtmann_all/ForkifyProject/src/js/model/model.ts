
import { API_KEY, API_URL, RES_PER_PAGE } from "../config/config.js";
import { getJSON } from "../helpers/helpers.js";


  export const state = {
    recipe: {},
    search: {
      query: '',
      results: [],
      page: 1,
      resultsPerPage: RES_PER_PAGE,
    }
  };

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
    } catch(err) {
      console.error(`${err} 💣💣💣💣`);
      throw (err);
    }

  };

  export const loadSearchResults = async function(query: string) {
    try {
      state.search.query = query;

       const data = await getJSON(`${API_URL}?search=${query}`);
       state.search.results = data.data.recipes.map((rec: any) => {
        return {
          id: rec.id,
          title: rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
        }
       });
    } catch(err) {
      console.error(`${err} 💣💣💣💣`);
      throw (err);
    }
  };

  export const getSearchResultsPage = function(page: number = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;//0;
    const end = page * state.search.resultsPerPage;//9;
    return state.search.results.slice(start, end);
  }



