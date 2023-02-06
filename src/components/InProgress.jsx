import clipboardCopy from 'clipboard-copy';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { inProgressFetch, goToRecipes } from '../services/index';

export default function ReciInProgress() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const [check, setCheck] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [params, setParams] = useState('');
  const [shared, setShared] = useState('');
  const numero15 = 15;
  const newArray = Array(numero15).fill('');

  const { id } = useParams();
  const history = useHistory();

  const link = pathname.includes('meals') ? `/meals/${id}` : `/drinks/${id}`;

  const test = useCallback(async () => {
    setData(await inProgressFetch(id, pathname));
    setLoading(false);
  }, [id, pathname]);

  const copyAndPaste = (item) => {
    clipboardCopy(`http://localhost:3000${link}`);
    setShared(item);
  };

  const handleLocalStore = useCallback(() => {
    const checked = Object.keys(check).filter((e) => check[e] === true);
    if (!loading && checked.length) {
      const key = data.idDrink || data.idMeal;
      const type = pathname.includes('/meals') ? 'meals' : 'drinks';
      const newObj = {
        [type]: {
          [key]: checked,
        },
      };
      if (localStorage.inProgressRecipes) {
        const trated = JSON.parse(localStorage.getItem('inProgressRecipes'));
        const tratedType = trated[type];
        trated[type] = { ...tratedType, [key]: checked };
        localStorage.setItem('inProgressRecipes', JSON.stringify(trated));
      } else {
        localStorage.setItem('inProgressRecipes', JSON.stringify({ ...newObj }));
      }
    }
  }, [check, data, loading, pathname]);

  const key = data.idDrink || data.idMeal;
  const loadingLocalStorage = useCallback(() => {
    if (localStorage.inProgressRecipes && !loading) {
      const type = pathname.includes('/meals') ? 'meals' : 'drinks';
      const trated = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (trated[type] && trated[type][key]) {
        trated[type][key].forEach((i) => {
          setCheck((prev) => ({
            ...prev,
            [i]: true,
          }));
        });
      }
    }
    if (localStorage.favoriteRecipes && !loading) {
      const fav = JSON.parse(localStorage.getItem('favoriteRecipes'));
      setFavorite(fav.some((e) => e.id === id));
    }
  }, [id, key, loading, pathname]);

  const handleFavorite = (name) => {
    setFavorite(!favorite);
    setParams(name);
  };

  const addFavorite = useCallback(() => {
    const objFavorite = {
      id: data.idMeal || data.idDrink,
      type: pathname.includes('meals') ? 'meal' : 'drink',
      nationality: data.strArea || '',
      category: data.strCategory || '',
      alcoholicOrNot: data.strAlcoholic || '',
      name: data.strDrink || data.strMeal,
      image: data.strDrinkThumb || data.strMealThumb,
    };
    if (favorite && params) {
      if (localStorage.favoriteRecipes) {
        let fav = JSON.parse(localStorage.getItem('favoriteRecipes'));
        fav = [...fav, objFavorite];
        localStorage.setItem('favoriteRecipes', JSON.stringify(fav));
      } else {
        localStorage.setItem('favoriteRecipes', JSON.stringify([objFavorite]));
      }
    }
  }, [data.idDrink, data.idMeal, data.strAlcoholic, data.strArea,
    data.strCategory, data.strDrink, data.strDrinkThumb,
    data.strMeal, data.strMealThumb, favorite, params, pathname]);

  const removeFavorite = useCallback(() => {
    if (localStorage.favoriteRecipes && !favorite) {
      const fav = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const remove = fav.filter((e) => e.name !== params);
      localStorage.setItem('favoriteRecipes', JSON.stringify(remove));
    }
  }, [favorite, params]);

  const handleFinishButton = useCallback(() => {
    const ingredient = newArray.map((_, i) => {
      if (data[`strIngredient${i + 1}`] !== null
            && data[`strIngredient${i + 1}`] !== '') {
        return data[`strIngredient${i + 1}`];
      }
      return false;
    }).filter((e) => e !== false);
    const checkbox = Object.keys(check);
    if (ingredient.length > checkbox.length) {
      setDisabled(true);
    } else {
      let verify = true;
      checkbox.forEach((e) => {
        verify = verify && check[e];
      });
      setDisabled(!verify);
    }
  }, [check, data, newArray]);

  useEffect(() => {
    handleLocalStore();
    handleFinishButton();
  }, [handleLocalStore, loading, check, handleFinishButton]);

  useEffect(() => {
    if (favorite) {
      addFavorite();
    } else {
      removeFavorite();
    }
  }, [addFavorite, favorite, removeFavorite]);

  useEffect(() => {
    test();
    loadingLocalStorage();
  }, [loadingLocalStorage, test]);

  const handleCheck = ({ target }) => {
    const { id: n, checked } = target;
    setCheck((prev) => ({
      ...prev,
      [n]: checked,
    }));
  };

  if (loading) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div>
      <div>
        <h2 data-testid="recipe-title">
          {pathname.includes('meals') ? data.strMeal : data.strDrink}
        </h2>
        <img
          src={ pathname.includes('meals')
            ? data.strMealThumb : data.strDrinkThumb }
          alt={ pathname.includes('meals') ? data.idMeal : data.idDrink }
          data-testid="recipe-photo"
        />
        <p data-testid="recipe-category">
          {data.strCategory}
        </p>
        <p data-testid="instructions">
          {data.strInstructions}
        </p>
        {
          newArray.map((_, i) => {
            if (data[`strIngredient${i + 1}`] !== null
            && data[`strIngredient${i + 1}`] !== '') {
              return (
                <label
                  key={ i }
                  htmlFor={ data[`strIngredient${i + 1}`] }
                  data-testid={ `${i}-ingredient-step` }
                  style={ { textDecoration: check[data[`strIngredient${i + 1}`]]
                    ? 'line-through solid black'
                    : 'none' } }
                >
                  <input
                    type="checkbox"
                    value={ i }
                    checked={ check[data[`strIngredient${i + 1}`]] }
                    id={ data[`strIngredient${i + 1}`] }
                    onChange={ handleCheck }
                  />
                  {`${data[`strIngredient${i + 1}`]} ${data[`strMeasure${i + 1}`]}`}
                </label>
              );
            }
            return null;
          })
        }
      </div>
      <button
        data-testid="share-btn"
        onClick={ () => copyAndPaste(id) }
      >
        Share
      </button>
      <button
        onClick={ () => handleFavorite(data.strDrink || data.strMeal) }
      >
        <img
          src={ favorite ? blackHeartIcon : whiteHeartIcon }
          alt="heart-icon"
          data-testid="favorite-btn"
        />
      </button>
      <button
        data-testid="finish-recipe-btn"
        disabled={ disabled }
        onClick={ () => goToRecipes(data, history, pathname) }
      >
        Finish Recipe
      </button>
      {shared === id && <p>Link copied!</p>}
    </div>
  );
}
