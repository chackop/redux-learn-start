import { AppRegistry } from "react-native";

import App from "./src/app";
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);

const AppContainer = () => {
  <Provider store={store}>
      <App />
  </Provider>
}


AppRegistry.registerComponent("reduxlearningstarter", () => AppContainer);
