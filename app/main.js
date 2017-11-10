import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from '@constants/routes';
import {store} from '@hoc';
import 'isomorphic-fetch';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

const history = syncHistoryWithStore(browserHistory, store);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Router history={history} routes={routes}/>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
