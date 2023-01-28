import React from 'react';
import P from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipesCard({
  img, name, category, data, tag, func, index, nationality, alcohol }) {
  return (
    <div>
      <img src={ img } alt={ name } data-testid={ `${index}-horizontal-image` } />
      { nationality && (
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${nationality} - ${category}`}
        </p>)}
      {alcohol && (
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          { alcohol }
        </p>
      )}
      <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{ data }</p>
      {tag.length > 1 && tag.map((item, i) => (
        <span
          key={ item + i }
          data-testid={ `${index}-${item}-horizontal-tag` }
        >
          { item }
          {' '}
        </span>))}
      <div>
        <button
          onClick={ func }
        >
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="share button"
          />
        </button>
      </div>
    </div>
  );
}

DoneRecipesCard.propTypes = {
  img: P.string,
  name: P.string,
  category: P.string,
  data: P.string,
  tag: P.arrayOf(P.string),
  index: P.number,
  func: P.func,
  alcohol: P.string,
  nationality: P.string,
}.isRequired;

export default DoneRecipesCard;
