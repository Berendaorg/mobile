import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { roomData } from '../data'
import { asyncTimeout } from '../util/asyncTimeout';

const fakeApi = 'https://fake-api.example.com/api/v1/';


export const getListings = createAsyncThunk(
  '/listings/getListings',
  async () => {
    const response = await fetch(`${fakeApi}listings`,{
      method:'GET'
    })
    await asyncTimeout(2000);
    return response.data
  }
)

export const getListingsById = createAsyncThunk(
  '/listings/getlistingById',
  async (id) => {
    const response = await fetch(`${fakeApi}listings`,{
      method:'GET',
      params:{
        id
      }
    })
    return response.data
  }
)

export const getSavedListings = createAsyncThunk(
  '/listings/getSavedListings',
  async () => {
    console.log('getSavedListings')
    const response = await fetch(`${fakeApi}listings/saved`,{
      method:'GET'
    })
    await asyncTimeout(2000);
    return response.data
  }
)

export const deleteSavedListing = createAsyncThunk(
  '/listings/deleteSavedListing',
  async (id) => {
    const response = await fetch(`${fakeApi}listings/saved`,{
      method:'DELETE',
      params:{
        id
      }
    })
    return response.data
  }
)

export const addSavedListing = createAsyncThunk(
  '/listings/addSavedListings',
  async () => {
    const response = await fetch(`${fakeApi}listings/saved`,{
      method:'POST'
    })
    return response.data
  }
)

const initialState = {
  listings:[],
  listing :  {},
  saved:[],
  isLoading:true,
}

export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getListings.pending, (state, action) => {
        state.isLoading = true
      }),
      builder.addCase(getListings.fulfilled, (state, action) => {
        state.isLoading=false
        state.listings = action.payload
      }),
      builder.addCase(getListingsById.fulfilled, (state, action) => {
        state.listing = action.payload
      }),
      builder.addCase(getSavedListings.fulfilled, (state, action) => {
        state.isLoading = false
        state.saved[0] = action.payload
      }),
      builder.addCase(getSavedListings.pending, (state, action) => {
        state.isLoading = true
      }),
      builder.addCase(addSavedListing.fulfilled, (state, action) => {
        state.saved.push(action.payload)
      }),
      builder.addCase(deleteSavedListing.fulfilled, (state, action) => {
        // return boolean
        // return action.payload
      })
    }
})

export const selectListings = (state) => state.listing.listings
export const selectListingById = (state, id) => state.listing.listings.find(listing =>listing.id == id)
export const selectSaved = (state) => state.listing.saved
export const selectListingLoading = (state) => state.listing.isLoading

export default listingSlice.reducer