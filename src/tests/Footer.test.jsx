import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithRouter } from '../helpers/renderWithRouter';
import Footer from '../components/Footer';

describe('Testa o componente Footer', () => {
  test('Testa se contém as informações corretas', () => {
    renderWithRouter(<Footer />);

    const drinkIcon = screen.getByTestId('drinks-bottom-btn');
    const mealsIcon = screen.getByTestId('meals-bottom-btn');

    expect(drinkIcon).toBeInTheDocument();
    expect(mealsIcon).toBeInTheDocument();
  });
});
