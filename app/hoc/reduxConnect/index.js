// Props Proxy HOC

import {connect} from 'react-redux';

function mapStateToProps(state) {
  return state;
}

export default function (WrappedComponent, actions) {
  return connect(mapStateToProps, actions)(WrappedComponent);
}
