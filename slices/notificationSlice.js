import { createSlice } from '@reduxjs/toolkit'
import { notificationData } from '../data'

const initialState = {
    notificationData,
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
      clearNotification: (state) => {
            state.notificationData = []
          },
          getNotificaiton:(state, action) =>{
            console.log("notification payload",action.payload)
            state.notificationData = [action.payload]
          },
    }
})

export const {
  clearNotification,
  getNotificaiton 
} = notificationSlice.actions
{}
export const selectNotificationData = (state) => state.notification.notificationData

export default notificationSlice.reducer