import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  HeaderNav,
  HeaderTitle,
  HeaderUser,
  HeaderButton,
  ButtonLines,
} from '../../layouts/common/Header';
import {
  HomeIcon,
  UserIcon,
} from '../../layouts/icons/HeaderIcon';
import { getFirstSplit } from '../../utils/utils';

const Header = ({ userId, signInWithGoogle, signOut }) => {
  const history = useHistory();

  const onClickNewRecipe = () => {
    history.push('/recipewrite/0');
  };

  const onClickChat = () => {
    history.push('/chat');
  };

  return (
    <HeaderNav>
      <div>
        <Link to="/">
          <HomeIcon src="images/home.svg" alt="Home" />
        </Link>
        <Link to="/">
          <HeaderTitle>My Baking Recipe</HeaderTitle>
        </Link>
      </div>
      {
        userId
          ? (
            <ButtonLines>
              <HeaderUser>
                <Link to="/">
                  {getFirstSplit(userId)('@')}
                </Link>
              </HeaderUser>
              <HeaderButton type="button" onClick={onClickChat}>
                Chat
              </HeaderButton>
              <HeaderButton type="button" onClick={onClickNewRecipe}>
                New Recipe
              </HeaderButton>
              <HeaderButton type="button" onClick={signOut}>Logout</HeaderButton>
              <UserIcon src="images/chat-bubble-dots.svg" onClick={onClickChat} alt="Chat" />
              <UserIcon src="images/new-recipe.svg" onClick={onClickNewRecipe} alt="New Recipe" />
              <UserIcon src="images/close-outline.svg" onClick={signOut} alt="Logout" />
            </ButtonLines>
          ) : (
            <>
              <HeaderButton type="button" onClick={signInWithGoogle}>Sign in (Google)</HeaderButton>
              <UserIcon src="images/login-google.svg" onClick={signInWithGoogle} alt="singIn" />
            </>
          )
      }
    </HeaderNav>
  );
};

export default React.memo(Header);
