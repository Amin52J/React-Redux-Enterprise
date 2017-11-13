// Props Proxy HOC

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

/**
 * hoc/reduxConnect : maps state to props function
 * @param {Object} state the state of the container
 * @returns {Object} state
 **/
function mapStateToProps (state) {
  return state;
}

/**
 * hoc/reduxConnect : connects state and actions to the component
 * @param {Object} WrappedComponent the react component that needs to be connected to the actions and state
 * @param {Object} actions the action factories of the component
 * @param {Object} state the state factory function
 * @returns {class} returns a react component
 **/
export default function (WrappedComponent, actions, state = mapStateToProps) {
  return withRouter(connect(state, actions)(WrappedComponent));
}
