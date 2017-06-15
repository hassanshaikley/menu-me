import {
	AsyncStorage,
} from 'react-native';

const menuTitleVar = 'hk_menu_title';
const menuItemsVar = 'hk_menu_items';


const defaultTitle = 'Good Heckin Menu';
const defaultMenu = [];


// AsyncStorage.removeItem(menuItemsVar)

export const getMenuTitle = () => {
	return AsyncStorage.getItem(menuTitleVar)
	.then((menuTitle) => {
		if (!menuTitle) {
			return AsyncStorage.setItem(menuTitleVar, defaultTitle)
			.then(() => { return defaultTitle })
		}
		return menuTitle
	})
	.catch((error) => {
		console.log('got error ' + error)
	});
}

export const setMenuTitle = (newTitle) => {
	return AsyncStorage.setItem(menuTitleVar, newTitle);
}

export const getMenuItems = () => {
	return AsyncStorage.getItem(menuItemsVar)
	.then((menuItems) => {
		if (!menuItems) {
			console.log('theres no menu items so setting it to', JSON.stringify(defaultMenu))
			return AsyncStorage.setItem(menuItemsVar, JSON.stringify(defaultMenu))
			.then(() => { return defaultMenu })
		}
		console.log('\n\n\ngetting menu items from api!!!!!!!!!!!!!', JSON.parse(menuItems))
		return JSON.parse(menuItems)
	})
	.catch((error) => {
		console.log('got error ' + error)
	});
}

export const setMenuItems = (newMenu) => {
	return AsyncStorage.setItem(menuItemsVar, JSON.stringify(newMenu))
	.catch(error => {
		console.log(`Error in setMenuItems: ${error}`)
	})

}
