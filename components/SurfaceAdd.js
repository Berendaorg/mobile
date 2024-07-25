import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Surface } from "react-native-paper";

const SurfaceAdd = ({ title, pickImage, image }) => {
  return (
    <TouchableOpacity onPress={pickImage}>
      <View className="flex-col items-center mr-4 gap-2">
        <Surface
          className="p-8 mt-2 bg-white rounded-2xl height-[80px] w-[100px] items-center justify-center relative"
          elevation={4}
        >
          <Text className="text-3xl text-primary">+</Text>
          {title === "Bedroom" && image.Bedroom?.length != 0 ? (
            image ? (
              <Image
                source={{ uri: image?.Bedroom[0].uri || "" }}
                resizeMode="cover"
                className="absolute  w-[100px] h-[96px] rounded-2xl"
              />
            ) : null
          ) : title === "Livingroom" && image.Livingroom?.length != 0 ? (
            image ? (
              <Image
                source={{ uri: image?.Livingroom[0].uri || "" }}
                resizeMode="cover"
                className="absolute  w-[100px] h-[96px] rounded-2xl"
              />
            ) : null
          ) : title === "Kitchen" && image.Kitchen?.length != 0 ? (
            image ? (
              <Image
                source={{ uri: image?.Kitchen[0].uri || "" }}
                resizeMode="cover"
                className="absolute  w-[100px] h-[96px] rounded-2xl"
              />
            ) : null
          ) : title === "Bathroom" && image.Bathroom?.length != 0 ? (
            image ? (
              <Image
                source={{ uri: image?.Bathroom[0].uri || "" }}
                resizeMode="cover"
                className="absolute  w-[100px] h-[96px] rounded-2xl"
              />
            ) : null
          ) : title === "Diningroom" && image.Diningroom?.length != 0 ? (
            image ? (
              <Image
                source={{ uri: image?.Diningroom[0].uri || "" }}
                resizeMode="cover"
                className="absolute  w-[100px] h-[96px] rounded-2xl"
              />
            ) : null
          ) : null}
        </Surface>
        <View className="flex-row items-center gap-0.5">
          <Text className="text-base font-semibold text-white">{title}</Text>
          <Text className=" text-white">
            (
            {title === "Bedroom" && image.Bedroom?.length != 0
              ? image.Bedroom?.length
              : title === "Livingroom" && image.Livingroom?.length != 0
              ? image.Livingroom?.length
              : title === "Kitchen" && image.Kitchen?.length != 0
              ? image.Kitchen?.length
              : title === "Bathroom" && image.Bathroom?.length != 0
              ? image.Bathroom?.length
              : title === "Diningroom" && image.Diningroom?.length != 0
              ? image.Diningroom?.length
              : 0}
            )
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SurfaceAdd;
