import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

// import recipes from '../../../fixtures/recipes';
import allConditionsState from '../../../fixtures/allConditionsState';
import ReipcesPage from '../RecipesPage';

jest.mock('react-redux');
jest.mock('../../services/recipes');

describe('ReipcesPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      ...allConditionsState,
      // recipes: recipes,
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
