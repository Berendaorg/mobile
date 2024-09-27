import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetch } from '../mocks/fetch'


const URL = 'https://fake-api.example.com/api/v1/';
const mockFetchBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await fetch({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      })
      return { data: result.data }
    } catch (error) {
      const err = error
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: mockFetchBaseQuery({
        baseUrl: URL,
      }),
      tagTypes: ['Listing', 'Developer'],
    endpoints: builder => ({})
})
