import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const [isShow, setIsShow] = useState(false);

  const history = useHistory();

  const location = useLocation();

  const id = location.pathname;

  const checkPath = id === '/profile'
  || id === '/done-recipes' || id === '/favorite-recipes';

  const handleComponentClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <button
        type="button"
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ profileIcon }
          alt="profile-icon"
          data-testid="profile-top-btn"
        />
      </button>
      {
        !checkPath && (
          <button
            type="button"
            onClick={ handleComponentClick }
          >
            <img
              src={ searchIcon }
              alt="search-icon"
              data-testid="search-top-btn"
            />
          </button>
        )
      }
      {
        isShow && (
          <SearchBar />
        )
      }
    </div>
  );
}

export default Header;
