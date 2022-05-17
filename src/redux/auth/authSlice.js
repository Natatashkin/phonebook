import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'token',
  initialState: null,
  reducers: {
    setAuthCredentials(state, action) {
      state.token = action.payload.token;
    },
    removeToken(state) {
      state.token = null;
    },
  },
});

export default authSlice;
export const { setAuthCredentials, removeToken } = authSlice.actions;

export const getToken = state => state.auth.token;
