import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable/lib/cjs/createEpicMiddleware';
import createHistory from 'history/createBrowserHistory';

// rxjs observables
import { ajax } from 'rxjs/observable/dom/ajax';
import { of } from 'rxjs/observable/of';
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

// the epics middleware
const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: {
    getJSON: ajax.getJSON,
    of,
  },
});

// the reducers
const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer,
});
const reducer = hocReducer(combinedReducers); // adds reset reducer to our apps reducer
const store = createStore(
  reducer,
  applyMiddleware(epicMiddleware, routerMiddleware(history)),
);

export default store;
