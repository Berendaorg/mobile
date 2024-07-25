import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "../../components/FormFields";
import CustomAuthButton from "../../components/CustomAuthButton";
import { router, Redirect } from "expo-router";
import CheckBox from "react-native-check-box";

const SignUpUserName = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView>
      <View className="w-full h-full py-8 flex flex-col justify-between px-6">
        <View className="mt-2">
          <Text className="text-2xl font-extrabold">
            Welcome, To Get Started Please Enter Your Name
          </Text>
          <View className="pt-8 flex-row justify-start items-center w-full">
            <FormFields
              title="Full Name"
              otherStyles="w-full"
              value={phoneNumber}
              handleChangeText={(e) => {
                setPhoneNumber(e);
              }}
            />
          </View>
        </View>
        <View className=" items-center">
          <CustomAuthButton
            title="Start your Journey"
            containerStyles="w-full"
            textStyles=""
            isLoading={isSubmitting}
            handlePress={() => router.push("/home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpUserName;
