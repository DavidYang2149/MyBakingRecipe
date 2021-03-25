import React from 'react';
import { useSelector } from 'react-redux';

import RecipeList from '../components/RecipeList';

const RecipesContainer = () => {
  const { recipes: { recipesBook } } = useSelector((state) => ({
    recipes: state.recipes,
  }));

  return (
    <article>
      <RecipeList recipesBook={recipesBook} />
    </article>
  );
};

export default RecipesContainer;
