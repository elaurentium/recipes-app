import { render, screen } from '@testing-library/react';
import RecipeCard from '../components/RecipeCard';

describe('<RecipeCard />', () => {
  it('se renderiza na tela', () => {
    render(<RecipeCard index="1" thumb="www.a.com" name="beef" />);

    const div = screen.getByTestId('1-recipe-card');
    const img = screen.getByTestId('1-card-img');
    const paragrafo = screen.getByTestId('1-card-name');

    expect(div).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(paragrafo).toBeInTheDocument();
  });
});
