import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DoneRecipesCard from '../components/DoneRecipesCard';
import { doneRecipeDrinks, doneRecipeMeals } from './mockConstantes';
import { renderWithRouter } from '../helpers/renderWithRouter';

const imgId = '1-horizontal-image';
const nameId = '1-horizontal-name';
const btnId = '1-horizontal-share-btn';

describe('<DoneRecipeCard />', () => {
  it('elementos na tela para meal', () => {
    renderWithRouter(<DoneRecipesCard { ...doneRecipeMeals } />);

    const img = screen.getByTestId(imgId);
    const category = screen.getByTestId('1-horizontal-top-text');
    const name = screen.getByTestId(nameId);
    const date = screen.getByTestId('1-horizontal-done-date');
    const tag1 = screen.getByTestId('1-feijão-horizontal-tag');
    const tag2 = screen.getByTestId('1-caseira-horizontal-tag');
    const btn = screen.getByTestId(btnId);
    const share = screen.getByText(/link copied!/i);

    expect(img).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(share).toBeInTheDocument();
  });
  it('elementos na tela para meal', () => {
    renderWithRouter(<DoneRecipesCard { ...doneRecipeDrinks } />);

    const img = screen.getByTestId(imgId);
    const alcool = screen.getByTestId('1-horizontal-top-text');
    const name = screen.getByTestId(nameId);
    const date = screen.getByTestId('1-horizontal-done-date');
    const btn = screen.getByTestId(btnId);
    const share = screen.queryByText(/link copied!/i);

    expect(img).toBeInTheDocument();
    expect(alcool).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(share).not.toBeInTheDocument();
  });
  it('redireciona para página certa', () => {
    const { history } = renderWithRouter(
      <DoneRecipesCard { ...doneRecipeDrinks } />,
      '/done-recipes',
    );

    const img = screen.getByTestId(imgId);
    userEvent.click(img);

    const { pathname } = history.location;
    expect(pathname).toBe('/drinks/178319');
  });
  it('redireciona para página certa', () => {
    const fn = jest.fn(() => {});
    const { history } = renderWithRouter(
      <DoneRecipesCard { ...doneRecipeDrinks } func={ fn } />,
      '/done-recipes',
    );

    const btn = screen.getByTestId(btnId);
    userEvent.click(btn);

    expect(fn).toHaveBeenCalled();

    const name = screen.getByTestId(nameId);
    userEvent.click(name);

    const { pathname } = history.location;
    expect(pathname).toBe('/drinks/178319');
  });
});
