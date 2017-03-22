import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import surveyReducer,  { surveyContainers } from './survey';

import './index.scss';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore( surveyReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={ surveyContainers.SurveyContainer }>
        <Route path="/survey" component={surveyContainers.SectionContainer} />
        <Route path="/success" component={surveyContainers.SuccessContainer} />
        <IndexRoute component={ surveyContainers.WelcomeContainer } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
