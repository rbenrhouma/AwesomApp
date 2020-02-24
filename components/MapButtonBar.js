import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

export default function MapButtonBar() {
  const navigation = useNavigation();

  const onClickTakePhoto = () => {
    navigation.navigate("Camera");
  };

  return (
    <View>
      <View style={styles.fixToText}>
        <IconButton
          icon="plus"
          color={Colors.white}
          size={40}
          onPress={onClickTakePhoto}
        />
        <IconButton
          icon="minus"
          color={Colors.white}
          size={40}
          onPress={() => Alert.alert("Button heart pressed")}
        />
        <IconButton
          icon="arrow-collapse-all"
          color={Colors.white}
          size={40}
          onPress={() => Alert.alert("Button more pressed")}
        />
        <IconButton
          icon="arrow-expand-all"
          color={Colors.white}
          size={40}
          onPress={() => Alert.alert("Button share pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    opacity: 1
  }
});
