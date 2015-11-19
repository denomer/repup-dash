import React from 'react';
import {Link} from 'react-router';

export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-group">
        <ul className="nav nav-pills nav-stacked">
          <li><Link to="/">
            <span className="glyphicon glyphicon-home"></span> Home
          </Link></li>
          <li><Link to="/review-graph">
            <span className="glyphicon glyphicon-edit"></span> Reviews
          </Link></li>
          <li><Link to="/competitive-analysis">
            <span className="glyphicon glyphicon-equalizer"></span> Comp Analysis
          </Link></li>
          <li><Link to="/filtered-reviews">
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
          </a></li>
        </ul>
      </div>
  );
  }
}
