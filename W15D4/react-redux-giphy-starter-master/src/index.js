import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import {fetchGifs} from "./util/apiUtil"

window.fetchGifs = fetchGifs;

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
