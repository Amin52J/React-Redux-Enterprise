import React from 'react';
import {mount} from 'enzyme';
import passPropsToChildren from '../index';

class Test extends React.Component {
  render() {
    return (
      <div>
        {passPropsToChildren(this.props.children, {test: 'working'})}
      </div>
    );
  }
}

describe('passPropsToChildren HOC - HOC', () => {
  it('passes props to the child components', () => {
    const component = mount(
      <Test>
        <h1>h1</h1>
        <h2>h2</h2>
      </Test>
    );

    expect(component.find('h1').props().test).toEqual('working');
    expect(component.find('h2').props().test).toEqual('working');
  });
});
