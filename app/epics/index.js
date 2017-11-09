import {combineEpics} from 'redux-observable';
import {test} from '@containers/app/epic';
import {test as homeTest} from '@containers/home/epic';

export default combineEpics(
  test,
  homeTest
);