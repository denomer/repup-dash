import React from 'react';
import {Line,Pie} from 'react-chartjs';

export default class ReviewsGraph extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      dataLine : {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      },
    dataPie:[
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
      ]
    }
  }
 
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body review-graph-holder"> 
          <div className="row">
            <h4>Positive Reviews Graph</h4>
            <div className="col-md-8 reivew-lineGraph">
              <Line data={this.state.dataLine} width="600" height="250"/>
            </div>
            <div className="col-md-4 reivew-pieGraph">
              <Pie data={this.state.dataPie} width="250" height="100"/>
            </div>
          </div>
          <div className="row">
            <h4>Negative Reviews Graph</h4>
            <div className="col-md-8 reivew-lineGraph">
              <Line data={this.state.dataLine} width="600" height="250"/>
            </div>
            <div className="col-md-4 reivew-pieGraph">
              <Pie data={this.state.dataPie} width="250" height="100"/>
            </div>
          </div>
        </div>
      </div>  
    );
  };
}