import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../constants/icon";
import { Link, router } from "expo-router";
import Tag from "./Tag";

const BoardCard = ({ board, width }) => {
  return (
    <View className={`pt-3 mr-5 ${width}`}>
     
      <TouchableOpacity 
      onPress={() => 
      router.push({
        pathname:"/board",
        params: {id:board.id}
      })
        }>
        <View className="relative">
          {board.tags && <Tag labels={board.tags} /> }
            <Image
            source={board.image}
                className="w-[300px] h-[180px] object-cover rounded-[30px]"
                />
            </View>
      
      <View className="pt-3 flex flex-col justify-center gap-2">
        <View className="flex flex-row justify-between px-3 items-center">
          {/* <Text className="font-bold text-[17px]">{board.name}</Text> */}
          <Text className="text-[17px] text-highlight">
            {board.title}
          </Text>
        </View>
         {/* <View className="flex flex-row items-center">
        </View> */}
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
