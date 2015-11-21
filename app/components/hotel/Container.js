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
      hotel: null
    };
  }

  componentWillMount() {
    const {hotelId} = this.props.routeParams;

    hotels.get(hotelId).then((hotel) => {
      this.setState({hotelLoaded: true, hotel});
    });
  }

  render() {
    if (this.state.hotelLoaded) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Topbar hotel={this.state.hotel}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <LeftSidebar {...this.props.routeParams} hotel={this.state.hotel}/>
            </div>
            <div className="col-md-10">
              {this.props.children && React.cloneElement(this.props.children,{
                hotel:this.state.hotel                
              })} 
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default needsAuth(Container);
