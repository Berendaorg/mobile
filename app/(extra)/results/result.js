import {
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import MainHouseCard from "../../../components/MainHouseCard";
import { getListings, selectListingLoading, selectListings } from "../../../slices/listingSlice";

import { Link } from "expo-router";
// import HouseCard from "../../../components/HouseCard";
import  {
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

// import { selectHouseData } from "../../../slices/houseSlice";

import * as Location from "expo-location";``
import Checkbox from "expo-checkbox";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import LabelInput from "../../../components/LabelInput";
import ScrollRoomNumber from "../../../components/ScrollRoomNumber";

import { 
  setLocation,
  selectedBedrooms,
  selectPrice,
  selectPriceMin,
  selectPriceMax,
  selectBathrooms,
  selectPropertyType,
  selectHouseAge,
} from "../../../slices/searchSlice"

const Home = () => {
  const listings = useSelector(selectListings)

  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [isChecked, setChecked] = useState(false);

  // // const houseData = useSelector(selectHouseData);
  // const bathrooms = useSelector(selectBathrooms);
  // const bedrooms = useSelector(selectedBedrooms);
  // const propertyType = useSelector(selectPropertyType);
  // const houseAge = useSelector(selectHouseAge);

  // const price = useSelector(selectPrice);
  // const priceMax = useSelector(selectPriceMax);
  // const priceMin = useSelector(selectPriceMin);

  // const searchBottomSheetRef = useRef(null)
  // const optionsBottomSheetRef = useRef(null)

  // const getLocation = async () => {
  //   console.log("get location")
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     setErrorMsg("Permission to access location was denied");
  //     return;
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   console.log(location.coords)
  //   setLocation(location.coords);// not working
  // };

  // const rooms = ["Bedroom", "Livingroom", "Kitchen", "Bathroom", "Diningroom"];
  // const PropertyType = ["Any", "House", "Apartment", "Condo", "Real Estate"];

  // function handlePresentModal() {
  //   searchBottomSheetRef.current?.present();
  //   searchBottomSheetRef.current?.dismiss();
  // }

  // function handleOptionsPresentModal() {
  //   optionsBottomSheetRef.current?.present();
  // }

  // const filters = {
  //   "all filters":null,
  //   "bedrooms":bedrooms,
  //   "bathrooms": bathrooms,
  //   // "property type":propertyType,
  //   "House Age":houseAge,
  // };

  // // const filters = [
  // //   "all filters",
  // //   bedrooms,
  // //     ]

  // const [selectedFilterStyle, setSelectedFilterStyle] =
  //   useState("bg-secondary-200");
  // const [selectedFilterTextStyle, setSelectedFilterTextStyle] =
  //   useState("text-black");
  // const [selectedFilter, setSelectedFilter] = useState("all filters");

  // const handleSelectedFilter = (filter) => {
  //   setSelectedFilterStyle(filter);
  // };

  // const handleFilterOperations = (filter) => {
  //   handlePresentModal();
  //   setSelectedFilter(filter);
  // };

  return (
    <>
     <ScrollView
          className="flex-1 gap-0 px-2"
          decelerationRate="fast"
          vertical={true}
          showsVerticalScrollIndicator={false}>
          {listings.map((house, index) => ( <MainHouseCard listing={house} width="w-full" />))}
      </ScrollView>

   </>
  );
};

export default Home;
