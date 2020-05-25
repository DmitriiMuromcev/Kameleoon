import React, { useEffect } from 'react';
import css from './style.module.sass';
import { getData } from '../../services/APIService';
import lockIcon from '../../assets/svg/lock.svg';

const TableColumn = (props) => {

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => await props.setItemsList(getData())

	const { 
		items, 
		sortItems, 
		sortKey,
		sortOrder,
		filterValue
	} = props

	console.log(!items)

	const renderStatus = (status) => {
		switch(status) {
			case "enable":
				return <span className={`${css.status} ${css.status_enable}`}>ON</span>;
				break;
			case "disable":
				return <span className={`${css.status} ${css.status_disable}`}>OFF</span>;
				break;
			case "blocked":
				return <img className={`${css.status} ${css.status_blocked}`} src={lockIcon} />;
				break;
			default: 
				return null;
				break; 									
		}
	}

	const renderSortIcon = (key, order) => {
		
		if (sortKey === key) {
			return (
				<div 
					className={`
						${css.sort_icon} 
						${sortOrder === 'SORT_ASC' ? css.sort_icon_desc : '' }
					`}>
				</div>
			);
		}
	}

	return(
		<div className={css.container}>

			<div className={css.inner_container}>

				<div className={css.head}>

					<div className={css.cell} onClick={ () => sortItems('name') }>
						Tool name
						{ renderSortIcon('name') }
					</div>

					<div className={css.cell} onClick={ () => sortItems('sites') }>
						Used on
						{ renderSortIcon('sites') }
					</div>

					<div className={css.cell} onClick={ () => sortItems('type') }>
						Type
						{ renderSortIcon('type') }
					</div>

					<div className={css.cell} onClick={ () => sortItems('status') }>
						Status
						{ renderSortIcon('status') }
					</div>

				</div>
				{
					items.length == 0 ? (<div className={css.not_found}>Not found</div>) :
					(

						items.map(item => {
						
							return(
								<div className={css.item} key={item.id}>

									<div className={css.cell}>{item.name}</div>
									<div className={css.cell}>{`${item.sites} sites`}</div>
									<div className={`${css.cell} ${css.cell_type}`}>{item.type}</div>
									<div className={css.cell}>{renderStatus(item.status)}</div>

								</div>
							)
						})
					)
				}



			</div>
		</div>
	)
};

export default TableColumn;
