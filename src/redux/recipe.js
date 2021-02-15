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
  ingredients: [],
  newIngredient: { id: 0, ingredient: '', weight: 0 },
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
    setNewIngredient(state, { payload: { fields } }) {
      return {
        ...state,
        ingredients: [fields, ...state.ingredients],
        newIngredient: { id: 0, ingredient: '', weight: 0 },
      };
    },
    changeRecipe(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
    changeIngredient(state, { payload: { name, value } }) {
      const [targetName, targetId] = name.split('-');
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) => {
          return parseInt(ingredient.id, 10) === parseInt(targetId, 10)
            ? { ...ingredient, [targetName]: value }
            : ingredient;
        }),
      };
    },
    changeNewIngredient(state, { payload: { name, value } }) {
      const [targetName, targetId] = name.split('-');
      return {
        ...state,
        newIngredient: { ...state.newIngredient, id: parseInt(targetId, 10), [targetName]: value },
      };
    },
  },
});

export function loadRecipe(id) {
  return async (dispatch) => {
    const recipe = await fetchRecipe(id) || initialState;

    dispatch(actions.setRecipe(recipe));
  };
}

export const {
  setRecipe,
  setNewIngredient,
  changeRecipe,
  changeIngredient,
  changeNewIngredient,
} = actions;

export default reducer;
