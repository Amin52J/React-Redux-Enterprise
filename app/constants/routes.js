import React from 'react';
import {Route, Switch} from 'react-router';
import {asyncComponent} from '@hoc';

const Home = asyncComponent(() => System.import(/* webpackChunkName: "js/chunks/home" */'@containers/home').then(module => module.default));
const Test = asyncComponent(() => System.import(/* webpackChunkName: "js/chunks/test-component" */'@components/test').then(module => module.default));

/**
 * constants/routes.js : Routes constant
 * @returns {HTMLElement} The matched component with the URL
 **/
export default () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/test" component={Test}/>
  </Switch>
);
