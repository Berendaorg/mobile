import React from 'react';
// expo
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Stack } from 'expo-router';

// native
// import { createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Featured from "./featured"
import Reccomendation from "./reccomendation"
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

// native
const index = () => {

  // <Stack>
    <NavigationContainer independent={false}
    initialRouteName="Featured"
    >
      <Tab.Navigator>
        <Tab.Screen name="Featured" component={
          <Text>
            Featured
          </Text>
        } />
        <Tab.Screen name="Reccomendation" component={
          <Text>
            Reccomendation
          </Text>
        } />
      </Tab.Navigator>
    </NavigationContainer>
  // </Stack>

}

export default index;
