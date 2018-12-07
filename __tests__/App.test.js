/**
 * This config is needed, otherwise throws error
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Text, TouchableHighlight } from 'react-native';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('Snapshot testing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Smoke test', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
    expect(wrapper.length).toBe(1);
    expect(wrapper.contains(<Text>afdsaf</Text>)).toBe(true);
  });

  // it('Test mount', () => {
  //   const wrapper = mount(<App />);
  //   console.log(wrapper.debug());
  //   expect(wrapper.find(<Text />))
  //   expect(wrapper.contains(<Text>afdsaf</Text>)).toBe(true);
  // });
});
