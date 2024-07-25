import { ScrollView } from "react-native";
import React, { useDebugValue } from "react";

import HouseCard from "../../components/HouseCard";

import { useSelector } from "react-redux";
import { selectSaved } from "../../slices/houseSlice";

const Saved = () => {
  const saved = useSelector(selectSaved);

  return (
    <ScrollView
      className="flex-1 gap-0"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}
    >
      {saved.map((room, index) => (
        <HouseCard house={room} key={index} />
      ))}
    </ScrollView>
  );
};

export default Saved;
