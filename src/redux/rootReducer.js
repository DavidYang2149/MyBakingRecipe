import { combineReducers } from '@reduxjs/toolkit';

import recipeReducer from './recipe';
import recipesReducer from './recipes';

const rootReducer = combineReducers({
  recipe: recipeReducer,
  recipes: recipesReducer,
});

export default rootReducer;
