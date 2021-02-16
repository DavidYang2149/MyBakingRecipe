import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <h1>My Baking Recipe</h1>
      <Link to="/signin">Sign in</Link>
      <Link to="/signup">Sign up</Link>
      <button type="button">Logout</button>
    </nav>
  );
};

export default HeaderContainer;
