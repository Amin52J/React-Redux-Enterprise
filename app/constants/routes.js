import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '@containers/home/index';
import {passPropsToChild} from '@hoc';

/**
 * constants/routes.js : Routes constant
 * @param {Object} props The properties that are shared between all containers.
 * @returns {HTMLElement} The matched component with the URL
 **/
export default props => (
  <Switch>
    <Route exact path="/" component={passPropsToChild(Home, props)}/>
  </Switch>
);
