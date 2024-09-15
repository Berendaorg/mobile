import { View, Text } from "react-native";
import React, { useState } from "react";

import {
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Checkbox from "expo-checkbox";

const BottomSheetModals = ({
  snapPoints,
}) => {
  const PropertyType = ["Any", "House", "Apartment", "Condo", "Real Estate"];
const [isChecked, setChecked] = useState(false);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        className="h-full"
        snapPoints={["50%", "100%"]}
        enablePanDownToClose={true}
        animateOnMount={true}
      >
        <BottomSheetScrollView className="pt-5 h-full">
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
