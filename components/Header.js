import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Theme } from "../appConstants/AppConstants";
import FiltreBar from "./FiltreBar";

export default function Header(props) {
  const { filtersList } = props;
  return (
    <View style={styles.container}>
      <FiltreBar filtersList={filtersList}></FiltreBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    backgroundColor: Theme.AppColor,
    // padding: 5,
    //    margin: 2,
    borderRadius: 10
  }
});
