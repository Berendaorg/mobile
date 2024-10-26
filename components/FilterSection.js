import React from "react";
import { View, Text } from "react-native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

const FilterSection = ({ selectedIndex, setSelectedIndex }) => {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>What are you looking for?</Text>
      <SegmentedControl
        values={["Buy", "Lease"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
    </View>
  );
};

export default FilterSection;