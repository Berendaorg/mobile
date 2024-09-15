import React, { useEffect } from "react";
import { Image, ScrollView, View } from "react-native";
import { roomData } from "../../../data";

const Gallery = () => {
  useEffect(()=>{
  },[])

  return (
      <View className="bg-white w-full h-full">

      <ScrollView className="w-full h-full">
          {roomData.map((item)=>{
            return(
              <Image source={item.image}
               />
              )})}      
      </ScrollView>

      </View>
  );
};

export default Gallery;