import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import App from './containers/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, {}, window.devToolsExtension ? window.devToolsExtension() : f => f)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
