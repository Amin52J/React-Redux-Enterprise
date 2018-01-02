import * as types from '@constants/actionTypes';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: [/* keys to be persisted */]
};

const initialState = {};

/**
 * containers/app/reducer.js : app reducer
 * @param {Object} state the state of the app container
 * @param {Object} action the redux action instance
 * @returns {Object} returns the new state
 **/
function app(state = initialState, action) {
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

export default persistReducer(persistConfig, app);
