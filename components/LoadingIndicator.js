import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#C33535" />
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingIndicator;
