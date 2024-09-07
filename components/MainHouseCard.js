import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../constants/icon";
import { router } from "expo-router";

const MainHouseCard = ({ housedata, width }) => {
  return (
    <View className={`pt-3 mr-5 ${width}`}>
      <TouchableOpacity onPress={() => router.push("/details")}>
        <Image
          source={{
            uri: "https://cdn.in.emaar.com/wp-content/uploads/2020/11/HI-1620x832.jpg",
          }}
          className="w-full h-[180px] object-cover rounded-[30px]"
        />
      </TouchableOpacity>
      <View className="pt-3 flex flex-col gap-2">
        <View className="flex flex-row justify-between px-3 items-center">
          <Text className="font-bold text-[17px]">NAMEOFBLG</Text>
          <Text className="text-[17px] text-highlight">$300,000</Text>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={icon.blacklocationicon}
            className="w-5 h-5 opacity-60 ml-2"
          />
          <Text className="opacity-60 text-[15px] ">165 Larry Lane</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2 pl-3 mr-3">
            <Image
              source={icon.bedroomicon}
              className="w-4 h-4 opacity-60 ml-1"
            />
            <Text className="opacity-60 text-[14px] ">3 Beds</Text>
          </View>

          <View className="flex flex-row items-center gap-2 mr-3">
            <Image
              source={icon.bathroomicon}
              className="w-4 h-4 opacity-60 ml-2"
            />
            <Text className="opacity-60 text-[14px] ">3 Baths</Text>
          </View>

          <View className="flex flex-row items-center gap-2 mr-3">
            <Image source={icon.areaicon} className="w-4 h-4 opacity-60 ml-2" />
            <Text className="opacity-60 text-[14px] ">2450 sqft</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainHouseCard;
