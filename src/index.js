import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { searchRobots } from './reducers';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// Logs out the action and the data associated with that action
const logger = createLogger();

// Creates a store that will save our data on the client side
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
