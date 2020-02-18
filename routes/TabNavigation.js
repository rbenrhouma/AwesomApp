import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

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
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Liste') {
						iconName = focused ? 'home' : 'home';
					} else if (route.name === 'Carte') {
						iconName = focused ? 'map-marker' : 'map-marker';
					} else if (route.name === 'Favoris') {
						iconName = focused ? 'heart' : 'heart';
					} else if (route.name === 'Client') {
						iconName = focused ? 'user' : 'users';
					} else if (route.name === 'Plus') {
						iconName = focused ? 'th-list' : 'th-list';
					}
					return <FontAwesome name={iconName} size={30} color={color} />;
				}
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
				style: {
					backgroundColor: '#171F33',
					height: 60,
					paddingTop: 10,
					paddingBottom: 5
				}
			}}
		>
			<Tab.Screen name="Liste">{() => <List locations={locations} />}</Tab.Screen>
			<Tab.Screen name="Carte">{() => <Map locations={locations} />}</Tab.Screen>
			<Tab.Screen name="Favoris">{() => <List locations={locations} />}</Tab.Screen>
			<Tab.Screen name="Client">{() => <Map locations={locations} />}</Tab.Screen>
			<Tab.Screen name="Plus">{() => <Map locations={locations} />}</Tab.Screen>
		</Tab.Navigator>
	);
}
