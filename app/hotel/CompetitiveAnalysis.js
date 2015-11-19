import React from 'react';

import Table from './competitiveAnalysis/Table';
import Tabs from './competitiveAnalysis/Tabs';
import data from './competitiveAnalysis/data';

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
        <div className="col-lg-12">
          <Table analysisData={this.state.competitiveAnalysis} />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Tabs analysisData={this.state.competitiveAnalysis} />
          </div>
        </div>
      </div>
    );
  }
}
