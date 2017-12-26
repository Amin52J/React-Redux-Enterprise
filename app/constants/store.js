import {routerReducer} from 'react-router-redux/reducer';
import routerMiddleware from 'react-router-redux/middleware';
import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import {createEpicMiddleware} from 'redux-observable/lib/cjs/createEpicMiddleware';
import persistCombineReducers from 'redux-persist/lib/persistCombineReducers';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';

// rxjs observables
import {ajax} from 'rxjs/observable/dom/ajax';
import {of} from 'rxjs/observable/of';
// ----------------

import hocReducer from '@hoc/cleanOnUnmount/reducer';
import * as reducers from '@reducers';
import epics from '@epics';

// global definitions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
// ------------------

export const history = createHistory();

// the persist config
const persistConfig = {
  key: 'root',
  storage
};

// the epics middleware
const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: {
    getJSON: ajax.getJSON,
    of
  }
});

// the reducers
const combinedReducers = persistCombineReducers(persistConfig, {
  ...reducers,
  routing: routerReducer
});
const reducer = hocReducer(combinedReducers); // adds reset reducer to our apps reducer
const store = createStore(reducer, applyMiddleware(epicMiddleware, routerMiddleware(history)));

export default store;
