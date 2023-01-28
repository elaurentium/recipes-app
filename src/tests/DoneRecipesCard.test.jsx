import { render, screen } from '@testing-library/react';
import DoneRecipesCard from '../components/DoneRecipesCard';
import { doneRecipeDrinks, doneRecipeMeals } from './mockConstantes';

describe('<DoneRecipeCard />', () => {
  it('elementos na tela para meal', () => {
    render(<DoneRecipesCard { ...doneRecipeMeals } />);

    const img = screen.getByTestId('1-horizontal-image');
    const category = screen.getByTestId('1-horizontal-top-text');
    const name = screen.getByTestId('1-horizontal-name');
    const date = screen.getByTestId('1-horizontal-done-date');
    const tag1 = screen.getByTestId('1-feijão-horizontal-tag');
    const tag2 = screen.getByTestId('1-caseira-horizontal-tag');
    const btn = screen.getByTestId('1-horizontal-share-btn');

    expect(img).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
  it('elementos na tela para meal', () => {
    render(<DoneRecipesCard { ...doneRecipeDrinks } />);

    const img = screen.getByTestId('1-horizontal-image');
    const alcool = screen.getByTestId('1-horizontal-top-text');
    const name = screen.getByTestId('1-horizontal-name');
    const date = screen.getByTestId('1-horizontal-done-date');
    const btn = screen.getByTestId('1-horizontal-share-btn');

    expect(img).toBeInTheDocument();
    expect(alcool).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
