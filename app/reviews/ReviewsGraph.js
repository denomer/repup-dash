import React from 'react';
import {Line,Pie} from 'react-chartjs';
import ReviewTimeline from './ReviewTimeline'

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
            label: "TripAdvisor"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Agoda"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "MakeMyTrip"
        }
      ]
    }
  }
 
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body"> 
          <div className="row">
            <div className="col-md-6 review-graph ">
            <h4>Negative Graph</h4>
              <Line data={this.state.dataLine} width="500" height="200"/>
              <Pie className="review-piegraph" data={this.state.dataPie} width="250" height="100"/>
            </div>
            <div className="col-md-6 review-graph">
            <h4>Positive Graph</h4>
              <Line data={this.state.dataLine} width="500" height="200"/>
              <Pie className="review-piegraph" data={this.state.dataPie} width="250" height="100"/>
            </div>
          </div>
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-body">
                <ReviewTimeline />
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  };
}