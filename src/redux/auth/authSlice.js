import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        return state;
      })
      .addCase(login.fulfilled, (state, action) => {
        return state;
      })
      .addCase(logout.fulfilled, (state, action) => {
        return state;
      });
  },
});

export const authReducer = authSlice.reducer;
