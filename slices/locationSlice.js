import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetch, URL } from '../mocks/fetch';
import { asyncTimeout } from '../util/asyncTimeout';

    
export const getlocations = createAsyncThunk(
  'locations/getlocations',
  async () => {
    const response = await fetch(`${URL}locations`,{
      method: "GET",
    })
    await asyncTimeout(1000);
    return response.data
  },
)

export const getlocationsById = createAsyncThunk(
  '/locations/getlocationsById',
  async (id) => {
    const response = await fetch(`${URL}locations`,{
      method: "GET",
      params:{
        id
      }
    })
    return response.data  
  },
)


const initialState = {
  locations:[],
  location :  {},
  isLoading: true
}

export const locationslice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getlocations.fulfilled, (state,action)=>{
        state.isLoading = false
        state.locations = action.payload
      }),
      builder.addCase(getlocations.pending, (state,action)=>{
        state.isLoading = true
      }),
      builder.addCase(getlocationsById.pending, (state,action)=>{
        state.isLoading = true
      })
      builder.addCase(getlocationsById.fulfilled, (state,action)=>{
        state.developer = action.payload
      })

    }
})


export const selectLocations = (state) => state.location.locations
export const selectLocationById = (state, id) => state.location.locations.find(dev => dev.id === id)
export const selectLocationLoading = (state) => state.location.isLoading

export default locationslice.reducer