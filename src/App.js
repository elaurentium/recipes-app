<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Test from './tests/Test';

function App() {
  return (
    <Switch>
      <Route path="/meals" component={ Test } exact />
      <Route path="/drinks" component={ Test } exact />
    </Switch>
=======
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
  <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
      <Footer />
    </div>
>>>>>>> edde7bfceeecac680a09b7da2d1112014750f954
  );
}

export default App;
