import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../constants/icon";
import { router } from "expo-router";

const Headericons = () => {
  return (
    <View className="flex flex-row items-center gap-2 justify-end ">
      <TouchableOpacity onPress={() => router.push("/saved")}>
        <View className="relative">
          <Image source={icon.bookmarkoutline} className="w-6 h-6" />
          <View className="w-4 h-4 rounded-full bg-[#C33535] flex flex-row item-center justify-center absolute bottom-3 left-3">
            <Text className="text-white text-xs text-center">0</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate("/notification")}>
        <View className="relative">
          <Image source={icon.notificationoutline} className="w-6 h-6" />
          <View className="w-4 h-4 rounded-full bg-[#C33535] flex flex-row item-center justify-center absolute bottom-3 left-3">
            <Text className="text-white text-xs text-center">0</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Headericons;
