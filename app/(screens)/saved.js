import { ScrollView, Text,View,TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getSavedListings,
          deleteSavedListing,
          selectSaved,
          selectListingLoading
 } from "../../slices/listingSlice";
import MainHouseCard from "../../components/MainHouseCard";
import LoadingScreen from "../../components/LoadingScreen";

const Saved = () => {
  const dispatch = useDispatch(selectSaved)
  const saved = useSelector(selectSaved);
  const isSavedLoading = useSelector(selectListingLoading)

  useEffect(()=>{
    dispatch(getSavedListings())
  },[])

  if(isSavedLoading)
    return <LoadingScreen />
  
  return (
    <ScrollView
      className="flex-1 gap-0"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}>
        
          {saved?.map((item, index) => ( 
            <MainHouseCard listing={item} key={index} />
          ))}

      {/*@deprecated to be replaced by ButtonPrimary  */}
      <View className="px-4 pb-4 justify-end ">
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => dispatch(deleteSavedListing())}
        >
          <Text className="text-center text-white">Clear all</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

export default Saved;
