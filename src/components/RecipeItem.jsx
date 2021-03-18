import React from 'react';
import { Link } from 'react-router-dom';

import { RecipeCard } from '../layouts/Recipes';
import { isEmpty } from '../utils/utils';

const RecipeItem = ({ recipe }) => {
  if (isEmpty(recipe)) {
    return false;
  }

  return (
    <RecipeCard className="card-item">
      <Link to={`/recipe/${recipe.id}`}>
        <figure className="card-image">
          <img src="images/cookie.jpeg" alt="recipe" />
        </figure>
        <div className="card-desc">
          {recipe.title}
        </div>
        <div className="card-desc">
          {recipe.created.substr(0, 10)}
        </div>
      </Link>
    </RecipeCard>
  );
};

export default RecipeItem;
