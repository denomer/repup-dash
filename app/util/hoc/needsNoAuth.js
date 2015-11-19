import React from 'react';
import {isFunction} from 'lodash';

import auth from 'app/util/auth';

export default function needsAuth(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      auth.isLoggedIn().then((isLoggedIn) => {
        console.log(isLoggedIn);
        if (isLoggedIn && isFunction(this.props.history.pushState)) {
          this.props.history.pushState(null, '/');
        }
      });
    }

    render() {
      return <Component ref="node" {...this.props} {...this.state} />;
    }
  };
}
