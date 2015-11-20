import 'assets/css/bootstrap.flatly.min.css';
import 'assets/css/spacing-classes.css';
import 'assets/css/main.css';

import 'promise.prototype.finally';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

import localStorageBuster from './util/localStorageBuster';
import auth from './store/auth';

localStorageBuster();

auth.load();

ReactDOM.render(
  <AppRouter />,
  document.querySelector('main')
);
