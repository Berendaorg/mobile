import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const HorizontalScrollRooms = ({ rooms }) => {
  return (
    <ScrollView
      decelerationRate="fast"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {rooms.map((room) => (
        <View
          className="relative items-center justify-center rounded-2xl ml-2"
          key={room.index}
        >
          <Image source={room.image} className=" w-32 h-20 rounded-2xl z-10" />
          <View className="bg-primary rounded-2xl opacity-40 w-full h-full absolute top-0 right-0 z-10"></View>
          <Text className="text-gray-300 absolute z-20 text-xs w-full bg-gray-500/[.6] rounded-b-2xl bottom-0 text-center">
            Bedroom(5)
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default HorizontalScrollRooms;
