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

		const menuItems = this.props.screenProps.getMenu();
		console.log(`\t\tin MenuScreen menuItems is ${menuItems}`)
		return (
			<View>
				<Text style={{textAlign: 'center', marginTop: 30, fontSize: 20, marginBottom: 30}}>
					{this.props.screenProps.getTitle()}
				</Text>
				{
					menuItems.length === 0 &&
					<Text style={{textAlign: 'center'}}>
						Swipe Right to add an item to your menu! : )
					</Text>
				}
				{
					menuItems.map((menuItem, key) => {
						return (
							<View key={key}>
								<Text>
									{menuItem.name}
								</Text>
								<Text>
									{menuItem.description}
								</Text>
								<Text>
									{menuItem.category}
								</Text>
							</View>
						)
					})
				}
			</View>
		);
	},
});

export default MenuScreen;
