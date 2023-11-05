import { configureStore } from "@reduxjs/toolkit";
import { organizationsReducer } from "./referenceDirectories/organizations/organizationsSlice";
import { referenceDirectoriesListReducer } from "./referenceDirectories/referenceDirectoriesList/referenceDirectoriesListSlice";
import { navbarReducer } from "./navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    referenceDirectoriesList: referenceDirectoriesListReducer,
    organizations: organizationsReducer,
    navbar: navbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
