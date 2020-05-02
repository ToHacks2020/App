import {StyleSheet, Text, View} from "react-native";
import HeaderBar from "./HeaderBar";
import React from "react";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <HeaderBar pageName={"Home"}/>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});