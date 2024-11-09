import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../../constants/baseURL";

export type TCustomerData = {
  id?: number;
  firstName: string;
  lastName: string;
  code?: number;
  group?: string;
  organization: string;
  contract: string;
  debt: number;
  personalPhone: string;
  workPhone?: string;
  street?: string;
  build?: number;
  city: string;
  comment: string;
};

type TNewCustomer = {
  firstName: string;
  lastName: string;
  code?: number;
  group?: string;
  organization: string;
  contract: string;
  debt: number;
  personalPhone: string;
  workPhone?: string;
  street?: string;
  build?: number;
  city: string;
  comment: string;
};

export const customersApi = createApi({
  reducerPath: "customers",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["customers"],
  endpoints: (builder) => ({
    getCustomers: builder.query<TCustomerData[], void>({
      query: () => ({ url: "/customers" }),
      providesTags: ["customers"],
    }),
    getOneCustomer: builder.query<TCustomerData, number>({
      query: (id) => ({ url: `/customer/:${id}` }),
      providesTags: ["customers"],
    }),
    addCustomer: builder.mutation<TCustomerData, TNewCustomer>({
      query: (newCustomer) => ({
        url: "/customer/create",
        method: "POST",
        body: newCustomer,
      }),
      invalidatesTags: ["customers"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetOneCustomerQuery,
  useAddCustomerMutation,
} = customersApi;
