import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ContextApi } from '../Context/ApiContext';

function SearchBar() {
  const [input, setInput] = useState('');
  const [radio, setRadio] = useState('ingredient');
  const location = useLocation();
  const history = useHistory();

  const { data, result, ApiFetch } = useContext(ContextApi);

  useEffect(() => {
    if (data.length === 1) {
      const id = data[0].idMeal || data[0].idDrink;
      history.push(`${location.pathname}/${id}`);
    }
  }, [data, history, location.pathname]);

  useEffect(() => {
    if (result) {
      global.alert(
        'Sorry, we haven\'t found any recipes for these filters.',
      );
    }
  }, [result]);

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const radioState = ({ target }) => {
    setRadio(target.value);
  };

  const btnClick = () => {
    if (input.length > 1 && radio === 'first-letter') {
      global.alert('Your search must have only 1 (one) character');
    } else if (input.length >= 1 && radio) {
      ApiFetch(location.pathname, radio, input);
    }
  };

  return (
    <>
      <input
        type="text"
        name="search-input"
        id="search-input"
        data-testid="search-input"
        value={ input }
        onChange={ handleChange }
      />
      <section>
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            name="radio-filter"
            id="ingredient"
            data-testid="ingredient-search-radio"
            value="ingredient"
            checked={ radio === 'ingredient' }
            onChange={ radioState }
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            name="radio-filter"
            id="name"
            data-testid="name-search-radio"
            value="name"
            checked={ radio === 'name' }
            onChange={ radioState }
          />
        </label>
        <label htmlFor="first-letter">
          First letter
          <input
            type="radio"
            name="radio-filter"
            id="first-letter"
            data-testid="first-letter-search-radio"
            value="first-letter"
            checked={ radio === 'first-letter' }
            onChange={ radioState }
          />
        </label>
      </section>
      <button data-testid="exec-search-btn" onClick={ btnClick }>Search</button>
    </>
  );
}

export default SearchBar;
