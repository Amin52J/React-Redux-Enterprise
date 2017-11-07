import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../action';
import * as types from '@constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App Action', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates TEST after successfully fetching data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'success'
      });
    });

    const expectedActions = {type: types.TEST, data: 'success'};

    const store = mockStore({data: {}});

    return store.dispatch(actions.test('/')).then(() => {
      const resp = {
        data: store.getActions()[0].data.data,
        type: types.TEST
      };
      expect(resp).toEqual(expectedActions);
    });
  });

  it('creates TEST_ERROR after failing to fetch data', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: 'error'
      });
    });

    const expectedActions = {
      type: types.TEST_ERROR,
      data: 'error'
    };

    const store = mockStore({data: {}});

    return store.dispatch(actions.test('/')).then(() => {
      const resp = {
        data: store.getActions()[0].data.response.data,
        type: types.TEST_ERROR
      };
      expect(resp).toEqual(expectedActions);
    });
  });
});
