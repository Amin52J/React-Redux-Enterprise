import * as types from '@constants/actionTypes';
import * as actions from '@containers/home/action';

export const test = (action$, store, {getJSON, of}) => action$.ofType(types.HOME_TEST)
  .mergeMap(action => getJSON(`https://api.github.com/users/${action.payload}`)
    .map(response => actions.testSuccess(response))
    .takeUntil(action$.ofType(types.HOME_TEST_CANCEL))
    .catch(error => of(actions.testError(error)))
  );
