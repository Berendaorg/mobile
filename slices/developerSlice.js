
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetch, URL, wait } from '../mocks/fetch';
import { asyncTimeout } from '../util/asyncTimeout';

import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit/react";
import { apiSlice } from "./apiSlice";


const developerAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
})

const initialState = developerAdapter.getInitialState()

export const developersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getDevelopers: builder.query({
          query: () => '/developers',
        providesTags: (result, error, arg) => [
              { type: 'Developer', id: "LIST" },
              ...result.ids.map(id => ({ type: 'Developer', id }))
          ],
          invalidatesTags: ['Developer'],
      }),
      // getDevelopersById: builder.query({
      //     query: id => `/developer/${id}`,
      //     providesTags: (result, error, arg) => [
      //         ...result.ids.map(id => ({ type: 'Post', id }))
      //     ]
      // }),
      overrideExisting: true
  })
})

// Creates memoized selector

export const {
  useGetDevelopersQuery,
  useGetDevelopersByIdQuery,
} = developersApiSlice

// returns the query result object
export const selectDevelopersResult = developersApiSlice.endpoints.getDevelopers.select()

const selectDevelopersData = createSelector(
  selectDevelopersResult,
  developersResult => developersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllDevelopers,
  selectById: selectDeveloperById,
  selectIds: selectDeveloperIds
  // Pass in a selector that returns the developers slice of state
} = developerAdapter.getSelectors(state => selectDevelopersData(state) ?? initialState)