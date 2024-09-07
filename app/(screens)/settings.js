import React from "react";
import { Image, Text, View } from "react-native";
import icon from "../../constants/icon";

const Settings = () => {
  const settings = [
    {
      name: "Preffered Theme",
      option: true,
      icon: icon.Themesicon,
    },
    {
      name: "Preffered Language",
      option: true,
      icon: icon.Languageicon,
    },
    {
      name: "Measurment Unit",
      option: true,
      icon: icon.Measurementicon,
    },
    {
      name: "About",
      option: false,
      icon: icon.Abouticon,
    },
    {
      name: "Terms and Conditons",
      option: false,
      icon: icon.Termsicon,
    },
    {
      name: "Privacy Policy",
      option: false,
      icon: icon.Privacyicon,
    },
  ];
  return (
    <View className="bg-[#FAFAFB] w-full h-screen">
      {settings.map((items) => (
        <View className="py-4 px-3 flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <Image source={items.icon} className="w-6 h-6" />
            <Text className="text-lg font-semibold opacity-70">
              {items.name}
            </Text>
          </View>
          {items.option ? (
            <View className="flex flex-row items-center gap-1">
              <Text>Text</Text>
              <Image source={icon.Downarrow} className="w-4 h-4" />
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
};

export default Settings;
