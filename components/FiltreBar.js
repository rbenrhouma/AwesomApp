import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AwesomButton from "./AwesomButton";

export default function FiltreBar(props) {
  const { onFilterPress, filtersList } = props;
  const [filtersActifs, setFiltersActifs] = useState(0);

  return (
    <View style={styles.container}>
      {filtersList &&
        filtersList.map((btn, index) => {
          return (
            <AwesomButton
              style={styles.awesomButton}
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
  },
  awesomButton: {
    // borderStyle: "solid"
    // borderColor: "red",
    // borderWidth: 5,
    // borderRadius: 10
  },
  checkedBtn: {
    position: "absolute",
    margin: 10
  }
});
