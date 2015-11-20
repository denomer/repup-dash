import React from 'react';

import Table from './competitiveAnalysis/Table';
import Tabs from './competitiveAnalysis/Tabs';
import data from './competitiveAnalysis/data';
import Graph from './competitiveAnalysis/Graph' 

export default class AnalysisView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitiveAnalysis: data
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <Graph graphAnalysisData={this.state.competitiveAnalysis.scoreBasedData} />
        </div>
        <div className="col-md-6">
          <Graph graphAnalysisData={this.state.competitiveAnalysis.reviewBasedData} />
        </div>
      </div>
    );
  }
}
