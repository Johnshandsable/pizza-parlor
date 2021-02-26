import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // need to install this using |  npm install redux-logger

const pizzaReducer = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    return [...state, action.payload];
  }
  return state;
};

const customerInfoReducer = (state = {}, action) => {
  if (action.type === 'ADD_CUSTOMER_INFO') {
    return action.payload;
  }
  return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    customerInfoReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
