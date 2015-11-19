import React from 'react';
import auth from 'app/util/auth';

export function needsAuth(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      if (auth.isLoggedIn()) {
        this.refs.node.props.history.pushState(null, '/login');
      }
    }

    render() {
      return <Component ref="node" {...this.props} {...this.state} />;
    }
  };
}
