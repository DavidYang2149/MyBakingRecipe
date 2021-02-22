import { db, auth } from './firebase';

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
  const { id } = await db.collection('recipes').add({
    ...recipe,
  });

  return id;
}

export async function putRecipe(recipe) {
  const userId = auth.currentUser.email;
  const {
    id, title, category, product, ingredients, description,
  } = recipe;
  await db.collection('recipes').doc(id).update({
    userId, title, category, product, ingredients, description,
  });
}
