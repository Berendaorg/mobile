import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const initialState = {
  location: null,
  bedrooms: null,
  bathrooms: null,
  price: null,
  propertyType: null,
  houseAge: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchParams: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSearchParams } = searchSlice.actions;

export const searchApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query({
      query: (searchParams) => ({
        url: "search",
        method: "GET",
        params: searchParams,
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: ["Search"],
    }),
  }),
  overrideExisting: true,
});

export const { useSearchQuery } = searchApiSlice;

export const selectSearchParams = (state) => state.search;

export default searchSlice.reducer;
