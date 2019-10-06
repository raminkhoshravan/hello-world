/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
// import App from './App';
import Main from './src/stacks/MainStack';
// import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Redux/reducers/counterReducer';
const store =createStore(reducer)
const RNRedux = () => (
  <Provider store={store} >
    <Main />
  </Provider>
)
// AppRegistry.registerComponent('RentLux', () => RNRedux);
AppRegistry.registerComponent('FaraMadreseh', () => RNRedux);
