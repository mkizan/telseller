import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./navbar/navbarSlice";
import { organizationsApi } from "./api/organiationsApi";
import { customersApi } from "./api/customersApi";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [organizationsApi.reducerPath]: organizationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(organizationsApi.middleware)
      .concat(customersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
