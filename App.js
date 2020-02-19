import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './routes/SplashScreen';
import Login from './routes/Login';
import TabNavigation from './routes/TabNavigation';
import Good from './routes/Good';
import { GlobalConst } from './appConstants/AppConstants';

const Stack = createStackNavigator();

export default function App() {
	const option = {
		headerStyle: { backgroundColor: GlobalConst.AppColor },
		leftLabelStyle: { color: 'white' },
		headerTitleStyle: { color: 'white' }
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={option} name="Splash" component={SplashScreen} />
				<Stack.Screen options={option} name="Principale" component={TabNavigation} />
				<Stack.Screen options={option} name="Good" component={Good} />
				<Stack.Screen options={option} name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
