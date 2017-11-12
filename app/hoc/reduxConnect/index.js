// Props Proxy HOC

import {connect} from 'react-redux';

function mapStateToProps (state) {
  return state;
}

export default function (WrappedComponent, actions, states) {
  return connect(states || mapStateToProps, actions)(WrappedComponent);
}
