import { createSlice } from "@reduxjs/toolkit";
import { referenceDirectoriesListThunk } from "./operations";
import { RootState } from "../store";
import { initialState } from "./initialState";

export const referenceDirectoriesListSlice = createSlice({
  name: "referenceDirectoriesList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(referenceDirectoriesListThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(referenceDirectoriesListThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.referenceDirectoriesList = action.payload;
      })
      .addCase(referenceDirectoriesListThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.referenceDirectoriesList = [];
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export const referenceDirectoriesListReducer =
  referenceDirectoriesListSlice.reducer;
export const referenceDirectoriesListSelector = (state: RootState) =>
  state.referenceDirectoriesList;
