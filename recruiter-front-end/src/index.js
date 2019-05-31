import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rootReducer from './reducers/index.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// import dotenv from 'dotenv';
import App from './App';

// require('dotenv').config();

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
