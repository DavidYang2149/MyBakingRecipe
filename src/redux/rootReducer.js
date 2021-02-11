import { combineReducers } from '@reduxjs/toolkit';

import recipeReducer from './recipe';

const rootReducer = combineReducers({
  recipe: recipeReducer,
});

export default rootReducer;
