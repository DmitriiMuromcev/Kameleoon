export const filterItem = payload => {
	return {
		type: 'FILTER_ITEMS', 
		payload
	}
}

export const sortItems = sortKey => {
	return {
		type: 'SORT_ITEMS', 
		payload: {
			sortKey
		}
	}
}

export const setItemsList = payload => {
	return {
		type: 'SET_ITEMS_LIST', 
		payload
	}
}