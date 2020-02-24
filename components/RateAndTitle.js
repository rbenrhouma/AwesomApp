import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Theme } from "../appConstants/AppConstants";
import Stars from "./Stars";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import EntypoButton from "./EntypoButton";

export default function RateAndTitle(props) {
  const { good, taille } = props;
  let localSize = taille;
  const navigation = useNavigation();
  if (!good) return null;
  if (!localSize) localSize = 20;

  const contextStyles = StyleSheet.create({
    descriptionText: {
      fontSize: localSize === "XL" ? 20 : localSize === "L" ? 15 : 10
    },
    avatar: {
      borderRadius: localSize === "XL" ? 20 : localSize === "L" ? 15 : 10,
      height: localSize === "XL" ? 100 : localSize === "L" ? 80 : 50,
      width: localSize === "XL" ? 100 : localSize === "L" ? 80 : 50,
      borderWidth: localSize === "XL" ? 2 : localSize === "L" ? 1 : 0,
      margin: localSize === "XL" ? 0 : localSize === "L" ? 10 : 0,
      borderColor: Theme.AppColor
    },
    titleWrapper: {
      flex: 3,
      flexDirection: "column",
      padding: localSize === "XL" ? 10 : localSize === "L" ? 10 : 5
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          style={contextStyles.avatar}
          source={{ uri: good.user.account.photos[0] }}
        />
      </View>
      <View style={contextStyles.titleWrapper}>
        <Text
          style={contextStyles.descriptionText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {good.title}
        </Text>
        <View style={styles.starWrapper}>
          <Stars rate={good.ratingValue} />
        </View>
        <Text style={styles.distance}>{good.ratingValue - 3} km</Text>

        {localSize === "L" ? (
          <EntypoButton
            name={"notification"}
            text={"Envoyer une notification"}
            onPress={() => {
              navigation.navigate("Chat", {
                userID: 86,
                Form: "Notification"
              });
            }}
          ></EntypoButton>
        ) : null}

        {localSize === "L" ? (
          <EntypoButton
            name={"chat"}
            text={"Envoyer un message"}
            onPress={() => {
              navigation.navigate("Chat", {
                userID: 86,
                Form: "Chat"
              });
            }}
          ></EntypoButton>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row"
  },
  starWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3
  },
  avatarWrapper: {
    flex: 1,
    alignItems: "flex-end"
  },
  distance: {
    paddingRight: 10,
    color: "silver",
    textAlign: "right"
  }
});
