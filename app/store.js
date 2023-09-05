import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import { UserReducer } from "../utils/UserSlice";

export const store = configureStore({
  reducer: {
    hero: findPlaceSlice,
    User: UserReducer, // UserReducer is a function that returns a slice of state
  },
});
