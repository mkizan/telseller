import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrganizations } from "../../api/organizationsApi";

export const getOrganizationsThunk = createAsyncThunk(
  "oranizations/get",
  async () => await getOrganizations()
);
