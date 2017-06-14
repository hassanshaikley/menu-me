import React from 'react'
import Navigator from './routes/Navigator'

import {
  AsyncStorage,
} from 'react-native'



const Root = React.createClass({
	render(){
	  return <Navigator />
	}
})


export default Root;
