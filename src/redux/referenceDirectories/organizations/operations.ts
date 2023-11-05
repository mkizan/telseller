import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOrganizations } from "../../../api/organizationsAPI";

export const getOrganizationsThunk = createAsyncThunk(
  "organizations/get",
  async () => await getOrganizations()
);
