import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'

//the store has a dispatch action, which passes the action to the reducer
//the reducer then runs its switch state to decide what to do.
const store = createStore(manageBand)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
