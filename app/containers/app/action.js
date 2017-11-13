import * as types from '@constants/actionTypes';

export function test(payload) {
  return {
    type: types.TEST,
    payload
  };
}

export function testSuccess(payload) {
  return {
    type: types.TEST_SUCCESS,
    payload
  };
}

export function testError(payload) {
  return {
    type: types.TEST_ERROR,
    payload
  };
}

export function testCancel(payload) {
  return {
    type: types.TEST_CANCEL,
    payload
  };
}
