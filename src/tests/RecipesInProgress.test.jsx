// import { getByTestId, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import React from 'react';
// import copy from 'clipboard-copy';
// import drinks from './mock/drinks';
// import meals from './mock/meals';
// import InProgress from '../components/InProgress';
// import { renderWithRouter } from '../helpers/renderWithRouter';

// const productName = 'recipe-title';
// const productImage = 'recipe-photo';
// const productCategory = 'recipe-category';
// const productInstruction = 'instructions';
// const productShareButton = 'share-btn';
// const productHeartButton = 'favorite-btn';
// const productFinishRecipesButton = 'finish-recipe-btn';

// const valueToRaiseMockException = 'fake input causing exception in copy to clipboard';
// jest.mock('clipboard-copy', () => jest.fn().mockImplementation((input) => {
//   if (input === valueToRaiseMockException) {
//     throw new Error(input);
//   }
//   return true;
// }));

// describe('Testa componente RecipesInProgress', () => {
//   beforeEach(() => {
//     global.fetch = jest.fn(() => Promise.resolve({
//       json: () => Promise.resolve(drinks, meals),
//     }));
//   });

//   it('Verifica se todos os componentes são renderizados na tela /meals', async () => {
//     renderWithRouter(<InProgress />, '/meals/in-progress');

//     const load = screen.queryByRole('heading', { name: /loading/i, level: 1 });
//     expect(load).toBeInTheDocument();

//     await waitFor(() => {
//       const title = screen.getByTestId(productName);
//       const image = screen.getByTestId(productImage);
//       const category = screen.getByTestId(productCategory);
//       const instructions = screen.getByTestId(productInstruction);
//       const buttonShare = screen.getByTestId(productShareButton);
//       const heartButton = screen.getByTestId(productHeartButton);
//       const FinishRecipesButton = screen.getByTestId(productFinishRecipesButton);

//       expect(title).toBeInTheDocument();
//       expect(image).toBeInTheDocument();
//       expect(category).toBeInTheDocument();
//       expect(instructions).toBeInTheDocument();
//       const QUANTIDADE_INGREDIENTES = 15;
//       array(QUANTIDADE_INGREDIENTES).fill('').forEach((_, i) => {
//         const checkboxs = screen.getByTestId(`${i}-ingredient-step`);
//         expect(checkboxs).toBeInTheDocument();
//       });
//       expect(buttonShare).toBeInTheDocument();
//       expect(heartButton).toBeInTheDocument();
//       expect(FinishRecipesButton).toBeInTheDocument();
//     });
//   });

//   it('Verifica se todos os componentes são renderizados na tela /drinks', async () => {
//     renderWithRouter(<InProgress />);
//     const load = screen.queryByRole('heading', { name: /loading/i, level: 1 });
//     expect(load).toBeInTheDocument();

//     await waitFor(() => {
//       const title = screen.getByTestId(productName);
//       const image = screen.getByTestId(productImage);
//       const category = screen.getByTestId(productCategory);
//       const instructions = screen.getByTestId(productInstruction);
//       const buttonShare = screen.getByTestId(productShareButton);
//       const heartButton = screen.getByTestId(productHeartButton);
//       const finishRecipesButton = screen.getByTestId(productFinishRecipesButton);

//       expect(title).toBeInTheDocument();
//       expect(image).toBeInTheDocument();
//       expect(category).toBeInTheDocument();
//       expect(instructions).toBeInTheDocument();
//       const QUANTIDADE_INGREDIENTES = 15;
//       array(QUANTIDADE_INGREDIENTES).fill('').forEach((_, i) => {
//         const checkboxs = screen.getByTestId(`${i}-ingredient-step`);
//         expect(checkboxs).toBeInTheDocument();
//       });
//       expect(buttonShare).toBeInTheDocument();
//       expect(heartButton).toBeInTheDocument();
//       expect(finishRecipesButton).toBeInTheDocument();
//     });
//   });

//   it('Verifica se o botão share faz clipboard no caminho /meals', async () => {
//     renderWithRouter(<InProgress />, '/meals/in-progress');

//     const btnId = 'share-btn';
//     const btn = screen.getByTestId(btnId);

//     userEvent.click(btn);

//     expect(copy).toHaveBeenCalled();

//     const share = screen.getByText(/link copied!/i);
//     expect(share).toBeInTheDocument();
//   });

//   it('Verifica se o botão share faz clipboard no caminho /drinks', async () => {
//     renderWithRouter(<InProgress />, '/drinks/in-progress');

//     const buttonShare = screen.getByTestId(productShareButton);
//     const copiedText = screen.getByRole('paragraph', { name: /Link copied!/i });

//     expect(buttonShare).toBeInTheDocument();

//     userEvent.click(buttonShare);

//     await waitFor(() => {
//       expect(copiedText).toBeInTheDocument();
//     });
//   });

//   it('Verifica se o butão de favorito /drink/in-progress', () => {
//     renderWithRouter(<InProgress />, '/drinks/in-progress');

//     const heartButton = screen.getByTestId(productHeartButton);

//     userEvent.click(heartButton);

//     const heartIcon = getByTestId('favorite-btn');
//     expect(heartIcon.getAttribute('src')).toBe('blackHeartIcon');
//   });

//   it('Verifica se o butão de favorito /meals/in-progress', () => {
//     renderWithRouter(<InProgress />);

//     const button = screen.getByTestId(productHeartButton);

//     userEvent.click(button);

//     const heartIcon = getByTestId('favorite-btn');
//     expect(heartIcon.getAttribute('src')).toBe('blackHeartIcon');
//   });

//   it('Verifica funcionabilidade do butão finishRecipes', () => {
//     const { history } = renderWithRouter(<InProgress />);

//     const finishRecipesButton = screen.getByTestId(productFinishRecipesButton);

//     expect(finishRecipesButton).toBeInTheDocument();
//     userEvent.click(finishRecipesButton);

//     const { pathname } = history.location;

//     expect(pathname).toBe('/done-recipes');
//   });
// });
