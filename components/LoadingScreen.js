import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

export default function LoadingScreen() {
  return (
    <View className="flex justify-center items-center m-auto">
      <ActivityIndicator size="medium" color="#C33535" />
      <Text>
        Loading...
      </Text>
    </View>
  );
}
