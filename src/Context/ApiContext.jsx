import React, { createContext, useCallback, useState } from 'react';
import P from 'prop-types';
import { drinkFetch, mealFetch } from '../services';

export const ContextApi = createContext();

function ApiContext({ children }) {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(false);

  const meal = async (tipo, str) => {
    let endPoint = '';
    switch (tipo) {
    case 'ingredient':
      endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${str}`;
      break;
    case 'name':
      endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`;
      break;
    case 'first-letter':
      endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${str}`;
      break;
    default:
      return '';
    }
    const response = await mealFetch(endPoint);
    if (response.length < 1) setResult(true);
    return response;
  };

  const drink = async (tipo, str) => {
    let endPoint = '';
    switch (tipo) {
    case 'ingredient':
      endPoint = `www.thecocktaildb.com/api/json/v1/1/search.php?i=${str}`;
      break;
    case 'name':
      endPoint = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`;
      break;
    case 'first-letter':
      endPoint = `www.thecocktaildb.com/api/json/v1/1/search.php?f=${str}`;
      break;
    default:
      return '';
    }
    const response = await drinkFetch(endPoint);
    if (response.length < 1) setResult(true);
    return response;
  };

  const ApiFetch = useCallback(async (page, tipo, str) => {
    setData(page === '/meals' ? await meal(tipo, str) : await drink(tipo, str));
  }, []);

  const foo = useMemo(() => ({ result, data, ApiFetch }), [ApiFetch, data, result]);

  return (
    <ContextApi.Provider value={ foo }>
      {children}
    </ContextApi.Provider>
  );
}

ApiContext.propTypes = {
  children: P.node.isRequired,
};

export default ApiContext;
