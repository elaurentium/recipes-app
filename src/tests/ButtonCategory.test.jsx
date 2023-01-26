import { render, screen } from '@testing-library/react';
import ButtonCategory from '../components/ButtonCategory';

describe('< ButtonCategory/>', () => {
  it('se foi renderizado', () => {
    render(<ButtonCategory name="Beef" />);

    const btn = screen.getByTestId('Beef-category-filter');

    expect(btn).toBeInTheDocument();
  });
});
