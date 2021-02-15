import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRecipes,
} from '../services/recipes';

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
    const recipes = await fetchRecipes();

    dispatch(actions.setRecipes(recipes));
  };
}

export const {
  setRecipes,
} = actions;

export default reducer;
