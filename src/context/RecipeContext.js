import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { URL_DRINKS_ID, URL_MEALS_ID } from '../const';

export const RecipesDetailsContext = createContext();

function RecipesDetailsProvider({ children }) {
  const [apiDataMeals, setApiDataMeals] = useState([]);
  const [apiDataDrinks, setApiDataDrinks] = useState([]);

  const fetchApiMeals = async (idMeals) => {
    const response = await fetch(`${URL_MEALS_ID}${idMeals}`);
    const data = await response.json();
    setApiDataMeals(data.meals);
  };

  const fetchApiDrinks = async (idDrinks) => {
    const response = await fetch(`${URL_DRINKS_ID}${idDrinks}`);
    const data = await response.json();
    setApiDataDrinks(data.drinks);
  };

  const contextValue = useMemo(() => ({
    apiDataMeals,
    apiDataDrinks,
    fetchApiMeals,
    fetchApiDrinks,
  }), [apiDataMeals, apiDataDrinks]);

  return (
    <RecipesDetailsContext.Provider value={ contextValue }>
      {children}
    </RecipesDetailsContext.Provider>
  );
}

export default RecipesDetailsProvider;

RecipesDetailsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;
