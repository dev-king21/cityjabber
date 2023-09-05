import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Define your initial state here
  // For example:
  user: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Define your actions and reducers here
    // For example:
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
} = registerSlice.actions;

export default registerSlice.reducer;
