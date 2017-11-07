import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import thunk from 'redux-thunk';
import routes from '@constants/routes';
import hocReducer from '@hoc/cleanOnUnmount/reducer';
import * as reducers from '@reducers';

require('isomorphic-fetch');

const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer
});
const reducer = hocReducer(combinedReducers);
const store = createStore(reducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
