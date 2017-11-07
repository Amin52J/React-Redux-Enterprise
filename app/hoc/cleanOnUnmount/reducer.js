import * as types from '@constants/actionTypes';

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
