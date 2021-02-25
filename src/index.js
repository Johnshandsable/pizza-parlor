import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';   // need to install this using |  npm install redux-logger

const pizzaList = (state = [], action) => {
  if(action.type === 'SET_PIZZA_LIST'){
    action.payload
  }
  return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    pizzaList, // pizzaList: pizzaList
  }),
  applyMiddleware(logger)
);



ReactDOM.render(<App />, document.getElementById('root'));
