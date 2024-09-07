import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import icon from "../constants/icon";
import { router, Redirect } from "expo-router";
import { useDispatch } from "react-redux";
import { setSaved } from "../slices/houseSlice";

const CarouselRoom = ({ rooms, width }) => {
  const dispatch = useDispatch();
  return (
    <View className="relative">
      <TouchableOpacity
        className="z-50 absolute top-4 left-4 p-2 bg-primary rounded-full"
        onPress={() => router.back()}
      >
        <Image
          source={icon.backicon}
          className="w-6 h-6 "
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        className="z-50 absolute top-4 right-4 p-2 bg-primary rounded-full"
        onPress={() => dispatch(setSaved(rooms[0]))}
      >
        <Image
          source={icon.bookmarkicon}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={rooms}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View className="relative w-full h-full">
            <Image
              source={item.image}
              className="w-full h-full absolute top-0 right-0"
            />
            <View className="bg-primary opacity-40 w-full h-full absolute top-0 right-0"></View>
            <Text className="text-white text-xs py-1 px-2 rounded-2xl bg-primary m-4 absolute bottom-0 left-0">
              {item.title}
            </Text>
            <Text className="text-white text-xs py-1 px-2 rounded-2xl bg-primary m-4 absolute bottom-0 right-0">
              {item.index}/{rooms.length}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default CarouselRoom;
