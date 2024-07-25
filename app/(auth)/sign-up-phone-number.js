import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "../../components/FormFields";
import CustomAuthButton from "../../components/CustomAuthButton";
import { router, Redirect } from "expo-router";
import CheckBox from "react-native-check-box";

const SignUpPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView>
      <View className="w-full h-full py-8 flex flex-col justify-between px-6">
        <View className="mt-2">
          <Text className="text-2xl font-extrabold">
            Enter Your phone Number To Begin Your Journey
          </Text>
          <View className="pt-8 flex-row justify-start items-center w-full">
            <Text className="text-base items-center justify-center mr-4 font-extrabold p-2 border border-gray-400 rounded-md">
              🇪🇹 +251
            </Text>
            <FormFields
              title="Phone Number"
              otherStyles="flex-1 w-[70%]"
              value={phoneNumber}
              handleChangeText={(e) => {
                setPhoneNumber(e);
              }}
            />
          </View>
        </View>
        <View className=" items-center">
          <View className="flex-row items-center pb-5 gap-2">
            <CheckBox
              style={{ flexDirection: "row" }}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              isChecked={isChecked}
            />
            <Text className="text-xs text-gray-500 font-extrabold">
              I Agree To{" "}
              <Text className="text-blue-600">Terms and Conditions</Text>
            </Text>
          </View>
          <CustomAuthButton
            title="Get Your Code"
            containerStyles="w-full"
            textStyles=""
            isLoading={isSubmitting}
            handlePress={() => router.push("/enter-sign-up-code")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpPhoneNumber;
