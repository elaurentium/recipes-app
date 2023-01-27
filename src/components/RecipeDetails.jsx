import React, { useContext, useEffect } from 'react';
import { RecipesDetailsContext } from '../context/RecipeContext';

export default function RecipeDetails() {
  const {
    fetchApiMeals,
    apiDataMeals,
    fetchApiDrinks,
    apiDataDrinks } = useContext(RecipesDetailsContext);
/*   // const {ssjshj} = useParams();
    const fetchApiDrinks = useCallback(() => {})
    const fetchApiMeals = useCallback(() => {}) */

  useEffect(() => {
    fetchApiDrinks('11007');
    fetchApiMeals('52772');
  }, []);

  console.log(apiDataMeals);
  console.log(apiDataDrinks);

  return (
    <div>RecipeDetails</div>
  );
}
