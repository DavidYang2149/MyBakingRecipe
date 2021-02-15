import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRecipes } from '../redux/recipes';
import RecipesContainer from '../containers/RecipesContainer';

const RecipesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  });

  return (
    <RecipesContainer />
  );
};

export default RecipesPage;
