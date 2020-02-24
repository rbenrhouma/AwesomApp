import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Theme } from "../appConstants/AppConstants";
import { Entypo } from "@expo/vector-icons";

export default function EntypoButton(props) {
  const { text, width, name, onPress } = props;
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.buttonText}>{text ? text : "???"}</Text>
        <Entypo
          style={styles.entypo}
          name={name ? name : "?"}
          size={20}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 2,
    backgroundColor: Theme.AppColor,
    borderRadius: 5,
    width: 280,
    alignItems: "center",
    justifyContent: "center"
  },
  entypo: {
    textAlign: "center",
    color: "white",
    margin: 5,
    paddingRight: 15
  },
  buttonText: {
    flex: 1,
    color: "white",
    paddingLeft: 15
  }
});
