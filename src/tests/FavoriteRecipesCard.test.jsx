import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../helpers/renderWithRouter';
import FavoriteRecipesCard from '../components/FavoriteRecipesCard';
import { favoriteRecipeDrinks, favoriteRecipeMeals } from './mockConstantes';

const imgId = '1-horizontal-image';
const nameId = '1-horizontal-name';
const btnId = '1-horizontal-share-btn';

describe('<FavoriteRecipesCard />', () => {
  it('elementos na tela para meal', () => {
    renderWithRouter(<FavoriteRecipesCard { ...favoriteRecipeMeals } />);

    const img = screen.getByTestId(imgId);
    const category = screen.getByTestId('1-horizontal-top-text');
    const name = screen.getByTestId(nameId);
    const btn = screen.getByTestId(btnId);
    const share = screen.getByText(/link copied!/i);

    expect(img).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(share).toBeInTheDocument();
  });
  it('elementos na tela para meal', () => {
    renderWithRouter(<FavoriteRecipesCard { ...favoriteRecipeDrinks } />);

    const img = screen.getByTestId(imgId);
    const alcool = screen.getByTestId('1-horizontal-top-text');
    const name = screen.getByTestId(nameId);
    const btn = screen.getByTestId(btnId);
    const share = screen.queryByText(/link copied!/i);

    expect(img).toBeInTheDocument();
    expect(alcool).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(share).not.toBeInTheDocument();
  });
  it('redireciona para página certa', () => {
    const { history } = renderWithRouter(
      <FavoriteRecipesCard { ...favoriteRecipeDrinks } />,
      '/done-recipes',
    );

    const img = screen.getByTestId(imgId);
    userEvent.click(img);

    const { pathname } = history.location;
    expect(pathname).toBe('/drinks/178319');
  });
  it('redireciona para página certa', () => {
    const fn = jest.fn(() => {});
    const fn2 = jest.fn(() => {});
    const { history } = renderWithRouter(
      <FavoriteRecipesCard
        {
          ...favoriteRecipeDrinks }
        func={ fn }
        favoriteFunc={ fn2 }
      />,
      '/done-recipes',
    );

    const btn = screen.getByTestId(btnId);
    userEvent.click(btn);

    expect(fn).toHaveBeenCalled();

    const favBtn = screen.getByTestId('1-horizontal-favorite-btn');
    expect(favBtn).toBeInTheDocument();

    userEvent.click(favBtn);

    expect(fn2).toHaveBeenCalled();

    const name = screen.getByTestId(nameId);
    userEvent.click(name);

    const { pathname } = history.location;
    expect(pathname).toBe('/drinks/178319');
  });
});
