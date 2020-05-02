import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from './screens/Home.js';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Home"} component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}