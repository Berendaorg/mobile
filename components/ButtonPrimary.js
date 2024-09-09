import { TouchableOpacity } from '@gorhom/bottom-sheet'
import React from 'react'
import { Text, View } from 'react-native'
import { getSavedListings } from '../slices/listingSlice'
import { useDispatch } from 'react-redux'

export const ButtonPrimary = ({label, onPress}) => {
    // const dispatch = useDispatch()
  return (
    <View className="px-4 pb-4 justify-end h-[100vh">
    <TouchableOpacity
      className="py-3 bg-black rounded-[30px]"
      onPress={() => {}}
    >
      <Text className="text-center text-white">{label}</Text>
    </TouchableOpacity>
  </View>
  )
}

export default ButtonPrimary