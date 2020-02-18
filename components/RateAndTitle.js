import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
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
			height: localSize === 'XL' ? 100 : localSize === 'L' ? 80 : 50,
			width: localSize === 'XL' ? 100 : localSize === 'L' ? 80 : 50,
			borderWidth: localSize === 'XL' ? 2 : localSize === 'L' ? 1 : 0,
			margin: localSize === 'XL' ? 0 : localSize === 'L' ? 10 : 0,
			borderColor: GlobalConst.AppColor
		},
		titleWrapper: {
			flex: 3,
			flexDirection: 'column',
			padding: localSize === 'XL' ? 10 : localSize === 'L' ? 10 : 5
		}
	});

	return (
		<View style={styles.container}>
			<View style={styles.avatarWrapper}>
				<Image style={contextStyles.avatar} source={{ uri: good.user.account.photos[0] }} />
			</View>
			<View style={contextStyles.titleWrapper}>
				<Text style={contextStyles.descriptionText} numberOfLines={1} ellipsizeMode="tail">
					{good.title}
				</Text>
				<View style={styles.starWrapper}>
					<Stars rate={good.ratingValue} />

					<TouchableOpacity
						style={{
							flex: 1,
							alignItems: 'center',
							marginHorizontal: 15,
							backgroundColor: GlobalConst.AppColor,
							borderRadius: 5,
							display: localSize !== 'L' ? 'none' : 'flex'
						}}
						// onPress={() => {
						// 	navigation.navigate('Good', { id: good._id });
						// }}
					>
						<Text
							style={{
								color: 'white',
								margin: 5
							}}
						>
							Contacter
						</Text>
					</TouchableOpacity>
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

	starWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 3
	},
	avatarWrapper: {
		flex: 1,
		alignItems: 'flex-end'
	}
});
