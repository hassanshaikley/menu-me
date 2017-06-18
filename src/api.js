import {
	AsyncStorage,
} from 'react-native';

const menuTitleVar = 'hk_menu_title';
const menuItemsVar = 'hk_menu_items';
const categoriesVar = 'hk_menu_items';


const defaultTitle = 'Good Heckin Menu';
const defaultMenu = [];
const defaultCategories = [];


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

export const getCategories = () => {
	return AsyncStorage.getItem(categoriesVar)
	.then((categories) => {
		if (!categories) {
			console.log('theres no categories items so setting it to', JSON.stringify(defaultCategories))
			return AsyncStorage.setItem(categoriesVar, JSON.stringify(defaultCategories))
			.then(() => { return defaultCategories })
		}
		console.log('\n\n\ngetting categories items from api!!!!!!!!!!!!!', JSON.parse(categories))
		return JSON.parse(categories)
	})
	.catch((error) => {
		console.log('got error ' + error)
	});
}

export const setCategories = (newCategories) => {
	return AsyncStorage.setItem(categoriesVar, newCategories);
}
