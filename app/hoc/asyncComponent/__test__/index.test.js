import React from 'react';
import { mount } from 'enzyme';
import asyncComponent from '../index';

class Test extends React.Component {
  render() {
    return <div className="async-component">reduxConnect</div>;
  }
}

const Home = asyncComponent(() => new Promise(resolve => resolve(Test)));

describe('asyncComponent HOC - HOC', () => {
  it('renders with no problem', done => {
    const component = mount(<Home />);
    setTimeout(() => {
      const { Component } = component.state();
      const mountedFinalComponent = mount(<Component />);
      expect(
        mountedFinalComponent
          .find('div')
          .first()
          .hasClass('async-component'),
      ).toEqual(true);
      done();
    }, 0);
  });
});
