import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetch } from '../mocks/fetch';


const fakeApi = 'https://fake-api.example.com/api/v1/';

const initialState = {
    developers:[],
    developer :  {},
}

export const getDevelopers = createAsyncThunk(
  'developers/getDevelopers',
  async () => {
    const response = await fetch(`${fakeApi}developers`,{
      method: "GET",
    })
    return response.data
  },
)

export const getDevelopersById = createAsyncThunk(
  '/developers/getDevelopersById',
  async (id) => {
    const response = await fetch(`${fakeApi}developers`,{
      method: "GET",
      params:{
        id
      }
    })
    return response.data  
  },
)

export const developerSlice = createSlice({
    name: 'developer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getDevelopers.fulfilled, (state,action)=>{
        state.developers = action.payload
      }),
      builder.addCase(getDevelopersById.fulfilled, (state,action)=>{
        state.developer = action.payload
      })

    }
})


export const selectdevelopers = (state) => state.developer.developers
export const selectdeveloper = (state) => state.developer.developers

export default developerSlice.reducer