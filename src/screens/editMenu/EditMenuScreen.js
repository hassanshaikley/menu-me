import React, { Component } from 'react';

import {
	AsyncStorage,
	Text,
	View,
	TouchableHighlight,
	Button,
	TextInput,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import { getMenuTitle, setMenuTitle } from '../../api';

const EditMenuScreen = React.createClass({
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
		return getMenuTitle().then(menuTitle => {
			console.log(`got menu title ${menuTitle}`)
			return this.setState({menuTitle})
			.then(() => {
				return setMenuTitle(menuTitle)
			})
		})
	},
	addMenuItem(){

	},
	editTitle(text){
		console.log(text)
		this.setState({title: text})
	},
	render(){
		return (
			<View>
				<Text>
				Edit Menu Sccreen
				</Text>

				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					value={this.state.menuTitle}
					onChangeText={this.editTitle}
					/>
				<Button
				title='EDIT THING'
				color='#841584'
				onPress={this.addMenuItem}
				/>
			</View>
		);
	},
});

export default EditMenuScreen;
