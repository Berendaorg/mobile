import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        {/* <Stack.Screen
          name="sign-up-phone-number"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sign-up-user-name"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="enter-sign-up-code"
          options={{ headerShown: false }}
        /> */}
      </Stack>
      <StatusBar barStyle="light-content" style="dark" />
    </>
  );
};

export default AuthLayout;
