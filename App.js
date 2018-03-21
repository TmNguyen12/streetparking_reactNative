import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Map from "./src/components/screens/map";
import { Location, Permissions } from "expo";
import { MapView } from "expo";

// const deltas = {
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// };

// const region = {
//   latitude: 37.321996988,
//   longitude: -122.0325472123455,
//   latitudeDelta: 0.0922,
//   longitudeDelta: 0.0421
// };

export default class App extends React.Component {
  // componentWillMount() {
  //   this.getLocationAsync();
  // }

  // getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== "granted") {
  //     this.setState({
  //       errorMessage: "Permission to access location was denied"
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   const region = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     ...deltas
  //   };
  //   await this.setState({ region });
  // };

  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0
//   }
// });
