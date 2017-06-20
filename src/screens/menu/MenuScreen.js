import React, { Component } from 'react';

import {
	AsyncStorage,
	View,
	TouchableHighlight,
	Button,
	ScrollView
} from 'react-native';


import { NavigationActions } from 'react-navigation';

import { Container, Card, CardItem, Content, Text, Body } from 'native-base';


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

		const categories = {};


		for (let i = 0; i < menuItems.length; i++){
			category = menuItems[i].category;
			console.log(`menu item ${menuItems[i]}:`)
			if (!categories[menuItems[i].category]){
				console.log(`no category exists in ${categories} so I am creating it, fren` )
				categories[menuItems[i].category] = [menuItems[i]];
			} else {
				categories[menuItems[i].category].push(menuItems[i]);
			}
		}

		console.log(categories)

		return (
			<Container>
				<Content>
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

						{
							Object.keys(categories).map((category) => {
								// console.log('iterating through ', categories[category], category)
								return (
									<Card>
										<CardItem header>
											<Text>
											{category}
										</Text>

										</CardItem>
										<CardItem>
											<Body>
												{
													categories[category].map((menuItem) => {
														return (
															<Card>
																<CardItem>
																	<Body>
																		<Text>
																			{menuItem.name}
																		</Text>
																		<Text>
																			{menuItem.description}
																		</Text>
																	</Body>
																</CardItem>
															</Card>
														)
													})
												}

											</Body>
										</CardItem>
									</Card>
								)
							})
						}



					</ScrollView>
				</Content>
			</Container>
		);
	},
});

export default MenuScreen;
