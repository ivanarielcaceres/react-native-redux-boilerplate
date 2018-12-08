import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainContainer from './src/containers/Main';
import store from './src/store/store';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}
