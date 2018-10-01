import React from 'react';
import * as actions from '@containers/home/action';
import { reduxConnect } from '@hoc';
import TestComponent from '@components/test/index';
import HomeContainer from './assets/HomeContainer';

/**
 * containers/home : Home container
 * @param {Object} props the properties of the container
 * @param {Object} props.home the redux state of the container
 * @param {Object} props.home.test the test property of the container
 **/
class Home extends React.Component {
  render() {
    const {
      home: { test },
    } = this.props;

    return (
      <HomeContainer>
        Home Page
        <TestComponent />
      </HomeContainer>
    );
  }
}

export default reduxConnect(Home, actions);
