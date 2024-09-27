
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetch, URL, wait } from '../mocks/fetch';
import { asyncTimeout } from '../util/asyncTimeout';

import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
// import { sub } from 'date-fns';
import { apiSlice } from "./apiSlice";


const developerAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
})

const initialState = developerAdapter.getInitialState({})

// export const getDevelopers = createAsyncThunk(
//   'developers/getDevelopers',
//   async () => {
//     const response = await fetch(`${URL}developers`,{
//       method: "GET",
//     })
//     await asyncTimeout(wait);
//     return response.data
//   },
// )

// export const getDevelopersById = createAsyncThunk(
//   '/developers/getDevelopersById',
//   async (id) => {
//     const response = await fetch(`${URL}developers`,{
//       method: "GET",
//       params:{
//         id
//       }
//     })
//     return response.data  
//   },
// )


// const initialState = {
//   developers:[],
//   developer :  {},
//   isLoading: true
// }

export const developersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getDevelopers: builder.query({
          query: () => '/developers',
          transformResponse: responseData => {
            return developerAdapter.setAll(initialState, responseData)
        },
        providesTags: (result, error, arg) => [
              { type: 'Developer', id: "LIST" },
              ...result.ids.map(id => ({ type: 'Developer', id }))
          ]
      }),
      getDevelopersById: builder.query({
          query: id => `/developer/${id}`,
          transformResponse: responseData => {
            let min = 1;
            const loadedPosts = responseData.map(post => {
                if (!post?.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                if (!post?.reactions) post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
                return post;
            });
            return postsAdapter.setAll(initialState, loadedPosts)
        },          providesTags: (result, error, arg) => [
              ...result.ids.map(id => ({ type: 'Post', id }))
          ]
      }),
  })
})

// export const developerSlice = createSlice({
//     name: 'developer',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder.addCase(getDevelopers.fulfilled, (state,action)=>{
//         state.isLoading = false
//         state.developers = action.payload
//       }),
//       builder.addCase(getDevelopers.pending, (state,action)=>{
//         state.isLoading = true
//       }),
//       builder.addCase(getDevelopersById.fulfilled, (state,action)=>{
//         state.developer = action.payload
//       })

//     }
// })


// export const selectdevelopers = (state) => state.developer.developers
// export const selectdeveloperById = (state, id) => state.developer.developers.find(dev => dev.id === id)
// export const selectDeveloperLoading = (state) => state.developer.isLoading


// Creates memoized selector

export const {
  useGetDevelopersQuery,
  useGetDevelopersByIdQuery,
} = developersApiSlice

// returns the query result object
export const selectDevelopersResult = developersApiSlice.endpoints.getDevelopers.select()

const selectDevelopersData = createSelector(
  selectDevelopersResult,
  developersResult => developersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllDevelopers,
  selectById: selectDeveloperById,
  selectIds: selectDeveloperIds
  // Pass in a selector that returns the developers slice of state
} = developerAdapter.getSelectors(state => {
  console.log({state})
  return selectDevelopersData(state) ?? initialState})