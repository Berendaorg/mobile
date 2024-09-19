import React from "react";


import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StatusBar } from "expo-status-bar";


export default function TabLayout() {
  return (
    <>
    <Tabs 
    initialRouteName='results'
    screenOptions={{ 
      tabBarActiveTintColor: "#C33535",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        backgroundColor: "white",
        height: 60,
        paddingBottom: 10,
        paddingTop: 10,
      },      
      }}>
      <Tabs.Screen
        name="result"
        options={{
        title: 'Results',
        headerShown: false, 
        tabBarIcon: ({ color }) => <FontAwesome size={14} name="search" color={color} />,
        }}
      /> 
      <Tabs.Screen
        name="reccomendation"
        options={{
          title: 'Reccomendation',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={14} name="list" color={color} />,
        }} />
        <Tabs.Screen
          name="featured"
          options={{
            title: "Featured",
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={14} name="star" color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar
        barStyle="light-content"
        backgroundColor="white" style="dark"
      />
    </>
  );
}
