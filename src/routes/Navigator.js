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
