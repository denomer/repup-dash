import React from 'react';
import Topbar from '../Topbar';
import LeftSidebar from '../LeftSidebar';
import AnalysisTabelView from './AnalysisTabelView';
import AnalysisTabbedView from './AnalysisTabbedView.js'
import data from './data';


export default class AnalysisView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitiveAnalysis: data.competitiveAnalysis
    };
  }

  render() {
    return <div className="row">
      <div className="col-lg-12">
        <AnalysisTabelView analysisData={this.state.competitiveAnalysis} />
      </div>
      <div className="row">
        <div className="col-lg-12">
          <AnalysisTabbedView analysisData={this.state.competitiveAnalysis} />
        </div>
      </div>
    </div>

  }
}