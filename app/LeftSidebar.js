import React from 'react';
import {Link} from 'react-router'


export default class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-group">
        <ul className="nav nav-pills nav-stacked">
          <li><Link to="/" className="glyphicon glyphicon-home list-group-item">  Home</Link></li>
          <li><Link to="review-graph" className="glyphicon glyphicon-edit list-group-item">  Reviews</Link></li>
          <li><Link to="competitive-analysis" href="#" className="glyphicon glyphicon-equalizer list-group-item">  Comp Analysis</Link></li>
          <li><Link to="login" href="#" className="glyphicon glyphicon-equalizer list-group-item">  Login</Link></li>
          <li><a href="#" className="glyphicon glyphicon-arrow-up list-group-item"> Rank Up</a></li>
          <li><a href="#" className="glyphicon glyphicon-plus list-group-item"> Sync Accounts</a></li>
          <li><Link to="filtered-reviews" className="glyphicon glyphicon-filter list-group-item"> Filtered Reviews</Link></li>
        </ul>
      </div>
  );
  }
}
