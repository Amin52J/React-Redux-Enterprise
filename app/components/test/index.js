import React from 'react';
import {Test as TestElement} from '@elements';

/**
 * components/test : Test component
 * @returns {HTMLElement} returns test component's node
 **/
const Test = () => (
  <div className="test-component">
    Test Component
    <TestElement/>
  </div>
);

Test.defaultProps = {};

Test.propTypes = {};

export default Test;
