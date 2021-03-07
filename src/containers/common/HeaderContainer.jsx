import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setUser,
  clearUser,
} from '../../redux/user';
import { auth, provider } from '../../services/firebase';
import Header from '../../components/common/Header';

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
    if (result.user && result.user.email) {
      dispatch(setUser({ name: 'userId', value: result.user.email }));
    }
  };

  const signOut = async () => {
    await auth.signOut();
    dispatch(clearUser());
  };
  return (
    <Header
      userId={userId}
      signInWithGoogle={signInWithGoogle}
      signOut={signOut}
    />
  );
};

export default HeaderContainer;
