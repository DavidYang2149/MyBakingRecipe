import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import recipes from '../../../fixtures/recipes';
import allConditionsState from '../../../fixtures/allConditionsState';
import RecipeContainer from '../RecipeContainer';

jest.mock('react-redux');
jest.mock('../../services/recipes');

describe('RecipeContainer', () => {
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
      render(<RecipeContainer />);
    });

    context('with exist recipe', () => {
      useSelector.mockImplementation((selector) => selector({
        ...allConditionsState,
        recipe: recipes[0],
      }));

      it('click onSubmit', () => {
        const { getByText } = render(<RecipeContainer />);

        fireEvent.click(getByText('수정하기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with confirm true', () => {
      it('click onRemove', () => {
        global.confirm = () => true;
        const { getByText } = render(<RecipeContainer />);

        fireEvent.click(getByText('삭제하기'));

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with confirm false', () => {
      it('click onRemove', () => {
        global.confirm = () => false;
        const { getByText } = render(<RecipeContainer />);

        fireEvent.click(getByText('삭제하기'));

        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });
});
