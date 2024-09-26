import React, { useEffect } from "react";
import { Image, ScrollView, View } from "react-native";
import { listingData } from "../../../data";

const Gallery = () => {
  useEffect(()=>{
  },[])

  return (
      <View className="bg-white w-full h-full">

      <ScrollView className="w-full h-full">
          {listingData[0]?.pictures?.map((item)=>{
            return(
              <Image source={item}
               />
              )})}      
      </ScrollView>

      </View>
  );
};

export default Gallery;