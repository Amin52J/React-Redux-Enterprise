import React from 'react';
import * as actions from '@containers/home/action';
import {Test as TestComponent} from '@components';
import {reduxConnect} from '@hoc';

/**
 * containers/home : Home container
 * @param {Object} props the properties of the container
 * @param {Object} props.home the redux state of the container
 * @param {Object} props.home.test the test property of the container
 **/
class Home extends React.Component {
  render() {
    const {home: {test}} = this.props;

    return (
      <div className="home-page">
        Home Page
        <TestComponent/>
      </div>
    );
  }
}

export default reduxConnect(Home, actions);
