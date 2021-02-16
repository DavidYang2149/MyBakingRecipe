import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import HeaderContainer from '../common/HeaderContainer';

describe('HeaderContainer', () => {
  it('renders container', () => {
    render((
      <MemoryRouter>
        <HeaderContainer />
      </MemoryRouter>
    ));
  });
});
