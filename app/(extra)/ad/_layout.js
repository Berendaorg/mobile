import React from "react";
import { Stack } from "expo-router";

const AdLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AdLayout;
