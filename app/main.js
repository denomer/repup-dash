import 'assets/css/bootstrap.min.css';
import 'assets/css/spacing-classes.css';
import 'assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.querySelector('main')
);
