import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home.js";
import CompoundInterest from "./screens/CompoundInterest";
import FinancialGoals from "./screens/FinancialGoals";
import DrawerContent from "./components/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={({ navigation }) => (
          <DrawerContent navigation={navigation} />
        )}
      >
        <Drawer.Screen name={"Home"} component={Home} />
        <Drawer.Screen name={"CompoundInterest"} component={CompoundInterest} />
        <Drawer.Screen name={"Goals"} component={FinancialGoals} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
