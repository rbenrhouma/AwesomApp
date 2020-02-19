import React from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import RateAndTitle from '../components/RateAndTitle';

export default function ListItem(props) {
	const { good } = props;
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				marginHorizontal: 15,
				marginLeft: 30
			}}
			onPress={() => {
				navigation.navigate('Good', { id: good._id });
			}}
		>
			<RateAndTitle good={good} taille={'XL'} />
		</TouchableOpacity>
	);
}
