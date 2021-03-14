import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeaderNav,
  HeaderTitle,
  HeaderUser,
  HeaderButton,
} from '../../layouts/common/Header';
import HomeIcon from '../../layouts/icons/HeaderIcon';

const Header = ({ userId, signInWithGoogle, signOut }) => {
  return (
    <HeaderNav>
      <Link to="/">
        <HomeIcon src="images/home.svg" alt="Home" />
      </Link>
      <Link to="/">
        <HeaderTitle>My Baking Recipe</HeaderTitle>
      </Link>
      {
        userId
          ? (
            <>
              <HeaderUser>
                {userId.split('@')[0]}
              </HeaderUser>
              <Link to="/recipewrite/0"><HeaderButton type="button">New Recipe</HeaderButton></Link>
              <HeaderButton type="button" onClick={signOut}>Logout</HeaderButton>
            </>
          ) : <HeaderButton type="button" onClick={signInWithGoogle}>Sign in</HeaderButton>
      }
    </HeaderNav>
  );
};

export default Header;
