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
    const recipes = response.map((doc) => formatRecipe(doc));

    dispatch(actions.setRecipes(recipes));
  };
}

export const {
  setRecipes,
} = actions;

export default reducer;
