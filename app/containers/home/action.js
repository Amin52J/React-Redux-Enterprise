import * as types from '@constants/actionTypes';

/**
 * containers/home/action.js : HOME_TEST action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the test action object
 **/
export function test(payload) {
  return {
    type: types.HOME_TEST,
    payload,
  };
}

/**
 * containers/home/action.js : HOME_TEST_SUCCESS action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the testSuccess action object
 **/
export function testSuccess(payload) {
  return {
    type: types.HOME_TEST_SUCCESS,
    payload,
  };
}

/**
 * containers/home/action.js : HOME_TEST_ERROR action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the testError action object
 **/
export function testError(payload) {
  return {
    type: types.HOME_TEST_ERROR,
    payload,
  };
}

/**
 * containers/home/action.js : HOME_TEST_CANCEL action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the testCancel action object
 **/
export function testCancel(payload) {
  return {
    type: types.HOME_TEST_CANCEL,
    payload,
  };
}
