import { View, Text, TextInput } from "react-native";
import React from "react";

const FormFields = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  return (
    <View className={`flex flex-col ${otherStyles}`}>
      <Text className="text-xs font-extrabold text-secondary-100">{title}</Text>
      <View className="border-b border-secondary-100 items-center flex-row  h-8 w-full focus:border-secondary-200">
        <TextInput
          className="flex-1 text-black text-base font-medium"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
        />
      </View>
    </View>
  );
};

export default FormFields;
