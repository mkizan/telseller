import { createSlice } from "@reduxjs/toolkit";
import { addNewCustomerThunk, getCustomersThunk } from "./operations";
import { initialState } from "./initialState";
import { RootState } from "../store";

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomersThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCustomersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addCase(getCustomersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addNewCustomerThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewCustomerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addCase(addNewCustomerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const customersReducer = customersSlice.reducer;
export const customersSelector = (state: RootState) => state.customers;
