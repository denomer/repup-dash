import React from 'react';
import {Bar} from 'react-chartjs';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
   
    return (
      <div className="row">
        <div className="col-md-6">
          <Bar data={this.props.graphAnalysisData} width="500" height="200"/>
        </div>
      </div>
    );
  }
}