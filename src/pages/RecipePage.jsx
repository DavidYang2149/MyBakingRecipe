import React from 'react';
import { useParams } from 'react-router-dom';

import RecipeWriteContainer from '../containers/RecipeWriteContainer';

const RecipePage = ({ params }) => {
  const { id } = params || useParams();

  return (
    <RecipeWriteContainer recipeId={id} />
  );
};

export default RecipePage;
