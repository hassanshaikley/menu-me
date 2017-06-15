import React, { Component } from 'react';

import {
	AsyncStorage,
	Text,
	View,
	ScrollView,
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
		drink: 'Drink',
		// snacks: 'Snack',
	}, 'category')
});

var MenuItemModelOptions = {
  fields: {
    name: {
      autoCorrect: false,
			autoCapitalize: 'none'
    },
		description: {
			autoCorrect: false,
			autoCapitalize: 'none'
		},
		category: {
			nullOption: false
		}
  }
};


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
		return this.props.screenProps.setMenu(menuItems)
	},
	addMenuItem(){
		let menuItems = this.props.screenProps.getMenu()

		menuItems.unshift({
			name: 'Things name',
			description: 'things description',
			alreadyPrepared: false,
			category: 'food',
		})

		return this.props.screenProps.setMenu(menuItems)
	},
	editTitle(text){
		return this.props.screenProps.setTitle(text);
	},
	render(){
		const menuItems = this.props.screenProps.getMenu();

		return (
			<ScrollView>
				<Text style={{textAlign: 'center', fontSize: 20, marginBottom: 30}}>
					Edit Menu
				</Text>

				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 20, marginLeft: 20, marginRight: 20, padding: 5, marginBottom: 10}}
					value={this.props.screenProps.getTitle()}
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={this.editTitle}
					/>

					<Button
						title='Add a menu item'
						color='#841584'
						onPress={this.addMenuItem}
						/>
				<View>
					{
						menuItems.map((menuItem, key) => {
							console.log(`creating menu item ${key}, using data: ${JSON.stringify(menuItem)}`)
							const onChange = (newValue) => {
								this.changeMenuItem(key, newValue);
							}
							return (
								<View key={key} style={{marginLeft: 20, marginRight: 20, marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 5}}>
									<Form style={{fontSize: 10}} type={MenuItemModel} onChange={onChange} value={menuItem} options={MenuItemModelOptions}/>
									<Button
										title='Remove Item'
										color='black'
										onPress={
											() => {
												menuItems.splice(key, 1);
												return this.props.screenProps.setMenu(menuItems)
											}
										}
										/>
								</View>
							);
						})
					}
				</View>
			</ScrollView>
		);
	},
});

export default EditMenuScreen;
