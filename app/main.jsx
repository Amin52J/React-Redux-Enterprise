/* eslint-disable no-unused-expressions */

import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import { injectGlobal } from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/lib/persistStore';
import { ConnectedRouter } from 'react-router-redux';
import App from '@containers/app/index';
import store, { history } from '@constants/store';
import styleReset from '@constants/styleReset';
import globalStyles from '@constants/globalStyles';

const persistor = persistStore(store);
injectGlobal`
  ${styleReset}
  ${globalStyles}
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
);
