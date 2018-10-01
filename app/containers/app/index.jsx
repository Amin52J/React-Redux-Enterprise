import React from 'react';
import Link from 'react-router-dom/Link';
import * as actions from '@containers/app/action';
import { reduxConnect } from '@hoc';
import Routes from '@constants/routes';
import AppContainer from './assets/AppContainer';

/**
 * containers/app : App container
 * @param {Object} props the properties of the container
 * @param {Object} props.app the redux state of the container
 * @param {Object} props.app.appData the appData property of the container
 **/
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
    const {
      app: { appData },
    } = this.props;

    return (
      <AppContainer>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
        App Page
        <Routes />
      </AppContainer>
    );
  }
}

export default reduxConnect(App, actions);
