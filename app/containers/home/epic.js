import * as types from '@constants/actionTypes';
import * as actions from '@containers/home/action';

/**
 * containers/home/epic.js : test epic
 * @param {Object} action$ stream of actions
 * @param {Object} store the main store to be used
 * @param {Object} dependencies the dependencies to be injected inside the epic
 *   @param {Function} dependencies.getJSON the rxjs getJSON function
 *   @param {Function} dependencies.of the rxjs of function
 * @returns {Array} an array of actions to be dispatched
 **/
export const test = (action$, store, { getJSON, of }) => action$.ofType(types.HOME_TEST)
  .mergeMap(action => getJSON(`https://api.github.com/users/${action.payload}`)
    .map(response => actions.testSuccess(response))
    .takeUntil(action$.ofType(types.HOME_TEST_CANCEL))
    .catch(error => of(actions.testError(error)))
  );
