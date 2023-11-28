import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { referenceDirectoriesListThunk } from "./operations";
import { RootState } from "../store";

interface IRDLItem {
  id: number;
  title: string;
  route: string;
}

interface IRDLItemInitialState {
  isLoading: boolean;
  referenceDirectoriesList: Array<IRDLItem>;
  error: string | undefined;
}

const initialState: IRDLItemInitialState = {
  isLoading: false,
  referenceDirectoriesList: [],
  error: "",
};

export const referenceDirectoriesListSlice = createSlice({
  name: "referenceDirectoriesList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(referenceDirectoriesListThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        referenceDirectoriesListThunk.fulfilled,
        (state, action: PayloadAction<Array<IRDLItem>>) => {
          state.isLoading = false;
          state.referenceDirectoriesList = action.payload;
        }
      )
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
