import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../constants/icon";
import { Link, router } from "expo-router";
import Tag from "./Tag";

const BoardCard = ({ listing, width }) => {
  return (
    <View className={`pt-3 mr-5 ${width}`}>
     
      <TouchableOpacity 
      onPress={() => 
      router.push({
        pathname:"/ad",
        params: {id:listing.id}
      })        
        }>
        <View className="relative">
            <Tag />
            <Image
            source={{
                uri: "https://cdn.in.emaar.com/wp-content/uploads/2020/11/HI-1620x832.jpg",
                }}
                className="w-[300px] h-[180px] object-cover rounded-[30px]"
                />
            </View>
      
      <View className="pt-3 flex flex-col justify-center gap-2">
        <View className="flex flex-row justify-between px-3 items-center">
          {/* <Text className="font-bold text-[17px]">{listing.name}</Text> */}
          <Text className="text-[17px] text-highlight">
            Ad
            </Text>
        </View>
         <View className="flex flex-row items-center">
          <Image
            source={icon.blacklocationicon}
            className="w-5 h-5 opacity-60 ml-2"
          />
          <Text className="opacity-60 text-[15px] ">{listing.address}</Text>
        </View>
        <View className="px-3">
            <Link href={`/developer`} className="opacity-60 text-[15px]">
                Read More
            </Link>
        </View>
        {/*
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2 pl-3 mr-3">
            <Image
              source={icon.bedroomicon}
              className="w-4 h-4 opacity-60 ml-1"
            />
            <Text className="opacity-60 text-[14px] ">{listing.bedrooms}</Text>
          </View>

          <View className="flex flex-row items-center gap-2 mr-3">
            <Image
              source={icon.bathroomicon}
              className="w-4 h-4 opacity-60 ml-2"
            />
            <Text className="opacity-60 text-[14px] ">{listing.bathrooms}</Text>
          </View>

          <View className="flex flex-row items-center gap-2 mr-3">
            <Image source={icon.areaicon} className="w-4 h-4 opacity-60 ml-2" />
            <Text className="opacity-60 text-[14px] ">{listing.houseSize} sqft</Text>
          </View>
        </View> */}
      </View>

      </TouchableOpacity>

    </View>
  );
};

export default BoardCard;
