import { db } from './firebase';

import recipes from '../../fixtures/recipes';

export async function fetchRecipe(id) {
  return Promise.resolve(recipes[id - 1]);
}

export async function fetchRecipes() {
  const recipesRef = db.collection('recipes');
  const snapshot = await recipesRef.get();

  return snapshot.docs;
}

export async function postRecipe(recipe) {
  const { id } = await db.collection('recipes').add({
    ...recipe,
  });

  return id;
}

export async function putRecipe() {
  return Promise.resolve({});
}
