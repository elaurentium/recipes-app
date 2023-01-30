import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import favoriteItem from '../images/blackHeartIcon.svg';
import '../style/DoneRecipesCard.css';

function FavoriteRecipesCard({
  img, name, category, id, favoriteFunc,
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
        <button
          onClick={ () => favoriteFunc(id) }
        >
          <img
            src={ favoriteItem }
            alt="desfavoritar"
            data-testid={ `${index}-horizontal-favorite-btn` }
          />
        </button>
      </div>
    </div>
  );
}

FavoriteRecipesCard.propTypes = {
  img: P.string,
  name: P.string,
  category: P.string,
  index: P.number,
  func: P.func,
  alcohol: P.string,
  nationality: P.string,
  id: P.number,
  type: P.string,
  share: P.number,
  favoriteFunc: P.func,
}.isRequired;

export default FavoriteRecipesCard;
