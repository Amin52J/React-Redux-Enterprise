import {routerReducer} from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import hocReducer from '@hoc/cleanOnUnmount/reducer';
import * as reducers from '@reducers';
import epics from '@epics';
import {ajax} from 'rxjs/observable/dom/ajax';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

const persistConfig = {
  key: 'root',
  storage
};
const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: {
    getJSON: ajax.getJSON,
    of
  }
});
const combinedReducers = persistCombineReducers(persistConfig, {
  ...reducers,
  routing: routerReducer
});
const reducer = hocReducer(combinedReducers);
const store = createStore(reducer, applyMiddleware(epicMiddleware));

export default store;
