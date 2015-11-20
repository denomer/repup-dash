import React from 'react';

import needsAuth from 'app/util/hoc/needsAuth';
import Overview from './Overview';
import Properties from './Properties';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: this.props.auth.session.client,
      hotels: this.props.auth.session.hotels,
      overview: this.props.auth.session.overview
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Overview {...this.state} />
          </div>
        </div>

        <div className="row marg-md-top-12 marg-md-bottom-12">
          <div className="col-md-12"><hr/></div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Properties {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default needsAuth(Container);
