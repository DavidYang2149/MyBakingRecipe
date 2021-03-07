import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  RecipeCards,
  RecipeCard,
} from '../layouts/Recipes';

const RecipesContainer = () => {
  const { recipes } = useSelector((state) => ({
    recipes: state.recipes,
  }));
  const { recipesBook } = recipes;

  return (
    <article>
      <RecipeCards className="card-list">
        {(
          recipesBook.map((recipe) => (
            <RecipeCard key={recipe.id} className="card-item">
              <Link to={`/recipe/${recipe.id}`}>
                <figure className="card-image">
                  <img src="images/cookie.jpeg" alt="recipe" />
                </figure>
                <div className="card-desc">
                  {recipe.title}
                </div>
              </Link>
            </RecipeCard>
          ))
        )}
      </RecipeCards>
    </article>
  );
};

export default RecipesContainer;
