import React, { useEffect } from "react";
import { AsyncStorage, View, ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import { GlobalConst } from "../appConstants/AppConstants";
import { useNavigation } from "@react-navigation/core";

export default function SplashScreen() {
  const navigation = useNavigation();

  const getAccount = async () => {
    const localAccount = await AsyncStorage.getItem("account");
    if (localAccount) {
      setTimeout(() => navigation.replace("Principale"), 1000);
    } else {
      setTimeout(() => navigation.replace("Login"), 1000);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <View
      style={{
        backgroundColor: GlobalConst.AppColor,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
