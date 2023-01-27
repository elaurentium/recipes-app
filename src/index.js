import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import RecipesDetailsProvider from './context/RecipeContext';
=======
import ApiContext from './Context/ApiContext';
>>>>>>> 2fce9730d19b537b58b4072c957dae6b5d2aa1e4

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
<<<<<<< HEAD
    <RecipesDetailsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecipesDetailsProvider>,
=======
    <BrowserRouter>
      <ApiContext>
        <App />
      </ApiContext>
    </BrowserRouter>,
>>>>>>> 2fce9730d19b537b58b4072c957dae6b5d2aa1e4
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
