import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AwesomButton from "./AwesomButton";

export default function FiltreBar(props) {
  const { onFilterPress, filtersList } = props;
  console.log(filtersList);
  return (
    <View style={styles.container}>
      {filtersList &&
        filtersList.map((btn, index) => {
          return (
            <AwesomButton
              code={btn.code}
              onFilterPress={onFilterPress}
              caption={btn.caption}
            ></AwesomButton>
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  }
});
