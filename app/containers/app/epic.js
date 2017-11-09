import * as types from '@constants/actionTypes';
import * as actions from '@containers/app/action';

export const test = (action$, store, {getJSON, of}) => action$.ofType(types.TEST)
  .mergeMap(action => getJSON(`https://api.github.com/users/${action.payload}`)
    .map(response => actions.testSuccess(response))
    .takeUntil(action$.ofType(types.TEST_CANCEL))
    .catch(error => of(actions.testError(error)))
  );
