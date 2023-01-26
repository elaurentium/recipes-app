import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContextApi } from '../Context/ApiContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import { categoryFetch, categoryFilterFetch, initalFetch } from '../services';
import ButtonCategory from '../components/ButtonCategory';

const DOZE = 12;

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useContext(ContextApi);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (data?.length > 1) setRecipes(data.slice(0, DOZE));
  }, [data]);

  const loadFetch = useCallback(async () => {
    setRecipes(await initalFetch(pathname));
    setCategory(await categoryFetch(pathname));
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    loadFetch();
  }, [loadFetch]);

  const categoryFilter = async (id) => {
    setRecipes(await categoryFilterFetch(id, pathname));
  };

  const clearFilter = async () => {
    setRecipes(await initalFetch(pathname));
  };

  if (loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <h1 data-testid="page-title">
        {pathname === '/meals' ? 'Meals' : 'Drinks'}
      </h1>
      <Header />
      {category.length > 0 && category.map(({ strCategory }) => (<ButtonCategory
        key={ strCategory }
        name={ strCategory }
        func={ categoryFilter }
      />))}
      <button data-testid="All-category-filter" onClick={ clearFilter }>All</button>
      {recipes.length > 0 && recipes
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
