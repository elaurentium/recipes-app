import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../components/Profile';
import { renderWithRouter } from '../helpers/renderWithRouter';

describe('Testes do componente Profile', () => {
  it('Verifica se o elemento de email e os botões estão renderizados', () => {
    render(<Profile />);

    const email = screen.getByTestId('profile-email');
    expect(email).toBeInTheDocument();
    const doneRecipes = screen.getByTestId('profile-done-btn');
    expect(doneRecipes).toBeInTheDocument();
    const doneFavorites = screen.getByTestId('profile-favorite-btn');
    expect(doneFavorites).toBeInTheDocument();
    const logout = screen.getByTestId('profile-logout-btn');
    expect(logout).toBeInTheDocument();
  });
  it('Testa se os botões no componente estão habilitados', () => {
    render(<Profile />);

    const doneRecipesButton = screen.getByRole('button', {
      name: /done recipes/i,
    });
    expect(doneRecipesButton).not.toBeDisabled();
    const favoriteRecipesButton = screen.getByRole('button', {
      name: /favorite recipes/i,
    });
    expect(favoriteRecipesButton).not.toBeDisabled();
    expect(doneRecipesButton).not.toBeDisabled();
    const logoutButton = screen.getByRole('button', {
      name: /logout/i,
    });
    expect(logoutButton).not.toBeDisabled();
  });
  it('Testa se ao clicar no botão, a página é direcionada para a rota correta: "/", .', () => {
    const { history } = renderWithRouter(<Profile />);

    const logoutButton = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/');
  });
  it('Testa se ao clicar no botão, a página é direcionada para a rota correta: "/done-recipes".', () => {
    const { history } = renderWithRouter(<Profile />);

    const doneRecipes = screen.getByTestId('profile-done-btn');
    userEvent.click(doneRecipes);
    expect(history.location.pathname).toBe('/done-recipes');
  });
  it('Testa se ao clicar no botão, a página é direcionada para a rota correta: "/favorite-recipes".', () => {
    const { history } = renderWithRouter(<Profile />);

    const favoritesRecipes = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoritesRecipes);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });
});
