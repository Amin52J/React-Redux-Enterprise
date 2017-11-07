import React from 'react';
import {Route} from 'react-router';

import App from '@containers/app/index';
import Home from '@containers/home/index';

export default (
  <Route component={App}>
    <Route path="/" component={Home}/>
  </Route>
);
