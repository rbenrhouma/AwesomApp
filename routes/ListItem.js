import React from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import RateAndTitle from '../components/RateAndTitle';

export default function ListItem(props) {
	const { room } = props;
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				marginHorizontal: 15
			}}
			onPress={() => {
				navigation.navigate('Room', { id: room._id });
			}}
		>
			{/* <ImageBackground
        style={{
          width: "100%",
          height: 200,
          resizeMode: "cover",
          justifyContent: "flex-end"
        }}
        source={{ uri: room.photos[0] }}
      >
        <Text
          style={{
            width: "25%",
            color: "white",
            backgroundColor: "black",
            padding: 10,
            marginBottom: 10,
            fontSize: 22
          }}
        >
          {room.price}€
        </Text>
      </ImageBackground> */}
			<RateAndTitle room={room} taille={'XL'}/>
		</TouchableOpacity>
	);
}
