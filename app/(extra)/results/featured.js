import { Button, ScrollView, Text, View } from "react-native";
import React from "react";

// import HouseCard from "../../../components/HouseCard";

import { useSelector } from "react-redux";
import MainHouseCard from "../../../components/MainHouseCard";
import { getListings, selectListingLoading, selectListings } from "../../../slices/listingSlice";
// import {selectHouseData} from "../../../slices/houseSlice";

const Home = () => {

  // const houseData = useSelector(selectHouseData)
  const listings = useSelector(selectListings)

  const filters = ["bedrooms", "bathrooms", "property type", "price"]

  return (
    <>
      <ScrollView
          className="flex-1 gap-0"
          decelerationRate="fast"
          vertical={true}
          showsVerticalScrollIndicator={false}>
          {listings.map((house, index) => ( <MainHouseCard listing={house} width="w-full" />))}
      </ScrollView>
  </>
  );
};

export default Home;