import React, { useState } from 'react';

export default function Login() {
  const [valueInput, setValueInput] = useState('');
  const [passwordInput, setPasswordInput] = useState([]);

  return (
    <div>
      <h1 className="h1">Login</h1>
      <div className="login">
        <input
          data-testid="email-input"
          type="text"
          placeholder="Email"
          value={ valueInput }
          onChange={ ({ target }) => setValueInput(target.value) }
          id="email-input"
        />
        <input
          data-testid="password-input"
          name="password"
          placeholder="Password"
          value={ passwordInput }
          onChange={ ({ target }) => setPasswordInput(target.value) }
          id="password-input"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          name="login-submit-btn"
          id="login-submit-btn"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
