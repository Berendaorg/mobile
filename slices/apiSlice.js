import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetch, axiosInstance } from '../mocks/fetch'

// Define the base query
export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const URL = 'https://fake-api.example.com/api/v1/';

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: axiosBaseQuery({
        baseUrl: URL,
      }),
    tagTypes: ['Listing', 'Developer'],
    endpoints: builder => ({})
})
