import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer" className="toFixed">
      <div>
        <div>
          <Link to="/drinks">
            <img
              data-testid="drinks-bottom-btn"
              src={ drinkIcon }
              alt="drink"
            />
          </Link>

          <Link to="/meals">
            <img
              data-testid="meals-bottom-btn"
              src={ mealIcon }
              alt="drink"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
