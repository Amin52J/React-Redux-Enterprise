import React from 'react';
import * as actions from '@containers/app/action';
import {reduxConnect} from '@hoc';

class App extends React.Component {
  render() {
    const {app: {appData}} = this.props;
    console.log(appData);

    return (
      <div className="app">
        App Page
        {this.props.children}
      </div>
    );
  }
}

export default reduxConnect(App, actions);
