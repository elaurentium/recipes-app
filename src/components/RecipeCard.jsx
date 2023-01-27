import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ index, thumb, name, id, path }) {
  const goTo = `${path}/${id}`;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <Link to={ goTo }>
        <img src={ thumb } alt={ name } data-testid={ `${index}-card-img` } />
        <p data-testid={ `${index}-card-name` }>{name}</p>
      </Link>
    </div>
  );
}

RecipeCard.propTypes = {
  index: P.number,
  thumb: P.string,
  name: P.string,
  id: P.number,
  path: P.string,
}.isRequired;

export default RecipeCard;
