import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Recipes from './Pages/Recipes';
import RecipeDetails from './components/RecipeDetails';
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
<<<<<<< HEAD
      <Route exact path="/meals/:id">
        <RecipeDetails />
      </Route>
      <Route exact path="/drinks/:id">
        <RecipeDetails />
      </Route>
=======
      <Route exact path="/meals/:id" component={ RecipeDetails } />
      <Route exact path="/drinks/:id" component={ RecipeDetails } />
>>>>>>> main-group-5
      <Route
        exact
        path="/meals/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        exact
        path="/drinks/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
    </Switch>
  );
}

export default App;
