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
          <li><Link to="review-graph" className="glyphicon glyphicon-share list-group-item">  Reviews Graph</Link></li>
          <li><Link to="filtered-reviews" className="glyphicon glyphicon-share list-group-item">  Filtered Reviews</Link></li>
          
        </ul>
      </div>
  );
  }
}
