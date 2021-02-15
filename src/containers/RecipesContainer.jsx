import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecipesContainer = () => {
  const { recipes } = useSelector((state) => ({
    recipes: state.recipes,
  }));

  return (
    <article>
      <ul>
        {recipes && (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to="/recipe"><button type="button">{recipe.title}</button></Link>
            </li>
          ))
        )}
      </ul>
    </article>
  );
};

export default RecipesContainer;
