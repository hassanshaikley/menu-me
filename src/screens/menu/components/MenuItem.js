import React, {Component} from 'react'
import { ScrollView, View, Text } from 'react-native'

import styles from './styles/MenuItem'

const MenuItem = () => (
	<View style={styles.root}>
		<View style={styles.titleContainer}>
			<Text>{this.props.name}</Text>
		</View>
		<View style={styles.contentContainer}>
		<Text>{this.props.description}</Text>
		</View>
	</View>
)

export default MenuItem;
