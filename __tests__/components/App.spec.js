/**
 * @jest-environment jsdom
 */

import 'react-native';
import React from 'react';
import App from '../../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Render App', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toMatchSnapshot()
  });
})

