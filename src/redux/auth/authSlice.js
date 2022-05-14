import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setAuthCredentials(state, action) {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    removeToken(state) {
      state.username = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshUser(state, action) {
      console.log(action.payload);
      state.username = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice;
export const { setAuthCredentials, removeToken, refreshUser } =
  authSlice.actions;
