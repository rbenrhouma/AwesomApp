import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './routes/SplashScreen';
import Login from './routes/Login';
import TabNavigation from './routes/TabNavigation';
import Room from './routes/Room';

const Stack = createStackNavigator();

export default function App() {
	const option = {
		headerStyle: { backgroundColor: 'rgb(0,70,254)' },
		leftLabelStyle: { color: 'white' },
		headerTitleStyle: { color: 'white' }
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={option} name="Splash" component={SplashScreen} />
				<Stack.Screen options={option} name="List" component={TabNavigation} />
				<Stack.Screen options={option} name="Room" component={Room} />
				<Stack.Screen options={option} name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
