import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ResultList from '../../components/ResultList';

import { useSelector } from "react-redux";
// import {selectHouseData} from "../../slices/houseSlice";
import { Result } from 'postcss';


const profile = () => {

  // const houseData = useSelector(selectHouseData)

  return (
    <>
    <View className="w-full h-32 bg-red-500 z-20">
      <View className="w-24 aspect-square rounded-full bg-white border relative top-1/2 p-1 bg-[url('../../assets/images/logo.png')] bg-cover bg-center">
        <View className="w-full h-full bg-green-500 rounded-full" ></View>
      </View>
    </View>

    <View className="cpb-5 border">
        <ScrollView className="pt-8">
          <View className="pr-8">
            <Text className="text-3xl ">Real Estate Name</Text>
            <Text className="text-sm">Real Estate City</Text>
            <Text className="text-sm mt05">Also from this client</Text>
          </View>
          {/* <ResultList arrayData={houseData}  /> */}
        </ScrollView>
    </View>
    </>
  )
}

export default profile