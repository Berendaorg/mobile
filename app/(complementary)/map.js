import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
// import * as Icon from "react-native-feather";
// import { themeColors } from "../themes";


export default function MapScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  return (
    <View className="flex-1">
  
        <MapView
          initialRegion={{ 
            latitude: 9.006664177654724,
            longitude: 38.7565046675449,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          className="flex-1">

        <Marker
          coordinate={{
            latitude: 9.006664177654724,
            longitude: 38.7565046675449,
          }}
          title={'Area'}
          description={'description'}
        />

        </MapView>
      {/* 
      <MapView
        // initialRegion={{
          // latitude: params.map.latitude,
          // longitude: params.map.longitude,
          // latitudeDelta: 0.01,
          // longitudeDelta: 0.01,
        // }}
        className="flex-1"
        mapType="standard">

        <Marker
          coordinate={{
            // latitude: params.map.latitude,
            // longitude: params.map.longitude,
          }}
          title={'params.name'}
          description={'params.description'}
        />

      </MapView>
       */}

       <Button title="Get Directions"/>

      
      {/* <View className="flex-row justify-between px-5 pt-10 mb-5">
        <View>
          <Text className="text-lg text-gray-700 font-semibold">
            Estimated Arrival
          </Text>
          <Text className="text-3xl font-extrabold text-gray-700">10 - 15 Minutes Estimated</Text>
          <Text className="tu-2 text-gray-700 font-semibold">Distance: 2.5 km</Text>
        </View>
      </View> */}
    </View>
  );
}
