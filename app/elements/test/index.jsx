import React from 'react';

import TestElement from './assets/TestElement';

/**
 * elements/test : Test elements
 * @returns {HTMLElement} returns test element's node
 **/
const Test = () => <TestElement className="test-element">Test Element</TestElement>;

Test.defaultProps = {};

Test.propTypes = {};

export default Test;
