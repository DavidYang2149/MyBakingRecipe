import React from 'react';
import { useParams } from 'react-router-dom';

import RecipeContainer from '../containers/RecipeContainer';

const RecipePage = ({ params }) => {
  const { id } = params || useParams();

  return (
    <RecipeContainer recipeId={id} />
  );
};

export default RecipePage;
