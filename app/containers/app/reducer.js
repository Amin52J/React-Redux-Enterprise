import * as types from '@constants/actionTypes';

const initialState = {};

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.TEST:
      return {
        ...state,
        loading: true
      };

    case types.TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        appData: action.payload
      };

    case types.TEST_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}
