import { ScrollView, Text,View,TouchableOpacity } from "react-native";
import React, { useEffect } from "react";


import HouseCard from "../../components/HouseCard";

import { useDispatch, useSelector } from "react-redux";
import {  getSavedListings,
          deleteSavedListings,
          selectSaved
 } from "../../slices/listingSlice";

const Saved = () => {
  const dispatch = useDispatch(selectSaved)
  const saved = useSelector(selectSaved);

  useEffect(()=>{
    dispatch(getSavedListings())
  },[])
  
  return (
    <ScrollView
      className="flex-1 gap-0"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}
    >
    {saved.map((room, index) => ( 
      <HouseCard house={room} key={index} />
    ))} 

      <View className="px-4 pb-4 justify-end ">
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => dispatch(getSavedListings())}
        >
          <Text className="text-center text-white">Clear all</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Saved;
