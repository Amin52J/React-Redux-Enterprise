import {ajax} from 'rxjs/observable/dom/ajax';
import {of} from 'rxjs/observable/of';
import * as types from '@constants/actionTypes';
import * as actions from '@containers/app/action';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

export const test = action$ => action$.ofType(types.TEST)
  .mergeMap(action => ajax.getJSON(`https://api.github.com/users/${action.payload}`)
    .map(response => actions.testSuccess(response))
    .catch(error => of(actions.testError(error)))
  );
