import { Button, ScrollView, Text, View } from "react-native";
import React from "react";

// import HouseCard from "../../../components/HouseCard";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MainHouseCard from "../../../components/MainHouseCard";
import { getListings, selectListingLoading, selectListings } from "../../../slices/listingSlice";
import SearchProperty from "../../../components/SearchProperty";
import { listingData } from "../../../data";
import BoardCard from "../../../components/BoardCard";
import AdCard from "../../../components/AdCard";
// import {selectHouseData} from "../../../slices/houseSlice";

const Home = () => {

  // const houseData = useSelector(selectHouseData)
  const listings = useSelector(selectListings)

  const filters = ["bedrooms", "bathrooms", "property type", "price"]

  return (
    <ScrollView>
    <SearchProperty placeholder={'search property'} />
    <View className="flex flex-col items-center justify-center px-4 pt-4 mx-auto w-full">
    {/* <View className="px-4 pt-3">
      <Text className="text-lg font-bold">Announcements</Text>
    </View>  */}


<FlatList
        data={listings}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        refreshing={true}
        onRefresh={()=>{}}
        renderItem={({ item }) => (
          <MainHouseCard listing={item} width="w-full" />
        )}
        className="w-full"
      />   
    {/* </View> */}
    {/* <View className="px-2"> */}

    <AdCard />

    <FlatList
        data={listings}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        refreshing={true}
        onRefresh={()=>{}}
        renderItem={({ item }) => (
          <MainHouseCard listing={item} width="w-full" />
        )}
        className="w-full"
      />   

    <AdCard />

    <FlatList
        data={listings}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        refreshing={true}
        onRefresh={()=>{}}
        renderItem={({ item }) => (
          <MainHouseCard listing={item} width="w-full" />
        )}
        className="w-full"
      />   

   
      </View>
  </ScrollView>
  );
};

export default Home;