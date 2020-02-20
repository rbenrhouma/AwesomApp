import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import {
  NavigationContainer,
  useNavigation,
  useRoute
} from "@react-navigation/native";

export default function FilterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Filtres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 100,
    alignItems: "center"
  },
  title: {
    fontSize: 24
  }
});
