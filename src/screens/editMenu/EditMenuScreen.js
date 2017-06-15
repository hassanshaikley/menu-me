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

const t = require('tcomb-form-native');
const Form = t.form.Form;

const MenuItemModel = t.struct({
	name: t.String,
	description: t.maybe(t.String),
	alreadyPrepared: t.Boolean,
	category: t.enums({
		food: 'Food',
		drink: 'Drinks',
		snacks: 'Snacks',
	})
});


const EditMenuScreen = React.createClass({
	// async storeKey(item, selectedValue) {
	// 	try {
	// 		await AsyncStorage.setItem(item, selectedValue);
	// 	} catch (error) {
	// 		console.log('AsyncStorage error: ' + error.message);
	// 	}
	// },


	componentWillMount() {

	},

	changeMenuItem(key, newValue) {
		let menuItems = this.props.screenProps.getMenu();

		menuItems[key] = newValue;

		console.log('changeMenuItem->props.screenprops.setmenu')
		this.props.screenProps.setMenu(menuItems)
	},
	addMenuItem(){
		let menuItems = this.props.screenProps.getMenu()
		console.log('add menu item pressed 1:', menuItems)

		menuItems.push({
			name: 'Things name',
			description: 'things description',
			alreadyPrepared: false,
			category: 'food'
		})
		console.log('setting menu items to ', menuItems)
		this.props.screenProps.setMenu(menuItems)
	},
	editTitle(text){
		this.props.screenProps.setTitle(text);
	},
	render(){
		const menuItems = this.props.screenProps.getMenu();

		console.log(menuItems, ':: is menuitems')
		return (
			<View>
				<Text style={{textAlign: 'center', marginTop: 30, fontSize: 20, marginBottom: 30}}>
					Edit Menu
				</Text>

				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 20, marginLeft: 20, marginRight: 20, padding: 5, marginBottom: 30}}
					value={this.props.screenProps.getTitle()}
					onChangeText={this.editTitle}
					/>

				<View>
					{
						menuItems.map((menuItem, key) => {
							let value = {}
							const onChange = (newValue) => {
								console.log(`new value is ${JSON.stringify(newValue)}`)
								value = newValue;
								this.changeMenuItem(key, newValue);
							}
							return (
								<View key={key} style={{marginLeft: 20, marginRight: 20, borderWidth: 1, borderColor: 'gray', padding: 5}}>
									<Form type={MenuItemModel} onChange={onChange} value={menuItems[key]}/>
									<Button
										title='Remove Item'
										color='black'
										onPress={
											() => {
												console.log('removing menu item bish')
												let menuItems = this.props.screenProps.getMenu();
												menuItems.splice(key, 1);
												this.props.screenProps.setMenu(menuItems)
											}
										}
										/>
								</View>
							);
						})
					}
				</View>

				<Button
					title='Add a menu item'
					color='#841584'
					onPress={this.addMenuItem}
					/>
			</View>
		);
	},
});

export default EditMenuScreen;
