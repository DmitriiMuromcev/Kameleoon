import React, {Component} from 'react';
import SearchInput from '../../components/SearchInput';
import TableColumn from '../../components/TableColumn';
import css from './style.module.sass';

const MainPage = (props) => {

	return(
		<div className={css.container}>

			<SearchInput 
				filterItem={props.filterItem} 
				filterValue={props.filterValue} 
			/>	

			<TableColumn 
				setItemsList={props.setItemsList}
				sortItems={props.sortItems}
				items={props.items}
				sortKey={props.sortKey}
				sortOrder={props.sortOrder}
				filterValue={props.filterValue}
			/>

		</div>
	)
};

export default MainPage;