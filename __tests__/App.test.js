/**
 * This config is needed, otherwise throws error
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
