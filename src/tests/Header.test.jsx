import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../helpers/renderWithRouter';
import Header from '../components/Header';
import ApiContext from '../Context/ApiContext';

const profile = 'profile-top-btn';
const searchBtn = 'search-top-btn';
const searchInp = 'search-input';

describe('Testa componente Header', () => {
  it('Verifica se todos os componentes são renderizados no /meals', () => {
    renderWithRouter(<Header />, '/meals');

    const profilePic = screen.getByTestId(profile);
    const searchInputButton = screen.getByTestId(searchBtn);
    const searchInputTxt = screen.queryByTestId(searchInp);

    expect(profilePic).toBeInTheDocument();
    expect(searchInputButton).toBeInTheDocument();
    expect(searchInputTxt).not.toBeInTheDocument();
  });
  it('botão profile leva para rota /profile', async () => {
    const { history } = renderWithRouter(
      <ApiContext><Header /></ApiContext>,
      '/meals',
    );

    const profilePic = screen.getByTestId(profile);
    userEvent.click(profilePic);

    await waitFor(() => {
      const { pathname } = history.location;
      expect(pathname).toBe('/profile');
    });
  });
  it('botão de busca mostra input', () => {
    renderWithRouter(
      <ApiContext><Header /></ApiContext>,
      '/meals',
    );

    const searchInputButton = screen.getByTestId(searchBtn);
    userEvent.click(searchInputButton);

    const searchInputTxt = screen.getByTestId(searchInp);
    expect(searchInputTxt).toBeInTheDocument();
  });
});
