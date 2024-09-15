import React, { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import image from "../../../constants/image";
import SearchProperty from "../../../components/SearchProperty";
import MainHouseCard from "../../../components/MainHouseCard";
import { useSelector, useDispatch } from "react-redux";
import { getDevelopersById,selectdeveloperById } from "../../../slices/developerSlice";
import { useGlobalSearchParams } from "expo-router";
import { getListings, selectListings } from "../../../slices/listingSlice";
import { FlatList } from "react-native-gesture-handler";
import AdCard from "../../../components/AdCard";

import { roomData } from "../../../data";

// 
import { listingData } from "../../../data";
import icon from "../../../constants/icon";
import Tag from "../../../components/Tag";
// 

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
    // <ScrollView>
      <View className="bg-white w-full h-full">
      {/* <View className="relative"> */}
      <Text className="text-3xl p-2">
        Title
      </Text>
      <View className="relative w-full h-[300px] pt-[-100px]">
        <View className="absolute w-full h-full top-8 left-1 z-10">
            <Tag />
        </View>
            <Image
            source={roomData[0].image}
            className="w-full h-[300px]"
            resizeMode="contain"
          />
        </View>

<Text className="font-bold px-2">
  June 2, 2024  
</Text>
        <Text className="px-2 py-2">
          
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra ligula a diam venenatis, sit amet feugiat metus hendrerit. Aliquam malesuada odio sed augue tincidunt elementum. Suspendisse tempus commodo pellentesque. Sed posuere neque et purus sagittis, at dignissim ipsum faucibus. Vivamus congue varius neque a tempor. Praesent porttitor dignissim pretium. Curabitur a vestibulum urna. Duis eget eleifend lacus. Nullam eu aliquet mi. Nulla maximus ac felis id aliquam. Ut vitae diam tortor. Nullam sit amet ipsum sed risus maximus accumsan at id quam. Curabitur eleifend venenatis urna. Suspendisse id justo eget nulla pellentesque ultricies ut ornare lacus.

Vestibulum vitae consectetur tortor, id eleifend justo. Donec quis feugiat augue, ac pretium eros. Sed suscipit iaculis ante, at consectetur purus gravida mollis. In et tortor massa. Nunc metus nibh, dignissim ut vestibulum in, feugiat a velit. Proin id hendrerit orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum et ligula quis tellus tristique consectetur.

Nullam pellentesque lectus at leo consequat, non pellentesque nunc posuere. Suspendisse mattis odio in varius maximus. Integer vehicula nisl eget risus imperdiet, in rutrum mi sagittis. Vivamus sit amet bibendum ligula. Sed in mattis purus, a imperdiet dui. Integer ac purus nisl. Donec aliquam ornare sodales. Aenean sed sodales mauris. Integer sollicitudin libero et augue accumsan, ac faucibus quam consectetur.

Cras gravida erat ut arcu cursus condimentum. Vestibulum lacus metus, interdum sed varius eu, gravida nec libero. Mauris porttitor arcu sed nulla ultricies auctor. Nunc quis egestas nisi, sed maximus augue. Morbi a nulla eros. Duis porta orci eu eros bibendum semper. Nulla feugiat erat ut neque varius vulputate. Ut ex libero, tempor in ante quis, tempus pellentesque massa. Nulla ultrices quam enim. Aliquam semper tincidunt libero vel hendrerit. Ut ut dui non purus vestibulum tristique nec vitae tellus.

Nam sit amet cursus nisi. Donec turpis lorem, mollis quis hendrerit eu, egestas tincidunt velit. Curabitur sed pellentesque mi, quis blandit orci. Curabitur et porta justo. Suspendisse nec dolor ut metus finibus cursus et nec nisl. Etiam vehicula sed ligula a tempor. Cras varius facilisis dolor, vel efficitur massa tincidunt id. Vestibulum eget bibendum purus. Phasellus aliquam at diam eu placerat. Nulla vulputate, magna a faucibus malesuada, justo eros efficitur nunc, convallis pellentesque nisi metus eu purus. Nulla varius commodo massa, nec faucibus nulla consequat ut. 

        </Text>

          {/* <Tag /> */}
      {/* </View> */}
      </View>
    // {/* </ScrollView> */}
  );
};

export default DeveloperDetail;