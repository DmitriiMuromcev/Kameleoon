import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer}  from './reducers/rootReducer.js';

export default function configureStore() {

	const store = createStore(
		rootReducer, 
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)

	return store
};