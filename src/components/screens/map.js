import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

const Marker = MapView.Marker;

export default class Map extends Component {
  // renderMarkers() {
  //   return this.props.places.map((place, i) => (
  //     <Marker key={i} title={place.name} coordinate={place.coords} />
  //   ));
  // }

  render() {
    const { region } = this.props;
    console.log("region", region);
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        mapType="mutedStandard"
        showsMyLocationButton={true}
        zoomEnabled={true}
      />
    );
  }
}
const styles = {
  container: {
    width: "100%",
    height: "80%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};
