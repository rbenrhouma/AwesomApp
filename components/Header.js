import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { GlobalConst } from "../appConstants/AppConstants";
import FiltreBar from "./FiltreBar";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <FiltreBar></FiltreBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    backgroundColor: GlobalConst.AppColor,
    padding: 5,
    margin: 2,
    borderRadius: 10
  },
  headerTitle: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
    color: "white"
  }
});
