// Props Proxy HOC

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function mapStateToProps (state) {
  return state;
}

export default function (WrappedComponent, actions, state = mapStateToProps) {
  return withRouter(connect(state, actions)(WrappedComponent));
}
