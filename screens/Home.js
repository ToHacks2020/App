import { Text, FlatList, View } from "react-native";
import { Card, List } from "react-native-paper";
import React, { useState, useEffect } from "react";
import ContentView from "../components/ContentView";
import BasicItem from "../components/BasicItem";
import HeaderBar from "../components/HeaderBar";

const user = {
  income: {
    count: 1,
  },
  expense: {
    count: 1,
  },
  investments: {
    count: 1,
  },
  assets: {
    count: 1,
  },
  liabilities: {
    count: 1,
  },
};

export default function Home() {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let [key, value] of Object.entries(user)) {
      arr.push({
        type: key,
        count: value.count,
      });
    }
    setCardsData(arr);
  }, []);
  return (
    <View>
      <HeaderBar pageName={"Home"}/>
      <FlatList
        data = {cardsData}
        renderItem = {({item})=><BasicItem item={item}/>}
        keyExtractor={item => item.type}
        initialNumToRender={25}
      />
    </View>
  );
}
