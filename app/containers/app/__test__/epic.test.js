import React from 'react';
import * as epics from '../epic';
import * as types from '../../../constants/actionTypes';
import {ActionsObservable} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

const action$ = ActionsObservable.of({type: types.TEST, payload: '/api/test'});

describe('App Container - epics', () => {
  it('successfully gets test action result', done => {
    const getJSON = () => Observable.of({});
    const expectedOutputActions = [{type: types.TEST_SUCCESS, payload: {}}];
    epics.test(action$, null, {getJSON})
      .toArray()
      .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        }
      );
  });

  it('fails to get test action result', done => {
    const getJSON = () => Observable.throw('failed');
    const expectedOutputActions = [{type: types.TEST_ERROR, payload: 'failed'}];
    epics.test(action$, null, {getJSON, of: Observable.of})
      .toArray()
      .subscribe(actualOutputActions => {
          expect(actualOutputActions).toEqual(expectedOutputActions);
          done();
        }
      );
  });
});
