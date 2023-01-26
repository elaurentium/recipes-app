import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ApiContext from '../Context/ApiContext';
import SearchBar from '../components/SearchBar';
import { renderWithRouter } from '../helpers/renderWithRoutes';
import { fetch } from './mockConstantes';

const search = 'search-input';
const ingredient = 'ingredient-search-radio';
const name = 'name-search-radio';
const letter = 'first-letter-search-radio';
const button = 'exec-search-btn';

describe('<SearchBar />', () => {
  it('renderiza inputs', () => {
    renderWithRouter(
      <ApiContext><SearchBar /></ApiContext>,
      '/meals',
    );
    const textInput = screen.getByTestId(search);
    const iRadio = screen.getByTestId(ingredient);
    const nRadio = screen.getByTestId(name);
    const lRadio = screen.getByTestId(letter);
    const btn = screen.getByTestId(button);

    expect(textInput).toBeInTheDocument();
    expect(iRadio).toBeInTheDocument();
    expect(nRadio).toBeInTheDocument();
    expect(lRadio).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it('a rota', () => {
    const { history } = renderWithRouter(
      <ApiContext><SearchBar /></ApiContext>,
      '/meals',
    );
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });

  it('se o alerta é chamado passando mais de uma letra no input', () => {
    renderWithRouter(
      <ApiContext><SearchBar /></ApiContext>,
      '/meals',
    );
    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => {});

    const textInput = screen.getByTestId(search);
    const lRadio = screen.getByTestId(letter);
    const btn = screen.getByTestId(button);

    userEvent.type(textInput, 'aa');
    userEvent.click(lRadio);
    userEvent.click(btn);

    expect(global.alert).toHaveBeenCalled();
    expect(global.alert).toHaveBeenCalledTimes(1);
  });
  it('o restorno da fetch com retorno inválido', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(fetch),
    }));

    jest.spyOn(global, 'alert');
    global.alert.mockImplementation(() => {});

    renderWithRouter(
      <ApiContext><SearchBar /></ApiContext>,
      '/meals',
    );

    const text = screen.getByTestId(search);
    const btn = screen.getByTestId(button);

    userEvent.type(text, 'comida');
    userEvent.click(btn);

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalled();
      expect(global.alert).toHaveBeenCalledTimes(1);
    });
  });
  it('4', () => {

  });
});
