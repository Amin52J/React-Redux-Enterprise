// Inheritance Inversion HOC

import * as hocActions from '@hoc/cleanOnUnmount/action';
import connect from 'react-redux/lib/connect/connect';
import withRouter from 'react-router-dom/withRouter';

/**
 * hoc/cleanOnUnmount : maps state to props function
 * @param {Object} state the state of the container
 * @returns {Object} state
 **/
function mapStateToProps(state) {
  return state;
}

/**
 * hoc/cleanOnUnmount : connects state and actions to the component
 * @param {Object} WrappedComponent the react component that needs to be connected to the actions and state
 * @param {Object} actions the action factories of the component
 * @param {Object} state the state factory function
 * @returns {class} returns a react component
 **/
function reduxConnect(WrappedComponent, actions, state = mapStateToProps) {
  return connect(
    state,
    actions,
  )(WrappedComponent);
}

/**
 * hoc/cleanOnUnmount : creates a wrapper over the component and dispatches the reset action on componentWillUnmount
 * @param {Object} WrappedComponent the react component that needs to be connected to the actions and state
 * @param {Object} actions the action factories of the component
 * @param {Object} state the state factory function
 * @returns {class} returns the wrapped react component
 **/
export default function(WrappedComponent, actions, state) {
  const Component = reduxConnect(WrappedComponent, actions, state);

  class Enhancer extends Component {
    componentWillUnmount() {
      this.props.reset();
      if (super.componentWillUnmount) {
        super.componentWillUnmount();
      }
    }
  }

  return withRouter(reduxConnect(Enhancer, hocActions));
}
