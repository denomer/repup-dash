import React from 'react';

import Graph from './reviews/Graph';
import Timeline from './reviews/Timeline';
import data from './reviews/data';

export default class ReviewsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: data
    };
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body review-graph-holder">
          <div className="row">
            <div className="col-md-12">
              <h4>Positive Reviews Graph</h4>
              <Graph {...this.state.graph} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h4>Negative Reviews Graph</h4>
              <Graph {...this.state.graph} />
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-body">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
