import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomAuthButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      <Text className={`text-lg font-extrabold text-black ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomAuthButton;
