import { screen } from '@testing-library/react';
import DoneRecipes from '../Pages/DoneRecipes';
import { renderWithRouter } from '../helpers/renderWithRouter';
import { doneRecipes } from './mockConstantes';

localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

describe('<DoneRecipes', () => {
  beforeEach(() => {
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    renderWithRouter(<DoneRecipes />, '/done-recipes');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('botões na tela', () => {
    const btnAll = screen.getByTestId('filter-by-all-btn');
    const btnMeals = screen.getByTestId('filter-by-meal-btn');
    const btnDrinks = screen.getByTestId('filter-by-drink-btn');

    expect(btnAll).toBeInTheDocument();
    expect(btnMeals).toBeInTheDocument();
    expect(btnDrinks).toBeInTheDocument();
  });
  it('receitas na tela', () => {
    const img = screen.queryByTestId('0-horizontal-image');
    expect(img).toBeInTheDocument();
  });
});
