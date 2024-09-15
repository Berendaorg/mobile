import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { RefreshControl, ScrollView, TextInput } from "react-native-gesture-handler";
import icon from "../../constants/icon";
import SearchProperty from "../../components/SearchProperty";
import MainHouseCard from "../../components/MainHouseCard";
import { Link, router } from "expo-router";

import { fetch } from "../../mocks/fetch";

import { useDispatch, useSelector } from "react-redux";

import { getDevelopers, selectdevelopers, selectDeveloperLoading } from "../../slices/developerSlice";
import { getListings, selectListingLoading, selectListings } from "../../slices/listingSlice";

import LoadingScreen from "../../components/LoadingScreen";
import * as Location from "expo-location";
import { 
  setLocation,
  selectedBedrooms,
  selectPrice,
  selectPriceMin,
  selectPriceMax,
  selectBathrooms,
  selectPropertyType,
  selectHouseAge,
} from "./../../slices/searchSlice"
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import  {
  BottomSheetScrollView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { getlocations, selectLocationLoading, selectLocations } from "../../slices/locationSlice";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import LabelInput from "../../components/LabelInput";
import ScrollRoomNumber from "../../components/ScrollRoomNumber";
import Checkbox from "expo-checkbox";
import AdCard from "../../components/AdCard";

const Explore = () => {

  const dispatch = useDispatch()
  
  const getLocation = async () => {
    console.log("get location")
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords)
    setLocation(location.coords);// not workingwwww
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isChecked, setChecked] = useState(false);
  const PropertyType = ["Any", "House", "Apartment", "Condo", "Real Estate"];
  const houseAge = 21;
  const developers = useSelector(selectdevelopers)
  const isDeveloperLoading = useSelector(selectDeveloperLoading)
  
  const listings = useSelector(selectListings)
  const isListingLoading = useSelector(selectListingLoading)

  const locations = useSelector(selectLocations)
  const isLocationLoading = useSelector(selectLocationLoading)
  
  const [SelectedFilter, setSelectedFilter] = useState("apartment");
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const price = useSelector(selectPrice);
  const priceMax = useSelector(selectPriceMax);
  const priceMin = useSelector(selectPriceMin);

  const searchBottomSheetRef = useRef(null)
  const optionsBottomSheetRef = useRef(null)

  function handlePresentModal() {
    searchBottomSheetRef.current?.present();
    searchBottomSheetRef.current?.dismiss();
  }

  function handleOptionsPresentModal() {
    optionsBottomSheetRef.current?.present();
  }

  useEffect(()=>{
    dispatch(getListings()) // should be the only in this page
    dispatch(getDevelopers())
    dispatch(getlocations())
  },[])

  const handleSelectingFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const [refreshing,setRefreshing] = useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(1000000);

  return (
    <>
    <ScrollView
      className="flex-1 gap-0 bg-[#FAFAFB]"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      >

{/*  */}
    <TouchableOpacity onPress={() => handlePresentModal()}>
        <View>
          <SearchProperty placeholder={"Search 162 properties"} />
        </View>
{/*  */}
</TouchableOpacity>
    <View className="">
        
        <View className=" px-4 pt-3 flex flex-row items-center justify-between">
          <Text className="text-lg font-bold">Developers</Text>
          <Link
          href="/developers">
              View all
          </Link>
        </View>
{/*  */}
    {
      (isDeveloperLoading) ? <LoadingScreen /> :
        <FlatList
          data={developers}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            
            <TouchableOpacity onPress={() => 
              router.push({
              pathname:"/developer_details",
              params: {id:item.id} })}>
              <Image
              source={{ uri: item.profilePhoto }}
              className="w-32 h-32 mr-4 mt-3 rounded-[10px]"/>
            </TouchableOpacity>

          )}
        />
    }
    </View>

    {/* <View className="w-full h-full border"> */}
      <AdCard />
    {/* </View> */}

