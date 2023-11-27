import axios from "axios";
import { TCustomerData } from "../types/CustomerData";

axios.defaults.baseURL = "http://localhost:3004";

export const getCustomers = async () => {
  const response = await axios.get("/customers");
  return response.data;
};

export const getSomeCustomer = async (id: number) => {
  const response = await axios.get(`/customers/${id}`);
  return response.data;
};

export const createNewCustomer = async (data: TCustomerData) => {
  const response = await axios.post("customers", data);
  return response.data;
};
