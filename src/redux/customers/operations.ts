import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewCustomer,
  getCustomers,
  getSomeCustomer,
} from "../../api/customersAPI";
import { TCustomerData } from "../../types/CustomerData";

export const getCustomersThunk = createAsyncThunk(
  "customers/get",
  async () => await getCustomers()
);

export const getCustomerThunk = createAsyncThunk(
  "customers/getOne",
  async (id: number) => await getSomeCustomer(id)
);

export const addNewCustomerThunk = createAsyncThunk(
  "customers/add",
  async (data: TCustomerData) => await addNewCustomer(data)
);
