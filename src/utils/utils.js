export const formatRecipe = (recipe) => {
  return {
    ...recipe.data(),
    id: recipe.id,
  };
};

export const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  return false;
};

export const isNotEmpty = (value) => {
  return !isEmpty(value);
};

export const isMatch = (left) => (right) => {
  if (left === right) {
    return true;
  }
  return false;
};

export const isNotMatch = (left) => (right) => {
  return !isMatch(left)(right);
};
