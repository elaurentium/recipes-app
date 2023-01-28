import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { inProgressFetch } from '../services';

export default function ReciInProgress() {
  const [data, setData] = useState([]);
  const [recipesInfo, setRecipesInfo] = useState([]);
  const [foodType, setFoodType] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const { id } = useParams();

  const test = useCallback(async () => {
    setData(await inProgressFetch(id, pathname));
    setFoodType(await inProgressFetch(id, pathname));
    setRecipesInfo(await inProgressFetch(id, pathname));
  }, [id, pathname]);

  useEffect(() => {
    test();
  }, [test]);

  console.log(data);

  return (
    <div>
      {
        recipesInfo && (
          <div>
            <h2 data-testid="recipe-title">
              {foodType ? recipesInfo.strMeal : recipesInfo.strDrink}
            </h2>
            <img
              src={ foodType ? recipesInfo.strMealThumb : recipesInfo.strDrinkThumb }
              alt={ foodType ? recipesInfo.idMeal : recipesInfo.idDrink }
              data-testid="recipe-photo"
            />
            <p data-testid="recipe-category">
              { recipesInfo.strCategory }
            </p>
            <p data-testid="instructions">
              { recipesInfo.strInstructions }
            </p>
          </div>
        )
      }
      <button data-testid="share-btn">Share</button>
      <button data-testid="favorite-btn">Favorite</button>
      <button data-testid="finish-recipe-btn">Finish Recipe</button>
    </div>
  );
}
