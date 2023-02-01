import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApiContext from '../Context/ApiContext';
import Recipes from '../Pages/Recipes';
import { renderWithRouter } from '../helpers/renderWithRouter';
import ordinaryDrinks from '../../cypress/mocks/ordinaryDrinks';
import beefMeals from '../../cypress/mocks/beefMeals';
import { categoryDrinks, categoryMeals } from './mockConstantes';
import { meals } from './mock/meals';
import drinks from './mock/drinks';

const initMealsEP = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const initDrinksksEP = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const mealsCategoryEP = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const drinksCategoryEP = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const beefEP = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';
const ordinaryEP = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink';

const endPoint = {
  [initMealsEP]: meals,
  [initDrinksksEP]: drinks,
  [mealsCategoryEP]: categoryMeals,
  [drinksCategoryEP]: categoryDrinks,
  [beefEP]: beefMeals,
  [ordinaryEP]: ordinaryDrinks,
};

describe('<Recipes/>', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch')
      .mockImplementation((param) => ({
        json: async () => {
          const response = endPoint[param];
          if (!response) {
            throw new Error(`Mock not found for URL: "${param}"`);
          }
          return response;
        },
      }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
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