{/*  */}
      <View className="px-4 pt-4">
        <Text className="text-lg font-bold">What are you looking for?</Text>
        <View className="flex flex-row pt-4 items-center gap-2">
          <Text
            className={`py-2 px-3 shadow-lg rounded-[50px] flex-1 text-center ${
              SelectedFilter === "apartment"
                ? "bg-highlight text-white"
                : "bg-white"
            }`}
            onPress={() => handleSelectingFilter("apartment")}
          >
            Apartment
          </Text>
          <Text
            className={`py-2 px-3 shadow-lg rounded-[50px] flex-1 text-center ${
              SelectedFilter === "residential"
                ? "bg-highlight text-white"
                : "bg-white"
            }`}
            onPress={() => handleSelectingFilter("residential")}
          >
            Residential
          </Text>
          <Text
            className={`py-2 px-3 shadow-lg rounded-[50px] flex-1 text-center ${
              SelectedFilter === "hotel"
                ? "bg-highlight text-white"
                : "bg-white"
            }`}
            onPress={() => handleSelectingFilter("hotel")}
          >
            Hotel
          </Text>
        </View>
      </View>
{/*  */}
        {
        (isListingLoading) ? <LoadingScreen />:
      <>
      { locations?.map((item) => 
      (
      <View>
          <View className="px-4 pt-4 flex flex-row items-center justify-between">
            <View className="flex flex-col gap-1">
              <Text className="font-bold text-[18px]">{item.name}</Text>
              <Text className="">127 results</Text>
            </View>
            <View>
              <Link
              href={`/developer_details/${item.id}`}
              >
                View all
                </Link>
            </View>
          </View>

          <View className="pl-2 pb-4 w-full">
             <FlatList
              data={listings}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              // refreshing={isDeveloperLoading}
              // onRefresh={dispatch(getListings())}
              renderItem={({ item }) => (
                <MainHouseCard listing={item} width="" />
              )}
              className="w-full"
            />
          </View>
        </View>
      )
    )
  } 
  </>
}

    </ScrollView>

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
                backgroundColor="#C33535"
                activeFontStyle={{
                  fontWeight: "bold",
                  color: "#C33535",
                }}
                appearance="dark"
                values={["Buy", "Lease"]}
                selectedIndex={selectedIndex}
                onChange={(event) => {
                  setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                }}
              />

      <ScrollView className="px-2 pb-10">
        <View className="flex-col  mt-4">
          <View className="flex flex-row items-center justify-center mt-4 relative">
              
              <View className="flex-[4]">
                <LabelInput title="Location" 
                customStyles="w-full"
                setFor="location"
                />
              </View>

              <View className="flex flex-col items-center gap-4 justify-between">
                <Text className="text-highlight">Your location</Text>
                <TouchableOpacity
                  className="pl-2"
                  onPress={getLocation}
                  title="">

                  <Image source={icon.Locationicon} className="w-8 h-8 border border-black"/>

                </TouchableOpacity>

              </View>
              
            </View>
          {/* sizes */}
          <View className="">
            <View className="flex-row gap-x-4 mt-8">

              {/* Price Min */}
              <View className="flex-1">
                {/* <LabelInput
                setFor="price"
                type="numeric"
                title="Price" 
                customStyles="w-full" /> */}
<Text className="text-lg opacity-80 mb-2 text-black">Price</Text>
<Slider
       theme={{
    disableMinTrackTintColor: '#C33535',
    maximumTrackTintColor: '#f4f4f4',
    minimumTrackTintColor: '#C33535',
    cacheTrackTintColor: '#333',
    bubbleBackgroundColor: '#C33535',
    heartbeatColor: '#C33535',
  }}
      progress={progress}
      minimumValue={min}
      maximumValue={max}
      step={Math.round(Math.abs(max - min) / 100)}
    />
              </View>

            </View>
          

            {/* bedroom */}
            <View className="mt-6">
              <ScrollRoomNumber setFor="bedrooms" title="Bedrooms" data={["Any", "1", "2", "3", "4", "5+"]} rounded={"rounded-full"}/>
            </View>

            {/* bathroom */}
            <View className="mt-6">
              <ScrollRoomNumber setFor="bathrooms" title="Bathrooms" data={["Any", "1", "2", "3", "4", "5+"]} rounded={"rounded-full"} />
            </View>

                    {/* PropertyType */}
                    {/* <View className="mt-6">
                      <TouchableOpacity
                        onPress={handleOptionsPresentModal}
                        className=""
                      >
                        <Text className="text-lg opacity-80">
                          Property Type
                        </Text>
                        <Text className="text-sm opacity-60">Any</Text>
                      </TouchableOpacity>
                    </View> */}
 <View className="mt-6">
              <ScrollRoomNumber setFor="propertytype" title="Property type" data={PropertyType} rounded={"rounded-[10px]"} />
            </View>
            {/* Features */}
            {/* <View className="mt-6">
              <TouchableOpacity onPress={handleOptionsPresentModal}>
                <Text className="text-lg opacity-80">Features</Text>
                <Text className="text-sm opacity-60">Any</Text>
              </TouchableOpacity>
            </View> */}
             <View className="mt-6">
              <ScrollRoomNumber setFor="features" title="Features" data={["Any","Garage", "Security", "Pool"]} rounded={"rounded-[10px]"}/>
            </View>
            <TouchableOpacity
                  className=" bg-highlight p-[17px] rounded-full mt-4 w-full items-center"
                  onPress={() => 
                    router.push("/results")}
                  title="" >

                  <Text className="text-white font-bold">Search</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
        {/* end */}
        
        {/* options bottom sheet */}
      {/* <BottomSheetModalProvider>
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
      </BottomSheetModalProvider> */}

    </View>
  
            
          </BottomSheetScrollView>

          </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

export default Explore;
