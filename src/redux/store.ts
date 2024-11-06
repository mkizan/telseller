import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./navbar/navbarSlice";
import { customersReducer } from "./customers/customersSlice";
import { organizationsApi } from "./organizations/organiationsApi";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    customers: customersReducer,
    [organizationsApi.reducerPath]: organizationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(organizationsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
