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
      return response.data
    },
  )

export const logOut = createAsyncThunk(
  'users/logout',
  async () => {
    const response = await fetch(`${fakeApi}users/logout`,{
      method:"GET"
    })
    await asyncTimeout(1000)
    return response.data
  },
)

const initialState = {
  firstName:"",
  lastName:"",
  email:"",
  phoneNumber:"",
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  isLoading: true,
  error: null,
  isLoggedIn: false,
}


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isLoggedIn = true
      return  action.payload
      }),
    builder.addCase(logOut.fulfilled, (state,action) => {
      state.isLoading = false
      state.isLoggedIn = true
      return {}
    })
    // builder.addCase(logOut.pending, (state,action) => {
    //   state.isLoading = true
    //   // return {}
    // })
    // },
  }})

export const selectUser = (state) => state.user
    
export default userSlice.reducer;