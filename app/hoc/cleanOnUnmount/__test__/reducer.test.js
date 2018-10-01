import React from 'react';
import reducer from '../reducer';
import * as types from '../../../constants/actionTypes';

describe('cleanOnUnmount HOC - reducers', () => {
  it('sets state to undefined', () => {
    expect(
      reducer(state => state)(
        {},
        {
          type: types.RESET,
        },
      ),
    ).toEqual(undefined);
  });
});
