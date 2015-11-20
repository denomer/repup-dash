import React from 'react';

import needsAuth from 'app/util/hoc/needsAuth';
import Topbar from './common/Topbar';
import LeftSidebar from './common/LeftSidebar';

import hotels from 'app/store/hotels';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelLoaded: false,
      overview: null,
      reviewStats: []
    };
  }

  componentWillMount() {
    const {hotelId} = this.props.routeParams;

    hotels.get(hotelId).then(({overview, reviewStats}) => {
      this.setState({
        hotelLoaded: true,
        overview,
        reviewStats
      });
    });
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
            <LeftSidebar {...this.props.routeParams}/>
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
