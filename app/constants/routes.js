import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '@containers/home/index';

/**
 * constants/routes.js : Routes constant
 * @returns {HTMLElement} The matched component with the URL
 **/
export default () => (
  <Switch>
    <Route exact path="/" component={Home}/>
  </Switch>
);
