import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'

import store from './store'

//const store = createStore(manageBand)
console.log('Initial state: ', store.getState())



//store.dispatch({ type: ''})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
