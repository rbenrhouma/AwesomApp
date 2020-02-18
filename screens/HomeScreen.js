import React from 'react';
import { View, Text, Button, FlatList, StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import Item from '../components/Item/Item';

function HomeScreen(props) {
	const navigation = useNavigation();
	const { data } = props;

	if (!data) return null;

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<FlatList
				data={data.rooms}
				keyExtractor={(item) => String(item._id)}
				ItemSeparatorComponent={({ highlighted }) => (
					<View
						style={{
							height: 1,
							backgroundColor: 'lightgrey',
							marginBottom: 20,
							marginTop: 20,
							marginHorizontal: 25
						}}
					/>
				)}
				contentContainerStyle={{
					justifyContent: 'center'
				}}
				renderItem={({ item }) => <Item item={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10
		// alignItems: "center"
	},
	title: {
		fontSize: 24
	},
	statusBar: {
		color: 'white'
	}
});

export default HomeScreen;
