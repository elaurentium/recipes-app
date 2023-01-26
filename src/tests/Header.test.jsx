import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouter } from '../helpers/renderWithRouter';
import Header from '../components/Header';

describe('Testa componente Header', () => {
  it('Verifica se todos os componentes são renderizados no /meals', () => {
    renderWithRouter(<Header />, 'meals');

    const title = screen.getByTestId('page-title');
    const profilePic = screen.getByTestId('profile-top-btn');
    const searchInputButton = screen.getByTestId('search-top-btn');
    const searchInput = screen.getAllByTestId('search-input');

    expect(title).toBeInTheDocument();
    expect(profilePic).toBeInTheDocument();

    userEvent.click(searchInputButton);

    expect(searchInput).not.toBeDisabled();
  });
});
