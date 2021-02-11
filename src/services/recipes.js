import recipes from '../../fixtures/recipes';

export async function fetchRecipe(id) {
  return Promise.resolve(recipes[id - 1]);
}

export async function fetchRecipes() {
  return Promise.resolve(recipes);
}
