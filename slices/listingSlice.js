import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

export const listingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => ({
        url: "listings",
        method: "GET",
      }),
      transformResponse: (responseData) => {
        console.log("Raw response:", responseData);
        return responseData.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        console.error("Error response:", response);
        return response.data;
      },
      providesTags: (result, error, arg) => [
        { type: "Listing", id: "LIST" },
        ...(result?.map((listing) => ({ type: "Listing", id: listing.id })) ||
          []),
      ],
    }),
    getListingById: builder.query({
      query: (id) => ({
        url: `listings/${id}`,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: (result, error, id) => [{ type: "Listing", id }],
    }),
    getSavedListings: builder.query({
      query: () => ({
        url: "listings/saved",
        method: "GET",
      }),
      transformResponse: (responseData) => {
        return responseData.data;
      },
      providesTags: ["SavedListing"],
    }),
    deleteSavedListing: builder.mutation({
      query: (id) => ({
        url: "listings/saved",
        method: "DELETE",
        params: { id },
      }),
      invalidatesTags: ["SavedListing"],
    }),
    addSavedListing: builder.mutation({
      query: (id) => ({
        url: "listings/saved",
        method: "POST",
        params: { id },
      }),
      invalidatesTags: ["SavedListing"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetListingsQuery,
  useGetListingByIdQuery,
  useGetSavedListingsQuery,
  useDeleteSavedListingMutation,
  useAddSavedListingMutation,
} = listingsApiSlice;

const initialState = {
  listings: [],
  listing: {},
  saved: [],
  isLoading: true,
};

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        listingsApiSlice.endpoints.getListings.matchPending,
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        listingsApiSlice.endpoints.getListings.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.listings = action.payload;
        }
      )
      .addMatcher(
        listingsApiSlice.endpoints.getListingById.matchPending,
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        listingsApiSlice.endpoints.getListingById.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.listing = action.payload;
        }
      )
      .addMatcher(
        listingsApiSlice.endpoints.getSavedListings.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.saved = action.payload;
        }
      )
      .addMatcher(
        listingsApiSlice.endpoints.addSavedListing.matchFulfilled,
        (state, action) => {
          state.saved.push(action.payload);
        }
      )
      .addMatcher(
        listingsApiSlice.endpoints.deleteSavedListing.matchFulfilled,
        (state, action) => {
          state.saved = state.saved.filter(
            (listing) => listing.id !== action.payload
          );
        }
      );
  },
});

export const selectListings = (state) => state.listing.listings;
export const selectListingById = (state, id) =>
  state.listing.listings.find((listing) => listing.id == id);
export const selectSaved = (state) => state.listing.saved;
export const selectListingLoading = (state) => state.listing.isLoading;

export default listingSlice.reducer;
