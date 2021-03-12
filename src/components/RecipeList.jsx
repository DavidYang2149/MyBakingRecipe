import React from 'react';

import RecipeItem from './RecipeItem';
import { RecipeCards } from '../layouts/Recipes';

const RecipeList = ({ recipesBook }) => {
  if (!Array.isArray(recipesBook)) {
    return (
      <div>Empty</div>
    );
  }

  return (
    <RecipeCards className="card-list">
      {(
        recipesBook.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))
      )}
    </RecipeCards>
  );
};

export default RecipeList;
