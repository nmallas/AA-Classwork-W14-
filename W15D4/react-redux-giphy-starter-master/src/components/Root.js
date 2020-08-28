import React from 'react';
import { Provider } from "react-redux";
import AppContainer from './AppContainer';

const Root = (props) => (
  <Provider store={props.store}>
    <AppContainer/>
  </Provider>
);

export default Root;
