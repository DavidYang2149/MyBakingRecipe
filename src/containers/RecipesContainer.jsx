import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecipesContainer = () => {
  const { recipes } = useSelector((state) => ({
    recipes: state.recipes,
  }));
  const { recipesBook } = recipes;

  return (
    <article>
      <ul>
        {(
          recipesBook.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}><button type="button">{recipe.title}</button></Link>
            </li>
          ))
        )}
      </ul>
    </article>
  );
};

export default RecipesContainer;
