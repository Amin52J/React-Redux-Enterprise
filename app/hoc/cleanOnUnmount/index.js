// Inheritance Inversion HOC

import * as hocActions from '@hoc/cleanOnUnmount/action';
import reduxConnect from '@hoc/reduxConnect';

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
  return reduxConnect(Enhancer, hocActions);
}
