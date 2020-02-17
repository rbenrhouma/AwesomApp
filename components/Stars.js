import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Stars(props) {
	const { rate } = props;
	if (!rate) return null;

	const displayStars = (rate) => {
		const stars = [];
		let i = 0;
		for (; i < rate; i++) {
			stars.push(<Entypo key={i} name="star" size={18} color="#FDCC0D" />);
		}
		for (; i < 5; i++) {
			stars.push(<Entypo key={i} name="star" size={18} color="silver" />);
		}
		return stars;
	};

	return (
		<View style={styles.starWrapper}>
			{displayStars(rate)}
			<Text>{rate} reviews</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	starWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});
