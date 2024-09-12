import React, {useState} from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { useSelector,useDispatch } from "react-redux";

import { selectNotificationData, clearNotification } from "../../slices/notificationSlice";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

const notification = () => {
  
const notifications = useSelector(selectNotificationData);
const dispatch = useDispatch()

const [refreshing,setRefreshing] = useState(false)
const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  setTimeout(() => {
    setRefreshing(false);
  }, 2000);
}, []);


  return (
    <>
    <ScrollView
    className="bg-[#0101f4] px-4 w-full h-screen"
    decelerationRate="fast"
    vertical={true}
    showsVerticalScrollIndicator={false}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
    </ScrollView>
    <View className="bg-[#FAFAFB] flex flex-col justify-between pt-6 h-full w-full">
      <View className="justify-start">
        {notifications.map((items) => (
          <View className="w-full pb-6">
            <View className="flex flex-row items-center gap-4 px-3 w-full">
              <Image source={items.icon} className="w-8 h-8" />
              <View>
                <Text className="font-bold w-[50%]">
                  {items.body}
                </Text>
                <Text className="text-xs opacity-50">{items.time} mins ago</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View className="px-4 pb-4 justify-end ">
        <TouchableOpacity
          className="py-3 bg-black rounded-[30px]"
          onPress={() => dispatch(clearNotification())}
          >
          <Text className="text-center text-white">Clear all</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default notification;
