import { createSlice } from "@reduxjs/toolkit";
import { getOrganizationsThunk } from "./operations";
import { RootState } from "../store";
import { initialState } from "./initialState";

const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrganizationsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.organizations = action.payload;
      })
      .addCase(getOrganizationsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.organizations = [];
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export const organizationsReducer = organizationsSlice.reducer;
export const organizationsSelector = (state: RootState) => state.organizations;
