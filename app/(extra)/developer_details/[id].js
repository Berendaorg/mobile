import React, { useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import image from "../../../constants/image";
import SearchProperty from "../../../components/SearchProperty";
import MainHouseCard from "../../../components/MainHouseCard";
import { useSelector, useDispatch } from "react-redux";
import { getDevelopersById,selectdeveloperById } from "../../../slices/developerSlice";
import { useGlobalSearchParams } from "expo-router";
import { getListings, selectListings } from "../../../slices/listingSlice";

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
            About {developer?.name}
          </Text>
          <Text className="text-sm text-primary w-[40%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Text>
        </View>
      </View>
      <View className="px-3 py-4">
        <ScrollView
          decelerationRate="fast"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5].map((ad) => (
            <View
              key={ad}
              onPress={() => {
                router.push("/details/2");
              }}
              className="relative w-32 items-center justify-center rounded-xl mr-4"
            >
              <Image
                source={image.detailimg}
                className=" w-32 h-20 rounded-t-xl z-10"
              />
              <View className="mt-2">
                <View className="flex-row items-center gap-2">
                  <Text className="p-1 bg-green-600 rounded-full w-1 h-1"></Text>

                  <Text className=" text-green-500 text-xs">Open</Text>
                </View>
                <View className="flex-col gap-2 opacity-90 mt-[1px]">
                  <Text className="text-sm font-extrabold ">
                    some type of desc
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

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
    </View>
  );
};

export default DeveloperDetail;
