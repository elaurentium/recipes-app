import React from 'react';
import '../style/Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer" className="toFixed">
      <div>
        <object
          data-testid="drinks-bottom-btn"
          className="drinkIcon"
          type="image/svg+xml"
          data={ drinkIcon }
          src="../images/drinkIcon.svg"
        >
          drinkIcon
        </object>
        <object
          data-testid="meals-bottom-btn"
          className="mealIcon"
          type="image/svg+xml"
          data={ mealIcon }
          src="../images/mealIcon.svg"
        >
          mealIcon
        </object>
      </div>
    </footer>
  );
}
