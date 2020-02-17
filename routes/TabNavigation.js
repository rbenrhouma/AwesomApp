import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

import List from './List';
import Map from './Map';

const Tab = createBottomTabNavigator();

export default function App() {
	const [ locations, setLocations ] = useState();

	useEffect(() => {
		axios.get('https://airbnb-api.now.sh/api/room?city=paris').then((response) => {
			setLocations(response.data);
		});
	}, []);

	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen name="Liste">{() => <List locations={locations} />}</Tab.Screen>
			<Tab.Screen name="Carte">{() => <Map locations={locations} />}</Tab.Screen>
		</Tab.Navigator>
	);
}
