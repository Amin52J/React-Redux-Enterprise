import * as types from '@constants/actionTypes';

const initialState = {};

export default function app(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.TEST:
      newState.success = true;
      return newState;

    case types.TEST_ERROR:
      newState.error = true;
      return newState;

    default:
      return state;
  }
}
