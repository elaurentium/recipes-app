import React from 'react';
import P from 'prop-types';

function ButtonCategory({ name }) {
  return (
    <button data-testid={ `${name}-category-filter` }>{name}</button>
  );
}

ButtonCategory.propTypes = {
  name: P.string,
}.isRequired;
export default ButtonCategory;
