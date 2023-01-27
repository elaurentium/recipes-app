import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
      <RecipeDetails />
      <Footer />
    </div>
  );
}

export default App;
