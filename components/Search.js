import React from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar
        textInputDisable
        cancelButtonDisable
        iconColor="#EE578D"
        placeholder="Search Here..."
        onPress={() => {}}
      />
    </View>
  );
}
