import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRoute } from "@react-navigation/core";
import axios from "axios";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";

import RateAndTitle from "../components/RateAndTitle";

export default function Good() {
  const [data, setData] = useState();
  const [fullText, setFullText] = useState(false);
  const route = useRoute();

  useEffect(() => {
    axios
      .get("https://airbnb-api.now.sh/api/room/" + route.params.id)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const wrapPhotos = (photos = []) => {
    const images = photos.map((photo, index) => {
      return (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: photo }} style={styles.slide} />
        </View>
      );
    });

    return images;
  };

  if (!data) return <></>;

  return (
    <ScrollView style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={true}>
        {wrapPhotos(data.photos)}
      </Swiper>
      <View style={styles.infoWrapper}>
        <RateAndTitle good={data} taille={'L'} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setFullText(!fullText);
          }}
        >
          <Text
            numberOfLines={fullText ? 999 : 3}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {data.description}
          </Text>
        </TouchableOpacity>
        <MapView
          style={{ flex: 1, height: 250, width: "100%" }}
          initialRegion={{
            latitude: data.loc[1],
            longitude: data.loc[0],
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          showsUserLocation={true}
        >
          <Marker
            key={data._id}
            coordinate={{
              latitude: data.loc[1],
              longitude: data.loc[0]
            }}
          />
        </MapView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  wrapper: {
    height: 350
  },
  slide: {
    flex: 1
  },
  infoWrapper: {
    marginHorizontal: 15
  },
  description: {
    fontSize: 16,
    marginVertical: 15
  }
});
