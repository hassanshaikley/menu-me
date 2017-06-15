import React from 'react'
import Navigator from './routes/Navigator'

import {
  AsyncStorage,
} from 'react-native'


import { getMenuTitle, setMenuTitle } from './api';

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
	},

	getTitle(){
		console.log('get title returing ', this.state.menuTitle)
		return this.state.menuTitle;
	},
	setTitle(menuTitle) {
		console.log('setting menu title to ', menuTitle)
		return setMenuTitle(menuTitle)
		.then(() => {
			this.setState({menuTitle: menuTitle})
		})
	},
	getMenu() {
		return this.state.menu;
	},
	setMenu(menuItems) {
		this.setState({menuItems})
	},

	render(){
	  return <Navigator setMenu={this.setMenu} getMenu={this.getMenu} setTitle={this.setTitle} getTitle={this.getTitle} screenProps={{getTitle: this.getTitle, setTitle: this.setTitle}}/>
	}
})


export default Root;
