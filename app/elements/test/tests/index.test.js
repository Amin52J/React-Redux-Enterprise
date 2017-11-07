import React from 'react';
import {mount, shallow} from 'enzyme';
import Test from '../index';

describe('Test Element', () => {
  it('renders with no problem', () => {
    const component = shallow(
      <Test/>
    );
    expect(component.hasClass('test-element')).toEqual(true);
  });

  it('gets the text property', () => {
    const component = mount(
      <Test text="amin"/>
    );
    expect(component.props().text).toEqual('amin');
  });
});
