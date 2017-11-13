import * as types from '@constants/actionTypes';

const initialState = {};

export default function home(state = initialState, action) {
  switch (action.type) {
    case types.HOME_TEST:
      return {
        ...state,
        loading: true
      };

    case types.HOME_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };

    case types.HOME_TEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}
