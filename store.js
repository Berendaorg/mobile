import { configureStore } from '@reduxjs/toolkit'
import listingReducer from './slices/listingSlice'
import searchReducer from './slices/searchSlice'
import notificationReducer from './slices/notificationSlice'
import userReducer from './slices/userSlice'
import developerReducer from './slices/developerSlice'
import locationReducer from './slices/locationSlice'

export const store = configureStore({
  reducer: {
    location:locationReducer,
    search:searchReducer,
    notification:notificationReducer,
    developer:developerReducer,
    user: userReducer,
    listing:listingReducer,
  },
})