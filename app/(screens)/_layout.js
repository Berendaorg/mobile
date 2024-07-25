import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "react-native";
import { Text, View } from 'react-native';

const ScreensLayout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
     <Drawer
        screenOptions={{
          drawerStyle: { backgroundColor: "#012847" },
        }}>

      <Drawer.Screen name="home"   
        options={{
          drawerLabel:"Home",
          title:"Home",
            headerStyle: { backgroundColor: "#012847" },
            headerTintColor: "white",
            drawerLabelStyle: {
              color: "white",
            },
        }}
        />
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: "Search",
            title: "Search",
            headerStyle: { backgroundColor: "#012847" },
            headerTintColor: "white",
            drawerLabelStyle: {
              color: "white",
            },
          }}
        />
        <Drawer.Screen
          name="add listing"
          options={{
            drawerLabel: "Add listing",
            headerStyle: { backgroundColor: "#012847" },
            headerTintColor: "white",
            title: "Add listing",
            drawerLabelStyle: {
              color: "white",
            },
          }}
        />
        <Drawer.Screen name="saved"  
        options={{
          drawerLabel:"Saved",
          title:"Saved",
          headerStyle: { backgroundColor: "#012847" },
          headerTintColor: "white",
          drawerLabelStyle: {
            color: "white",
          },
        }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            headerStyle: { backgroundColor: "#012847" },
            headerTintColor: "white",
            drawerLabelStyle: {
              color: "white",
            },
          }}
        />
      {/* <Drawer.Screen name="details"  component={Details} /> */}
      {/* <StatusBar barStyle="light-content" style="dark" /> */}
    </Drawer>
    </GestureHandlerRootView>
  );
};

export default ScreensLayout;
