import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { Camera } from "expo-camera";
// import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { IconButton } from "react-native-paper";

export default function AppCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(2);
  const [flashMode, setFlashMode] = useState(0);
  const [loading, setLoading] = useState(0);

  //  @observable hasPermission: null||number;
  //   @observable cameraType:number = Camera.Constants.Type.back;
  //   @observable flashMode:number = Camera.Constants.FlashMode.off;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
      setCameraType(Camera.Constants.Type.back);
      setFlashMode(Camera.Constants.FlashMode.off);
    })();
  }, []);

  const showGrid = () => {};

  const toggleFlash = () => {
    const { on, off } = Camera.Constants.FlashMode;
    setFlashMode(flashMode === on ? off : on);
    console.warn(flashMode);
  };

  const toggleCamera = () => {
    const { front, back } = Camera.Constants.Type;
    setCameraType(cameraType === front ? back : front);
    console.warn(cameraType);
  };
  const goBack = () => {};

  const onTakePhoto = () => {
    console.warn("not yet");
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={styles.camera} {...{ cameraType, flashMode }}>
        <SafeAreaView>
          <View style={styles.header}>
            <IconButton
              icon="grid"
              onPress={showGrid}
              color="white"
            ></IconButton>
            <IconButton
              icon={
                flashMode === Camera.Constants.FlashMode.on
                  ? "flash"
                  : "flash-off"
              }
              onPress={toggleFlash}
              color="white"
            ></IconButton>
          </View>
        </SafeAreaView>
        <SafeAreaView>
          <View style={styles.footer}>
            <IconButton icon="x" onPress={goBack} color="white"></IconButton>
            <TouchableOpacity onPress={onTakePhoto}>
              <View style={styles.snapButton}>
                <View style={styles.innerSnapButton}>
                  <IconButton
                    color="white"
                    icon="camera"
                    size={28}
                    color="white"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <IconButton
              icon="rotate"
              onPress={toggleCamera}
              color="white"
            ></IconButton>
          </View>
        </SafeAreaView>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: "white"
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  camera: {
    flex: 1,
    justifyContent: "space-between"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  snapButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 4,
    borderColor: "white",
    alignItems: "center"
  },
  innerSnapButton: {
    backgroundColor: "pink",
    width: 52,
    height: 52,
    borderRadius: 25.5,
    marginTop: 2
  }
});
