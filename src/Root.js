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
		console.log(`\n\nsetting menu to ${JSON.stringify(menuItems)}\n\n`)
		return setMenuItems(menuItems)
		.then(() => {
			this.setState({menuItems})
		})
		.catch((error) => {
			console.log(`\t\tgot error ${error} when setting menu items fren`)
		})
	},

	render(){
	  return <Navigator screenProps={{getTitle: this.getTitle, setTitle: this.setTitle, getMenu: this.getMenu, setMenu: this.setMenu}}/>
	}
})


export default Root;
