import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';
import allConditionsState from '../fixtures/allConditionsState';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(allConditionsState));
  });

  const renderApp = ({ path }) => {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  };

  context('with path /', () => {
    it('renders RecipesPage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('마들렌');
    });
  });

  context('with path /notExist', () => {
    it('renders Recipe404Page', () => {
      const { container } = renderApp({ path: '/notExist' });

      expect(container).toHaveTextContent('Recipe is Not Found!');
    });
  });
});
