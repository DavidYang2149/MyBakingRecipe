import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import RecipeWriteContainer from '../containers/RecipeWriteContainer';
import { loadRecipe } from '../redux/recipe';

const RecipeWritePage = ({ params }) => {
  const dispatch = useDispatch();
  const { id } = params || useParams();

  useEffect(() => {
    dispatch(loadRecipe(id));
  }, [id]);

  return (
    <RecipeWriteContainer />
  );
};

export default RecipeWritePage;
