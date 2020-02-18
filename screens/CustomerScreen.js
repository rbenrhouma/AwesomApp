import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';

function CustomerScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cette page sera reservé pour.</Text>
			<Text style={styles.title}>Mes clients en mode :</Text>
			<Text style={styles.title}>- Liste détaillé</Text>
			<Text style={styles.title}>- Map avec card</Text>
			<Text style={styles.title}>- Planning de la journée de mes tâches</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingTop: 100,
		alignItems: 'center'
	},
	title: {
		fontSize: 24
	}
});

export default CustomerScreen;
