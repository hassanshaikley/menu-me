import React, { Component } from 'react';

import {
	AsyncStorage,
	Text,
	View,
	TouchableHighlight,
	Button,
	ScrollView
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

		const food = []
		const drinks = [];
		const snacks = [];


		for (let i = 0; i < menuItems.length; i++){
			if (menuItems[i].category === 'drink'){
				drinks.push(menuItems[i]);
			} else if (menuItems[i].category === 'food'){
				food.push(menuItems[i]);
			}
		}




		return (
			<ScrollView>
				<Text style={{textAlign: 'center', fontSize: 20, marginBottom: 30}}>
					{this.props.screenProps.getTitle()}
				</Text>
				{
					menuItems.length === 0 &&
					<Text style={{textAlign: 'center'}}>
						Swipe Right to add an item to your menu! : )
					</Text>
				}
				<Text style={{textAlign: 'center', fontSize: 18}}>
					Food
				</Text>

				{
					food.map((menuItem, key) => {
						console.log(menuItems.length, ': length, key: ', key);

						const borderColor = menuItem.alreadyPrepared ? 'green' : 'gray';

						return (
							<View key={key} style={{marginLeft: 40, marginRight: 40, marginBottom: 10, padding: 20, borderColor: borderColor, borderWidth: 1}}>
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
				<Text style={{textAlign: 'center', fontSize: 18}}>
					Drinks
				</Text>
				{
					drinks.map((menuItem, key) => {
						console.log(menuItems.length, ': length, key: ', key);
						const borderColor = menuItem.alreadyPrepared ? 'green' : 'gray';

						return (
							<View key={key} style={{marginLeft: 40, marginRight: 40, padding: 20, marginBottom: 10, borderColor: borderColor, borderWidth: 1}}>
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
			</ScrollView>
		);
	},
});

export default MenuScreen;
