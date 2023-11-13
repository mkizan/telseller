import { configureStore } from "@reduxjs/toolkit";
import { organizationsReducer } from "./referenceDirectories/organizations/organizationsSlice";
import { referenceDirectoriesListReducer } from "./referenceDirectories/referenceDirectoriesList/referenceDirectoriesListSlice";
import { navbarReducer } from "./navbar/navbarSlice";
import { customersReducer } from "./referenceDirectories/customers/customersSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    referenceDirectoriesList: referenceDirectoriesListReducer,
    organizations: organizationsReducer,
    customers: customersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
