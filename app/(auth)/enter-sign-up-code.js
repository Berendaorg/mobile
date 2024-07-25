import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormFields from "../../components/FormFields";
import CustomAuthButton from "../../components/CustomAuthButton";
import { router, Redirect } from "expo-router";
import CheckBox from "react-native-check-box";

const EnterSignUpCode = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView>
      <View className="w-full h-full py-8 flex flex-col justify-between px-6">
        <View className="mt-2">
          <Text className="text-2xl font-extrabold">
            We Sent A Code Via SMS, Please it Enter Below
          </Text>
          <View className="pt-8 flex-row justify-start items-center w-full">
            <FormFields
              title="Enter Your Code"
              otherStyles="w-full"
              value={phoneNumber}
              handleChangeText={(e) => {
                setPhoneNumber(e);
              }}
            />
          </View>
          <Text className="text-xs mt-2 text-gray-500 font-extrabold">
            Didn't Get The Code,{" "}
            <Text className="text-blue-600">Send Again</Text>
          </Text>
        </View>
        <View className=" items-center">
          <CustomAuthButton
            title="Get Your Code"
            containerStyles="w-full"
            textStyles=""
            isLoading={isSubmitting}
            handlePress={() => router.push("/sign-up-user-name")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EnterSignUpCode;
