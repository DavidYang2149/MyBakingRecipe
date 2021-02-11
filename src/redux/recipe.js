import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRecipe,
} from '../services/recipes';

const initialState = {
  id: 0,
  userId: '',
  title: '',
  category: 0,
  product: 0,
  ingredients: [
    { id: 1, ingredient: '', weight: 0 },
  ],
  description: '',
};

const { actions, reducer } = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    changeRecipe(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
    changeIngredient(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
  },
});

export function loadRecipe(id) {
  return async (dispatch) => {
    const recipe = await fetchRecipe(id);

    dispatch(actions.setRecipe(recipe));
  };
}

export const {
  setRecipe,
  changeRecipe,
  changeIngredient,
} = actions;

export default reducer;
