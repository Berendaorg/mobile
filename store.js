import { configureStore } from '@reduxjs/toolkit'
import listingReducer from './slices/listingSlice'
import searchReducer from './slices/searchSlice'
import notificationReducer from './slices/notificationSlice'
import userReducer from './slices/userSlice'
import locationReducer from './slices/locationSlice'
import developerReducer from './slices/developerSlice'

export const store = configureStore({
  reducer: {
    listing:listingReducer,
    location:locationReducer,
    search:searchReducer,
    notification:notificationReducer,
    developer:developerReducer,
    user: userReducer
  },
})