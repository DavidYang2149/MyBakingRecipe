import React from 'react';
import { useSelector } from 'react-redux';

import RecipeList from '../components/RecipeList';

const RecipesContainer = () => {
  const { recipes } = useSelector((state) => ({
    recipes: state.recipes,
  }));
  const { recipesBook } = recipes;

  return (
    <article>
      <RecipeList recipesBook={recipesBook} />
    </article>
  );
};

export default RecipesContainer;
