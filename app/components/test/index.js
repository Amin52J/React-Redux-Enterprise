import React from 'react';
import {Test as TestElement} from '@elements';

const Test = () => (
  <div className="test-component">
    Test Component
    <TestElement/>
  </div>
);

Test.defaultProps = {};

Test.propTypes = {};

export default Test;
