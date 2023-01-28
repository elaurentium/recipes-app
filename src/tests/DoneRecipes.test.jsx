import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import copy from 'clipboard-copy';
import DoneRecipes from '../Pages/DoneRecipes';
import { renderWithRouter } from '../helpers/renderWithRouter';
import { doneRecipes } from './mockConstantes';

const valueToRaiseMockException = 'fake input causing exception in copy to clipboard';
jest.mock('clipboard-copy', () => jest.fn().mockImplementation((input) => {
  if (input === valueToRaiseMockException) {
    throw new Error(input);
  }
  return true;
}));

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
  it('função do filtro meal', () => {
    const btnMeals = screen.getByTestId('filter-by-meal-btn');

    userEvent.click(btnMeals);
    const img = screen.getAllByTestId(/-horizontal-image/i);

    expect(img.length).toBe(1);
  });
  it('função do filtro drink', () => {
    const btnDrinks = screen.getByTestId('filter-by-drink-btn');

    userEvent.click(btnDrinks);
    const img = screen.getAllByTestId(/-horizontal-image/i);

    expect(img.length).toBe(1);
  });
  it('função do filtro meal', () => {
    const btnAll = screen.getByTestId('filter-by-all-btn');

    userEvent.click(btnAll);
    const img = screen.getAllByTestId(/-horizontal-image/i);

    expect(img.length).toBe(2);
  });
  it('função de share funciona', () => {
    const btnId = '1-horizontal-share-btn';
    const btn = screen.getByTestId(btnId);

    userEvent.click(btn);

    expect(copy).toHaveBeenCalled();

    const share = screen.getByText(/link copied!/i);
    expect(share).toBeInTheDocument();
  });
});

describe('DoneRecipes sem localStorage', () => {
  beforeEach(() => {
    renderWithRouter(<DoneRecipes />, '/done-recipes');
  });

  it('não deve renderizar nenhuma receita', () => {
    const imgId = '1-horizontal-image';
    const img = screen.queryByTestId(imgId);

    expect(img).not.toBeInTheDocument();
  });
});
