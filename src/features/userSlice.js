import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Exports actions
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user

// Exports reducer
export default userSlice.reducer;
