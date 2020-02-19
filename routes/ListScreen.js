import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "./ListItem";
import Header from "../components/Header";

export default function ListScreen(props) {
  const { locations } = props;

  if (!locations) return null;

  return (
    <>
      <Header />
      <FlatList
        data={locations.rooms}
        keyExtractor={item => String(item.title)}
        style={styles.container}
        ItemSeparatorComponent={({ highlighted }) => (
          <View
            style={{
              height: 1,
              backgroundColor: "lightgrey",
              marginBottom: 10,
              marginTop: 10,
              marginHorizontal: 25
            }}
          />
        )}
        contentContainerStyle={{
          justifyContent: "center"
        }}
        renderItem={({ item }) => <ListItem good={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
