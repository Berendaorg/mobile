import { createSlice } from '@reduxjs/toolkit'
import { houseData } from '../data'
import { roomData } from '../data'

import image from "../constants/image";


const initialState = {
    houseData:houseData,
    roomData,
    saved:[],
    // should be empty at the start
    selectedHouse :  {
      "houseId": "002",
      "image": image.detailimg,
      "address": "456 Elm St, City, Country",
      "price": 180000,
      "propertyType": "apartment",
      "bedrooms": 2,
      "bathrooms": 1,
      "houseSize": 1200,
      "houseAge": 26,
      "location": {
        "coords": {
          "lat": 34.0522,
          "lng": -118.2437
        },
        "address": "456 Elm St, City, Country"
      },
      "description": "Cozy apartment in a convenient location",
      "features": {
        "parking": true,
        "pool": true,
        "gym": false
      },
      "pictures": {
        "bedroom": ["https://example.com/bedroom1.jpg", "https://example.com/bedroom2.jpg"],
        "livingRoom": ["https://example.com/livingroom1.jpg", "https://example.com/livingroom2.jpg"],
        "kitchen": ["https://example.com/kitchen1.jpg", "https://example.com/kitchen2.jpg"],
        "exterior": ["https://example.com/exterior1.jpg", "https://example.com/exterior2.jpg"]
      },
      "openHouseSchedule": ["2024-04-30", "2024-05-07", "2024-05-14"],
      "offMarket": false,
      "listedDate": "2024-04-17",
      "listedBy": {
        "photoUrl": "https://example.com/photo2.jpg",
        "name": "Jane Smith",
        "verified": true,
        "phone": "+1098765432"
      },
      "listedFor": "sell"
    },
}

export const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        // setHouse: (state,action) => {
        //     state.selectedHouse = action.payload
        //   },
          setSaved: (state,action) => {
            state.saved=[...state.saved,action.payload]
          },
          getHouse:(state, action) =>{
            console.log("payload",action.payload)
            state.selectedHouse = state.houseData[action.payload]
            // console.log(state.selectedHouse)
          },
    }
})

export const {
  // setHouse,
  setSaved,
  getHouse 
} = houseSlice.actions

export const selectHouseData = (state) => state.house.houseData
export const selectRoomData = (state) => state.house.roomData
export const selectSelectedHouse = (state) => state.house.selectedHouse
export const selectSaved = (state) => state.house.saved

export default houseSlice.reducer