import * as types from '@constants/actionTypes';
import Common from '@constants/common';

function dispatchTest(data) {
  return {
    type: types.TEST,
    data
  };
}

function dispatchTestError(data) {
  return {
    type: types.TEST_ERROR,
    data
  };
}

export function test(link) {
  return dispatch => (
    Common.request
      .get(link)
      .then(response => {
        dispatch(dispatchTest(response));
      })
      .catch(err => {
        dispatch(dispatchTestError(err));
      })
  );
}
