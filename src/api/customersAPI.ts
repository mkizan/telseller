import axios from "axios";
import { TCustomerData } from "../redux/types/CustomerData";

axios.defaults.baseURL = "http://localhost:3004";

export const getCustomers = async () => {
  try {
    const response = await axios.get("/customers");
    return response.data;
  } catch (error: unknown) {
    return error;
  }
};

export const getSomeCustomer = async (id: number) => {
  try {
    const response = await axios.get(`/customers/${id}`);
    return response.data;
  } catch (error: unknown) {
    return error;
  }
};

export const addNewCustomer = async (data: TCustomerData) => {
  try {
    const response = await axios.post("customers", data);
    return response.data;
  } catch (error: unknown) {
    return error;
  }
};
