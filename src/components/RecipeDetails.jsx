import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchApiDrinks, fetchApiMeals } from '../services';

export default function RecipeDetails() {
  const [apiDataMeals, setApiDataMeals] = useState([]);
  const [apiDataDrinks, setApiDataDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [ingredient, setIngredient] = useState([]);

  const history = useHistory();
  const { id } = useParams();
  const { pathname } = history.location;

  const fetchDrinkMeal = useCallback(async () => {
    if (pathname.includes('/meals')) {
      const response = await fetchApiMeals(id);
      setApiDataMeals(response);
      setLoading(false);
    }
    if (pathname.includes('/drinks')) {
      const response = await fetchApiDrinks(id);
      setApiDataDrinks(response);
      setLoading(false);
    }
  }, [id, pathname]);

  useEffect(() => {
    fetchDrinkMeal(id);
  }, [fetchDrinkMeal, id]);

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <div>
        <h1>Detalhes da Receita</h1>
        <h1 data-testid="recipe-title">
          { pathname.includes('/meals') ? apiDataMeals[0].strMeal
            : apiDataDrinks[0].strDrink }
        </h1>
        <img
          data-testid="recipe-photo"
          width="560"
          height="360"
          src={ pathname.includes('/meals')
            ? apiDataMeals[0].strMealThumb : apiDataDrinks[0].strDrinkThumb }
          alt={ pathname.includes('/meals') ? apiDataMeals[0].strMeal
            : apiDataDrinks[0].strDrink }
        />
        <h4 data-testid="recipe-category">categoria</h4>
        <ol />
        {/* <p
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          ingredientes
        </p> */}
        <p data-testid="instructions">
          { pathname.includes('/meals')
            ? apiDataMeals[0].strMealThumb : apiDataDrinks[0].strDrinkThumb }
        </p>
        <iframe
          data-testid="video"
          width="560"
          height="360"
          title={ apiDataMeals[0].strMeal }
          src={ apiDataMeals[0].strYoutube.replace('watch?v=', 'embed/') }
        />
      </div>
    </div>
  );
}
