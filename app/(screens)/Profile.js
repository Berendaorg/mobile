import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <>
    <View className="h-full w-full pt-3  flex-col gap-6 justify-start items-center">
      <Image
        source={{
          uri: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        }}
        className="w-[100px] h-[100px] rounded-full">
        </Image>
      
      <View className="flex flex-row justify-around w-full">
        <Text className="rounded-lg pt-3 px-1 font-bold border border-black items-center p-3">
          First Name
        </Text>
        <Text className="rounded-lg pt-3 px-1 font-bold border border-black items-center p-3">
          Last Name
        </Text>
      </View>

        <Text className="rounded-lg font-bold border border-black items-center p-3 w-full text-center">
        Email
        </Text>
      
        <Text className="rounded-lg font-bold border border-black items-center p-3 w-full text-center">
          +2519547543
        </Text>
    </View>
    </>
  );
};

export default Profile;
