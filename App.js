import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Home from './screens/Home.js';
import FinancialInfo from './screens/FinancialInfo';
import FinancialGoals from "./screens/FinancialGoals";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={Home}/>
        <Drawer.Screen name={"Info"} component={FinancialInfo}/>
        <Drawer.Screen name={"Goals"} component={FinancialGoals}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}