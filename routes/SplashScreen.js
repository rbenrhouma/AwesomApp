import React, { useEffect } from "react";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import { Theme } from "../appConstants/AppConstants";
import { useNavigation } from "@react-navigation/core";

export default function SplashScreen() {
  const navigation = useNavigation();

  const getAccount = async () => {
    const localAccount = await AsyncStorage.getItem("account");
    if (localAccount) {
      setTimeout(() => navigation.replace(Theme.ApplicationName), 1000);
    } else {
      setTimeout(() => navigation.replace("Connection"), 1000);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <View
      style={{
        backgroundColor: Theme.AppColor,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
