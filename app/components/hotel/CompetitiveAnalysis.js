import React from 'react';

import Table from './competitiveAnalysis/Table';
import Tabs from './competitiveAnalysis/Tabs';
import data from './competitiveAnalysis/data';
import CatagoryStatsTab from './competitiveAnalysis/CatagoryStatsTab';

export default class AnalysisView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitiveAnalysis: data.competitiveAnalysis
    };
  }

  render() {
    return (
        <div className="row">
          <div className="col-md-12">
            <Table analysisData={this.state.competitiveAnalysis} />
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <CatagoryStatsTab/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
