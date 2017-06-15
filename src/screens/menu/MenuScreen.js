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
	// async storeKey(item, selectedValue) {
	// 	try {
	// 		await AsyncStorage.setItem(item, selectedValue);
	// 	} catch (error) {
	// 		console.log('AsyncStorage error: ' + error.message);
	// 	}
	// },

	// componentWillMount() {
	//
	// },

	// addMenuItem(){
	//
	// },
	render(){
		console.log('rendering, fren',this.props.screenProps.getTitle())
		return (
			<View>
				<Text style={{textAlign: 'center', marginTop: 20, fontSize: 20}}>
					{this.props.screenProps.getTitle()}
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
