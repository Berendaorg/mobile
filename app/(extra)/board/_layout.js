import React from "react";
import { Stack } from "expo-router";

const BoardLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
      name="[id]" 
      options={{ 
        headerShown: false,
        title: 'Announcement',
        }} />
    </Stack>
  );
};

export default BoardLayout;
