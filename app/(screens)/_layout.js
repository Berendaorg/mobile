import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
// import { Drawer } from "expo-router/drawer";
import { Image, StatusBar } from "react-native";
import { Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
// import "./gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Saved from "./saved";
import Home from "./home";
import Explore from "./Explore";
import Profile from "./Profile";
import Settings from "./settings";
import {
  NavigationContainer,
  NavigationContainerRefContext,
} from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import icon from "../../constants/icon";
import Headericons from "../../components/headericons";

const Drawer = createDrawerNavigator();

const ScreensLayout = () => {
  return (
    // <Drawer.Navigator>
    //   <DrawerContentScrollView>
    //     <DrawerItem label="Help" />
    //   </DrawerContentScrollView>
    //   <Drawer.Screen name="Explore" component={Explore} />
    //   <Drawer.Screen name="Saved" component={Saved} />
    //   <Drawer.Screen name="Profile" component={Profile} />
    //   <Drawer.Screen name="Settings" component={Settings} />
    // </Drawer.Navigator>
    // <GestureHandlerRootView className="flex-1">
    //   <Drawer.Navigator
    //     screenOptions={{
    //       drawerStyle: { backgroundColor: "#151414" },
    //     }}
    //   >
    //     <Drawer.Screen
    //       name="Home"
    //       options={{
    //         drawerLabel: "Home",
    //         title: "Home",
    //         headerStyle: { backgroundColor: "#2E2C2C" },
    //         drawerActiveBackgroundColor: "#2E2C2C",
    //         headerTintColor: "white",
    //         drawerLabelStyle: {
    //           color: "white",
    //         },
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="(tabs)"
    //       options={{
    //         drawerLabel: "Search",
    //         title: "Search",
    //         headerStyle: { backgroundColor: "#2E2C2C" },
    //         headerTintColor: "white",
    //         drawerLabelStyle: {
    //           color: "white",
    //         },
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="add listing"
    //       options={{
    //         drawerLabel: "Add listing",
    //         headerStyle: { backgroundColor: "#2E2C2C" },
    //         headerTintColor: "white",
    //         title: "Add listing",
    //         drawerLabelStyle: {
    //           color: "white",
    //         },
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="saved"
    //       options={{
    //         drawerLabel: "Saved",
    //         title: "Saved",
    //         headerStyle: { backgroundColor: "#2E2C2C" },
    //         headerTintColor: "white",
    //         drawerLabelStyle: {
    //           color: "white",
    //         },
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="settings"
    //       options={{
    //         drawerLabel: "Settings",
    //         title: "Settings",
    //         headerStyle: { backgroundColor: "#2E2C2C" },
    //         headerTintColor: "white",
    //         drawerLabelStyle: {
    //           color: "white",
    //         },
    //       }}
    //     />
    //     {/* <Drawer.Screen name="details"  component={Details} /> */}
    //     {/* <StatusBar barStyle="light-content" style="dark" /> */}
    //   </Drawer.Navigator>
    // </GestureHandlerRootView>
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View className="h-[200px] w-full p-3">
                <Image
                  source={{
                    uri: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
                  }}
                  className="w-[100px] h-[100px] rounded-full"
                ></Image>
                <Text className="text-white pt-3 px-1 font-bold">
                  First Name
                </Text>
                <Text className="text-white pt-3 px-1 font-bold">
                  +2519547543
                </Text>
                <View className="w-full h-[1px] mt-3 bg-[#2E2C2C]"></View>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
        screenOptions={{
          drawerStyle: { backgroundColor: "#151414", width: 250 },
          headerStyle: {
            backgroundColor: "#151414",
          },
          headerTintColor: "#151414",
        }}
      >
        <Drawer.Screen
          options={{
            drawerLabel: "Explore",
            headerTitle: () => (
              <View className="flex flex-row items-center w-full justify-between">
                <Text className="text-black text-xl font-semibold">
                  Explore
                </Text>
                <Headericons />
              </View>
            ),
            headerStyle: { backgroundColor: "#FAFAFB" },
            drawerActiveBackgroundColor: "#2E2C2C",
            headerTintColor: "#000",
            drawerLabelStyle: {
              color: "white",
            },
          }}
          name="Explore"
          component={Explore}
        />
        <Drawer.Screen
          options={{
            headerTitle: () => (
              <View className="flex flex-row items-center w-full justify-between">
                <Text className="text-black text-xl font-semibold">Saved</Text>
                <Headericons />
              </View>
            ),
            headerStyle: { backgroundColor: "#FAFAFB" },
            drawerActiveBackgroundColor: "#2E2C2C",
            headerTintColor: "#000",
            drawerLabelStyle: {
              color: "white",
            },
          }}
          name="Saved"
          component={Saved}
        />
        <Drawer.Screen
          options={{
            drawerLabel: "Profile",
            title: "Profile",
            headerStyle: { backgroundColor: "#FAFAFB" },
            drawerActiveBackgroundColor: "#2E2C2C",
            headerTintColor: "#000",
            drawerLabelStyle: {
              color: "white",
            },
          }}
          name="Profile"
          component={Profile}
        />
        <Drawer.Screen
          options={{
            drawerLabel: "Settings",
            headerTitle: () => (
              <View className="flex flex-row items-center w-full justify-between">
                <Text className="text-black text-xl font-semibold">
                  Settings
                </Text>
                <Headericons />
              </View>
            ),
            headerStyle: { backgroundColor: "#FAFAFB" },
            drawerActiveBackgroundColor: "#2E2C2C",
            headerTintColor: "#000",
            drawerLabelStyle: {
              color: "white",
            },
          }}
          name="Settings"
          component={Settings}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ScreensLayout;
