import './style/bootstrap.yeti.min.css';
import './style/spacing-classes.css';
import './style/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import Container from './Container';
import ReviewsGraph from './ReviewsGraph'

ReactDOM.render(
  <AppRouter />,
  document.querySelector('main') 
);