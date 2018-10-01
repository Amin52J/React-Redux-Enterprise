import React from 'react';
import { mount } from 'enzyme';
import Test from '../index';

describe('Test Component', () => {
  it('renders with no problem', () => {
    const component = mount(<Test />);

    expect(
      component
        .find('div')
        .first()
        .hasClass('test-element'),
    ).toEqual(true);
  });
});
