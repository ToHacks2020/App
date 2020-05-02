import {StyleSheet, Text, View} from "react-native";
import HeaderBar from "./HeaderBar";
import React from "react";

export default function ContentView(props) {
  return (
    <View>
      <HeaderBar pageName={"Home"}/>
      <View style={styles.container}>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    margin: 15
  },
});