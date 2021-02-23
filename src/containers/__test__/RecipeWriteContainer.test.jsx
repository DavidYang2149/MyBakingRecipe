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

    context('with new recipe', () => {
      it('click onSubmit', () => {
        useSelector.mockImplementation((selector) => selector({
          ...allConditionsState,
          recipe: {
            id: 1,
            userId: '',
            title: '마들렌',
            category: 1,
            product: 16,
            ingredients: [
              { id: 1, ingredient: '설탕', weight: 150 },
              { id: 2, ingredient: '버터', weight: 150 },
              { id: 3, ingredient: '전란', weight: 100 },
              { id: 4, ingredient: '박력분', weight: 150 },
            ],
            newIngredient: { id: 0, ingredient: '', weight: 0 },
            description: '마들렌 만드는 방법. 오븐 180도에 10분간 굽기',
          },
        }));
        const { getByText } = render(<RecipeWriteContainer />);

        fireEvent.click(getByText('저장하기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with exist recipe', () => {
      useSelector.mockImplementation((selector) => selector({
        ...allConditionsState,
        recipe: recipes[0],
      }));

      it('click onSubmit', () => {
        const { getByText } = render(<RecipeWriteContainer />);

        fireEvent.click(getByText('수정하기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with confirm true', () => {
      it('click onRemove', () => {
        global.confirm = () => true;
        const { getByText } = render(<RecipeWriteContainer />);

        fireEvent.click(getByText('삭제하기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with confirm false', () => {
      it('click onRemove', () => {
        global.confirm = () => false;
        const { getByText } = render(<RecipeWriteContainer />);

        fireEvent.click(getByText('삭제하기'));

        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });
});
