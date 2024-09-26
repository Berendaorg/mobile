import { configureStore } from '@reduxjs/toolkit'
import listingReducer from './slices/listingSlice'
import searchReducer from './slices/searchSlice'
import notificationReducer from './slices/notificationSlice'
import userReducer from './slices/userSlice'
import developerReducer from './slices/developerSlice'
import locationReducer from './slices/locationSlice'

import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    location:locationReducer,
    search:searchReducer,
    notification:notificationReducer,
    developer:developerReducer,
    user: userReducer,
    listing:listingReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
  },
})