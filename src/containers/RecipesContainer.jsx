import React from 'react';
import { useSelector } from 'react-redux';

import RecipeList from '../components/RecipeList';
import Loading from '../components/Loading';
import { isEmpty } from '../utils/utils';

const RecipesContainer = () => {
  const { recipes: { recipesBook } } = useSelector((state) => ({
    recipes: state.recipes,
  }));

  if (isEmpty(recipesBook.length)) {
    return (
      <Loading />
    );
  }

  return (
    <article>
      <RecipeList recipesBook={recipesBook} />
    </article>
  );
};

export default RecipesContainer;
