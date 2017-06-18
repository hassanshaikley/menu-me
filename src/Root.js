import React from 'react'
import Navigator from './routes/Navigator'

import {
  AsyncStorage,
} from 'react-native'


import {
	getMenuTitle,
	setMenuTitle,
	getMenuItems,
	setMenuItems,
	getCategories,
	setCategories,
} from './api';

const Root = React.createClass({
	getInitialState() {
		return {
			menuItems: [],
			menuTitle: undefined,
			categories: [],
		};
	},
	componentDidMount() {
		let menuTitle;
		let menuItems;
		let categories;

		return getMenuTitle()
		.then(_menuTitle => {
			menuTitle = _menuTitle;
			return getMenuItems()
		})
		.then((_menuItems) => {
 			menuItems = _menuItems;
			return getCategories()

		})
		.then(_categories => {
			return this.setState({ menuItems, menuTitle, categories });
		})
	},

	getTitle(){
		// console.log('get title returing ', this.state.menuTitle)
		return this.state.menuTitle;
	},
	setTitle(menuTitle) {
		// console.log('setting menu title to ', menuTitle)
		this.setState({menuTitle: menuTitle})

		setMenuTitle(menuTitle)
	},
	getMenu() {
		console.log('get menu returing ', this.state.menuItems)

		return this.state.menuItems;
	},
	setMenu(menuItems) {
		console.log('1---set menu fren')
		this.setState({menuItems})

		setMenuItems(menuItems)
	},

	render(){
	  return <Navigator screenProps={{getTitle: this.getTitle, setTitle: this.setTitle, getMenu: this.getMenu, setMenu: this.setMenu}}/>
	}
})


export default Root;
