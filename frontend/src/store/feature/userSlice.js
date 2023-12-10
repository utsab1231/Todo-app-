import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    logoutAction: (state) => {
      state.user = null;
    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
