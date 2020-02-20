import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Slider,
  TouchableOpacity,
  Switch
} from "react-native";
import Stars from "../components/Stars";
import FilterSubmit from "../components/FilterButton";
import { FilterList } from "../Data/FiltersGroups";

export default FilterScreen => {
  const [pathLength, setPathLength] = useState(0);
  const [prestationValue, setPrestationValue] = useState([]);
  const starsList = [1, 2, 3, 4, 5];

  return (
    <View>
      <View />
      <Text style={styles.text}>Distance : {pathLength} Km</Text>
      <Slider
        style={styles.slider}
        step={1}
        maximumValue={100}
        value={pathLength}
        onValueChange={sliderValue => setPathLength(sliderValue)}
      />
      {FilterList &&
        FilterList.map((elem, index) => {
          return (
            <View style={styles.presta}>
              <Switch
                onValueChange={() => {}}
                style={styles.prestaSwitch}
                value={elem.selected}
              />
              <Text style={styles.prestaText}>{elem.caption}</Text>
            </View>
          );
        })}
      {starsList.map((elem, index) => {
        return (
          <TouchableOpacity style={styles.stars}>
            <Stars style={styles.stars} rate={index + 1} taille={25}></Stars>
          </TouchableOpacity>
        );
      })}

      <FilterSubmit text={"Appliquer Fitre"}></FilterSubmit>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: "2%"
  },
  text: {
    width: "80%",
    marginHorizontal: "10%",
    marginTop: "10%"
  },
  stars: {
    marginHorizontal: "10%",
    marginVertical: 3
  },
  presta: {
    marginVertical: 2,
    paddingVertical: 10,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  prestaText: {
    paddingLeft: 20,
    fontSize: 20
  }
});
