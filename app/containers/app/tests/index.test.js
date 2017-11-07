import React from 'react';
import {mount} from 'enzyme';
import App from '../index';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import hocReducer from '../../../hoc/cleanOnUnmount/reducer';
import * as reducers from '../../../reducers/index';

require('isomorphic-fetch');

const combinedReducers = combineReducers(reducers);
const reducer = hocReducer(combinedReducers);
const store = createStore(reducer, applyMiddleware(thunk));

describe('App Container', () => {
  it('renders with no problem', () => {
    const component = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    );
    expect(component.find('.app').length > 0).toEqual(true);
  });
});
