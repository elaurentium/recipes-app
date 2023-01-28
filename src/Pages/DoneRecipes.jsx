import React, { useEffect, useState } from 'react';
import DoneRecipesCard from '../components/DoneRecipesCard';

function DoneRecipes() {
  const [data, setaData] = useState([]);

  useEffect(() => {
    if (localStorage.doneRecipes) {
      setaData(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, []);

  const shareRecipe = () => {

  };

  return (
    <>
      <h1 data-testid="page-title">Done Recipes</h1>
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
        />))}
      </section>
    </>
  );
}

export default DoneRecipes;
