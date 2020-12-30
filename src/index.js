import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'mdb-ui-kit/css/mdb.min.css';
import { debugContextDevtool } from 'react-context-devtool';

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

debugContextDevtool(container);
