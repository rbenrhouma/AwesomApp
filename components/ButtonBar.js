import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

export default function ButtonBar() {
  const navigation = useNavigation();

  const onClickTakePhoto = () => {
    navigation.navigate("Camera");
  };

  return (
    <View>
      <View style={styles.fixToText}>
        <IconButton
          icon="camera"
          color={Colors.white}
          size={40}
          onPress={onClickTakePhoto}
        />
        <IconButton
          icon="heart"
          color={Colors.white}
          size={40}
          onPress={() => Alert.alert("Button heart pressed")}
        />
        <IconButton
          icon="map"
          color={Colors.white}
          size={40}
          onPress={() => Alert.alert("Button more pressed")}
        />
        <IconButton
          icon="share"
          color={Colors.white}
          size={40}
          onPress={() => Alert.alert("Button share pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
