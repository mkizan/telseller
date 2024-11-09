import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TOrganizationData = {
  id: number;
  prefix: string;
  title: string;
};

export const organizationsApi = createApi({
  reducerPath: "organizations",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["organizations"],
  endpoints: (builder) => ({
    getOrganizations: builder.query<TOrganizationData[], void>({
      query: () => ({
        url: "/organizations",
        method: "GET",
      }),
      providesTags: ["organizations"],
    }),
  }),
});

export const { useGetOrganizationsQuery } = organizationsApi;
