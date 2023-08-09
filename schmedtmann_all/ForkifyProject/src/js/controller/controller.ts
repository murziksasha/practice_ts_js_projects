

export function controller() {
  const key = `a8d95058-27af-4278-9ab6-28f5d9eba0d9`;
  const link = `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=${key}`;

  const recipeContainer = document.querySelector('.recipe');

  const timeout = function (s: any) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };

  const showRecipe = async function() {
    try{
      const res = await fetch(link);
      const data = await res.json();
      if(!res.ok) throw new Error(`${res.status}`)
      console.log(data.data)
      let {recipe} = data.data;
      recipe = {
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
      alert(err);
    }
  }

  // https://forkify-api.herokuapp.com/v2

  ///////////////////////////////////////

  showRecipe();


}