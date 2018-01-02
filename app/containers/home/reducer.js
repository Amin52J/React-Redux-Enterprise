import * as types from '@constants/actionTypes';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'home',
  storage,
  whitelist: [/* keys to be persisted */]
};

const initialState = {};

/**
 * containers/home/reducer.js : home reducer
 * @param {Object} state the state of the home container
 * @param {Object} action the redux action instance
 * @returns {Object} returns the new state
 **/
function home(state = initialState, action) {
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

export default persistReducer(persistConfig, home);
