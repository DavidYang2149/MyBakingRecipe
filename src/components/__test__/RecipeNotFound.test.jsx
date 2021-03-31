import React from 'react';
import { render } from '@testing-library/react';

import RecipeNotFound from '../RecipeNotFound';

describe('RecipeNotFound', () => {
  const renderRecipeNotFound = () => render((
    <RecipeNotFound />
  ));

  it('render values', () => {
    const { container } = renderRecipeNotFound();

    expect(container).toHaveTextContent('해당 페이지를 찾을 수 없습니다.');
  });
});
