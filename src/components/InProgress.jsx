import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContextApi } from '../Context/ApiContext';

export default function ReciInProgress() {
  const { pathname } = useLocation();

  const id = pathname.replace('/', ' ').split()[1];

  useEffect(() => {

  })

  return (
    <div>
      <img src={ `data.str${data[0]}Thumb` } alt="a" data-testid="recipe-photo" />
      {checkPath ? (
        <h1 data-testid="recipe-title">
          {data[0].strDrink}
        </h1>
      ) : (
        <h1 data-testid="recipe-title">
          {data[0].strMeal}
        </h1>
      )}
      <ul data-testid="recipe-ingredients">
        {data.ingredients.map((ingredient, index) => (
          <li key={ index }>
            {ingredient.name}
            -
            {ingredient.quantity}
          </li>
        ))}
      </ul>
      <p data-testid="instructions">
        {data[0].strInstructions}
      </p>
      {
        data[0] === 'strAlcoholic' ? (
          <label htmlFor="alcool">
            Alcoolico
            <input
              type="checkbox"
              name="alcoolico"
              id="alcool"
              data-testid="recipe-category"
            />
          </label>
        ) : null
      }
      <button data-testid="favorite-btn">
        Favorite
      </button>
      <button data-testid="share-btn">
        Share
      </button>
      <button data-testid="finish-recipe-btn">
        Finalizar
      </button>
    </div>
  );
}
