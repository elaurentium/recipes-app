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
