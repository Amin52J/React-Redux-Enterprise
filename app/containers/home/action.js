import * as types from '@constants/actionTypes';

export function test(payload) {
  return {
    type: types.HOME_TEST,
    payload
  };
}

export function testSuccess(payload) {
  return {
    type: types.HOME_TEST_SUCCESS,
    payload
  };
}

export function testError(payload) {
  return {
    type: types.HOME_TEST_ERROR,
    payload
  };
}

export function testCancel(payload) {
  return {
    type: types.HOME_TEST_CANCEL,
    payload
  };
}
