import reducer from '../reducer';
import * as types from '../../../constants/actionTypes';

describe('App Reducer', () => {
  it('returns success data', () => {
    expect(reducer(undefined, {type: types.TEST})).toEqual({success: true});
  });

  it('returns error data', () => {
    expect(reducer(undefined, {type: types.TEST_ERROR})).toEqual({error: true});
  });

  it('returns default state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});
