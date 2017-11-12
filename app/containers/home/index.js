import React from 'react';
import * as actions from '@containers/home/action';
import {Test as TestComponent} from '@components';
import {reduxConnect} from '@hoc';

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
