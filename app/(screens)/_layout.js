import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as PaperProvider } from "react-native-paper"; // Import Provider
import SplashScreen from "./SplashScreen"; // Import the SplashScreen
import Explore from "./Explore";
import Saved from "./saved";
import Profile from "./Profile";
import Settings from "./settings";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Explore">
      <Drawer.Screen name="Explore" component={Explore} />
      <Drawer.Screen name="Saved" component={Saved} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const ScreensLayout = () => {
  return (
    <PaperProvider>
      <NavigationContainer independent={true}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default ScreensLayout;
