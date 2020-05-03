import React, { useState } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DrawerContent({ navigation }) {
  const [selected, setSelected] = useState("Home");
  function selectItem(item) {
    setSelected(item);
    navigation.navigate(item);
  }
  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <Drawer.Section title={"You"} style={styles.section}>
        <DrawerItem
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={focused ? "view-dashboard" : "view-dashboard-outline"}
            />
          )}
          label={"Overview"}
          onPress={() => selectItem("Home")}
          focused={selected === "Home"}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name={"target"} />
          )}
          label={"Financial Goals"}
          onPress={() => selectItem("Goals")}
          focused={selected === "Goals"}
        />
      </Drawer.Section>
      <Drawer.Section title={"Finances"} style={styles.section}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"calculator"}
            />
          )}
          label={"Compound Interest Calc"}
          onPress={() => selectItem("CompoundInterest")}
          focused={selected === "CompoundInterest"}
        />
      </Drawer.Section>
      <Drawer.Section title={"Recommendations"}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              color={color}
              size={size}
              name={"credit-card"}
            />
          )}
          label={"Credit Cards"}
          onPress={() => {}}
          focused={false}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingBottom: 20,
  },
});
