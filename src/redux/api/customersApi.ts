import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../../constants/baseURL";

export type TCustomerData = {
  id?: number | string;
  firstName: string;
  lastName: string;
  code?: number;
  group?: string;
  organization?: string;
  contract: string;
  debt: number;
  personalPhone: string;
  workPhone?: string;
  street: string;
  build: number;
  apartment?: string;
  city: string;
  comment: string;
};

type TNewCustomer = {
  firstName: string;
  lastName: string;
  code?: number;
  group?: string;
  organization?: string;
  contract: string;
  debt: number;
  personalPhone: string;
  workPhone?: string;
  street: string;
  build: number;
  apartment?: string;
  city: string;
  comment: string;
};

export const customersApi = createApi({
  reducerPath: "customers",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["customers"],
  endpoints: (builder) => ({
    getCustomers: builder.query<TCustomerData[], void>({
      query: () => ({ url: "/customers", method: "GET" }),
      providesTags: ["customers"],
    }),
    getOneCustomer: builder.query<TCustomerData, number>({
      query: (id) => ({ url: `/customer/${id}`, method: "GET" }),
      providesTags: ["customers"],
    }),
    addCustomer: builder.mutation<TCustomerData, TNewCustomer>({
      query: (newCustomer) => ({
        url: "/customers",
        method: "POST",
        body: newCustomer,
      }),
      invalidatesTags: ["customers"],
    }),
    editCustomer: builder.mutation<
      void,
      Partial<TNewCustomer> & { id: number | string }
    >({
      query: ({ id, ...data }) => ({
        url: `/customers/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["customers"],
    }),
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["customers"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetOneCustomerQuery,
  useAddCustomerMutation,
  useEditCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
