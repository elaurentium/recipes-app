export const mealFetch = async (ep) => {
  const response = await fetch(ep);
  const json = await response.json();
  const data = json.meals;
  return data;
};

export const drinkFetch = async (ep) => {
  const response = await fetch(ep);
  const json = await response.json();
  const data = json.drinks;
  return data;
};
