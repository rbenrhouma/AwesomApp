import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import FavorisScreen from './screens/FavorisScreen';
import CustomerScreen from './screens/CustomerScreen';
import PlusScreen from './screens/PlusScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
	const option = {
		headerStyle: { backgroundColor: '#FF5A5F' },
		leftLabelStyle: { color: 'white' },
		headerTitleStyle: { color: 'white' }
	};

	// ------------- DATA --------------
	const [ data, setData ] = useState();

	const fetchData = () => {
		axios
			.get('https://airbnb-api.now.sh/api/room?city=paris')
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	//--------------------- MyList -----------------
	const MyList = (props) => {
		return (
			<Stack.Navigator headerShown={false} headerMode="none" initialRouteName="Home">
				<Stack.Screen name="Home" component={() => <HomeScreen data={data} />} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
			</Stack.Navigator>
		);
	};

	//--------------------- MyMap -----------------
	const MyMap = (props) => {
		return (
			<Stack.Navigator headerShown={false} headerMode="none" initialRouteName="Home">
				<Stack.Screen options={option} name="Map" component={() => <MapScreen />} />
			</Stack.Navigator>
		);
	};

	//--------------------- MyFavoris -----------------
	const MyFavoris = (props) => {
		return (
			<Stack.Navigator headerShown={false} headerMode="none" initialRouteName="Home">
				<Stack.Screen name="Home" component={FavorisScreen} />
			</Stack.Navigator>
		);
	};

	//--------------------- MyPlus -----------------
	const MyPlus = (props) => {
		return (
			<Stack.Navigator headerShown={false} headerMode="none" initialRouteName="Home">
				<Stack.Screen name="Plus" component={PlusScreen} />
			</Stack.Navigator>
		);
	};

	//--------------------- MyCustomer -----------------
	const MyCustomer = (props) => {
		return (
			<Stack.Navigator headerShown={false} headerMode="none" initialRouteName="Client">
				<Stack.Screen name="Client" component={CustomerScreen} />
			</Stack.Navigator>
		);
	};

	//--------------------------- ProfilScreen -----------------------
	function ProfileScreen() {
		const { params } = useRoute();
		const navigation = useNavigation();

		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text>Le profile de {params.name}</Text>
				<Button title="Go Back" onPress={() => navigation.goBack()} />
			</View>
		);
	}

	//------------------------------------
	return (
		<NavigationContainer>
			<View style={styles.logoView}>
				<Text style={styles.logoText}>MyProject</Text>
			</View>
			<Tab.Navigator
				initialRouteName="Liste"
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
							iconName = focused ? 'user' : 'user';
						} else if (route.name === 'Plus') {
							iconName = focused ? 'th-list' : 'th-list';
						}

						return <FontAwesome name={iconName} size={26} color={color} />;
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
				<Tab.Screen name="Liste" component={MyList} />
				<Tab.Screen name="Carte" component={MyMap} />
				<Tab.Screen name="Favoris" component={MyFavoris} />
				<Tab.Screen name="Client" component={MyCustomer} />
				<Tab.Screen name="Plus" component={MyPlus} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	logoText: {
		color: 'lightgrey',
		paddingBottom: 20,
		fontSize: 24,
		fontWeight: 'bold'
	},
	logoView: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 40,
		backgroundColor: '#171F33'
	}
});
