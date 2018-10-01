import React from 'react';
import { Test as TestElement } from '@elements';
import TestComponent from './assets/TestComponent';

/**
 * components/test : Test component
 * @returns {HTMLElement} returns test component's node
 **/
const Test = () => (
  <TestComponent className="test-component">
    Test Component
    <TestElement />
  </TestComponent>
);

Test.defaultProps = {};

Test.propTypes = {};

export default Test;
