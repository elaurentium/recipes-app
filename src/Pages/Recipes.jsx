import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContextApi } from '../Context/ApiContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import { initalFetch } from '../services';

const DOZE = 12;

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const { data } = useContext(ContextApi);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (data?.length > 1) setRecipes(data.slice(0, DOZE));
  }, [data]);

  const recipeFetch = useCallback(async () => {
    const array = await initalFetch(pathname);
    setRecipes(array);
  }, [pathname]);

  useEffect(() => {
    recipeFetch();
  }, [recipeFetch]);

  console.log(recipes);

  return (
    <div>
      <h1 data-testid="page-title">
        {pathname === '/meals' ? 'Meals' : 'Drinks'}
      </h1>
      <Header />
      {recipes.length > 1 && recipes
        .map((e, index) => (
          <RecipeCard
            key={ (e.strMeal || e.strDrink
            ) + index }
            name={ (e.strMeal || e.strDrink
            ) }
            thumb={ (e.strMealThumb || e.strDrinkThumb) }
            index={ index }
          />))}
      <Footer />
    </div>
  );
}
