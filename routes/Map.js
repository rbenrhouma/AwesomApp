import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { useNavigation } from "@react-navigation/core";
import RateAndTitle from "../components/RateAndTitle";
import { Theme } from "../appConstants/AppConstants";
import MapButtonBar from "../components/MapButtonBar";

export default function Map(props) {
  const { locations } = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MapButtonBar style={styles.mapButtonBar}></MapButtonBar>
      <MapView
        style={{ flex: 1, height: "100%", width: "100%" }}
        initialRegion={{
          latitude: 48.8588377,
          longitude: 2.2770206,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        showsUserLocation={true}
      >
        {locations &&
          locations.rooms &&
          locations.rooms.map(good => {
            return (
              <Marker
                key={good._id}
                coordinate={{
                  latitude: good.loc[1],
                  longitude: good.loc[0]
                }}
              >
                <Callout
                  onPress={() => navigation.navigate("Good", { id: good._id })}
                  style={{ padding: 10 }}
                >
                  <RateAndTitle good={good} taille={"S"} />
                </Callout>
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.AppColor
  },
  mapButtonBar: {
    position: "absolute",
    zIndex: 1
  }
});
