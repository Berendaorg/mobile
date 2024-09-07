import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SearchProperty from "../../components/SearchProperty";
import { router } from "expo-router";

const developers = () => {
  const developers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RL7jZBdy-GACBLVMZSCDp44yr93lDryEQQ&s",
    },
    {
      image:
        "https://iconape.com/wp-content/png_logo_vector/aldar-properties-logo.png",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQbFW_-3yGH3koFlg80RcrRl7H8QfhkH5xQ&s",
    },
    {
      image:
        "https://logolook.net/wp-content/uploads/2024/04/Emaar-Properties-Logo-2014.png",
    },
  ];
  return (
    <View className="bg-[#FAFAFB] h-full w-full">
      <SearchProperty placeholder="Search Developers" />
      <View className="flex flex-row flex-wrap justify-between w-full item-center px-4">
        {developers.map((item) => (
          <TouchableOpacity onPress={() => router.push("/developerdetail")}>
            <Image
              source={{ uri: item.image }}
              className="w-40 h-40 mr-4 mt-3 rounded-[10px]"
            />
          </TouchableOpacity>
        ))}
        <View className="w-40 h-40 bg-highlight rounded-[10px] flex flex-row justify-center items-center">
          <Text className="text-white">View all developers</Text>
        </View>
      </View>
    </View>
  );
};

export default developers;
