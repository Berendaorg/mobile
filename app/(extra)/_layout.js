import { View, Text, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import icon from "../../constants/icon";
import Headericons from "../../components/headericons";

const ExtraLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="developers"
        options={{
          headerRight: () => <Headericons />,
          headerBackgroundColor: "#FAFAFB",
          headerTitle: "Developers",
          headerStyle: { backgroundColor: "#FAFAFB" },
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          headerStyle: { backgroundColor: "#FAFAFB" },
          headerRight: () => <Headericons />,
          headerTitle: "Notifications",
        }}
      />
      <Stack.Screen
        name="developer_details"
        options={{
          headerStyle: { backgroundColor: "#FAFAFB" },
          headerTitle: "Developers Detail",
          headerRight: () => <Headericons />,
        }}
      />
       <Stack.Screen
        name="results"
        options={{
          headerStyle: { backgroundColor: "#FAFAFB" },
          headerTitle: "Results",
          headerRight: () => <Headericons />,
        }}
      />
    </Stack>
  );
};

export default ExtraLayout;
