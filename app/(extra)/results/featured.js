import { Button, ScrollView, Text, View } from "react-native";
import React from "react";

// import HouseCard from "../../../components/HouseCard";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MainHouseCard from "../../../components/MainHouseCard";
import { getListings, selectListingLoading, selectListings } from "../../../slices/listingSlice";
import SearchProperty from "../../../components/SearchProperty";
// import {selectHouseData} from "../../../slices/houseSlice";

const Home = () => {

  // const houseData = useSelector(selectHouseData)
  const listings = useSelector(selectListings)

  const filters = ["bedrooms", "bathrooms", "property type", "price"]

  return (
    <>
    <SearchProperty placeholder={'search property'} />
    <View className="px-2">
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
  </>
  );
};

export default Home;