import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "./src/components/navigation/Home-stack-navigator";

export default class App extends React.Component {
  render() {
    return <Map />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
