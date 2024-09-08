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
} from "./../../../slices/searchSlice"
import { useSelector } from "react-redux";

const Home = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChecked, setChecked] = useState(false);

  // const houseData = useSelector(selectHouseData);
  const bathrooms = useSelector(selectBathrooms);
  const bedrooms = useSelector(selectedBedrooms);
  const propertyType = useSelector(selectPropertyType);
  const houseAge = useSelector(selectHouseAge);

  const price = useSelector(selectPrice);
  const priceMax = useSelector(selectPriceMax);
  const priceMin = useSelector(selectPriceMin);

  const searchBottomSheetRef = useRef(null)
  const optionsBottomSheetRef = useRef(null)

  const getLocation = async () => {
    console.log("get location")
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords)
    setLocation(location.coords);// not working
  };

  const rooms = ["Bedroom", "Livingroom", "Kitchen", "Bathroom", "Diningroom"];
  const PropertyType = ["Any", "House", "Apartment", "Condo", "Real Estate"];

  function handlePresentModal() {
    searchBottomSheetRef.current?.present();
    searchBottomSheetRef.current?.dismiss();
  }

  function handleOptionsPresentModal() {
    optionsBottomSheetRef.current?.present();
  }

  const filters = {
    "all filters":null,
    "bedrooms":bedrooms,
    "bathrooms": bathrooms,
    // "property type":propertyType,
    "House Age":houseAge,
  };

  // const filters = [
  //   "all filters",
  //   bedrooms,
  //     ]

  const [selectedFilterStyle, setSelectedFilterStyle] =
    useState("bg-secondary-200");
  const [selectedFilterTextStyle, setSelectedFilterTextStyle] =
    useState("text-black");
  const [selectedFilter, setSelectedFilter] = useState("all filters");

  const handleSelectedFilter = (filter) => {
    setSelectedFilterStyle(filter);
  };

  const handleFilterOperations = (filter) => {
    handlePresentModal();
    setSelectedFilter(filter);
  };

  return (
    <>
      <View className="w-full bg-primary h-fit py-4">
        <ScrollView
          className=""
          decelerationRate="fast"
          horizontal={true}
          showsHorizontalScrollIndicator={false}>

          <View className="flex-row items-center justify-center">
            {/* {filters.map((filter, index) => ( */}
            {Object.entries(filters).map(([key, value]) => (
              <TouchableOpacity
                key={key}
                onPress={()=>{handlePresentModal()}}
                className={`rounded-2xl  p-3  ml-5 px-4 w-fit h-auto ${
                  selectedFilter === value ? selectedFilterStyle : null
                }`}
                // onPress={() => {
                //   setSelectedFilter(value);
                // }}
              >
                <Text
                  className={`capitalize font-bold ${
                    selectedFilter === value
                      ? selectedFilterTextStyle
                      : "text-gray-500"
                  }`}>

                    {value} {key} 
                
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView
        className="flex-1 gap-0 bg-primary"
        decelerationRate="fast"
        vertical={true}
        showsVerticalScrollIndicator={false}
      >
        {/* <FlatList
          data={houseData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Link href="/details">
              {" "}
              <HouseCard house={item} />
            </Link>
          )}
        /> */}
      </ScrollView>

      {/* search modal  */}
      <BottomSheetModalProvider className="h-full bg-primary">
        <BottomSheetModal
          className="h-full bg-primary"
          ref={searchBottomSheetRef}
          snapPoints={["30%", "50%", "70%", "100%"]}
          enablePanDownToClose={true}
          animateOnMount={true}>

          <BottomSheetScrollView
            className="pt-5 h-full bg-primary"
            decelerationRate="fast"
            vertical={true}
            showsVerticalScrollIndicator={false}
          >
            {/* begin */}

            <View className=" lex-1 text-5xl h-full bg-primary">
              <SegmentedControl
                tintColor="white"
                backgroundColor="#012847"
                activeFontStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
                appearance="dark"
                values={["Buy", "Rent"]}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                  setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
              />

      <ScrollView className="px-2 pb-10">
        <View className="flex-col  mt-4">

          {/* sizes */}
          <View className="px-2">
            <View className="flex-row gap-x-4 mt-8">

              {/* Price Min */}
              <View className="flex-1">
                <LabelInput
                setFor="priceMin"
                type="numeric"
                value={priceMin}
                title="Price Min" 
                customStyles="w-full" />
              </View>

              {/* Price Max */}
              <View className="flex-1">
                <LabelInput title="Price Max" 
                setFor="priceMax"
                value={priceMax}
                type="numeric"                
                customStyles="w-full" />
              </View>

            </View>

                        {/* House age */}
              <View className="flex-1">
                <LabelInput title="House Age" 
                setFor="age"
                value={houseAge}
                type="numeric"                
                customStyles="w-full" />
              </View>

            {/* location */}
            <View className="flex-row items-end mt-4 gap-x-4 relative">
              
              <View className="flex-1">
                <LabelInput title="Address" 
                customStyles="w-full"
                setFor="location"
                />
              </View>

              <View className="flex-1 absolute right-0">
                
                <TouchableOpacity
                  className=" bg-black p-[17px] rounded-r-md  w-full items-center"
                  onPress={getLocation}
                  title="">

                  <Text className="text-white font-bold"> Use My Location </Text>

                </TouchableOpacity>

              </View>
              
            </View>

            {/* bedroom */}
            <View className="mt-6">
              <ScrollRoomNumber setFor="bedrooms" title="Bedrooms" />
            </View>

            {/* bathroom */}
            <View className="mt-6">
              <ScrollRoomNumber setFor="bathrooms" title="Bathrooms" />
            </View>

                    {/* PropertyType */}
                    <View className="mt-6">
                      <TouchableOpacity
                        onPress={handleOptionsPresentModal}
                        className=""
                      >
                        <Text className="text-lg opacity-80">
                          Property Type
                        </Text>
                        <Text className="text-sm opacity-60">Any</Text>
                      </TouchableOpacity>
                    </View>

            {/* Features */}
            <View className="mt-6">
              <TouchableOpacity onPress={handleOptionsPresentModal}>
                <Text className="text-lg opacity-80">Features</Text>
                <Text className="text-sm opacity-60">Any</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity
                  className=" bg-black p-[17px] rounded-full mt-4 w-full items-center"
                  onPress={handlePresentModal}
                  title="">

                  <Text className="text-white font-bold">Search</Text> 
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
        {/* end */}
        
        {/* options bottom sheet */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          className="h-full"
          ref={optionsBottomSheetRef}
          snapPoints={["53%,100%"]}
          enablePanDownToClose={true}
          animateOnMount={true}>

          <BottomSheetScrollView
            className="pt-5 h-full "
            decelerationRate="fast"
            vertical={true}
            showsVerticalScrollIndicator={false}>

            <View className="px-4">
              
              <Text className="text-xl opacity-80  font-bold my-4">
                Property Type
              </Text>

              {PropertyType.map((property) => {
                return (
                  <View className="flex-row justify-between mb-5 ">
                    <Text className="text-lg opacity-70">{property}</Text>
                    <Checkbox
                      value={isChecked}
                      className="opacity-80"
                      onValueChange={setChecked}
                    />
                  </View>
                );
              })}

              <TouchableOpacity className="bg-black w-full  py-5 rounded-xl">
                <Text className="text-white text-center font-bold">Apply</Text>
              </TouchableOpacity>

            </View>

          </BottomSheetScrollView>
        </BottomSheetModal>
      </BottomSheetModalProvider>

    </View>
  
            
          </BottomSheetScrollView>

          </BottomSheetModal>
      </BottomSheetModalProvider>

    </>
  );
};

export default Home;
