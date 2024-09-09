import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import icon from "../../constants/icon";
import SearchProperty from "../../components/SearchProperty";
import MainHouseCard from "../../components/MainHouseCard";
import { Link, router } from "expo-router";

import { fetch } from "../../mocks/fetch";

import { useDispatch, useSelector } from "react-redux";

import { getDevelopers, selectdevelopers, selectDeveloperLoading } from "../../slices/developerSlice";
import { getListings, selectListingLoading, selectListings } from "../../slices/listingSlice";
import { listingData } from "../../data";
import LoadingScreen from "../../components/LoadingScreen";

const Explore = () => {

  const dispatch = useDispatch()
  
  const developers = useSelector(selectdevelopers)
  const isDeveloperLoading = useSelector(selectDeveloperLoading)
  
  const listings = useSelector(selectListings)
  const isListingLoading = useSelector(selectListingLoading)
  
  const [SelectedFilter, setSelectedFilter] = useState("apartment");


  useEffect(()=>{
    dispatch(getDevelopers())
    dispatch(getListings())
  },[])
  

  // async function findListings () {
  //   const response = await fetch('https://fake-api.example.com/api/v1/listings/search',{method:'GET'})
  //   setRealestates(response.data)
  // }

  const handleSelectingFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <ScrollView
      className="flex-1 gap-0 bg-[#FAFAFB]"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}>
{/*  */}
      <SearchProperty placeholder="Search Property" />
{/*  */}
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
              pathname:"/developers",
              params: {id:item.id}
              })}>
              
              <Image
                source={{ uri: item.profilePhoto }}
                className="w-32 h-32 mr-4 mt-3 rounded-[10px]"
              />

            </TouchableOpacity>
            
          )}
        />
    }
      </View>
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
      { developers?.map((item) => 
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

          <View className="pl-2 pb-4">
             <FlatList
              data={listings}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              // refreshing={isDeveloperLoading}
              // onRefresh={dispatch(getListings())}
              renderItem={({ item }) => (
                <MainHouseCard listing={item} width="100%" />
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
  );
};

export default Explore;
