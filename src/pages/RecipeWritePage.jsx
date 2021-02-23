import React from 'react';
import { useParams } from 'react-router-dom';

import RecipeWriteContainer from '../containers/RecipeWriteContainer';

const RecipeWritePage = ({ params }) => {
  const { id } = params || useParams();

  return (
    <RecipeWriteContainer recipeId={id} />
  );
};

export default RecipeWritePage;
