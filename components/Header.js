import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {  GlobalConst } from '../appConstants/AppConstants';


export default function Header(props) {
	//const { data } = props;
	//if (!data) return null;

	return (
		<View style={styles.container}>
			<Text style={styles.headerTitle}> AwesomApp</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		flexDirection: 'row',
		backgroundColor: GlobalConst.AppColor
	},
	headerTitle: {
		flex: 1,
		fontSize: 20,
		textAlign: 'center'
	}
});
