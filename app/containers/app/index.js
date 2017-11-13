import React from 'react';
import * as actions from '@containers/app/action';
import {reduxConnect} from '@hoc';
import Routes from '@constants/routes';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.app.appData) {
      this.props.test('amin52j');
    }
  }

  render() {
    const {app: {appData}} = this.props;

    return (
      <div className="app">
        App Page
        <Routes/>
      </div>
    );
  }
}

export default reduxConnect(App, actions);
