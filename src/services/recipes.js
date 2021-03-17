import { db, auth, fireStore } from './firebase';

import {
  isMatch,
  isNotEmpty,
} from '../utils/utils';

const fieldValue = fireStore.FieldValue;

export async function fetchRecipe(id) {
  const recipesRef = db.collection('recipes');
  const recipe = recipesRef.doc(id).get();
  return recipe;
}

export async function fetchRecipes() {
  const recipesRef = db.collection('recipes');
  const snapshot = await recipesRef.orderBy('created', 'desc').get();

  return snapshot.docs;
}

export async function postRecipe(recipe) {
  const user = auth.currentUser;
  if (isNotEmpty(user)) {
    const userId = user.email;
    const { id } = await db.collection('recipes').add({
      ...recipe,
      userId,
      created: fieldValue.serverTimestamp(),
      updated: fieldValue.serverTimestamp(),
    });

    return id;
  }
  return null;
}

export async function updateRecipe(recipe) {
  const user = auth.currentUser;
  if (isNotEmpty(user)) {
    const userId = user.email;
    const {
      id, title, category, product, ingredients, description,
    } = recipe;
    await db.collection('recipes').doc(id).update({
      userId,
      title,
      category,
      product,
      ingredients,
      description,
      updated: fieldValue.serverTimestamp(),
    });
  }
}

export async function deleteRecipe({ id, userId }) {
  const user = auth.currentUser;

  if (isNotEmpty(user) && isMatch(userId)(user.email)) {
    await db.collection('recipes').doc(id).delete();
  }
}
