import React from "react";
// expo
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Stack } from 'expo-router';

// native
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import Featured from "./featured"
// import Index from "./index"  
// import Reccomendation from "./reccomendation"
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { StatusBar } from "expo-status-bar";
// const Tab = createMaterialTopTabNavigator();

const Tab = createMaterialTopTabNavigator();

// native
// export default function TabLayout(){
//     <NavigationContainer independent={false} >
//     <Tab.Navigator >
//       <Tab.Screen name="Featured" component={Featured} />
//       <Tab.Screen name="index" component={Index} options={{
//         headerShown:false
//       }}/>
//       <Tab.Screen name="Reccomendation" component={Reccomendation} />
//     </Tab.Navigator>
//    </NavigationContainer>
// }

// export default RootLayout = () => {
//   return (
//     <Provider store={store}>
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         {/* 
//       <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
//         {/* <Stack.Screen name="(screens)" options={{ headerShown: false }} />
//         <Stack.Screen name="(complementary)" options={{ headerShown: false }} /> */}
//       </Stack>
//     </Provider>
//   );
// };


// expo
export default function TabLayout() {
  return (
    <>
    <Tabs 
    // initialRouteName='results'
    screenOptions={{ 
      tabBarActiveTintColor: "#F0DE93",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: "#012847",
        height: 60,
        paddingBottom: 10,
        paddingTop: 10,
      },      
      }}>
      <Tabs.Screen
        name="index"
        options={{
        title: 'Results',
        // href:null,
        headerShown: false, 
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      /> 
      <Tabs.Screen
      name="index.second"
      options={{
      title: 'Results',
      href:null,
      headerShown: false, 
      tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
      }}
    />
      <Tabs.Screen
        name="reccomendation"
        options={{
          title: 'Reccomendation',
        //   href:null,
          headerShown: false,
          // tabBarLabel: 'Profile'
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }} />
        <Tabs.Screen
          name="featured"
          options={{
            title: "Featured",
            //   href:null,
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={14} name="list" color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar
        barStyle="light-content"
        style="light"
        backgroundColor="#012847"
      />
    </>
  );
}
