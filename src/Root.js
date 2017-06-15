import React from 'react'
import Navigator from './routes/Navigator'

import {
  AsyncStorage,
} from 'react-native'


import { getMenuTitle, setMenuTitle, getMenuItems, setMenuItems } from './api';

const Root = React.createClass({
	getInitialState() {
		return {
			menuItems: [],
			menuTitle: undefined
		};
	},
	componentDidMount() {
		return getMenuTitle()
		.then(menuTitle => {
			return this.setState({ menuTitle });
		})
		.then(() => {
			return getMenuItems()
		})
		.then(menuItems => {
			return this.setState({ menuItems });
		})
	},

	getTitle(){
		// console.log('get title returing ', this.state.menuTitle)
		return this.state.menuTitle;
	},
	setTitle(menuTitle) {
		// console.log('setting menu title to ', menuTitle)
		return setMenuTitle(menuTitle)
		.then(() => {
			this.setState({menuTitle: menuTitle})
		})
	},
	getMenu() {
		console.log('get menu returing ', this.state.menuItems)

		return this.state.menuItems;
	},
	setMenu(menuItems) {
		console.log('1---set menu fren')
		return setMenuItems(menuItems)
		.then(() => {
			return this.setState({menuItems})
		})
		.catch((error) => {
			console.log(`x(3)x---got error ${error} when setting menu items fren`)
		})
	},

	render(){
	  return <Navigator screenProps={{getTitle: this.getTitle, setTitle: this.setTitle, getMenu: this.getMenu, setMenu: this.setMenu}}/>
	}
})


export default Root;
