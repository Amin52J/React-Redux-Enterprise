import React from 'react';
import {Test as TestElement} from '@elements';

const Test = props => (
  <div className="test-component">
    Test Component
    {props.text}
    <TestElement/>
  </div>
);

Test.defaultProps = {};

Test.propTypes = {};

export default Test;
