import { TabNavigator } from 'react-navigation'

import {
	MenuScreen,
	EditMenuScreen
} from '../screens';

export default TabNavigator({
	home: {
		screen: MenuScreen,
	},
	edit: {
		screen: EditMenuScreen,
	},
}, {
	swipeEnabled: true,
	animationEnabled: false, // eh for performance but try
	tabBarPosition: 'top',
	showIcon: true,
	// pressColor: '#F00', also was removed
	indicatorStyle: {
		backgroundColor: '#F00'
	},
	tabBarOptions: {
		showLabel: false,
		style: {
			backgroundColor: 'white',
			activeTintColor: 'white',
			color: 'white',
			paddingTop: 0,
			height: 44,
		},
	},
});
