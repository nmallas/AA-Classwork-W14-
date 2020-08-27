import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import {fetchGifs} from "./util/apiUtil";
import configureStore from "./store";

window.fetchGifs = fetchGifs;
let store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
