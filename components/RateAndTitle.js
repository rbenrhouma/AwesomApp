import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { GlobalConst } from '../appConstants/AppConstants';
import Stars from './Stars';

export default function RateAndTitle(props) {
	const { good, taille } = props;
	localSize = taille;

	if (!good) return null;
	if (!localSize) localSize = 20;

	const contextStyles = StyleSheet.create({
		descriptionText: {
			fontSize: localSize === 'XL' ? 20 : localSize === 'L' ? 15 : 10
		},
		avatar: {
			borderRadius: localSize === 'XL' ? 30 : localSize === 'L' ? 25 : 10,
			height: localSize === 'XL' ? 100 : localSize === 'L' ? 80 : 40,
			width: localSize === 'XL' ? 100 : localSize === 'L' ? 80 : 40,
			borderWidth: localSize === 'XL' ? 2 : localSize === 'L' ? 1 : 0,
			margin: localSize === 'XL' ? 0 : localSize === 'L' ? 10 : 0,
			borderColor: GlobalConst.AppColor
		}
	});

	return (
		<View style={styles.container}>
			<View style={styles.avatarWrapper}>
				<Image style={contextStyles.avatar} source={{ uri: good.user.account.photos[0] }} />
			</View>
			<View style={styles.titleWrapper}>
				<Text style={contextStyles.descriptionText} numberOfLines={1} ellipsizeMode="tail">
					{good.title}
				</Text>
				<View style={styles.starWrapper}>
					<Stars rate={good.ratingValue} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
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
