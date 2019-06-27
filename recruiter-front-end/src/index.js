import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import 'semantic-ui-css/semantic.min.css';
// import dotenv from 'dotenv';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// require('dotenv').config();

const store = createStore(rootReducer, applyMiddleware(thunk));
// remember to come back and delete logger
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
