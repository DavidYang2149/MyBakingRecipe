export async function fetchRecipe(id) {
  if (id === 0) {
    return false;
  }
  return Promise.resolve({});
}

export async function fetchRecipes() {
  return Promise.resolve([]);
}

export async function postRecipe() {
  return Promise.resolve({});
}

export async function putRecipe() {
  return Promise.resolve({});
}
