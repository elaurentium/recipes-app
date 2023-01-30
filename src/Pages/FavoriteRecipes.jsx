import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import FavoriteRecipesCard from '../components/FavoriteRecipesCard';
import { favoriteRecipes } from '../tests/mockConstantes';

localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

export default function FavoriteRecipes() {
  const [data, setData] = useState([]);
  const [shared, setShared] = useState('');

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      setData(JSON.parse(localStorage.getItem('favoriteRecipes')));
    }
  }, []);

  const shareRecipe = (link, id) => {
    copy(link);
    setShared(id);
  };

  const clearFilter = () => {
    setData(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };

  const setFilter = (type) => {
    const filter = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setData(filter.filter((e) => e.type === type));
  };

  const unFavorite = (id) => {
    const filter = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const atualiza = filter.filter((e) => e.id !== id);
    localStorage.removeItem('favoriteRecipes');
    setData(atualiza);
    localStorage.setItem('favoriteRecipes', JSON.stringify(atualiza));
  };

  return (
    <div>
      <h1 data-testid="page-title">
        Favorite Recipes
      </h1>
      <Header />
      <section>
        <button data-testid="filter-by-all-btn" onClick={ clearFilter }>ALL</button>
        <button
          data-testid="filter-by-meal-btn"
          onClick={ () => setFilter('meal') }
        >
          Meals
        </button>
        <button
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
      </section>
      <section>
        { data.length > 0 && data.map((item, index) => (<FavoriteRecipesCard
          key={ index }
          index={ index }
          func={ shareRecipe }
          nationality={ item.nationality }
          category={ item.category }
          alcohol={ item.alcoholicOrNot }
          name={ item.name }
          img={ item.image }
          type={ item.type }
          id={ item.id }
          share={ shared }
          favoriteFunc={ unFavorite }
        />))}
      </section>
    </div>
  );
}
