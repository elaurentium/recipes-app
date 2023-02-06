export const mealFetch = async (ep) => {
  try {
    const response = await fetch(ep);
    const json = await response.json();
    const data = json.meals;
    return data;
  } catch {
    return null;
  }
};

export const drinkFetch = async (ep) => {
  try {
    const response = await fetch(ep);
    const json = await response.json();
    const data = json.drinks;
    return data;
  } catch {
    return null;
  }
};

export const inProgressFetch = async (id, path) => {
  const meal = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const ep = path.includes('meals') ? meal : drink;

  const response = await fetch(ep);
  const json = await response.json();
  const data = json.meals || json.drinks;
  return data[0];
};

export const initalFetch = async (pathname) => {
  const DOZE = 12;
  const epMeal = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const epDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const endPonit = pathname === '/meals' ? epMeal : epDrink;
  const response = await fetch(endPonit);
  const json = await response.json();
  const array = json.meals || json.drinks;
  return array.slice(0, DOZE);
};

export const categoryFetch = async (pathname) => {
  const CINCO = 5;
  const epMeal = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const epDrink = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const endPonit = pathname === '/meals' ? epMeal : epDrink;
  const response = await fetch(endPonit);
  const json = await response.json();
  const array = json.meals || json.drinks;
  return array.slice(0, CINCO);
};

export const categoryFilterFetch = async (id, pathname) => {
  const DOZE = 12;
  const epMeal = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
  const epDrink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${id}`;
  const endPonit = pathname === '/meals' ? epMeal : epDrink;
  const response = await fetch(endPonit);
  const json = await response.json();
  const array = json.meals || json.drinks;
  return array.slice(0, DOZE);
};

export const fetchApiMeals = async (idMeals) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeals}`);
    const data = await response.json();
    return data.meals;
  } catch {
    return null;
  }
};

export const fetchApiDrinks = async (idDrinks) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrinks}`);
    const data = await response.json();
    return data.drinks;
  } catch {
    return null;
  }
};

export const DRINK_EDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
export const MEAL_EDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const goToRecipes = (data, history, pathname) => {
  const date = new Date();
  const doneDate = date.toISOString();
  const obj = {
    id: data.idMeal || data.idDrink,
    type: pathname.includes('meals') ? 'meal' : 'drink',
    nationality: data.strArea || '',
    category: data.strCategory || '',
    alcoholicOrNot: data.strAlcoholic || '',
    name: data.strDrink || data.strMeal,
    image: data.strDrinkThumb || data.strMealThumb,
    doneDate,
    tags: data.strTags ? data.strTags.split(',') : [],
  };

  if (localStorage.doneRecipes) {
    let fav = JSON.parse(localStorage.getItem('doneRecipes'));
    fav = [...fav, obj];
    localStorage.setItem('doneRecipes', JSON.stringify(fav));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([obj]));
  }
  history.push('/done-recipes');
};
