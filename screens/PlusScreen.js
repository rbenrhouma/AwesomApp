import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';

function PlusScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Que mettre dans cette page ?</Text>
			<Text style={styles.title}>- Settings</Text>
			<Text style={styles.title}>- Contrats juridiques</Text>
			<Text style={styles.title}>- ...</Text>
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

export default PlusScreen;
