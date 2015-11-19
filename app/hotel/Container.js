import React from 'react';
import Topbar from './common/Topbar';
import LeftSidebar from './common/LeftSidebar';

export default class Container extends React.Component {
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

          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-2">
                  <LeftSidebar />
                </div>
                <div className="col-md-10">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.node
};
