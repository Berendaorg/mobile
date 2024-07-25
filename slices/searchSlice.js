import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  price:0,
  priceMin:0,
  priceMax:0,
  propertyType:null,
  bedrooms:null,
  bathrooms:null,
  houseSize:null,
  houseAge:null,
  location: {
    coords: {
      lat: null,
      lng: null
        },
    address:null
      },
    }

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload
      console.log(state.price)
    },
    setPriceMin: (state, action) => {
      state.priceMin = action.payload
      console.log(state.priceMin)
    },
    setPriceMax: (state, action) => {
      state.priceMax = action.payload
      console.log(state.priceMax)
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload
      console.log(state.propertyType)
    },
    setBedrooms: (state, action) => {
      state.bedrooms =  action.payload
      console.log(state.bedrooms)
    },
    setBathrooms: (state, action) => {
      state.bathrooms = action.payload
      console.log(state.bathrooms)
    },
    setHouseSize: (state, action) => {
      state.houseSize = action.payload
      console.log(state.houseSize)
    },
    setHouseAge: (state, action) => {
      state.houseAge = action.payload
      console.log(state.houseAge)
    },
    setLocation: (state, action) => {
      console.log("in state")
      state.location.coords = action.payload
      console.log(state.location)
    },
  }
})

// Action creators are generated for each case reducer function
export const { 
  setPrice,
  setPriceMin,
  setPriceMax,
  setBathrooms,
  setBedrooms,
  setLocation,
  setHouseAge
 } = searchSlice.actions

export const selectPrice = (state) => state.search.price
export const selectPriceMin = (state) => state.search.priceMin
export const selectPriceMax = (state) => state.search.priceMax
export const selectLocation = (state) => state.search.location

export const selectedBedrooms = (state) => state.search.bedrooms
export const selectBathrooms = (state) => state.search.bathrooms

export const selectHouseSize = (state) => state.search.houseSize
export const selectHouseAge = (state) => state.search.houseAge

export const selectPropertyType = (state) => state.search.propertyType

export default searchSlice.reducer