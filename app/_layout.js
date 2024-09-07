import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./../store";
import "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        <Stack.Screen name="(complementary)" options={{ headerShown: false }} />
        <Stack.Screen name="(extra)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
