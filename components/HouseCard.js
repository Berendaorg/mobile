import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import icon from "../constants/icon";

const HouseCard = ({ house }) => {
  return (
    <Link href={`/details/${house.houseId}`}>
      <View className="relative w-screen  px-4 mt-3 mb-3">
        {/* <Link href= "/details"> */}
        <View className="flex-row items-center gap-2">
          <View>
            <TouchableOpacity onPress={() => router.push("/profile")}>
              <Image
                source={icon.avataricon}
                className="w-14 h-14"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View>
            <View className="flex-row items-center">
              <Text className="text-base text-white  font-bold">
                {house.listedBy.name}
                </Text>
              {house.listedBy.verified && (
                <Image
                  source={icon.verifiedicon}
                  className="w-7 h-7"
                  resizeMode="contain"
                />
              )}
            </View>
            <Text className="text-[12px] font-semibold text-gray-200">
              {house.listedBy.phone}
            </Text>
          </View>
        </View>

        <View>
          <View className="relative mt-2">
            <Image source={house.image} className="w-full h-[250px] rounded-lg" />
          </View>
          <TouchableOpacity className="z-50 absolute top-4 right-2 p-2 font-bold bg-white rounded-full">
            <Image
              source={icon.bookmarkoutline}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/* </Link> */}

          <View className="w-full flex-row justify-between mt-2 px-2">
            <View className="flex-col  space-y-1">
              <Text className="text-base font-bold text-white">
                {house.description.slice(0, 20)}
              </Text>
              <View className="flex-row -ml-2 gap-1 items-center justify-center ">
              <Image
                source={icon.blacklocationicon}
                className="w-5 h-5 opacity-80 bg-white p-1 rounded-full"
                resizeMode="contain"
              />
              <Text className="text-[11px] font-bold text-gray-200">
                {house.address}
              </Text>
            </View>
            </View>
            <View className="flex-row  justify-between">
              <Text className="text-base font-bold text-white">
                ETB {house.price.toString().replace(/\B(?=(\d{3})+\b)/g, ",")}
              </Text>
            </View>
          </View>
          <View className="mt-2 px-2 flex-col">
            <View className="w-full mt-2 h-0.5 bg-black/50 opacity-10 px-2 rounded-full"></View>
            <View className="flex-row items-center space-x-4 mt-4">
              <View className="flex-row items-center gap-1">
                <Image
                  source={icon.bedroomiconwhite}
                  className="w-6 h-6 "
                  resizeMode="contain"
                />
                <Text className="text-white font-bold">
                  {house.bedrooms}
                  </Text>

              </View>

              <View className="w-1 h-1 bg-white rounded-full"></View>

              <View className="flex-row items-center gap-1">
                <Image
                  source={icon.bathroomiconwhite}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-white font-bold">
                  {house.bathroomiconwhite}
                </Text>
              </View>

              <View className="w-1 h-1 bg-white rounded-full"></View>

              <View className="flex-row items-center gap-1">
                <Image
                  source={icon.areaiconwhite}
                  className="w-4 h-4"
                  resizeMode="contain"
                />
                <Text className="text-white  font-bold">{house.houseSize}m&#178;</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default HouseCard;
