import React from 'react';

import Graph from './reviews/Graph';
import TimeLineTabs from './reviews/TimeLineTabs';
import TabaleData from  './reviews/Table'
import hotels from 'app/store/hotels';
import data from './reviews/data'
import {
  calculateReviewsLineGraphData,
  calculateReviewsPieGraphData
} from './reviews/calculations';

export default class ReviewsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    graph: data
    };
  }

  render() {
    console.log(this.props);
    const negativeReviewsLineGraphData = calculateReviewsLineGraphData(this.props.hotel, 'negative');
    const positiveReviewsLineGraphData = calculateReviewsLineGraphData(this.props.hotel, 'positive');
    const negativeReviewsPieGraphData = calculateReviewsPieGraphData(this.props.hotel,'negative');
    const positiveReviewsPieGraphData = calculateReviewsPieGraphData(this.props.hotel,'positive');


    const negativeDataLine = {};
    negativeDataLine.labels = negativeReviewsLineGraphData.xAxis;
    negativeDataLine.datasets = [];
    negativeDataLine.datasets.push({
      label: 'negative Reviews',
      fillColor: 'rgba(255,0,0,0.3)',
      strokeColor: 'rgba(255,0,0,0.3)',
      pointColor: 'rgba(255,0,0,0.3)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: negativeReviewsLineGraphData.yAxis.map((y)=>{
        return y.total;
      })
    });

    const positiveDataLine = {};
    positiveDataLine.labels = negativeReviewsLineGraphData.xAxis;
    positiveDataLine.datasets = [];
    positiveDataLine.datasets.push({
      label: 'postive Reviews',
      fillColor: 'rgba(0,255,0,0.3)',
      strokeColor: 'rgba(0,255,0,0.3)',
      pointColor: 'rgba(0,255,0,0.3)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: positiveReviewsLineGraphData.yAxis.map((y)=>{
        return y.total;
      })
    });

    const negativePieData = [];
    negativePieData.push(
      {
      value: negativeReviewsPieGraphData["tripadvisor"],
      color: '#F7464A',
      highlight: '#FF5A5E',
      label: 'TripAdvisor'
      },
      {
        value: negativeReviewsPieGraphData["goibibo"],
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'goibibo'
      },
      {
        value: negativeReviewsPieGraphData["booking"],
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'booking'
      },
      {
        value: negativeReviewsPieGraphData["agoda"],
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Agoda'
      },
      {
        value: negativeReviewsPieGraphData["mmt"],
        color: 'black',
        highlight: '#FFC870',
        label: 'MakeMyTrip'
      }
    );

    const positivePieData = [];
    positivePieData.push(
      {
      value: positiveReviewsPieGraphData["tripadvisor"],
      color: '#F7464A',
      highlight: '#FF5A5E',
      label: 'TripAdvisor'
      },
      {
        value: positiveReviewsPieGraphData["goibibo"],
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'goibibo'
      },
      {
        value: positiveReviewsPieGraphData["booking"],
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'booking'
      },
      {
        value: positiveReviewsPieGraphData["agoda"],
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Agoda'
      },
      {
        value: positiveReviewsPieGraphData["mmt"],
        color: 'black',
        highlight: '#FFC870',
        label: 'MakeMyTrip'
      }
    );

    return (
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-body review-graph-holder">
            <div className="col-md-6">
              <h4>Negative Reviews Graph</h4>
              <Graph lineData={negativeDataLine} pieData={negativePieData} />
            </div>
            <div className="col-md-6">
              <h4>Positive Reviews Graph</h4>
              <Graph lineData={positiveDataLine} pieData={positivePieData} />
            </div>
          </div>
        </div>    
        <div className="panel panel-default">
          <div className="panel-body">
            <TabaleData {...this.state.graph} hotel={this.props.hotel} />
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-body">
            <TimeLineTabs hotel={this.props.hotel} />
          </div>
        </div> 
      </div>
    );
  }
}

