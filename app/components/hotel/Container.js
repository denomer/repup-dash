import React from 'react';

import needsAuth from 'app/util/hoc/needsAuth';
import Topbar from './common/Topbar';
import LeftSidebar from './common/LeftSidebar';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Topbar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <LeftSidebar />
          </div>
          <div className="col-md-10">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.node
};

export default needsAuth(Container);
