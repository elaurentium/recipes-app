import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Recipes from './Pages/Recipes';
import RecipeDetails from './Pages/RecipeDetails';
import RecipeInProgress from './Pages/RecipeInProgress';
import Profile from './Pages/Profile';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/meals" component={ Recipes } />
      <Route exact path="/drinks" component={ Recipes } />
      <Route exact path="/meals/:id-da-receita" component={ RecipeDetails } />
      <Route exact path="/drinks/:id-da-receita" component={ RecipeDetails } />
      <Route
        exact
        path="/drinks/:id-da-receita/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        exact
        path="/drinks/:id-da-receita/in-progress"
        component={ RecipeInProgress }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
