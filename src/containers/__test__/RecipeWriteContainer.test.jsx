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

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      ...allConditionsState,
      recipe: recipes[0],
    }));
  });

  describe('with recipe', () => {
    it('renders container', () => {
      render(<RecipeWriteContainer />);
    });

    it('change recipe', () => {
      const { getByLabelText } = render(<RecipeWriteContainer />);

      const label = getByLabelText('레시피명');
      expect(label.value).toBe('마들렌');

      fireEvent.change(label, {
        target: {
          name: 'title',
          value: '파운드케이크',
        },
      });

      expect(dispatch).toBeCalledWith({
        type: 'recipe/changeRecipe',
        payload: { name: 'title', value: '파운드케이크' },
      });
    });

    it('change ingredient', () => {
      const { getAllByLabelText } = render(<RecipeWriteContainer />);

      const labels = getAllByLabelText('원재료');
      const label = labels[1];
      expect(label.value).toBe('설탕');

      fireEvent.change(label, {
        target: {
          name: 'ingredient-1',
          value: '백설탕',
        },
      });

      expect(dispatch).toBeCalledWith({
        type: 'recipe/changeIngredient',
        payload: { name: 'ingredient-1', value: '백설탕' },
      });
    });

    it('change new ingredient', () => {
      const { getAllByLabelText } = render(<RecipeWriteContainer />);

      const labels = getAllByLabelText('원재료');
      const label = labels[0];
      expect(label.value).toBe('');

      fireEvent.change(label, {
        target: {
          name: 'ingredient-5',
          value: '레몬',
        },
      });

      expect(dispatch).toBeCalledWith({
        type: 'recipe/changeNewIngredient',
        payload: { name: 'ingredient-5', value: '레몬' },
      });
    });

    context('keyup with enter', () => {
      it('set new ingredient', () => {
        const { getAllByLabelText } = render(<RecipeWriteContainer />);

        const labels = getAllByLabelText('원재료');
        const label = labels[0];
        expect(label.value).toBe('');

        fireEvent.keyUp(label, {
          key: 'Enter',
        });

        expect(dispatch).toBeCalledWith({
          type: 'recipe/setNewIngredient',
          payload: {
            fields: {
              id: 0,
              ingredient: '',
              weight: 0,
            },
          },
        });
      });
    });

    context('keyup without enter', () => {
      it('nothing to change', () => {
        const { getAllByLabelText } = render(<RecipeWriteContainer />);

        const labels = getAllByLabelText('원재료');
        const label = labels[0];
        expect(label.value).toBe('');

        fireEvent.keyUp(label, {
          key: 'Shift',
        });

        // 1: useEffect(for Check)
        expect(dispatch).toBeCalledTimes(1);
      });
    });

    it('click and set new ingredient', () => {
      const { getByText } = render(<RecipeWriteContainer />);

      fireEvent.click(getByText('추가하기'));

      expect(dispatch).toBeCalledWith({
        type: 'recipe/setNewIngredient',
        payload: {
          fields: {
            id: 0,
            ingredient: '',
            weight: 0,
          },
        },
      });
    });
  });
});
