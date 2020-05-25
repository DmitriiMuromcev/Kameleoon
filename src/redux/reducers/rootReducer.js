import { combineReducers } from 'redux';
import toolsList from './toolsList'

const initialState = {}

export const rootReducer = combineReducers({
	initialState,
	toolsList
});