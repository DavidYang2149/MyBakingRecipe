import React from 'react';

import { UserName, Date, Line } from '../layouts/Recipe';

const RecipeUser = ({ user, created }) => {
  return (
    <>
      <UserName>{user.split('@')[0]}</UserName>
      {' '}
      <Date>{created.substr(0, 10)}</Date>
      <Line />
    </>
  );
};

export default RecipeUser;
