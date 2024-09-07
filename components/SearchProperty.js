import React from "react";
import { Image, TextInput, View } from "react-native";
import icon from "../constants/icon";

const SearchProperty = ({ placeholder }) => {
  return (
    <View className="relative pt-5 px-4">
      <Image
        source={icon.searchicon}
        className="w-5 h-5 z-10 absolute top-[32px] ml-1 left-5 opacity-20"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#CFCFCF"}
        className="text-[#2E2C2C] text-sm font-medium  bg-[#EFECEC]  py-2 px-8 rounded-[60px]"
      />
      <Image
        source={icon.filtericon}
        className="w-9 h-9 absolute top-6 right-5 opacity-40"
      />
    </View>
  );
};

export default SearchProperty;
