import { ScrollView, Text,View,TouchableOpacity } from "react-native";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getSavedListings,
          deleteSavedListing,
          selectSaved,
          selectListingLoading,
          selectListings
 } from "../../slices/listingSlice";
import MainHouseCard from "../../components/MainHouseCard";
import LoadingScreen from "../../components/LoadingScreen";
import { RefreshControl } from "react-native-gesture-handler";

const Saved = () => {

  const dispatch = useDispatch(selectSaved)
  const listings = useSelector(selectListings);
  const isListingLoading = useSelector(selectListingLoading)

  const [refreshing,setRefreshing] = useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  useEffect(()=>{
    dispatch(getSavedListings())
  },[])

  if(isListingLoading)
    return <LoadingScreen />
  
  return (
    <>
    <ScrollView
      className="bg-[#FAFAFB] px-4"
      decelerationRate="fast"
      vertical={true}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        
          {listings?.map((item, index) => ( 
            <MainHouseCard listing={item} key={index} />
          ))}

      {/*@deprecated to be replaced by ButtonPrimary  */}
    </ScrollView>
    
    <View className="p-4 justify-end ">
      <TouchableOpacity
        className="py-3 bg-black rounded-[30px]"
        onPress={() => dispatch(deleteSavedListing())}
      >
        <Text className="text-center text-white">Clear all</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

export default Saved;
