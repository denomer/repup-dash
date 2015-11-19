import React from 'react';
import {Line, Pie} from 'react-chartjs';

import ReviewTimeline from './ReviewTimeline';
import data from './data';

export default class ReviewsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body review-graph-holder">
          <div className="row">
            <div className="col-md-12">
              <h4>Positive Reviews Graph</h4>
              <div className="row">
                <div className="col-md-8">
                  <Line data={this.state.dataLine} width="600" height="250"/>
                </div>
                <div className="col-md-4">
                  <Pie data={this.state.dataPie} width="250" height="100"/>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h4>Negative Reviews Graph</h4>
              <div className="row">
                <div className="col-md-8">
                  <Line data={this.state.dataLine} width="600" height="250"/>
                </div>
                <div className="col-md-4">
                  <Pie data={this.state.dataPie} width="250" height="100"/>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default">
            <div className="panel-body">
              <ReviewTimeline />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
