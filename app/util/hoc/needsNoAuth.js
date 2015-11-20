import React from 'react';
import {isFunction} from 'lodash';

import auth from 'app/store/auth';

export default function needsAuth(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: true
      };
    }

    componentWillMount() {
      auth.isLoggedIn().then((isLoggedIn) => {
        this.setState({isLoggedIn});

        if (isLoggedIn && isFunction(this.props.history.pushState)) {
          this.props.history.pushState(null, '/');
        }
      });
    }

    render() {
      if (this.state.isLoggedIn) {
        return <span />;
      } else {
        return <Component ref="node" {...this.props} {...this.state} auth={auth}/>;
      }
    }
  };
}
