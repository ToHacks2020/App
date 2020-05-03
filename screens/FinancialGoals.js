import React from "react";
import { Text, View, FlatList } from "react-native";
import { Button, List } from "react-native-paper";
import HeaderBar from "../components/HeaderBar";
import { Checkbox } from "react-native-paper";

const goals = [
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
  {
    name: "AAAAAAA",
    description: "aaaaaa",
  },
];

export default function FinancialGoals() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderBar pageName={"Financial Goals"} />
      <FlatList
        data={goals}
        renderItem={({ item }) => {
          return (
            <List.Item
              title={item.name}
              description={item.description}
              right={() => <Checkbox status={"unchecked"} />}
            />
          );
        }}
      />
      <View style={{ justifyContent: "flex-end", margin: 20 }}>
        <Button
          icon={"playlist-plus"}
          onPress={() => {}}
          mode="contained"
          style={{ height: 50, justifyContent: "center" }}
        >
          Add Goal
        </Button>
      </View>
    </View>
  );
}
