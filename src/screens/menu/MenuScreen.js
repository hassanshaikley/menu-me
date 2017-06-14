import React, { Component } from 'react';

import {
	AsyncStorage,
	Text,
	View,
	TouchableHighlight,
	Button
} from 'react-native';

import { NavigationActions } from 'react-navigation';

const MenuScreen = React.createClass({
	getInitialState() {
		return {
			menuItems: {},
		};
	},
	// async storeKey(item, selectedValue) {
	// 	try {
	// 		await AsyncStorage.setItem(item, selectedValue);
	// 	} catch (error) {
	// 		console.log('AsyncStorage error: ' + error.message);
	// 	}
	// },


	componentDidMount() {

	},
	addMenuItem(){

	},
	render(){
		return (
			<View>
				<Text>
				Menu Sccreen
				</Text>

				<Button
				title='hi'
				color='#841584'
				onPress={this.addMenuItem}
				/>
			</View>
		);
	},
});

export default MenuScreen;
