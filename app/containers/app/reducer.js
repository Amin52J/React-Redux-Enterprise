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
      console.info(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        appData: action.payload
      };

    case types.TEST_ERROR:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}
