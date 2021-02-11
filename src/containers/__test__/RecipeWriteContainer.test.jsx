import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import recipes from '../../../fixtures/recipes';
import allConditionsState from '../../../fixtures/allConditionsState';
import RecipeWriteContainer from '../RecipeWriteContainer';

jest.mock('react-redux');
jest.mock('../../services/recipes');

describe('RecipeWriteContainer', () => {
  const dispatch = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    handleChange.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockClear();
  });

  context('with recipe', () => {
    it('renders container', () => {
      useSelector.mockImplementation((selector) => selector({
        ...allConditionsState,
        recipe: recipes[0],
      }));

      render(<RecipeWriteContainer />);
    });

    it('change recipe', () => {
      const { getByLabelText } = render(<RecipeWriteContainer />);

      const label = getByLabelText('레시피명');
      expect(label).toHaveValue('마들렌');

      fireEvent.change(label, {
        target: {
          value: '안녕하세요!',
          name: 'title',
        },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
