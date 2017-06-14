import React, { Component } from 'react';

import {
	AsyncStorage,
	Text,
	View,
	TouchableHighlight,
	Button
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { getMenuTitle } from '../../api';

const MenuScreen = React.createClass({
	getInitialState() {
		return {
			menuItems: [],
			menuTitle: undefined
		};
	},
	// async storeKey(item, selectedValue) {
	// 	try {
	// 		await AsyncStorage.setItem(item, selectedValue);
	// 	} catch (error) {
	// 		console.log('AsyncStorage error: ' + error.message);
	// 	}
	// },

	componentWillMount() {

	},

	componentDidMount() {
		return getMenuTitle().then(menuTitle => {
			return this.setState({menuTitle});
		})
	},
	addMenuItem(){

	},
	render(){
			console.log(this.state.menuTitle)
		return (
			<View>
				<Text>
				Menu Sccreen
				</Text>
				<Text>
					{this.state.menuTitle}
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
