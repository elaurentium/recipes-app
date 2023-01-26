import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const getEmail = localStorage.getItem('user');

  const history = useHistory();

  const handleClick = () => {
    history.push('/done-recipes');
  };

  return (
    <div>
      <h1 className="h1">PROFILE</h1>
      <div className="Profile">
        <h3
          data-testid="profile-email"
          name="profile-email"
          type="text"
          id="profile-email"
        >
          {getEmail}
        </h3>
      </div>
      <div>
        <button
          type="button"
          data-testid="profile-done-btn"
          name="rofile-done-btn"
          id="rofile-done-btn"
          onClick={ handleClick }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          name="profile-favorite-btn"
          id="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          name="profile-logout-btn"
          id="profile-logout-btn"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
