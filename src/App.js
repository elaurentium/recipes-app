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
  );
}

export default App;
