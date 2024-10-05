import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

export const locationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => ({
        url: "locations",
        method: "GET",
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: ["Location"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetLocationsQuery } = locationsApiSlice;

const initialState = {
  locations: [],
  isLoading: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        locationsApiSlice.endpoints.getLocations.matchPending,
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        locationsApiSlice.endpoints.getLocations.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.locations = action.payload;
        }
      );
  },
});

export const selectLocations = (state) => state.location.locations;
export const selectLocationLoading = (state) => state.location.isLoading;

export default locationSlice.reducer;
