import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import icon from "../../constants/icon";
import SearchProperty from "../../components/SearchProperty";
import MainHouseCard from "../../components/MainHouseCard";
import { router } from "expo-router";

const Explore = () => {
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

  const housedata = [];

  const realestates = ["Noah", "Ayat", "Arada"];

  const [SelectedFilter, setSelectedFilter] = useState("apartment");

  const handleSelectingFilter = (filter) => {
    setSelectedFilter(filter);
  };
  return (
    <ScrollView
      className="flex-1 gap-0 bg-[#FAFAFB]"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}
    >
      <SearchProperty placeholder="Search Property" />
      <View className="">
        <View className=" px-4 pt-3 flex flex-row items-center justify-between">
          <Text className="text-lg font-bold">Developers</Text>
          <Text className="">View all</Text>
        </View>

        <FlatList
          data={developers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.image}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push("/developers")}>
              <Image
                source={{ uri: item.image }}
                className="w-32 h-32 mr-4 mt-3 rounded-[10px]"
              />
            </TouchableOpacity>
          )}
          className=""
        />
      </View>

      <View className="px-4 pt-4">
        <Text className="text-lg font-bold">What are you looking for?</Text>
        <View className="flex flex-row pt-4 items-center gap-2">
          <Text
            className={`py-2 px-3 shadow-lg rounded-[50px] flex-1 text-center ${
              SelectedFilter === "apartment"
                ? "bg-highlight text-white"
                : "bg-white"
            }`}
            onPress={() => handleSelectingFilter("apartment")}
          >
            Apartment
          </Text>
          <Text
            className={`py-2 px-3 shadow-lg rounded-[50px] flex-1 text-center ${
              SelectedFilter === "residential"
                ? "bg-highlight text-white"
                : "bg-white"
            }`}
            onPress={() => handleSelectingFilter("residential")}
          >
            Residential
          </Text>
          <Text
            className={`py-2 px-3 shadow-lg rounded-[50px] flex-1 text-center ${
              SelectedFilter === "hotel"
                ? "bg-highlight text-white"
                : "bg-white"
            }`}
            onPress={() => handleSelectingFilter("hotel")}
          >
            Hotel
          </Text>
        </View>
      </View>
      {realestates.map((item) => (
        <View className="">
          <View className="px-4 pt-4 flex flex-row items-center justify-between">
            <View className="flex flex-col gap-1">
              <Text className="font-bold text-[18px]">{item}</Text>
              <Text className="">127 results</Text>
            </View>
            <View>
              <Text>View all</Text>
            </View>
          </View>

          <View className="pl-2 pb-4">
            {/* <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ width: "90%" }}
    >
      <View className="pt-4 flex flex-row w-full">
        {developers.map((item) => (
          <MainHouseCard key={item} housedata={housedata} width="100%" />
        ))}
      </View>
    </ScrollView> */}
            <FlatList
              data={developers}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.image}
              renderItem={({ item }) => (
                <MainHouseCard housedata={housedata} width="100%" />
              )}
              className="w-full"
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Explore;
