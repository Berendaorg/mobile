
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { listingData, roomData } from '../data'
import { asyncTimeout } from '../util/asyncTimeout';
import { fetch,URL, wait } from '../mocks/fetch';


export const getListings = createAsyncThunk(
  '/listings/getListings',
  async () => {
    const response = await fetch(`${URL}listings`,{
      method:'GET'
    })
    await asyncTimeout(wait);
    return response.data
  }
)

export const getListingsById = createAsyncThunk(
  '/listings/getlistingById',
  async (id) => {
    const response = await fetch(`${URL}listings`,{
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
    const response = await fetch(`${URL}listings/saved`,{
      method:'GET'
    })
    await asyncTimeout(wait);
    return response.data
  }
)

export const deleteSavedListing = createAsyncThunk(
  '/listings/deleteSavedListing',
  async (id) => {
    const response = await fetch(`${URL}listings/saved`,{
      method:'DELETE',
      params:{ 
        id
      }
    })
    console.log('delete')
    // @deprecated: will be replace by actual response from the backend
    return response.data
  }
)

export const addSavedListing = createAsyncThunk(
  '/listings/addSavedListings',
  async (id) => {
    const response = await fetch(`${URL}listings/saved`,{
      method:'POST',
      params:{
        id
      }
    })
    // @deprecated: will be replace by actual response from the backend
    return id
  }
)

const initialState = {
  listings:[],
  listing : {},
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
        console.log("in rtk")
        state.listings = action.payload
      }),
      builder.addCase(getListingsById.fulfilled, (state, action) => {
        state.listing = action.payload
      }),
      builder.addCase(getSavedListings.fulfilled, (state, action) => {
        state.isLoading = false
        state.saved = action.payload
      }),
      builder.addCase(getSavedListings.pending, (state, action) => {
        state.isLoading = true
      }),
      builder.addCase(addSavedListing.fulfilled, (state, action) => {
        // copy state
        let saved = state.saved
        // make to set, to rmeove duplicates
        // push 
        const newSaved = new Set(saved.push(action.payload))
        // add to state
        state.saved = newSaved
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