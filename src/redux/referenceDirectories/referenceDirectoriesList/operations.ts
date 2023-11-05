import { createAsyncThunk } from "@reduxjs/toolkit";
import { getReferenceDirectoriesList } from "../../../api/referenceDirectoriesAPI";

export const referenceDirectoriesListThunk = createAsyncThunk(
  "referenceDirectoriesList/get",
  async () => await getReferenceDirectoriesList()
);
