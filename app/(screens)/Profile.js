import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useSelector,useDispatch } from "react-redux";

import { selectUser,getUser, logOut } from "../../slices/userSlice";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(()=>{
    dispatch(getUser())
  },[])
return (
  <>
  {
    (!user.isLoggedIn)? 
    <>
    <View className="px-4 pb-4 mt-5 justify-end">
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => dispatch(getUser())}
        >
          <Text className="text-center text-white">Sign In</Text>
        </TouchableOpacity>
      </View>
    </>:
     <>
    <View className="h-fit full w-full pt-3 flex-col gap-5 justify-start items-center">
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
  </>
  )}   




export default Profile;
