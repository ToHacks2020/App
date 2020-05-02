import {StyleSheet, Text, View} from "react-native";
import React from "react";
import HeaderBar from "../components/HeaderBar";

const userData = [];

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderBar pageName={"Home"}/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});