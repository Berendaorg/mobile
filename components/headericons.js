import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../constants/icon";
import { router } from "expo-router";
import { Badge } from 'react-native-paper';

const Headericons = () => {
  return (
    <View className="flex flex-row items-center gap-2 justify-end ">
      <TouchableOpacity onPress={() => router.navigate("/notification")}>
        <View className="relative">
          <Image source={icon.notificationoutline} className="w-7 h-7" />
          <Badge size={17} className="absolute">3</Badge>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Headericons;
