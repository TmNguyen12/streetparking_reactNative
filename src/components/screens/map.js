import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

const Marker = MapView.Marker;

export default class Map extends Component {
  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ));
  }

  render() {
    const { region } = this.props;
    return (
      <MapView
        styles={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      />
    );
  }
}
const styles = {
  container: {
    width: "100%",
    height: "80%"
  }
};
