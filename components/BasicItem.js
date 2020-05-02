import React from "react";
import { List } from "react-native-paper";

export default function BasicItem({item}) {
  return <List.Item title={item.type} description={item.count} />;
}
