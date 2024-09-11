import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch } from "../mocks/fetch";
import { asyncTimeout } from "../util/asyncTimeout";

const fakeApi = 'https://fake-api.example.com/api/v1/';

export const getUser = createAsyncThunk(
    'users/me',
    async () => {
      const response = await fetch(`${fakeApi}users/me`,{
        method:"GET"
      })
      await asyncTimeout(3000)
      return response.data
    },
  )

export const logOut = createAsyncThunk(
  'users/logout',
  async () => {
    try {
      
      await fetch(`${fakeApi}users/logout`,{
        method:"GET"
      })
      await asyncTimeout(3000)
      return 
    } 
  catch (error) {
    console.log(error)      
    }
  },
)

const initialState = {
  user:{
  firstName:"",
  lastName:"",
  email:"",
  phoneNumber:"",
  },
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  isLoggedIn: false,
  isLoading: true,
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true
      // return  action.payload
      }),
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.user =  action.payload
      }),
    builder.addCase(logOut.pending, (state,action) => {
        state.isLoading = true
      })
    builder.addCase(logOut.fulfilled, (state,action) => {
      state.isLoading = false
      state.isLoggedIn = false
      state.user = null
    })
  }})

export const selectUser = (state) => state.user.user
export const selectUserLoading = (state) => state.user.isLoading
export const selectUserLoggedIn = (state) => state.user.isLoggedIn
export default userSlice.reducer;