import React, { Component } from 'react';

import {
	AsyncStorage,
	View,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

import { Container, Card, CardItem, Content, Text, Body, Form, Item, Input,Label, Button, Toast} from 'native-base';

const t = require('tcomb-form-native');
const TForm = t.form.Form;

const MenuItemModel = t.struct({
	name: t.String,
	description: t.maybe(t.String),
	alreadyPrepared: t.Boolean,
	category: t.String,
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
			autoCorrect: false,
			autoCapitalize: 'none'
		}
	}
};


const EditMenuScreen = React.createClass({
	getInitialState() {
		return {
			editTitle: false,

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

	toggleEditTitle() {
		console.log(`toggling edit title`);
		this.setState({ editTitle: !this.state.editTitle });
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
			category: 'Food',
		})

		return this.props.screenProps.setMenu(menuItems)
	},
	editTitle(text){
		return this.props.screenProps.setTitle(text);
	},
	render(){
		const menuItems = this.props.screenProps.getMenu();

		return (
			<Container>
				<Content>
					<Text style={{textAlign: 'center', fontSize: 20, marginBottom: 30}}>
						Edit Menu
					</Text>
					<Text style={{textAlign: 'center', fontSize: 10,  marginBottom: 5 }}>
						Changes here are automatically saved
					</Text>
					<Form>
						<Item stackedLabel>
							<Label>Menu Title</Label>
							<Input
								value={this.props.screenProps.getTitle()}
								onChangeText={this.editTitle}
								autoCapitalize='none'
								autoCorrect={false}
								/>
						</Item>


						<Button light block onPress={this.addMenuItem}>
							<Text>Add Menu Item</Text>
						</Button>
					</Form>

					<Card>
						<CardItem header>
							<Text>
								Menu
							</Text>
						</CardItem>
						{
							menuItems.map((menuItem, key) => {
								console.log(`creating menu item ${key}, using data: ${JSON.stringify(menuItem)}`)
								const onChange = (newValue) => {
									this.changeMenuItem(key, newValue);
								}
								return (
									<Card key={key}>
										<CardItem header>
											<TForm type={MenuItemModel} onChange={onChange} value={menuItem} options={MenuItemModelOptions}/>

										</CardItem>
										<CardItem>

											<Button block
												onPress={
													() => {
														menuItems.splice(key, 1);

														return this.props.screenProps.setMenu(menuItems)
													}
												}
												>
												<Text>Remove Item</Text>
											</Button>
										</CardItem>
									</Card>
								);
							})
						}

					</Card>
				</Content>
			</Container>
		);
	},
});

export default EditMenuScreen;
