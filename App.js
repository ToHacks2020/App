import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from './screens/Home.js';
import FinancialInfo from './screens/FinancialInfo';
import FinancialGoals from "./screens/FinancialGoals";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Home"} component={Home}/>
        <Tab.Screen name={"Info"} component={FinancialInfo}/>
        <Tab.Screen name={"Goals"} component={FinancialGoals}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}