import { db, auth } from './firebase';

import {
  isMatch,
} from '../utils/utils';

export async function fetchRecipe(id) {
  const recipesRef = db.collection('recipes');
  const recipe = recipesRef.doc(id).get();
  return recipe;
}

export async function fetchRecipes() {
  const recipesRef = db.collection('recipes');
  const snapshot = await recipesRef.get();

  return snapshot.docs;
}

export async function postRecipe(recipe) {
  const userId = auth.currentUser.email;
  const { id } = await db.collection('recipes').add({
    ...recipe,
    userId,
  });

  return id;
}

export async function updateRecipe(recipe) {
  const userId = auth.currentUser.email;
  const {
    id, title, category, product, ingredients, description,
  } = recipe;
  await db.collection('recipes').doc(id).update({
    userId, title, category, product, ingredients, description,
  });
}

export async function deleteRecipe({ id, userId }) {
  if (isMatch(userId)(auth.currentUser.email)) {
    await db.collection('recipes').doc(id).delete();
  }
}
