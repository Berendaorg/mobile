import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import { roomData } from "../data";


const { width } = Dimensions.get("window");

const AdCard = () => {
  return (
    <View className="relative w-full py-5">

      <Carousel
        loop
        width={width}
        height={width / 5}
        autoPlay={true}
        pagingEnabled
        data={roomData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View className="relative w-full h-full bg-transparent">

            <Image
              source={item.image}
              className="w-full h-full absolute top-0 right-0  rounded-2xl"/>


          </View>
        )}
      />

      <Carousel
      className="absolute w-full flex-row items-center justify-center bottom-2 aspect-square"
        loop
        width={10}
        height={10}
        autoPlay={false}
        data={roomData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (

      <View className="bg-white w-2 aspect-square  rounded-full"></View>

      )} />

      </View>
  );
};

export default AdCard;
