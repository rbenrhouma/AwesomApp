import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { GlobalConst } from '../appConstants/AppConstants';

export default function RateAndTitle(props) {
	const { room, taille } = props;
	localSize = taille;
	console.log(props.size);

	if (!room) return null;
	if (!localSize) localSize = 20;
	console.log(localSize);
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

	const contextStyles = StyleSheet.create({
		descriptionText: {
			fontSize: localSize === 'XL' ? 20 : localSize === 'L' ? 15 : 10
		},
		avatar: {
			borderRadius: localSize === 'XL' ? 30 : localSize === 'L' ? 25 : 10,
			height: localSize === 'XL' ? 100 : localSize === 'L' ? 80 : 40,
			width: localSize === 'XL' ? 100 : localSize === 'L' ? 80 : 40,
			borderWidth: 2,
			borderColor: GlobalConst.AppColor
		}
	});

	return (
		<View style={styles.container}>
			<View style={styles.avatarWrapper}>
				<Image style={contextStyles.avatar} source={{ uri: room.user.account.photos[0] }} />
			</View>
			<View style={styles.titleWrapper}>
				<Text style={contextStyles.descriptionText} numberOfLines={1} ellipsizeMode="tail">
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

	starWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatarWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});
