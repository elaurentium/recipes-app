export const fetch = {
  meals: null,
};

export const meals1 = {
  meals: [
    { idMeal: '52771',
      strMeal: 'Spicy Arrabiata Penne',
      strDrinkAlternate: null,
      strCategory: 'Vegetarian',
      strArea: 'Italian' }],
};

export const drinks1 = {
  drinks: [
    {
      idDrink: '16158',
      strDrink: 'Whitecap Margarita',
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: 'Other / Unknown',
      strIBA: null,
      strAlcoholic: 'Alcoholic',
    },
  ],
};

export const categoryMeals = {
  meals: [
    {
      strCategory: 'Beef',
    },
    {
      strCategory: 'Breakfast',
    },
    {
      strCategory: 'Chicken',
    },
    {
      strCategory: 'Dessert',
    },
    {
      strCategory: 'Goat',
    },
  ],
};

export const categoryDrinks = {
  drinks: [
    {
      strCategory: 'Ordinary Drink',
    },
    {
      strCategory: 'Cocktail',
    },
    {
      strCategory: 'Shake',
    },
    {
      strCategory: 'Other / Unknown',
    },
    {
      strCategory: 'Cocoa',
    },
  ],
};

export const baseRecipeMeals = {
  meals: [
    {
      strMeal: 'comida',
      strMealThumb: 'httm://a.com',
    },
  ],
};

export const baseRecipeDrinks = {
  drinks: [
    {
      strMeal: 'bebida',
      strMealThumb: 'httm://a.com',
    },
  ],
};

export const doneRecipeMeals = {
  index: 1,
  id: '52771',
  type: 'meal',
  nationality: 'brasilera',
  category: 'feijão',
  share: '52771',
  alcohol: '',
  name: 'feijoada',
  img: 'http://www.img.com',
  data: '28 - 01 - 2023 ',
  tag: ['feijão', 'caseira'],
  func: () => {},
};

export const doneRecipeDrinks = {
  index: 1,
  id: '178319',
  share: '',
  type: 'drink',
  nationality: '',
  category: '',
  alcohol: 'Sim',
  name: 'Caipirinha',
  img: 'http://www.img.com',
  data: '28 - 01 - 2023 ',
  tag: ['vodka', 'limão'],
  func: () => {},
};

export const doneRecipes = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];
