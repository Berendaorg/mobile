import { createSlice } from '@reduxjs/toolkit'
import { houseData } from '../data'


const initialState = {
  searchEnabled: true,
  searchResults:[],
  mapMode: true,
  results : houseData,
  selectedHouse : null
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    toggleSearchEnabled: (state) => {
      state.searchEnabled = !state.searchEnabled
    }, toggleMapMode: (state) => {
      state.mapMode = !state.mapMode
    }, 
    // setHouse: (state,action) => {
    //   state.selectedHouse = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { 
  toggleSearchEnabled,
  toggleMapMode,
  // setHouse
 } = mapSlice.actions

export const selectSearchEnabled = (state) => state.map.searchEnabled
export const selectResults = (state) => state.map.results
export const selectedHouse = (state) => state.map.selectedHouse
export const selectMapMode = (state) => state.map.mapMode

export default mapSlice.reducer