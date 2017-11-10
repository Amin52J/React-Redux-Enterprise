import React from 'react';
import * as actions from '@containers/app/action';
import {reduxConnect, passPropsToChildren} from '@hoc';

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
    console.log(this.props.app, appData);

    return (
      <div className="app">
        App Page
        {passPropsToChildren(this.props.children)}
      </div>
    );
  }
}

export default reduxConnect(App, actions);
