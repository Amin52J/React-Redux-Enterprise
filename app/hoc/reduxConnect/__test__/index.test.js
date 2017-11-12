import React from 'react';
import {mount} from 'enzyme';
import reduxConnect from '../index';
import renderer from 'react-test-renderer';
import store, {history} from '../../../constants/store';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

class Test extends React.Component {
  render() {
    return (
      <div className="redux-connect">reduxConnect</div>
    );
  }
}

const AttachedTest = reduxConnect(Test);

describe('reduxConnect HOC - HOC', () => {
  it('renders with no problem', () => {
    const component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AttachedTest/>
        </ConnectedRouter>
      </Provider>
    );
    const tree = renderer.create(component).toJSON();

    expect(component.find('div').first().hasClass('redux-connect')).toEqual(true);
    expect(tree).toMatchSnapshot();
  });
});
