import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../App.css';
import {
  drinkFetch,
  DRINK_EDPOINT,
  fetchApiDrinks,
  fetchApiMeals,
  mealFetch,
  MEAL_EDPOINT,
} from '../services';

export default function RecipeDetails() {
  const [apiDataMeals, setApiDataMeals] = useState([]);
  const [apiDataDrinks, setApiDataDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataDrinks, setDataDrinks] = useState([]);
  const [dataMeals, setDataMeals] = useState([]);

  const history = useHistory();
  const { id } = useParams();
  const { pathname } = history.location;
  const number = 20;
  const array = Array(number).fill('');

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

  const apiMeal = useCallback(async () => {
    if (pathname.includes('/meals')) {
      const response = await drinkFetch(DRINK_EDPOINT);
      setDataMeals(response);
      setLoading(false);
    }
  }, [pathname]);

  const apiDrink = useCallback(async () => {
    if (pathname.includes('/drinks')) {
      const response = await mealFetch(MEAL_EDPOINT);
      setDataDrinks(response);
      setLoading(false);
    }
  }, [pathname]);

  useEffect(() => {
    fetchDrinkMeal(id);
    apiMeal();
    apiDrink();
  }, [apiDrink, apiMeal, fetchDrinkMeal, id]);

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }
  console.log(pathname.includes('/meals') ? dataMeals : dataDrinks);

  return (
    <div>
      <div>
        {
          pathname.includes('/meals')
            ? (
              <img
                data-testid="recipe-photo"
                width="560"
                height="360"
                src={ apiDataMeals[0].strMealThumb }
                alt={ apiDataMeals[0].strMeal }
              />
            ) : (
              <img
                data-testid="recipe-photo"
                width="560"
                height="360"
                src={ apiDataDrinks[0].strDrinkThumb }
                alt={ apiDataDrinks[0].strDrink }
              />
            )
        }

        {
          pathname.includes('/meals')
            ? (
              <h1 data-testid="recipe-title">
                { apiDataMeals[0].strMeal }
              </h1>
            ) : (
              <h1 data-testid="recipe-title">
                { apiDataDrinks[0].strDrink }
              </h1>
            )
        }

        {
          pathname.includes('/meals')
            ? (
              <h4 data-testid="recipe-category">{apiDataMeals[0].strCategory}</h4>
            ) : (
              <h4 data-testid="recipe-category">{apiDataDrinks[0].strCategory}</h4>
            )
        }

        {
          pathname.includes('/drinks')
          && <h5 data-testid="recipe-category">{apiDataDrinks[0].strAlcoholic}</h5>
        }
        <h5>Ingredients:</h5>
        <ul>
          {
            pathname.includes('/meals')
              ? (
                array.map((_, index) => {
                  if (
                    apiDataMeals[`strMeasure${index + 1}`] !== null
                    && apiDataMeals[`strIngredient${index + 1}`] !== ''
                  ) {
                    return (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`${apiDataMeals[0][`strIngredient${index + 1}`]}
                        ${apiDataMeals[0][`strMeasure${index + 1}`]}`}
                      </li>
                    );
                  }
                  return null;
                })
              ) : (
                array.map((_, index) => {
                  if (
                    apiDataDrinks[`strIngredient${index + 1}`] !== null
                    && apiDataDrinks[`strIngredient${index + 1}`] !== ''
                  ) {
                    return (
                      <li
                        key={ index }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      >
                        {`${apiDataDrinks[0][`strIngredient${index + 1}`]} 
                        ${apiDataDrinks[0][`strMeasure${index + 1}`]}`}
                      </li>
                    );
                  }
                  return null;
                })
              )
          }
        </ul>
        <h5>
          Instructions:
        </h5>
        {
          pathname.includes('/meals')
            ? <p data-testid="instructions">{apiDataMeals[0].strInstructions}</p>
            : (
              <p data-testid="instructions">
                {
                  `${apiDataDrinks[0].strInstructions}
                  ${apiDataDrinks[0].strInstructionsDE}
                  ${apiDataDrinks[0].strInstructionsIT}`
                }
              </p>
            )
        }
        {
          pathname.includes('/meals')
            && (
              <iframe
                data-testid="video"
                width="560"
                height="360"
                title={ apiDataMeals[0].strMeal }
                src={ apiDataMeals[0].strYoutube.replace('watch?v=', 'embed/') }
              />
            )
        }
      </div>
    </div>
  );
}
