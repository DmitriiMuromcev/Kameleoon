import React from 'react';
import { useContext } from 'react-redux'
import css from './style.module.sass'
import searchLogo from '../../assets/svg/search.svg'



const SearchInput = (props) => {

	const { filterItem, filterValue } = props;

	return(
		<label htmlFor="searchTaskInput" className={css.label}>

			<object data={searchLogo} type="image/svg+xml" className={css.icon}></object>

			<input 
				id="searchTaskInput" 
				className={css.input}
				placeholder="Поиск"
				onChange={ e => filterItem(e.target.value) }
				value={filterValue}
				>
			</input>

		</label>
	)
};

export default SearchInput;