import React from 'react';
import { Test as TestElement } from '@elements';

import(/* webpackChunkName: "/css/chunks/components/test-component" */ './_index.scss');

/**
 * components/test : Test component
 * @returns {HTMLElement} returns test component's node
 **/
const Test = () => (
  <div className="test-component">
    Test Component
    <TestElement />
  </div>
);

Test.defaultProps = {};

Test.propTypes = {};

export default Test;
