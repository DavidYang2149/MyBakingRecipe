import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  setUser,
  clearUser,
} from '../../redux/user';
import { auth, provider } from '../../services/firebase';
import {
  Header,
  HeaderTitle,
  HeaderUser,
  HeaderButton,
} from '../../layouts/common/Header';
import HomeIcon from '../../layouts/icons/HeaderIcon';

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  const {
    userId,
  } = user;

  const signInWithGoogle = async () => {
    const result = await auth.signInWithPopup(provider);
    // setUser(result.user.email);
    // setUser(result.user.displayName);
    if (result.user && result.user.email) {
      dispatch(setUser({ name: 'userId', value: result.user.email }));
    }
  };

  const signOut = async () => {
    await auth.signOut();
    dispatch(clearUser());
  };
  return (
    <Header>
      <Link to="/">
        {/* Home */}
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
                {userId}
              </HeaderUser>
              <Link to="/recipewrite/0"><HeaderButton type="button">레시피 만들기</HeaderButton></Link>
              <HeaderButton type="button" onClick={signOut}>Logout</HeaderButton>
            </>
          ) : <HeaderButton type="button" onClick={signInWithGoogle}>Sign in</HeaderButton>
      }
    </Header>
  );
};

export default HeaderContainer;
