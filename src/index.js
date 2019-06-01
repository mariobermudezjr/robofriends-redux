import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { searchRobots, requestRobots } from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// Logs out the action and the data associated with that action
const logger = createLogger();

// Combines all the reduces into one root object reducer
const rootReducer = combineReducers({ searchRobots, requestRobots });

// Creates a store that will save our data on the client side
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
