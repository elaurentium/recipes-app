import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';
import { doneRecipes } from '../tests/mockConstantes';

localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

function DoneRecipes() {
  const [data, setaData] = useState([]);
  const [shared, setShared] = useState('');

  useEffect(() => {
    if (localStorage.doneRecipes) {
      setaData(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, []);

  const shareRecipe = (link, id) => {
    copy(link);
    setShared(id);
  };

  return (
    <>
      <h1 data-testid="page-title">Done Recipes</h1>
      <Header />
      <section>
        <button data-testid="filter-by-all-btn">ALL</button>
        <button data-testid="filter-by-meal-btn">Meals</button>
        <button data-testid="filter-by-drink-btn">Drinks</button>
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
