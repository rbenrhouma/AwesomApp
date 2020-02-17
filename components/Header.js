import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header(props) {
	//const { data } = props;
	//if (!data) return null;

	return (
		<View style={styles.container}>
			<Text>AwesomApp</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		flexDirection: 'row'
		//	backgroundColor: GlobalConst.AppColor
	}
});
