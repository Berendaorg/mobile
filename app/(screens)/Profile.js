import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useSelector,useDispatch } from "react-redux";

import { selectUser,getUser } from "../../slices/userSlice";

const Profile = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(()=>{
    dispatch(getUser())
  },[])

  return (
    <>
    <View className="h-full w-full pt-3  flex-col gap-6 justify-start items-center">
      <Image
        source={{
          uri: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        }}
        className="w-[100px] h-[100px] rounded-full">
        </Image>
      
      <View className="flex flex-row justify-around w-full">
        <Text className="rounded-lg pt-3 px-1 font-bold border border-black items-center p-3">
          {user.firstName}
        </Text>
        <Text className="rounded-lg pt-3 px-1 font-bold border border-black items-center p-3">
          {user.lastName}
        </Text>
      </View>

        <Text className="rounded-lg font-bold border border-black items-center p-3 w-full text-center">
        {user.email}
        </Text>
      
        <Text className="rounded-lg font-bold border border-black items-center p-3 w-full text-center">
          {user.phoneNumber}
        </Text>
    </View>
    </>
  );
};

export default Profile;
