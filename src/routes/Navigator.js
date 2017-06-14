import { TabNavigator } from 'react-navigation'

import {
	MenuScreen,
} from '../screens';

export default TabNavigator({
	Login: {
		screen: MenuScreen,
	},
}, {
	swipeEnabled: true,
	animationEnabled: false, // eh for performance but try
	tabBarPosition: 'bottom',
	showIcon: true,
	// pressColor: '#F00', also was removed
	// indicatorStyle: { this was removed - did the undelrine
	// 	backgroundColor: '#F00'
	// },
	tabBarOptions: {
		showLabel: false,
		style: {
			backgroundColor: '#fff',
		},
	},
});
