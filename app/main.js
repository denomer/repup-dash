import 'assets/css/bootstrap.min.css';
import 'assets/css/spacing-classes.css';
import 'assets/css/main.css';

import 'promise.prototype.finally';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

import auth from './util/auth';

auth.session.load();

ReactDOM.render(
  <AppRouter />,
  document.querySelector('main')
);
