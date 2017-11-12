import React from 'react';
import {mount} from 'enzyme';
import cleanOnUnmount from '../index';
import renderer from 'react-test-renderer';
import store, {history} from '../../../constants/store';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

class Test extends React.Component {
  render() {
    return (
      <div className="clean-on-unmount">cleanOnUnmount</div>
    );
  }
}

const AttachedTest = cleanOnUnmount(Test);

describe('cleanOnUnmount HOC - HOC', () => {
  it('renders with no problem', () => {
    const component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AttachedTest/>
        </ConnectedRouter>
      </Provider>
    );
    const tree = renderer.create(component).toJSON();

    expect(component.find('div').first().hasClass('clean-on-unmount')).toEqual(true);
    expect(tree).toMatchSnapshot();
  });
});
