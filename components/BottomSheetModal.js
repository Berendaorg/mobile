import { View, Text } from "react-native";
import React from "react";

import {
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Checkbox from "expo-checkbox";

const BottomSheetModals = ({
  PropertyType,
  ref,
  isChecked,
  setChecked,
  snapPoints,
}) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        className="h-full"
        ref={ref}
        snapPoints={["50%", "100%"]}
        enablePanDownToClose={true}
        animateOnMount={true}
      >
        <BottomSheetScrollView
          className="pt-5 h-full"
          decelerationRate="fast"
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-xl opacity-80 pl-4 font-bold my-4">
            Property Type
          </Text>
          {PropertyType.map((property) => {
            return (
              <View className="flex-row justify-between mb-5 px-4">
                <Text className="text-lg opacity-70">{property}</Text>
                <Checkbox
                  value={isChecked}
                  className="opacity-80"
                  onValueChange={setChecked}
                />
              </View>
            );
          })}
        </BottomSheetScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default BottomSheetModals;
