// add all new epics here to combine and export
import { combineEpics } from 'redux-observable/lib/cjs/combineEpics';
import { test } from '@containers/app/epic';
import { test as homeTest } from '@containers/home/epic';

export default combineEpics(
  test,
  homeTest
);
