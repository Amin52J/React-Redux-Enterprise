import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import store, {history} from '@constants/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import ConnectedRouter from 'react-router-redux/ConnectedRouter';
import App from '@containers/app/index';

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
