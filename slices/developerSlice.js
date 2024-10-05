import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const developerAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = developerAdapter.getInitialState();

export const developersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDevelopers: builder.query({
      query: () => ({
        url: "developers",
        method: "GET",
      }),
      transformResponse: (responseData) => {
        // Extract the inner data array
        return responseData.data;
      },
      providesTags: (result, error, arg) => [
        { type: "Developer", id: "LIST" },
        ...(result?.map((developer) => ({
          type: "Developer",
          id: developer.id,
        })) || []),
      ],
    }),
  }),
  overrideExisting: true,
});

export const { useGetDevelopersQuery } = developersApiSlice;

// returns the query result object
export const selectDevelopersResult =
  developersApiSlice.endpoints.getDevelopers.select();

const selectDevelopersData = createSelector(
  selectDevelopersResult,
  (developersResult) => developersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllDevelopers,
  selectById: selectDeveloperById,
  selectIds: selectDeveloperIds,
  // Pass in a selector that returns the developers slice of state
} = developerAdapter.getSelectors(
  (state) => selectDevelopersData(state) ?? initialState
);
