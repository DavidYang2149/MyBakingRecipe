import React from 'react';
import { render } from '@testing-library/react';

import IngredientItem from '../IngredientItem';

describe('IngredientItem', () => {
  const renderIngredientItem = ({ id, ingredient, weight }) => render((
    <IngredientItem
      id={id}
      ingredient={ingredient}
      weight={weight}
    />
  ));

  context('with ingredient', () => {
    it('render values', () => {
      const id = 1;
      const ingredient = '박력분';
      const weight = '100';
      const { getByDisplayValue } = renderIngredientItem({ id, ingredient, weight });

      expect(getByDisplayValue('박력분')).toHaveValue('박력분');
      expect(getByDisplayValue('100')).toHaveValue(100);
    });
  });

  context('without ingredient', () => {
    it('render nothing', () => {
      const { container } = renderIngredientItem({ id: 0 });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
