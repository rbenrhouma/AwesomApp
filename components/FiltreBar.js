import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import { IconButton, Colors } from "react-native-paper";

export default function FiltreBar() {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text>Ménage</Text>
          <IconButton color="white" icon="camera" size={28} color="white" />
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <View style={styles.button}>
          <Text>CheckIn/CheckOut</Text>
          <IconButton color="white" icon="camera" size={28} color="white" />
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    flex: 1,
    textAlign: "center",
    marginVertical: 8
  },
  fixToText: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center"
  }
});
