import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../../../constants/image";
import CarouselRoom from "../../../components/CarouselRoom";
import { StatusBar } from "expo-status-bar";
import { router, useGlobalSearchParams, useLocalSearchParams} from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import icon from "../../../constants/icon";
import { addSavedListing, deleteSavedListing, getListingsById, selectListingById } from "../../../slices/listingSlice";
import Toast from "react-native-root-toast";
import Back from "../../../components/Back";
import Heart from "../../../components/Heart";

const Details = () => {

  const dispatch = useDispatch()
  const { id } = useGlobalSearchParams();
  const listing = useSelector((state)=>(selectListingById(state,Number(id))));

  function toast (){
    Toast.show('You will recieve a call shortly',{
      duration: Toast.durations.LONG
    })
  }
  useEffect(()=>{
    dispatch(getListingsById(id))
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
      <ScrollView>

        <View className="bg-[#FAFAFB] h-full w-full">          
          
          {/* Navigation */}

          <View className="relative">

            <TouchableOpacity
              className="z-50 absolute top-4 left-4 p-2 bg-primary rounded-full"
              onPress={() => router.back()}>
              <Back />
            </TouchableOpacity>

            <TouchableOpacity
              className="z-50 absolute top-4 right-4 p-2 bg-primary rounded-full"
              onPress={() => 
              {
                !listing.saved? 
                dispatch(deleteSavedListing(listing.id)):
                dispatch(addSavedListing(listing.id))
              }}>
            <Heart saved={listing.saved}/> 
            </TouchableOpacity>

          </View>
          {/* Navigation */}
          
          {/* carousel */}
            <CarouselRoom rooms={rooms} width={width} />
          {/* carousel */}
          
          {/* listing details  */}
          <View className="px-2 mt-4">
            {/* availability */}
            <View className="flex-row items-center gap-2">
              {!listing.offMarket ?
                <>
                  <Text className="p-2 bg-green-600 rounded-full w-2 h-2"></Text>
                  <Text className=" text-green-500">Available </Text>
                </>: 
                <>
                  <Text className="p-2 bg-slate-600 rounded-full w-2 h-2"></Text>
                  <Text className=" text-white">Off-market </Text>
                </>
                }
            </View>

            <View className="p-3 flex flex-col gap-2 bg-highlight rounded-lg mt-2 ml-1">
              <View className="flex flex-row justify-between px-3 items-center">
                <Text className="font-bold text-[17px] text-primary">
                  {listing.name}
                </Text>
                <Text className="text-[17px] text-primary font-bold">
                  ETB {listing.price}
                </Text>
              </View>

              <View className="flex flex-row items-center">
                <Image
                  source={icon.blacklocationicon}
                  className="w-5 h-5 opacity-60 ml-2"
                />
                <Text className="opacity-60 text-[15px] text-primary">{listing.address}</Text>
              </View>

              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center gap-2 pl-3 mr-3">
                  <Image
                    source={icon.bedroomicon}
                    className="w-4 h-4 opacity-60 ml-1"
                  />
                  <Text className="opacity-60 text-[14px] text-primary">{listing.bedrooms}</Text>
                </View>

                <View className="flex flex-row items-center gap-2 mr-3">
                  <Image
                    source={icon.bathroomicon}
                    className="w-4 h-4 opacity-60 ml-2"
                  />
                  <Text className="opacity-60 text-[14px] text-primary">{listing.bathrooms}</Text>
                </View>

                <View className="flex flex-row items-center gap-2 mr-3">
                  <Image
                    source={icon.areaicon}
                    className="w-4 h-4 opacity-60 ml-2"
                  />
                  <Text className="opacity-60 text-[14px] text-primary">{listing.houseSize}</Text>
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

            <View className="items-center justify-center flex-row px-6 ">
              {/* <TouchableOpacity className="bg-white flex-row justify-evenly text-black p-4 mt-4 rounded-2xl inline">
                <Text className="text-black font-bold">Get Directions</Text>
              </TouchableOpacity> */}

              <TouchableOpacity 
                onPress={() =>  toast()}
              className="bg-highlight text-primary w-full p-4 rounded-2xl inline">
                <Text className="text-white font-bold text-center">
                  Request A Private Showing
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* leave a review */}
          <View className="mt-3 ">
            <View>
              <Text className="px-6 font-bold">
                Leave a review
              </Text>
              <View
                className="flex flex-row px-5 items-center mt-1"
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <Image source={icon.staricon} className="w-10 aspect-square" />
                ))}
              </View>
            </View>
            <TextInput
              multiline
              placeholder="Write a review"
              numberOfLines={6}
              className="border px-2 mx-6 mt-2 rounded-[10px]"
            />
          </View>

          {/* similar */}
          <View className="mt-6 ">
            <Text className="text-lg px-6 font-extrabold">Similar Results</Text>

            <View className="mt-4 mb-4">
              <ScrollView
                decelerationRate="fast"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {rooms.map((room) => (
                  <View
                    key={room.index}
                    onPress={() => {
                      router.push("/details/2");
                    }}
                    className="relative w-32 items-center justify-center rounded-xl ml-6"
                  >
                    <Image
                      source={room.image}
                      className=" w-32 h-20 rounded-t-xl z-10"
                    />
                    <View className="mt-2">
                      <View className="flex-row items-center gap-2">
                        <Text className="p-1 bg-green-600 rounded-full w-1 h-1"></Text>

                        <Text className=" text-green-500 text-xs">
                          Available
                        </Text>
                      </View>
                      <View className="flex-col gap-2 opacity-90 mt-[1px]">
                        <Text className="text-sm font-extrabold ">
                          ETB 200,000
                        </Text>
                        <Text className="text-xs  ">3BD . 3BA . 1,882SQFT</Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

        </View>

      </ScrollView>
      <StatusBar backgroundColor="#012847" style="light" />
    </SafeAreaView>
  );
};

export default Details;
