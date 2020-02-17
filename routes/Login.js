import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Constants from 'expo-constants';
import axios from 'axios';
import { GlobalConst } from '../appConstants/AppConstants';

export default function Login() {
	const [ mail, setMail ] = useState();
	const [ password, setPassword ] = useState();
	const navigation = useNavigation();

	const handleMail = (mail) => {
		setMail(mail);
	};

	const handlePassword = (pass) => {
		setPassword(pass);
	};

	const login = () => {
		navigation.replace('List');
		return;
		if (!mail || !password) return;
		axios
			.post('https://airbnb-api.now.sh/api/user/log_in', {
				headers: {
					'Content-Type': 'application/json'
				},
				email: mail,
				password: password
			})
			.then((res) => {
				AsyncStorage.setItem('account', JSON.stringify(res.data));
				navigation.replace('List');
			});
	};

	return (
		<View style={styles.container}>
			<View style={{ flex: 1, alignItems: 'center' }}>
				<Entypo name="home" size={100} color="white" />
				<Text style={styles.welcome}>Welcome</Text>
			</View>
			<KeyboardAvoidingView behavior="padding" style={styles.keyboardWrapper}>
				<TextInput style={styles.input} placeholderTextColor="white" placeholder="email" onChangeText={handleMail} />
				<TextInput style={styles.input} placeholderTextColor="white" placeholder="password" secureTextEntry onChangeText={handlePassword} />

				<TouchableOpacity onPress={login} style={styles.button}>
					<Text style={styles.buttonTitle}>Login</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: GlobalConst.AppColor,
		paddingTop: Constants.statusBarHeight
	},
	welcome: {
		color: 'white',
		fontSize: 54,
		marginTop: 25
	},
	keyboardWrapper: {
		flex: 2,
		width: '100%',
		alignItems: 'center',
		backgroundColor: GlobalConst.AppColor
	},
	input: {
		color: 'white',
		fontSize: 24,
		height: 54,
		width: '75%',
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		paddingLeft: 15
	},
	button: {
		height: 70,
		backgroundColor: 'white',
		width: '50%',
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50
	},
	buttonTitle: {
		color: GlobalConst.AppColor,
		fontSize: 34
	}
});
