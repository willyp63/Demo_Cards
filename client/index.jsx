import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/app';

const store = createStore(
  combineReducers({}),
  {},
  applyMiddleware(thunk, logger)
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={createHistory()}>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root'));
});