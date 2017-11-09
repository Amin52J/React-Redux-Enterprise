import React from 'react';
import * as actions from '@containers/app/action';
import {reduxConnect} from '@hoc';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.test('amin52j');
  }

  render() {
    const {app: {appData}} = this.props;
    console.log(this.props.app);

    return (
      <div className="app">
        App Page
        {this.props.children}
      </div>
    );
  }
}

export default reduxConnect(App, actions);
