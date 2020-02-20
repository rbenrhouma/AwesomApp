import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "./ListItem";
import Header from "../components/Header";
import { Searchbar } from "react-native-paper";
import { FilterList } from "../Data/FiltersGroups";
import { useNavigation } from "@react-navigation/core";

export default function ListScreen(props) {
  const { locations } = props;
  const navigation = useNavigation();
  const onFilterPress = () => {
    navigation.navigate("Filter");
  };

  if (!locations) return null;

  return (
    <>
      <Header onFilterPress={onFilterPress} filtersList={FilterList} />
      <Searchbar
        //onPressToFocus
        autoFocus={false}
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        //shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        //backgroundColor="#353d5e"
        textInputDisable
        cancelButtonDisable
        iconColor="#EE578D"
        placeholder="A proximité"
        onChangeText={text => {
          console.log(text);
        }}
        onPressCancel={() => {
          this.filterList("");
        }}
        onPress={() => alert("onPress")}
      />
      <View style={styles.container}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 5
  }
});
