import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./navbar/navbarSlice";
import { organizationsApi } from "./api/organiationsApi";
import { customersApi } from "./api/customersApi";
import { setupListeners } from "@reduxjs/toolkit/query";

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

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
