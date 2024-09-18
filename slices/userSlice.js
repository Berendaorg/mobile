
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch, URL, wait } from "../mocks/fetch";
import { asyncTimeout } from "../util/asyncTimeout";


export const getUser = createAsyncThunk(
    'users/me',
    async () => {
      const response = await fetch(`${URL}users/me`,{
        method:"GET"
      })
      await asyncTimeout(wait)
      return response.data
    },
  )

export const logOut = createAsyncThunk(
  'users/logout',
  async () => {
    try {
      
      await fetch(`${URL}users/logout`,{
        method:"GET"
      })
      await asyncTimeout(wait)
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
  isLoading: false,
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