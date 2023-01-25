import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/refeições">
          <Footer />
        </Route>
        <Route exact path="/drinks">
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Footer />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
