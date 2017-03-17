import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import F3Reducer,  { F3Containers, F3Components } from './f3';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore( F3Reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={ F3Containers.F3Container }>
        <IndexRoute component={ F3Components.F3Component } >
        </IndexRoute>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
