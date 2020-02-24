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
import FilterSubmit from "../components/FilterSubmit";
import { GlobalFilter } from "../Data/FiltersGroups";

export default FilterScreen => {
  const [pathLength, setPathLength] = useState(0);
  const [prestationValue, setPrestationValue] = useState([]);
  const starsList = [false, false, false, true, false];

  return (
    <View>
      <View>
        <Text style={styles.text}>Rayon personnalisé </Text>
        <Text style={styles.subText}>
          Me montrer seulement les annonces dans un rayon donnée{" "}
        </Text>
        <View style={styles.sliderZone}>
          <Slider
            style={styles.slider}
            step={1}
            maximumValue={100}
            value={pathLength}
            onValueChange={sliderValue => setPathLength(sliderValue)}
          />
          <Text style={styles.sliderText}>{pathLength} KM</Text>
        </View>
      </View>
      {GlobalFilter.ServicesFilters &&
        GlobalFilter.ServicesFilters.map((elem, index) => {
          return (
            <View>
              {!elem.isAll ? (
                <View style={styles.presta}>
                  <Switch
                    onValueChange={() => {}}
                    style={styles.prestaSwitch}
                    value={elem.selected}
                  />

                  <Text style={styles.prestaText}>{elem.caption}</Text>
                </View>
              ) : null}
            </View>
          );
        })}
      {starsList.map((elem, index) => {
        return (
          <TouchableOpacity style={styles.stars} onPress={() => {}}>
            <Stars
              style={styles.stars}
              rate={index + 1}
              taille={25}
              filtre={true}
              canSelect={true}
              selected={elem}
            ></Stars>
          </TouchableOpacity>
        );
      })}

      <FilterSubmit text={"Appliquer Fitre"}></FilterSubmit>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: "80%",
    marginHorizontal: "10%",
    marginTop: "10%"
  },
  subText: {
    width: "80%",
    marginLeft: "10%",
    fontSize: 12,
    color: "silver"
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
  },
  slider: {
    width: "75%"
  },
  sliderZone: {
    padding: 10
    //marginHorizontal: 20,
    //marginHorizontal: 20,
  },
  sliderText: {
    top: 20,
    position: "absolute",
    right: 20,
    fontSize: 20
  }
});
