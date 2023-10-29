import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getOrganizationsThunk } from "./operations";

interface IOrganization {
  id: number;
  prefix: string;
  title: string;
}

interface IOrganizationsInitialState {
  isLoading: boolean;
  organizations: Array<IOrganization>;
  error: string | undefined;
}

const initialState: IOrganizationsInitialState = {
  isLoading: false,
  organizations: [],
  error: "",
};

const organizationsSlice = createSlice({
  name: "organizations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOrganizationsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getOrganizationsThunk.fulfilled,
        (state, action: PayloadAction<Array<IOrganization>>) => {
          state.isLoading = false;
          state.organizations = action.payload;
        }
      )
      .addCase(getOrganizationsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.organizations = [];
        state.error = action.error.message;
      });
  },
  reducers: {},
});

export const organizationsReducer = organizationsSlice.reducer;
