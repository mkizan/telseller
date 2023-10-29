import { configureStore } from "@reduxjs/toolkit";
import { organizationsReducer } from "./organizations/organizationsSlice";

export const store = configureStore({
  reducer: {
    organizations: organizationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
