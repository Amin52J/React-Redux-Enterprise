import React from 'react';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';
import { asyncComponent } from '@hoc';

const Home = asyncComponent(() => import(/* webpackChunkName: "/js/chunks/home" */'@containers/home').then(module => module.default));
const Test = asyncComponent(() => import(/* webpackChunkName: "/js/chunks/test-component" */'@components/test').then(module => module.default));
/**
 * constants/routes.js : Routes constant
 * @returns {HTMLElement} The matched component with the URL
 **/
export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/test" component={Test} />
  </Switch>
);
