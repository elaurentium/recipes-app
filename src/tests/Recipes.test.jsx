import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApiContext from '../Context/ApiContext';
import Recipes from '../Pages/Recipes';
import { renderWithRouter } from '../helpers/renderWithRouter';

describe('<Recipes/>', () => {
  it('componentes são renderizados em /meals', async () => {
    renderWithRouter(<ApiContext><Recipes /></ApiContext>, '/meals');

    const load = screen.queryByRole('heading', { name: /loading/i, level: 1 });
    expect(load).toBeInTheDocument();

    await waitFor(() => {
      const head = screen.getByTestId('page-title');
      const load2 = screen.queryByRole('heading', { name: /loading/i, level: 1 });

      expect(head).toBeInTheDocument();
      expect(load2).not.toBeInTheDocument();
    });
  });
  it('receitas são renderizadas em /meals', async () => {
    renderWithRouter(<ApiContext><Recipes /></ApiContext>, '/meals');
    const DOZE = 12;
    await waitFor(() => {
      Array(DOZE).fill('').forEach((_, i) => {
        const recipe = screen.getByTestId(`${i}-recipe-card`);
        expect(recipe).toBeInTheDocument();
      });
    });
  });
  it('componentes são renderizados em /drinks', async () => {
    renderWithRouter(<ApiContext><Recipes /></ApiContext>, '/drinks');

    const load = screen.queryByRole('heading', { name: /loading/i, level: 1 });
    expect(load).toBeInTheDocument();

    await waitFor(() => {
      const head = screen.getByTestId('page-title');
      const load2 = screen.queryByRole('heading', { name: /loading/i, level: 1 });

      expect(head).toBeInTheDocument();
      expect(load2).not.toBeInTheDocument();
    });
  });
  it('receitas são renderizadas em /drinks', async () => {
    renderWithRouter(<ApiContext><Recipes /></ApiContext>, '/drinks');
    const DOZE = 12;

    await waitFor(() => {
      Array(DOZE).fill('').forEach((_, i) => {
        const recipe = screen.getByTestId(`${i}-recipe-card`);
        expect(recipe).toBeInTheDocument();
      });
    });
  });
  it('receitas são renderizadas em /drinks com filtro', async () => {
    const { history } = renderWithRouter(<ApiContext><Recipes /></ApiContext>, '/drinks');
    await waitFor(() => {
      const btn = screen.getByRole('button', { name: /ordinary drink/i });
      expect(btn).toBeInTheDocument();

      userEvent.click(btn);
      const DOZE = 12;
      Array(DOZE).fill('').forEach((_, i) => {
        const recipe = screen.getByTestId(`${i}-recipe-card`);
        expect(recipe).toBeInTheDocument();
      });

      const all = screen.getByRole('button', { name: /all/i });
      userEvent.click(all);

      const recipe = screen.getByTestId('0-card-img');
      expect(recipe).toBeInTheDocument();

      userEvent.click(recipe);

      const { pathname } = history.location;
      expect(pathname).toBe('/drinks/15997');
    });
  });
  it('receitas são renderizadas em /meals com filtro', async () => {
    const { history } = renderWithRouter(<ApiContext><Recipes /></ApiContext>, '/meals');
    await waitFor(() => {
      const btn = screen.getByRole('button', { name: /beef/i });
      expect(btn).toBeInTheDocument();

      userEvent.click(btn);
      const DOZE = 12;
      Array(DOZE).fill('').forEach((_, i) => {
        const recipe = screen.getByTestId(`${i}-recipe-card`);
        expect(recipe).toBeInTheDocument();
      });

      const all = screen.getByRole('button', { name: /all/i });
      userEvent.click(all);

      const recipe = screen.getByTestId('0-card-img');
      expect(recipe).toBeInTheDocument();

      userEvent.click(recipe);

      const { pathname } = history.location;
      expect(pathname).toBe('/meals/52977');
    });
  });
});
