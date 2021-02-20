export const formatRecipe = (recipe) => {
  return {
    ...recipe.data(),
    id: recipe.id,
  };
};

export const todo = () => {
  // TODO: remove when over 2 functions.
};
