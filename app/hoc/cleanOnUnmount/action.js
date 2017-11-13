import * as types from '@constants/actionTypes';

/**
 * hoc/cleanOnUnmount/action.js : RESET action factory
 * @returns {Object} the reset action object
 **/
export function reset() {
  return {
    type: types.RESET
  };
}
