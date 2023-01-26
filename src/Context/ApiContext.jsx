import React, { createContext, useCallback, useMemo, useState } from 'react';
import P from 'prop-types';
import { drinkFetch, mealFetch } from '../services';

export const ContextApi = createContext();

function ApiContext({ children }) {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(false);

  const meal = async (tipo, str) => {
    let endPoint = '';

    if (tipo === 'ingredient') endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${str}`;
    if (tipo === 'name') endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`;
    if (tipo === 'first-letter') endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?f=${str}`;

    const response = await mealFetch(endPoint);
    if (!response) {
      setResult(true);
      setData([]);
    } else setData(response);
  };

  const drink = async (tipo, str) => {
    let endPoint = '';

    if (tipo === 'ingredient') endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${str}`;
    if (tipo === 'name') endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${str}`;
    if (tipo === 'first-letter') endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${str}`;

    const response = await drinkFetch(endPoint);
    if (!response) {
      setResult(true);
      setData([]);
    } else setData(response);
  };

  const ApiFetch = useCallback(async (page, tipo, str) => {
    if (page === '/meals') await meal(tipo, str);
    if (page === '/drinks') await drink(tipo, str);
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
