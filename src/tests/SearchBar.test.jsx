import { screen } from '@testing-library/react';
import ApiContext from '../Context/ApiContext';
import SearchBar from '../components/SearchBar';
import { renderWithRouter } from '../helpers/renderWithRoutes';

describe('<SearchBar />', () => {
  beforeEach(() => {
    renderWithRouter(<ApiContext><SearchBar /></ApiContext>);
  });
  it('renderiza inputs', () => {
    const textInput = screen.getByTestId('search-input');
    expect(textInput).toBeInTheDocument();
  });
});
