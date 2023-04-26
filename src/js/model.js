import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config';

// import { getJSON, sendJSON } from './helper';
import { AJAX } from './helper';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
  shoppingCart: [],
  weekend: [[], [], [], [], [], [], []],
};
const createRecipeObject = function (data) {
  const recipe = data.data.recipe;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);

    state.recipe = createRecipeObject(data);
    console.log(state.recipe);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
  } catch (err) {
    // Temp error handler
    console.error(`${err}💥💥💥`);
    throw err;
  }
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ingredients: rec.ingredients,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err}💥💥💥`);
    throw err;
  }
};
export const addRecipeToWeek = function (btn) {
  switch (btn.dataset.day) {
    case 'mon':
      state.weekend[0].push(state.recipe);
      break;
    case 'tue':
      state.weekend[1].push(state.recipe);
      break;
    case 'wed':
      state.weekend[2].push(state.recipe);
      break;
    case 'thu':
      state.weekend[3].push(state.recipe);
      break;
    case 'fri':
      state.weekend[4].push(state.recipe);
      break;
    case 'sat':
      state.weekend[5].push(state.recipe);
      break;
    case 'sun':
      state.weekend[6].push(state.recipe);
      break;
  }
  console.log(state.weekend);
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9;
  return state.search.results.slice(start, end);
};
export const sortSearchResults = function () {
  if (!state.search.results.length) return;
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = old Qt * newServings / oldServings // 2* 8 /4 - 4
  });

  state.recipe.servings = newServings;
};
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add addBookmark
  state.bookmarks.push(recipe);
  console.log(state);
  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};
// persistIngridients();

const persistIngridients = function () {
  localStorage.setItem('ingredients', JSON.stringify(state.shoppingCart));
};
export const clearIngridients = function () {
  localStorage.clear('ingredients');
};
// clearIngridients();
export const getIngridients = function () {
  try {
    state.shoppingCart.push(state.recipe.ingredients);
    persistIngridients();
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  const ingridients = localStorage.getItem('ingredients');
  if (storage) state.bookmarks = JSON.parse(storage);
  if (ingridients) state.shoppingCart = JSON.parse(ingridients);
};
init();
console.log(state.bookmarks);

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    // MY BUG
    const ingredients = [];
    // console.log(Object.entries(newRecipe));
    const arrOfIngridients = Object.entries(newRecipe).filter(
      entry => entry[0].startsWith('ingredient') && entry[1] !== ''
    );
    for (let i = 1; i <= 6; i++) {
      const copy = arrOfIngridients.filter(ing =>
        ing[0].startsWith(`ingredient-${i}`)
      );
      ingredients.push({
        quantity: +copy[0][1],
        unit: copy[1][1],
        description: copy[2][1],
      });
      console.log(ingredients);
    }
    // console.log(result);

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: newRecipe.cookingTime,
      servings: newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
