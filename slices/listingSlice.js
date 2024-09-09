import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { roomData } from '../data'

import image from "../constants/image";
const fakeApi = 'https://fake-api.example.com/api/v1/';

const initialState = {
  listings:[],
  saved:[],
  selectedListing :  {
    "houseId": "002",
    "image": image.detailimg,
    "address": "456 Elm St, City, Country",
    "price": 180000,
    "propertyType": "apartment",
    "bedrooms": 2,
    "bathrooms": 1,
    "houseSize": 1200,
    "houseAge": 26,
    "location": {
      "coords": {
        "lat": 34.0522,
        "lng": -118.2437
      },
      "address": "456 Elm St, City, Country"
    },
    "description": "Cozy apartment in a convenient location",
    "features": {
      "parking": true,
      "pool": true,
      "gym": false
    },
    "pictures": {
      "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
      "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
      "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
      "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
    },
    "openHouseSchedule": ["2024-04-30", "2024-05-07", "2024-05-14"],
    "offMarket": false,
    "listedDate": "2024-04-17",
    "listedBy": {
      "photoUrl": "https://example.com/photo2.jpg",
      "name": "Jane Smith",
      "verified": true,
      "phone": "+1098765432"
    },
    "listedFor": "sell"
  },
}

export const getListings = createAsyncThunk(
  '/listings/getListings',
  async () => {
    const response = await fetch(`${fakeApi}listings`,{
      method:'GET'
    })
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

export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getListings.fulfilled, (state, action) => {
        return action.payload
      }),
      builder.addCase(getListingsById.fulfilled, (state, action) => {
        return action.payload
      }),
      builder.addCase(getSavedListings.fulfilled, (state, action) => {
        state.saved[0] = action.payload
      }),
      builder.addCase(addSavedListing.fulfilled, (state, action) => {
        state.saved[0] = action.payload
      }),
      builder.addCase(deleteSavedListing.fulfilled, (state, action) => {
        // return noolean
        state.saved[0] = action.payload
      })
    }
})

export const selectlistings = (state) => state.listing.listings
export const selectedListing = (state) => state.listing.listing
export const selectSaved = (state) => state.listing.saved

export default listingSlice.reducer