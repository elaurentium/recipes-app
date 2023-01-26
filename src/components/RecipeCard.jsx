import React from 'react';
import P from 'prop-types';

function RecipeCard({ index, thumb, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img src={ thumb } alt={ name } data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </div>
  );
}

RecipeCard.propTypes = {
  index: P.number,
  thumb: P.string,
  name: P.string,
}.isRequired;

export default RecipeCard;
