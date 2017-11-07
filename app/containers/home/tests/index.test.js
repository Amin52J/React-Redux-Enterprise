import React from 'react';
import {mount} from 'enzyme';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import hocReducer from '../../../hoc/cleanOnUnmount/reducer';
import * as reducers from '../../../reducers/index';
import Home from '../index';

require('isomorphic-fetch');

const combinedReducers = combineReducers(reducers);
const reducer = hocReducer(combinedReducers);
const store = createStore(reducer, applyMiddleware(thunk));

describe('Home Container', () => {
  it('renders with no problem', () => {
    const component = mount(
      <Provider store={store}>
        <Home/>
      </Provider>
    );
    expect(component.find('.home-page').length > 0).toEqual(true);
  });
});
