import {Appbar} from "react-native-paper";
import React from "react";

export default function HeaderBar({pageName}) {
  return (
    <Appbar.Header>
      <Appbar.Content title={pageName}/>
    </Appbar.Header>
  );
}