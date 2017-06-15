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

		const menuItems = this.props.screenProps.getMenu(); // This is an async function... (a promise)

		console.log('SOME MENU ITEMS BELOW')
		console.log(menuItems)
		// for (let i = 0; i < menuItems.length; i++){
		// 	if (menuItems[i].category === 'drink'){
		// 		menuItems.push(menuItems.splice(i, 1))
		// 	}
		// }

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
						console.log(menuItems.length, ': length, key: ', key);
						
						return (
							<View key={key}>
								<Text style={{textAlign: 'center', fontSize: 16}}>
									{menuItem.name}
								</Text>
								<Text style={{textAlign: 'center', fontSize: 12}}>
									{menuItem.description}
								</Text>
							</View>
						)
					})
				}
				{ console.log('hello lol')}
			</View>
		);
	},
});

export default MenuScreen;
