import React from 'react';
import {Line, Pie} from 'react-chartjs';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <Line data={this.props.dataLine} width="600" height="250"/>
        </div>
        <div className="col-md-4">
          <Pie data={this.props.dataPie} width="250" height="100"/>
        </div>
      </div>
    );
  }
}