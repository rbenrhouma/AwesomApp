import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useNavigation } from '@react-navigation/core';
import RateAndTitle from '../components/RateAndTitle';
import { GlobalConst } from '../appConstants/AppConstants';

export default function Map(props) {
	const { locations } = props;
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<MapView
				style={{ flex: 1, height: '100%', width: '100%' }}
				initialRegion={{
					latitude: 48.8588377,
					longitude: 2.2770206,
					latitudeDelta: 0.1,
					longitudeDelta: 0.1
				}}
				showsUserLocation={true}
			>
				{locations &&
					locations.rooms &&
					locations.rooms.map((room) => {
						return (
							<Marker
								key={room._id}
								coordinate={{
									latitude: room.loc[1],
									longitude: room.loc[0]
								}}
							>
								<Callout onPress={() => navigation.navigate('Room', { id: room._id })} style={{ padding: 10 }}>
									<RateAndTitle room={room} />
								</Callout>
							</Marker>
						);
					})}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalConst.AppColor
	}
});
