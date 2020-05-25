const initialState = {
  items: [],
  filterValue: '',
  sortOrder: 'SORT_ASC',
  sortKey: 'empty'

};

export default function toolsList( state = initialState, action) {
  
  let payload = action.payload

  switch (action.type ){

    case 'FILTER_ITEMS':

      return {
        ...state,
        filterValue: payload
      }

      break;
    
    case 'SORT_ITEMS':
 
      return {
        ...state,
        sortKey: payload.sortKey,
        sortOrder: state.sortOrder === 'SORT_ASC' ? 'SORT_DESC' : 'SORT_ASC'        
      }

      break;

    case 'SET_ITEMS_LIST':
      return {
        ...state,
        items: payload
      }
      break      
  
    default:
      return state
      break
  }
}
