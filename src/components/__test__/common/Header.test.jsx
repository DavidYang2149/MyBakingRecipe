import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Header from '../../common/Header';

describe('Header', () => {
  const signInWithGoogle = jest.fn();
  const signOut = jest.fn();

  const renderHeader = (user) => render((
    <MemoryRouter>
      <Header
        userId={user}
        signInWithGoogle={signInWithGoogle}
        signOut={signOut}
      />
    </MemoryRouter>
  ));

  context('with userId', () => {
    it('render Sign in', () => {
      const userId = 'test';
      const { container } = renderHeader(userId);

      expect(container).toHaveTextContent('Logout');
    });
  });

  context('without userId', () => {
    it('render Logout', () => {
      const userId = '';
      const { container } = renderHeader(userId);

      expect(container).toHaveTextContent('Sign in');
    });
  });
});
