import React from 'react';
import {Link} from 'react-router';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelInfo: {title: 'Galaxy Hotel & Spa', subtitle: 'Sector 15, Gurgaon'}
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div>{this.state.hotelInfo.title}</div>
              <div><span className="text-muted small">{this.state.hotelInfo.subtitle}</span></div>
            </div>
          </div>
          <div className="list-group">
            <ul className="nav nav-pills nav-stacked">
              <li><Link to={`/${this.props.hotelId}`}>
                <span className="glyphicon glyphicon-home"></span> Home
              </Link></li>
              <li><Link to={`${this.props.hotelId}/reviews`}>
                <span className="glyphicon glyphicon-edit"></span> Reviews
              </Link></li>
              <li><Link to={`${this.props.hotelId}/competitive-analysis`}>
                <span className="glyphicon glyphicon-equalizer"></span> Comp Analysis
              </Link></li>
              {/* <li><Link to="/filtered-reviews">
                <span className="glyphicon glyphicon-filter"></span> Filtered Reviews
              </Link></li>
              <li><a href="#">
                <span className="glyphicon glyphicon-thumbs-up"></span> Social
              </a></li>
              <li><a href="#">
                <span className="glyphicon glyphicon-arrow-up"></span> RankUp
              </a></li>
              <li><a href="#">
                <span className="glyphicon glyphicon-plus"></span> Sync Accounts
              </a></li> */}
            </ul>
          </div>
        </div>
      </div>
  );
  }
}
