import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";

import ScreenList from "./ListScreen";
import ScreenMap from "./Map";
import ScreenPlus from "../screens/PlusScreen";
import ScreenCustomer from "../screens/CustomerScreen";
import ScreenFavoris from "../screens/FavorisScreen";
import { Theme } from "../appConstants/AppConstants";

const Tab = createBottomTabNavigator();

export default function App() {
  const [locations, setLocations] = useState();

  useEffect(() => {
    axios
      .get("https://airbnb-api.now.sh/api/room?city=paris")
      .then(response => {
        setLocations(response.data);
      });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Accueil") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Carte") {
            iconName = focused ? "map-marker" : "map-marker";
          } else if (route.name === "Favoris") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Client") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Settings") {
            iconName = focused ? "th-list" : "th-list";
          }
          return <FontAwesome name={iconName} size={30} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: Theme.AppColor,
        inactiveTintColor: "#FFFFFF",
        //headerTintolor:"red",
        style: {
          backgroundColor: "#000000",
          height: 60,
          paddingTop: 10,
          paddingBottom: 5
        }
      }}
    >
      <Tab.Screen name="Accueil">
        {() => <ScreenList locations={locations} />}
      </Tab.Screen>
      <Tab.Screen name="Carte">
        {() => <ScreenMap locations={locations} />}
      </Tab.Screen>
      <Tab.Screen name="Favoris">{() => <ScreenFavoris />}</Tab.Screen>
      <Tab.Screen name="Client">
        {() => <ScreenCustomer locations={locations} />}
      </Tab.Screen>
      <Tab.Screen name="Settings">{() => <ScreenPlus />}</Tab.Screen>
    </Tab.Navigator>
  );
}
