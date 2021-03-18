import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRecipes,
} from '../services/recipes';
import {
  formatRecipe,
  isEmpty,
  RECIPE_COUNT,
} from '../utils/utils';

const initialState = {
  recipesBook: [],
  lastRecipe: { recipe: null, isLast: false },
};

const { actions, reducer } = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes(state, { payload }) {
      return {
        ...state,
        recipesBook: [...payload],
      };
    },
    setLastRecipe(state, { payload: { name, value } }) {
      return {
        ...state,
        lastRecipe: { ...state.lastRecipe, [name]: value },
      };
    },
    addRecipes(state, { payload }) {
      return {
        ...state,
        recipesBook: [...state.recipesBook, ...payload],
      };
    },
  },
});

export function loadRecipes() {
  return async (dispatch, getState) => {
    const { recipe, isLast } = getState().recipes.lastRecipe;

    if (isLast) { return; }

    const response = await fetchRecipes(recipe);

    if (isEmpty(response)) {
      dispatch(actions.setRecipes(initialState));
      return;
    }

    const recipes = response.map((doc) => formatRecipe(doc));
    dispatch(actions.addRecipes(recipes));
    dispatch(actions.setLastRecipe({ name: 'recipe', value: recipes[recipes.length - 1] }));
    dispatch(actions.setLastRecipe({ name: 'isLast', value: false }));

    if (recipes.length < RECIPE_COUNT) {
      dispatch(actions.setLastRecipe({ name: 'isLast', value: true }));
    }
  };
}

export const {
  setRecipes,
} = actions;

export default reducer;
