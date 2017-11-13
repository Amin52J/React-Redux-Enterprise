import * as types from '@constants/actionTypes';

/**
 * hoc/cleanOnUnmount/reducer.js : the cleanOnUnmount HOC reducer factory
 * @param {Function} combinedReducers the current reducers factory of the component
 * @returns {Function} combination of the current reducer factory and the new (with reset functionality) reducer factory
 **/
export default combinedReducers => (state, action) => {
  switch (action.type) {
    case types.RESET:
      state = undefined; // eslint-disable-line no-undefined
      break;
    default:
      // do nothing
      break;
  }
  return combinedReducers(state, action);
};
