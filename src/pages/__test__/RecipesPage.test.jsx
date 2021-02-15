import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import allConditionsState from '../../../fixtures/allConditionsState';
import ReipcesPage from '../RecipesPage';

jest.mock('react-redux');
jest.mock('../../services/recipes');

describe('ReipcesPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      ...allConditionsState,
    }));
  });

  it('render Page', () => {
    const { container } = render((
      <MemoryRouter>
        <ReipcesPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마들렌');
  });
});
