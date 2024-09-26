import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import image from "../../../constants/image";
import SearchProperty from "../../../components/SearchProperty";
import MainHouseCard from "../../../components/MainHouseCard";
import { useSelector, useDispatch } from "react-redux";
import { getDevelopersById,selectdeveloperById } from "../../../slices/developerSlice";
import { useGlobalSearchParams } from "expo-router";
import { getListings, selectListings } from "../../../slices/listingSlice";
import { FlatList } from "react-native-gesture-handler";
import BoardCard from "../../../components/BoardCard";
 
import { boardData } from "../../../data";


const DeveloperDetail = () => {
  const dispatch = useDispatch()
  const { id } = useGlobalSearchParams();

  const developer = useSelector((state)=>selectdeveloperById(state,Number(id)));
  const listings = useSelector(selectListings)

  useEffect(()=>{
    dispatch(getDevelopersById(id))
    dispatch(getListings())
    console.log(developer)
  },[])

  return (
    <ScrollView>
      <View className="bg-[#FAFAFB] w-full h-full">
        <View className="px-4 py-8 bg-highlight flex flex-row gap-1 items-center">
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RL7jZBdy-GACBLVMZSCDp44yr93lDryEQQ&s",
            }}
            className="w-24 h-24 mr-4 mt-3 rounded-[10px]"
          />
          <View className="flex flex-col gap-2">
            <Text className="text-lg font-semibold text-primary">
              {developer?.name}
            </Text>
            <Text className="text-sm text-primary w-[40%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </Text>
          </View>
        </View>

        <View className="px-4 pt-4"> 

      {/* <View className="pl-2 pb-4"> */}
          <FlatList
            data={boardData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            // refreshing={isDeveloperLoading}
            // onRefresh={dispatch(getListings())}
            renderItem={({ item }) => (
              <BoardCard board={item} width="100%" />
            )}
            className="w-full"
          />
        {/* </View>        */}

        </View>

          <View>
            <SearchProperty placeholder={"Search 162 properties"} />
          </View>

          <View className="px-2 pt-4 h-full">
            <ScrollView
              decelerationRate="fast"
              vertical={true}
              showsVerticalScrollIndicator={false}
            >
              {listings.map((item) => (
                <MainHouseCard listing={item} width={"w-full"} key={item} />
              ))}
            </ScrollView>
          </View>
        </View>

    </ScrollView>
  );
};

export default DeveloperDetail;
