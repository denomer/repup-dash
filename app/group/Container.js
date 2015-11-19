import React from 'react';

import needsAuth from 'app/util/hoc/needsAuth';
import Overview from './Overview';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Overview />
          </div>
        </div>
      </div>
    );
  }
}

export default needsAuth(Container);
