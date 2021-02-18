import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  displayName: '',
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
    clearUser(state) {
      return {
        ...state,
        userId: '',
        displayName: '',
      };
    },
  },
});

export const {
  setUser,
  clearUser,
} = actions;

export default reducer;
