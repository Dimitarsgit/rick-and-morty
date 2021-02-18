import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [], user: null, message: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp(state, action) {
      state.message = "";
      if (action.payload.length) {
        const user = state.users.find((u) => u === action.payload);

        if (user) state.message = "Username already taken!";
        if (!user) {
          state.users.push(action.payload);
          state.user = action.payload;
        }
      }

      if (!action.payload.length) {
        state.message = "Username is required!";
      }
    },
    signIn(state, action) {
      state.message = "";
      const user = state.users.find((u) => u === action.payload);

      if (user) state.user = action.payload;
      if (!user) state.message = "User not found!";
    },
    logout(state) {
      state.user = null;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { signUp, signIn, setMessage, logout } = authSlice.actions;
export default authSlice.reducer;
