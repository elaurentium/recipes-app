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
