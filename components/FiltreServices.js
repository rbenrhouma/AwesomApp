import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Slider,
  TouchableOpacity,
  Switch,
  Button,
  Dimensions
} from "react-native";
import Stars from "../components/Stars";
import FilterSubmit from "./FilterSubmit";
import { GlobalFilter } from "../Data/FiltersGroups";
import { TabView, SceneMap } from "react-native-tab-view";

//const initialLayout = { width: Dimensions.get("window").width };

export default FilterService => {
  const [pathLength, setPathLength] = useState(100);
  const [prestationValue, setPrestationValue] = useState([]);
  const starsList = [false, false, false, true, false];

  //   const [index, setIndex] = React.useState(0);
  //   const [routes] = React.useState([
  //     { key: "servicesRoute", title: "Services" },
  //     { key: "goodsRoute", title: "Biens" }
  //   ]);

  //   const renderScene = SceneMap({
  //     servicesRoute: ServicesRoute,
  //     goodsRoute: GoodsRoute
  //   });

  const filterApply = () => {
    console.warn("filtre appliqué");
  };
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <Button style={styles.btnTab} title="Services"></Button>
        <Button style={styles.btnTab} title="Biens"></Button>
      </View>

      <View style={styles.services}>
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
      </View>
      <FilterSubmit
        text={"Appliquer Fitre"}
        onPress={filterApply}
      ></FilterSubmit>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "dotted"
  },
  tab: {},
  btnTab: {
    width: "70",
    backgroundColor: "green"
  },
  services: { borderColor: "blue", borderWidth: 1, borderStyle: "dotted" },
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
  },
  scene: {
    flex: 1
  }
});
