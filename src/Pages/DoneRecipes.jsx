import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';
// import { doneRecipes } from '../tests/mockConstantes';

// localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

function DoneRecipes() {
  const [data, setData] = useState([]);
  const [shared, setShared] = useState('');

  useEffect(() => {
    if (localStorage.doneRecipes) {
      setData(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, []);

  const shareRecipe = (link, id) => {
    copy(link);
    setShared(id);
  };

  const clearFilter = () => {
    setData(JSON.parse(localStorage.getItem('doneRecipes')));
  };

  const setFilter = (type) => {
    const filter = JSON.parse(localStorage.getItem('doneRecipes'));
    setData(filter.filter((e) => e.type === type));
  };

  return (
    <>
      <h1 data-testid="page-title">Done Recipes</h1>
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
        { data.length > 0 && data.map((item, index) => (<DoneRecipesCard
          key={ index }
          index={ index }
          func={ shareRecipe }
          nationality={ item.nationality }
          category={ item.category }
          alcohol={ item.alcoholicOrNot }
          name={ item.name }
          img={ item.image }
          data={ item.doneDate }
          tag={ item.tags }
          type={ item.type }
          id={ item.id }
          share={ shared }
        />))}
      </section>
    </>
  );
}

export default DoneRecipes;
