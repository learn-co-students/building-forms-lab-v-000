import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageBand from './reducers/manageBand'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(manageBand)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)