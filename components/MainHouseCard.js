import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icon from "../constants/icon";
import { Link, router } from "expo-router";

const MainHouseCard = ({ listing, width }) => {
  return (
    <View className={`pt-3 mr-5 ${width}`}>
      {/* profile */}
      <View className="flex-row items-center gap-2 w-full">
          <View>
            <View class="relative border">
              <Image
                source={icon.avataricon}
                className="w-14 h-14 relative mix-blend-overlay"
                resizeMode="contain"
              />
              <View class="absolute inset-0 bg-red-500 opacity-50"></View>
            </View>
          </View>
          
          <View>
            <View className="flex-row items-center">
              <Link 
              href={`developer_details/${listing.id}`}
              className="text-base text-black  font-bold">
                {listing.listedBy.name}
              </Link>
              {listing.listedBy.verified && (
                <Image
                  source={icon.verifiedicon}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
              )}
            </View>
            {/* <Text className="text-[12px] font-semibold text-gray-200">
              {listing.listedBy.phone}
            </Text> */}
          </View>
        </View>
      {/* profile */}
      <TouchableOpacity 
      onPress={() => 
      router.push({
        pathname:"/details",
        params: {id:listing.id}
      })        
        }>
        <Image
          source={{
            uri: "https://cdn.in.emaar.com/wp-content/uploads/2020/11/HI-1620x832.jpg",
          }}
          className={`${width != "" ? width : "w-[300px]"} h-[180px] object-cover rounded-[30px]`}
        />
      </TouchableOpacity>
      <View className="pt-3 flex flex-col gap-2">
        <View className="flex flex-row justify-between px-3 items-center">
          {/* <Text className="font-bold text-[17px]">{listing.name}</Text> */}
          <Text className="text-[17px] text-highlight">
            ETB {listing.price}
            </Text>
        </View>
        <View className="flex flex-row items-center">
          <Image
            source={icon.blacklocationicon}
            className="w-5 h-5 opacity-60 ml-2"
          />
          <Text className="opacity-60 text-[15px] ">{listing.address}</Text>
        </View>
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
        </View>
      </View>
    </View>
  );
};

export default MainHouseCard;
