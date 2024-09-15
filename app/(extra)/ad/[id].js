import React, { useEffect } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import image from "../../../constants/image";
import SearchProperty from "../../../components/SearchProperty";
import MainHouseCard from "../../../components/MainHouseCard";
import { useSelector, useDispatch } from "react-redux";
import { getDevelopersById,selectdeveloperById } from "../../../slices/developerSlice";
import { useGlobalSearchParams } from "expo-router";
import { getListings, selectListings } from "../../../slices/listingSlice";
import { FlatList } from "react-native-gesture-handler";
import AdCard from "../../../components/AdCard";
import { addSavedListing, deleteSavedListing, getListingsById, selectListingById } from "../../../slices/listingSlice";

import { roomData } from "../../../data";

// 
import { listingData } from "../../../data";
import icon from "../../../constants/icon";
import Tag from "../../../components/Tag";
import { SafeAreaView } from "react-native-safe-area-context";
import CarouselRoom from "../../../components/CarouselRoom";
import { StatusBar } from "expo-status-bar";
// 

const DeveloperDetail = () => {
  const dispatch = useDispatch()
  const { id } = useGlobalSearchParams();

  const developer = useSelector((state)=>selectdeveloperById(state,Number(id)));
  const listings = useSelector(selectListings)
  const listing = useSelector((state)=>(selectListingById(state,Number(id))));

  useEffect(()=>{
    dispatch(getDevelopersById(id))
    dispatch(getListings())
    console.log(developer)
  },[])

  const { width } = Dimensions.get("window");
  const rooms = [
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 1,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 2,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 3,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 4,
    },
    {
      image: image.detailimg,
      title: "Bedroom",
      index: 5,
    },
  ];

  return (
    <SafeAreaView>
    <ScrollView  className="bg-[#FAFAFB] h-full w-full">

      <View className="bg-[#FAFAFB] h-full w-full">          
        
        {/* Navigation */}

        <View className="relative">

     
        </View>
        {/* Navigation */}
        
        {/* carousel */}
          <CarouselRoom rooms={rooms} width={width}/>
        {/* carousel */}
        
        {/* listing details  */}
        <View className="px-2 mt-4">
          {/* availability */}
          <View className="flex-row items-center gap-2">
            
              <>
                <Text className="p-2 bg-green-600 rounded-full w-2 h-2"></Text>
                <Text className=" text-green-500">Available </Text>
              </> 
              <>
                <Text className="p-2 bg-slate-600 rounded-full w-2 h-2"></Text>
                <Text className=" text-white">Off-market </Text>
              </>
            
          </View>

          <View className="p-3 flex flex-col gap-2 bg-highlight rounded-lg mt-2 ml-1">
            <View className="flex flex-row justify-between px-3 items-center">
              <Text className="font-bold text-[20px] text-primary ">
                Some Name
              </Text>
              <Text className="text-[20px] text-primary font-bold">
                ETB 10000
              </Text>
            </View>
              <View className="px-3 py-2 flex flex-row items-center justify-between">
                <View className="flex flex-row items-center  gap-1">
                  <Image source={icon.Whitehouseicon} className="w-8 h-8" />
                  <View className="flex flex-col  justify-between">
                    <Text className="text-sm  text-white">Type</Text>
                    <Text className="text-lg font-bold text-white">Villa</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center  gap-1">
                  <Image source={icon.Whitebedicon} className="w-8 h-8" />
                  <View className="flex flex-col  justify-between">
                    <Text className="text-sm  text-white">Bedrooms</Text>
                    <Text className="text-lg font-bold text-white">6 Bedrooms</Text>
                  </View>
                </View>
              </View>
            <View className="flex flex-row items-center">
              <Image
                source={icon.Whitelocationicon}
                className="w-5 h-5  ml-2"
              />
              <Text className=" text-[15px] text-white">675546746</Text>
            </View>

            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-2 pl-3 mr-3">
                <Image
                  source={icon.Whitebedicon}
                  className="w-4 h-4  ml-1"
                />
                <Text className=" text-[14px] text-white">4</Text>
              </View>

              <View className="flex flex-row items-center gap-2 mr-3">
                <Image
                  source={icon.Whitebathicon}
                  className="w-4 h-4  ml-2"
                />
                <Text className=" text-[14px] text-white">3</Text>
              </View>

              <View className="flex flex-row items-center gap-2 mr-3">
                <Image
                  source={icon.Whiteareaicon}
                  className="w-4 h-4  ml-2"
                />
                <Text className=" text-[14px] text-white">140</Text>
              </View>
            </View>

          </View>

          {/* 
          <View className="mt-4">
            <Text className="text-white text-lg ">{house.description}</Text>
          </View> 
          */}

        </View>

        {/* Map  */}
        <View>
          {/* <View className="flex-1 border border-white h-72">
            <MapView
              region={{
                latitude: house.location.coords.lat,
                longitude: house.location.coords.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              className="flex-1"
            >
              <Marker
                coordinate={{
                  latitude: house.location.coords.lat,
                  longitude: house.location.coords.lng,
                }}
                title={house.address}
                description={"description"}
              />
            </MapView>
          </View> */}

          <View className="items-center justify-center flex-row px-6 py-6">
            {/* <TouchableOpacity className="bg-white flex-row justify-evenly text-black p-4 mt-4 rounded-2xl inline">
              <Text className="text-black font-bold">Get Directions</Text>
            </TouchableOpacity> */}

            <TouchableOpacity 
            
            className="bg-highlight text-primary w-full p-4 rounded-2xl inline">
              <Text className="text-white font-bold text-center">
                Request A Private Showing
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
    <StatusBar backgroundColor="#012847" style="light" />
  </SafeAreaView>
  );
};

export default DeveloperDetail;
