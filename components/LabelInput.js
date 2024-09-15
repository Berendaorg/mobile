import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";

import {selectPrice,setPrice,setPriceMin,setPriceMax, setLocation, setHouseAge} from "../slices/searchSlice"
import { useDispatch, useSelector } from "react-redux";


const LabelInput = ({ title, customStyles, placeholder, setFor, type, value }) => {

  const price = useSelector(selectPrice)
  const dispatch = useDispatch()

  const handleTextChange = (e) => {

    switch (setFor) {
      case "price":
        dispatch(setPrice(e));
        break;     
      case "priceMin":
        dispatch(setPriceMin(e));
        break;
        case "priceMax":
          dispatch(setPriceMax(e));
          break;
      case "location":
        dispatch(setLocation(e));
        break;
      // case "bedrooms":
      //   dispatch(setBedrooms(e));
      //   break;
      // case "bathrooms":
      //     dispatch(setBathrooms(e));
      //     break;      
      case "size":
          dispatch(setHouseSize(e));
          break;
      case "age":
          dispatch(setHouseAge(e));
          break;
      default:
        break;
    }

  };

  return (
    <View className="flex-col justify-center">
      <Text className="text-lg opacity-80 mb-2 text-black">{title}</Text>

      <TextInput
        onChangeText={handleTextChange}
        keyboardType={type}
        value={value}
        placeholder={placeholder}
        className={`border border-black/90 ${customStyles} px-2 py-2 rounded-md`}
      />
    </View>
  );
};

export default LabelInput;
