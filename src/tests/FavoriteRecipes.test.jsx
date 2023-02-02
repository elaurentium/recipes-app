import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import copy from 'clipboard-copy';
import { renderWithRouter } from '../helpers/renderWithRouter';
import { favoriteRecipes } from './mockConstantes';
import FavoriteRecipes from '../Pages/FavoriteRecipes';

const valueToRaiseMockException = 'fake input causing exception in copy to clipboard';
jest.mock('clipboard-copy', () => jest.fn().mockImplementation((input) => {
  if (input === valueToRaiseMockException) {
    throw new Error(input);
  }
  return true;
}));

describe('<FavoriteRecipes />', () => {
  beforeEach(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    renderWithRouter(<FavoriteRecipes />, '/favorite-recipes');
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
  it('função de remover favoritos', () => {
    const favBtn = screen.getByTestId('0-horizontal-favorite-btn');
    expect(favBtn).toBeInTheDocument();

    userEvent.click(favBtn);

    const img = screen.getAllByTestId(/-horizontal-image/i);

    expect(img.length).toBe(1);
  });
});

describe('FavoriteRecipes sem localStorage', () => {
  beforeEach(() => {
    renderWithRouter(<FavoriteRecipes />, '/favorite-recipes');
  });

  it('não deve renderizar nenhuma receita', () => {
    const imgId = '1-horizontal-image';
    const img = screen.queryByTestId(imgId);

    expect(img).not.toBeInTheDocument();
  });
});
