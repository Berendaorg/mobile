import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import icon from "../constants/icon";
import { Link, router, useNavigation } from "expo-router";

const CarouselRoom = ({ rooms, width }) => {
  const navigation = useNavigation()
  
  return (
    <View className="relative">

      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={rooms}
        scrollAnimationDuration={10}
        renderItem={({ item }) => (
          <View className="relative w-full h-full ">
              <TouchableOpacity
                    onPress={() => 
                      router.push({
                        pathname:"/gallery",
                        params:{
                          id:1}
                      })}
                className="bg-black/50 w-full h-full absolute top-0 right-0">
                
              <Image
                source={item.image}
                className="w-full h-full absolute top-0 right-0"/>

                </TouchableOpacity>


              <Text className="text-black text-xs py-1 px-2 rounded-2xl bg-white m-4 absolute bottom-0 right-0">
                {item.index}/{rooms.length}
              </Text>
            </View>
        )}
      />
    </View>
  );
};

export default CarouselRoom;
