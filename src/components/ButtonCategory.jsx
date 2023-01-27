import React from 'react';
import P from 'prop-types';

function ButtonCategory({ name, func }) {
  return (
    <button
      data-testid={ `${name}-category-filter` }
      onClick={ () => func(name) }
      className="false"
    >
      {name}
    </button>
  );
}

ButtonCategory.propTypes = {
  name: P.string,
  func: P.func,
}.isRequired;
export default ButtonCategory;
