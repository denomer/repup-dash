import React from 'react';

import Graph from './reviews/Graph';
import TimeLineTabs from './reviews/TimeLineTabs';
import TabaleData from  './reviews/Table'
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
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-body review-graph-holder">
            <div className="col-md-6">
              <h4>Negative Reviews Graph</h4>
              <Graph lineData={this.state.graph.negativeDataLine} pieData={this.state.graph.dataPie} />
            </div>
            <div className="col-md-6">
              <h4>Positive Reviews Graph</h4>
              <Graph lineData={this.state.graph.positiveDataLine} pieData={this.state.graph.dataPie} />
            </div>
          </div>
        </div>    
            <div className="panel panel-default">
              <div className="panel-body">
                <TabaleData {...this.state.graph} />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-body">
                <TimeLineTabs />
              </div>
            </div>
          </div>
    );
  }
}
