import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import {loadState, saveState} from './redux/localStorage'

import Routes from './routes';
import './styles/main.sass'

let persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(() => {
	saveState(store.getState());
});

ReactDOM.render(

  <Provider store={store}>
    <Routes />
  </Provider>,
  
  document.querySelector('.app')
);
