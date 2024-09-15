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


const ScrollRoomNumber = ({ setFor,title, data, rounded }) => {
  const [isSelected, setIsSelected] = useState("Any");
  const [isSelectedStyle, setIsSelectedStyle] = useState("bg-highlight border border-highlight text-white");

  // const rooms = ["Any", "1", "2", "3", "4", "5"];
  
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
      <Text className=" text-black text-lg">{title}</Text>
      {/* <ScrollView
        className="mt-4 gap-x-4"
        decelerationRate="fast"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      > */}
      <View className="flex flex-row flex-wrap items-center gap-4 mt-1">
        {data?.map((item, index) => (
          <TouchableOpacity onPress={() => handleSelected(item)}>
            <Text
              className={`${
                isSelected === item ? isSelectedStyle : "bg-hightlight text-gray-500"
              } p-2 ${
                item === "Any" ? "rounded-[10px]" : rounded
              }  border border-gray-400  px-[14px] w-auto`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default ScrollRoomNumber;
