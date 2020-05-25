import React, { memo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators }    from 'redux';
import { createSelector } from 'reselect';

import * as toolsListActions from '../../redux/actions/toolsList';
import MainPage from '../../pages/MainPage';

const getItems = state => state.toolsList.items
const getFilterValue = state => state.toolsList.filterValue
const getSortKey = state => state.toolsList.sortKey
const getSortOrder = state => state.toolsList.sortOrder



const getFilteredItems = createSelector(
	getItems,
	getFilterValue,
	(items, filterValue) => {

		return items.filter(item => {
			return item.name.toLowerCase().includes(filterValue.toLowerCase())
		})

	}
)

const getSortedList = createSelector(
	getFilteredItems,
	getSortKey,
	getSortOrder,
	(items, key, order) => {
        return items.sort( (a,b) => {

          if( a[key] < b[key] ) return order === 'SORT_ASC' ? -1 : 1;
          if( a[key] > b[key] ) return order === 'SORT_ASC' ? 1: -1;

          return 0;

        })		
	}
)


const MainContainer = () => {

	const items = useSelector(getSortedList);
	const filterValue = useSelector(getFilterValue);
	const sortKey = useSelector(getSortKey);
	const sortOrder = useSelector(getSortOrder);

	const actions = bindActionCreators(toolsListActions, useDispatch());


	return (
		<MainPage 
			{...actions}
			items={items}
			filterValue={filterValue}
			sortKey={sortKey}
			sortOrder={sortOrder} 
		/>
	)
};

export default MainContainer;