import React from 'react';
import * as actions from '../action';
import * as types from '../../../constants/actionTypes';

describe('App Container - actions', () => {
  it('dispatches test action', () => {
    expect(actions.test('some text')).toEqual({
      type: types.TEST,
      payload: 'some text'
    });
  });

  it('dispatches testSuccess action', () => {
    expect(actions.testSuccess('some text')).toEqual({
      type: types.TEST_SUCCESS,
      payload: 'some text'
    });
  });

  it('dispatches testError action', () => {
    expect(actions.testError('some text')).toEqual({
      type: types.TEST_ERROR,
      payload: 'some text'
    });
  });

  it('dispatches testCancel action', () => {
    expect(actions.testCancel('some text')).toEqual({
      type: types.TEST_CANCEL,
      payload: 'some text'
    });
  });
});
