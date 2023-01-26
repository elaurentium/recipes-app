import React from 'react';

export default function Profile() {
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
          email
        </h3>
      </div>
      <div>
        <button
          type="button"
          data-testid="profile-done-btn"
          name="rofile-done-btn"
          id="rofile-done-btn"
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
