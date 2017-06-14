import {
	AsyncStorage,
} from 'react-native';

const menuTitleVar = 'hk_menu_title';

const defaultTitle = 'Good Heckin Menu';

const defaultMenuItems = [{
	title: 'Welcome',
	description: 'Swipe right to edit items in your menu'
}]

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

export const getMenuObject = () => {

}

export const setMenuObject = (newObject) => {

}
