import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import {selectedBedrooms,selectBathrooms,setBathrooms,setBedrooms } from "../slices/searchSlice"
import { useDispatch, useSelector } from "react-redux";


const ScrollRoomNumber = ({ setFor,title }) => {
  const [isSelected, setIsSelected] = useState("Any");
  const [isSelectedStyle, setIsSelectedStyle] = useState("bg-black text-white");

  const rooms = ["Any", "1", "2", "3", "4", "5+"];
  
      const bedrooms = useSelector(selectedBedrooms)
      const bathrooms = useSelector(selectBathrooms)
      const dispatch = useDispatch()  

  const handleSelected = (item) => {

    setIsSelected(item);

      switch (setFor) {
        case "bedrooms":
        dispatch(setBedrooms(item));
          break;
        case "bathrooms":
          dispatch(setBathrooms(item));
          break;
        default:
          break;
        }
   
  };

  return (
    <View>
      <Text className=" text-white text-lg">{title}</Text>
      <ScrollView
        className="mt-4 gap-x-4"
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {rooms.map((item, index) => (
          <TouchableOpacity onPress={() => handleSelected(item)}>
            <Text
              className={`${
                isSelected === item ? isSelectedStyle : "bg-white text-black"
              } p-5 ${
                item === "Any" ? "rounded-3xl" : "rounded-full"
              }  border px-6 w-auto`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollRoomNumber;
