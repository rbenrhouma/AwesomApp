import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AwesomButton from "./AwesomButton";
import { useNavigation } from "@react-navigation/core";

export default function FiltreBar(props) {
  const { filtersList } = props;
  const [counter, setCounter] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {filtersList &&
        filtersList.map((btn, index) => {
          return (
            <AwesomButton
              style={styles.awesomButton}
              code={btn.code}
              onFilterPress={() => {
                if (btn.isAll) {
                  navigation.navigate("Filter");
                } else {
                  if (btn.selected) setCounter(counter - 1);
                  else setCounter(counter + 1);
                }
                btn.selected = !btn.selected;
              }}
              caption={btn.caption}
              counter={counter}
              isAll={btn.isAll}
              selected={btn.selected}
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
  }
});
