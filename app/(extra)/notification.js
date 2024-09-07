import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon";

const notification = () => {
  return (
    <View className="bg-[#FAFAFB] flex flex-col justify-between pt-6 h-full w-full">
      <View className="justify-start">
        {[1, 2, 3, 4, 5].map((items) => (
          <View className="w-full pb-6">
            <View className="flex flex-row items-center gap-4 px-3 w-full">
              <Image source={icon.Transfericon} className="w-8 h-8" />
              <View>
                <Text className="font-bold w-[50%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </Text>
                <Text className="text-xs opacity-50">1:57 mins ago</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View className="px-4 pb-4 justify-end ">
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => {}}
        >
          <Text className="text-center text-white">Clear all</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default notification;
