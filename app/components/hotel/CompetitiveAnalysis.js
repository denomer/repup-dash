import React from 'react';

import data from './competitiveAnalysis/data';
import Graph from './competitiveAnalysis/Graph' 
import CatagoryStatsTab from './competitiveAnalysis/StatsTab';
import Otatabs from './competitiveAnalysis/Otatabs';

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
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <CatagoryStatsTab />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <Otatabs />
            </div>
          </div>
        </div>
      </div>  
    );
  }
}
