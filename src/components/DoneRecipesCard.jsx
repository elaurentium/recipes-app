import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../style/DoneRecipesCard.css';

function DoneRecipesCard({
  img, name, category, data, tag, id,
  func, index, nationality, alcohol, type, share }) {
  const link = `http://localhost:3000/${type}s/${id}`;

  return (
    <div>
      <Link to={ `/${type}s/${id}` }>
        <img
          src={ img }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          className="thumb"
        />
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      </Link>
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
          onClick={ () => func(link, id) }
        >
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            src={ shareIcon }
            alt="share button"
          />
        </button>
        {share === id && <p>Link copied!</p>}
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
  id: P.number,
  type: P.string,
}.isRequired;

export default DoneRecipesCard;
