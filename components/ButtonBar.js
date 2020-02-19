import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

export default function ButtonBar() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      <View style={styles.fixToText}>
        <IconButton
          icon="camera"
          color={Colors.white}
          size={40}
          onPress={() => {
            Alert.alert("Button heart pressed");
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
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
