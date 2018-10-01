import React from 'react';
import { mount } from 'enzyme';
import Home from '../index';
import store, { history } from '../../../constants/store';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

describe('Home Container - Container', () => {
  it('renders with no problem', () => {
    const component = mount(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Home />
        </ConnectedRouter>
      </Provider>,
    );
    const tree = renderer.create(component).toJSON();

    expect(
      component
        .find('div')
        .first()
        .hasClass('home-page'),
    ).toEqual(true);
    expect(tree).toMatchSnapshot();
  });
});
