import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch } from "../mocks/fetch";

const fakeApi = 'https://fake-api.example.com/api/v1/';

const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const getUser = createAsyncThunk(
    'users/me',
    async () => {
      const response = await fetch(`${fakeApi}users/me`,{
        method:"GET"
      })
      return response.data
    },
  )


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
        return  action.payload
      })
    }
})


export const selectUser = (state) => state.user
    
export default userSlice.reducer;