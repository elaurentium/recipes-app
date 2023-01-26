import { screen, waitFor } from '@testing-library/react';
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
});
