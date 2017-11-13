// Inheritance Inversion HOC

import * as hocActions from '@hoc/cleanOnUnmount/action';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function mapStateToProps(state) {
  return state;
}

function reduxConnect(WrappedComponent, actions) {
  return connect(mapStateToProps, actions)(WrappedComponent);
}


export default function (WrappedComponent, actions) {
  const Component = reduxConnect(WrappedComponent, actions);

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
