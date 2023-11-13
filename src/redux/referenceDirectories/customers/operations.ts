import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCustomers, getSomeCustomer } from "../../../api/customersAPI";

export const getCustomersThunk = createAsyncThunk(
  "customers/get",
  async () => await getCustomers()
);

export const getCustomerThunk = createAsyncThunk(
  "customers/getOne",
  async (id: number) => await getSomeCustomer(id)
);
