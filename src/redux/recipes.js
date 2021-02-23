import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRecipes,
} from '../services/recipes';
import { formatRecipe } from '../utils/utils';

const initialState = {
  recipesBook: [],
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
  },
});

export function loadRecipes() {
  return async (dispatch) => {
    const response = await fetchRecipes();

    if (response) {
      const recipes = response.map((doc) => formatRecipe(doc));
      dispatch(actions.setRecipes(recipes));
    } else {
      dispatch(actions.setRecipes(initialState));
    }
  };
}

export const {
  setRecipes,
} = actions;

export default reducer;
