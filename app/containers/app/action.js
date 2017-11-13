import * as types from '@constants/actionTypes';

/**
 * containers/app/action.js : TEST action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the test action object
 **/
export function test(payload) {
  return {
    type: types.TEST,
    payload
  };
}

/**
 * containers/app/action.js : TEST_SUCCESS action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the testSuccess action object
 **/
export function testSuccess(payload) {
  return {
    type: types.TEST_SUCCESS,
    payload
  };
}

/**
 * containers/app/action.js : TEST_ERROR action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the testError action object
 **/
export function testError(payload) {
  return {
    type: types.TEST_ERROR,
    payload
  };
}

/**
 * containers/app/action.js : TEST_CANCEL action factory
 * @param {any} payload the payload of the action
 * @returns {Object} the testCancel action object
 **/
export function testCancel(payload) {
  return {
    type: types.TEST_CANCEL,
    payload
  };
}
