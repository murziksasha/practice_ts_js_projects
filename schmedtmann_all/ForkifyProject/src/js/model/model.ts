import { API_KEY, API_URL, RES_PER_PAGE } from '../config/config.js';
import { getJSON } from '../helpers/helpers.js';

export const state = {
  recipe: {
    id: '',
    title: '',
    ingredients: [],
    servings: 0,
    publisher: '',
    sourceUrl: '',
    image: '',
    cookingTime: '',
    bookmarked: false,
  },
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [] as string[],
};

export const loadRecipe = async function (id: string) {
  // id = '5ed6604591c37cdc054bc886';
  if (!id) return;
  const key = `a8d95058-27af-4278-9ab6-28f5d9eba0d9`;
  // const link = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${key}`;
  const link = `${API_URL}/${id}?key=${API_KEY}`;

  try {
    const data = await getJSON(link);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      bookmarked: false,
    };
    if (state.bookmarks.some((bookmark: any) => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(`${err} 💣💣💣💣`);
    throw err;
  }
};

export const loadSearchResults = async function (query: string) {
  try {
    state.search.query = query;

    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map((rec: any) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 💣💣💣💣`);
    throw err;
  }
};

export const getSearchResultsPage = function (
  page: number = state.search.page
) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9;
  return state.search.results.slice(start, end);
};

export const updateServings = (newServings: number) => {
  state.recipe.ingredients.forEach((ing: any) => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    //newQT = OldQT * newServings / oldServings // 2 * 8 / 4 = 4
  });
  state.recipe.servings = newServings;
};

const persistBookmarks = () => {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = (recipe: any) => {
  //add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const deleteBookmark = (id: string) => {
  const index = state.bookmarks.findIndex((el: any) => el.id === id);
  state.bookmarks.splice(index, 1);
  //Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};

const init = () => {
  const storage = localStorage.getItem('bookmarks');
  if(storage) state.bookmarks = JSON.parse(storage);
}
init();
console.log(state.bookmarks);