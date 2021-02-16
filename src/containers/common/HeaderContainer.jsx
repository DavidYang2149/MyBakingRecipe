import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <h1>My Baking Recipe</h1>
    </nav>
  );
};

export default HeaderContainer;
