import React from 'react';
import reducer from '../reducer';
import * as types from '../../../constants/actionTypes';

describe('App Container - reducers', () => {
  it('sets loading state', () => {
    expect(
      reducer(
        {},
        {
          type: types.TEST,
        },
      ),
    ).toEqual({
      loading: true,
    });
  });

  it('sets success state', () => {
    expect(
      reducer(
        {},
        {
          type: types.TEST_SUCCESS,
          payload: 'success',
        },
      ),
    ).toEqual({
      loading: false,
      success: true,
      appData: 'success',
    });
  });

  it('sets error state', () => {
    expect(
      reducer(
        {},
        {
          type: types.TEST_ERROR,
        },
      ),
    ).toEqual({
      loading: false,
      error: true,
    });
  });

  it('returns the initial state', () => {
    expect(reducer({}, {})).toEqual({});
  });
});
