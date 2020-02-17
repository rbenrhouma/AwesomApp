import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function RateAndTitle(props) {
	const { room } = props;

	if (!room) return null;

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
		<View style={styles.container}>
			<View style={styles.avatarWrapper}>
				<Image style={styles.avatar} source={{ uri: room.user.account.photos[0] }} />
			</View>
			<View style={styles.titleWrapper}>
				<Text style={styles.titleTitle} numberOfLines={1} ellipsizeMode="tail">
					{room.title}
				</Text>
				<View style={styles.starWrapper}>
					{displayStars(room.ratingValue)}
					<Text>{room.ratingValue} reviews</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		width: '100%',
		flex: 1,
		flexDirection: 'row'
	},
	titleWrapper: {
		flex: 3,
		flexDirection: 'column',
		marginLeft: 10
	},
	titleTitle: {
		fontSize: 18
	},
	starWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatarWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	},
	avatar: {
		borderRadius: 30,
		height: 100,
		width: 100,
		borderWidth: 2,
		borderColor: 'rgb(0,70,254)'
	}
});
