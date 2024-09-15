import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { useSelector,useDispatch } from "react-redux";

import { selectUser,getUser, logOut, selectUserLoading, selectUserLoggedIn } from "../../slices/userSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import LoadingScreen from "../../components/LoadingScreen";
import icon from "../../constants/icon";

const Profile = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectUserLoading)
  const isLoggedIn = useSelector(selectUserLoggedIn)
  const [isDropped, setIsDropped] = useState(false);


  if (isLoading) return <LoadingScreen />

return (
  <View className="bg-[#FAFAFB] h-full w-full">
  {
    (!isLoggedIn)? 
    <>
    {/* signin */}
    <View className="px-4 pb-4 mt-5 justify-end ">
      <View className="py-4 flex flex-col gap-4">
        <TextInput type="text" placeholder="Email/Phone" className="text-black  border border-black/80 px-4 py-4 rounded-full" />
        <TextInput type="text" placeholder="Password" className="text-black  border border-black/80 px-4 py-4 rounded-full" />
      </View>
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => dispatch(getUser())}
        >
          <Text className="text-center text-white">Sign In</Text>
        </TouchableOpacity>
      </View>
    </>:
     <>
     {/* profile */}
    <View className="w-full pt-4 flex flex-col justify-center">
      <View className="flex flex-row items-center justify-center">
      <Image
        source={{
          uri: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
        }}
        className="w-[120px] h-[120px] rounded-full">
        </Image>
        </View>
      <View className="flex flex-row w-full pt-4 item-center justify-center">
        <Text className="rounded-lg pt-3 text-xl font-semibold ">
          {user.firstName}
        </Text>
        <Text className="rounded-lg pt-3 text-xl font-semibold ">
          {user.lastName}
        </Text>
      </View>

     <TouchableOpacity onPress={() => setIsDropped(!isDropped)}> 
      <View className={`flex flex-row item-center ${isDropped ? "py-2" : "py-8" } px-4 justify-between`}>
        <Text className="text-lg font-bold">Account Information</Text>
        <Image source={icon.Downarrow} className="w-6 h-6 opacity-80" />
      </View>
      </TouchableOpacity>
      {isDropped ? (<View className="px-3 flex flex-col gap-3 pb-3">
        <View className="flex flex-row items-center gap-1">
          <Text className="text-lg ">Email:</Text>
        <Text className="text-lg ">
        {user.email}
      </Text>
      </View >
      <View className="flex flex-row items-center gap-1">
      <Text className="text-lg ">Phone number:</Text>
      <Text className="text-lg ">
          {user.phoneNumber}
      </Text></View>
      </View>) : null}
        <View className="h-[1px] bg-black/50 w-full flex flex-row justify-center items-center"></View>
      

    </View>
        {/*@deprecated to be replaced by ButtonPrimary  */}
      <View className="px-4 pb-4 mt-5 justify-end">
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => dispatch(logOut())}
        >
          <Text className="text-center text-white">Log Out</Text>
        </TouchableOpacity>
      </View>
      </>
    }
  </View>
  )}   




export default Profile;
