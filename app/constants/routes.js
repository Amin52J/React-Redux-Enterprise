import React from 'react';
import {Route, Switch} from 'react-router';
import Home from '@containers/home/index';
import {passPropsToChild} from '@hoc';

export default props => (
  <Switch>
    <Route exact path="/" component={passPropsToChild(Home, props)}/>
  </Switch>
);
