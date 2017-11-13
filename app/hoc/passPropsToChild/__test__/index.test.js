import React from 'react';
import {mount} from 'enzyme';
import passPropsToChild from '../index';

class Test extends React.Component {
  render() {
    return (
      <div/>
    );
  }
}

const TestWithProps = passPropsToChild(Test, {test: 'working'});

describe('passPropsToChild HOC - HOC', () => {
  it('passes props to the child component', () => {
    const component = mount(
      TestWithProps()
    );

    expect(component.props().test).toEqual('working');
  });
});
