import { configureStore } from "@reduxjs/toolkit";
// import { organizationsReducer } from "./organizations/organizationsSlice";
import { referenceDirectoriesListReducer } from "./referenceDirectoriesList/referenceDirectoriesListSlice";
import { navbarReducer } from "./navbar/navbarSlice";
import { customersReducer } from "./customers/customersSlice";
import { organizationsApi } from "./organizations/organiationsApi";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    referenceDirectoriesList: referenceDirectoriesListReducer,
    customers: customersReducer,
    [organizationsApi.reducerPath]: organizationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(organizationsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
