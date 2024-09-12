import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetch, URL } from '../mocks/fetch';
import { asyncTimeout } from '../util/asyncTimeout';

// const URL = 'https://fake-api.example.com/api/v1/';

export const getDevelopers = createAsyncThunk(
  'developers/getDevelopers',
  async () => {
    const response = await fetch(`${URL}developers`,{
      method: "GET",
    })
    await asyncTimeout(1000);
    return response.data
  },
)

export const getDevelopersById = createAsyncThunk(
  '/developers/getDevelopersById',
  async (id) => {
    const response = await fetch(`${URL}developers`,{
      method: "GET",
      params:{
        id
      }
    })
    return response.data  
  },
)


const initialState = {
  developers:[],
  developer :  {},
  isLoading: true
}

export const developerSlice = createSlice({
    name: 'developer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getDevelopers.fulfilled, (state,action)=>{
        state.isLoading = false
        state.developers = action.payload
      }),
      builder.addCase(getDevelopers.pending, (state,action)=>{
        state.isLoading = true
      }),
      builder.addCase(getDevelopersById.fulfilled, (state,action)=>{
        state.developer = action.payload
      })

    }
})


export const selectdevelopers = (state) => state.developer.developers
export const selectdeveloperById = (state, id) => state.developer.developers.find(dev => dev.id === id)
export const selectDeveloperLoading = (state) => state.developer.isLoading

export default developerSlice.reducer