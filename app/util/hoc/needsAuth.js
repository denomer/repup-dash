import React from 'react';
import fetch from 'whatwg-fetch';

export function needsAuth(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      
    }
  };
}
